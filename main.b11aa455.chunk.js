(this["webpackJsonpaccessibility-widget"]=this["webpackJsonpaccessibility-widget"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i),l=n(17),s=n.n(l),a=(n(23),n(24),n(7)),r=n(10),c=n(6),u=n(14),d=n(13),g=(n(25),n(0)),h=function(){return Object(g.jsx)("div",{className:"w-full h-auto bg-blue-300 text-white text-center flex border-l-2 border-r-2 border-blue-300 rounded-b-xl mt-3",children:Object(g.jsx)("img",{className:"m-auto p-2",src:"https://raw.githubusercontent.com/DinkoDelicFlipdish/accessiblity-widget-prod/main/Flipdish_main_logo_blue.3022af88.png"})})},p=n(3),x={"zoom-option":{options:[null,"zoom-120","zoom-130","zoom-150"],optionsDescription:[null,"1.2X","1.3X","1.5X"],id:"Zoom",targetElement:"sections",text:"Increase font",icon:p.f},"line-height-option":{options:[null,"line-height-2","line-height-250","line-height-3"],optionsDescription:[null,"small","medium","large"],id:"Line height",targetElement:"text",text:"Increase line height",icon:p.h},"word-spacing-option":{options:[null,"word-spacing-2px","word-spacing-4px","word-spacing-8px"],optionsDescription:[null,"small","medium","large"],id:"Word spacing",targetElement:"text",text:"Increase word spacing",icon:p.c},"text-align-option":{options:[null,"text-align-center","text-align-left","text-align-right","text-align-justify"],optionsDescription:[null,"center","left","right","justify"],id:"Text align",targetElement:"text",text:"Change text align",icon:p.b},"dyslexia-font-option":{options:[null,"dyslexia-font"],optionsDescription:[null,null],id:"Dyslexia font",targetElement:"text+header",text:"Dyslexia friendly font",icon:p.d},"contrast-option":{options:[null,"dark-contrast","light-contrast"],optionsDescription:[null,"dark contrast","light contrast"],id:"Contrast",targetElement:"body+sections+text+header",text:"Change contrast",icon:p.a},"desaturate-option":{options:[null,"desaturate"],optionsDescription:[null,null],id:"Desaturate",targetElement:"sections",text:"Change saturation",icon:p.g},"link-highlight-option":{options:[null,"link-highlight"],optionsDescription:[null,null],id:"Link highlight",targetElement:"links",text:"Highlight links",icon:p.e}},b=n(4),m=function e(){Object(a.a)(this,e)};m.changeStyling=function(e,t,n){m.targetElements(n).map((function(n){return n.classList.remove(e),!t||n.classList.add(t)}))},m.targetElements=function(e){switch(e){case"sections":return Object(b.a)(document.querySelectorAll("body>section"));case"text":return Object(b.a)(document.querySelectorAll("p:not(#reactexample p), span:not(#reactexample span)"));case"text+header":return Object(b.a)(document.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6","li","div","ul"));case"body":return Object(b.a)(document.getElementsByTagName("body:not(#reactexample)"));case"body+sections":return Object(b.a)(document.querySelectorAll("body, section, footer"));case"body+sections+text+header":return Object(b.a)(document.querySelectorAll("body:not(#reactexample div button), main, section, footer, p:not(#reactexample div button p), span, h1, h2, h3, h4, h5, h6,li,div:not(#reactexample div),ul"));case"links":return Object(b.a)(document.querySelectorAll("a:not(#reactexample)"));default:return}};var j=m;var f=function(e){return Object(g.jsxs)("div",{className:"".concat(e.showTooltip&&"scale-x-100","  mx-2 font-semibold w-32 border-2 border-blue-300 h-auto origin-left transform-gpu scale-x-0 left-64 transition ease-in duration-200 absolute bg-blue-300 text-gray-700 text-base rounded-lg"),children:[Object(g.jsx)("div",{className:"pt-1 px-1",children:e.text}),Object(g.jsx)("div",{className:"mt-1 px-1 w-full h-auto  rounded-b-md text-md capitalize animate-slide-left bg-gray-100",children:e.optionsDescription[e.level]})]})},v=n(5),O=n(12),y=function(e){for(var t=[],n=0;n<e.level;n++)t.push(Object(g.jsx)(v.a,{className:"m-auto animate-slide-left",icon:O.a,size:"1x"},n));return Object(g.jsx)("div",{className:"h-6 px-4 -mt-1 align-middle flex text-sm",children:t})},w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i,o;return Object(a.a)(this,n),(o=t.call(this,e)).state={values:Object(b.a)(e.options),index:null!==(i=JSON.parse(window.localStorage.getItem(e.id)))&&void 0!==i?i:0,showTooltip:!1},o.handleChange=o.handleChange.bind(Object(c.a)(o)),o.ToggleTooltip=o.ToggleTooltip.bind(Object(c.a)(o)),o}return Object(r.a)(n,[{key:"handleChange",value:function(){var e=this;this.state.index>=this.state.values.length-1?this.setState((function(t){return j.changeStyling(e.state.values.at(t.index),e.state.values[0],e.props.targetElement),window.localStorage.setItem(e.props.id,0),{index:0}})):this.setState((function(t){return j.changeStyling(e.state.values.at(t.index),e.state.values[t.index+1],e.props.targetElement),window.localStorage.setItem(e.props.id,e.state.index+1),{index:t.index+1}}))}},{key:"ToggleTooltip",value:function(){return this.state.showTooltip?this.setState({showTooltip:!1}):this.setState({showTooltip:!0})}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{onMouseEnter:this.ToggleTooltip,onMouseLeave:this.ToggleTooltip,className:"bg-blue-200 text-blue-900 ring-blue-300 h-22 w-28 p-1 rounded-3xl transition-all duration-300 hover:ring-2 hover:rounded-lg hover:bg-white hover:text-blue-900",children:[Object(g.jsxs)("button",{className:"h-14 block text-lg text-center m-auto p-1",onClick:this.handleChange,children:[Object(g.jsx)(v.a,{icon:this.props.icon,size:"lg"}),Object(g.jsx)("p",{id:"option-desc",className:"block  text-center text-sm align-middle my-1 font-semibold",children:this.props.id})]}),Object(g.jsx)(y,{level:this.state.index})]}),Object(g.jsx)(f,{text:this.props.text,optionsDescription:this.props.optionsDescription,level:this.state.index,showTooltip:this.state.showTooltip})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.reset?(j.changeStyling(t.values.at(t.index),t.values[0],e.targetElement),window.localStorage.setItem(e.id,0),e.ResetAll(!1),{index:0}):(j.changeStyling(t.values.at(t.index-1),t.values[t.index],e.targetElement),null)}}]),n}(o.a.Component),S=function(e){var t=[];return Object.keys(x).forEach((function(e){t.push(x[e])})),Object(g.jsx)("div",{className:"grid grid-cols-2 gap-x-2 gap-y-2 text-center m-3",children:t.map((function(t){return Object(g.jsx)(w,{reset:e.reset,ResetAll:e.ResetAll,options:t.options,optionsDescription:t.optionsDescription,id:t.id,targetElement:t.targetElement,text:t.text,icon:t.icon},t.id)}))})};var T=function(e){return Object(g.jsx)("div",{className:"bg-blue-200 text-blue-900 content-center flex m-3 rounded-3xl transition-all duration-300 hover:ring-2 hover:rounded-lg hover:bg-white hover:text-blue-900",children:Object(g.jsxs)("button",{className:"m-auto h-7 w-full text-lg font-bold",onClick:function(){e.ResetAll(!0)},children:["Reset All ",Object(g.jsx)(v.a,{icon:O.b,size:"sm"})]})})},k=n(18),E=function(e){var t=Object(i.useState)(!1),n=Object(k.a)(t,2),o=n[0],l=n[1];return Object(g.jsx)("button",{onClick:function(){l(!0),e.ToggleMenu(!e.toggle)},onAnimationEnd:function(){l(!1)},className:"".concat(o&&"animate-spin-once"," \n        fixed top-2 left-6 p-0 z-1003 rounded-full border-2 flex border-blue-300 bg-blue-900 hover:bg-blue-500 group"),children:Object(g.jsx)(v.a,{className:"text-blue-300 group-hover:text-white transform-gpu transition ease-in-out duration-200",icon:p.i,size:"3x"})})},A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={reset:!1,toggleMenu:!1},i.ResetAll=i.ResetAll.bind(Object(c.a)(i)),i.ToggleMenu=i.ToggleMenu.bind(Object(c.a)(i)),i}return Object(r.a)(n,[{key:"ResetAll",value:function(e){this.setState({reset:e})}},{key:"ToggleMenu",value:function(e){this.setState({toggleMenu:e})}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(E,{toggle:this.state.toggleMenu,ToggleMenu:this.ToggleMenu}),Object(g.jsxs)("div",{className:" bg-gray-50 w-100 h-auto fixed top-16 left-16  pb-0 rounded-3xl border-solid border-4 border-blue-300 z-1002 font-flipdish "+(this.state.toggleMenu?"transform-gpu scale-x-100 opacity-100  transition ease-out duration-500 ":"transform-gpu -translate-x-96 transition ease-in duration-500"),children:[Object(g.jsx)(S,{reset:this.state.reset,ResetAll:this.ResetAll}),Object(g.jsx)(T,{reset:this.state.reset,ResetAll:this.ResetAll}),Object(g.jsx)(h,{})]})]})}}]),n}(o.a.Component);s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("reactexample"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b11aa455.chunk.js.map