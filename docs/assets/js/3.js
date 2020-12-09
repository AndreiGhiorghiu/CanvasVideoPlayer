(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{116:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(7),i=r.n(o),s=r(1),c=r(69),u=r.n(c);function l(e){var t=e.view,r=e.setView;return e.children.map((function(e,a){return n.a.createElement("button",{key:a,type:"button",className:"btn btn-sm ".concat(t===a?"btn-dark":"btn-light"),onClick:function(){return r(a)}},e.props.title)}))}function d(e){var t=e.view,r=e.children;return n.a.createElement(s.a.Stack,{visible:t},r.map((function(e,t){return n.a.createElement(s.a.View,{key:t,name:t},e)})))}var m=function(e){var t=e.children,r=Object(a.useState)(0),o=i()(r,2),s=o[0],c=o[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"btn-group mr-2 mb-3 ".concat(u.a.tabs),role:"group","aria-label":"First group"},n.a.createElement(l,{view:s,setView:c},t)),n.a.createElement(d,{view:s},t))},p=function(e){return n.a.createElement("div",null,"Advanced")},g=function(e){return n.a.createElement("div",null,"Settings")},f=r(41),v=r.n(f),b=r(52),h=r(71),y=r.n(h),w=function(e){var t=e.media,r=Object(a.useState)("images"),o=i()(r,2),s=o[0],c=o[1],u={},l=function(e){for(var t=[],r=e%3;r<=3;r++)t.push(n.a.createElement("div",{key:"fake".concat(r),className:"avatar avatar-lg avatar-4by3"}));return t};u.images=function(){var e=t.images.map((function(e,t){return n.a.createElement("div",{key:t,className:"".concat(y.a.singleMedia," avatar avatar-lg avatar-4by3")},n.a.createElement(b.a,{data:{type:"image",src:e.src},source:"sidebar",index:t},n.a.createElement("img",{src:e.thumb,className:"avatar-img rounded"})))}));e.push(n.a.createElement("div",{key:"add-image",className:"".concat(y.a.singleMedia," ").concat(y.a.addButton," avatar avatar-lg avatar-4by3")},n.a.createElement("img",{style:{objectFit:"contain"},src:"/assets/images/plus-solid.svg",className:"avatar-img rounded"})));var r=l(t.images.length+1);return e.push.apply(e,v()(r)),e},u.videos=function(){var e=t.videos.map((function(e,t){return n.a.createElement("div",{key:t,className:"".concat(y.a.singleMedia," avatar avatar-lg avatar-4by3")},n.a.createElement(b.a,{data:{type:"video",src:e.src,poster:e.poster},source:"sidebar",index:t},n.a.createElement("video",{controls:!0,src:e.src,poster:e.poster,className:"avatar-img rounded"})))}));e.push(n.a.createElement("div",{key:"add-video",className:"".concat(y.a.singleMedia," ").concat(y.a.addButton," avatar avatar-lg avatar-4by3")},n.a.createElement("img",{style:{objectFit:"contain"},src:"/assets/images/plus-solid.svg",className:"avatar-img rounded"})));var r=l(t.videos.length+1);return e.push.apply(e,v()(r)),e},u.audios=function(){var e=t.audios.map((function(e,t){return n.a.createElement("div",{key:t,className:"".concat(y.a.singleMedia)},n.a.createElement("audio",{controls:!0,src:e.src}))}));return e.push(n.a.createElement("div",{key:"add-audio",className:"".concat(y.a.addAudio," ").concat(y.a.addButton)},n.a.createElement("img",{style:{objectFit:"contain"},src:"/assets/images/plus-solid.svg",className:"avatar-img rounded"}))),e};return n.a.createElement("div",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"selectMediaType"},"Select media type"),n.a.createElement("select",{className:"custom-select",id:"selectMediaType",value:s,onChange:function(e){return c(e.target.value)}},n.a.createElement("option",{value:"images"},"Photo"),n.a.createElement("option",{value:"videos"},"Video"),n.a.createElement("option",{value:"audios"},"Audio"))),n.a.createElement("div",{className:y.a.mediaContainer},u[s]()))},O=r(73),j=r.n(O),x=function(e){return n.a.createElement("div",null,n.a.createElement(m,null,n.a.createElement(w,{media:j.a.media,title:"Media"}),n.a.createElement(g,{title:"Settings"}),n.a.createElement(p,{title:"Advanced"})))},E=r(74),S=r.n(E);t.default=function(e){return n.a.createElement("div",{className:S.a.dashboardSidebar},n.a.createElement(x,null),n.a.createElement("div",{className:"btn-group btn-group-sm mr-2 mb-3"},n.a.createElement("button",{type:"button",className:"btn btn-light"},"Get Link"),n.a.createElement("button",{type:"button",className:"btn btn-light"},"Preview")))}},35:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},36:function(e,t,r){var a=r(45);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0};r(4)(a,n);a.locals&&(e.exports=a.locals)},37:function(e,t){e.exports=function(e,t){var r="000000000"+e;return r.substr(r.length-t)}},38:function(e,t,r){var a=r(46),n=r(37),o=r(47),i=0,s=Math.pow(36,4);function c(){return n((o()*s<<0).toString(36),4)}function u(){return i=i<s?i:0,++i-1}function l(){return"c"+(new Date).getTime().toString(36)+n(u().toString(36),4)+a()+(c()+c())}l.slug=function(){var e=(new Date).getTime().toString(36),t=u().toString(36).slice(-4),r=a().slice(0,1)+a().slice(-1),n=c().slice(-2);return e.slice(-2)+t+r+n},l.isCuid=function(e){return"string"==typeof e&&!!e.startsWith("c")},l.isSlug=function(e){if("string"!=typeof e)return!1;var t=e.length;return t>=7&&t<=10},l.fingerprint=a,e.exports=l},41:function(e,t,r){var a=r(42),n=r(43),o=r(14),i=r(44);e.exports=function(e){return a(e)||n(e)||o(e)||i()}},42:function(e,t,r){var a=r(15);e.exports=function(e){if(Array.isArray(e))return a(e)}},43:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},44:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},45:function(e,t,r){(t=e.exports=r(3)(!1)).push([e.i,'._2F_O-DuBjkZmbPXYXfBuvm{flex:1;height:100%;position:relative}._1HdQX7mst0cKI24HgLpcE1:after{content:"";background:red;position:absolute;left:-2px;top:0;bottom:0;width:4px}._1HdQX7mst0cKI24HgLpcE1._3_y6fcNBSXH_6rgbkDsJNy:after{background:#0080004a;right:0;width:auto;height:50px;top:auto}._3mhBzChr2OaI3xGKz-IQg0:after{content:"";background:red;position:absolute;right:-2px;top:0;bottom:0;width:4px}._3mhBzChr2OaI3xGKz-IQg0._3_y6fcNBSXH_6rgbkDsJNy:after{background:#0080004a;left:0;width:auto;height:50px;top:auto}',""]),t.locals={zone:"_2F_O-DuBjkZmbPXYXfBuvm",leftPlaceholder:"_1HdQX7mst0cKI24HgLpcE1",frame:"_3_y6fcNBSXH_6rgbkDsJNy",rightPlaceholder:"_3mhBzChr2OaI3xGKz-IQg0"}},46:function(e,t,r){var a=r(37),n="object"==typeof window?window:self,o=Object.keys(n).length,i=a(((navigator.mimeTypes?navigator.mimeTypes.length:0)+navigator.userAgent.length).toString(36)+o.toString(36),4);e.exports=function(){return i}},47:function(e,t){var r,a="undefined"!=typeof window&&(window.crypto||window.msCrypto)||"undefined"!=typeof self&&self.crypto;if(a){var n=Math.pow(2,32)-1;r=function(){return Math.abs(a.getRandomValues(new Uint32Array(1))[0]/n)}}else r=Math.random;e.exports=r},52:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return S}));var a=r(35),n=r.n(a),o=r(7),i=r.n(o),s=r(0),c=r.n(s);r(9);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=l({},e);return delete t.children,s.Children.map(e.children,(function(e){return t.className+=" "+e.props.className||!1,Object(s.cloneElement)(e,l({},t))}))},m=r(36),p=r.n(m),g=r(8),f=Object(g.a)((function(e,t){return{currentHover:null,placeholderPosition:!0}})),v=i()(f,2),b=v[0],h=v[1];r(38);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t=Object(s.useState)(!1),r=i()(t,2),a=(r[0],r[1]),n=new Image;return"video"===e.data.type?n.src="/assets/images/film.svg":"audio"===e.data.type?n.src="/assets/images/music.svg":n.src="/assets/images/image.svg",c.a.createElement(d,{draggable:!0,onDragStart:function(t){var r,o;t.dataTransfer.setData("data",JSON.stringify({id:e.id,source:e.source,index:e.index,data:e.data}));var i=null===(r=navigator)||void 0===r||null===(o=r.userAgent)||void 0===o?void 0:o.toLowerCase();-1!=i.indexOf("safari")&&i.indexOf("chrome")>-1&&(n.width="5",t.dataTransfer.setDragImage(n,5,5)),h.setState({currentAttr:w({},e)}),a(!0)},onDragEnd:function(e){a(!1),h.setState({currentAttr:null})},attr:e.attr},e.children)};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=null,S=function(e){var t=b(),r=t.currentHover,a=t.placeholderPosition,n=r===e.component,o=Object(s.useState)(!1),u=i()(o,2),l=u[0],m=u[1];function g(){var t=h.getState().currentAttr;return"image"===t.source&&"audio"===e.droppableid||"video"===t.source&&"audio"===e.droppableid||"transition"===t.source&&"audio"===e.droppableid||"effect"===t.source&&"audio"===e.droppableid||"audio"===t.source&&"video"===e.droppableid?(m(!1),!1):("transition"===t.source&&e.component.includes("frame")&&m(!0),"effect"===t.source&&e.component.includes("frame")&&m(!0),!0)}var f=Object(s.useCallback)((function(){if(event.preventDefault(),!g())return!1;if(!("null"===e.component.split("-")[0])){var t=event.target.getBoundingClientRect().x,r=parseInt(event.target.clientWidth/2);event.clientX<t+r?h.setState({placeholderPosition:!0}):h.setState({placeholderPosition:!1})}E&&clearTimeout(E),n||h.setState({currentHover:e.component})}),[event]);return c.a.createElement(d,{className:"".concat(p.a.zone," ").concat(n&&(a?p.a.leftPlaceholder:p.a.rightPlaceholder)||""," ").concat(l?p.a.frame:""),onDragEnter:function(t){return function(t){if(E&&clearTimeout(E),!g())return!1;h.setState({currentHover:e.component}),t.persist()}(t)},onDragLeave:function(e){return E&&clearTimeout(E),void(E=setTimeout((function(){h.setState({currentHover:null})}),800))},onDragOver:function(e){return f(e)},onDrop:function(t){return function(t){t.preventDefault(),t.stopPropagation(),h.setState({currentHover:null});var r=JSON.parse(t.dataTransfer.getData("data")),n=r.data,o=r.source,i=r.index;e.onDragEnd&&e.onDragEnd({element:x(x({},n),{},{source:o,index:i}),to:e,left:a})}(t)}},e.children)}},69:function(e,t,r){var a=r(70);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0};r(4)(a,n);a.locals&&(e.exports=a.locals)},70:function(e,t,r){(t=e.exports=r(3)(!1)).push([e.i,"._2eTCeV0HQ-sCLCKBIjshI7{width:100%}",""]),t.locals={tabs:"_2eTCeV0HQ-sCLCKBIjshI7"}},71:function(e,t,r){var a=r(72);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0};r(4)(a,n);a.locals&&(e.exports=a.locals)},72:function(e,t,r){(t=e.exports=r(3)(!1)).push([e.i,"._16_K1Do6kCzRrt1iTIm1gb{display:flex;justify-content:space-between;flex-wrap:wrap}._2ctWTUxtzTmbsUGzr0yMZM{margin-bottom:15px;cursor:grab}.Xbltrq0KkWcpjB3m4mvkB{width:100%;height:54px;background:#f1f3f4;border-top-right-radius:30px;border-top-left-radius:30px;border-bottom-left-radius:30px;border-bottom-right-radius:30px}._3Q6B-HJGpRZMJXvHCVhqIA{padding:10px;cursor:pointer}",""]),t.locals={mediaContainer:"_16_K1Do6kCzRrt1iTIm1gb",singleMedia:"_2ctWTUxtzTmbsUGzr0yMZM",addAudio:"Xbltrq0KkWcpjB3m4mvkB",addButton:"_3Q6B-HJGpRZMJXvHCVhqIA"}},73:function(e,t){const r=[{media:{images:[{src:"/assets/images/media-editor/img1.jpg",thumb:"/assets/images/media-editor/img1-thumb.jpg"},{src:"/assets/images/media-editor/img2.jpg",thumb:"/assets/images/media-editor/img2-thumb.jpg"},{src:"/assets/images/media-editor/img3.webp",thumb:"/assets/images/media-editor/img3-thumb.jpg"},{src:"/assets/images/media-editor/img4.jpg",thumb:"/assets/images/media-editor/img4-thumb.jpg"},{src:"/assets/images/media-editor/img5.webp",thumb:"/assets/images/media-editor/img5-thumb.jpg"}],videos:[{src:"/assets/images/media-editor/video3.mp4",poster:"/assets/images/media-editor/video3.png"},{src:"/assets/images/media-editor/video4.mp4",poster:"/assets/images/media-editor/video4.png"}],audios:[{src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},{src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"}]},scenes:[{src:"/assets/images/media-editor/video2.mp4",id:"test2",type:"video",loop:15},{src:"/assets/images/media-editor/img1.jpg",id:"test1",type:"image",loop:2},{src:"/assets/images/media-editor/video4.mp4",id:"test3",type:"video",loop:1}]}];e.exports=r.length<=1?r[0]:r},74:function(e,t,r){var a=r(75);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0};r(4)(a,n);a.locals&&(e.exports=a.locals)},75:function(e,t,r){(t=e.exports=r(3)(!1)).push([e.i,".dR6bxhxANmCaRKAy8AsKz{display:flex;flex-direction:column;justify-content:space-between;height:90%}",""]),t.locals={dashboardSidebar:"dR6bxhxANmCaRKAy8AsKz"}}}]);