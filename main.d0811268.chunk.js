(this["webpackJsonpaccessibility-widget"]=this["webpackJsonpaccessibility-widget"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var o=n(2),i=n.n(o),s=n(17),a=n.n(s),r=(n(23),n(24),n(7)),l=n(10),c=n(6),d=n(14),u=n(13),p=(n(25),n(0)),h=function(){return Object(p.jsx)("div",{className:"w-full h-auto bg-blue-300 text-white text-center box-border border-l-2 flex border-blue-300 rounded-b-xl mt-3",children:Object(p.jsx)("img",{className:"m-auto p-2",src:"https://raw.githubusercontent.com/DinkoDelicFlipdish/accessiblity-widget-prod/main/Flipdish_main_logo_blue.3022af88.png"})})},m=n(3),g={"zoom-option":{options:[null,"zoom-120","zoom-130","zoom-150"],optionsDescription:[null,"1.2X","1.3X","1.4X"],id:"Zoom",targetElement:"sections",text:"Increase font",icon:m.f},"line-height-option":{options:[null,"line-height-2","line-height-250","line-height-3"],optionsDescription:[null,"small","medium","large"],id:"Line height",targetElement:"text+li",text:"Increase line height",icon:m.h},"word-spacing-option":{options:[null,"word-spacing-2px","word-spacing-4px","word-spacing-8px"],optionsDescription:[null,"small","medium","large"],id:"Word spacing",targetElement:"text+li",text:"Increase word spacing",icon:m.c},"text-align-option":{options:[null,"text-align-center","text-align-left","text-align-right"],optionsDescription:[null,"center","left","right"],id:"Text align",targetElement:"text",text:"Change text align",icon:m.b},"dyslexia-font-option":{options:[null,"dyslexia-font"],optionsDescription:[null,null],id:"Dyslexia font",targetElement:"text+header",text:"Dyslexia friendly font",icon:m.d},"contrast-option":{options:["no-contrast","dark-contrast","light-contrast"],optionsDescription:[null,"dark contrast","light contrast"],id:"Contrast",targetElement:"body+sections+text+header",text:"Change contrast",icon:m.a},"desaturate-option":{options:[null,"desaturate"],optionsDescription:[null,null],id:"Desaturate",targetElement:"sections",text:"Change saturation",icon:m.g},"link-highlight-option":{options:[null,"link-highlight"],optionsDescription:[null,null],id:"Link highlight",targetElement:"links",text:"Highlight links",icon:m.e}},b=n(4),x=function t(){Object(r.a)(this,t)};x.changeStyling=function(t,e,n){var o=document.createElement("style");switch(o.id="contrast-style",document.querySelector("#contrast-style")||document.documentElement.appendChild(o),e){case"dark-contrast":console.log("dark"),document.querySelector("#contrast-style").innerHTML="".concat("\nbody section{\n    background: #000 !important;\n}\n#header,#header.overflow{\n    background: #000 !important;\n    border-bottom: #FFF solid 1px !important;\n    \n}\n\n.order-online-h2{\n    background: #000 !important;\n    color: #FFF !important;\n    border: #FFF 1px solid !important;\n}\n#header .menu-item a{\n    color: #FFF !important;\n}\n\n#header .menu-item.current a, #header .menu-item a:hover{\n    color: yellow !important;\n}\n\n.section-title,.opening-hours,.restAddresses>p,#home-slider .my-link-color a, #footer .my-link-color a{\n    color:#FFF !important\n}\n\nul li,.detail,.price>i,.section-subtitle.hours,.text{\n    color: #FFF !important;\n}\n.price,.section-subtitle.days{\n    color: red !important;\n}\n#footer{\n    background: #000 !important;\n    border-top: #FFF solid 1px !important;\n}\n.button.menu.center{\n    background: #000 !important;\n    border: #FFF 1px solid !important;\n    color: #FFF !important;\n}\n//contact page\n#contact{\n    background: #000 !important;\n}\n#contact .contact-details,.hours_and_time_styles,.contact-details,.reservation-phone,h1{\n    color: #FFF !important;\n}\n#contact section.reservations h3.contact-details,.section-subtitle{\n    color: #FFF !important;\n}\n");break;case"light-contrast":console.log("light"),document.querySelector("#contrast-style").innerHTML="".concat("\nbody section{\n    background: #FFF !important;\n}\n#header,#header.overflow{\n    background: #FFF !important;\n    border-bottom: #121212 solid 1px !important;\n    \n}\n\n.order-online-h2{\n    background: #FFF !important;\n    color: #121212 !important;\n    border: #121212 1px solid !important;\n}\n#header .menu-item a, p{\n    color: #121212 !important;\n}\n\n#header .menu-item.current a, #header .menu-item a:hover{\n    color: red !important;\n}\n\n.section-title,.opening-hours, #footer .my-link-color a{\n    color:#121212 !important\n}\n.restAddresses>p,.my-link-color a{\n    color: #FFF !important;\n}\n\nul li,.detail,.price>i,.section-subtitle.hours,.text{\n    color: #121212 !important;\n}\n.price,.section-subtitle.days{\n    color: red !important;\n}\n#footer{\n    background: #FFF !important;\n    border-top: #121212 solid 1px !important;\n}\n.button.menu.center{\n    background: #FFF !important;\n    border: #121212 1px solid !important;\n    color: #121212 !important;\n}\n//contact page\n#contact{\n    background: #FFF !important;\n}\n#contact .contact-details,.hours_and_time_styles,.contact-details,.reservation-phone,h1{\n    color: #121212 !important;\n}\n#contact section.reservations h3.contact-details,.section-subtitle{\n    color: #121212 !important;\n}\n");break;case"no-contrast":document.querySelector("#contrast-style").innerHTML="";break;default:x.targetElements(n).map((function(n){return n.classList.remove(t),!e||n.classList.add(e)}))}},x.targetElements=function(t){switch(t){case"sections":return Object(b.a)(document.querySelectorAll("body>section"));case"text":return Object(b.a)(document.querySelectorAll(".text"));case"text+li":return Object(b.a)(document.querySelectorAll("p:not(#flipdish-accessibility-widget p), span:not(#flipdish-accessibility-widget span),li"));case"text+header":return Object(b.a)(document.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6","li","div","ul"));case"body":return Object(b.a)(document.getElementsByTagName("body:not(#flipdish-accessibility-widget)"));case"body+sections":return Object(b.a)(document.querySelectorAll("body, section, footer"));case"body+sections+text+header":return Object(b.a)(document.querySelectorAll("body:not(#flipdish-accessibility-widget div button), main, section, footer, p:not(#flipdish-accessibility-widget div button p), span, h1, h2, h3, h4, h5, h6,li,div:not(#flipdish-accessibility-widget div),ul"));case"links":return Object(b.a)(document.querySelectorAll("a:not(#flipdish-accessibility-widget)"));default:return}};var f=x;var j=function(t){return Object(p.jsxs)("div",{className:"".concat(t.showTooltip&&"scale-x-100","  mx-2 font-semibold w-32 border-2 border-blue-300 h-auto origin-left transform-gpu scale-x-0 left-44 md:left-72 transition ease-in duration-200 absolute bg-blue-300 text-gray-700 text-base rounded-lg"),children:[Object(p.jsx)("div",{className:"pt-1 px-1 text-sm md:text-base",children:t.text}),Object(p.jsx)("div",{className:"mt-1 px-1 w-full h-auto  rounded-b-md text-sm md:text-base capitalize animate-slide-left bg-gray-100",children:t.optionsDescription[t.level]})]})},y=n(5),v=n(12),F=function(t){for(var e=[],n=0,o=t.level-1;n<t.level;n++,o--)e.push(Object(p.jsx)(y.a,{className:"m-0.5 h-1.5 md:h-4 col-auto animate-slide-left",icon:v.a},n));return Object(p.jsx)("div",{className:"h-auto m-auto md:px-4 md:h-4  md:-mt-1 grid grid-rows-3 md:grid-flow-col md:grid-rows-none text-sm",children:e})},w=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var o,i;return Object(r.a)(this,n),(i=e.call(this,t)).state={values:Object(b.a)(t.options),index:null!==(o=JSON.parse(window.localStorage.getItem(t.id)))&&void 0!==o?o:0,showTooltip:!1},i.handleChange=i.handleChange.bind(Object(c.a)(i)),i.ToggleTooltip=i.ToggleTooltip.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"handleChange",value:function(){var t=this;this.state.index>=this.state.values.length-1?this.setState((function(e){return f.changeStyling(t.state.values.at(e.index),t.state.values[0],t.props.targetElement),window.localStorage.setItem(t.props.id,0),{index:0}})):this.setState((function(e){return f.changeStyling(t.state.values.at(e.index),t.state.values[e.index+1],t.props.targetElement),window.localStorage.setItem(t.props.id,t.state.index+1),{index:e.index+1}}))}},{key:"ToggleTooltip",value:function(){return this.state.showTooltip?this.setState({showTooltip:!1}):this.setState({showTooltip:!0})}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{onMouseEnter:this.ToggleTooltip,onMouseLeave:this.ToggleTooltip,className:"bg-blue-200 text-blue-900 ring-blue-300 h-auto md:h-24 w-40 md:w-32  p-1 rounded-3xl transition-all duration-300 hover:ring-2 hover:rounded-lg hover:bg-white hover:text-blue-900",children:Object(p.jsxs)("button",{className:" grid grid-cols-3 h-10 w-full md:h-auto md:grid-cols-1 text-center m-auto p-1",onClick:this.handleChange,children:[Object(p.jsx)(y.a,{className:"text-lg md:text-3xl  m-auto",icon:this.props.icon}),Object(p.jsx)("p",{id:"option-desc",className:"h-auto w-10 md:h-auto md:w-auto   text-xs md:text-base align-middle my-auto  md:my-1 font-semibold",children:this.props.id}),Object(p.jsx)(F,{level:this.state.index})]})}),Object(p.jsx)(j,{text:this.props.text,optionsDescription:this.props.optionsDescription,level:this.state.index,showTooltip:this.state.showTooltip})]})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.reset?(f.changeStyling(e.values.at(e.index),e.values[0],t.targetElement),window.localStorage.setItem(t.id,0),t.ResetAll(!1),{index:0}):(f.changeStyling(e.values.at(e.index-1),e.values[e.index],t.targetElement),null)}}]),n}(i.a.Component),O=function(t){var e=[];return Object.keys(g).forEach((function(t){e.push(g[t])})),Object(p.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2  gap-x-2 gap-y-2 text-center m-3",children:e.map((function(e){return Object(p.jsx)(w,{reset:t.reset,ResetAll:t.ResetAll,options:e.options,optionsDescription:e.optionsDescription,id:e.id,targetElement:e.targetElement,text:e.text,icon:e.icon},e.id)}))})};var k=function(t){return Object(p.jsx)("div",{className:"bg-blue-200 text-blue-900 content-center flex m-3 rounded-3xl transition-all duration-300 hover:ring-2 hover:rounded-lg hover:bg-white hover:text-blue-900",children:Object(p.jsxs)("button",{className:"m-auto h-7 w-full text-lg font-bold",onClick:function(){t.ResetAll(!0)},children:["Reset All ",Object(p.jsx)(y.a,{icon:v.b,size:"sm"})]})})},S=n(18),T=function(t){var e=Object(o.useState)(!1),n=Object(S.a)(e,2),i=n[0],s=n[1];return Object(p.jsx)("button",{onClick:function(){s(!0),t.ToggleMenu(!t.toggle)},onAnimationEnd:function(){s(!1)},className:"".concat(i&&"animate-spin-once"," \n        fixed ").concat(t.position,"-2 left-3 p-0 z-1003 flex"),children:Object(p.jsx)(y.a,{className:"text-blue-300 border-blue-300 bg-blue-900 rounded-full hover:text-white hover:bg-blue-500 transform-gpu transition ease-in-out duration-200",icon:t.toggle?m.i:m.j,size:"3x"})})},E=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var o,i;return Object(r.a)(this,n),(i=e.call(this,t)).state={reset:!1,toggleMenu:!1,position:null!==(o=document.getElementById("flipdish-accessibility-widget").dataset.position)&&void 0!==o?o:"top"},i.ResetAll=i.ResetAll.bind(Object(c.a)(i)),i.ToggleMenu=i.ToggleMenu.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"ResetAll",value:function(t){this.setState({reset:t})}},{key:"ToggleMenu",value:function(t){this.setState({toggleMenu:t})}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(T,{toggle:this.state.toggleMenu,ToggleMenu:this.ToggleMenu,position:this.state.position}),Object(p.jsxs)("div",{className:" bg-gray-50 w-100 h-auto fixed ".concat(this.state.position,"-16 md:").concat(this.state.position,"-24 left-0 md:left-10  pb-0 rounded-3xl  border-solid border-4 border-blue-300 z-1002 font-flipdish  ")+(this.state.toggleMenu?"transform-gpu scale-x-100 opacity-100  transition ease-out duration-500 ":"transform-gpu -translate-x-96 transition ease-in duration-500"),children:[Object(p.jsx)(O,{reset:this.state.reset,ResetAll:this.ResetAll}),Object(p.jsx)(k,{reset:this.state.reset,ResetAll:this.ResetAll}),Object(p.jsx)(h,{})]})]})}}]),n}(i.a.Component);a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("flipdish-accessibility-widget"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d0811268.chunk.js.map