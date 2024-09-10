import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../Core/services/Order/order.service';
import Swal from 'sweetalert2';
import { OrderObj } from '../../Core/interfaces/Order/CreateCashOrder';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../Core/services/Cart/cart.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  isLoading: boolean = false;
  cart_Id: string | null = ""

  OrderData!:OrderObj
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _OrderService = inject(OrderService)
  private readonly _Router = inject(Router)
  private readonly _ToastrService = inject(ToastrService)
  private readonly _CartService = inject(CartService)

  OrdersForm: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z\s-]{2,50}$/)])
  })

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: param => {
        this.cart_Id = param.get('id')
      }
    })

  }
  submitOrdersCredit() {

    this.fetchApiCredit(this.cart_Id, this.OrdersForm.value)
  }
  fetchApiCredit(id: string | null, data: object) {
    this._OrderService.CheckoutCreadit(id, data).subscribe({
      next: res => {
        if (res.status === 'success') {
          this.isLoading = false
          res.session.url;
          window.open(res.session.url, '_self')
        }
      },
    })
  }
  submitOrdersCash() {
    this.fetchApiCash(this.cart_Id, this.OrdersForm.value)
  }
  fetchApiCash(id: string | null, data: OrderObj) {
    this._OrderService.CheckoutCash(id, data).subscribe({
      next: res => {
        if (res.status === 'success') {
          this.CartCountChange()
          this.OrderData = res
          this.isLoading = false
          this.Success(res.status)
          this._Router.navigate(['/allorders'])  
        }
      },
    })
  }
  openPaymentPopup() {
    if(this.OrdersForm.valid) {
      this.isLoading = true
      Swal.fire({
        title: 'Select Payment Method',

        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Credit',
        cancelButtonText: 'Cash',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.processPayment('Credit');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.processPayment('Cash');
        }
      });
    }
    else {
      this.OrdersForm.markAllAsTouched()
    }
  }
  processPayment(method: string) {
    if (method == "Credit") {
      this.submitOrdersCredit()
    }
    else if (method == "Cash") {
      this.submitOrdersCash()
    }
  }
  Success(message: string) {
    this._ToastrService.success('Order confirm','FreshCart' ,{
      timeOut: 2000
    })
  }
  CartCountChange() {
    this._CartService.getLoggedUserCart().subscribe({
      next: res => {
        this._CartService.CartCount.set(res.numOfCartItems)
      },
    })
  }
}
