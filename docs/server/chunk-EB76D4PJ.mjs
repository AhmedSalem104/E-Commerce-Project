import './polyfills.server.mjs';
import{a as U}from"./chunk-GR3UZDJ5.mjs";import"./chunk-KU5BKOKS.mjs";import{m as T}from"./chunk-GJZWYCQF.mjs";import"./chunk-AZSGSTTY.mjs";import{Bb as C,Cb as m,Jb as a,Kb as b,Lb as h,Pa as y,Qb as O,Sb as E,Ta as c,Ua as S,ba as v,cb as d,ib as w,kb as x,la as p,ma as u,ob as g,pb as I,qb as k,rb as P,sb as i,tb as o,ub as _,xb as f}from"./chunk-3OXFT4D6.mjs";import"./chunk-VVCT4QZE.mjs";var M=n=>["/Orders",n];function V(n,s){if(n&1){let r=f();i(0,"div",5),_(1,"img",12),i(2,"div",13)(3,"h2",14),a(4),o(),i(5,"div",15)(6,"span",16),a(7),i(8,"span",9),a(9,"EGP"),o()(),i(10,"div",17)(11,"button",18),C("click",function(){let e=p(r).$implicit,l=m(2);return u(l.UpdateCartProductQuantity(e.product._id,e.count=e.count-1))}),a(12,"-"),o(),i(13,"span",19),a(14),o(),i(15,"button",18),C("click",function(){let e=p(r).$implicit,l=m(2);return u(l.UpdateCartProductQuantity(e.product._id,e.count=e.count+1))}),a(16,"+"),o(),i(17,"button",20),C("click",function(){let e=p(r).$implicit,l=m(2);return u(l.RemoveSpecificCartItem(e.product._id))}),_(18,"i",21),o()()()()()}if(n&2){let r,t=s.$implicit;c(),x("src",t.product.imageCover,y),c(3),b(t.product.title==null||(r=t.product.title.split(" "))==null||(r=r.splice(0,3))==null?null:r.join(" ")),c(3),h("",t==null?null:t.price," "),c(7),b(t.count)}}function F(n,s){if(n&1){let r=f();i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),k(5,V,19,4,"div",5,I),o(),i(7,"div",6)(8,"div")(9,"h2",7),a(10,"Order Summary"),o(),i(11,"p",8),a(12),i(13,"span",9),a(14,"EGP"),o()()(),i(15,"button",10),C("click",function(){p(r);let e=m();return u(e.ClearUserCart())}),a(16,"Clear All"),o(),i(17,"button",11),a(18,"Checkout"),o()()()()()()}if(n&2){let r,t=m();c(5),P(t.data().products),c(7),h(" ",(r=t.data())==null?null:r.totalCartPrice," "),c(3),x("disabled",t.clearCart()),c(2),x("disabled",t.cartEmpty())("routerLink",E(4,M,t.data()._id))}}function L(n,s){n&1&&(i(0,"div",0)(1,"div",22)(2,"h4",23),a(3,"No items in your cart"),o()()())}var $=(()=>{let s=class s{constructor(t){this._CartService=t,this.data=d({}),this.ItemCount=d(-1),this.loadingCountClass=d("hidden"),this.cartEmpty=d(!0),this.clearCart=d(!0)}ngOnInit(){this.getLoggedUserCart()}getLoggedUserCart(){this.StopApi=this._CartService.getLoggedUserCart().subscribe({next:t=>{t.numOfCartItems==0?(this.ItemCount.set(0),this.cartEmpty.set(!0),this.clearCart.set(!0),console.log(t.numOfCartItems)):(console.log(t.numOfCartItems),this.ItemCount.set(t.numOfCartItems),this.cartEmpty.set(!1),this.clearCart.set(!1),this.data.set(t.data))},error:t=>{console.log(t.message)}})}UpdateCartProductQuantity(t,e){this.loadingCountClass.set("flex"),this.StopApi=this._CartService.UpdateCartProductQuantity(t,e.toString()).subscribe({next:l=>{this.loadingCountClass.set("hidden"),this.data.set(l.data),this.ItemCount.set(l.numOfCartItems)}})}RemoveSpecificCartItem(t){this.StopApi=this._CartService.RemoveSpecificCartItem(t).subscribe({next:e=>{this._CartService.CartCount.set(e.numOfCartItems),this.data.set(e.data),this.ItemCount.set(e.numOfCartItems)}})}ClearUserCart(){this.StopApi=this._CartService.ClearUserCart().subscribe({next:t=>{this.getLoggedUserCart(),this.data.set(t.data),this._CartService.CartCount.set(0),this.ItemCount.set(t.numOfCartItems)}})}ngOnDestroy(){this.StopApi.unsubscribe()}};s.\u0275fac=function(e){return new(e||s)(S(U))},s.\u0275cmp=v({type:s,selectors:[["app-cart"]],standalone:!0,features:[O],decls:2,vars:2,consts:[[1,"relative","min-h-screen"],[1,"container","mx-auto","px-4","py-6"],[1,"bg-gray-200","shadow-md","rounded-lg","p-4"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-12","gap-6"],[1,"md:col-span-2","lg:col-span-9","space-y-4"],[1,"bg-white","p-4","shadow","rounded-lg","flex","flex-col","md:flex-row","items-start","md:items-center","space-y-4","md:space-y-0","md:space-x-4"],[1,"md:col-span-2","lg:col-span-3","bg-gray-100","p-4","shadow","rounded-lg","space-y-4","sticky","top-0","md:top-32","self-start"],[1,"text-lg","md:text-xl","font-bold","main-color"],[1,"text-lg","mt-2","text-black","font-semibold"],[1,"pr-2","main-color"],[1,"w-full","bg-red-500","text-white","p-3","rounded",3,"click","disabled"],[1,"w-full","bg-blue-500","text-white","p-3","rounded",3,"disabled","routerLink"],["alt","Product Image",1,"w-full","md:w-24","h-24","object-cover","rounded",3,"src"],[1,"flex-1"],[1,"text-lg","font-bold"],[1,"flex","flex-col","md:flex-row","items-start","md:items-center","justify-between","mt-2","space-y-2","md:space-y-0","md:space-x-2"],[1,"text-gray-800","font-semibold"],[1,"flex","items-center","space-x-2"],[1,"border","border-green-400","text-black","px-3","py-1","rounded","font-semibold",3,"click"],[1,"text-lg","w-8","text-center"],["title","Remove From Cart",1,"bg-white","text-red-500","px-4","py-2","rounded","font-semibold",3,"click"],[1,"fa","fa-trash"],[1,"container","mx-auto","px-4","py-6","bg-gray-200"],[1,"text-center","text-2xl","sm:text-3xl","main-color"]],template:function(e,l){e&1&&w(0,F,19,6,"div",0)(1,L,4,0,"div",0),e&2&&(g(0,l.ItemCount()!=0?0:-1),c(),g(1,l.ItemCount()==0?1:-1))},dependencies:[T],styles:['.loading[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#fff;justify-items:center;align-items:center;z-index:999}.loadingTotalPrice[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#e5e7eb;justify-items:center;align-items:center;z-index:999}.loaderTotalPrice[_ngcontent-%COMP%]{width:48px;height:48px;display:inline-block;position:relative;border-width:3px 2px 3px 2px;border-style:solid dotted solid dotted;border-color:var(--main-color) rgba(255,255,255,.3) var(--main-color) rgba(151,107,93,.3);border-radius:50%;box-sizing:border-box;animation:1s _ngcontent-%COMP%_rotate linear infinite}.loaderTotalPrice[_ngcontent-%COMP%]:before, .loaderTotalPrice[_ngcontent-%COMP%]:after{content:"";top:0;left:0;position:absolute;border:10px solid transparent;border-bottom-color:var(--main-color);transform:translate(-10px,19px) rotate(-35deg)}.loaderTotalPrice[_ngcontent-%COMP%]:after{border-color:var(--main-color) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);transform:translate(32px,3px) rotate(-35deg)}@keyframes _ngcontent-%COMP%_rotate{to{transform:rotate(360deg)}}']});let n=s;return n})();export{$ as CartComponent};
