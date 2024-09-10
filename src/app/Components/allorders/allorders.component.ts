import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../Core/services/Order/order.service';
import { Router } from '@angular/router';
import { Data, OrderObj } from '../../Core/interfaces/Order/CreateCashOrder';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [JsonPipe,CurrencyPipe,DatePipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit {

  UserData!: any

  OrderData!:any
  private readonly _OrderService = inject(OrderService)
  private readonly _Router = inject(Router)
  ngOnInit(): void {
    this.UserData = this._OrderService.decodeToken()
    this.fetchAPi(this.UserData.id)
  }

  fetchAPi(User_Id: string) {
    this._OrderService.getUserorders(User_Id).subscribe({
      next: (res) => {
        console.log(res);  
        this.OrderData = res
      },
    })
  }


 
  openItems: Set<string> = new Set<string>();

  // لتبديل حالة ظهور محتوى ال Accordion
  toggleAccordion(itemId: string) {
    if (this.openItems.has(itemId)) {
      this.openItems.delete(itemId);
    } else {
      this.openItems.add(itemId);
    }
  }

  isOpen(itemId: string): boolean {
    return this.openItems.has(itemId);
  }
}
