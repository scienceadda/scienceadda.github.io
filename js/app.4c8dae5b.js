(function(e){function t(t){for(var a,c,o=t[0],s=t[1],u=t[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},c={app:0},r={app:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-07709945":"13f05790",about:"7349072c","chunk-6a783609":"bc1cb999","chunk-07fb323a":"2bbe65bd","chunk-1d9253a1":"ef822216","chunk-30980c24":"46502206","chunk-3c4cad5e":"09d2d548","chunk-4dc0df4e":"33fa5afa","chunk-5303b0ea":"93350c7b","chunk-665d9398":"27457dfc","chunk-6bf1887d":"0c7c9104","chunk-7ed1d0a0":"85eddf7f","chunk-ace3bc40":"0bcab17a","chunk-b781a798":"6ab7b6fa","chunk-e1e8dbde":"34ef423b","chunk-3097c424":"a76e5037","chunk-4ed59be6":"e80328ba","chunk-78ebee26":"4ae6f774"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-07709945":1,about:1,"chunk-6a783609":1,"chunk-07fb323a":1,"chunk-1d9253a1":1,"chunk-30980c24":1,"chunk-3c4cad5e":1,"chunk-4dc0df4e":1,"chunk-5303b0ea":1,"chunk-665d9398":1,"chunk-6bf1887d":1,"chunk-7ed1d0a0":1,"chunk-ace3bc40":1,"chunk-b781a798":1,"chunk-e1e8dbde":1,"chunk-3097c424":1,"chunk-4ed59be6":1,"chunk-78ebee26":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{"chunk-07709945":"38fb335c",about:"b6d263d4","chunk-6a783609":"0ab61f79","chunk-07fb323a":"c500f0d0","chunk-1d9253a1":"93429f1d","chunk-30980c24":"599f8c2c","chunk-3c4cad5e":"f65fecc6","chunk-4dc0df4e":"4e7b149c","chunk-5303b0ea":"1ad4c45d","chunk-665d9398":"4bbc88e8","chunk-6bf1887d":"e028f0ca","chunk-7ed1d0a0":"5be80aa2","chunk-ace3bc40":"fe18a27d","chunk-b781a798":"d132b168","chunk-e1e8dbde":"d46d037a","chunk-3097c424":"0150bbde","chunk-4ed59be6":"b70de84d","chunk-78ebee26":"7a6967c1"}[e]+".css",r=s.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete c[e],h.parentNode.removeChild(h),n(i)},h.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}r[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",["Login"!==this.$route.name?n("v-app-bar",{attrs:{app:"",dark:""}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){e.show=!e.show}}}),n("div",{attrs:{app:""}},[n("router-link",{staticClass:"homelink",attrs:{to:"/"}},[n("h3",{staticClass:"cursive"},[e._v("Science Adda")])])],1),n("v-spacer"),n("div",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{to:"/",text:""}},[e._v("Home")]),n("v-btn",{attrs:{to:"/varsity",text:""}},[e._v("Varsity")]),n("v-btn",{attrs:{to:"/medical",text:""}},[e._v("Medical")]),n("v-btn",{attrs:{to:"/engineering",text:""}},[e._v("Engineering")]),n("v-btn",{attrs:{href:"https://www.facebook.com/groups/scienceadda2020/",target:"_blank",text:""}},[e._v(" Facebook Group")])],1)],1):e._e(),n("v-navigation-drawer",{staticClass:"black navdrawer",attrs:{dark:"",app:"",temporary:""},on:{change:function(t){e.show=!e.show}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("div",{staticClass:"text-right mt-2 mr-2"},[n("v-icon",{on:{click:function(t){e.show=!e.show}}},[e._v("mdi-close")])],1),n("v-list",[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"balooda"},[e._v(" Home ")])],1)],1),n("v-list-item",{attrs:{to:"/varsity"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"balooda"},[e._v(" Varsity ")])],1)],1),n("v-list-item",{attrs:{to:"/medical"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"balooda"},[e._v(" Medical ")])],1)],1),n("v-list-item",{attrs:{to:"/engineering"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"balooda"},[e._v(" Engineering ")])],1)],1),n("v-list-item",{attrs:{href:"https://www.facebook.com/groups/scienceadda2020/",target:"_blank"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"balooda"},[e._v(" Facebook Group ")])],1)],1)],1)],1),n("v-main",{staticClass:"grey lighten-3"},[n("router-view")],1),n("div",{staticClass:"text-center py-4 black white--text",attrs:{dark:""}},[n("p",[e._v(" © 2021 All Right Reserved by "),n("v-btn",{attrs:{small:"",href:"https://www.facebook.com/groups/scienceadda2020/",target:"_blank"}},[e._v("Science Adda")])],1),n("p",[e._v(" Developed By "),n("v-btn",{attrs:{small:"",href:"https://www.facebook.com/AparsClassroom/",target:"_blank"}},[e._v("Apars Classroom")])],1)])],1)},r=[],i=(n("ac1f"),n("5319"),{name:"App",components:{},data:function(){return{show:!1}},methods:{navigateTocurrentPath:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.replace(e))}},created:function(){this.navigateTocurrentPath()}}),o=i,s=(n("9e87"),n("2877")),u=n("6544"),l=n.n(u),d=n("7496"),h=n("40dc"),m=n("5bc1"),f=n("8336"),b=n("132d"),p=n("8860"),v=n("da13"),k=n("5d23"),g=n("f6c4"),y=n("f774"),w=n("2fa4"),_=Object(s["a"])(o,c,r,!1,null,"30d306a1",null),C=_.exports;l()(_,{VApp:d["a"],VAppBar:h["a"],VAppBarNavIcon:m["a"],VBtn:f["a"],VIcon:b["a"],VList:p["a"],VListItem:v["a"],VListItemContent:k["a"],VListItemTitle:k["c"],VMain:g["a"],VNavigationDrawer:y["a"],VSpacer:w["a"]});n("d3b7"),n("3ca3"),n("ddb0");var x=n("8c4f"),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-img",{attrs:{src:n("d547")}}),e.courses.length>0?a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-card-title",[a("h2",{staticClass:"mx-auto"},[e._v("Our Courses")])]),a("v-card-text",[a("v-list",{staticClass:"transparent"},e._l(e.courses,(function(t,n){return a("v-list-item",{key:n,staticClass:"my-2 mx-3 coursedetails"},[a("v-list-item-content",{class:e.$vuetify.breakpoint.sm?"my-3 text-center":"my-3"},[a("v-list-item-title",[a("h3",[e._v(e._s(t.title))])]),a("v-list-item-subtitle",[a("p",{staticStyle:{"font-size":"16px black--text"}},[e._v(e._s(t.price)+" ৳")])]),a("div",{staticClass:"hidden-md-and-up mt-3",staticStyle:{display:"flex",gap:"5px","justify-content":"center"}},[t.routine?a("v-btn",{staticClass:"orange darken-3",attrs:{fab:"",small:"",to:"/routine/"+t.routine,dark:""}},[a("v-icon",[e._v("mdi-eye")])],1):e._e(),a("v-btn",{staticClass:"primary",attrs:{fab:"",small:"",href:t.link,target:"_blank"}},[a("v-icon",[e._v("mdi-facebook")])],1)],1)],1),a("v-list-item-action",{staticClass:"hidden-sm-and-down"},[a("div",{staticStyle:{display:"flex",gap:"5px","justify-content":"center"}},[t.routine?a("v-btn",{staticClass:"orange",attrs:{fab:"",small:"",to:"/routine/"+t.routine,dark:""}},[a("v-icon",[e._v("mdi-eye")])],1):e._e(),a("v-btn",{staticClass:"primary",attrs:{fab:"",small:"",href:t.link,target:"_blank"}},[a("v-icon",[e._v("mdi-facebook")])],1)],1)])],1)})),1)],1)],1):a("div",{staticClass:"text-center my-4"},[a("v-progress-circular",{attrs:{rotate:360,size:120,width:10,indeterminate:"",color:"orange"}})],1)],1)},P=[],L={name:"Home",data:function(){return{courses:[]}},methods:{getCourses:function(){var e=this;fetch("https://script.google.com/macros/s/AKfycbyx5uQDZ6BKjLZ3CXF9rEVAvUssY3DafWpJDIyMar0T_vVroVz9EU4hNnFWm0q2j0I3/exec?type=list").then((function(e){return e.json()})).then((function(t){e.courses=t}))}},created:function(){this.getCourses()}},S=L,j=(n("21bb"),n("b0af")),A=n("99d9"),I=n("a523"),E=n("adda"),O=n("1800"),T=n("490a"),B=Object(s["a"])(S,V,P,!1,null,null,null),M=B.exports;l()(B,{VBtn:f["a"],VCard:j["a"],VCardText:A["b"],VCardTitle:A["c"],VContainer:I["a"],VIcon:b["a"],VImg:E["a"],VList:p["a"],VListItem:v["a"],VListItemAction:O["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VProgressCircular:T["a"]}),a["a"].use(x["a"]);var N=[{path:"/",name:"Home",component:M},{path:"/engineering",name:"Engineering",component:function(){return n.e("chunk-4ed59be6").then(n.bind(null,"b988"))}},{path:"/engineering/liveclasses",name:"medicalLive",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-4dc0df4e")]).then(n.bind(null,"0e97"))}},{path:"/engineering/exam",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-b781a798")]).then(n.bind(null,"2ca4"))}},{path:"/engineering/questionsolve",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-665d9398")]).then(n.bind(null,"68cf"))}},{path:"/engineering/basicclass",name:"engineering",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-3c4cad5e")]).then(n.bind(null,"ee97"))}},{path:"/medical",name:"Medical",component:function(){return n.e("chunk-78ebee26").then(n.bind(null,"9175"))}},{path:"/medical/liveclasses",name:"medicalLive",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-5303b0ea")]).then(n.bind(null,"1a4a"))}},{path:"/medical/exam",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-30980c24")]).then(n.bind(null,"ec79"))}},{path:"/medical/questionsolve",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-6bf1887d")]).then(n.bind(null,"de56"))}},{path:"/medical/basicclass",name:"medical",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-7ed1d0a0")]).then(n.bind(null,"24e8"))}},{path:"/varsity",name:"Varsity",component:function(){return n.e("chunk-3097c424").then(n.bind(null,"dbc5"))}},{path:"/varsity/liveclasses",name:"varsityLive",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-ace3bc40")]).then(n.bind(null,"9d14"))}},{path:"/varsity/exam",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-07fb323a")]).then(n.bind(null,"0e6f"))}},{path:"/varsity/questionsolve",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-1d9253a1")]).then(n.bind(null,"19f8"))}},{path:"/varsity/basicclass",name:"varsity",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-6a783609"),n.e("chunk-e1e8dbde")]).then(n.bind(null,"da5a"))}},{path:"/routine/:r",name:"Routine",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("about")]).then(n.bind(null,"5f79"))}}],D=new x["a"]({mode:"history",base:"/",routes:N}),q=D,$=n("2f62");a["a"].use($["a"]);var F=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}}),H=n("f309");a["a"].use(H["a"]);var z=new H["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:q,store:F,vuetify:z,render:function(e){return e(C)}}).$mount("#app")},"8b93":function(e,t,n){},"9e87":function(e,t,n){"use strict";n("8b93")},d547:function(e,t,n){e.exports=n.p+"img/admission.177ed6af.png"}});
//# sourceMappingURL=app.4c8dae5b.js.map