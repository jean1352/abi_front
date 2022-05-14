(this["webpackJsonpabi-frontend"]=this["webpackJsonpabi-frontend"]||[]).push([[161],{1716:function(e,r,n){"use strict";n.r(r),n.d(r,"FirebaseAnalyticsWeb",(function(){return p}));var t=n(0),a=n.n(t),s=n(2),i=n(4),c=n(5),u=n(11),o=n(12),p=function(e){Object(u.a)(n,e);var r=Object(o.a)(n);function n(){var e;return Object(i.a)(this,n),(e=r.call(this)).not_supported_mssg="This method is not supported",e.options_missing_mssg="Firebase options are missing",e.duplicate_app_mssg="Firebase app already exists",e.analytics_missing_mssg="Firebase analytics is not initialized. Make sure initializeFirebase() is called once",e.scripts=[{key:"firebase-app",src:"https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"},{key:"firebase-ac",src:"https://www.gstatic.com/firebasejs/8.2.3/firebase-analytics.js"}],e.ready=new Promise((function(r){return e.readyResolver=r})),e.configure(),e}return Object(c.a)(n,[{key:"initializeFirebase",value:function(e){var r=this;return new Promise(function(){var n=Object(s.a)(a.a.mark((function n(t,s){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.ready;case 2:if(!r.hasFirebaseInitialized()){n.next=5;break}return s(r.duplicate_app_mssg),n.abrupt("return");case 5:if(e){n.next=8;break}return s(r.options_missing_mssg),n.abrupt("return");case 8:i=window.firebase.initializeApp(e),r.analyticsRef=i.analytics(),t(r.analyticsRef);case 11:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}())}},{key:"setUserId",value:function(e){var r=this;return new Promise(function(){var n=Object(s.a)(a.a.mark((function n(t,s){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.ready;case 2:if(r.analyticsRef){n.next=5;break}return s(r.analytics_missing_mssg),n.abrupt("return");case 5:if(i=(e||{userId:void 0}).userId){n.next=9;break}return s("userId property is missing"),n.abrupt("return");case 9:r.analyticsRef.setUserId(i),t();case 11:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}())}},{key:"setUserProperty",value:function(e){var r=this;return new Promise(function(){var n=Object(s.a)(a.a.mark((function n(t,s){var i,c,u,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.ready;case 2:if(r.analyticsRef){n.next=5;break}return s(r.analytics_missing_mssg),n.abrupt("return");case 5:if(c=(i=e||{name:void 0,value:void 0}).name,u=i.value,c){n.next=9;break}return s("name property is missing"),n.abrupt("return");case 9:if(u){n.next=12;break}return s("value property is missing"),n.abrupt("return");case 12:(o={})[c]=u,r.analyticsRef.setUserProperties(o),t();case 16:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}())}},{key:"getAppInstanceId",value:function(){return new Promise((function(e,r){return e}))}},{key:"setScreenName",value:function(e){return new Promise((function(e,r){return e}))}},{key:"reset",value:function(){return new Promise((function(e,r){return e}))}},{key:"logEvent",value:function(e){var r=this;return new Promise(function(){var n=Object(s.a)(a.a.mark((function n(t,s){var i,c,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.ready;case 2:if(r.analyticsRef){n.next=5;break}return s(r.analytics_missing_mssg),n.abrupt("return");case 5:if(c=(i=e||{name:void 0,params:void 0}).name,u=i.params,c){n.next=9;break}return s("name property is missing"),n.abrupt("return");case 9:r.analyticsRef.logEvent(c,u),t();case 11:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}())}},{key:"setCollectionEnabled",value:function(e){var r=this;return new Promise(function(){var n=Object(s.a)(a.a.mark((function n(t,s){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.ready;case 2:if(r.analyticsRef){n.next=5;break}return s(r.analytics_missing_mssg),n.abrupt("return");case 5:i=(e||{enabled:!1}).enabled,r.analyticsRef.setAnalyticsCollectionEnabled(i),t();case 8:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}())}},{key:"setSessionTimeoutDuration",value:function(e){var r=this;return new Promise((function(e,n){n(r.not_supported_mssg)}))}},{key:"remoteConfig",get:function(){return this.analyticsRef}},{key:"enable",value:function(){var e=this;return new Promise(function(){var r=Object(s.a)(a.a.mark((function r(n,t){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.ready;case 2:if(e.analyticsRef){r.next=5;break}return t(e.analytics_missing_mssg),r.abrupt("return");case 5:e.analyticsRef.setAnalyticsCollectionEnabled(!0),n();case 7:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}())}},{key:"disable",value:function(){var e=this;return new Promise(function(){var r=Object(s.a)(a.a.mark((function r(n,t){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.ready;case 2:if(e.analyticsRef){r.next=5;break}return t(e.analytics_missing_mssg),r.abrupt("return");case 5:e.analyticsRef.setAnalyticsCollectionEnabled(!1),n();case 7:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}())}},{key:"configure",value:function(){var e=Object(s.a)(a.a.mark((function e(){var r,n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.loadScripts();case 3:window.firebase&&window.firebase.analytics&&this.hasFirebaseInitialized()&&(this.analyticsRef=window.firebase.analytics()),e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:r=setInterval((function(){window.firebase&&(clearInterval(r),n.readyResolver())}),50);case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadScripts",value:function(){var e=this,r=this.scripts[0],n=this.scripts[1];return new Promise(function(){var t=Object(s.a)(a.a.mark((function t(s,i){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=e.scripts.map((function(e){return e.key})),!document.getElementById(c[0])||!document.getElementById(c[1])){t.next=3;break}return t.abrupt("return",s(null));case 3:return t.next=5,e.loadScript(r.key,r.src);case 5:return t.next=7,e.loadScript(n.key,n.src);case 7:s(null);case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"loadScript",value:function(e,r){return new Promise((function(n,t){var a=document.createElement("script");a.type="text/javascript",a.src=r,a.id=e,a.onload=n,a.onerror=t,document.querySelector("head").appendChild(a)}))}},{key:"hasFirebaseInitialized",value:function(){if(!window.firebase)return!1;var e=window.firebase.apps;return!e||0!==e.length}}]),n}(n(30).WebPlugin)}}]);
//# sourceMappingURL=161.4731f5bf.chunk.js.map