(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{G2hk:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("4s4O"),e=u("t/Na"),i=u("JeeH"),a=function(){return function(){}}(),b=function(){function l(){this.titulo=new a,this.titulo.ptbr="Mensagens",this.titulo.en="Messages"}return l.ngInjectableDef=t.S({factory:function(){return new l},token:l,providedIn:"root"}),l}(),r=function(){function l(l,n,u,t,o){this.instrutor=l,this.httpClient=n,this.storage=u,this.globalization=t,this.labels=o,this.headers=new e.g({"x-version":"1.1.1","x-auth":this.instrutor.getToken(),"Cache-Control":"no-cache, no-store, must-revalidate, post-check=0, pre-check=0",Pragma:"no-cache",Expires:"0"})}return l.prototype.ngOnInit=function(){},l.prototype.checkIdioma=function(){var l=this;this.storage.get("idioma").then(function(n){l.idiomaPadrao=n,""!=n&&null!=n||l.globalization.getPreferredLanguage().then(function(n){n.value.includes("pt")?(l.storage.set("idioma","ptbr"),l.idiomaPadrao="ptbr"):n.value.includes("en")&&(l.storage.set("idioma","en"),l.idiomaPadrao="en")})})},l.prototype.ionViewWillEnter=function(){var l=this;this.checkIdioma(),this.httpClient.get(this.instrutor.getUrl()+"/mensagens.php",{headers:this.headers}).subscribe(function(n){console.log(n),l.mensagens=n})},l}(),s=function(){return function(){}}(),c=u("pMnS"),p=u("oBZk"),h=u("ZZ/e"),d=u("Ip0R"),g=u("iw74"),f=t.nb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,14,"ion-list",[],null,null,null,p.fb,p.v)),t.ob(1,49152,null,0,h.N,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,12,"ion-card",[],null,null,null,p.R,p.d)),t.ob(3,49152,null,0,h.l,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,7,"ion-card-header",[],null,null,null,p.O,p.f)),t.ob(5,49152,null,0,h.n,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,2,"ion-card-subtitle",[],null,null,null,p.P,p.g)),t.ob(7,49152,null,0,h.o,[t.h,t.k],null,null),(l()(),t.Hb(8,0,["",""])),(l()(),t.pb(9,0,null,0,2,"ion-card-title",[],null,null,null,p.Q,p.h)),t.ob(10,49152,null,0,h.p,[t.h,t.k],null,null),(l()(),t.Hb(11,0,["",""])),(l()(),t.pb(12,0,null,0,2,"ion-card-content",[],null,null,null,p.N,p.e)),t.ob(13,49152,null,0,h.m,[t.h,t.k],null,null),(l()(),t.Hb(14,0,[" "," "]))],null,function(l,n){l(n,8,0,n.context.$implicit.datahora),l(n,11,0,n.context.$implicit.assunto),l(n,14,0,n.context.$implicit.mensagem)})}function k(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,13,"ion-header",[],null,null,null,p.ab,p.q)),t.ob(1,49152,null,0,h.A,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,11,"ion-toolbar",[["color","dark"]],null,null,null,p.tb,p.J)),t.ob(3,49152,null,0,h.Ab,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,p.M,p.c)),t.ob(5,49152,null,0,h.k,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,p.gb,p.x)),t.ob(7,49152,null,0,h.Q,[t.h,t.k],{autoHide:[0,"autoHide"]},null),(l()(),t.pb(8,0,null,0,2,"ion-thumbnail",[["slot","end"]],null,null,null,p.rb,p.H)),t.ob(9,49152,null,0,h.xb,[t.h,t.k],null,null),(l()(),t.pb(10,0,null,0,0,"img",[["src","../assets/images/logobola.png"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,0,2,"ion-title",[["style","font-size: small"],["text-center",""]],null,null,null,p.sb,p.I)),t.ob(12,49152,null,0,h.yb,[t.h,t.k],null,null),(l()(),t.Hb(13,0,["",""])),(l()(),t.pb(14,0,null,null,3,"ion-content",[["padding",""]],null,null,null,p.V,p.l)),t.ob(15,49152,null,0,h.t,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,m)),t.ob(17,278528,null,0,d.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,"dark"),l(n,7,0,"false"),l(n,17,0,u.mensagens)},function(l,n){var u=n.component;l(n,13,0,u.labels.titulo[u.idiomaPadrao])})}function x(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"app-mensagens",[],null,null,null,k,f)),t.ob(1,114688,null,0,r,[o.a,e.c,g.b,i.a,b],null,null)],function(l,n){l(n,1,0)},null)}var v=t.lb("app-mensagens",r,x,{},{},[]),w=u("gIcY"),H=u("ZYCi");u.d(n,"MensagensPageModuleNgFactory",function(){return J});var J=t.mb(s,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[c.a,v]],[3,t.j],t.x]),t.xb(4608,d.m,d.l,[t.u,[2,d.w]]),t.xb(4608,w.m,w.m,[]),t.xb(4608,h.b,h.b,[t.z,t.g]),t.xb(4608,h.Gb,h.Gb,[h.b,t.j,t.q]),t.xb(4608,h.Jb,h.Jb,[h.b,t.j,t.q]),t.xb(1073742336,d.b,d.b,[]),t.xb(1073742336,w.k,w.k,[]),t.xb(1073742336,w.b,w.b,[]),t.xb(1073742336,h.Cb,h.Cb,[]),t.xb(1073742336,H.o,H.o,[[2,H.u],[2,H.m]]),t.xb(1073742336,s,s,[]),t.xb(1024,H.k,function(){return[[{path:"",component:r}]]},[])])})}}]);