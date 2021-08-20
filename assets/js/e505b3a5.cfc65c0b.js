"use strict";(self.webpackChunkreactive_button_doc=self.webpackChunkreactive_button_doc||[]).push([[120],{92785:function(e,t,n){var o,r,i,a,c,l,u=n(81880),s=n(67294),p=n(29163),m=n(62229),g=(n(85350),n(87552)),d=(0,p.ZP)(m.nu)(o||(o=(0,u.Z)(["\nborder-radius: 3px;\nbox-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);\noverflow: hidden;\nmargin-bottom: 100px;\n"]))),h=p.ZP.div(r||(r=(0,u.Z)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: stretch;\nalign-items: stretch;\n@media (max-width: 600px) {\n    flex-direction: column;\n}\n"]))),v=(0,p.iv)(i||(i=(0,u.Z)(["\nflex-basis: ",";\nwidth: ",";\nmax-width: ",";\n@media (max-width: 600px) {\n    flex-basis: auto;\n    width: 100%;\n    max-width: 100%;\n    height: ",";\n    max-height: ",";\n}\n"])),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.height}),(function(e){return e.height})),b=p.ZP.div(a||(a=(0,u.Z)(["\nfont-family: 'Source Code Pro', monospace;\nfont-size: 14px;\nheight: ",";\nmax-height: ",";\noverflow: auto;\n",";\n* > textarea:focus {\n    outline: none;\n}\n"])),(function(e){return e.height}),(function(e){return e.height}),v),f=(0,p.ZP)(m.i5)(c||(c=(0,u.Z)(["\nposition: relative;\npadding: 1.5rem;\ncolor: black;\nheight: auto;\noverflow: hidden;\ndisplay: flex;\njustify-content: center;\nflex-direction: row;\nalign-items: center;\nflex-wrap: wrap;\n",";\n"])),v),y=(0,p.ZP)(m.IF)(l||(l=(0,u.Z)(["\ndisplay: block;\npadding: 0.5rem;\nbackground: ",";\ncolor: ",";\nwhite-space: pre-wrap;\ntext-align: left;\nfont-size: 0.9em;\nfont-family: 'Source Code Pro', monospace;\n"])),"#ff5555","#f8f8f2");t.Z=function(e){var t=e.noInline,n=e.code,o=e.scope,r=e.height,i=e.previewOnly,a=void 0!==i&&i;return s.createElement(d,{code:n,noInline:t,theme:g.Z,scope:o},s.createElement(h,null,!a&&s.createElement(b,{previewOnly:a,height:r},s.createElement(m.uz,null)),s.createElement(f,{previewOnly:a,height:r,className:"z-styled-preview"})),s.createElement(y,null))}},13043:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=n(92785),c=n(69917),l=["components"],u={id:"theming",title:"Theming"},s=void 0,p={unversionedId:"theming",id:"theming",isDocsHomePage:!1,title:"Theming",description:"Reactive Button provides flexible styling option. Most of the common style changes can be achieved by using the style prop.",source:"@site/docs/theming.md",sourceDirName:".",slug:"/theming",permalink:"/reactive-button/docs/theming",version:"current",frontMatter:{id:"theming",title:"Theming"},sidebar:"docs",previous:{title:"Playground",permalink:"/reactive-button/docs/playground"}},m=[{value:"Custom Theme",id:"custom-theme",children:[]}],g={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("span",{className:"keyword"},"Reactive Button")," provides flexible styling option. Most of the common style changes can be achieved by using the ",(0,i.kt)("code",null,"style")," prop.",(0,i.kt)("div",{className:"my-4"},(0,i.kt)(a.Z,{code:"<ReactiveButton\n    style={\n        {\n            borderRadius: '10px', \n            color: 'black'\n        }\n    }\n/>",scope:{ReactiveButton:c.Z},style:{margin:"5px 0px"},mdxType:"Playground"})),(0,i.kt)("p",null,"However, you are free to create your own theme."),(0,i.kt)("h2",{id:"custom-theme"},"Custom Theme"),(0,i.kt)("p",null,"Modify the values how you prefer and use it in your existing css file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".reactive-btn-wrapper, .reactive-btn {\n    --reactive-button-min-width: 100px !important;\n    --reactive-button-min-height: 35px !important;\n    --reactive-button-font-size: 14px !important;\n    --reactive-button-font-weight: 400 !important;\n    --reactive-button-border-radius: 0px !important;\n    --reactive-button-text-color: #FFFFFF !important;\n    --reactive-progress-color: rgba(0, 0, 0, .15) !important;\n\n    --reactive-button-primary-color: rgba(88, 103, 221, 1) !important;\n    --reactive-button-secondary-color: rgba(108, 117, 125, 1) !important;\n    --reactive-button-dark-color: rgba(66, 78, 106, 1) !important;\n    --reactive-button-light-color: rgba(183, 186, 191, 1) !important;\n    --reactive-button-green-color: rgba(37, 162, 51, 1) !important;\n    --reactive-button-red-color: rgba(244, 81, 108, 1) !important;\n    --reactive-button-yellow-color: rgba(255, 193, 7, 1) !important;\n    --reactive-button-teal-color: rgba(0, 181, 173, 1) !important;\n    --reactive-button-violet-color: rgba(100, 53, 201, 1) !important;\n    --reactive-button-blue-color: rgba(66, 153, 225, 1) !important;\n\n    --reactive-progress-outline-primary-color: rgba(88, 103, 221, .3) !important;\n    --reactive-progress-outline-secondary-color: rgba(108, 117, 125, .3) !important;\n    --reactive-progress-outline-dark-color: rgba(66, 78, 106, .3) !important;\n    --reactive-progress-outline-light-color: rgba(214, 212, 212, .3) !important;\n    --reactive-progress-outline-green-color: rgba(37, 162, 51, .3) !important;\n    --reactive-progress-outline-red-color: rgba(244, 81, 108, .3) !important;\n    --reactive-progress-outline-yellow-color: rgba(255, 193, 7, .3) !important;\n    --reactive-progress-outline-teal-color: rgba(0, 181, 173, .3) !important;\n    --reactive-progress-outline-violet-color: rgba(100, 53, 201, .3) !important;\n    --reactive-progress-outline-blue-color: rgba(66, 153, 225, .3) !important;\n}\n")))}d.isMDXComponent=!0}}]);