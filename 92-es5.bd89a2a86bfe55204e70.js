function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{L6id:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=function n(){_classCallCheck(this,n)},a=e("pMnS"),i=e("MKJQ"),r=e("sZkV"),u=e("SVse"),s=e("mrSG"),c=e("gTw3"),h=e("2Vo4"),m=function(){function n(l,e,t){var o=this;_classCallCheck(this,n),this.geolocation=l,this.alertController=e,this.toastController=t,this.time=new h.a("00:00"),this.timerRunning=!1,this.setHomeLocation(),this.updateDistanceToHome();var a=this;setTimeout((function(){a.GoogleMap()}),2e3),this.geolocation.getCurrentPosition().then((function(n){o.geoMarker=new google.maps.Marker({position:{lat:n.coords.latitude,lng:n.coords.longitude},map:o.map,icon:"assets/img/blueDot.png"})})),this.geolocation.watchPosition({enableHighAccuracy:!0}).subscribe((function(n){o.my_current_position=new google.maps.LatLng(n.coords.latitude,n.coords.longitude),void 0===o.geoMarker?console.log("UNDEFINED!"):(console.log("setting marker..."),o.geoMarker.setMap(null),o.geoMarker=new google.maps.Marker({position:o.my_current_position,map:o.map,icon:"assets/img/blueDotMap.png"}))}))}return _createClass(n,[{key:"updateBlueDot",value:function(n,l){console.log("HEY"),new google.maps.Marker({position:{lat:n,lng:l},map:this.map,icon:"assets/img/blueDot.png"})}},{key:"GoogleMap",value:function(){this.map=new google.maps.Map(document.getElementById("map"),{zoom:14,center:{lat:this.homeLat,lng:this.homeLon},mapTypeId:"terrain",disableDefaultUI:!0}),new google.maps.Circle({strokeColor:"#33ffff",strokeOpacity:.8,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.35,map:this.map,center:{lat:this.homeLat,lng:this.homeLon},radius:1e3}),new google.maps.Marker({position:{lat:this.homeLat,lng:this.homeLon},animation:google.maps.Animation.DROP,map:this.map,icon:"assets/img/mapMarkerHome.png"})}},{key:"updateDistanceToHome",value:function(){var n=this;this.geolocation.getCurrentPosition().then((function(l){n.currentLat=l.coords.latitude,n.currentLon=l.coords.longitude,console.log(n.homeLat),console.log(n.homeLon),n.totalDistance=n.calculateDistance(n.currentLon,n.homeLon,n.currentLat,n.homeLat)+""}))}},{key:"updateGeolocation",value:function(){var n=this;this.geolocation.getCurrentPosition().then((function(l){n.currentLat=l.coords.latitude,n.currentLon=l.coords.longitude}))}},{key:"setHomeLocation",value:function(){var n=this;this.geolocation.getCurrentPosition().then((function(l){n.homeLat=l.coords.latitude,n.homeLon=l.coords.longitude}))}},{key:"calculateDistance",value:function(n,l,e,t){var o=(t-e)*Math.PI/180,a=(l-n)*Math.PI/180,i=Math.sin(o/2)*Math.sin(o/2)+Math.cos(e*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2),r=2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))*6371;return r>1?Math.round(r)+" km":r<=1?Math.round(1e3*r)+" m":r}},{key:"presentAlertConfirmGoingOut",value:function(){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,e,t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!=this.timerRunning){n.next=8;break}return n.next=3,this.alertController.create({header:"Confirma!",message:"No podr\xe1s volver a reiniciar tu salida hasta que haya pasado 1h",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah")}},{text:"Acepto",handler:function(){t.updateDistanceToHome(),t.timerRunning=!0,t.startTimer(.1),t.presentToastConfirmStart()}}]});case 3:return l=n.sent,n.next=6,l.present();case 6:n.next=13;break;case 8:return n.next=10,this.alertController.create({header:"Ya has iniciado tu salida!",message:"Podr\xe1s reiniciar tu salida cuando el tiempo haya llegado a 0",buttons:[{text:"Aceptar",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah")}}]});case 10:return e=n.sent,n.next=13,e.present();case 13:case"end":return n.stop()}}),n,this)})))}},{key:"presentToastConfirmStart",value:function(){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:"Acabas de iniciar tu salida",duration:1e3});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"startTimer",value:function(n){var l=this;clearInterval(this.interval),this.timeLeft=60*n,this.interval=setInterval((function(){l.updateDistanceToHome(),l.updateTimeValue()}),1e3)}},{key:"updateTimeValue",value:function(){0==this.timeLeft&&(this.timerRunning=!1,clearInterval(this.interval));var n=this.timeLeft/60,l=this.timeLeft%60;n=String("0"+Math.floor(n)).slice(-2),l=String("0"+Math.floor(l)).slice(-2),this.time.next(n+" : "+l),--this.timeLeft}}]),n}(),p=t.kb({encapsulation:0,styles:[["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#map[_ngcontent-%COMP%]{height:100vw;width:100%}"]],data:{}});function b(n){return t.Db(0,[(n()(),t.mb(0,0,null,null,6,"ion-header",[],null,null,null,i.t,i.f)),t.lb(1,49152,null,0,r.z,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(n()(),t.mb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.B,i.n)),t.lb(3,49152,null,0,r.xb,[t.h,t.k,t.x],null,null),(n()(),t.mb(4,0,null,0,2,"ion-title",[],null,null,null,i.A,i.m)),t.lb(5,49152,null,0,r.vb,[t.h,t.k,t.x],null,null),(n()(),t.Bb(-1,0,[" Distant.io "])),(n()(),t.mb(7,0,null,null,38,"ion-content",[["force-overscroll","true"]],null,null,null,i.q,i.c)),t.lb(8,49152,null,0,r.s,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(n()(),t.mb(9,0,null,0,22,"ion-list",[],null,null,null,i.x,i.j)),t.lb(10,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(n()(),t.mb(11,0,null,0,9,"ion-item",[],null,null,null,i.v,i.h)),t.lb(12,49152,null,0,r.F,[t.h,t.k,t.x],null,null),(n()(),t.mb(13,0,null,0,2,"ion-label",[["placeholder","hola"]],null,null,null,i.w,i.i)),t.lb(14,49152,null,0,r.L,[t.h,t.k,t.x],null,null),(n()(),t.Bb(15,0,["",""])),(n()(),t.mb(16,0,null,0,1,"ion-icon",[["name","home-outline"],["slot","start"]],null,null,null,i.u,i.g)),t.lb(17,49152,null,0,r.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.mb(18,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,i.y,i.k)),t.lb(19,49152,null,0,r.T,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Bb(-1,0,["Distancia a casa"])),(n()(),t.mb(21,0,null,0,10,"ion-item",[],null,null,null,i.v,i.h)),t.lb(22,49152,null,0,r.F,[t.h,t.k,t.x],null,null),(n()(),t.mb(23,0,null,0,3,"ion-label",[],null,null,null,i.w,i.i)),t.lb(24,49152,null,0,r.L,[t.h,t.k,t.x],null,null),(n()(),t.Bb(25,0,["",""])),t.yb(131072,u.b,[t.h]),(n()(),t.mb(27,0,null,0,1,"ion-icon",[["name","hourglass-outline"],["slot","start"]],null,null,null,i.u,i.g)),t.lb(28,49152,null,0,r.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.mb(29,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,i.y,i.k)),t.lb(30,49152,null,0,r.T,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Bb(-1,0,["Tiempo restante"])),(n()(),t.mb(32,0,null,0,2,"ion-button",[["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.presentAlertConfirmGoingOut()&&t),t}),i.p,i.b)),t.lb(33,49152,null,0,r.i,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t.Bb(-1,0,["Empezar salida"])),(n()(),t.mb(35,0,null,0,0,"div",[["id","map"],["style","overflow: hidden"]],null,null,null,null,null)),(n()(),t.mb(36,0,null,0,3,"ion-text",[["color","dark"],["style","text-align: center;"]],null,null,null,i.z,i.l)),t.lb(37,49152,null,0,r.sb,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.mb(38,0,null,0,1,"h5",[],null,null,null,null,null)),(n()(),t.Bb(-1,null,["Ay\xfadame a combatirlo \ud83e\udd4a\ud83e\udda0"])),(n()(),t.mb(40,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.s,i.d)),t.lb(41,49152,null,0,r.u,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t.mb(42,0,null,0,3,"ion-fab-button",[["color","danger"],["href","https://opencollective.com/distantio"]],null,null,null,i.r,i.e)),t.lb(43,49152,null,0,r.v,[t.h,t.k,t.x],{color:[0,"color"],href:[1,"href"]},null),(n()(),t.mb(44,0,null,0,1,"ion-icon",[["name","heart-outline"]],null,null,null,i.u,i.g)),t.lb(45,49152,null,0,r.A,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,!0),n(l,8,0,!0),n(l,17,0,"home-outline"),n(l,19,0,"primary"),n(l,28,0,"hourglass-outline"),n(l,30,0,"primary"),n(l,33,0,"secondary","block"),n(l,37,0,"dark"),n(l,41,0,"end","bottom"),n(l,43,0,"danger","https://opencollective.com/distantio"),n(l,45,0,"heart-outline")}),(function(n,l){var e=l.component;n(l,15,0,e.totalDistance),n(l,25,0,t.Cb(l,25,0,t.xb(l,26).transform(e.time)))}))}var g=t.ib("app-home",m,(function(n){return t.Db(0,[(n()(),t.mb(0,0,null,null,1,"app-home",[],null,null,null,b,p)),t.lb(1,49152,null,0,m,[c.a,r.a,r.Fb],null,null)],null,null)}),{},{},[]),d=e("s7LF"),f=e("iInd"),v=function n(){_classCallCheck(this,n)};e.d(l,"HomePageModuleNgFactory",(function(){return k}));var k=t.jb(o,[],(function(n){return t.ub([t.vb(512,t.j,t.V,[[8,[a.a,g]],[3,t.j],t.v]),t.vb(4608,u.j,u.i,[t.s,[2,u.p]]),t.vb(4608,d.c,d.c,[]),t.vb(4608,r.b,r.b,[t.x,t.g]),t.vb(4608,r.Bb,r.Bb,[r.b,t.j,t.p]),t.vb(4608,r.Eb,r.Eb,[r.b,t.j,t.p]),t.vb(1073742336,u.c,u.c,[]),t.vb(1073742336,d.b,d.b,[]),t.vb(1073742336,d.a,d.a,[]),t.vb(1073742336,r.zb,r.zb,[]),t.vb(1073742336,f.n,f.n,[[2,f.s],[2,f.m]]),t.vb(1073742336,v,v,[]),t.vb(1073742336,o,o,[]),t.vb(1024,f.k,(function(){return[[{path:"",component:m}]]}),[])])}))},s7LF:function(n,l,e){"use strict";var t=e("8Y7J");e("cUpR"),e("HDdC"),e("DH7j"),e("lJxs"),e("XoHu"),e("Cfvw"),e.d(l,"b",(function(){return i})),e.d(l,"c",(function(){return o})),e.d(l,"a",(function(){return r}));var o=function(){function n(){_classCallCheck(this,n),this._accessors=[]}return _createClass(n,[{key:"add",value:function(n,l){this._accessors.push([n,l])}},{key:"remove",value:function(n){for(var l=this._accessors.length-1;l>=0;--l)if(this._accessors[l][1]===n)return void this._accessors.splice(l,1)}},{key:"select",value:function(n){var l=this;this._accessors.forEach((function(e){l._isSameGroup(e,n)&&e[1]!==n&&e[1].fireUncheck(n.value)}))}},{key:"_isSameGroup",value:function(n,l){return!!n[0].control&&n[0]._parent===l._control._parent&&n[1].name===l.name}}]),n}(),a=new t.o("NgFormSelectorWarning"),i=function n(){_classCallCheck(this,n)},r=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"withConfig",value:function(l){return{ngModule:n,providers:[{provide:a,useValue:l.warnOnDeprecatedNgFormSelector}]}}}]),n}()}}]);