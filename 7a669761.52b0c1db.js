(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{73:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return u}));var r=o(2),n=o(6),a=(o(0),o(85)),i=o(88);var c=o(79),l={id:"theming",title:"Theming"},s={unversionedId:"theming",id:"theming",isDocsHomePage:!1,title:"Theming",description:"Reactive Button provides flexible styling option. Most of the common style changes can be achieved by using the style prop.",source:"@site/docs\\theming.md",slug:"/theming",permalink:"/reactive-button/docs/theming",version:"current",sidebar:"docs",previous:{title:"Playground",permalink:"/reactive-button/docs/playground"}},p=[{value:"Custom Theme",id:"custom-theme",children:[]}],b={rightToc:p};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("span",{className:"keyword"},"Reactive Button")," provides flexible styling option. Most of the common style changes can be achieved by using the ",Object(a.b)("code",null,"style")," prop.",Object(a.b)("div",{className:"my-4"},Object(a.b)(i.a,{code:"<ReactiveButton\n    style={\n        {\n            borderRadius: '10px', \n            color: 'black'\n        }\n    }\n/>",scope:{ReactiveButton:c.a},style:{margin:"5px 0px"},mdxType:"Playground"})),Object(a.b)("p",null,"However, you are free to create your own theme."),Object(a.b)("h2",{id:"custom-theme"},"Custom Theme"),Object(a.b)("p",null,"Modify the values how you prefer and use it in your existing css file."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".reactive-btn-wrapper, .reactive-btn {\n    --reactive-button-min-width: 100px !important;\n    --reactive-button-min-height: 35px !important;\n    --reactive-button-font-size: 14px !important;\n    --reactive-button-font-weight: 400 !important;\n    --reactive-button-border-radius: 0px !important;\n    --reactive-button-text-color: #FFFFFF !important;\n    --reactive-progress-color: rgba(0, 0, 0, .15) !important;\n\n    --reactive-button-primary-color: rgba(88, 103, 221, 1) !important;\n    --reactive-button-secondary-color: rgba(108, 117, 125, 1) !important;\n    --reactive-button-dark-color: rgba(66, 78, 106, 1) !important;\n    --reactive-button-light-color: rgba(183, 186, 191, 1) !important;\n    --reactive-button-green-color: rgba(37, 162, 51, 1) !important;\n    --reactive-button-red-color: rgba(244, 81, 108, 1) !important;\n    --reactive-button-yellow-color: rgba(255, 193, 7, 1) !important;\n    --reactive-button-teal-color: rgba(0, 181, 173, 1) !important;\n    --reactive-button-violet-color: rgba(100, 53, 201, 1) !important;\n    --reactive-button-blue-color: rgba(66, 153, 225, 1) !important;\n\n    --reactive-progress-outline-primary-color: rgba(88, 103, 221, .3) !important;\n    --reactive-progress-outline-secondary-color: rgba(108, 117, 125, .3) !important;\n    --reactive-progress-outline-dark-color: rgba(66, 78, 106, .3) !important;\n    --reactive-progress-outline-light-color: rgba(214, 212, 212, .3) !important;\n    --reactive-progress-outline-green-color: rgba(37, 162, 51, .3) !important;\n    --reactive-progress-outline-red-color: rgba(244, 81, 108, .3) !important;\n    --reactive-progress-outline-yellow-color: rgba(255, 193, 7, .3) !important;\n    --reactive-progress-outline-teal-color: rgba(0, 181, 173, .3) !important;\n    --reactive-progress-outline-violet-color: rgba(100, 53, 201, .3) !important;\n    --reactive-progress-outline-blue-color: rgba(66, 153, 225, .3) !important;\n}\n")))}u.isMDXComponent=!0},88:function(e,t,o){"use strict";var r=o(0),n=o.n(r),a=o(102),i=o(96),c=o(84),l=o(87);t.a=({noInline:e,code:t,scope:o,height:r,previewOnly:s=!1})=>{const{isDarkTheme:p}=Object(c.a)(),b=Object(a.b)(i.d)`
    border-radius: 3px;
    box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
    overflow: hidden;
    margin-bottom: 100px;
    `,u=a.b.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    @media (max-width: 600px) {
        flex-direction: column;
    }
    `,m=a.a`
    flex-basis: ${s?"100%":"50%"};
    width: ${s?"100%":"50%"};
    max-width: ${s?"100%":"50%"};
    @media (max-width: 600px) {
        flex-basis: auto;
        width: 100%;
        max-width: 100%;
        height: ${r};
        max-height: ${r};
    }
    `,d=a.b.div`
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    height: ${r};
    max-height: ${r};
    overflow: auto;
    ${m};
    * > textarea:focus {
        outline: none;
    }
    `,g=Object(a.b)(i.c)`
    position: relative;
    padding: 1.5rem;
    background: ${p?"#232525":"#e3eaea"};
    color: black;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    ${m};
    `,h=Object(a.b)(i.b)`
    display: block;
    padding: 0.5rem;
    background: ${"#ff5555"};
    color: ${"#f8f8f2"};
    white-space: pre-wrap;
    text-align: left;
    font-size: 0.9em;
    font-family: 'Source Code Pro', monospace;
    `;return n.a.createElement(b,{code:t,noInline:e,theme:l.a,scope:o},n.a.createElement(u,null,!s&&n.a.createElement(d,null,n.a.createElement(i.a,null)),n.a.createElement(g,null)),n.a.createElement(h,null))}}}]);