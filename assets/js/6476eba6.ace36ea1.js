"use strict";(self.webpackChunkreactive_button_doc=self.webpackChunkreactive_button_doc||[]).push([[827],{92785:function(e,t,n){var a,i,r,l,o,d,s=n(81880),c=n(67294),m=n(87379),p=n(2497),u=n(87552),k=n(45697),g=n.n(k),N=(0,m.ZP)(p.nu)(a||(a=(0,s.Z)(["\n  border-radius: 3px;\n  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);\n  overflow: hidden;\n  margin-bottom: 100px;\n"]))),v=m.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  align-items: stretch;\n  @media (max-width: 600px) {\n    flex-direction: column;\n  }\n"]))),h=(0,m.iv)(r||(r=(0,s.Z)(["\n  flex-basis: ",";\n  width: ",";\n  max-width: ",";\n  @media (max-width: 600px) {\n    flex-basis: auto;\n    width: 100%;\n    max-width: 100%;\n    height: ",";\n    max-height: ",";\n  }\n"])),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.previewOnly?"100%":"50%"}),(function(e){return e.height}),(function(e){return e.height})),b=m.ZP.div(l||(l=(0,s.Z)(["\n  font-family: 'Source Code Pro', monospace;\n  font-size: 14px;\n  height: ",";\n  max-height: ",";\n  overflow: auto;\n  ",";\n  * > textarea:focus {\n    outline: none;\n  }\n"])),(function(e){return e.height}),(function(e){return e.height}),h),f=(0,m.ZP)(p.i5)(o||(o=(0,s.Z)(["\n  position: relative;\n  padding: 1.5rem;\n  color: black;\n  height: auto;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  ",";\n"])),h),y=(0,m.ZP)(p.IF)(d||(d=(0,s.Z)(["\n  display: block;\n  padding: 0.5rem;\n  background: ",";\n  color: ",";\n  white-space: pre-wrap;\n  text-align: left;\n  font-size: 0.9em;\n  font-family: 'Source Code Pro', monospace;\n"])),"#ff5555","#f8f8f2"),x=function(e){var t=e.noInline,n=e.code,a=e.scope,i=e.height,r=e.previewOnly,l=void 0!==r&&r;return c.createElement(N,{code:n,noInline:t,theme:u.Z,scope:a},c.createElement(v,null,!l&&c.createElement(b,{previewOnly:l,height:i},c.createElement(p.uz,null)),c.createElement(f,{previewOnly:l,height:i,className:"z-styled-preview"})),c.createElement(y,null))};x.propTypes={noInline:g().bool,code:g().string,scope:g().object,height:g().string,previewOnly:g().bool},t.Z=x},56539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return N}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=n(92785),o=n(69917),d=n(51436),s=n(92814),c=n(39960),m=["components"],p={id:"usage",title:"Usage"},u=void 0,k={unversionedId:"usage",id:"usage",title:"Usage",description:"The Below example demonstrates an asynchronous task. When clicking the button, an asynchronous task (e.g. Data fetch, form submit) will be processed and after processing, a success or error message will be displayed.",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/reactive-button/docs/usage",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"docs",previous:{title:"Installation",permalink:"/reactive-button/docs/installation"},next:{title:"Playground",permalink:"/reactive-button/docs/playground"}},g={},N=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Full Usage",id:"full-usage",level:2},{value:"Other Usage",id:"other-usage",level:2},{value:"Color",id:"color",level:3},{value:"Size",id:"size",level:3},{value:"Style",id:"style",level:3},{value:"Existing State",id:"existing-state",level:3},{value:"Without State",id:"without-state",level:3},{value:"Using Icons",id:"using-icons",level:3},{value:"Form Submit",id:"form-submit",level:3},{value:"Anchor Tag",id:"anchor-tag",level:3},{value:"Available Props",id:"available-props",level:2}],v={toc:N};function h(e){var t=e.components,n=(0,i.Z)(e,m);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Below example demonstrates an asynchronous task. When clicking the button, an asynchronous task (e.g. Data fetch, form submit) will be processed and after processing, a success or error message will be displayed."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initialize a state with string value ",(0,r.kt)("code",null,"'idle'")," and assign it as ",(0,r.kt)("strong",null,"'buttonState'")," prop. Now it will render an idle text."),(0,r.kt)("li",{parentName:"ul"},"When the button is clicked, set ",(0,r.kt)("strong",null,"'buttonState'"),"'s value to ",(0,r.kt)("code",null,"'loading'"),"."),(0,r.kt)("li",{parentName:"ul"},"When the task is completed, set ",(0,r.kt)("strong",null,"'buttonState'")," to ",(0,r.kt)("code",null,"'success'"),", ",(0,r.kt)("code",null,"'error'")," or ",(0,r.kt)("code",null,"'idle'")," according to your need.")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\nimport ReactiveButton from 'reactive-button';\n\nfunction App() {\n  const [state, setState] = useState('idle');\n\n  const onClickHandler = () => {\n    setState('loading');\n    setTimeout(() => {\n      setState('success');\n    }, 2000);\n  };\n\n  return <ReactiveButton buttonState={state} onClick={onClickHandler} />;\n}\n\nexport default App;\n")),(0,r.kt)("h2",{id:"full-usage"},"Full Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\nimport ReactiveButton from 'reactive-button';\n\nfunction App() {\n  const [state, setState] = useState('idle');\n\n  const onClickHandler = () => {\n    setState('loading');\n    setTimeout(() => {\n      setState('success');\n    }, 2000);\n  };\n\n  return (\n    <ReactiveButton\n      buttonState={state}\n      onClick={onClickHandler}\n      color={'primary'}\n      idleText={'Button'}\n      loadingText={'Loading'}\n      successText={'Success'}\n      errorText={'Error'}\n      type={'button'}\n      className={'class1 class2'}\n      style={{ borderRadius: '5px' }}\n      outline={false}\n      shadow={false}\n      rounded={false}\n      size={'normal'}\n      block={false}\n      messageDuration={2000}\n      disabled={false}\n      buttonRef={null}\n      width={null}\n      height={null}\n      animation={true}\n    />\n  );\n}\n\nexport default App;\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For non asynchronous task, state management is not needed. Use as like normal button."))),(0,r.kt)("h2",{id:"other-usage"},"Other Usage"),(0,r.kt)("p",null,"Reactive Button has all the functionalities of a normal button."),(0,r.kt)("h3",{id:"color"},"Color"),(0,r.kt)("p",null,"Reactive Button comes with 10 default color options."),(0,r.kt)("div",null,(0,r.kt)(l.Z,{code:'\n<div>\n  <section className="flex-section">\n    <div className="item p-1">\n      <ReactiveButton idleText="Primary" color="primary" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Secondary" color="secondary" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Teal" color="teal" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Green" color="green" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Red" color="red" />\n    </div>\n  </section>\n  <section className="flex-section">\n    <div className="item p-1">\n      <ReactiveButton idleText="Violet" color="violet" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Blue" color="blue" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Yellow" color="yellow" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Dark" color="dark" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Light" color="light" />\n    </div>\n  </section>\n</div>\n',scope:{ReactiveButton:o.Z,faReply:d.Lh7},previewOnly:!0,mdxType:"Playground"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<ReactiveButton color="primary"/>\n<ReactiveButton color="secondary"/>\n<ReactiveButton color="teal"/>\n<ReactiveButton color="green"/>\n<ReactiveButton color="red"/>\n<ReactiveButton color="violet"/>\n<ReactiveButton color="blue"/>\n<ReactiveButton color="yellow"/>\n<ReactiveButton color="dark"/>\n<ReactiveButton color="light"/>\n')),(0,r.kt)("h3",{id:"size"},"Size"),(0,r.kt)("p",null,"There are 4 sizes available."),(0,r.kt)("div",null,(0,r.kt)(l.Z,{code:'\n<div>\n  <section className="flex-section">\n    <div className="item p-1">\n      <ReactiveButton idleText="Tiny" size="tiny" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Small" size="small" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Medium" size="medium" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Large" size="large" />\n    </div>\n  </section>\n</div>\n',scope:{ReactiveButton:o.Z,faReply:d.Lh7},previewOnly:!0,mdxType:"Playground"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<ReactiveButton size="tiny"/>\n<ReactiveButton size="small"/>\n<ReactiveButton size="medium"/>\n<ReactiveButton size="large"/>\n')),(0,r.kt)("h3",{id:"style"},"Style"),(0,r.kt)("p",null,"Make the buttons more beautiful with these customization options."),(0,r.kt)("div",null,(0,r.kt)(l.Z,{code:'\n<div>\n  <section className="flex-section">\n    <div className="item p-1">\n      <ReactiveButton idleText="Outline" outline />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Rounded" rounded />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Shadow" shadow />\n    </div>\n  </section>\n</div>\n',scope:{ReactiveButton:o.Z,faReply:d.Lh7},previewOnly:!0,mdxType:"Playground"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<ReactiveButton outline/>\n<ReactiveButton rounded/>\n<ReactiveButton shadow/>\n")),(0,r.kt)("h3",{id:"existing-state"},"Existing State"),(0,r.kt)("p",null,"In your project, There might be existing state for loading indicator which accepts boolean value only. If you don't want to define new state for Reactive Button, then utilize the existing state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const [loading, setLoading] = useState(false);\n\nreturn (\n  <ReactiveButton\n    buttonState={loading ? 'loading' : 'idle'}\n    idleText={'Button'}\n    loadingText={'Loading'}\n  />\n);\n")),(0,r.kt)("h3",{id:"without-state"},"Without State"),(0,r.kt)("p",null,"You are not limited to use state always."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<ReactiveButton onClick={doSomething} idleText={'Some Text'} />\n")),(0,r.kt)("h3",{id:"using-icons"},"Using Icons"),(0,r.kt)("p",null,"You can use your own icons. Don't forget to wrap them with a parent element."),(0,r.kt)("div",null,(0,r.kt)(l.Z,{code:"\n<ReactiveButton\n  idleText={\n    <span>\n      <FontAwesomeIcon icon={faReply} /> Send\n    </span>\n  }\n/>\n",scope:{ReactiveButton:o.Z,faReply:d.Lh7,FontAwesomeIcon:s.G},previewOnly:!0,mdxType:"Playground"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<ReactiveButton\n  idleText={\n    <span>\n      <faReply /> Send\n    </span>\n  }\n/>\n")),(0,r.kt)("h3",{id:"form-submit"},"Form Submit"),(0,r.kt)("p",null,"If you need to submit form by button clicking, set the ",(0,r.kt)("code",null,"type")," prop as '",(0,r.kt)("strong",null,"submit"),"'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<form>\n  <input type="text" name="username" />\n  <input type="password" name="password" />\n  <ReactiveButton type={\'submit\'} idleText="Submit" />\n</form>\n')),(0,r.kt)("h3",{id:"anchor-tag"},"Anchor Tag"),(0,r.kt)("p",null,"To use Reactive button as anchor tag, simply wrap it with an anchor tag."),(0,r.kt)("div",null,(0,r.kt)(l.Z,{code:'\n<a href="https://github.com/">\n  <ReactiveButton idleText="Visit Github" />\n</a>\n',scope:{ReactiveButton:o.Z},previewOnly:!0,mdxType:"Playground"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<a href="https://github.com/" target="_blank">\n  <ReactiveButton idleText="Visit Github" />\n</a>\n')),(0,r.kt)("strong",null,"Note:")," For more usage, visit ",(0,r.kt)(c.Z,{to:"/docs/Playground",mdxType:"Link"},"Playground"),".",(0,r.kt)("h2",{id:"available-props"},"Available Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Props"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"buttonState"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'idle'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'loading'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'success'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'error'")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'idle'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"onClick"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Callback function when clicking button"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"() => {}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"color"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'primary'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'secondary'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'dark'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'light'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'green'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'red'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'yellow'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'teal'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'violet'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'blue'")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'primary'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"idleText"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Button text when idle"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'Click Me'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"loadingText"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Button text when loading"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'Loading'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"successText"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Button text when loading successful"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'Success'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"errorText"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Button text when loading failed"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'Error'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'button'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'submit'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'reset'")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'button'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"className"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Button classnames"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"''"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"style"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"React.CSSProperties")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Custom style"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"outline"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Enable outline effect"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"shadow"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Enable shadow effect"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"rounded"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Enable rounded button"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"size"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'tiny'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'small'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'normal'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'large'")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"'normal'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"block"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Block Button"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"messageDuration"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Success/Error message duration in millisecond"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"2000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Disable button"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"buttonRef"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"React.Ref")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Button reference"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"width"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Override button width"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"height"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Override button height"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"animation"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Button hover and click animation"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))))}h.isMDXComponent=!0}}]);