(this["webpackJsonplight-chaser"]=this["webpackJsonplight-chaser"]||[]).push([[9],{224:function(e,t,n){"use strict";var o=n(7),a=n(8),i=n(28),c=n(10),r=n(9),s=n(0),l=n(90),d=n(219),g=n(70),u=n(77),f=n(2),b=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var a,c;Object(o.a)(this,n),(c=t.call(this,e)).onClick=function(e){var t=c.props.onClick;t&&t(e)},c.getBgConfigProps=function(){var e=c.state.config,t=e.width,n=e.height,o=e.bgMode,a=e.bgColor,i=e.bgImg,r="100% 100%";i.bgImgSize&&2===i.bgImgSize.length&&(r="".concat(e.bgImg.bgImgSize[0],"px ").concat(i.bgImgSize[1],"px"));var s="0 0";if(i.bgImgPos&&2===i.bgImgPos.length&&(s="".concat(i.bgImgPos[0],"px ").concat(i.bgImgPos[1],"px")),e){var d={height:n,width:t};if(o+""===l.c.NONE)d.backgroundColor="#000000";else if(o+""===l.c.PICTURE)i.bgImgUrl&&""!==i.bgImgUrl?(d.backgroundImage="url(".concat(i.bgImgUrl,")"),d.backgroundSize=r,d.backgroundPosition=s,d.backgroundRepeat=null===i||void 0===i?void 0:i.bgImgRepeat):d.backgroundColor="#000000";else{var g=a.single,u=a.radialGradient,f=a.linearGradient,b=a.bgColorMode;(null===e||void 0===e?void 0:e.bgColor.bgColorMode)+""===l.a.SINGLE?d.backgroundColor=g.color:b===l.a.LINEAR_GRADIENT?d.background=f.color:d.background=u.color}return d}};var r=g.a.compInstances,s=g.a.elemConfigs,f=u.a.customComponentInfoMap,b=null;if("80cc666f"in s)b=s["80cc666f"];else{var h=f.LcBg;h&&(b=h.getInitConfig())}return r["80cc666f"]=new d.default(Object(i.a)(c),b),c.state={config:null===(a=b)||void 0===a?void 0:a.background},delete s["80cc666f"],c}return Object(a.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"lc-background",id:"80cc666f","data-type":"LcBg",onDoubleClick:this.onClick,style:this.getBgConfigProps(),children:this.props.children})}}]),n}(s.Component);t.a=b},225:function(e,t,n){"use strict";var o=n(7),a=n(8),i=n(10),c=n(9),r=n(0),s=n.n(r),l=n(77),d=n(29),g=n(70),u=n(106),f=n(2),b=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e,a;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=t.call.apply(t,[this].concat(c))).ref=null,a.mode=(null===(e=Object(u.d)())||void 0===e?void 0:e.action)||"edit",a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.layout,t=l.a.customComponentInfoMap,n=g.a.elemConfigs,o=t[e.type+""];if(o){var a=o.getComponent();if(a){var i=e.id in n?n[e.id]:function(){var t=o.getInitConfig();return t.info.id=e.id,t}();(new a).create(this.ref,i).then((function(t){g.a.compInstances[e.id+""]=t})),delete n[e.id]}}}},{key:"render",value:function(){var e=this,t=this.props.layout;return Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(d.a,{}),children:Object(f.jsx)("div",{id:t.id,"data-type":t.type,"data-locked":t.locked,"data-hide":t.hide,style:{width:t.width,height:t.height,transform:"translate(".concat(t.position[0],"px, ").concat(t.position[1],"px)"),position:"absolute",display:t.hide?"none":"block"},className:"lc-comp-item",children:Object(f.jsx)("div",{ref:function(t){return e.ref=t},style:{width:"100%",height:"100%",pointerEvents:"".concat("view"===this.mode?"auto":"none"),position:"relative"}})},t.id+"")})}}]),n}(s.a.PureComponent);t.a=b},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(70),a=n(79),i=n(77),c=n(106),r=n(90),s=i.a.doScan,l=function(){s(),d()},d=function(){var e=Object(c.d)().action;if(["edit","view"].includes(e))u();else{if("create"!==e)throw new Error("action is error");g()}},g=function(){var e=Object(c.d)(),t=e.width,n=e.height,a=e.name,i=o.a.doInit,r=o.a.setLoaded;i({canvasConfig:{width:parseInt(t),height:parseInt(n)},projectConfig:{name:a}}),r(!0)},u=function(){var e=Object(c.d)(),t=o.a.doInit,n=o.a.setLoaded,s=i.a.abstractOperatorMap,l=o.a.projectConfig.saveType;s[void 0===l?r.e.LOCAL:l].getProject(e.id).then((function(e){if(e){t({id:e.id,canvasConfig:e.canvasConfig,projectConfig:e.projectConfig,elemConfigs:e.elemConfigs,layoutConfigs:e.layoutConfigs,statisticInfo:e.statisticInfo,themeConfig:e.theme,extendParams:e.extendParams});var o=a.a.setMinLevel,i=a.a.setMaxLevel;o(e.layoutConfigs.minLevel||0),i(e.layoutConfigs.maxLevel||0)}n(!0)}))}},526:function(e,t,n){},565:function(e,t,n){"use strict";n.r(t);var o=n(7),a=n(8),i=n(10),c=n(9),r=n(0),s=n(224),l=(n(526),n(29)),d=n(70),g=n(225),u=n(226),f=n(75),b=n(2),h=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).generateElement=function(){var e=d.a.layoutConfigs;return Object.values(e).sort((function(e,t){return e.order-t.order})).map((function(e){return Object(b.jsx)(g.a,{layout:e},e.id)}))},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){Object(u.a)()}},{key:"render",value:function(){var e=d.a,t=e.loaded,n=e.elemConfigs;return Object(b.jsx)(b.Fragment,{children:t?Object(b.jsx)(s.a,{config:n["80cc666f"].background||{},children:this.generateElement()}):Object(b.jsx)(l.a,{})})}}]),n}(r.Component);t.default=Object(f.a)(h)}}]);
//# sourceMappingURL=9.38433b1a.chunk.js.map