(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{105:function(e,t,o){"use strict";var r=o(0),n=o.n(r),i=o(119),a=o(113),c=o(101),l=o(104);const s=Object(i.b)(a.d)`
border-radius: 3px;
box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
overflow: hidden;
margin-bottom: 100px;
`,p=i.b.div`
display: flex;
flex-direction: row;
justify-content: stretch;
align-items: stretch;
@media (max-width: 600px) {
    flex-direction: column;
}
`,m=i.a`
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
`,b=i.b.div`
font-family: 'Source Code Pro', monospace;
font-size: 14px;
height: ${e=>e.height};
max-height: ${e=>e.height};
overflow: auto;
${m};
* > textarea:focus {
    outline: none;
}
`,u=Object(i.b)(a.c)`
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
${m};
`,d=Object(i.b)(a.b)`
display: block;
padding: 0.5rem;
background: ${"#ff5555"};
color: ${"#f8f8f2"};
white-space: pre-wrap;
text-align: left;
font-size: 0.9em;
font-family: 'Source Code Pro', monospace;
`;t.a=({noInline:e,code:t,scope:o,height:r,previewOnly:i=!1})=>{const{isDarkTheme:m}=Object(c.a)();return n.a.createElement(s,{code:t,noInline:e,theme:l.a,scope:o},n.a.createElement(p,null,!i&&n.a.createElement(b,{previewOnly:i,height:r},n.a.createElement(a.a,null)),n.a.createElement(u,{previewOnly:i,height:r,isDarkTheme:m})),n.a.createElement(d,null))}},88:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return b}));var r=o(3),n=o(8),i=(o(0),o(102)),a=o(105);var c=o(96),l={id:"theming",title:"Theming"},s={unversionedId:"theming",id:"theming",isDocsHomePage:!1,title:"Theming",description:"Reactive Button provides flexible styling option. Most of the common style changes can be achieved by using the style prop.",source:"@site/docs/theming.md",slug:"/theming",permalink:"/reactive-button/docs/theming",version:"current",sidebar:"docs",previous:{title:"Playground",permalink:"/reactive-button/docs/playground"}},p=[{value:"Custom Theme",id:"custom-theme",children:[]}],m={toc:p};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("span",{className:"keyword"},"Reactive Button")," provides flexible styling option. Most of the common style changes can be achieved by using the ",Object(i.b)("code",null,"style")," prop.",Object(i.b)("div",{className:"my-4"},Object(i.b)(a.a,{code:"<ReactiveButton\n    style={\n        {\n            borderRadius: '10px', \n            color: 'black'\n        }\n    }\n/>",scope:{ReactiveButton:c.a},style:{margin:"5px 0px"},mdxType:"Playground"})),Object(i.b)("p",null,"However, you are free to create your own theme."),Object(i.b)("h2",{id:"custom-theme"},"Custom Theme"),Object(i.b)("p",null,"Modify the values how you prefer and use it in your existing css file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-css"},".reactive-btn-wrapper, .reactive-btn {\n    --reactive-button-min-width: 100px !important;\n    --reactive-button-min-height: 35px !important;\n    --reactive-button-font-size: 14px !important;\n    --reactive-button-font-weight: 400 !important;\n    --reactive-button-border-radius: 0px !important;\n    --reactive-button-text-color: #FFFFFF !important;\n    --reactive-progress-color: rgba(0, 0, 0, .15) !important;\n\n    --reactive-button-primary-color: rgba(88, 103, 221, 1) !important;\n    --reactive-button-secondary-color: rgba(108, 117, 125, 1) !important;\n    --reactive-button-dark-color: rgba(66, 78, 106, 1) !important;\n    --reactive-button-light-color: rgba(183, 186, 191, 1) !important;\n    --reactive-button-green-color: rgba(37, 162, 51, 1) !important;\n    --reactive-button-red-color: rgba(244, 81, 108, 1) !important;\n    --reactive-button-yellow-color: rgba(255, 193, 7, 1) !important;\n    --reactive-button-teal-color: rgba(0, 181, 173, 1) !important;\n    --reactive-button-violet-color: rgba(100, 53, 201, 1) !important;\n    --reactive-button-blue-color: rgba(66, 153, 225, 1) !important;\n\n    --reactive-progress-outline-primary-color: rgba(88, 103, 221, .3) !important;\n    --reactive-progress-outline-secondary-color: rgba(108, 117, 125, .3) !important;\n    --reactive-progress-outline-dark-color: rgba(66, 78, 106, .3) !important;\n    --reactive-progress-outline-light-color: rgba(214, 212, 212, .3) !important;\n    --reactive-progress-outline-green-color: rgba(37, 162, 51, .3) !important;\n    --reactive-progress-outline-red-color: rgba(244, 81, 108, .3) !important;\n    --reactive-progress-outline-yellow-color: rgba(255, 193, 7, .3) !important;\n    --reactive-progress-outline-teal-color: rgba(0, 181, 173, .3) !important;\n    --reactive-progress-outline-violet-color: rgba(100, 53, 201, .3) !important;\n    --reactive-progress-outline-blue-color: rgba(66, 153, 225, .3) !important;\n}\n")))}b.isMDXComponent=!0}}]);