"use strict";(self.webpackChunkreactive_button_doc=self.webpackChunkreactive_button_doc||[]).push([[195],{92785:function(e,t,n){var a,r,o,i,l,c,s=n(81880),m=n(67294),u=n(29163),d=n(62229),p=(n(85350),n(87552)),h=(0,u.ZP)(d.nu)(a||(a=(0,s.Z)(["\nborder-radius: 3px;\nbox-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);\noverflow: hidden;\nmargin-bottom: 100px;\n"]))),f=u.ZP.div(r||(r=(0,s.Z)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: stretch;\nalign-items: stretch;\n@media (max-width: 600px) {\n    flex-direction: column;\n}\n"]))),g=(0,u.iv)(o||(o=(0,s.Z)(["\nflex-basis: ",";\nwidth: ",";\nmax-width: ",";\n@media (max-width: 600px) {\n    flex-basis: auto;\n    width: 100%;\n    max-width: 100%;\n    height: ",";\n    max-height: ",";\n}\n"])),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.height}),(function(e){return e.height})),w=u.ZP.div(i||(i=(0,s.Z)(["\nfont-family: 'Source Code Pro', monospace;\nfont-size: 14px;\nheight: ",";\nmax-height: ",";\noverflow: auto;\n",";\n* > textarea:focus {\n    outline: none;\n}\n"])),(function(e){return e.height}),(function(e){return e.height}),g),E=(0,u.ZP)(d.i5)(l||(l=(0,s.Z)(["\nposition: relative;\npadding: 1.5rem;\ncolor: black;\nheight: auto;\noverflow: hidden;\ndisplay: flex;\njustify-content: center;\nflex-direction: row;\nalign-items: center;\nflex-wrap: wrap;\n",";\n"])),g),v=(0,u.ZP)(d.IF)(c||(c=(0,s.Z)(["\ndisplay: block;\npadding: 0.5rem;\nbackground: ",";\ncolor: ",";\nwhite-space: pre-wrap;\ntext-align: left;\nfont-size: 0.9em;\nfont-family: 'Source Code Pro', monospace;\n"])),"#ff5555","#f8f8f2");t.Z=function(e){var t=e.noInline,n=e.code,a=e.scope,r=e.height,o=e.previewOnly,i=void 0!==o&&o;return m.createElement(h,{code:n,noInline:t,theme:p.Z,scope:a},m.createElement(f,null,!i&&m.createElement(w,{previewOnly:i,height:r},m.createElement(d.uz,null)),m.createElement(E,{previewOnly:i,height:r,className:"z-styled-preview"})),m.createElement(v,null))}},9526:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(87462),r=n(67294),o=n(86010),i=n(90261),l=n(36742),c=n(52263),s=n(44996),m={heroBanner:"heroBanner_1ZBZ",buttons:"buttons_irzW",features:"features_N601",featureImage:"featureImage_3Q9E",exampleComponent:"exampleComponent_vrdS",exampleComponent__container:"exampleComponent__container_1ynG",exampleComponent__item:"exampleComponent__item_2W5D",logo:"logo_3-YD",jackInTheBox:"jackInTheBox_EVF5",heroProjectKeywords:"heroProjectKeywords_1Jz2",heroProjectKeywordsSecondary:"heroProjectKeywordsSecondary_1l2-"},u=n(69917),d=n(89583),p=n(92785),h="\nfunction App() {\n  const [state, setState] = useState('idle');\n\n  const onClickHandler = () => {\n    setState('loading');\n    setTimeout(() => {\n      setState('success');\n    }, 2000);\n  }\n\n  return (\n    <ReactiveButton\n      buttonState={state}\n      onClick={onClickHandler}\n    />\n  );\n}\n".trim(),f={ReactiveButton:u.Z,useState:r.useState},g=[{title:"Progress Indicator",description:r.createElement(r.Fragment,null,"Don't just click button. See what is happening behind your button click.")},{title:"Animated",description:r.createElement(r.Fragment,null,"The 3D animated buttons replace the traditional buttons with reactive behavior.")},{title:"Customizable",description:r.createElement(r.Fragment,null,"Comes with proper customization. Use the beautiful default themes or create your own.")},{title:"Not a rocket science",description:r.createElement(r.Fragment,null,"You know button? Use it just like a button. It's super easy and simple.")},{title:"Lightweight",description:r.createElement(r.Fragment,null,"Extremely small in size. Less than 20 KB with zero dependency.")},{title:"Flexible",description:r.createElement(r.Fragment,null,"Reactive button is an isolated component. Use it with any UI library.")}];function w(e){var t=e.title,n=e.description;return r.createElement("div",{className:(0,o.Z)("col col--4 text--center p-4",m.feature)},r.createElement("h3",null,t),r.createElement("p",null,n))}var E=function(){var e=(0,c.Z)().siteConfig,t=void 0===e?{}:e,E=(0,r.useState)(!1),v=E[0],b=E[1];return(0,r.useEffect)((function(){(b(!0),"undefined"!=typeof window)&&n(63518).show({timeout:0,progressBar:!1,displayMode:"once",theme:"light",position:"bottomCenter",id:"starNotification",title:'<a target="_blank" rel="noopener noreferrer" href="https://github.com/arifszn/reactive-button"><img src="https://img.shields.io/github/stars/arifszn/reactive-button?style=social" alt="Github Star"/></a>',message:'Show your \u2764\ufe0f and support by giving a \u2b50\ufe0f on <a target="_blank" rel="noopener noreferrer" href="https://github.com/arifszn/reactive-button">GitHub</a>.'})}),[]),r.createElement(i.Z,{title:t.title,description:""+t.tagline},r.createElement("header",{className:(0,o.Z)("hero ",m.heroBanner)},r.createElement("div",{className:"container"},r.createElement("div",{className:"text--center"},r.createElement("img",{alt:t.title,className:m.logo,src:(0,s.Z)("img/logo/logo.png")})),r.createElement("h1",{className:"hero__title"},r.createElement("span",{className:m.heroProjectKeywords},"React"),r.createElement("span",{className:m.heroProjectKeywordsSecondary},"ive")," ",r.createElement("span",{className:m.heroProjectKeywords},"Button")),r.createElement("p",{className:"hero__subtitle"},t.tagline),r.createElement("div",{className:m.buttons},r.createElement(l.Z,{className:(0,o.Z)("",m.getStarted),to:(0,s.Z)("docs/")},r.createElement(u.Z,{style:{display:v?"block":"none"},size:"large",idleText:r.createElement("span",null,"Get Started \xa0",r.createElement(d.Z1Y,{className:"react-icon"})),width:"170px",height:"49px",className:"fadeIn"}))))),r.createElement("main",null,r.createElement("section",{className:m.exampleComponent},r.createElement("div",{className:m.exampleComponent__container},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--12"},r.createElement("div",{className:m.exampleComponent__item},r.createElement(p.Z,{code:h,scope:f,height:"250px"}))))))),r.createElement("main",null,g&&g.length>0&&r.createElement("section",{className:m.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row justify-content-center"},g.map((function(e,t){return r.createElement(w,(0,a.Z)({key:t},e))})))))))}}}]);