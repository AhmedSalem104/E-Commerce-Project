import{a as p}from"./chunk-G5KA7DMQ.js";import{t as c,y as o}from"./chunk-VCBYZZMY.js";import{Z as n,ca as a,m as i}from"./chunk-Y44U2H2M.js";var f=(()=>{let e=class e{constructor(t){this._HttpClient=t,this.userData=new i(null)}CheckoutCreadit(t,r){return this._HttpClient.post(`${o.baseUrl}/api/v1/orders/checkout-session/${t}?url=${o.UrlServer}`,{shippingAddress:r})}CheckoutCash(t,r){return this._HttpClient.post(`${o.baseUrl}/api/v1/orders/${t}`,{shippingAddress:r})}getUserorders(t){return this._HttpClient.get(`${o.baseUrl}/api/v1/orders/user/${t}`)}decodeToken(){let t=JSON.stringify(localStorage.getItem("userToken")),r=p(t);return this.userData.next(r),this.userData.getValue()}};e.\u0275fac=function(r){return new(r||e)(a(c))},e.\u0275prov=n({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{f as a};
