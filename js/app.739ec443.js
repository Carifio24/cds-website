(function(e){function t(t){for(var r,a,o=t[0],s=t[1],i=t[2],d=0,l=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&l.push(u[a][0]),u[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==u[o]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},u={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0baa50":"a09ca633","chunk-2d217707":"cc9ee71d","chunk-64f11907":"18bfb70f","chunk-66ed997b":"9b4ecc0a","chunk-6a2c0006":"f1d6f358","chunk-6f4414fd":"e8d7329e","chunk-78809ed2":"c867eeb2","chunk-e26f36b2":"0fa44c89","chunk-f0bc1118":"f047c37f"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-66ed997b":1,"chunk-78809ed2":1,"chunk-e26f36b2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0baa50":"31d6cfe0","chunk-2d217707":"31d6cfe0","chunk-64f11907":"31d6cfe0","chunk-66ed997b":"5322e9e5","chunk-6a2c0006":"31d6cfe0","chunk-6f4414fd":"31d6cfe0","chunk-78809ed2":"8542be78","chunk-e26f36b2":"5322e9e5","chunk-f0bc1118":"31d6cfe0"}[e]+".css",u=s.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var i=c[o],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===u))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],d=i.getAttribute("data-href");if(d===r||d===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}u[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cds-website/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h}));var r=n("2b0e"),a=n("2f62"),u=n("842b"),c=n("d4ec"),o=n("bee2"),s=n("262e"),i=n("2caf"),d=n("9ab4"),l=n("6fc5"),f=n("0670"),p=function(e){Object(s["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(o["a"])(n,[{key:"setDarkMode",value:function(e){f["a"].framework.theme.dark=e}},{key:"toggleDarkMode",value:function(){f["a"].framework.theme.dark=!f["a"].framework.theme.dark}}]),n}(l["e"]);Object(d["a"])([l["c"]],p.prototype,"setDarkMode",null),Object(d["a"])([l["c"]],p.prototype,"toggleDarkMode",null),p=Object(d["a"])([Object(l["b"])({namespaced:!0,stateFactory:!0})],p),r["default"].use(a["a"]);var b="api",h="website",m=new a["a"].Store({});m.registerModule(b,u["a"]),m.registerModule(h,p);t["b"]=m},"0670":function(e,t,n){"use strict";var r=n("2b0e"),a=n("ce5b"),u=n.n(a);n("bf40"),n("5363");r["default"].use(u.a);var c=new u.a({theme:{dark:!0,options:{customProperties:!0}}});t["a"]=c},"1a5d":function(e,t,n){var r={"./CreateAccount.vue":["36f9","chunk-78809ed2"],"./CreateEducatorAccount.vue":["506f","chunk-64f11907"],"./CreateStudentAccount.vue":["30c0","chunk-6a2c0006"],"./EducatorAccountCreated.vue":["37a7","chunk-2d0baa50"],"./Home.vue":["bb51"],"./Login.vue":["a55b","chunk-6f4414fd"],"./ManageClasses.vue":["1938","chunk-f0bc1118"],"./StudentAccountCreated.vue":["c774","chunk-2d217707"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="1a5d",e.exports=a},2395:function(e,t,n){},"7c55":function(e,t,n){"use strict";n("2395")},"842b":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return v}));var r,a=n("d4ec"),u=n("bee2"),c=n("262e"),o=n("2caf"),s=n("1da1"),i=(n("96cf"),n("99af"),n("9ab4")),d=n("bc3a"),l=n.n(d),f=n("6fc5");(function(e){e[e["None"]=0]="None",e[e["Student"]=1]="Student",e[e["Educator"]=2]="Educator",e[e["Admin"]=3]="Admin"})(r||(r={}));var p="https://api.cosmicds.cfa.harvard.edu";function b(e){return h.apply(this,arguments)}function h(){return h=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.type===r.Educator||t.type===r.Student){e.next=2;break}return e.abrupt("return",[]);case 2:return n=t.type===r.Educator?"educator":"student",e.next=5,l.a.get("".concat(p,"/").concat(n,"-classes/").concat(t.id));case 5:return a=e.sent,e.abrupt("return",a.data.classes);case 7:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}var m={id:-1,type:r.None},v=function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.user=m,e.userClasses=[],e}return Object(u["a"])(n,[{key:"userId",get:function(){return this.user.id}},{key:"userType",get:function(){return this.user.type}},{key:"setUser",value:function(e){this.user=e}},{key:"setUserClasses",value:function(e){this.userClasses=e}},{key:"submitClassCreation",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.state,e.next=3,l.a.post("".concat(p,"/create-class"),{name:t,educatorID:n.user.id});case 3:if(r=e.sent,console.log(this),console.log(r),"ok"!==r.data.status){e.next=11;break}return console.log("OK!"),a=r.data.class,u=n.userClasses.concat([a]),e.abrupt("return",{userClasses:u});case 11:return e.abrupt("return",{userClasses:n.userClasses});case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"submitEducatorSignUp",value:function(e){return l.a.post("".concat(p,"/educator-sign-up"),e)}},{key:"submitStudentSignUp",value:function(e){return l.a.post("".concat(p,"/student-sign-up"),e)}},{key:"submitStudentSignIn",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("".concat(p,"/student-login"),{email:t.email,password:t.password});case 2:if(n=e.sent,!n.data.success){e.next=10;break}return a={id:n.data.id,type:r.Student},e.next=7,b(a);case 7:u=e.sent,this.context.commit("setUser",a),this.context.commit("setUserClasses",u);case 10:return e.abrupt("return",n.data);case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"submitEducatorSignIn",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("".concat(p,"/educator-login"),{email:t.email,password:t.password});case 2:if(n=e.sent,!n.data.success){e.next=10;break}return a={id:n.data.id,type:r.Educator},e.next=7,b(a);case 7:u=e.sent,this.context.commit("setUser",a),this.context.commit("setUserClasses",u);case 10:return e.abrupt("return",n.data);case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){this.user=m,this.userClasses=[]}},{key:"validateClassroomCode",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(p,"/validate-classroom-code/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.valid);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(f["e"]);Object(i["a"])([f["c"]],v.prototype,"setUser",null),Object(i["a"])([f["c"]],v.prototype,"setUserClasses",null),Object(i["a"])([Object(f["d"])({mutate:["userClasses"]})],v.prototype,"submitClassCreation",null),Object(i["a"])([Object(f["a"])({rawError:!0})],v.prototype,"submitEducatorSignUp",null),Object(i["a"])([Object(f["a"])({rawError:!0})],v.prototype,"submitStudentSignUp",null),Object(i["a"])([Object(f["a"])({rawError:!0})],v.prototype,"submitStudentSignIn",null),Object(i["a"])([Object(f["a"])({rawError:!0})],v.prototype,"submitEducatorSignIn",null),Object(i["a"])([f["c"]],v.prototype,"logout",null),Object(i["a"])([Object(f["a"])({rawError:!0})],v.prototype,"validateClassroomCode",null),v=Object(i["a"])([Object(f["b"])({namespaced:!0,stateFactory:!0})],v)},a449:function(e,t,n){var r={"./AppLayout.vue":["dead"],"./DefaultLayout.vue":["04dd","chunk-e26f36b2"],"./TestLayout.vue":["8275","chunk-66ed997b"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="a449",e.exports=a},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"d-flex justify-center align-center"},[n("v-col",{attrs:{cols:"12"}},[n("div",[e._v(" COSMIC DATA STORIES HOME PAGE ")])])],1)],1)},a=[],u=n("bee2"),c=n("d4ec"),o=n("262e"),s=n("2caf"),i=n("9ab4"),d=n("1b40"),l=function(e){Object(o["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.title="Home",e}return Object(u["a"])(n)}(d["b"]);l=Object(i["a"])([d["a"]],l);var f=l,p=f,b=n("2877"),h=Object(b["a"])(p,r,a,!1,null,null,null);t["default"]=h.exports},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app","data-app":""}},[n("app-layout",[n("router-view")],1)],1)},u=[],c=(n("7c55"),n("2877")),o={},s=Object(c["a"])(o,a,u,!1,null,null,null),i=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),l=n("bb51");function f(e){return function(){return n("1a5d")("./".concat(e,".vue"))}}r["default"].use(d["a"]);var p=[{path:"/",name:"Home",component:l["default"]},{path:"/create-account",name:"Create Account",component:f("CreateAccount")},{path:"/login",name:"Login",component:f("Login")},{path:"/educator-create",name:"Create Educator Account",component:f("CreateEducatorAccount")},{path:"/student-create",name:"Create Student Account",component:f("CreateStudentAccount")},{path:"/manage-classrooms",name:"Manage Classrooms",component:f("ManageClasses")},{path:"/educator-account-created",name:"Educator Account Created",component:f("EducatorAccountCreated")},{path:"/student-account-created",name:"Student Account Created",component:f("StudentAccountCreated")}],b=new d["a"]({mode:"history",base:"/cds-website/",routes:p}),h=b,m=n("0613"),v=n("0670"),y=n("dead");r["default"].component("app-layout",y["default"]),r["default"].config.productionTip=!1,new r["default"]({vuetify:v["a"],router:h,store:m["b"],render:function(e){return e(i)}}).$mount("#app")},dead:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.layout,{tag:"component"},[e._t("default")],2)},a=[],u=n("d4ec"),c=n("bee2"),o=n("262e"),s=n("2caf"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("9ab4")),d=n("1b40"),l=function(e){Object(o["a"])(r,e);var t=Object(s["a"])(r);function r(){var e;return Object(u["a"])(this,r),e=t.apply(this,arguments),e.defaultLayout="DefaultLayout",e.layoutName=e.defaultLayout,e.layout=function(){return n("a449")("./".concat(e.defaultLayout,".vue"))},e}return Object(c["a"])(r,[{key:"updateLayoutIfNeeded",value:function(e){e=e||this.defaultLayout,e!==this.layoutName&&(this.layout=function(){return n("a449")("./".concat(e,".vue"))},this.layoutName=e)}}]),r}(d["b"]);Object(i["a"])([Object(d["c"])("$route.meta.layout")],l.prototype,"updateLayoutIfNeeded",null),l=Object(i["a"])([d["a"]],l);var f=l,p=f,b=n("2877"),h=Object(b["a"])(p,r,a,!1,null,null,null);t["default"]=h.exports}});
//# sourceMappingURL=app.739ec443.js.map