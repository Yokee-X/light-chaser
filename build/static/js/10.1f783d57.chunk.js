(this["webpackJsonplight-chaser"]=this["webpackJsonplight-chaser"]||[]).push([[10],{341:function(e,t,c){},342:function(e,t,c){},569:function(e,t,c){"use strict";c.r(t);var a=c(23),n=c(7),s=c(8),i=c(10),r=c(9),l=c(0),o=(c(341),c(1)),d=(c(342),c(115)),j=c(89),h=c(99),b=c(100),m=c(145),v=c(2),p=function(e){Object(i.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).projectInfo={name:"",description:"",width:500,height:300},e.onOk=function(t){t.preventDefault();var c=e.props.onOk;c&&c(e.projectInfo)},e.onCancel=function(){var t=e.props.onCancel;t&&t()},e}return Object(s.a)(c,[{key:"render",value:function(){var e=this,t=this.props.visible,c=void 0!==t&&t;return Object(v.jsx)(d.a,{title:"\u65b0\u5efa\u5927\u5c4f",visible:c,className:"add-new-screen-dialog",onClose:this.onCancel,children:Object(v.jsxs)("form",{onSubmit:this.onOk,children:[Object(v.jsxs)("div",{className:"lc-add-new-screen",children:[Object(v.jsx)(j.a,{title:"\u540d\u79f0",children:Object(v.jsx)(h.default,{required:!0,maxLength:20,onChange:function(t){return e.projectInfo.name=t.target.value}})}),Object(v.jsx)(j.a,{title:"\u63cf\u8ff0",children:Object(v.jsx)(h.default,{maxLength:60,onChange:function(t){return e.projectInfo.description=t.target.value}})}),Object(v.jsx)(j.a,{title:"\u5bbd\u5ea6",children:Object(v.jsx)(h.default,{type:"number",min:500,required:!0,onChange:function(t){return e.projectInfo.width=parseInt(t.target.value)}})}),Object(v.jsx)(j.a,{title:"\u9ad8\u5ea6",children:Object(v.jsx)(h.default,{type:"number",min:300,required:!0,onChange:function(t){return e.projectInfo.height=parseInt(t.target.value)}})}),Object(v.jsx)(j.a,{title:"\u5b58\u50a8",children:Object(v.jsx)(m.default,{defaultValue:"1",options:[{value:"1",label:"\u672c\u5730\u5b58\u50a8"}]})})]}),Object(v.jsxs)("div",{className:"add-new-screen-explain",children:[Object(v.jsx)("p",{children:"\u8bf4\u660e\uff1a"}),Object(v.jsx)("p",{children:"1\u3001\u540d\u79f0\u4e0d\u8d85\u8fc720\u5b57\uff0c\u63cf\u8ff0\u4e0d\u8d85\u8fc760\u5b57"}),Object(v.jsx)("p",{children:"2\u3001\u5bbd\u5ea6\u5fc5\u987b\u2265500\uff0c\u9ad8\u5ea6\u5fc5\u987b\u2265300"})]}),Object(v.jsxs)("div",{className:"add-new-screen-footer",children:[Object(v.jsx)(b.a,{type:"submit",children:"\u4fdd\u5b58"}),Object(v.jsx)(b.a,{onClick:this.onCancel,children:"\u53d6\u6d88"})]})]})})}}]),c}(l.Component),O=p,u=c.p+"static/media/list-bottom.5389dd50.svg",x=c.p+"static/media/template-market.b6765c6d.svg",f=c.p+"static/media/datasource.7f397ca1.svg",g=c.p+"static/media/list-del.19d35f77.svg",N=c.p+"static/media/list-display.31b224dd.svg",w=c.p+"static/media/list-edit.ce8d908b.svg",y=c(106),C=c(243),k=c(90),I=c(77),S=c(70),L=function(e){Object(i.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={showAddDialog:!1,addNewData:{},data:[],imageIdToUrl:{}},e.toggleNewProVisible=function(){var t=e.state.addNewScreen;e.setState({addNewScreen:!t})},e.onOk=function(t){var c=Object(y.b)(Object(a.a)(Object(a.a)({},t),{action:"create"}));e.setState({addNewScreen:!1}),window.open("/designer?".concat(c),"_blank")},e.onCancel=function(){return e.setState({addNewScreen:!1})},e.openScreen=function(e){var t=e.target.dataset,c=t.type,a=t.savetype,n=e.currentTarget.id;if("edit"===c){var s=Object(y.b)({id:n,action:"edit"});window.open("/designer?".concat(s),"_blank")}else"show"===c&&window.open("/view?id=".concat(n,"&saveType=").concat(a),"_blank")},e}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=I.a.scannerProjectOperators,c=I.a.abstractOperatorMap;t();var a=S.a.projectConfig.saveType;c[void 0===a?k.e.LOCAL:a].getProjectSimpleInfoList().then((function(t){if(t&&t.length>0){e.setState({data:t});var c=[];t.forEach((function(e){var t=e.screenshot;t&&""!==t&&c.push(t)}));var a=c.map((function(e){return C.a.getImageFromLocalWithKey(e)})),n={};Promise.all(a).then((function(t){t.forEach((function(e){var t=Object.keys(e)[0];n[t]=e[t]})),e.setState({imageIdToUrl:n})}))}}))}},{key:"render",value:function(){var e=this,t=this.state,c=t.addNewScreen,a=t.data,n=t.imageIdToUrl,s=(window.innerWidth-230-120)/6,i=s*(9/16);return Object(v.jsxs)("div",{className:"lc-console",children:[Object(v.jsx)("div",{className:"console-head",children:Object(v.jsx)("div",{className:"console-head-title",children:"LC \u63a7\u5236\u53f0"})}),Object(v.jsxs)("div",{className:"console-body",children:[Object(v.jsxs)("div",{className:"console-list",children:[Object(v.jsxs)("div",{className:"console-list-item",children:[Object(v.jsx)("div",{className:"item-icon",children:Object(v.jsx)("img",{src:u,alt:"\u9879\u76ee\u5217\u8868"})}),Object(v.jsx)("div",{className:"item-text",children:"\u9879\u76ee\u5217\u8868"})]}),Object(v.jsxs)("div",{className:"console-list-item",children:[Object(v.jsx)("div",{className:"item-icon",children:Object(v.jsx)("img",{src:f,alt:"\u6570\u636e\u6e90\u7ba1\u7406"})}),Object(v.jsx)("div",{className:"item-text",children:"\u6570\u636e\u6e90\u7ba1\u7406"})]}),Object(v.jsxs)("div",{className:"console-list-item",children:[Object(v.jsx)("div",{className:"item-icon",children:Object(v.jsx)("img",{src:x,alt:"\u6a21\u677f\u5e02\u573a"})}),Object(v.jsx)("div",{className:"item-text",children:"\u6a21\u677f\u5e02\u573a"})]})]}),Object(v.jsx)("div",{className:"console-content",children:Object(v.jsx)("div",{className:"content-body",children:Object(v.jsxs)("div",{className:"project-list",children:[Object(v.jsx)("div",{style:{width:s,height:i,margin:"0 20px 20px 0"},children:Object(v.jsx)(b.a,{onClick:this.toggleNewProVisible,style:{width:s,height:i,fontSize:20},children:"+ \u65b0\u5efa\u9879\u76ee"})}),a&&a.map((function(t){var c,a,r=n[null===t||void 0===t?void 0:t.screenshot];return t.state===k.d.DRAFT?(c="\u8349\u7a3f",a="#FFB800"):t.state===k.d.PUBLISH&&(c="\u5df2\u53d1\u5e03",a="#00CC66"),Object(v.jsxs)("div",{style:{width:s,height:i,backgroundImage:r&&"url(".concat(r,")")},onClick:e.openScreen,id:t.id+"",className:"project-item",children:[Object(v.jsxs)("div",{className:"pro-list-content",style:{zIndex:1},children:[Object(v.jsx)("div",{className:"pro-content-title",children:null===t||void 0===t?void 0:t.name}),Object(v.jsxs)("div",{className:"pro-content-operates",children:[Object(v.jsx)("div",{className:"operate-item","data-type":"edit",children:Object(v.jsx)("img",{src:w,alt:"\u7f16\u8f91"})}),Object(v.jsx)("div",{className:"operate-item","data-type":"del",children:Object(v.jsx)("img",{src:g,alt:"\u5220\u9664"})}),Object(v.jsx)("div",{className:"operate-item","data-type":"show","data-savetype":t.saveType,children:Object(v.jsx)("img",{src:N,alt:"\u5c55\u793a"})})]})]}),Object(v.jsxs)("div",{className:"pro-content-footer",children:[Object(v.jsx)("div",{className:"state-point",style:{backgroundColor:a}}),Object(v.jsx)("div",{className:"state-text",style:{color:a},children:c})]})]},t.id+"")}))]})})})]}),Object(v.jsx)(O,{onOk:this.onOk,onCancel:this.onCancel,visible:c})]})}}]),c}(l.Component);t.default=Object(o.f)(L)}}]);
//# sourceMappingURL=10.1f783d57.chunk.js.map