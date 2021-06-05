(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{198:function(e,n,t){"use strict";t.r(n);var r,a,o,c,i,s,l=t(7),d=t.n(l),b=t(41),j=t.n(b),m=t(38),h=t(39),u=Object(h.a)(r||(r=Object(m.a)(["\n  :root {\n    --main-color: #004aad;\n    --background-color: #ecebe4;\n    --main-button-color: #fcbf49;\n    --main-text-color: #212529;\n    --danger-color: #ff312e;\n    --warning-color: #ff8600;\n\n    --main-font: 'Montserrat', sans-serif;\n    --secondary-font: 'KoHo', sans-serif;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--main-font);\n  }\n\n  html {\n    @media (max-width: 1080px) {\n      font-size: 93.75%;\n    }\n\n    @media (max-width: 720px) {\n      font-size: 87.5%;\n    }\n  }\n\n  body {\n    background: var(--background-color);\n  }\n"]))),x=t(60),p=t(37),O=function(){return null!==localStorage.getItem("@tokenVitality")},g=h.b.main(a||(a=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  margin: auto;\n\n  width: 800px;\n  max-width: 80%;\n  height: 100vh;\n\n  img {\n    border-radius: 8px;\n    width: 60%;\n    margin-bottom: 3rem;\n\n    align-self: flex-end;\n  }\n\n  a {\n    color: var(--main-color);\n    font-size: 2rem;\n    font-weight: bold;\n\n    height: 3.5rem;\n    width: 43%;\n\n    line-height: 3rem;\n    text-align: center;\n    text-decoration: none;\n\n    background: transparent;\n    border: 3px solid var(--main-color);\n    border-radius: 8px;\n\n    align-self: flex-start;\n\n    cursor: pointer;\n\n    transition: ease-in-out 0.5s;\n\n    &:not(:last-child) {\n      margin-right: 3rem;\n    }\n\n    &:hover {\n      color: #fff;\n      background-color: var(--main-color);\n\n      &:not(:last-child) {\n        background-color: var(--main-button-color);\n        border: 3px solid var(--main-button-color);\n        color: var(--main-color);\n      }\n    }\n  }\n\n  @media (max-width: 720px) {\n    display: block;\n    height: 50vh;\n    margin-top: 10rem;\n    text-align: center;\n\n    a {\n      align-self: center;\n      width: 100%;\n      display: block;\n\n      &:not(:last-child) {\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"]))),f=t(6),v=function(){return Object(f.jsxs)(g,{children:[Object(f.jsx)("img",{src:"/img/vit_logo.svg",alt:"Logo Afya"}),Object(f.jsx)(x.b,{to:"/register",children:"Cadastro"}),Object(f.jsx)(x.b,{to:"/login",children:"Login"})]})},w=t(22),y=t(30),k=t(57),N=t.n(k),C=t(90),S=t(0),F=h.b.main(o||(o=Object(m.a)(["\n  a {\n    background-color: var(--main-color);\n    padding: 20px;\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    border-radius: 8px;\n\n    text-decoration: none;\n    color: #fff;\n\n    .react-icons {\n    vertical-align: middle;\n    color: var(--main-button-color);\n    font-size: 2rem;\n    margin-right: 8px;\n  }\n  }\n"]))),A=function(){return Object(f.jsx)(F,{children:Object(f.jsx)(S.b.Provider,{value:{className:"react-icons"},children:Object(f.jsxs)(x.b,{to:"/",children:[Object(f.jsx)(C.b,{})," Voltar para a p\xe1gina inicial"]})})})},E=t(105),P=t.n(E),B=P.a.create({baseURL:"https://desafioafya.herokuapp.com/"}),z=(P.a.create({baseURL:"https://viacep.com.br/ws/"}),h.b.main(c||(c=Object(m.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n\n  width: 1000px;\n  max-width: 80%;\n  height: 100vh;\n\n  margin: auto;\n\n  div {\n    width: 40%;\n\n    img {\n      object-fit: cover;\n      width: 150%;\n    }\n  }\n\n  form {\n    display: flex;\n    flex-wrap: wrap;\n\n    background: var(--main-color);\n    color: var(--background-color);\n\n    border-radius: 8px;\n\n    width: 40%;\n    min-width: 300px;\n    padding: 2rem;\n\n    h1 {\n      width: 100%;\n      padding-bottom: 0.2rem;\n      margin-bottom: 1.5rem;\n\n      border-bottom: 1px solid;\n    }\n\n    label {\n      width: 100%;\n      margin-bottom: 0.5rem;\n    }\n\n    input {\n      width: 100%;\n      background: var(--background-color);\n      border: none;\n      border-radius: 8px;\n      padding: 10px;\n\n      &:not(:last-child) {\n        margin-bottom: 1rem;\n      }\n    }\n\n    button {\n      width: 100%;\n      height: 4rem;\n      margin-top: 1rem;\n\n      background: var(--main-button-color);\n      color: var(--main-text-color);\n\n      font-size: 2rem;\n      font-weight: bold;\n\n      border: none;\n      border-radius: 8px;\n\n      cursor: pointer;\n\n      transition: all 0.5s;\n\n      &:hover {\n        background: #fff;\n        color: #2f2e41;\n      }\n    }\n\n    p {\n      margin: 1rem auto 0;\n\n      a {\n        color: #fff;\n      }\n    }\n  }\n\n  @media (max-width: 720px) {\n    display: block;\n    height: fit-content;\n\n    form {\n      margin-top: 10rem;\n      width: 100%;\n    }\n    img {\n      display: none;\n    }\n  }\n"])))),D=function(){var e=Object(l.useState)({}),n=Object(y.a)(e,2),t=n[0],r=n[1],a=Object(l.useState)(!1),o=Object(y.a)(a,2),c=o[0],i=o[1],s=Object(p.g)(),d=Object(l.useCallback)((function(e){e.preventDefault(),t.login&&t.password?(i(!0),B.post("sessions",t).then((function(e){localStorage.setItem("@tokenVitality",e.data.token),s.push("/dashboard")})).catch((function(e){N.a.fire({title:"Ops!",text:"Dados incorretos.",icon:"error",confirmButtonText:"Fechar"})})).finally((function(){return i(!1)}))):N.a.fire({title:"Ops!",text:"Preencha todos os campos.",icon:"error",confirmButtonText:"Fechar"})}),[t,s]);return Object(f.jsxs)(z,{children:[Object(f.jsx)(A,{}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:"/img/login_illustration.svg",alt:""})}),Object(f.jsx)("form",{onSubmit:d,children:c?"Entrando...":Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)("label",{htmlFor:"",children:"Login:"}),Object(f.jsx)("input",{type:"text",name:"login",id:"login",onChange:function(e){return r(Object(w.a)(Object(w.a)({},t),{},{login:e.target.value}))}}),Object(f.jsx)("label",{htmlFor:"",children:"Senha:"}),Object(f.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return r(Object(w.a)(Object(w.a)({},t),{},{password:e.target.value}))}}),Object(f.jsx)("button",{type:"submit",children:"Entrar"}),Object(f.jsxs)("p",{children:["N\xe3o tem uma conta? ",Object(f.jsx)(x.b,{to:"/register",children:"Cadastre-se"})," "]})]})})]})},R=h.b.main(i||(i=Object(m.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n\n\n  width: 1000px;\n  max-width: 80%;\n  height: 100vh;\n\n  margin: auto;\n\n  div {\n    width: 40%;\n    margin-right: 25px;\n\n    img {\n      width: 120%;\n\n    }\n  }\n\n  form {\n    display: flex;\n    flex-wrap: wrap;\n\n    background: var(--main-color);\n    color:var(--background-color);\n\n    border-radius: 8px;\n    min-width: 300px;\n    width: 40%;\n    padding: 2rem;\n\n    h1 {\n      width: 100%;\n      padding-bottom: 0.2rem;\n      margin-bottom: 1.5rem;\n\n      border-bottom: 1px solid;\n    }\n\n    label {\n      width: 100%;\n      margin-bottom: 0.5rem;\n    }\n\n    input {\n      width: 100%;\n      background: #fff;\n      border: none;\n      border-radius: 8px;\n      padding: 10px;\n\n      &:not(:last-child) {\n        margin-bottom: 1rem;\n      }\n    }\n\n    button {\n      width: 100%;\n      height: 4rem;\n      margin-top: 1rem;\n\n      background: var(--main-button-color);\n      color: var(--main-text-color);\n\n      font-size: 2rem;\n      font-weight: bold;\n\n      border: none;\n      border-radius: 8px;\n\n      cursor: pointer;\n\n      transition: all 0.5s;\n\n      &:hover {\n        background: #fff;\n        color: #2f2e41;\n      }\n    }\n\n    p {\n      margin: 1rem auto 0;\n\n      a {\n        color: #fff;\n      }\n    }\n  }\n\n  @media (max-width: 720px) {\n    display: block;\n    height: fit-content;\n\n    form {\n      margin-top: 10rem;\n      width: 100%;\n    }\n    img {\n      display: none;\n    }\n  }\n"]))),T=function(){var e=Object(l.useState)({}),n=Object(y.a)(e,2),t=n[0],r=n[1],a=Object(l.useState)(!1),o=Object(y.a)(a,2),c=o[0],i=o[1],s=Object(p.g)(),d=Object(l.useCallback)((function(e){e.preventDefault(),t.name&&t.login&&t.password?(i(!0),B.post("users",t).then((function(e){N.a.fire({title:"Sucesso!",text:"Sua conta foi criada com sucesso.",icon:"success",confirmButtonText:"Ir para login",confirmButtonColor:"#004AAD"}).then((function(e){return s.push("/login")}))})).catch((function(e){var n;n="User already booked"===e.response.data.message?"Nome de usu\xe1rio n\xe3o est\xe1 dispon\xedvel.":"N\xe3o foi poss\xedvel criar usu\xe1rio, tente novamente.",N.a.fire({title:"Ops!",text:n,icon:"error",confirmButtonText:"Fechar",confirmButtonColor:"#ff312e"})})).finally((function(){return i(!1)}))):N.a.fire({title:"Ops!",text:"Preencha todos os campos.",icon:"error",confirmButtonText:"Fechar"})}),[t,s]);return Object(f.jsxs)(R,{children:[Object(f.jsx)(A,{}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:"/img/register_illustration.svg",alt:""})}),Object(f.jsx)("form",{onSubmit:d,children:c?"Criando conta...":Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Cadastro"}),Object(f.jsx)("label",{htmlFor:"name",children:"Nome:"}),Object(f.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return r(Object(w.a)(Object(w.a)({},t),{},{name:e.target.value}))}}),Object(f.jsx)("label",{htmlFor:"login",children:"Login:"}),Object(f.jsx)("input",{type:"login",name:"login",id:"login",maxLength:20,onChange:function(e){return r(Object(w.a)(Object(w.a)({},t),{},{login:e.target.value}))}}),Object(f.jsx)("label",{htmlFor:"password",children:"Senha:"}),Object(f.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return r(Object(w.a)(Object(w.a)({},t),{},{password:e.target.value}))}}),Object(f.jsx)("button",{type:"submit",children:"Cadastrar"})]})})]})},L=t(136),q=function(e){var n=e.component,t=Object(L.a)(e,["component"]);return Object(f.jsx)(p.b,Object(w.a)(Object(w.a)({},t),{},{render:function(e){return O()?Object(f.jsx)(n,Object(w.a)({},e)):Object(f.jsx)(p.a,{to:"/login"})}}))},M=h.b.main(s||(s=Object(m.a)(["\n\n h1 {\n   margin-top: 100px;\n   margin-right: 50px;\n   margin-bottom: 1rem;\n   text-align: right;\n   font-weight: lighter;\n   padding: 1rem;\n\n }\n\n.content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: auto;\n  width: 90vw;\n  gap: 2rem 2rem;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0 auto;\n\n  img {\n    flex: 2;\n   // width: 40%;\n    min-width: 300px;\n  }\n\n  p {\n    flex: 2;\n\n    min-width: 300px;\n    text-align: justify;\n  }\n}\n\n@media (max-width: 720px) {\n  .content {\n    width: 90%;\n    margin: 0 auto;\n\n    img {\n      width: 100%;\n    }\n    p {\n      width: 100%;\n    }\n  }\n}\n"]))),I=t(31),V=t(34),_=t(237),H=t(229),G=t(238),U=t(231),J=t(233),K=t(236),W=t(235),Z=t(234),Q=t(239),X=t(240),Y=t(130),$=t(129),ee=Object(H.a)((function(e){return Object(G.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#004AAD"},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:300,flexShrink:0},drawerPaper:{width:300,color:"#ecebe4",backgroundColor:"#004AAD"},drawerHeader:Object(w.a)(Object(w.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"space-between"}),drawerList:{backgroundColor:"#004AAD",display:"flex",height:400,flexDirection:"column",justifyContent:"center",gap:20},drawerListItems:{color:"#ECEBE4",fontFamily:"Roboto"},logoutItem:{color:"#F4E04D"},backdrop:{position:"absolute",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"#000000a6"}})}));function ne(e){var n=ee(),t=Object(l.useState)(!1),r=Object(y.a)(t,2),a=r[0],o=r[1],c=Object(p.g)();return Object(f.jsxs)("div",{children:[Object(f.jsx)(U.a,{position:"fixed",className:n.appBar,children:Object(f.jsxs)(J.a,{children:[Object(f.jsx)(Z.a,{color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},edge:"start",children:Object(f.jsx)(S.b.Provider,{value:{color:"#fff",size:"35px"},children:Object(f.jsx)(C.a,{})})}),e.title]})}),Object(f.jsxs)(_.a,{className:n.drawer,classes:{paper:n.drawerPaper},variant:"persistent",anchor:"left",open:a,children:[Object(f.jsxs)("div",{className:n.drawerHeader,children:[Object(f.jsx)("img",{src:"./img/vit_logo.svg",alt:"Vitality logo",width:"100px"}),Object(f.jsx)(Z.a,{onClick:function(){o(!1)},children:Object(f.jsx)(S.b.Provider,{value:{color:"#fff",size:"35px"},children:Object(f.jsx)($.a,{})})})]}),Object(f.jsx)(W.a,{}),Object(f.jsx)(K.a,{className:n.drawerList,children:[{title:"Dashboard",url:"/dashboard"},{title:"Clientes",url:"/clients"},{title:"Especialistas",url:"/specialists"},{title:"Atendimentos",url:"/appointments"},{title:"Prontu\xe1rios",url:"/charts"}].map((function(e,t){return Object(f.jsx)(x.b,{to:e.url,children:Object(f.jsx)(Q.a,{button:!0,children:Object(f.jsx)(X.a,{primary:e.title,className:n.drawerListItems})})},e.title)}))}),Object(f.jsx)(W.a,{}),Object(f.jsx)(K.a,{children:Object(f.jsxs)(Q.a,{button:!0,children:[Object(f.jsx)(X.a,{primary:"Logout",className:n.logoutItem,onClick:function(){localStorage.clear(),c.push("/login")}}),Object(f.jsx)(S.b.Provider,{value:{color:"#F4E04D",size:"2rem"},children:Object(f.jsx)(Y.a,{})})]})})]}),Object(f.jsx)("div",{className:Object(V.a)("",Object(I.a)({},n.backdrop,a))})]})}var te,re,ae,oe,ce=function(){return Object(f.jsxs)(M,{children:[Object(f.jsx)(ne,{title:"Dashboard"}),Object(f.jsx)("h1",{children:"Welcome, Fulana!"}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("img",{src:"./img/medcare.svg",alt:""}),Object(f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis sed lorem eget elementum. Sed fringilla dui porttitor odio convallis semper. Donec non commodo nunc. Nam aliquam placerat orci in bibendum. Pellentesque pharetra volutpat rhoncus. Sed suscipit dolor turpis, ut convallis orci dapibus sed. Morbi ornare purus mauris, sit amet bibendum elit mattis et. Phasellus laoreet felis sit amet dapibus vulputate. Nam aliquet tincidunt ullamcorper."})]})]})},ie=t(21),se=t(79),le=t.n(se),de=h.b.div(te||(te=Object(m.a)(["\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n\n  background-color: var(--background-color);\n  background-color: rgba(0, 0, 0, 0.4);\n\n  &.show {\n    display: block;\n  }\n\n  button {\n    background-color: var(--main-button-color);\n    border: 0;\n    border-radius: 8px;\n    color: var(--main-color);\n    font-size: 1.2rem;\n    font-weight: bold;\n    letter-spacing: 1px;\n    padding: 1rem;\n\n    transition: 0.2s ease-in-out;\n\n    &:hover {\n      box-shadow: 5px 6px 5px 0px rgba(0,0,0,0.49);\n    }\n  }\n\n  .modal-content {\n\n    background-color: var(--main-color);\n    color: var(--main-button-color);\n    margin: 15% auto;\n    padding: 20px;\n    border: 0;\n    box-shadow: 5px 6px 5px 0px rgba(0,0,0,0.49);\n    width: 80%;\n\n    .modal-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n\n\n\n      .close {\n        color: var(--background-color);\n        float: right;\n        font-size: 3rem;\n        font-weight: bold;\n\n        &:hover,\n        &:focus {\n          color: black;\n          text-decoration: none;\n          cursor: pointer;\n        }\n      }\n    }\n\n    label {\n      font-weight: bold;\n      letter-spacing: 0.5px;\n\n    }\n  }\n"]))),be=function(e){var n=e.address,t=e.setAddress,r=e.isLoading;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"cep",children:"CEP:"}),Object(f.jsx)(le.a,{mask:"99999-999",className:"form-control",type:"text",name:"cep",id:"cep",disabled:r,onChange:function(e){return t(Object(w.a)(Object(w.a)({},n),{},{cep:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"form-group col-md-8",children:[Object(f.jsx)("label",{htmlFor:"street",children:"Logradouro:"}),Object(f.jsx)("input",{className:"form-control",type:"text",name:"street",id:"street",disabled:r,onChange:function(e){return t(Object(w.a)(Object(w.a)({},n),{},{street:e.target.value}))}})]})]}),Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"number",children:"N\xfamero:"}),Object(f.jsx)("input",{className:"form-control",type:"number",name:"number",id:"number",min:"1",disabled:r,onChange:function(e){return t(Object(w.a)(Object(w.a)({},n),{},{number:Number(e.target.value)}))}})]}),Object(f.jsxs)("div",{className:"form-group col-md-8",children:[Object(f.jsx)("label",{htmlFor:"neighborhood",children:"Bairro:"}),Object(f.jsx)("input",{className:"form-control",type:"text",name:"neighborhood",id:"neighborhood",disabled:r,onChange:function(e){return t(Object(w.a)(Object(w.a)({},n),{},{neighborhood:e.target.value}))}})]})]}),Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsxs)("div",{className:"form-group col-md-8",children:[Object(f.jsx)("label",{htmlFor:"city",children:"Cidade:"}),Object(f.jsx)("input",{className:"form-control",type:"text",name:"city",id:"city",disabled:r,onChange:function(e){return t(Object(w.a)(Object(w.a)({},n),{},{city:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"state",children:"Estado:"}),Object(f.jsxs)("select",{className:"form-control",name:"state",defaultValue:"",disabled:r,onChange:function(e){return t(Object(w.a)(Object(w.a)({},n),{},{state:e.target.value}))},children:[Object(f.jsx)("option",{value:"",disabled:!0}),Object(f.jsx)("option",{value:"AC",children:"AC"}),Object(f.jsx)("option",{value:"AL",children:"AL"}),Object(f.jsx)("option",{value:"AP",children:"AP"}),Object(f.jsx)("option",{value:"AM",children:"AM"}),Object(f.jsx)("option",{value:"BA",children:"BA"}),Object(f.jsx)("option",{value:"CE",children:"CE"}),Object(f.jsx)("option",{value:"DF",children:"DF"}),Object(f.jsx)("option",{value:"ES",children:"ES"}),Object(f.jsx)("option",{value:"GO",children:"GO"}),Object(f.jsx)("option",{value:"MA",children:"MA"}),Object(f.jsx)("option",{value:"MT",children:"MT"}),Object(f.jsx)("option",{value:"MS",children:"MS"}),Object(f.jsx)("option",{value:"MG",children:"MG"}),Object(f.jsx)("option",{value:"PA",children:"PA"}),Object(f.jsx)("option",{value:"PB",children:"PB"}),Object(f.jsx)("option",{value:"PR",children:"PR"}),Object(f.jsx)("option",{value:"PE",children:"PE"}),Object(f.jsx)("option",{value:"PI",children:"PI"}),Object(f.jsx)("option",{value:"RJ",children:"RJ"}),Object(f.jsx)("option",{value:"RN",children:"RN"}),Object(f.jsx)("option",{value:"RS",children:"RS"}),Object(f.jsx)("option",{value:"RO",children:"RO"}),Object(f.jsx)("option",{value:"RR",children:"RR"}),Object(f.jsx)("option",{value:"SC",children:"SC"}),Object(f.jsx)("option",{value:"SP",children:"SP"}),Object(f.jsx)("option",{value:"SE",children:"SE"}),Object(f.jsx)("option",{value:"TO",children:"TO"})]})]})]})]})},je=function(e){var n=e.state,t=e.setState,r=e.clients,a=e.setClients,o=Object(l.useState)({}),c=Object(y.a)(o,2),i=c[0],s=c[1],d=Object(l.useState)({}),b=Object(y.a)(d,2),j=b[0],m=b[1],h=Object(l.useState)(!1),u=Object(y.a)(h,2),x=u[0],p=u[1];i.address=Object(w.a)({},j);var O=Object(l.useCallback)((function(e){var n=e.currentTarget;e.preventDefault(),n.checkValidity()?(p(!0),B.post("clients",i,{headers:{authorization:"Bearer ".concat(localStorage.getItem("@tokenVitality"))}}).then((function(e){a([i].concat(Object(ie.a)(r))),N.a.fire({title:"Sucesso!",text:"Cliente cadastrado com sucesso.",icon:"success",confirmButtonText:"Fechar"})})).catch((function(e){N.a.fire({title:"Ops!",text:"Dados incorretos.",icon:"error",confirmButtonText:"Fechar"})})).finally((function(){return p(!1)}))):N.a.fire({title:"Ops!",text:"Verifique se todos os campos est\xe3o preenchidos corretamente.",icon:"error",confirmButtonText:"Fechar"})}),[i,r,a]);return Object(f.jsx)(de,{className:n?"show":"",children:Object(f.jsxs)("form",{className:"modal-content",onSubmit:O,noValidate:!0,children:[Object(f.jsxs)("div",{className:"modal-header",children:[Object(f.jsx)("h4",{children:"Cadastro de cliente"}),Object(f.jsx)("span",{className:"close",onClick:function(){t(!1)},children:"\xd7"})]}),Object(f.jsxs)("div",{className:"modal-body",children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"name",children:"Nome:"}),Object(f.jsx)("input",{className:"form-control",type:"text",name:"name",id:"name",disabled:x,required:!0,onChange:function(e){return s(Object(w.a)(Object(w.a)({},i),{},{name:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"cpf",children:"CPF:"}),Object(f.jsx)(le.a,{mask:"999.999.999-99",className:"form-control",type:"text",name:"cpf",id:"cpf",disabled:x,required:!0,onChange:function(e){return s(Object(w.a)(Object(w.a)({},i),{},{cpf:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"phone",children:"Telefone:"}),Object(f.jsx)(le.a,{mask:"(99) 9999-9999",className:"form-control",type:"text",name:"phone",id:"phone",disabled:x,required:!0,onChange:function(e){return s(Object(w.a)(Object(w.a)({},i),{},{phone:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"cellphone",children:"Celular:"}),Object(f.jsx)(le.a,{mask:"(99) 99999-9999",className:"form-control",type:"text",name:"cellphone",id:"cellphone",disabled:x,required:!0,onChange:function(e){return s(Object(w.a)(Object(w.a)({},i),{},{cellphone:e.target.value}))}})]})]}),Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsxs)("div",{className:"form-group col-md-8",children:[Object(f.jsx)("label",{htmlFor:"email",children:"E-mail:"}),Object(f.jsx)("input",{className:"form-control",type:"email",name:"email",id:"email",disabled:x,required:!0,onChange:function(e){return s(Object(w.a)(Object(w.a)({},i),{},{email:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"bloodType",children:"Tipo sangu\xedneo:"}),Object(f.jsxs)("select",{className:"form-control",name:"bloodType",id:"bloodType",disabled:x,defaultValue:"",required:!0,onChange:function(e){return s(Object(w.a)(Object(w.a)({},i),{},{blood_type:e.target.value}))},children:[Object(f.jsx)("option",{value:"",disabled:!0}),Object(f.jsx)("option",{value:"A+",children:"A+"}),Object(f.jsx)("option",{value:"A-",children:"A-"}),Object(f.jsx)("option",{value:"B+",children:"B+"}),Object(f.jsx)("option",{value:"B-",children:"B-"}),Object(f.jsx)("option",{value:"O+",children:"O+"}),Object(f.jsx)("option",{value:"O-",children:"O-"}),Object(f.jsx)("option",{value:"AB+",children:"AB+"}),Object(f.jsx)("option",{value:"AB-",children:"AB-"})]})]})]}),Object(f.jsx)(be,{address:j,setAddress:m,isLoading:x})]}),Object(f.jsx)("div",{className:"modal-footer",children:Object(f.jsx)("button",{type:"submit",disabled:x,children:x?"Salvando...":"Salvar novo cliente"})})]})})},me=t(241),he=h.b.div(re||(re=Object(m.a)(["\n  margin: 0 auto;\n  margin-top: 50px;\n  height: 50vh;\n  overflow: auto;\n  width: 90%;\n\n  border-radius: 8px;\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n\n  table {\n    margin: 0 auto;\n    height: 300px;\n\n    thead {\n      border-radius: 8px;\n      background-color: var(--main-color);\n      color: var(--background-color);\n      letter-spacing: 1px;\n    }\n  }\n"]))),ue=function(e){var n=e.clients,t=e.setClients,r=Object(l.useState)(!0),a=Object(y.a)(r,2),o=a[0],c=a[1];return Object(l.useEffect)((function(){B.get("clients",{headers:{authorization:"Bearer ".concat(localStorage.getItem("@tokenVitality"))}}).then((function(e){t(e.data)})).catch((function(e){console.log(e),N.a.fire({title:"Ops!",text:"Houve um erro ao carregar seus dados.",icon:"error",confirmButtonText:"Atualizar"}).then((function(e){return window.location.reload()}))})).finally((function(){return c(!1)}))}),[]),Object(f.jsx)(he,{children:Object(f.jsxs)(me.a,{striped:!0,bordered:!0,hover:!0,responsive:"lg",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Cliente"}),Object(f.jsx)("th",{children:"E-mail"}),Object(f.jsx)("th",{children:"Celular"}),Object(f.jsx)("th",{children:"Telefone"})]})}),Object(f.jsx)("tbody",{children:o?"Carregando...":Object.keys(n[0]).length?n.map((function(e,n){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.email}),Object(f.jsx)("td",{children:e.cellphone}),Object(f.jsx)("td",{children:e.phone})]},n)})):"Nenhum cliente cadastrado."})]})})},xe=t(106),pe=t.n(xe),Oe=t(132),ge=function(e){var n=e.endpoint,t=e.params;return B.get("".concat(n,"?name=").concat(t),{headers:{authorization:"Bearer ".concat(localStorage.getItem("@tokenVitality"))}}).then((function(e){return e}))},fe=h.b.form(ae||(ae=Object(m.a)(['\n  align-items: center;\n  background-color: var(--main-color);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0 auto;\n  margin-top: 50px;\n\n  border-radius: 8px;\n  min-width: 300px;\n  padding: 1rem;\n  width: 70vw;\n\n  label {\n    color: var(--background-color);\n    font-size: 1.2rem;\n    letter-spacing: 1px;\n    margin-right: 1px;\n    flex: 1;\n  }\n\n  input[type="text"] {\n    border: 0;\n    border-radius: 4px;\n    padding: 5px;\n    flex: 2;\n\n  }\n\n  button {\n    background-color: var(--main-button-color);\n    border: 0;\n    border-radius: 1.5rem;\n\n    color: var(--main-color);\n    font-weight: bold;\n    letter-spacing: 1px;\n\n    margin-left: -12px;\n\n    transition: ease-in-out 0.4s;\n    padding: 8px;\n    flex: 1;\n\n    &:hover {\n      filter: brightness(1.5);\n    }\n  }\n\n  @media (max-width: 360px) {\n    width: 80%;\n    button {\n      margin-top: 10px;\n      margin-left: 0;\n\n      flex: 1;\n    }\n\n    input {\n      flex: 1;\n    }\n  }\n\n  @media (min-width: 360px) and (max-width: 720px) {\n    width: 80%;\n    button {\n      margin: 10px;\n\n      flex: 1;\n    }\n\n    input {\n      flex: 1;\n    }\n  }\n'])));function ve(e){var n=e.title,t=e.endpoint,r=e.setResult,a=Object(l.useState)(""),o=Object(y.a)(a,2),c=o[0],i=o[1],s=Object(l.useCallback)(function(){var e=Object(Oe.a)(pe.a.mark((function e(n){var a;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,ge({endpoint:t,params:c});case 3:a=e.sent,r(a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,c,r]);return Object(f.jsxs)(fe,{onSubmit:s,children:[Object(f.jsx)("label",{htmlFor:"header-search",children:n}),Object(f.jsx)("input",{type:"text",id:"header-search",placeholder:"Digite aqui...",name:"search",onChange:function(e){return i(e.target.value)}}),Object(f.jsx)("button",{type:"submit",children:"Pesquisar"})]})}var we,ye,ke,Ne=h.b.div(oe||(oe=Object(m.a)(["\n  main {\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n\n    .register-button {\n      margin: 1rem;\n      padding: 1rem;\n      width: 30vw;\n\n      background-color: var(--main-color);\n      border-radius: 8px;\n      border: 0;\n      box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.49);\n\n      color: var(--background-color);\n      font-size: 1.2rem;\n      font-weight: bold;\n      letter-spacing: 1px;\n\n      &:hover {\n        filter: brightness(1.2);\n      }\n\n      @media (max-width: 720px) {\n        width: fit-content;\n      }\n    }\n  }\n"]))),Ce=function(){var e=Object(l.useState)(!1),n=Object(y.a)(e,2),t=n[0],r=n[1],a=Object(l.useState)([{}]),o=Object(y.a)(a,2),c=o[0],i=o[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(Ne,{children:[Object(f.jsx)(ne,{title:"Clientes"}),Object(f.jsx)("main",{children:Object(f.jsx)("button",{className:"register-button",type:"button",onClick:function(){r(!0)},children:"Cadastrar cliente"})}),Object(f.jsx)(ve,{title:"Pesquisar Clientes:",endpoint:"clients",setResult:i}),Object(f.jsx)(ue,{clients:c,setClients:i})]}),Object(f.jsx)(je,{state:t,setState:r,clients:c,setClients:i})]})},Se=h.b.div(we||(we=Object(m.a)(["\n  main {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 2;\n    flex-wrap: wrap;\n    gap: 2rem;\n    justify-content: center;\n    margin: 0 auto;\n    margin-top: 100px;\n\n    width: 70vw;;\n\n    .register-button {\n      background-color: var(--main-button-color);\n      border-radius: 8px;\n      border: 0;\n      box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.49);\n      padding: 1rem;\n\n      color: var(--main-color);\n      font-size: 1.2rem;\n      font-weight: bold;\n      letter-spacing: 1px;\n\n      flex: 1;\n      margin-left: 2rem;\n\n      &:hover {\n        filter: brightness(1.2);\n      }\n    }\n    .special-button {\n      background-color: var(--main-color);\n      border-radius: 8px;\n      border: 0;\n      box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.49);\n      padding: 1rem;\n\n      color: var(--background-color);\n      font-size: 1.2rem;\n      font-weight: bold;\n      letter-spacing: 1px;\n\n      flex: 1;\n      margin-right: 2rem;\n\n      &:hover {\n        filter: brightness(1.2);\n      }\n    }\n\n    @media (max-width: 720px) {\n      .special-button {\n        margin: 0 auto;\n      }\n\n      .register-button {\n        margin: 0 auto;\n      }\n    }\n  }\n"]))),Fe=function(e){var n=e.state,t=e.setState,r=Object(l.useState)({}),a=Object(y.a)(r,2),o=a[0],c=a[1],i=Object(l.useState)({}),s=Object(y.a)(i,2),d=s[0],b=s[1],j=Object(l.useState)(!1),m=Object(y.a)(j,2),h=m[0];m[1];return Object(f.jsx)(de,{className:n?"show":"",children:Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsxs)("div",{className:"modal-header",children:[Object(f.jsx)("h4",{children:"Cadastro de Especialista"}),Object(f.jsx)("span",{className:"close",onClick:function(){t(!1)},children:"\xd7"})]}),Object(f.jsx)("div",{className:"modal-body",children:Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"name",children:"Nome:"}),Object(f.jsx)("input",{className:"form-control",type:"text",name:"name",id:"name",disabled:h,onChange:function(e){return c(Object(w.a)(Object(w.a)({},o),{},{name:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"register",children:"Registro:"}),Object(f.jsx)("input",{className:"form-control",type:"text",name:"register",id:"register",disabled:h,onChange:function(e){return c(Object(w.a)(Object(w.a)({},o),{},{register:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"phone",children:"Telefone:"}),Object(f.jsx)("input",{className:"form-control",type:"text",name:"phone",id:"phone",disabled:h,onChange:function(e){return c(Object(w.a)(Object(w.a)({},o),{},{phone:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"cellphone",children:"Celular:"}),Object(f.jsx)("input",{className:"form-control",type:"text",name:"cellphone",id:"cellphone",disabled:h,onChange:function(e){return c(Object(w.a)(Object(w.a)({},o),{},{cellphone:e.target.value}))}})]})]}),Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsxs)("div",{className:"form-group col-md-8",children:[Object(f.jsx)("label",{htmlFor:"email",children:"E-mail:"}),Object(f.jsx)("input",{className:"form-control",type:"email",name:"email",id:"email",disabled:h,onChange:function(e){return c(Object(w.a)(Object(w.a)({},o),{},{email:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"form-group col-md-4",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Especialidade"}),Object(f.jsx)("input",{className:"form-control",type:"specialtie",name:"specialtie",id:"specialtie",disabled:h,onChange:function(e){return c(Object(w.a)(Object(w.a)({},o),{},{specialtie:e.target.value}))}})]})]}),Object(f.jsx)(be,{address:d,setAddress:b,isLoading:h})]})}),Object(f.jsx)("div",{className:"modal-footer",children:Object(f.jsx)("button",{type:"button",children:h?"Salvando...":"Salvar novo Especialista"})})]})})},Ae=function(e){var n=e.state,t=e.setState,r=Object(l.useState)({}),a=Object(y.a)(r,2),o=a[0],c=a[1];return Object(f.jsx)(de,{className:n?"show":"",children:Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsxs)("div",{className:"modal-header",children:[Object(f.jsx)("h4",{children:"Cadastro de Especialidade"}),Object(f.jsx)("span",{className:"close",onClick:function(){t(!1)},children:"\xd7"})]}),Object(f.jsx)("div",{className:"modal-body",children:Object(f.jsx)("form",{children:Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"name",children:"Nome:"}),Object(f.jsx)("input",{className:"form-control",type:"text",name:"name",id:"name",onChange:function(e){return c(Object(w.a)(Object(w.a)({},o),{},{name:e.target.value}))}})]})})}),Object(f.jsx)("div",{className:"modal-footer",children:Object(f.jsx)("button",{type:"button",children:"Salvar nova Especialidade"})})]})})},Ee=h.b.div(ye||(ye=Object(m.a)(["\n  margin: 0 auto;\n  margin-top: 50px;\n  height: 50vh;\n  width: 90%;\n\n  border-radius: 8px;\n  overflow: auto;\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n\n  table {\n    height: 300px;\n    margin: 0 auto;\n\n    thead {\n      background-color: var(--main-color);\n      border-radius: 8px;\n      color: var(--background-color);\n      letter-spacing: 1px;\n    }\n  }\n"]))),Pe=function(){return Object(f.jsx)(Ee,{children:Object(f.jsxs)(me.a,{striped:!0,bordered:!0,hover:!0,responsive:"lg",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Especialista"}),Object(f.jsx)("th",{children:"Especialidade"}),Object(f.jsx)("th",{children:"Registro"}),Object(f.jsx)("th",{children:"E-mail"}),Object(f.jsx)("th",{children:"Celular"}),Object(f.jsx)("th",{children:"Telefone"})]})}),Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Naruto Uzumaki"}),Object(f.jsx)("td",{children:"Oftalmologista"}),Object(f.jsx)("td",{children:"12343453"}),Object(f.jsx)("td",{children:"naruto@gmail.com"}),Object(f.jsx)("td",{children:"(21) 99990000"}),Object(f.jsx)("td",{children:"(21)22223333"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Sasuke Uchiha"}),Object(f.jsx)("td",{children:"Oftalmologista"}),Object(f.jsx)("td",{children:"12343453"}),Object(f.jsx)("td",{children:"uchihasasuke@gmail.com"}),Object(f.jsx)("td",{children:"(21) 99990000"}),Object(f.jsx)("td",{children:"(21)22223333"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Honda Tohru"}),Object(f.jsx)("td",{children:"Psiquiatria"}),Object(f.jsx)("td",{children:"12343453"}),Object(f.jsx)("td",{children:"tohru@gmail.com"}),Object(f.jsx)("td",{children:"(21) 99990000"}),Object(f.jsx)("td",{children:"(21)22223333"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Kyo Sohma"}),Object(f.jsx)("td",{children:"Cardiologista"}),Object(f.jsx)("td",{children:"12343453"}),Object(f.jsx)("td",{children:"kyonkyon@gmail.com"}),Object(f.jsx)("td",{children:"(21) 99990000"}),Object(f.jsx)("td",{children:"(21)22223333"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Momiji Sohma"}),Object(f.jsx)("td",{children:"Dermatologista"}),Object(f.jsx)("td",{children:"12343453"}),Object(f.jsx)("td",{children:"momiji@gmail.com"}),Object(f.jsx)("td",{children:"(21) 99990000"}),Object(f.jsx)("td",{children:"(21)22223333"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Morticia Addams"}),Object(f.jsx)("td",{children:"Neurologista"}),Object(f.jsx)("td",{children:"12343453"}),Object(f.jsx)("td",{children:"mortaddams@gmail.com"}),Object(f.jsx)("td",{children:"(21) 99990000"}),Object(f.jsx)("td",{children:"(21)22223333"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Gomez Addams"}),Object(f.jsx)("td",{children:"Oftalmologista"}),Object(f.jsx)("td",{children:"12343453"}),Object(f.jsx)("td",{children:"mortaddams@gmail.com"}),Object(f.jsx)("td",{children:"(21) 99990000"}),Object(f.jsx)("td",{children:"(21)22223333"})]})]})]})})},Be=function(){var e=Object(l.useState)(""),n=Object(y.a)(e,2),t=(n[0],n[1]),r=Object(l.useState)(!1),a=Object(y.a)(r,2),o=a[0],c=a[1],i=Object(l.useState)(!1),s=Object(y.a)(i,2),d=s[0],b=s[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(Se,{children:[Object(f.jsx)(ne,{title:"Especialistas"}),Object(f.jsxs)("main",{children:[Object(f.jsx)("button",{className:"register-button",type:"button",onClick:function(){c(!0)},children:"Cadastrar Especialista"}),Object(f.jsx)("button",{className:"special-button",type:"button",onClick:function(){b(!0)},children:"Cadastrar Especialidade"})]}),Object(f.jsx)(ve,{title:"Pesquisar especialistas:",endpoint:"specialists",setResult:t}),Object(f.jsx)(Pe,{})]}),Object(f.jsx)(Fe,{state:o,setState:c}),Object(f.jsx)(Ae,{state:d,setState:b})]})},ze=function(){return Object(f.jsx)(ne,{title:"Prontu\xe1rios"})},De=t(133),Re=t.n(De),Te=h.b.main(ke||(ke=Object(m.a)(["\n  margin: 0 auto;\n  margin-top: 100px;\n  width: 80vw;\n  height: calc(100vh - 100px);\n  overflow: auto;\n"]))),Le=t(135),qe=t(107),Me=new Date(2021,2,28),Ie=function(){return Object(qe.a)(Le),Object(qe.b)(navigator.language),Object(f.jsx)(Te,{children:Object(f.jsx)(Re.a,{timeZone:"South_America/Sao_Paulo",defaultCurrentView:"week",defaultCurrentDate:Me,startDayHour:8})})},Ve=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(ne,{title:"Atendimentos"}),Object(f.jsx)(Ie,{})]})},_e=function(){return Object(f.jsx)(x.a,{children:Object(f.jsxs)(p.d,{children:[Object(f.jsx)(p.b,{path:"/",exact:!0,component:v}),Object(f.jsx)(p.b,{path:"/register",component:T}),Object(f.jsx)(p.b,{path:"/login",children:O()?Object(f.jsx)(p.a,{to:"/dashboard"}):Object(f.jsx)(D,{})}),Object(f.jsx)(q,{path:"/dashboard",component:ce}),Object(f.jsx)(q,{path:"/clients",component:Ce}),Object(f.jsx)(q,{path:"/specialists",component:Be}),Object(f.jsx)(q,{path:"/charts",component:ze}),Object(f.jsx)(q,{path:"/appointments",component:Ve})]})})},He=(t(195),t(196),function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u,{}),Object(f.jsx)(_e,{})]})});j.a.render(Object(f.jsx)(d.a.StrictMode,{children:Object(f.jsx)(He,{})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.1fcf257b.chunk.js.map