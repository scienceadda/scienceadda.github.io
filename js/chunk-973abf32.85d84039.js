(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-973abf32"],{"767c":function(t,e,a){},ec79:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-card-title",[a("h3",{staticClass:"mx-auto"},[t._v("Medical")])]),a("v-card-subtitle",[a("p",{staticClass:"text-center"},[t._v("Exams")])]),a("v-card-text",[a("div",{staticClass:"subject__filters my-3"},[a("button",{class:"subject__button "+(""==t.se&&"activebtn"),on:{click:function(e){return t.selectSubject("")}}},[t._v(" All ")]),t._l(t.subjects,(function(e,c){return a("button",{key:c,class:"subject__button "+(t.se==e&&"activebtn"),on:{click:function(a){return t.selectSubject(e)}}},[t._v(" "+t._s(e)+" ")])}))],2),a("div",{staticClass:"subject__filters"},[a("v-sheet",[a("v-text-field",{attrs:{label:"Search...","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("v-data-table",{staticClass:"suleman black--text",attrs:{"items-per-page":20,"items-per-page-options":[20,50,100,-1],search:t.search,items:t.selected,headers:t.headers,loading:t.selected.length<1},scopedSlots:t._u([{key:"item.link",fn:function(e){var c=e.item;return[c.link?a("v-btn",{staticClass:"indigo",attrs:{href:c.link,small:"",target:"_blank",fab:"",dark:""}},[a("v-icon",[t._v("mdi-play")])],1):t._e()]}}])})],1)],1)],1)},s=[],n=(a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("159b"),a("ac1f"),a("5319"),a("4de4"),a("caad"),a("2532"),{data:function(){return{routine:[],selected:[],subjects:new Set,search:"",se:"",headers:[{text:"Chapter",value:"chapter"},{text:"Subject",value:"subject",align:""},{text:"Question",value:"link",align:"center"}]}},methods:{getData:function(){var t=this;fetch("https://script.google.com/macros/s/AKfycbwkXvx0yzjiRrEiRBLUiFDqqpw2sU6W-Mv9aH_QncMgo_xaviSmqtij-odnni1wtGX1/exec?type=medicalexams").then((function(t){return t.json()})).then((function(e){t.routine=e.routines,t.selected=t.routine,t.routine.forEach((function(e){if(e.subject){var a=e.subject.replace(" 1st Paper","").replace(" 2nd Paper","");t.subjects.add(a)}}))}))},selectSubject:function(t){this.se=t,this.selected=this.routine.filter((function(e){if(e.subject.includes(t))return e}))}},created:function(){this.getData()}}),i=n,r=(a("f230"),a("2877")),l=a("6544"),u=a.n(l),o=a("8336"),d=a("b0af"),b=a("99d9"),f=a("a523"),h=a("8fea"),v=a("132d"),p=a("8dd9"),_=a("8654"),m=Object(r["a"])(i,c,s,!1,null,"cc0f559a",null);e["default"]=m.exports;u()(m,{VBtn:o["a"],VCard:d["a"],VCardSubtitle:b["a"],VCardText:b["b"],VCardTitle:b["c"],VContainer:f["a"],VDataTable:h["a"],VIcon:v["a"],VSheet:p["a"],VTextField:_["a"]})},f230:function(t,e,a){"use strict";a("767c")}}]);
//# sourceMappingURL=chunk-973abf32.85d84039.js.map