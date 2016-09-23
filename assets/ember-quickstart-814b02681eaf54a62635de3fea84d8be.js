"use strict";define("ember-quickstart/app",["exports","ember","ember-quickstart/resolver","ember-load-initializers","ember-quickstart/config/environment"],function(e,t,r,n,a){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:r.default}),(0,n.default)(i,a.default.modulePrefix),e.default=i}),define("ember-quickstart/components/app-version",["exports","ember-cli-app-version/components/app-version","ember-quickstart/config/environment"],function(e,t,r){var n=r.default.APP.name,a=r.default.APP.version;e.default=t.default.extend({version:a,name:n})}),define("ember-quickstart/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("ember-quickstart/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("ember-quickstart/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-quickstart/config/environment"],function(e,t,r){e.default={name:"App Version",initialize:(0,t.default)(r.default.APP.name,r.default.APP.version)}}),define("ember-quickstart/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-quickstart/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("ember-quickstart/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,r){e.default={name:"ember-data",initialize:t.default}}),define("ember-quickstart/initializers/export-application-global",["exports","ember","ember-quickstart/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r.default.exportApplicationGlobal!==!1){var n,a=r.default.exportApplicationGlobal;n="string"==typeof a?a:t.default.String.classify(r.default.modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("ember-quickstart/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("ember-quickstart/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("ember-quickstart/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("ember-quickstart/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("ember-quickstart/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("ember-quickstart/router",["exports","ember","ember-quickstart/config/environment"],function(e,t,r){var n=t.default.Router.extend({location:r.default.locationType,rootURL:r.default.rootURL});n.map(function(){this.route("scientists")}),e.default=n}),define("ember-quickstart/routes/scientists",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){var e=this.get("store");return e.getScienctists()},store:t.default.inject.service("store")})}),define("ember-quickstart/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-quickstart/services/store",["exports","ember"],function(e,t){e.default=t.default.Service.extend({getScienctists:function(){return console.log("Hello from store service!"),["Marie Curie","Mae Jemison","Albert Hofmann","John Lennon","Paul","George","Ringo"]}})}),define("ember-quickstart/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.7.1",loc:{source:null,start:{line:8,column:6},end:{line:8,column:45}},moduleName:"ember-quickstart/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("the scientists");return e.appendChild(t,r),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.7.1",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"ember-quickstart/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2"),n=e.createTextNode("People Tracker");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("a");e.setAttribute(r,"href","https://github.com/payne/ember-quickstart");var n=e.createTextNode("https://github.com/payne/ember-quickstart");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("ul"),n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("li"),a=e.createComment("");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(2);return n[0]=e.createMorphAt(t,4,4,r),n[1]=e.createMorphAt(e.childAt(t,[6,1]),0,0),n},statements:[["content","outlet",["loc",[null,[5,0],[5,10]]],0,0,0,0],["block","link-to",["scientists"],[],0,null,["loc",[null,[8,6],[8,57]]]]],locals:[],templates:[e]}}())}),define("ember-quickstart/templates/scientists",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.7.1",loc:{source:null,start:{line:4,column:2},end:{line:6,column:2}},moduleName:"ember-quickstart/templates/scientists.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("    ");e.appendChild(t,r);var r=e.createElement("li"),n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[1]),0,0),n},statements:[["content","scientist",["loc",[null,[5,8],[5,21]]],0,0,0,0]],locals:["scientist"],templates:[]}}();return{meta:{revision:"Ember@2.7.1",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"ember-quickstart/templates/scientists.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2"),n=e.createTextNode("List of Scientists");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("ul"),n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[2]),1,1),n},statements:[["block","each",[["get","model",["loc",[null,[4,10],[4,15]]],0,0,0,0]],[],0,null,["loc",[null,[4,2],[6,11]]]]],locals:[],templates:[e]}}())}),define("ember-quickstart/config/environment",["ember"],function(e){var t="ember-quickstart";try{var r=t+"/config/environment",n=e.default.$('meta[name="'+r+'"]').attr("content"),a=JSON.parse(unescape(n));return{default:a}}catch(e){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("ember-quickstart/app").default.create({name:"ember-quickstart",version:"0.0.0+439252ef"});