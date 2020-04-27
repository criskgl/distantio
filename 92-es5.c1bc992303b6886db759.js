function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{L6id:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=function n(){_classCallCheck(this,n)},u=e("pMnS"),r=e("MKJQ"),a=e("sZkV"),i=e("SVse"),s=e("mrSG"),c=e("gTw3"),h=e("2Vo4"),b=function(){function n(l,e,t){_classCallCheck(this,n),this.geolocation=l,this.alertController=e,this.toastController=t,this.time=new h.a("00:00"),this.setHomeLocation(),this.updateDistanceToHome()}return _createClass(n,[{key:"updateDistanceToHome",value:function(){var n=this;this.geolocation.getCurrentPosition().then((function(l){n.currentLat=l.coords.latitude,n.currentLon=l.coords.longitude,console.log(n.homeLat),console.log(n.homeLon),n.totalDistance=n.calculateDistance(n.currentLon,n.homeLon,n.currentLat,n.homeLat)+" Km"}))}},{key:"updateGeolocation",value:function(){var n=this;this.geolocation.getCurrentPosition().then((function(l){n.currentLat=l.coords.latitude,n.currentLon=l.coords.longitude}))}},{key:"setHomeLocation",value:function(){var n=this;this.geolocation.getCurrentPosition().then((function(l){n.homeLat=l.coords.latitude,n.homeLon=l.coords.longitude}))}},{key:"calculateDistance",value:function(n,l,e,t){var o=.017453292519943295,u=Math.cos,r=.5-u((e-t)*o)/2+u(t*o)*u(e*o)*(1-u((n-l)*o))/2,a=12742*Math.asin(Math.sqrt(r));return Math.trunc(a)}},{key:"presentAlertConfirmGoingOut",value:function(){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Confirma!",message:"No podr\xe1s volver a reiniciar tu salida hasta que haya pasado 1h",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah")}},{text:"Acepto",handler:function(){e.updateDistanceToHome(),e.startTimer(60),e.presentToastConfirmStart()}}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"presentToastConfirmStart",value:function(){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:"Acabas de iniciar tu salida",duration:1e3});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"startTimer",value:function(n){var l=this;clearInterval(this.interval),this.timeLeft=60*n,this.interval=setInterval((function(){l.updateDistanceToHome(),l.updateTimeValue()}),1e3)}},{key:"updateTimeValue",value:function(){var n=this.timeLeft/60,l=this.timeLeft%60;n=String("0"+Math.floor(n)).slice(-2),l=String("0"+Math.floor(l)).slice(-2),this.time.next(n+" : "+l),--this.timeLeft,0==this.timeLeft&&this.startTimer(5)}}]),n}(),m=t.kb({encapsulation:0,styles:[["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]],data:{}});function f(n){return t.Db(0,[(n()(),t.mb(0,0,null,null,6,"ion-header",[],null,null,null,r.o,r.d)),t.lb(1,49152,null,0,a.z,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(n()(),t.mb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.v,r.k)),t.lb(3,49152,null,0,a.xb,[t.h,t.k,t.x],null,null),(n()(),t.mb(4,0,null,0,2,"ion-title",[],null,null,null,r.u,r.j)),t.lb(5,49152,null,0,a.vb,[t.h,t.k,t.x],null,null),(n()(),t.Bb(-1,0,[" Distant.io "])),(n()(),t.mb(7,0,null,null,47,"ion-content",[],null,null,null,r.n,r.c)),t.lb(8,49152,null,0,a.s,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(n()(),t.mb(9,0,null,0,22,"ion-list",[],null,null,null,r.s,r.h)),t.lb(10,49152,null,0,a.M,[t.h,t.k,t.x],null,null),(n()(),t.mb(11,0,null,0,9,"ion-item",[],null,null,null,r.q,r.f)),t.lb(12,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(n()(),t.mb(13,0,null,0,2,"ion-label",[],null,null,null,r.r,r.g)),t.lb(14,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(n()(),t.Bb(15,0,["",""])),(n()(),t.mb(16,0,null,0,1,"ion-icon",[["name","home-outline"],["slot","start"]],null,null,null,r.p,r.e)),t.lb(17,49152,null,0,a.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.mb(18,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,r.t,r.i)),t.lb(19,49152,null,0,a.T,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Bb(-1,0,["Distancia a casa"])),(n()(),t.mb(21,0,null,0,10,"ion-item",[],null,null,null,r.q,r.f)),t.lb(22,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(n()(),t.mb(23,0,null,0,3,"ion-label",[],null,null,null,r.r,r.g)),t.lb(24,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(n()(),t.Bb(25,0,["",""])),t.yb(131072,i.b,[t.h]),(n()(),t.mb(27,0,null,0,1,"ion-icon",[["name","hourglass-outline"],["slot","start"]],null,null,null,r.p,r.e)),t.lb(28,49152,null,0,a.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.mb(29,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,r.t,r.i)),t.lb(30,49152,null,0,a.T,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Bb(-1,0,["Tiempo restante"])),(n()(),t.mb(32,0,null,0,2,"ion-button",[["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.presentAlertConfirmGoingOut()&&t),t}),r.m,r.b)),t.lb(33,49152,null,0,a.i,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t.Bb(-1,0,["Empezar salida"])),(n()(),t.mb(35,0,null,0,4,"ion-item",[],null,null,null,r.q,r.f)),t.lb(36,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(n()(),t.mb(37,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.r,r.g)),t.lb(38,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(n()(),t.Bb(39,0,[" My Latitude: "," "])),(n()(),t.mb(40,0,null,0,4,"ion-item",[],null,null,null,r.q,r.f)),t.lb(41,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(n()(),t.mb(42,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.r,r.g)),t.lb(43,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(n()(),t.Bb(44,0,[" My Longitude: "," "])),(n()(),t.mb(45,0,null,0,4,"ion-item",[],null,null,null,r.q,r.f)),t.lb(46,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(n()(),t.mb(47,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.r,r.g)),t.lb(48,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(n()(),t.Bb(49,0,[" Home Latitude: "," "])),(n()(),t.mb(50,0,null,0,4,"ion-item",[],null,null,null,r.q,r.f)),t.lb(51,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(n()(),t.mb(52,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.r,r.g)),t.lb(53,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(n()(),t.Bb(54,0,[" Home Longitude: "," "]))],(function(n,l){n(l,1,0,!0),n(l,8,0,!0),n(l,17,0,"home-outline"),n(l,19,0,"primary"),n(l,28,0,"hourglass-outline"),n(l,30,0,"primary"),n(l,33,0,"secondary","block")}),(function(n,l){var e=l.component;n(l,15,0,e.totalDistance),n(l,25,0,t.Cb(l,25,0,t.xb(l,26).transform(e.time))),n(l,39,0,e.currentLat),n(l,44,0,e.currentLon),n(l,49,0,e.homeLat),n(l,54,0,e.homeLon)}))}var p=t.ib("app-home",b,(function(n){return t.Db(0,[(n()(),t.mb(0,0,null,null,1,"app-home",[],null,null,null,f,m)),t.lb(1,49152,null,0,b,[c.a,a.a,a.Fb],null,null)],null,null)}),{},{},[]),d=e("s7LF"),v=e("iInd"),g=function n(){_classCallCheck(this,n)};e.d(l,"HomePageModuleNgFactory",(function(){return k}));var k=t.jb(o,[],(function(n){return t.ub([t.vb(512,t.j,t.V,[[8,[u.a,p]],[3,t.j],t.v]),t.vb(4608,i.j,i.i,[t.s,[2,i.p]]),t.vb(4608,d.c,d.c,[]),t.vb(4608,a.b,a.b,[t.x,t.g]),t.vb(4608,a.Bb,a.Bb,[a.b,t.j,t.p]),t.vb(4608,a.Eb,a.Eb,[a.b,t.j,t.p]),t.vb(1073742336,i.c,i.c,[]),t.vb(1073742336,d.b,d.b,[]),t.vb(1073742336,d.a,d.a,[]),t.vb(1073742336,a.zb,a.zb,[]),t.vb(1073742336,v.n,v.n,[[2,v.s],[2,v.m]]),t.vb(1073742336,g,g,[]),t.vb(1073742336,o,o,[]),t.vb(1024,v.k,(function(){return[[{path:"",component:b}]]}),[])])}))},s7LF:function(n,l,e){"use strict";var t=e("8Y7J");e("cUpR"),e("HDdC"),e("DH7j"),e("lJxs"),e("XoHu"),e("Cfvw"),e.d(l,"b",(function(){return r})),e.d(l,"c",(function(){return o})),e.d(l,"a",(function(){return a}));var o=function(){function n(){_classCallCheck(this,n),this._accessors=[]}return _createClass(n,[{key:"add",value:function(n,l){this._accessors.push([n,l])}},{key:"remove",value:function(n){for(var l=this._accessors.length-1;l>=0;--l)if(this._accessors[l][1]===n)return void this._accessors.splice(l,1)}},{key:"select",value:function(n){var l=this;this._accessors.forEach((function(e){l._isSameGroup(e,n)&&e[1]!==n&&e[1].fireUncheck(n.value)}))}},{key:"_isSameGroup",value:function(n,l){return!!n[0].control&&n[0]._parent===l._control._parent&&n[1].name===l.name}}]),n}(),u=new t.o("NgFormSelectorWarning"),r=function n(){_classCallCheck(this,n)},a=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"withConfig",value:function(l){return{ngModule:n,providers:[{provide:u,useValue:l.warnOnDeprecatedNgFormSelector}]}}}]),n}()}}]);