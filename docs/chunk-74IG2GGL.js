import{a as b}from"./chunk-5QX7OLUE.js";import"./chunk-VCBYZZMY.js";import{Mb as l,Nb as x,Sa as m,Tb as u,Wa as a,da as c,ga as d,nb as g,sb as p,tb as v,ub as h,vb as o,wb as r,xb as f}from"./chunk-Y44U2H2M.js";function y(t,e){if(t&1&&(o(0,"div",4),f(1,"img",5),o(2,"div",6)(3,"h2",7),l(4),r(),o(5,"a",8),l(6,"Shop Now"),r()()()),t&2){let s=e.$implicit;a(),g("src",s.image,m),a(3),x(s.name)}}var _=(()=>{let e=class e{constructor(){this._CategoriesService=c(b)}ngOnInit(){this.getAllGategories()}getAllGategories(){this._CategoriesService.getAllGategories().subscribe({next:i=>{this.Category=i.data,console.log(i.data)},error:i=>{console.log(i)}})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-categories"]],standalone:!0,features:[u],decls:7,vars:0,consts:[[1,"container","mx-auto","px-4","py-8"],[1,"text-center","mb-8"],[1,"text-4xl","font-bold","mb-4","main-color"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-4","gap-6"],[1,"bg-white","shadow-lg","rounded-lg","overflow-hidden","hover:shadow-2xl","transition-shadow"],["alt","Category Image",1,"w-full","h-48","object-cover",3,"src"],[1,"p-4","text-center"],[1,"text-xl","font-semibold","mb-2"],["href","#",1,"inline-block","mt-4","text-blue-500","hover:text-blue-700"]],template:function(n,C){n&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),l(3,"Shop by Category"),r()(),o(4,"div",3),v(5,y,7,2,"div",4,p),r()()),n&2&&(a(5),h(C.Category))}});let t=e;return t})();export{_ as CategoriesComponent};
