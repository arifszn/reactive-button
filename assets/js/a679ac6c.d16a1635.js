"use strict";(self.webpackChunkreactive_button_doc=self.webpackChunkreactive_button_doc||[]).push([[450],{46415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>N,frontMatter:()=>g,metadata:()=>E,toc:()=>h});var l=a(87462),o=a(67294),n=a(3905),r=a(69917);const c=()=>{const e="idle",t="primary",a="Click Me",l="Loading",n="Success",c="Error",s="",m=!1,i=!1,d=!1,u="normal",g=2e3,p=!1,E=!1,v="",h="",b=!0,[N,f]=(0,o.useState)(e),[y,x]=(0,o.useState)(t),[S,k]=(0,o.useState)(a),[w,C]=(0,o.useState)(l),[T,F]=(0,o.useState)(n),[_,z]=(0,o.useState)(c),[I,P]=(0,o.useState)(s),[R,D]=(0,o.useState)(m),[M,B]=(0,o.useState)(i),[A,L]=(0,o.useState)(d),[Z,U]=(0,o.useState)(u),[H,X]=(0,o.useState)(g),[G,J]=(0,o.useState)(p),[Q,Y]=(0,o.useState)(E),[j,q]=(0,o.useState)(v),[K,O]=(0,o.useState)(h),[V,W]=(0,o.useState)(b),[$,ee]=(0,o.useState)("idle"),[te,ae]=(0,o.useState)(!1);(0,o.useEffect)((()=>{"success"!==N&&"error"!==N||(ae(!0),setTimeout((()=>{ae(!1),f("idle")}),H))}),[N]);return o.createElement("div",{className:"interactive-playground-component-wrapper"},o.createElement("div",{className:"mb-3"},o.createElement("div",{className:"card playground__card"},o.createElement("div",{className:"card__body my-auto text-center"},o.createElement(r.Z,{buttonState:N,onClick:()=>{ae(!0),f("loading"),setTimeout((()=>{f("success"),ae(!1)}),2e3)},color:y,idleText:""===S?a:S,loadingText:""===S?l:w,successText:""===T?n:T,errorText:""===_?c:_,type:"button",className:I,style:{},outline:R,shadow:M,rounded:A,size:Z,block:G,messageDuration:H,disabled:Q,buttonRef:null,width:j&&""!==j?j+"px":null,height:K&&""!==K?K+"px":null,animation:V})))),o.createElement("div",{className:"card shadow-dim"},o.createElement("div",{className:"card__body"},o.createElement("div",{className:"container props__container"},o.createElement("div",{className:"row",style:{fontSize:"13px"}},o.createElement("div",{className:"col col--6 bootstrap"},o.createElement("div",{className:"pt-lg-4"},o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"buttonState"),o.createElement("div",{className:"col-sm-6"},o.createElement("select",{className:"form-control form-control-sm",id:"buttonState",value:N,onChange:e=>{f(e.target.value)},disabled:te},o.createElement("option",{value:"idle"},"idle"),o.createElement("option",{value:"loading"},"loading"),o.createElement("option",{value:"success"},"success"),o.createElement("option",{value:"error"},"error")))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"idleText"),o.createElement("div",{className:"col-sm-6"},o.createElement("input",{type:"text",className:"form-control form-control-sm",id:"idleText",placeholder:"Click Me",value:S,onChange:e=>{k(e.target.value)}}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"successText"),o.createElement("div",{className:"col-sm-6"},o.createElement("input",{type:"text",className:"form-control form-control-sm",id:"successText",placeholder:"Success",value:T,onChange:e=>{F(e.target.value)}}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"shadow"),o.createElement("div",{className:"col-sm-6 align-self-end"},o.createElement("input",{type:"checkbox",id:"shadow",checked:M,onChange:e=>{B(!0===e.target.checked)},className:"z-switch"}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"outline"),o.createElement("div",{className:"col-sm-6 align-self-end"},o.createElement("input",{type:"checkbox",id:"outline",checked:R,onChange:e=>{D(!0===e.target.checked)},className:"z-switch"}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"animation"),o.createElement("div",{className:"col-sm-6 align-self-end"},o.createElement("input",{type:"checkbox",id:"animation",checked:V,onChange:e=>{W(!0===e.target.checked)},className:"z-switch"}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"className"),o.createElement("div",{className:"col-sm-6"},o.createElement("input",{type:"text",className:"form-control form-control-sm",id:"className",placeholder:"",value:I,onChange:e=>{P(e.target.value)}}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"size"),o.createElement("div",{className:"col-sm-6"},o.createElement("select",{className:"form-control form-control-sm",id:"size",value:Z,onChange:e=>{U(e.target.value)}},o.createElement("option",{value:"tiny"},"tiny"),o.createElement("option",{value:"small"},"small"),o.createElement("option",{value:"normal"},"normal"),o.createElement("option",{value:"large"},"large")))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"messageDuration"),o.createElement("div",{className:"col-sm-6"},o.createElement("input",{type:"number",className:"form-control form-control-sm",id:"messageDuration",value:H,onChange:e=>{parseInt(e.target.value)>=0&&X(e.target.value)},placeholder:"2000"}))))),o.createElement("div",{className:"col col--6 bootstrap"},o.createElement("div",{className:"pt-lg-4"},o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"color"),o.createElement("div",{className:"col-sm-6"},o.createElement("select",{className:"form-control form-control-sm",id:"color",value:y,onChange:e=>{x(e.target.value)}},o.createElement("option",{value:"primary"},"primary"),o.createElement("option",{value:"secondary"},"Secondary"),o.createElement("option",{value:"dark"},"dark"),o.createElement("option",{value:"light"},"light"),o.createElement("option",{value:"green"},"green"),o.createElement("option",{value:"red"},"red"),o.createElement("option",{value:"yellow"},"yellow"),o.createElement("option",{value:"teal"},"teal"),o.createElement("option",{value:"violet"},"violet"),o.createElement("option",{value:"blue"},"blue")))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"loadingText"),o.createElement("div",{className:"col-sm-6"},o.createElement("input",{type:"text",className:"form-control form-control-sm",id:"loadingText",placeholder:"Loading",value:w,onChange:e=>{C(e.target.value)}}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"errorText"),o.createElement("div",{className:"col-sm-6"},o.createElement("input",{type:"text",className:"form-control form-control-sm",id:"errorText",placeholder:"Error",value:_,onChange:e=>{z(e.target.value)}}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"rounded"),o.createElement("div",{className:"col-sm-6 align-self-end"},o.createElement("input",{type:"checkbox",id:"rounded",checked:A,onChange:e=>{L(!0===e.target.checked)},className:"z-switch"}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"block"),o.createElement("div",{className:"col-sm-6 align-self-end"},o.createElement("input",{type:"checkbox",id:"block",checked:G,onChange:e=>{J(!0===e.target.checked)},className:"z-switch"}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"disabled"),o.createElement("div",{className:"col-sm-6 align-self-end"},o.createElement("input",{type:"checkbox",id:"disabled",checked:Q,onChange:e=>{Y(!0===e.target.checked)},className:"z-switch"}))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"width"),o.createElement("div",{className:"col-sm-6"},o.createElement("div",{className:"input-group"},o.createElement("input",{type:"number",className:"form-control",id:"width",value:j,onChange:e=>{q(e.target.value)},placeholder:""}),o.createElement("div",{className:"input-group-prepend"},o.createElement("span",{className:"input-group-text"},"px"))))),o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"height"),o.createElement("div",{className:"col-sm-6"},o.createElement("div",{className:"input-group"},o.createElement("input",{type:"number",className:"form-control",id:"height",value:K,onChange:e=>{O(e.target.value)},placeholder:""}),o.createElement("div",{className:"input-group-prepend"},o.createElement("span",{className:"input-group-text"},"px")))))))))),o.createElement("div",{className:"card__footer text-center my-2"},o.createElement(r.Z,{buttonState:$,size:"large",idleText:"Reset All",loadingText:"Resetting...",successText:"Done!",color:"dark",rounded:!0,onClick:()=>{ee("loading"),setTimeout((()=>{f(e),x(e),k(a),C(l),F(n),z(c),P(s),U(u),B(i),L(d),D(m),J(p),X(g),Y(E),q(v),O(h),W(b),ee("success")}),1e3)}}))))};var s=a(87552),m=a(2497),i=a(51436),d=a(92814);const u=()=>o.createElement("div",{className:"editor-playground-component-wrapper"},o.createElement(m.nu,{code:"\nfunction App() {\n  const [state, setState] = useState('idle');\n\n  const onClickHandler = () => {\n    setState('loading');\n    setTimeout(() => {\n      setState('success');\n    }, 2000);\n  };\n\n  return (\n    <ReactiveButton\n      buttonState={state}\n      onClick={onClickHandler}\n      color={'primary'}\n      idleText={'Click Me'}\n      loadingText={\n        <>\n          <FontAwesomeIcon icon={faCircleNotch} spin /> Loading\n        </>\n      }\n      successText={\n        <>\n          <FontAwesomeIcon icon={faThumbsUp} /> Success\n        </>\n      }\n      errorText={\n        <>\n          <FontAwesomeIcon icon={faBomb} /> Error\n        </>\n      }\n      type={'button'}\n      className={'class1 class2'}\n      style={{\n        borderRadius: '5px',\n      }}\n      outline={false}\n      shadow={false}\n      rounded={false}\n      size={'normal'}\n      block={false}\n      messageDuration={2000}\n      disabled={false}\n      buttonRef={null}\n      width={null}\n      height={null}\n      animation={true}\n    />\n  );\n}\n  ",theme:s.Z,scope:{useState:o.useState,ReactiveButton:r.Z,Fragment:o.Fragment,FontAwesomeIcon:d.G,faCheck:i.LEp,faSpinner:i.LM3,faTimes:i.NBC,faCircleNotch:i.IJ7,faThumbsUp:i.u8Q,faBomb:i.Yme}},o.createElement("div",{className:"mb-3"},o.createElement("div",{className:"card playground__card"},o.createElement("div",{className:"card__body my-auto text-center"},o.createElement(m.IF,null),o.createElement(m.i5,null)))),o.createElement("div",{className:"card shadow-dim"},o.createElement("div",{className:"card__body editor__card__body"},o.createElement(m.uz,null))))),g={id:"playground",title:"Playground"},p=void 0,E={unversionedId:"playground",id:"playground",title:"Playground",description:"Playground for Reactive Button.",source:"@site/docs/playground.md",sourceDirName:".",slug:"/playground",permalink:"/reactive-button/docs/playground",draft:!1,tags:[],version:"current",frontMatter:{id:"playground",title:"Playground"},sidebar:"docs",previous:{title:"Usage",permalink:"/reactive-button/docs/usage"},next:{title:"Theming",permalink:"/reactive-button/docs/theming"}},v={},h=[{value:"Interactive Playground",id:"interactive-playground",level:2},{value:"Editor Playground",id:"editor-playground",level:2}],b={toc:h};function N(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Playground for Reactive Button."),(0,n.kt)("h2",{id:"interactive-playground"},"Interactive Playground"),(0,n.kt)("p",null,"Toggle or change the props to see changes."),(0,n.kt)(c,{mdxType:"InteractivePlayground"}),(0,n.kt)("h2",{id:"editor-playground"},"Editor Playground"),(0,n.kt)("p",null,"Edit code to see changes."),(0,n.kt)(u,{mdxType:"EditorPlayground"}))}N.isMDXComponent=!0}}]);