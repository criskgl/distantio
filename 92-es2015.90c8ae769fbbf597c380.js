(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{L6id:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class o{}var i=t("pMnS"),a=t("MKJQ"),s=t("sZkV"),r=t("SVse"),u=t("mrSG"),c=t("gTw3"),h=t("2Vo4");class m{constructor(l,n,t){this.geolocation=l,this.alertController=n,this.toastController=t,this.time=new h.a("00:00"),this.timerRunning=!1,this.setHomeLocation(),this.updateDistanceToHome();const e=this;setTimeout((function(){e.GoogleMap()}),2e3),this.geolocation.getCurrentPosition().then(l=>{this.geoMarker=new google.maps.Marker({position:{lat:l.coords.latitude,lng:l.coords.longitude},map:this.map,icon:"assets/img/blueDot.png"})}),this.geolocation.watchPosition({enableHighAccuracy:!0}).subscribe(l=>{this.my_current_position=new google.maps.LatLng(l.coords.latitude,l.coords.longitude),void 0===this.geoMarker?console.log("UNDEFINED!"):(console.log("setting marker..."),this.geoMarker.setMap(null),this.geoMarker=new google.maps.Marker({position:this.my_current_position,map:this.map,icon:"assets/img/blueDotMap.png"}))})}updateBlueDot(l,n){console.log("HEY"),new google.maps.Marker({position:{lat:l,lng:n},map:this.map,icon:"assets/img/blueDot.png"})}GoogleMap(){this.map=new google.maps.Map(document.getElementById("map"),{zoom:14,center:{lat:this.homeLat,lng:this.homeLon},mapTypeId:"terrain",disableDefaultUI:!0}),new google.maps.Circle({strokeColor:"#33ffff",strokeOpacity:.8,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.35,map:this.map,center:{lat:this.homeLat,lng:this.homeLon},radius:1e3}),new google.maps.Marker({position:{lat:this.homeLat,lng:this.homeLon},animation:google.maps.Animation.DROP,map:this.map,icon:"assets/img/mapMarkerHome.png"})}updateDistanceToHome(){this.geolocation.getCurrentPosition().then(l=>{this.currentLat=l.coords.latitude,this.currentLon=l.coords.longitude,console.log(this.homeLat),console.log(this.homeLon),this.totalDistance=this.calculateDistance(this.currentLon,this.homeLon,this.currentLat,this.homeLat)+""})}updateGeolocation(){this.geolocation.getCurrentPosition().then(l=>{this.currentLat=l.coords.latitude,this.currentLon=l.coords.longitude})}setHomeLocation(){this.geolocation.getCurrentPosition().then(l=>{this.homeLat=l.coords.latitude,this.homeLon=l.coords.longitude})}calculateDistance(l,n,t,e){var o=(e-t)*Math.PI/180,i=(n-l)*Math.PI/180,a=Math.sin(o/2)*Math.sin(o/2)+Math.cos(t*Math.PI/180)*Math.cos(e*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),s=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))*6371;return s>1?Math.round(s)+" km":s<=1?Math.round(1e3*s)+" m":s}presentAlertConfirmGoingOut(){return u.a(this,void 0,void 0,(function*(){if(0==this.timerRunning){const l=yield this.alertController.create({header:"Confirma!",message:"No podr\xe1s volver a reiniciar tu salida hasta que haya pasado 1h",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:l=>{console.log("Confirm Cancel: blah")}},{text:"Acepto",handler:()=>{this.setHomeLocation(),this.updateDistanceToHome(),this.timerRunning=!0,this.startTimer(60),this.presentToastConfirmStart()}}]});yield l.present()}else{const l=yield this.alertController.create({header:"Ya has iniciado tu salida!",message:"Podr\xe1s reiniciar tu salida cuando el tiempo haya llegado a 0",buttons:[{text:"Aceptar",role:"cancel",cssClass:"secondary",handler:l=>{console.log("Confirm Cancel: blah")}}]});yield l.present()}}))}presentToastConfirmStart(){return u.a(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Acabas de iniciar tu salida",duration:1e3})).present()}))}startTimer(l){clearInterval(this.interval),this.timeLeft=60*l,this.interval=setInterval(()=>{this.updateDistanceToHome(),this.updateTimeValue()},1e3)}updateTimeValue(){0==this.timeLeft&&(this.timerRunning=!1,clearInterval(this.interval));let l=this.timeLeft/60,n=this.timeLeft%60;l=String("0"+Math.floor(l)).slice(-2),n=String("0"+Math.floor(n)).slice(-2),this.time.next(l+" : "+n),--this.timeLeft}}var b=e.kb({encapsulation:0,styles:[["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#map[_ngcontent-%COMP%]{height:100vw;width:100%}"]],data:{}});function p(l){return e.Db(0,[(l()(),e.mb(0,0,null,null,6,"ion-header",[],null,null,null,a.t,a.f)),e.lb(1,49152,null,0,s.z,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.mb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.B,a.n)),e.lb(3,49152,null,0,s.xb,[e.h,e.k,e.x],null,null),(l()(),e.mb(4,0,null,0,2,"ion-title",[],null,null,null,a.A,a.m)),e.lb(5,49152,null,0,s.vb,[e.h,e.k,e.x],null,null),(l()(),e.Bb(-1,0,[" Distant.io "])),(l()(),e.mb(7,0,null,null,38,"ion-content",[["force-overscroll","true"]],null,null,null,a.q,a.c)),e.lb(8,49152,null,0,s.s,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),(l()(),e.mb(9,0,null,0,22,"ion-list",[],null,null,null,a.x,a.j)),e.lb(10,49152,null,0,s.M,[e.h,e.k,e.x],null,null),(l()(),e.mb(11,0,null,0,9,"ion-item",[],null,null,null,a.v,a.h)),e.lb(12,49152,null,0,s.F,[e.h,e.k,e.x],null,null),(l()(),e.mb(13,0,null,0,2,"ion-label",[["placeholder","hola"]],null,null,null,a.w,a.i)),e.lb(14,49152,null,0,s.L,[e.h,e.k,e.x],null,null),(l()(),e.Bb(15,0,["",""])),(l()(),e.mb(16,0,null,0,1,"ion-icon",[["name","home-outline"],["slot","start"]],null,null,null,a.u,a.g)),e.lb(17,49152,null,0,s.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.mb(18,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,a.y,a.k)),e.lb(19,49152,null,0,s.T,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Bb(-1,0,["Distancia a casa"])),(l()(),e.mb(21,0,null,0,10,"ion-item",[],null,null,null,a.v,a.h)),e.lb(22,49152,null,0,s.F,[e.h,e.k,e.x],null,null),(l()(),e.mb(23,0,null,0,3,"ion-label",[],null,null,null,a.w,a.i)),e.lb(24,49152,null,0,s.L,[e.h,e.k,e.x],null,null),(l()(),e.Bb(25,0,["",""])),e.yb(131072,r.b,[e.h]),(l()(),e.mb(27,0,null,0,1,"ion-icon",[["name","hourglass-outline"],["slot","start"]],null,null,null,a.u,a.g)),e.lb(28,49152,null,0,s.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.mb(29,0,null,0,2,"ion-note",[["color","primary"],["slot","end"]],null,null,null,a.y,a.k)),e.lb(30,49152,null,0,s.T,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Bb(-1,0,["Tiempo restante"])),(l()(),e.mb(32,0,null,0,2,"ion-button",[["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.presentAlertConfirmGoingOut()&&e),e}),a.p,a.b)),e.lb(33,49152,null,0,s.i,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Bb(-1,0,["Empezar salida"])),(l()(),e.mb(35,0,null,0,0,"div",[["id","map"],["style","overflow: hidden"]],null,null,null,null,null)),(l()(),e.mb(36,0,null,0,3,"ion-text",[["color","dark"],["style","text-align: center;"]],null,null,null,a.z,a.l)),e.lb(37,49152,null,0,s.sb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.mb(38,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),e.Bb(-1,null,["Ay\xfadame a combatirlo \u{1f94a}\u{1f9a0}"])),(l()(),e.mb(40,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.s,a.d)),e.lb(41,49152,null,0,s.u,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.mb(42,0,null,0,3,"ion-fab-button",[["color","danger"],["href","https://opencollective.com/distantio"]],null,null,null,a.r,a.e)),e.lb(43,49152,null,0,s.v,[e.h,e.k,e.x],{color:[0,"color"],href:[1,"href"]},null),(l()(),e.mb(44,0,null,0,1,"ion-icon",[["name","heart-outline"]],null,null,null,a.u,a.g)),e.lb(45,49152,null,0,s.A,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,!0),l(n,8,0,!0),l(n,17,0,"home-outline"),l(n,19,0,"primary"),l(n,28,0,"hourglass-outline"),l(n,30,0,"primary"),l(n,33,0,"secondary","block"),l(n,37,0,"dark"),l(n,41,0,"end","bottom"),l(n,43,0,"danger","https://opencollective.com/distantio"),l(n,45,0,"heart-outline")}),(function(l,n){var t=n.component;l(n,15,0,t.totalDistance),l(n,25,0,e.Cb(n,25,0,e.xb(n,26).transform(t.time)))}))}function d(l){return e.Db(0,[(l()(),e.mb(0,0,null,null,1,"app-home",[],null,null,null,p,b)),e.lb(1,49152,null,0,m,[c.a,s.a,s.Fb],null,null)],null,null)}var g=e.ib("app-home",m,d,{},{},[]),f=t("s7LF"),v=t("iInd");class k{}t.d(n,"HomePageModuleNgFactory",(function(){return M}));var M=e.jb(o,[],(function(l){return e.ub([e.vb(512,e.j,e.V,[[8,[i.a,g]],[3,e.j],e.v]),e.vb(4608,r.j,r.i,[e.s,[2,r.p]]),e.vb(4608,f.c,f.c,[]),e.vb(4608,s.b,s.b,[e.x,e.g]),e.vb(4608,s.Bb,s.Bb,[s.b,e.j,e.p]),e.vb(4608,s.Eb,s.Eb,[s.b,e.j,e.p]),e.vb(1073742336,r.c,r.c,[]),e.vb(1073742336,f.b,f.b,[]),e.vb(1073742336,f.a,f.a,[]),e.vb(1073742336,s.zb,s.zb,[]),e.vb(1073742336,v.n,v.n,[[2,v.s],[2,v.m]]),e.vb(1073742336,k,k,[]),e.vb(1073742336,o,o,[]),e.vb(1024,v.k,(function(){return[[{path:"",component:m}]]}),[])])}))},s7LF:function(l,n,t){"use strict";var e=t("8Y7J");t("cUpR"),t("HDdC"),t("DH7j"),t("lJxs"),t("XoHu"),t("Cfvw"),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return s}));class o{constructor(){this._accessors=[]}add(l,n){this._accessors.push([l,n])}remove(l){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===l)return void this._accessors.splice(n,1)}select(l){this._accessors.forEach(n=>{this._isSameGroup(n,l)&&n[1]!==l&&n[1].fireUncheck(l.value)})}_isSameGroup(l,n){return!!l[0].control&&l[0]._parent===n._control._parent&&l[1].name===n.name}}const i=new e.o("NgFormSelectorWarning");class a{}class s{static withConfig(l){return{ngModule:s,providers:[{provide:i,useValue:l.warnOnDeprecatedNgFormSelector}]}}}}}]);