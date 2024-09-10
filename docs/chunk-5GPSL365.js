import{a as k}from"./chunk-MPCPW2LT.js";import{a as T,b as h,c as A,d as N,h as R,i as q,j as D,k as G,m as V}from"./chunk-AOKGKR5S.js";import{l as B}from"./chunk-ADMVPZPW.js";import"./chunk-G5KA7DMQ.js";import{h as x,i as E}from"./chunk-OQDS24CR.js";import{h as S}from"./chunk-VCBYZZMY.js";import{Eb as w,Fb as F,Mb as a,Tb as y,Wa as s,Wb as v,da as f,ga as C,lb as p,nb as _,rb as c,vb as n,wb as i,xb as b}from"./chunk-Y44U2H2M.js";var M=(e,o)=>({"is-valid":e,"is-invalid":o});function j(e,o){e&1&&(n(0,"p"),a(1,"Email is Required"),i())}function P(e,o){e&1&&(n(0,"p"),a(1,"Enter Valid Email "),i())}function I(e,o){if(e&1&&(n(0,"div",6),p(1,j,2,0,"p")(2,P,2,0),i()),e&2){let d,m=F();s(),c(1,(d=m.LoginForm.get("email"))!=null&&d.getError("required")?1:(d=m.LoginForm.get("email"))!=null&&d.getError("email")?2:-1)}}function O(e,o){e&1&&(n(0,"p"),a(1,"password is Required"),i())}function U(e,o){e&1&&(n(0,"p"),a(1,"must be at least 6 chars"),i())}function W(e,o){if(e&1&&(n(0,"div",6),p(1,O,2,0,"p")(2,U,2,0),i()),e&2){let d,m=F();s(),c(1,(d=m.LoginForm.get("password"))!=null&&d.getError("required")?1:(d=m.LoginForm.get("password"))!=null&&d.getError("pattern")?2:-1)}}function z(e,o){e&1&&(n(0,"span",12),a(1,"Login"),i(),n(2,"span"),b(3,"i",13),i())}function H(e,o){e&1&&(n(0,"span"),a(1,"Login"),i())}var ie=(()=>{let o=class o{constructor(){this._AuthService=f(k),this._FormBuilder=f(G),this._Router=f(x),this._ToastrService=f(B),this.isLoading=!1,this.LoginForm=this._FormBuilder.group({email:[null,[h.required,h.email]],password:[null,[h.required]]})}submitLoginForm(){this.LoginForm.valid?(this.isLoading=!0,this.fetchApi()):(this.LoginForm.markAllAsTouched(),this.isLoading=!1)}fetchApi(){this._AuthService.setLoginForm(this.LoginForm.value).subscribe({next:m=>{m.message=="success"&&(this.showSuccess(),setTimeout(()=>{localStorage.setItem("userToken",m.token),this._AuthService.saveUserData(),this._Router.navigate(["/home"])},1500)),this.isLoading=!1},error:()=>{this.isLoading=!1}})}showSuccess(){this._ToastrService.success("","Success Welcome \u263A..!",{timeOut:1500,positionClass:"toast-top-center"})}};o.\u0275fac=function(L){return new(L||o)},o.\u0275cmp=C({type:o,selectors:[["app-login"]],standalone:!0,features:[y],decls:21,vars:13,consts:[[1,"container","mx-auto","px-4","md:px-6","lg:px-8"],[1,"w-full","max-w-4xl","mx-auto","shadow","p-5","mb-10","mt-10","bg-white"],[1,"text-xl","sm:text-2xl","pt-6","sm:pt-10","main-color","font-semibold"],[1,"pt-6","sm:pt-10","pb-10",3,"ngSubmit","formGroup"],["for","email",1,"block","text-sm","font-medium","text-gray-700"],["type","email","id","email","formControlName","email",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngClass"],[1,"bg-red-200","p-2","mt-2","mb-3","rounded"],["for","password",1,"block","text-sm","font-medium","text-gray-700"],["type","password","id","password","formControlName","password",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngClass"],[1,"flex","flex-row","items-center","justify-between","gap-4"],["routerLink","/forget",1,"text-sm","text-blue-600","hover:underline"],["type","submit",1,"link-style","mt-5","mb-5",3,"disabled"],[1,"pr-1"],[1,"fa","fa-spinner","fa-spin"]],template:function(L,t){if(L&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Login "),i(),n(4,"form",3),w("ngSubmit",function(){return t.submitLoginForm()}),n(5,"div")(6,"label",4),a(7,"Email:"),i(),b(8,"input",5),p(9,I,3,1,"div",6),i(),n(10,"div")(11,"label",7),a(12,"Password:"),i(),b(13,"input",8),p(14,W,3,1,"div",6),i(),n(15,"div",9)(16,"a",10),a(17,"Forget Password"),i(),n(18,"button",11),p(19,z,4,0)(20,H,2,0),i()()()()()),L&2){let r,u,l,g;s(4),_("formGroup",t.LoginForm),s(4),_("ngClass",v(7,M,!((r=t.LoginForm.get("email"))!=null&&r.errors)&&(((r=t.LoginForm.get("email"))==null?null:r.touched)||((r=t.LoginForm.get("email"))==null?null:r.dirty)),((r=t.LoginForm.get("email"))==null?null:r.errors)&&(((r=t.LoginForm.get("email"))==null?null:r.touched)||((r=t.LoginForm.get("email"))==null?null:r.dirty)))),s(),c(9,(u=t.LoginForm.get("email"))!=null&&u.errors&&((u=t.LoginForm.get("email"))!=null&&u.touched||(u=t.LoginForm.get("email"))!=null&&u.dirty)?9:-1),s(4),_("ngClass",v(10,M,!((l=t.LoginForm.get("password"))!=null&&l.errors)&&(((l=t.LoginForm.get("password"))==null?null:l.touched)||((l=t.LoginForm.get("password"))==null?null:l.dirty)),((l=t.LoginForm.get("password"))==null?null:l.errors)&&(((l=t.LoginForm.get("password"))==null?null:l.touched)||((l=t.LoginForm.get("password"))==null?null:l.dirty)))),s(),c(14,(g=t.LoginForm.get("password"))!=null&&g.errors&&((g=t.LoginForm.get("password"))!=null&&g.touched||(g=t.LoginForm.get("password"))!=null&&g.dirty)?14:-1),s(4),_("disabled",t.LoginForm.invalid||t.isLoading),s(),c(19,t.isLoading?19:20)}},dependencies:[V,R,T,A,N,q,D,E,S]});let e=o;return e})();export{ie as LoginComponent};
