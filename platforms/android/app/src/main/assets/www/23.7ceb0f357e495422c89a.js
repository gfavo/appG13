(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Yeq4:function(t,n,e){"use strict";e.r(n);var o=e("CcnG"),s=e("ZZ/e"),i=e("xoVG"),l=e("4s4O"),r=e("JeeH"),u=e("t/Na"),a=function(){return function(){}}(),b=function(){function t(t,n,e,o,s,i,l,r){this.load=t,this.storage=n,this.network=e,this.httpClient=o,this.router=s,this.instrutor=i,this.alertController=l,this.globalization=r,this.pessoa=new a}return t.prototype.ngOnInit=function(){},t.prototype.checkIdioma=function(){var t=this;this.storage.get("idioma").then(function(n){""!=n&&null!=n||t.globalization.getPreferredLanguage().then(function(n){n.value.includes("pt")?t.storage.set("idioma","ptbr"):n.value.includes("en")&&t.storage.set("idioma","en")})})},t.prototype.ionViewWillEnter=function(){var t=this;this.pessoa.pass="",this.pessoa.user="",this.status=0,null==this.instrutor.getUrl()&&this.instrutor.setUrl("http://192.168.25.201/mobile"),this.storage.get("login").then(function(n){t.storage.get("login").then(function(n){t.pessoa.user=n}),t.storage.get("senha").then(function(n){t.pessoa.pass=n,t.httpClient.post(t.instrutor.getUrl()+"/login.php",JSON.stringify(t.pessoa),{responseType:"text",observe:"response",withCredentials:!0,headers:new u.g({"x-version":"1.1.1"})}).subscribe(function(n){t.status=n.status,t.instrutor.setRole(n.headers.get("x-role")),"INSTRUTOR"==n.headers.get("x-role")?t.router.navigate(["/aula"]):t.router.navigate(["/calendario"]),t.instrutor.setNome(t.pessoa.user),t.instrutor.setToken(n.headers.get("x-auth"))},function(n){t.status=n.status})})})},t}(),p=function(){return function(){}}(),c=e("pMnS"),g=e("oBZk"),h=e("iw74"),f=e("ZYCi"),d=o.nb({encapsulation:0,styles:[["ion-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}ion-content[_ngcontent-%COMP%]{position:relative}"]],data:{}});function x(t){return o.Jb(0,[(t()(),o.pb(0,0,null,null,3,"ion-content",[["padding",""]],null,null,null,g.V,g.l)),o.ob(1,49152,null,0,s.t,[o.h,o.k],null,null),(t()(),o.pb(2,0,null,0,1,"ion-spinner",[],null,null,null,g.pb,g.F)),o.ob(3,49152,null,0,s.qb,[o.h,o.k],null,null)],null,null)}function m(t){return o.Jb(0,[(t()(),o.pb(0,0,null,null,1,"app-load-login",[],null,null,null,x,d)),o.ob(1,114688,null,0,b,[s.Eb,h.b,i.a,u.c,f.m,l.a,s.a,r.a],null,null)],function(t,n){t(n,1,0)},null)}var w=o.lb("app-load-login",b,m,{},{},[]),k=e("Ip0R"),v=e("gIcY");e.d(n,"LoadLoginPageModuleNgFactory",function(){return C});var C=o.mb(p,[],function(t){return o.wb([o.xb(512,o.j,o.bb,[[8,[c.a,w]],[3,o.j],o.x]),o.xb(4608,k.m,k.l,[o.u,[2,k.w]]),o.xb(4608,v.m,v.m,[]),o.xb(4608,s.b,s.b,[o.z,o.g]),o.xb(4608,s.Gb,s.Gb,[s.b,o.j,o.q]),o.xb(4608,s.Jb,s.Jb,[s.b,o.j,o.q]),o.xb(1073742336,k.b,k.b,[]),o.xb(1073742336,v.k,v.k,[]),o.xb(1073742336,v.b,v.b,[]),o.xb(1073742336,s.Cb,s.Cb,[]),o.xb(1073742336,f.o,f.o,[[2,f.u],[2,f.m]]),o.xb(1073742336,p,p,[]),o.xb(1024,f.k,function(){return[[{path:"",component:b}]]},[])])})}}]);