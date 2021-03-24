(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(119),l=a(113),o=a(101),c=a(104);const s=Object(r.b)(l.d)`
border-radius: 3px;
box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
overflow: hidden;
margin-bottom: 100px;
`,m=r.b.div`
display: flex;
flex-direction: row;
justify-content: stretch;
align-items: stretch;
@media (max-width: 600px) {
    flex-direction: column;
}
`,d=r.a`
flex-basis: ${e=>e.previewOnly?"100%":"50%"};
width: ${e=>e.previewOnly?"100%":"50%"};
max-width: ${e=>e.previewOnly?"100%":"50%"};
@media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
    height: ${e=>e.height};
    max-height: ${e=>e.height};
}
`,u=r.b.div`
font-family: 'Source Code Pro', monospace;
font-size: 14px;
height: ${e=>e.height};
max-height: ${e=>e.height};
overflow: auto;
${d};
* > textarea:focus {
    outline: none;
}
`,h=Object(r.b)(l.c)`
position: relative;
padding: 1.5rem;
background: ${e=>e.isDarkTheme?"#232525":"#e3eaea"};
color: black;
height: auto;
overflow: hidden;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
${d};
`,p=Object(r.b)(l.b)`
display: block;
padding: 0.5rem;
background: ${"#ff5555"};
color: ${"#f8f8f2"};
white-space: pre-wrap;
text-align: left;
font-size: 0.9em;
font-family: 'Source Code Pro', monospace;
`;t.a=({noInline:e,code:t,scope:a,height:n,previewOnly:r=!1})=>{const{isDarkTheme:d}=Object(o.a)();return i.a.createElement(s,{code:t,noInline:e,theme:c.a,scope:a},i.a.createElement(m,null,!r&&i.a.createElement(u,{previewOnly:r,height:n},i.a.createElement(l.a,null)),i.a.createElement(h,{previewOnly:r,height:n,isDarkTheme:d})),i.a.createElement(p,null))}},80:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),r=a.n(i),l=a(92),o=a(106),c=a(94),s=a(16),m=a(97),d=a(81),u=a.n(d),h=a(96),p=a(98),b=a(99),g=a(105),f=(a(82),"\nfunction App() {\n  const [state, setState] = useState('idle');\n\n  const onClickHandler = () => {\n    setState('loading');\n    setTimeout(() => {\n      setState('success');\n    }, 2000);\n  }\n\n  return (\n    <ReactiveButton\n      buttonState={state}\n      onClick={onClickHandler}\n    />\n  );\n}\n".trim()),w={ReactiveButton:h.a,useState:i.useState},E=[{title:"Progress Indicator",description:r.a.createElement(r.a.Fragment,null,"Don't just click button. See what is happening behind your button click.")},{title:"Animated",description:r.a.createElement(r.a.Fragment,null,"The 3D animated buttons replace the traditional buttons with reactive behavior.")},{title:"Customizable",description:r.a.createElement(r.a.Fragment,null,"Comes with proper customization. Use the beautiful default themes or create your own.")},{title:"Not a rocket science",description:r.a.createElement(r.a.Fragment,null,"You know button? Use it just like a button. It's super easy and simple.")},{title:"Lightweight",description:r.a.createElement(r.a.Fragment,null,"Extremely small in size. Less than 20 KB with zero dependency.")},{title:"Flexible",description:r.a.createElement(r.a.Fragment,null,"Reactive button is an isolated component. Use it with any UI library.")}];function v(e){var t=e.title,a=e.description;return r.a.createElement("div",{className:Object(l.a)("col col--4 text--center p-4",u.a.feature)},r.a.createElement("h3",null,t),r.a.createElement("p",null,a))}t.default=function(){var e=Object(s.default)().siteConfig,t=void 0===e?{}:e,d=Object(i.useState)(!1),x=d[0],y=d[1];return Object(i.useEffect)((function(){(y(!0),"undefined"!=typeof window)&&a(651).show({timeout:0,progressBar:!1,displayMode:"once",theme:"light",id:"starNotification",title:'<a target="_blank" rel="noopener noreferrer" href="https://github.com/arifszn/reactive-button"><img src="https://img.shields.io/github/stars/arifszn/reactive-button?style=social" alt="Github Star"/></a>',message:'We need your support. Please \u2b50\ufe0f on <a target="_blank" rel="noopener noreferrer" href="https://github.com/arifszn/reactive-button">GitHub</a> to help us increase.'})}),[]),r.a.createElement(o.a,{title:t.title,description:""+t.tagline},r.a.createElement("header",{className:Object(l.a)("hero ",u.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{alt:t.title,className:u.a.logo,src:Object(m.a)("img/logo/logo.png")})),r.a.createElement("h1",{className:"hero__title"},r.a.createElement("span",{className:u.a.heroProjectKeywords},"React"),r.a.createElement("span",{className:u.a.heroProjectKeywordsSecondary},"ive")," ",r.a.createElement("span",{className:u.a.heroProjectKeywords},"Button")),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:u.a.buttons},r.a.createElement(c.a,{className:Object(l.a)("",u.a.getStarted),to:Object(m.a)("docs/")},r.a.createElement(h.a,{style:{display:x?"block":"none"},size:"large",idleText:r.a.createElement("span",null,"Get Started \xa0\xa0",r.a.createElement(p.a,{icon:b.a})),width:"170px",height:"49px",className:"fadeIn"}))))),r.a.createElement("main",null,r.a.createElement("section",{className:u.a.exampleComponent},r.a.createElement("div",{className:u.a.exampleComponent__container},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--12"},r.a.createElement("div",{className:u.a.exampleComponent__item},r.a.createElement(g.a,{code:f,scope:w,height:"250px"}))))))),r.a.createElement("main",null,E&&E.length>0&&r.a.createElement("section",{className:u.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},E.map((function(e,t){return r.a.createElement(v,Object(n.a)({key:t},e))})))))))}}}]);