(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{65:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(0),c=a.n(l),i=a(77),o=a(89),r=a(78),s=a(76),m=a(80),d=a(66),u=a.n(d),p=a(79),h=a(81),b=a(82),E=a(88);const f="\nfunction App() {\n  const [state, setState] = useState('idle');\n\n  const onClickHandler = () => {\n    setState('loading');\n    setTimeout(() => {\n      setState('success');\n    }, 2000);\n  }\n\n  return (\n    <ReactiveButton\n      buttonState={state}\n      onClick={onClickHandler}\n    />\n  );\n}\n".trim(),g={ReactiveButton:p.a,useState:l.useState},w=[{title:"Reactive",description:c.a.createElement(c.a.Fragment,null,"Replacing traditional button with reactive behavior.")},{title:"Customizable",description:c.a.createElement(c.a.Fragment,null,"Comes with proper customization. Use the beautiful default themes or create your own.")},{title:"Not a rocket science",description:c.a.createElement(c.a.Fragment,null,"You know button? Use it just like a button. It's super easy and simple.")},{title:"Lightweight",description:c.a.createElement(c.a.Fragment,null,"Extremely small in size. Less than 20 KB with zero dependency.")},{title:"Flexible",description:c.a.createElement(c.a.Fragment,null,"Reactive button is an isolated component. Use it with any UI library.")},{title:"Progress Indicator",description:c.a.createElement(c.a.Fragment,null,"Don't just click button. See what is happening behind your button click.")}];function x({title:e,description:t}){return c.a.createElement("div",{className:Object(i.a)("col col--4 text--center p-4",u.a.feature)},c.a.createElement("h3",null,e),c.a.createElement("p",null,t))}t.default=function(){const e=Object(s.a)(),{siteConfig:t={}}=e,[a,d]=Object(l.useState)(!1);return Object(l.useEffect)((()=>{d(!0)}),[]),c.a.createElement(o.a,{title:""+t.title,description:""+t.tagline},c.a.createElement("header",{className:Object(i.a)("hero ",u.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{alt:"Reactive Button",className:u.a.logo,src:Object(m.a)("img/logo/logo.png")})),c.a.createElement("h1",{className:"hero__title"},c.a.createElement("span",{className:u.a.heroProjectKeywords},"React"),c.a.createElement("span",{className:u.a.heroProjectKeywordsSecondary},"ive")," ",c.a.createElement("span",{className:u.a.heroProjectKeywords},"Button")),c.a.createElement("p",{className:"hero__subtitle"},t.tagline),c.a.createElement("div",{className:u.a.buttons},c.a.createElement(r.a,{className:Object(i.a)("",u.a.getStarted),to:Object(m.a)("docs/")},c.a.createElement(p.a,{style:{display:a?"block":"none"},color:"dark",size:"large",idleText:c.a.createElement("span",null,"Get Started \xa0\xa0",c.a.createElement(h.a,{icon:b.a})),width:"170px",height:"49px",className:"fadeIn"}))))),c.a.createElement("main",null,c.a.createElement("section",{className:u.a.exampleComponent},c.a.createElement("div",{className:u.a.exampleComponent__container},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--12"},c.a.createElement("div",{className:u.a.exampleComponent__item},c.a.createElement(E.a,{code:f,scope:g,height:"250px"}))))))),c.a.createElement("main",null,w&&w.length>0&&c.a.createElement("section",{className:u.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},w.map(((e,t)=>c.a.createElement(x,Object(n.a)({key:t},e)))))))))}},88:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(102),i=a(96),o=a(84),r=a(87);t.a=({noInline:e,code:t,scope:a,height:n,previewOnly:s=!1})=>{const{isDarkTheme:m}=Object(o.a)(),d=Object(c.b)(i.d)`
    border-radius: 3px;
    box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
    overflow: hidden;
    margin-bottom: 100px;
    `,u=c.b.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    @media (max-width: 600px) {
        flex-direction: column;
    }
    `,p=c.a`
    flex-basis: ${s?"100%":"50%"};
    width: ${s?"100%":"50%"};
    max-width: ${s?"100%":"50%"};
    @media (max-width: 600px) {
        flex-basis: auto;
        width: 100%;
        max-width: 100%;
        height: ${n};
        max-height: ${n};
    }
    `,h=c.b.div`
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    height: ${n};
    max-height: ${n};
    overflow: auto;
    ${p};
    * > textarea:focus {
        outline: none;
    }
    `,b=Object(c.b)(i.c)`
    position: relative;
    padding: 1.5rem;
    background: ${m?"#232525":"#e3eaea"};
    color: black;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    ${p};
    `,E=Object(c.b)(i.b)`
    display: block;
    padding: 0.5rem;
    background: ${"#ff5555"};
    color: ${"#f8f8f2"};
    white-space: pre-wrap;
    text-align: left;
    font-size: 0.9em;
    font-family: 'Source Code Pro', monospace;
    `;return l.a.createElement(d,{code:t,noInline:e,theme:r.a,scope:a},l.a.createElement(u,null,!s&&l.a.createElement(h,null,l.a.createElement(i.a,null)),l.a.createElement(b,null)),l.a.createElement(E,null))}}}]);