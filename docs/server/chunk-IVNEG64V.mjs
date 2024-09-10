import './polyfills.server.mjs';
import{a as L}from"./chunk-Y6VER7LH.mjs";import{a as M,b as f,c as D,d as G,h as V,i as B,j as $,k as j,m as O}from"./chunk-EVKNSU5U.mjs";import"./chunk-QZLY374Y.mjs";import{a as z}from"./chunk-BNPKAEFT.mjs";import"./chunk-KU5BKOKS.mjs";import"./chunk-GTSSCL6B.mjs";import{l as A}from"./chunk-GJZWYCQF.mjs";import{j as k}from"./chunk-AZSGSTTY.mjs";import{Bb as q,Cb as w,Jb as s,Qb as N,Ta as m,Tb as E,Z as y,ba as P,ib as c,kb as R,ob as _,sb as n,tb as i,ub as h}from"./chunk-3OXFT4D6.mjs";import"./chunk-VVCT4QZE.mjs";var S=(t,r)=>({"is-valid":t,"is-invalid":r});function H(t,r){t&1&&(n(0,"p"),s(1,"name is requierd"),i())}function I(t,r){t&1&&(n(0,"p"),s(1,"Name Should be more than or equal 3 chars"),i())}function J(t,r){t&1&&(n(0,"p"),s(1,"Name Should be less than or equal 20 chars "),i())}function K(t,r){if(t&1&&(n(0,"div",7),c(1,H,2,0,"p")(2,I,2,0)(3,J,2,0),i()),t&2){let l,o=w();m(),_(1,(l=o.RegisterForm.get("name"))!=null&&l.getError("required")?1:(l=o.RegisterForm.get("name"))!=null&&l.getError("minlength")?2:(l=o.RegisterForm.get("name"))!=null&&l.getError("maxlength")?3:-1)}}function Q(t,r){t&1&&(n(0,"p"),s(1,"Email is Required"),i())}function U(t,r){t&1&&(n(0,"p"),s(1,"Enter Valid Email "),i())}function W(t,r){if(t&1&&(n(0,"div",7),c(1,Q,2,0,"p")(2,U,2,0),i()),t&2){let l,o=w();m(),_(1,(l=o.RegisterForm.get("email"))!=null&&l.getError("required")?1:(l=o.RegisterForm.get("email"))!=null&&l.getError("email")?2:-1)}}function X(t,r){t&1&&(n(0,"p"),s(1,"phone is Required"),i())}function Y(t,r){t&1&&(n(0,"p"),s(1,"accept only egypt phone numbers"),i())}function Z(t,r){if(t&1&&(n(0,"div",7),c(1,X,2,0,"p")(2,Y,2,0),i()),t&2){let l,o=w();m(),_(1,(l=o.RegisterForm.get("phone"))!=null&&l.getError("required")?1:(l=o.RegisterForm.get("phone"))!=null&&l.getError("pattern")?2:-1)}}function ee(t,r){t&1&&(n(0,"p"),s(1,"password is Required"),i())}function te(t,r){t&1&&(n(0,"p"),s(1,"must be at least 6 chars"),i())}function ie(t,r){if(t&1&&(n(0,"div",7),c(1,ee,2,0,"p")(2,te,2,0),i()),t&2){let l,o=w();m(),_(1,(l=o.RegisterForm.get("password"))!=null&&l.getError("required")?1:(l=o.RegisterForm.get("password"))!=null&&l.getError("pattern")?2:-1)}}function ne(t,r){t&1&&(n(0,"p"),s(1,"password is Required"),i())}function re(t,r){t&1&&(n(0,"p"),s(1,"Password confirmation is incorrect"),i())}function le(t,r){if(t&1&&(n(0,"div",7),c(1,ne,2,0,"p")(2,re,2,0),i()),t&2){let l,o=w();m(),_(1,(l=o.RegisterForm.get("rePassword"))!=null&&l.getError("required")?1:(l=o.RegisterForm.get("password"))!=null&&l.getError("mismatch")?2:-1)}}function oe(t,r){t&1&&(n(0,"span",17),s(1,"Register"),i(),n(2,"span"),h(3,"i",18),i())}function se(t,r){t&1&&(n(0,"span"),s(1,"Register"),i())}var Re=(()=>{let r=class r{constructor(){this._AuthService=y(L),this._FormBuilder=y(j),this._Router=y(A),this._ToastrService=y(z),this.isLoading=!1,this.RegisterForm=this._FormBuilder.group({name:[null,[f.required,f.minLength(3),f.maxLength(20)]],email:[null,[f.required,f.email]],password:[null,[f.required,f.pattern(/^\w{6,}$/)]],rePassword:[null,f.required],phone:[null,[f.required,f.pattern(/^01[0125][0-9]{8}$/)]]},{validators:[this.checkRepasswordMatch]})}checkRepasswordMatch(o){return o.get("password")?.value===o.get("rePassword")?.value?null:{mismatch:!0}}submitRegisterForm(){this.RegisterForm.valid?(this.isLoading=!0,this.fetchApi()):(this.RegisterForm.setErrors({mismatch:!0}),this.RegisterForm.markAllAsTouched())}fetchApi(){this._AuthService.setRegisterForm(this.RegisterForm.value).subscribe({next:o=>{o.message=="success"&&(this.showSuccess(),setTimeout(()=>{this._Router.navigate(["/login"])},1500)),console.log(o),this.isLoading=!1},error:o=>{this.isLoading=!1}})}showSuccess(){this._ToastrService.success("","Success.!",{timeOut:1500,positionClass:"toast-top-center"})}};r.\u0275fac=function(x){return new(x||r)},r.\u0275cmp=P({type:r,selectors:[["app-register"]],standalone:!0,features:[N],decls:33,vars:28,consts:[[1,"container","mx-auto","px-4","md:px-6","lg:px-8"],[1,"w-full","max-w-4xl","mx-auto","shadow","p-5","mb-10","mt-10","bg-white"],[1,"text-xl","sm:text-2xl","pt-6","sm:pt-10","main-color","font-semibold"],[1,"pt-6","sm:pt-10","pb-10",3,"ngSubmit","formGroup"],[1,"mb-5"],["for","name",1,"block","mb-1","text-sm","font-medium"],["type","text","id","name","formControlName","name",1,"w-full","p-2.5","text-sm","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","bg-gray-50",3,"ngClass"],[1,"bg-red-200","p-2","mt-2","mb-3","rounded"],["for","email",1,"block","mb-1","text-sm","font-medium"],["type","email","id","email","formControlName","email",1,"w-full","p-2.5","text-sm","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","bg-gray-50",3,"ngClass"],["for","phone",1,"block","mb-1","text-sm","font-medium"],["type","tel","id","phone","formControlName","phone",1,"w-full","p-2.5","text-sm","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","bg-gray-50",3,"ngClass"],["for","password",1,"block","mb-1","text-sm","font-medium"],["type","password","id","password","formControlName","password",1,"w-full","p-2.5","text-sm","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","bg-gray-50",3,"ngClass"],["for","rePassword",1,"block","mb-1","text-sm","font-medium"],["type","password","id","rePassword","formControlName","rePassword",1,"w-full","p-2.5","text-sm","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","bg-gray-50",3,"ngClass"],["type","submit",1,"link-style","w-full","mt-5","mb-5","p-3","text-white","bg-blue-600","rounded-lg",3,"disabled"],[1,"pr-1"],[1,"fa","fa-spinner","fa-spin"]],template:function(x,e){if(x&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),s(3,"Register "),i(),n(4,"form",3),q("ngSubmit",function(){return e.submitRegisterForm()}),n(5,"div",4)(6,"label",5),s(7,"Name:"),i(),h(8,"input",6),c(9,K,4,1,"div",7),i(),n(10,"div",4)(11,"label",8),s(12,"Email:"),i(),h(13,"input",9),c(14,W,3,1,"div",7),i(),n(15,"div",4)(16,"label",10),s(17,"Phone:"),i(),h(18,"input",11),c(19,Z,3,1,"div",7),i(),n(20,"div",4)(21,"label",12),s(22,"Password:"),i(),h(23,"input",13),c(24,ie,3,1,"div",7),i(),n(25,"div",4)(26,"label",14),s(27,"Confirm Password:"),i(),h(28,"input",15),c(29,le,3,1,"div",7),i(),n(30,"button",16),c(31,oe,4,0)(32,se,2,0),i()()()()),x&2){let a,F,u,C,d,b,g,v,p,T;m(4),R("formGroup",e.RegisterForm),m(4),R("ngClass",E(13,S,!((a=e.RegisterForm.get("name"))!=null&&a.errors)&&(((a=e.RegisterForm.get("name"))==null?null:a.touched)||((a=e.RegisterForm.get("name"))==null?null:a.dirty)),((a=e.RegisterForm.get("name"))==null?null:a.errors)&&(((a=e.RegisterForm.get("name"))==null?null:a.touched)||((a=e.RegisterForm.get("name"))==null?null:a.dirty)))),m(),_(9,(F=e.RegisterForm.get("name"))!=null&&F.errors&&((F=e.RegisterForm.get("name"))!=null&&F.touched||(F=e.RegisterForm.get("name"))!=null&&F.dirty)?9:-1),m(4),R("ngClass",E(16,S,!((u=e.RegisterForm.get("email"))!=null&&u.errors)&&(((u=e.RegisterForm.get("email"))==null?null:u.touched)||((u=e.RegisterForm.get("email"))==null?null:u.dirty)),((u=e.RegisterForm.get("email"))==null?null:u.errors)&&(((u=e.RegisterForm.get("email"))==null?null:u.touched)||((u=e.RegisterForm.get("email"))==null?null:u.dirty)))),m(),_(14,(C=e.RegisterForm.get("email"))!=null&&C.errors&&((C=e.RegisterForm.get("email"))!=null&&C.touched||(C=e.RegisterForm.get("email"))!=null&&C.dirty)?14:-1),m(4),R("ngClass",E(19,S,!((d=e.RegisterForm.get("phone"))!=null&&d.errors)&&(((d=e.RegisterForm.get("phone"))==null?null:d.touched)||((d=e.RegisterForm.get("phone"))==null?null:d.dirty)),((d=e.RegisterForm.get("phone"))==null?null:d.errors)&&(((d=e.RegisterForm.get("phone"))==null?null:d.touched)||((d=e.RegisterForm.get("phone"))==null?null:d.dirty)))),m(),_(19,(b=e.RegisterForm.get("phone"))!=null&&b.errors&&((b=e.RegisterForm.get("phone"))!=null&&b.touched||(b=e.RegisterForm.get("phone"))!=null&&b.dirty)?19:-1),m(4),R("ngClass",E(22,S,!((g=e.RegisterForm.get("password"))!=null&&g.errors)&&(((g=e.RegisterForm.get("password"))==null?null:g.touched)||((g=e.RegisterForm.get("password"))==null?null:g.dirty)),((g=e.RegisterForm.get("password"))==null?null:g.errors)&&(((g=e.RegisterForm.get("password"))==null?null:g.touched)||((g=e.RegisterForm.get("password"))==null?null:g.dirty)))),m(),_(24,(v=e.RegisterForm.get("password"))!=null&&v.errors&&((v=e.RegisterForm.get("password"))!=null&&v.touched||(v=e.RegisterForm.get("password"))!=null&&v.dirty)?24:-1),m(4),R("ngClass",E(25,S,!((p=e.RegisterForm.get("rePassword"))!=null&&p.errors)&&(((p=e.RegisterForm.get("rePassword"))==null?null:p.touched)||((p=e.RegisterForm.get("rePassword"))==null?null:p.dirty)),((p=e.RegisterForm.get("rePassword"))==null?null:p.errors)&&(((p=e.RegisterForm.get("rePassword"))==null?null:p.touched)||((p=e.RegisterForm.get("rePassword"))==null?null:p.dirty)))),m(),_(29,e.RegisterForm!=null&&e.RegisterForm.getError("mismatch")&&((T=e.RegisterForm.get("rePassword"))!=null&&T.touched||(T=e.RegisterForm.get("rePassword"))!=null&&T.dirty)?29:-1),m(),R("disabled",e.RegisterForm.invalid||e.isLoading),m(),_(31,e.isLoading?31:32)}},dependencies:[O,V,M,D,G,B,$,k]});let t=r;return t})();export{Re as RegisterComponent};
