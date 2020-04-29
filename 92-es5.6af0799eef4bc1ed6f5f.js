function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{L6id:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),o=function n(){_classCallCheck(this,n)},a=t("pMnS"),r=t("MKJQ"),u=t("sZkV"),i=t("SVse"),s=t("mrSG"),c=t("gTw3"),h=t("2Vo4"),m=function(){function n(l,t,e){_classCallCheck(this,n),this.geolocation=l,this.alertController=t,this.toastController=e,this.time=new h.a("00:00"),this.setHomeLocation(),this.updateDistanceToHome();var o=this;setTimeout((function(){o.GoogleMap()}),2e3)}return _createClass(n,[{key:"GoogleMap",value:function(){this.map=new google.maps.Map(document.getElementById("map"),{zoom:14,center:{lat:this.homeLat,lng:this.homeLon},mapTypeId:"terrain",disableDefaultUI:!0}),new google.maps.Circle({strokeColor:"#33ffff",strokeOpacity:.8,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.35,map:this.map,center:{lat:this.homeLat,lng:this.homeLon},radius:1e3}),new google.maps.Marker({position:{lat:this.homeLat,lng:this.homeLon},map:this.map,icon:"assets/img/mapMarkerHome.png"})}},{key:"updateDistanceToHome",value:function(){var n=this;this.geolocation.getCurrentPosition().then((function(l){n.currentLat=l.coords.latitude,n.currentLon=l.coords.longitude,console.log(n.homeLat),console.log(n.homeLon),n.totalDistance=n.calculateDistance(n.currentLon,n.homeLon,n.currentLat,n.homeLat)+""}))}},{key:"updateGeolocation",value:function(){var n=this;this.geolocation.getCurrentPosition().then((function(l){n.currentLat=l.coords.latitude,n.currentLon=l.coords.longitude}))}},{key:"setHomeLocation",value:function(){var n=this;this.geolocation.getCurrentPosition().then((function(l){n.homeLat=l.coords.latitude,n.homeLon=l.coords.longitude}))}},{key:"calculateDistance",value:function(n,l,t,e){var o=(e-t)*Math.PI/180,a=(l-n)*Math.PI/180,r=Math.sin(o/2)*Math.sin(o/2)+Math.cos(t*Math.PI/180)*Math.cos(e*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2),u=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))*6371;return u>1?Math.round(u)+" km":u<=1?Math.round(1e3*u)+" m":u}},{key:"presentAlertConfirmGoingOut",value:function(){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Confirma!",message:"No podr\xe1s volver a reiniciar tu salida hasta que haya pasado 1h",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah")}},{text:"Acepto",handler:function(){t.updateDistanceToHome(),t.startTimer(60),t.presentToastConfirmStart()}}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"presentToastConfirmStart",value:function(){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:"Acabas de iniciar tu salida",duration:1e3});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"startTimer",value:function(n){var l=this;clearInterval(this.interval),this.timeLeft=60*n,this.interval=setInterval((function(){l.updateDistanceToHome(),l.updateTimeValue()}),1e3)}},{key:"updateTimeValue",value:function(){var n=this.timeLeft/60,l=this.timeLeft%60;n=String("0"+Math.floor(n)).slice(-2),l=String("0"+Math.floor(l)).slice(-2),this.time.next(n+" : "+l),--this.timeLeft,0==this.timeLeft&&this.startTimer(5)}}]),n}(),b=e.kb({encapsulation:0,styles:[["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#map[_ngcontent-%COMP%]{height:100vw;width:100%}"]],data:{}});function f(n){return e.Db(0,[(n()(),e.mb(0,0,null,null,6,"ion-header",[],null,null,null,r.p,r.d)),e.lb(1,49152,null,0,u.z,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(n()(),e.mb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.x,r.l)),e.lb(3,49152,null,0,u.xb,[e.h,e.k,e.x],null,null),(n()(),e.mb(4,0,null,0,2,"ion-title",[],null,null,null,r.w,r.k)),e.lb(5,49152,null,0,u.vb,[e.h,e.k,e.x],null,null),(n()(),e.Bb(-1,0,[" Distant.io "])),(n()(),e.mb(7,0,null,null,34,"ion-content",[["force-overscroll","true"]],null,null,null,r.o,r.c)),e.lb(8,49152,null,0,u.s,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),(n()(),e.mb(9,0,null,0,22,"ion-list",[],null,null,null,r.t,r.h)),e.lb(10,49152,null,0,u.M,[e.h,e.k,e.x],null,null),(n()(),e.mb(11,0,null,0,9,"ion-item",[],null,null,null,r.r,r.f)),e.lb(12,49152,null,0,u.F,[e.h,e.k,e.x],null,null),(n()(),e.mb(13,0,null,0,2,"ion-label",[["placeholder","hola"]],null,null,null,r.s,r.g)),e.lb(14,49152,null,0,u.L,[e.h,e.k,e.x],null,null),(n()(),e.Bb(15,0,["",""])),(n()(),e.mb(16,0,null,0,1,"ion-icon",[["name","home-outline"],["slot","start"]],null,null,null,r.q,r.e)),e.lb(17,49152,null,0,u.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.mb(18,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,r.u,r.i)),e.lb(19,49152,null,0,u.T,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.Bb(-1,0,["Distancia a casa"])),(n()(),e.mb(21,0,null,0,10,"ion-item",[],null,null,null,r.r,r.f)),e.lb(22,49152,null,0,u.F,[e.h,e.k,e.x],null,null),(n()(),e.mb(23,0,null,0,3,"ion-label",[],null,null,null,r.s,r.g)),e.lb(24,49152,null,0,u.L,[e.h,e.k,e.x],null,null),(n()(),e.Bb(25,0,["",""])),e.yb(131072,i.b,[e.h]),(n()(),e.mb(27,0,null,0,1,"ion-icon",[["name","hourglass-outline"],["slot","start"]],null,null,null,r.q,r.e)),e.lb(28,49152,null,0,u.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.mb(29,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,r.u,r.i)),e.lb(30,49152,null,0,u.T,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.Bb(-1,0,["Tiempo restante"])),(n()(),e.mb(32,0,null,0,2,"ion-button",[["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.presentAlertConfirmGoingOut()&&e),e}),r.n,r.b)),e.lb(33,49152,null,0,u.i,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),e.Bb(-1,0,["Empezar salida"])),(n()(),e.mb(35,0,null,0,0,"div",[["id","map"],["style","overflow: hidden"]],null,null,null,null,null)),(n()(),e.mb(36,0,null,0,5,"ion-text",[["color","dark"],["style","text-align: center;"]],null,null,null,r.v,r.j)),e.lb(37,49152,null,0,u.sb,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.mb(38,0,null,0,3,"h5",[],null,null,null,null,null)),(n()(),e.mb(39,0,null,null,1,"a",[["href","https://opencollective.com/distantio"]],null,null,null,null,null)),(n()(),e.Bb(-1,null,["Ay\xfadame a combatirlo "])),(n()(),e.Bb(-1,null,["\ud83e\udda0 Gracias!\ud83d\udc99"]))],(function(n,l){n(l,1,0,!0),n(l,8,0,!0),n(l,17,0,"home-outline"),n(l,19,0,"primary"),n(l,28,0,"hourglass-outline"),n(l,30,0,"primary"),n(l,33,0,"secondary","block"),n(l,37,0,"dark")}),(function(n,l){var t=l.component;n(l,15,0,t.totalDistance),n(l,25,0,e.Cb(l,25,0,e.xb(l,26).transform(t.time)))}))}var p=e.ib("app-home",m,(function(n){return e.Db(0,[(n()(),e.mb(0,0,null,null,1,"app-home",[],null,null,null,f,b)),e.lb(1,49152,null,0,m,[c.a,u.a,u.Fb],null,null)],null,null)}),{},{},[]),d=t("s7LF"),v=t("iInd"),g=function n(){_classCallCheck(this,n)};t.d(l,"HomePageModuleNgFactory",(function(){return k}));var k=e.jb(o,[],(function(n){return e.ub([e.vb(512,e.j,e.V,[[8,[a.a,p]],[3,e.j],e.v]),e.vb(4608,i.j,i.i,[e.s,[2,i.p]]),e.vb(4608,d.c,d.c,[]),e.vb(4608,u.b,u.b,[e.x,e.g]),e.vb(4608,u.Bb,u.Bb,[u.b,e.j,e.p]),e.vb(4608,u.Eb,u.Eb,[u.b,e.j,e.p]),e.vb(1073742336,i.c,i.c,[]),e.vb(1073742336,d.b,d.b,[]),e.vb(1073742336,d.a,d.a,[]),e.vb(1073742336,u.zb,u.zb,[]),e.vb(1073742336,v.n,v.n,[[2,v.s],[2,v.m]]),e.vb(1073742336,g,g,[]),e.vb(1073742336,o,o,[]),e.vb(1024,v.k,(function(){return[[{path:"",component:m}]]}),[])])}))},s7LF:function(n,l,t){"use strict";var e=t("8Y7J");t("cUpR"),t("HDdC"),t("DH7j"),t("lJxs"),t("XoHu"),t("Cfvw"),t.d(l,"b",(function(){return r})),t.d(l,"c",(function(){return o})),t.d(l,"a",(function(){return u}));var o=function(){function n(){_classCallCheck(this,n),this._accessors=[]}return _createClass(n,[{key:"add",value:function(n,l){this._accessors.push([n,l])}},{key:"remove",value:function(n){for(var l=this._accessors.length-1;l>=0;--l)if(this._accessors[l][1]===n)return void this._accessors.splice(l,1)}},{key:"select",value:function(n){var l=this;this._accessors.forEach((function(t){l._isSameGroup(t,n)&&t[1]!==n&&t[1].fireUncheck(n.value)}))}},{key:"_isSameGroup",value:function(n,l){return!!n[0].control&&n[0]._parent===l._control._parent&&n[1].name===l.name}}]),n}(),a=new e.o("NgFormSelectorWarning"),r=function n(){_classCallCheck(this,n)},u=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"withConfig",value:function(l){return{ngModule:n,providers:[{provide:a,useValue:l.warnOnDeprecatedNgFormSelector}]}}}]),n}()}}]);