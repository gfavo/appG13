(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"6nlg":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("JeeH"),i=function(){return function(){}}(),a=function(){function l(){this.titulo=new i,this.versao=new i,this.criadopor=new i,this.contato=new i,this.titulo.ptbr="Sobre o app",this.titulo.en="About the app",this.versao.ptbr="Vers\xe3o",this.versao.en="Version",this.criadopor.ptbr="Criado por",this.criadopor.en="Created by",this.contato.ptbr="Contato",this.contato.en="Contact"}return l.ngInjectableDef=o.S({factory:function(){return new l},token:l,providedIn:"root"}),l}(),e=function(){function l(l,n,u){this.storage=l,this.globalization=n,this.labels=u}return l.prototype.checkIdioma=function(){var l=this;this.storage.get("idioma").then(function(n){l.idiomaPadrao=n,""!=n&&null!=n||l.globalization.getPreferredLanguage().then(function(n){n.value.includes("pt")?(l.storage.set("idioma","ptbr"),l.idiomaPadrao="ptbr"):n.value.includes("en")&&(l.storage.set("idioma","en"),l.idiomaPadrao="en")})})},l.prototype.ionViewWillEnter=function(){this.checkIdioma()},l.prototype.ngOnInit=function(){},l}(),b=function(){return function(){}}(),r=u("pMnS"),s=u("oBZk"),c=u("ZZ/e"),p=u("iw74"),d=o.nb({encapsulation:0,styles:[[""]],data:{}});function h(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,13,"ion-header",[],null,null,null,s.ab,s.q)),o.ob(1,49152,null,0,c.A,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,11,"ion-toolbar",[["color","dark"]],null,null,null,s.tb,s.J)),o.ob(3,49152,null,0,c.Ab,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.M,s.c)),o.ob(5,49152,null,0,c.k,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,s.gb,s.x)),o.ob(7,49152,null,0,c.Q,[o.h,o.k],{autoHide:[0,"autoHide"]},null),(l()(),o.pb(8,0,null,0,2,"ion-thumbnail",[["slot","end"]],null,null,null,s.rb,s.H)),o.ob(9,49152,null,0,c.xb,[o.h,o.k],null,null),(l()(),o.pb(10,0,null,0,0,"img",[["src","../assets/images/logobola.png"]],null,null,null,null,null)),(l()(),o.pb(11,0,null,0,2,"ion-title",[["text-center",""]],null,null,null,s.sb,s.I)),o.ob(12,49152,null,0,c.yb,[o.h,o.k],null,null),(l()(),o.Hb(13,0,["",""])),(l()(),o.pb(14,0,null,null,14,"ion-content",[["padding",""]],null,null,null,s.V,s.l)),o.ob(15,49152,null,0,c.t,[o.h,o.k],null,null),(l()(),o.pb(16,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Hb(17,null,["",": 1.1.1"])),(l()(),o.pb(18,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Hb(19,null,["",": Coisas Digitais"])),(l()(),o.pb(20,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Hb(21,null,["",": gabriel@coisasdigitais.com.br"])),(l()(),o.pb(22,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Icons made by "])),(l()(),o.pb(24,0,null,null,1,"a",[["href","https://www.flaticon.com/authors/freepik"],["title","Freepik"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Freepik"])),(l()(),o.Hb(-1,null,[" from "])),(l()(),o.pb(27,0,null,null,1,"a",[["href","https://www.flaticon.com/"],["title","Flaticon"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["www.flaticon.com"]))],function(l,n){l(n,3,0,"dark"),l(n,7,0,"false")},function(l,n){var u=n.component;l(n,13,0,u.labels.titulo[u.idiomaPadrao]),l(n,17,0,u.labels.versao[u.idiomaPadrao]),l(n,19,0,u.labels.criadopor[u.idiomaPadrao]),l(n,21,0,u.labels.contato[u.idiomaPadrao])})}function f(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-sobre",[],null,null,null,h,d)),o.ob(1,114688,null,0,e,[p.b,t.a,a],null,null)],function(l,n){l(n,1,0)},null)}var m=o.lb("app-sobre",e,f,{},{},[]),g=u("Ip0R"),w=u("gIcY"),k=u("ZYCi");u.d(n,"SobrePageModuleNgFactory",function(){return x});var x=o.mb(b,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[r.a,m]],[3,o.j],o.x]),o.xb(4608,g.m,g.l,[o.u,[2,g.w]]),o.xb(4608,w.m,w.m,[]),o.xb(4608,c.b,c.b,[o.z,o.g]),o.xb(4608,c.Gb,c.Gb,[c.b,o.j,o.q]),o.xb(4608,c.Jb,c.Jb,[c.b,o.j,o.q]),o.xb(1073742336,g.b,g.b,[]),o.xb(1073742336,w.k,w.k,[]),o.xb(1073742336,w.b,w.b,[]),o.xb(1073742336,c.Cb,c.Cb,[]),o.xb(1073742336,k.o,k.o,[[2,k.u],[2,k.m]]),o.xb(1073742336,b,b,[]),o.xb(1024,k.k,function(){return[[{path:"",component:e}]]},[])])})}}]);