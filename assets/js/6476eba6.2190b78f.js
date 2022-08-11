"use strict";(self.webpackChunkreactive_button_doc=self.webpackChunkreactive_button_doc||[]).push([[827],{92785:(e,t,n)=>{n.d(t,{Z:()=>f});var a,i,r,l,o,d,c=n(81880),p=n(67294),m=n(19521),s=n(2497),u=n(87552),k=n(45697),N=n.n(k);const g=(0,m.ZP)(s.nu)(a||(a=(0,c.Z)(["\n  border-radius: 3px;\n  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);\n  overflow: hidden;\n  margin-bottom: 100px;\n"]))),v=m.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  align-items: stretch;\n  @media (max-width: 600px) {\n    flex-direction: column;\n  }\n"]))),h=(0,m.iv)(r||(r=(0,c.Z)(["\n  flex-basis: ",";\n  width: ",";\n  max-width: ",";\n  @media (max-width: 600px) {\n    flex-basis: auto;\n    width: 100%;\n    max-width: 100%;\n    height: ",";\n    max-height: ",";\n  }\n"])),(e=>e.previewOnly?"100%":"50%"),(e=>e.previewOnly?"100%":"50%"),(e=>e.previewOnly?"100%":"50%"),(e=>e.height),(e=>e.height)),b=m.ZP.div(l||(l=(0,c.Z)(["\n  font-family: 'Source Code Pro', monospace;\n  font-size: 14px;\n  height: ",";\n  max-height: ",";\n  overflow: auto;\n  ",";\n  * > textarea:focus {\n    outline: none;\n  }\n"])),(e=>e.height),(e=>e.height),h),y=(0,m.ZP)(s.i5)(o||(o=(0,c.Z)(["\n  position: relative;\n  padding: 1.5rem;\n  color: black;\n  height: auto;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  ",";\n"])),h),x=(0,m.ZP)(s.IF)(d||(d=(0,c.Z)(["\n  display: block;\n  padding: 0.5rem;\n  background: ",";\n  color: ",";\n  white-space: pre-wrap;\n  text-align: left;\n  font-size: 0.9em;\n  font-family: 'Source Code Pro', monospace;\n"])),"#ff5555","#f8f8f2"),C=e=>{let{noInline:t,code:n,scope:a,height:i,previewOnly:r=!1}=e;return p.createElement(g,{code:n,noInline:t,theme:u.Z,scope:a},p.createElement(v,null,!r&&p.createElement(b,{previewOnly:r,height:i},p.createElement(s.uz,null)),p.createElement(y,{previewOnly:r,height:i,className:"z-styled-preview"})),p.createElement(x,null))};C.propTypes={noInline:N().bool,code:N().string,scope:N().object,height:N().string,previewOnly:N().bool};const f=C},56539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});var a=n(87462),i=(n(67294),n(3905)),r=n(92785);var l=n(69917),o=n(51436),d=n(92814),c=n(39960);const p={id:"usage",title:"Usage"},m=void 0,s={unversionedId:"usage",id:"usage",title:"Usage",description:"The targets of the below example:",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/reactive-button/docs/usage",draft:!1,tags:[],version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"docs",previous:{title:"Installation",permalink:"/reactive-button/docs/installation"},next:{title:"Playground",permalink:"/reactive-button/docs/playground"}},u={},k=[{value:"Other Usage",id:"other-usage",level:2},{value:"Color",id:"color",level:3},{value:"Size",id:"size",level:3},{value:"Style",id:"style",level:3},{value:"Existing State",id:"existing-state",level:3},{value:"Without State",id:"without-state",level:3},{value:"Using Icons",id:"using-icons",level:3},{value:"Form Submit",id:"form-submit",level:3},{value:"Anchor Tag",id:"anchor-tag",level:3},{value:"Available Props",id:"available-props",level:2}],N={toc:k};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The targets of the below example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Show a button showing the text '",(0,i.kt)("em",{parentName:"li"},"Submit"),"'."),(0,i.kt)("li",{parentName:"ul"},"After clicking the button, change the button text to '",(0,i.kt)("em",{parentName:"li"},"Submitting"),"' and send an HTTP request."),(0,i.kt)("li",{parentName:"ul"},"Upon successful request, change the button text to '",(0,i.kt)("em",{parentName:"li"},"Done"),"' as success notification.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\nimport ReactiveButton from 'reactive-button';\n\nfunction App() {\n  const [state, setState] = useState('idle');\n\n  const onClickHandler = () => {\n    setState('loading');\n\n    // send an HTTP request\n    setTimeout(() => {\n      setState('success');\n    }, 2000);\n  };\n\n  return (\n    <ReactiveButton\n      buttonState={state}\n      idleText=\"Submit\"\n      loadingText=\"Submitting\"\n      successText=\"Done\"\n      onClick={onClickHandler}\n    />\n  );\n}\n\nexport default App;\n")),(0,i.kt)("h2",{id:"other-usage"},"Other Usage"),(0,i.kt)("p",null,"Reactive Button has all the functionalities of a normal button."),(0,i.kt)("h3",{id:"color"},"Color"),(0,i.kt)("p",null,"Reactive Button comes with 10 default color options."),(0,i.kt)("div",null,(0,i.kt)(r.Z,{code:'\n<div>\n  <section className="flex-section">\n    <div className="item p-1">\n      <ReactiveButton idleText="Primary" color="primary" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Secondary" color="secondary" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Teal" color="teal" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Green" color="green" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Red" color="red" />\n    </div>\n  </section>\n  <section className="flex-section">\n    <div className="item p-1">\n      <ReactiveButton idleText="Violet" color="violet" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Blue" color="blue" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Yellow" color="yellow" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Dark" color="dark" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Light" color="light" />\n    </div>\n  </section>\n</div>\n',scope:{ReactiveButton:l.Z,faReply:o.Lh7},previewOnly:!0,mdxType:"Playground"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <>\n    <ReactiveButton color="primary" />\n    <ReactiveButton color="secondary" />\n    <ReactiveButton color="teal" />\n    <ReactiveButton color="green" />\n    <ReactiveButton color="red" />\n    <ReactiveButton color="violet" />\n    <ReactiveButton color="blue" />\n    <ReactiveButton color="yellow" />\n    <ReactiveButton color="dark" />\n    <ReactiveButton color="light" />\n  </>\n);\n')),(0,i.kt)("h3",{id:"size"},"Size"),(0,i.kt)("p",null,"There are 4 sizes available."),(0,i.kt)("div",null,(0,i.kt)(r.Z,{code:'\n<div>\n  <section className="flex-section">\n    <div className="item p-1">\n      <ReactiveButton idleText="Tiny" size="tiny" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Small" size="small" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Medium" size="medium" />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Large" size="large" />\n    </div>\n  </section>\n</div>\n',scope:{ReactiveButton:l.Z,faReply:o.Lh7},previewOnly:!0,mdxType:"Playground"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <>\n    <ReactiveButton size="tiny" />\n    <ReactiveButton size="small" />\n    <ReactiveButton size="medium" />\n    <ReactiveButton size="large" />\n  </>\n);\n')),(0,i.kt)("h3",{id:"style"},"Style"),(0,i.kt)("p",null,"Make the buttons more beautiful with these customization options."),(0,i.kt)("div",null,(0,i.kt)(r.Z,{code:'\n<div>\n  <section className="flex-section">\n    <div className="item p-1">\n      <ReactiveButton idleText="Outline" outline />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Rounded" rounded />\n    </div>\n    <div className="item p-1">\n      <ReactiveButton idleText="Shadow" shadow />\n    </div>\n  </section>\n</div>\n',scope:{ReactiveButton:l.Z,faReply:o.Lh7},previewOnly:!0,mdxType:"Playground"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"return (\n  <>\n    <ReactiveButton outline />\n    <ReactiveButton rounded />\n    <ReactiveButton shadow />\n  </>\n);\n")),(0,i.kt)("h3",{id:"existing-state"},"Existing State"),(0,i.kt)("p",null,"In your project, There might be existing state for loading indicator which accepts boolean value only. If you don't want to define new state for Reactive Button, then utilize the existing state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const [loading, setLoading] = useState(false);\n\nreturn (\n  <ReactiveButton\n    buttonState={loading ? 'loading' : 'idle'}\n    idleText={'Button'}\n    loadingText={'Loading'}\n  />\n);\n")),(0,i.kt)("h3",{id:"without-state"},"Without State"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"state")," is not mandatory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"return <ReactiveButton onClick={onClickHandler} />;\n")),(0,i.kt)("h3",{id:"using-icons"},"Using Icons"),(0,i.kt)("p",null,"You can use your own icons. Don't forget to wrap them with a parent element."),(0,i.kt)("div",null,(0,i.kt)(r.Z,{code:"\n<ReactiveButton\n  idleText={\n    <span>\n      <FontAwesomeIcon icon={faReply} /> Send\n    </span>\n  }\n/>\n",scope:{ReactiveButton:l.Z,faReply:o.Lh7,FontAwesomeIcon:d.G},previewOnly:!0,mdxType:"Playground"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"return (\n  <ReactiveButton\n    idleText={\n      <span>\n        <faReply /> Send\n      </span>\n    }\n  />\n);\n")),(0,i.kt)("h3",{id:"form-submit"},"Form Submit"),(0,i.kt)("p",null,"If you need to submit form by button clicking, set the ",(0,i.kt)("code",null,"type")," prop as '",(0,i.kt)("strong",null,"submit"),"'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <form>\n    <input type="text" name="username" />\n    <input type="password" name="password" />\n    <ReactiveButton type={\'submit\'} idleText="Submit" />\n  </form>\n);\n')),(0,i.kt)("h3",{id:"anchor-tag"},"Anchor Tag"),(0,i.kt)("p",null,"To use Reactive button as anchor tag, simply wrap it with an anchor tag."),(0,i.kt)("div",null,(0,i.kt)(r.Z,{code:'\n<a href="https://github.com/">\n  <ReactiveButton idleText="Visit Github" />\n</a>\n',scope:{ReactiveButton:l.Z},previewOnly:!0,mdxType:"Playground"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <a href="https://github.com/" target="_blank">\n    <ReactiveButton idleText="Visit Github" />\n  </a>\n);\n')),(0,i.kt)("strong",null,"Note:")," For more usage, visit ",(0,i.kt)(c.Z,{to:"/docs/Playground",mdxType:"Link"},"Playground"),".",(0,i.kt)("h2",{id:"available-props"},"Available Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Props"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"buttonState"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'idle'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'loading'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'success'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'error'")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'idle'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"onClick"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Callback function when clicking button"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"() => {}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"color"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'primary'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'secondary'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'dark'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'light'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'green'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'red'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'yellow'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'teal'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'violet'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'blue'")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'primary'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"idleText"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Button text when idle"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'Click Me'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"loadingText"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Button text when loading"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'Loading'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"successText"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Button text when loading successful"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'Success'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"errorText"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Button text when loading failed"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'Error'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'button'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'submit'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'reset'")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'button'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"className"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Button classnames"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"''"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"style"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"React.CSSProperties")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Custom style"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"{}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"outline"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Enable outline effect"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"shadow"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Enable shadow effect"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"rounded"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Enable rounded button"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"size"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'tiny'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'small'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'normal'")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"'large'")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"'normal'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"block"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Block Button"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"messageDuration"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Success/Error message duration in millisecond"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"2000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"disabled"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Disable button"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"buttonRef"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"React.Ref")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Button reference"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"null"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"width"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Override button width"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"null"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"height"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Override button height"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"null"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"animation"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Button hover and click animation"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))))}g.isMDXComponent=!0}}]);