(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{L6id:function(n,l,e){"use strict";e.r(l);var u=e("CcnG"),t=function(){return function(){}}(),o=e("pMnS"),s=e("oBZk"),r=e("ZZ/e"),i=e("gIcY"),a=e("mrSG"),b=e("t/Na"),g=e("4s4O"),p=e("xoVG"),d=(new b.g({teste:"123"}),function(){return function(){}}()),c=function(){function n(n,l,e,u,t,o,s){this.load=n,this.storage=l,this.network=e,this.httpClient=u,this.router=t,this.instrutor=o,this.alertController=s,this.pessoa=new d,this.lembrar=!1,this.isloading=!1}return n.prototype.alertaDeErro=function(){return a.b(this,void 0,void 0,function(){return a.e(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Erro",message:"Sua senha ou usuario est\xe1 errado.Favor tentar novamente.",buttons:["OK"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n.prototype.presentLoading=function(){return a.b(this,void 0,void 0,function(){var n;return a.e(this,function(l){switch(l.label){case 0:return this.isloading=!0,[4,this.load.create({message:"Aguarde por favor",duration:5e3})];case 1:return[4,(n=l.sent()).present()];case 2:return l.sent(),[4,n.onDidDismiss()];case 3:return l.sent(),[2]}})})},n.prototype.dismiss=function(){return a.b(this,void 0,void 0,function(){return a.e(this,function(n){switch(n.label){case 0:return this.isloading=!1,[4,this.load.dismiss().then(function(){return console.log("dismissed")})];case 1:return[2,n.sent()]}})})},n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){var n=this;this.pessoa.pass="",this.pessoa.user="",this.lembrar=!1,this.status=0,null==this.instrutor.getUrl()&&this.instrutor.setUrl("http://192.168.25.201/mobile"),this.storage.get("login").then(function(l){""!=l&&(n.storage.get("login").then(function(l){n.pessoa.user=l}),n.storage.get("senha").then(function(l){n.pessoa.pass=l,n.onSubmit()}))})},n.prototype.ionViewDidEnter=function(){},n.prototype.mostrarUrl=function(){this.testeUrl=this.instrutor.getUrl()},n.prototype.onSubmit=function(){var n=this;"painel"==this.pessoa.user&&"painelmaster123"==this.pessoa.pass?this.router.navigate(["/painel"]):(this.presentLoading(),this.httpClient.post(this.instrutor.getUrl()+"/login.php",JSON.stringify(this.pessoa),{responseType:"text",observe:"response",withCredentials:!0,headers:new b.g({"x-version":"1.0.7"})}).subscribe(function(l){n.dismiss(),n.status=l.status,1==n.lembrar&&(n.storage.set("login",n.pessoa.user),n.storage.set("senha",n.pessoa.pass)),n.instrutor.setRole(l.headers.get("x-role")),"INSTRUTOR"==l.headers.get("x-role")?n.router.navigate(["/aula"]):n.router.navigate(["/calendario"]),n.instrutor.setNome(n.pessoa.user),n.instrutor.setToken(l.headers.get("x-auth"))},function(l){n.dismiss(),n.alertaDeErro(),n.status=l.status}))},n.prototype.esquece=function(){this.storage.set("login",""),this.storage.set("senha","")},n.prototype.lembrarTrue=function(){this.lembrar=0==this.lembrar},n}(),h=e("iw74"),m=e("ZYCi"),f=u.nb({encapsulation:0,styles:[["@import url(https://fonts.googleapis.com/css?family=Montserrat);#login-button[_ngcontent-%COMP%]{margin-top:40px;height:60px}.btn[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif}.form-label[_ngcontent-%COMP%]{font-size:18px;font-family:Montserrat,sans-serif}.form-control[_ngcontent-%COMP%]{--padding-top:10px}.form-item[_ngcontent-%COMP%]{--padding-top:15px}"]],data:{}});function C(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,9,"ion-header",[],null,null,null,s.Z,s.q)),u.ob(1,49152,null,0,r.A,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,7,"ion-toolbar",[["color","primary"]],null,null,null,s.rb,s.I)),u.ob(3,49152,null,0,r.Ab,[u.h,u.k],{color:[0,"color"]},null),(n()(),u.pb(4,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,s.pb,s.G)),u.ob(5,49152,null,0,r.xb,[u.h,u.k],null,null),(n()(),u.pb(6,0,null,0,0,"img",[["src","../assets/images/logobola.png"]],null,null,null,null,null)),(n()(),u.pb(7,0,null,0,2,"ion-title",[],null,null,null,s.qb,s.H)),u.ob(8,49152,null,0,r.yb,[u.h,u.k],null,null),(n()(),u.Hb(-1,0,[" Fa\xe7a seu login "])),(n()(),u.pb(10,0,null,null,53,"ion-content",[],null,null,null,s.U,s.l)),u.ob(11,49152,null,0,r.t,[u.h,u.k],null,null),(n()(),u.pb(12,0,null,0,51,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0,o=n.component;return"submit"===l&&(t=!1!==u.zb(n,14).onSubmit(e)&&t),"reset"===l&&(t=!1!==u.zb(n,14).onReset()&&t),"ngSubmit"===l&&(t=!1!==o.onSubmit()&&t),t},null,null)),u.ob(13,16384,null,0,i.l,[],null,null),u.ob(14,4210688,[["Form",4]],0,i.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),u.Eb(2048,null,i.a,null,[i.h]),u.ob(16,16384,null,0,i.g,[[4,i.a]],null,null),(n()(),u.pb(17,0,null,null,13,"ion-item",[["class","form-item"]],null,null,null,s.cb,s.t)),u.ob(18,49152,null,0,r.G,[u.h,u.k],null,null),(n()(),u.pb(19,0,null,0,2,"ion-label",[["class","form-label"],["position","stacked"]],null,null,null,s.db,s.u)),u.ob(20,49152,null,0,r.M,[u.h,u.k],{position:[0,"position"]},null),(n()(),u.Hb(-1,0,["Usu\xe1rio"])),(n()(),u.pb(22,0,null,0,8,"ion-input",[["class","form-control"],["id","user"],["name","user"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u.zb(n,25)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==u.zb(n,25)._handleInputEvent(e.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.pessoa.user=e)&&t),t},s.bb,s.s)),u.ob(23,16384,null,0,i.j,[],{required:[0,"required"]},null),u.Eb(1024,null,i.c,function(n){return[n]},[i.j]),u.ob(25,16384,null,0,r.Mb,[u.k],null,null),u.Eb(1024,null,i.d,function(n){return[n]},[r.Mb]),u.ob(27,671744,null,0,i.i,[[2,i.a],[6,i.c],[8,null],[6,i.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Eb(2048,null,i.e,null,[i.i]),u.ob(29,16384,null,0,i.f,[[4,i.e]],null,null),u.ob(30,49152,null,0,r.F,[u.h,u.k],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(n()(),u.pb(31,0,null,null,14,"ion-item",[["class","form-item"]],null,null,null,s.cb,s.t)),u.ob(32,49152,null,0,r.G,[u.h,u.k],null,null),(n()(),u.pb(33,0,null,0,2,"ion-label",[["class","form-label"],["for","pass"],["position","stacked"]],null,null,null,s.db,s.u)),u.ob(34,49152,null,0,r.M,[u.h,u.k],{position:[0,"position"]},null),(n()(),u.Hb(-1,0,["Senha"])),(n()(),u.pb(36,0,null,0,9,"ion-input",[["class","form-control"],["id","pass"],["name","pass"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u.zb(n,39)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==u.zb(n,39)._handleInputEvent(e.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.pessoa.pass=e)&&t),t},s.bb,s.s)),u.ob(37,16384,null,0,i.j,[],{required:[0,"required"]},null),u.Eb(1024,null,i.c,function(n){return[n]},[i.j]),u.ob(39,16384,null,0,r.Mb,[u.k],null,null),u.Eb(1024,null,i.d,function(n){return[n]},[r.Mb]),u.ob(41,671744,null,0,i.i,[[2,i.a],[6,i.c],[8,null],[6,i.d]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),u.Cb(42,{standalone:0}),u.Eb(2048,null,i.e,null,[i.i]),u.ob(44,16384,null,0,i.f,[[4,i.e]],null,null),u.ob(45,49152,null,0,r.F,[u.h,u.k],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(n()(),u.pb(46,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(47,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(48,0,null,null,10,"ion-item",[["slot","start"]],null,null,null,s.cb,s.t)),u.ob(49,49152,null,0,r.G,[u.h,u.k],null,null),(n()(),u.pb(50,0,null,0,1,"b",[],null,[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.lembrarTrue()&&u),u},null,null)),(n()(),u.Hb(-1,null,["Lembrar login ?"])),(n()(),u.pb(52,0,null,0,6,"ion-checkbox",[["id","lembrar"],["name","lembrar"],["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u.zb(n,53)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==u.zb(n,53)._handleIonChange(e.target.checked)&&t),"ngModelChange"===l&&(t=!1!==(o.lembrar=e)&&t),t},s.R,s.i)),u.ob(53,16384,null,0,r.c,[u.k],null,null),u.Eb(1024,null,i.d,function(n){return[n]},[r.c]),u.ob(55,671744,null,0,i.i,[[2,i.a],[8,null],[8,null],[6,i.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Eb(2048,null,i.e,null,[i.i]),u.ob(57,16384,null,0,i.f,[[4,i.e]],null,null),u.ob(58,49152,null,0,r.q,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(59,0,null,null,4,"ion-button",[["class","btn btn-success"],["color","dark"],["expand","full"],["id","login-button"],["type","submit"]],null,null,null,s.K,s.b)),u.ob(60,49152,null,0,r.j,[u.h,u.k],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(n()(),u.pb(61,0,null,0,1,"ion-icon",[["name","log-in"],["slot","start"]],null,null,null,s.ab,s.r)),u.ob(62,49152,null,0,r.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Hb(-1,0,["Login"]))],function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,20,0,"stacked"),n(l,23,0,""),n(l,27,0,"user",e.pessoa.user),n(l,30,0,"user","","text"),n(l,34,0,"stacked"),n(l,37,0,"");var u=e.pessoa.pass,t=n(l,42,0,!0);n(l,41,0,"pass",u,t),n(l,45,0,"pass","","password"),n(l,55,0,"lembrar",e.lembrar),n(l,58,0,"lembrar"),n(l,60,0,"dark","full","submit"),n(l,62,0,"log-in")},function(n,l){n(l,12,0,u.zb(l,16).ngClassUntouched,u.zb(l,16).ngClassTouched,u.zb(l,16).ngClassPristine,u.zb(l,16).ngClassDirty,u.zb(l,16).ngClassValid,u.zb(l,16).ngClassInvalid,u.zb(l,16).ngClassPending),n(l,22,0,u.zb(l,23).required?"":null,u.zb(l,29).ngClassUntouched,u.zb(l,29).ngClassTouched,u.zb(l,29).ngClassPristine,u.zb(l,29).ngClassDirty,u.zb(l,29).ngClassValid,u.zb(l,29).ngClassInvalid,u.zb(l,29).ngClassPending),n(l,36,0,u.zb(l,37).required?"":null,u.zb(l,44).ngClassUntouched,u.zb(l,44).ngClassTouched,u.zb(l,44).ngClassPristine,u.zb(l,44).ngClassDirty,u.zb(l,44).ngClassValid,u.zb(l,44).ngClassInvalid,u.zb(l,44).ngClassPending),n(l,52,0,u.zb(l,57).ngClassUntouched,u.zb(l,57).ngClassTouched,u.zb(l,57).ngClassPristine,u.zb(l,57).ngClassDirty,u.zb(l,57).ngClassValid,u.zb(l,57).ngClassInvalid,u.zb(l,57).ngClassPending)})}function v(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"app-home",[],null,null,null,C,f)),u.ob(1,114688,null,0,c,[r.Eb,h.b,p.a,b.c,m.m,g.a,r.a],null,null)],function(n,l){n(l,1,0)},null)}var z=u.lb("app-home",c,v,{},{},[]),y=e("Ip0R");e.d(l,"HomePageModuleNgFactory",function(){return k});var k=u.mb(t,[],function(n){return u.wb([u.xb(512,u.j,u.bb,[[8,[o.a,z]],[3,u.j],u.x]),u.xb(4608,y.m,y.l,[u.u,[2,y.w]]),u.xb(4608,i.m,i.m,[]),u.xb(4608,r.b,r.b,[u.z,u.g]),u.xb(4608,r.Gb,r.Gb,[r.b,u.j,u.q]),u.xb(4608,r.Jb,r.Jb,[r.b,u.j,u.q]),u.xb(1073742336,y.b,y.b,[]),u.xb(1073742336,i.k,i.k,[]),u.xb(1073742336,i.b,i.b,[]),u.xb(1073742336,r.Cb,r.Cb,[]),u.xb(1073742336,m.o,m.o,[[2,m.u],[2,m.m]]),u.xb(1073742336,t,t,[]),u.xb(1024,m.k,function(){return[[{path:"",component:c}]]},[])])})}}]);