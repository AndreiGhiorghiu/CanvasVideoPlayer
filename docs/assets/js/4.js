(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{114:function(e,t,n){(t=e.exports=n(3)(!1)).push([e.i,"#_1rZCjBC3yYN8wCfoIWWbIS{margin-left:10px}._3t0ff0t7sbdOU3oHJMJbW7{display:flex;align-items:center;justify-content:center;width:calc(10% - 10px)}._3p-vY0NIK-LWCDCVET2Cmu{min-width:500px;min-height:500px}._1GVhqhJM4RTTGjhIC4keu7,._1VKIjwMgXKgiIFKFmj86nW{width:100%;display:flex;justify-content:space-between}._1VKIjwMgXKgiIFKFmj86nW{position:absolute;bottom:0;color:#fff;cursor:pointer;padding:0 10px;background:rgba(0,0,0,.2)}._35wqZrNyWamdpVv_yNjt9s{display:inline-block;position:relative}._1cv3wKcBK4ATq2F4ftLOxr{width:90%}._1PvpREtWjDHE0yG520gA-A{width:100%;padding:0}._3r52MgnV6PnHHTNYed4A1S{width:20px;cursor:pointer}",""]),t.locals={play:"_3yMTZPqiTF700byCIpDRRt",pause:"_1rZCjBC3yYN8wCfoIWWbIS",buttons:"_3t0ff0t7sbdOU3oHJMJbW7",stage:"_3p-vY0NIK-LWCDCVET2Cmu",seconds:"_1GVhqhJM4RTTGjhIC4keu7",actions:"_1VKIjwMgXKgiIFKFmj86nW",videoPlayer:"_35wqZrNyWamdpVv_yNjt9s",timeBar:"_1cv3wKcBK4ATq2F4ftLOxr",secondsRange:"_1PvpREtWjDHE0yG520gA-A",playPause:"_3r52MgnV6PnHHTNYed4A1S"}},118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),c=n(55),s=n.n(c),u=n(63),l=n.n(u);function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m=0,p=function(e){var t=Object(a.useState)(null),n=o()(t,2),r=n[0],i=n[1],c=Object(a.useState)(m),u=o()(c,2),f=u[0],p=u[1],v=Object(a.useState)([]),g=o()(v,2),y=g[0],h=g[1],w=Object(a.useState)(!1),b=o()(w,2),j=b[0],I=b[1],E=Object(a.useState)(null),_=o()(E,2),x=_[0],N=_[1],C=function(e){var t=document.createElement("video");return t.src=e.src,new s.a.Image({image:t,name:"element",x:0,y:0,width:500,height:500})},S=function(e){var t=document.createElement("img");return t.src=e.src,new s.a.Image({image:t,name:"element",x:0,y:0,width:500,height:500})};Object(a.useEffect)((function(){!function(){var e=new s.a.Stage({container:".".concat(l.a.stage),width:500,height:500}),t=new s.a.Layer({name:"background"});e.add(t);var n=new s.a.Rect({fill:"#000",width:500,height:500});t.add(n),i(e),e.draw()}()}),[]),Object(a.useEffect)((function(){if(r||e.length){var t=e.map((function(t,n){return e.reduce((function(e,t,a){return e+(a<=n&&t.loop)||0}),0)}));h(t),r.find(".video-player")[0]&&r.find(".video-player")[0].destroy();var n=new s.a.Layer({name:"video-player"});r.add(n);var a,i=d(e);try{for(i.s();!(a=i.n()).done;){var o=a.value,c=new s.a.Group({name:o.id});n.add(c);var u=void 0;u="image"===o.type?S(o):C(o),c.add(u),n.draw()}}catch(e){i.e(e)}finally{i.f()}n.find("Group");var l=new s.a.Animation((function(n){if(e.length){n.time;if(m+=n.timeDiff/1e3,p(m),!T(t)){var a=r.find(".".concat(e[0].id))[0];if(a.zIndex(e.length-1),"video"===e[0].type){var i=a.find("Image")[0].attrs.image;i.currentTime=0,i.pause(),setTimeout((function(){return r.draw()}),50)}l.stop(),I(!1)}}}),r);N(l)}}),[e]);var T=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];r.find(".background")[0].zIndex(0);var a=t.findIndex((function(e){return e>=m})),i=t[a-1]||0;if(-1===a)return r.find(".background")[0].zIndex(1),p(0),m=0,!1;var o=e[a-1],c=e[a],s=r.find(".".concat(c.id))[0];if(s.zIndex(e.length-1),o&&"video"===o.type){var u=r.find(".".concat(o.id))[0];u.find("Image")[0].attrs.image.pause()}if("video"===c.type){var l=m-i,d=s.find("Image")[0].attrs.image;d.paused&&d.play(),n&&(d.currentTime=l)}return!0};return[f,function(e){p(e),m=e,T(y,!0),r.draw()},j,function(){x.isRunning()?(I(!1),x.stop()):(I(!0),x.start())}]},v=n(53),g=function(e){var t=p(e.scenes),n=o()(t,4),a=n[0],i=n[1],c=n[2],s=n[3],u=e.scenes.reduce((function(e,t){return e+t.loop}),0);return r.a.createElement("div",null,r.a.createElement("div",{className:l.a.videoPlayer},r.a.createElement("div",{className:l.a.stage}),r.a.createElement("div",{className:l.a.actions},r.a.createElement("div",{className:l.a.buttons},r.a.createElement("div",{id:l.a.play,className:"cvs-action cvs-play",onClick:s},r.a.createElement("img",{className:l.a.playPause,src:"/video-player/".concat(c?"pause":"play",".svg")}))),r.a.createElement("div",{className:l.a.timeBar},r.a.createElement("div",{className:l.a.seconds},r.a.createElement("span",null,Object(v.a)(a)),r.a.createElement("span",null,Object(v.a)(u))),r.a.createElement("input",{className:l.a.secondsRange,type:"range",value:a,onChange:function(e){i(parseFloat(e.target.value))},min:0,step:.01,max:u})))))};t.default=function(e){return r.a.createElement(g,{scenes:e.scenes})}},63:function(e,t,n){var a=n(114);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0};n(4)(a,r);a.locals&&(e.exports=a.locals)}}]);