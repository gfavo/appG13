(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{GHvJ:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),o=t("mrSG"),e=t("4s4O"),r=t("t/Na"),i=t("ZZ/e"),s=function(){function n(n,l,t,u){this.instrutor=n,this.httpClient=l,this.router=t,this.alertController=u,this.headers=new r.g({"x-auth":this.instrutor.getToken(),"Cache-Control":"no-cache, no-store, must-revalidate, post-check=0, pre-check=0",Pragma:"no-cache",Expires:"0"})}return n.prototype.mostrarErro=function(n){return o.b(this,void 0,void 0,function(){return o.e(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"",message:n,buttons:[{text:"OK"}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){var n=this;this.subscription=this.httpClient.get(this.instrutor.getUrl()+"/aulasativas.php",{responseType:"json",headers:this.headers}).subscribe(function(l){n.conteudo=l,console.log(l)})},n.prototype.formatDate=function(n){var l=new Date(n),t=""+(l.getMonth()+1),u=""+l.getDate(),o=l.getFullYear();return t.length<2&&(t="0"+t),u.length<2&&(u="0"+u),[o,t,u].join("-")+" "+this.formatZero(l.getHours())+":"+this.formatZero(l.getMinutes())},n.prototype.formatZero=function(n){return parseInt(n)<10?"0"+n:n},n.prototype.checkin=function(n,l){var t=this;this.subscription=this.httpClient.post(this.instrutor.getUrl()+"/checkin.php",{aulaid:n,instrutorid:l,datahorasolicitacao:this.formatDate(new Date)},{observe:"response",responseType:"json",headers:this.headers}).subscribe(function(n){console.log(JSON.stringify(n.body)),t.mostrarErro("Sucesso! Seu checkin foi efetuado.")},function(n){t.mostrarErro(n.error.error)})},n}(),c=function(){return function(){}}(),b=t("pMnS"),a=t("oBZk"),p=t("Ip0R"),h=t("ZYCi"),f=u.nb({encapsulation:0,styles:[[""]],data:{}});function d(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,14,"ion-list",[],null,null,null,a.eb,a.v)),u.ob(1,49152,null,0,i.N,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,12,"ion-card",[],null,null,null,a.Q,a.d)),u.ob(3,49152,null,0,i.l,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,10,"ion-card-header",[],null,null,null,a.N,a.f)),u.ob(5,49152,null,0,i.n,[u.h,u.k],null,null),(n()(),u.pb(6,0,null,0,2,"ion-card-title",[],null,null,null,a.P,a.h)),u.ob(7,49152,null,0,i.p,[u.h,u.k],null,null),(n()(),u.Hb(8,0,["Instrutor: ",""])),(n()(),u.pb(9,0,null,0,2,"ion-card-content",[],null,null,null,a.M,a.e)),u.ob(10,49152,null,0,i.m,[u.h,u.k],null,null),(n()(),u.Hb(11,0,[" Descri\xe7\xe3o da aula: "," "])),(n()(),u.pb(12,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.checkin(n.context.$implicit.id,n.context.$implicit.idinstrutor)&&u),u},a.K,a.b)),u.ob(13,49152,null,0,i.j,[u.h,u.k],null,null),(n()(),u.Hb(-1,0,[" Fazer Check-In\n"]))],null,function(n,l){n(l,8,0,l.context.$implicit.nomeinstrutor),n(l,11,0,l.context.$implicit.descricao)})}function k(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,13,"ion-header",[["class","fonte"]],null,null,null,a.Z,a.q)),u.ob(1,49152,null,0,i.A,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,a.rb,a.I)),u.ob(3,49152,null,0,i.Ab,[u.h,u.k],{color:[0,"color"]},null),(n()(),u.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.L,a.c)),u.ob(5,49152,null,0,i.k,[u.h,u.k],null,null),(n()(),u.pb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,a.fb,a.x)),u.ob(7,49152,null,0,i.Q,[u.h,u.k],{autoHide:[0,"autoHide"]},null),(n()(),u.pb(8,0,null,0,2,"ion-thumbnail",[["slot","end"]],null,null,null,a.pb,a.G)),u.ob(9,49152,null,0,i.xb,[u.h,u.k],null,null),(n()(),u.pb(10,0,null,0,0,"img",[["src","../assets/images/logobola.png"]],null,null,null,null,null)),(n()(),u.pb(11,0,null,0,2,"ion-title",[["text-center",""]],null,null,null,a.qb,a.H)),u.ob(12,49152,null,0,i.yb,[u.h,u.k],null,null),(n()(),u.Hb(-1,0,["Check-in"])),(n()(),u.pb(14,0,null,null,3,"ion-content",[["padding",""]],null,null,null,a.U,a.l)),u.ob(15,49152,null,0,i.t,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,d)),u.ob(17,278528,null,0,p.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,7,0,"false"),n(l,17,0,t.conteudo)},null)}function m(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"app-checkin",[],null,null,null,k,f)),u.ob(1,114688,null,0,s,[e.a,r.c,h.m,i.a],null,null)],function(n,l){n(l,1,0)},null)}var g=u.lb("app-checkin",s,m,{},{},[]),x=t("gIcY");t.d(l,"CheckinPageModuleNgFactory",function(){return v});var v=u.mb(c,[],function(n){return u.wb([u.xb(512,u.j,u.bb,[[8,[b.a,g]],[3,u.j],u.x]),u.xb(4608,p.m,p.l,[u.u,[2,p.w]]),u.xb(4608,x.m,x.m,[]),u.xb(4608,i.b,i.b,[u.z,u.g]),u.xb(4608,i.Gb,i.Gb,[i.b,u.j,u.q]),u.xb(4608,i.Jb,i.Jb,[i.b,u.j,u.q]),u.xb(1073742336,p.b,p.b,[]),u.xb(1073742336,x.k,x.k,[]),u.xb(1073742336,x.b,x.b,[]),u.xb(1073742336,i.Cb,i.Cb,[]),u.xb(1073742336,h.o,h.o,[[2,h.u],[2,h.m]]),u.xb(1073742336,c,c,[]),u.xb(1024,h.k,function(){return[[{path:"",component:s}]]},[])])})}}]);