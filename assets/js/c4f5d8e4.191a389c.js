"use strict";(self.webpackChunkreactive_button_doc=self.webpackChunkreactive_button_doc||[]).push([[195],{92785:function(e,t,n){var a,o,r,i,l,c,s=n(81880),m=n(67294),u=n(87379),d=n(2497),p=n(87552),h=(0,u.ZP)(d.nu)(a||(a=(0,s.Z)(["\n  border-radius: 3px;\n  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);\n  overflow: hidden;\n  margin-bottom: 100px;\n"]))),f=u.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  align-items: stretch;\n  @media (max-width: 600px) {\n    flex-direction: column;\n  }\n"]))),g=(0,u.iv)(r||(r=(0,s.Z)(["\n  flex-basis: ",";\n  width: ",";\n  max-width: ",";\n  @media (max-width: 600px) {\n    flex-basis: auto;\n    width: 100%;\n    max-width: 100%;\n    height: ",";\n    max-height: ",";\n  }\n"])),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.height}),(function(e){return e.height})),E=u.ZP.div(i||(i=(0,s.Z)(['\n  font-family: "Source Code Pro", monospace;\n  font-size: 14px;\n  height: ',";\n  max-height: ",";\n  overflow: auto;\n  ",";\n  * > textarea:focus {\n    outline: none;\n  }\n"])),(function(e){return e.height}),(function(e){return e.height}),g),x=(0,u.ZP)(d.i5)(l||(l=(0,s.Z)(["\n  position: relative;\n  padding: 1.5rem;\n  color: black;\n  height: auto;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  ",";\n"])),g),w=(0,u.ZP)(d.IF)(c||(c=(0,s.Z)(["\n  display: block;\n  padding: 0.5rem;\n  background: ",";\n  color: ",';\n  white-space: pre-wrap;\n  text-align: left;\n  font-size: 0.9em;\n  font-family: "Source Code Pro", monospace;\n'])),"#ff5555","#f8f8f2");t.Z=function(e){var t=e.noInline,n=e.code,a=e.scope,o=e.height,r=e.previewOnly,i=void 0!==r&&r;return m.createElement(h,{code:n,noInline:t,theme:p.Z,scope:a},m.createElement(f,null,!i&&m.createElement(E,{previewOnly:i,height:o},m.createElement(d.uz,null)),m.createElement(x,{previewOnly:i,height:o,className:"z-styled-preview"})),m.createElement(w,null))}},19294:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(87462),o=n(67294),r=n(86010),i=n(42773),l=n(52263),c=n(44996),s={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",features:"features_cAfv",featureImage:"featureImage_wMIZ",exampleComponent:"exampleComponent_XqUH",exampleComponent__container:"exampleComponent__container_U6ES",exampleComponent__item:"exampleComponent__item_NJ_d",logo:"logo_Ukns",jackInTheBox:"jackInTheBox_opah",heroProjectKeywords:"heroProjectKeywords_HIIA",heroProjectKeywordsSecondary:"heroProjectKeywordsSecondary_FK20",root:"root_brRS",fadeIn:"fadeIn_sitH"},m=n(69917),u=n(89583),d=n(53990),p=n(76775),h=n(92785),f='\nfunction App() {\n  const [state, setState] = useState("idle");\n\n  const onClickHandler = () => {\n    setState("loading");\n    setTimeout(() => {\n      setState("success");\n    }, 2000);\n  };\n\n  return <ReactiveButton buttonState={state} onClick={onClickHandler} />;\n}\n'.trim(),g={ReactiveButton:m.Z,useState:o.useState},E=[{title:"Progress Indicator",description:o.createElement(o.Fragment,null,"Don't just click button. See what is happening behind your button click.")},{title:"Animated",description:o.createElement(o.Fragment,null,"The 3D animated buttons replace the traditional buttons with reactive behavior.")},{title:"Customizable",description:o.createElement(o.Fragment,null,"Comes with proper customization. Use the beautiful default themes or create your own.")},{title:"Not a rocket science",description:o.createElement(o.Fragment,null,"You know button? Use it just like a button. It's super easy and simple.")},{title:"Lightweight",description:o.createElement(o.Fragment,null,"Extremely small in size. Less than 20 KB with zero dependency.")},{title:"Flexible",description:o.createElement(o.Fragment,null,"Reactive button is an isolated component. Use it with any UI library.")}];function x(e){var t=e.title,n=e.description;return o.createElement("div",{className:(0,r.Z)("col col--4 text--center p-4",s.feature)},o.createElement("h3",null,t),o.createElement("p",null,n))}var w=function(){var e=(0,l.Z)().siteConfig,t=e.title,n=e.customFields,w=e.tagline,v=n.description,y=(0,o.useState)(!1),b=y[0],_=y[1],N=(0,o.useState)("idle"),Z=N[0],k=N[1],C=(0,c.Z)("docs/"),S=(0,p.k6)();return(0,o.useEffect)((function(){_(!0)}),[]),o.createElement(i.Z,{title:w,description:v},o.createElement("div",{className:s.root},o.createElement("header",{className:(0,r.Z)("hero ",s.heroBanner)},o.createElement("div",{className:"container"},o.createElement("div",{className:"text--center"},o.createElement("img",{alt:t,className:s.logo,src:(0,c.Z)("img/logo/logo.png")})),o.createElement("h1",{className:"hero__title"},o.createElement("span",{className:s.heroProjectKeywords},"React"),o.createElement("span",{className:s.heroProjectKeywordsSecondary},"ive")," ",o.createElement("span",{className:s.heroProjectKeywords},"Button")),o.createElement("p",{className:"hero__subtitle"},w),o.createElement("div",{className:s.buttons},o.createElement(m.Z,{style:{display:b?"block":"none"},size:"large",buttonState:Z,onClick:function(){k("loading"),setTimeout((function(){S.push(C)}),500)},idleText:o.createElement("span",null,"Get Started \xa0",o.createElement(u.Z1Y,{className:"react-icon"})),loadingText:o.createElement("span",null,"Redirecting \xa0",o.createElement(d.IDg,{className:"icon-spin react-icon"})),width:"170px",height:"50px",className:"fadeIn"})))),b&&o.createElement("main",null,o.createElement("section",{className:s.exampleComponent},o.createElement("div",{className:s.exampleComponent__container},o.createElement("div",{className:"row"},o.createElement("div",{className:"col col--12"},o.createElement("div",{className:s.exampleComponent__item},o.createElement(h.Z,{code:f,scope:g,height:"250px"}))))))),o.createElement("main",null,E&&E.length>0&&o.createElement("section",{className:s.features},o.createElement("div",{className:"container"},o.createElement("div",{className:"row justify-content-center"},E.map((function(e,t){return o.createElement(x,(0,a.Z)({key:t},e))}))))))))}}}]);