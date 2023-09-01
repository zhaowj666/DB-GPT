(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{72431:function(){},91909:function(e,t,r){Promise.resolve().then(r.bind(r,55515))},57931:function(e,t,r){"use strict";r.d(t,{ZP:function(){return d},Cg:function(){return o}});var n=r(9268),l=r(11196),i=r(89749),s=r(86006),a=r(56008);let[o,c]=function(){let e=s.createContext(void 0);return[function(){let t=s.useContext(e);if(void 0===t)throw Error("useCtx must be inside a Provider with a value");return t},e.Provider]}();var d=e=>{let{children:t}=e,r=(0,a.useSearchParams)(),o=r.get("scene"),[d,u]=s.useState(!1),[f,h]=s.useState("chat_dashboard"!==o),{run:x,data:m,refresh:j}=(0,l.Z)(async()=>await (0,i.Tk)("/v1/chat/dialogue/list"),{manual:!0});return(0,n.jsx)(c,{value:{isContract:d,isMenuExpand:f,dialogueList:m,setIsContract:u,setIsMenuExpand:h,queryDialogueList:x,refreshDialogList:j},children:t})}},55515:function(e,t,r){"use strict";let n,l;r.r(t),r.d(t,{default:function(){return X}});var i=r(9268);r(97402),r(23517);var s=r(86006),a=r(56008),o=r(35846),c=r.n(o),d=r(30741),u=r(78635),f=r(90545),h=r(53113),x=r(18818),m=r(4882),j=r(70092),p=r(64579),v=r(22046),g=r(53047),Z=r(62921),b=r(35891),y=r(40020),w=r(11515),N=r(84892),k=r(98703),C=r(57931),S=r(66664),B=r(89749),P=r(76394),_=r.n(P),E=r(8683),z=r.n(E),D=r(601),L=r(15473),O=r(84961),F=()=>{var e;let t=(0,a.usePathname)(),r=(0,a.useSearchParams)(),n=r.get("id"),l=(0,a.useRouter)(),[o,P]=(0,s.useState)("/LOGO_1.png"),{dialogueList:E,queryDialogueList:F,refreshDialogList:T,isMenuExpand:H,setIsMenuExpand:I}=(0,C.Cg)(),{mode:A,setMode:J}=(0,u.tv)(),R=(0,s.useMemo)(()=>[{label:"Data Source",route:"/database",icon:(0,i.jsx)(L.Z,{fontSize:"small"}),tooltip:"Database",active:"/database"===t},{label:"Knowledge Space",route:"/datastores",icon:(0,i.jsx)(y.Z,{fontSize:"small"}),tooltip:"Knowledge",active:"/datastores"===t}],[t]);function G(){"light"===A?J("dark"):J("light")}return(0,s.useEffect)(()=>{"light"===A?P("/LOGO_1.png"):P("/WHITE_LOGO.png")},[A]),(0,s.useEffect)(()=>{(async()=>{await F()})()},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("nav",{className:z()("grid max-h-screen h-full max-md:hidden"),children:(0,i.jsx)(f.Z,{className:"flex flex-col border-r border-divider max-h-screen sticky left-0 top-0 overflow-hidden",children:H?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.Z,{className:"p-2 gap-2 flex flex-row justify-between items-center",children:(0,i.jsx)("div",{className:"flex items-center gap-3",children:(0,i.jsx)(_(),{src:o,alt:"DB-GPT",width:633,height:157,className:"w-full max-w-full",unoptimized:!0})})}),(0,i.jsx)(f.Z,{className:"px-2",children:(0,i.jsx)(c(),{href:"/",children:(0,i.jsx)(h.Z,{color:"primary",className:"w-full bg-gradient-to-r from-[#31afff] to-[#1677ff] dark:bg-gradient-to-r dark:from-[#6a6a6a] dark:to-[#80868f]",style:{color:"#fff"},children:"+ New Chat"})})}),(0,i.jsx)(f.Z,{className:"p-2 hidden xs:block sm:inline-block max-h-full overflow-auto",children:(0,i.jsx)(x.Z,{size:"sm",sx:{"--ListItem-radius":"8px"},children:(0,i.jsx)(m.Z,{nested:!0,children:(0,i.jsx)(x.Z,{size:"sm","aria-labelledby":"nav-list-browse",sx:{"& .JoyListItemButton-root":{p:"8px"},gap:"4px"},children:null==E?void 0:null===(e=E.data)||void 0===e?void 0:e.map(e=>{let s=("/chat"===t||"/chat/"===t)&&n===e.conv_uid;return(0,i.jsx)(m.Z,{children:(0,i.jsx)(j.Z,{selected:s,variant:s?"soft":"plain",sx:{"&:hover .del-btn":{visibility:"visible"}},children:(0,i.jsx)(p.Z,{children:(0,i.jsxs)(c(),{href:"/chat?id=".concat(e.conv_uid,"&scene=").concat(null==e?void 0:e.chat_mode),className:"flex items-center justify-between",children:[(0,i.jsxs)(v.ZP,{fontSize:14,noWrap:!0,children:[(0,i.jsx)(k.Z,{style:{marginRight:"0.5rem"}}),(null==e?void 0:e.user_name)||(null==e?void 0:e.user_input)||"undefined"]}),(0,i.jsx)(g.ZP,{color:"neutral",variant:"plain",size:"sm",onClick:n=>{n.preventDefault(),n.stopPropagation(),d.Z.confirm({title:"Delete Chat",content:"Are you sure delete this chat?",width:"276px",centered:!0,async onOk(){await (0,B.Kw)("/v1/chat/dialogue/delete?con_uid=".concat(e.conv_uid)),await T(),"/chat"===t&&r.get("id")===e.conv_uid&&l.push("/")}})},className:"del-btn invisible",children:(0,i.jsx)(S.Z,{})})]})})})},e.conv_uid)})})})})}),(0,i.jsx)("div",{className:"flex flex-col justify-end flex-1",children:(0,i.jsx)(f.Z,{className:"p-2 pt-3 pb-6 border-t border-divider xs:block sticky bottom-0 z-100",children:(0,i.jsxs)(x.Z,{size:"sm",sx:{"--ListItem-radius":"8px"},children:[(0,i.jsx)(m.Z,{nested:!0,children:(0,i.jsx)(x.Z,{size:"sm","aria-labelledby":"nav-list-browse",sx:{"& .JoyListItemButton-root":{p:"8px"}},children:R.map(e=>(0,i.jsx)(c(),{href:e.route,children:(0,i.jsx)(m.Z,{children:(0,i.jsxs)(j.Z,{color:"neutral",sx:{marginBottom:1,height:"2.5rem"},selected:e.active,variant:e.active?"soft":"plain",children:[(0,i.jsx)(Z.Z,{sx:{color:e.active?"inherit":"neutral.500"},children:e.icon}),(0,i.jsx)(p.Z,{children:e.label})]})})},e.route))})}),(0,i.jsx)(m.Z,{children:(0,i.jsxs)(j.Z,{className:"h-10",onClick:G,children:[(0,i.jsx)(b.Z,{title:"Theme",children:(0,i.jsx)(Z.Z,{children:"dark"===A?(0,i.jsx)(w.Z,{fontSize:"small"}):(0,i.jsx)(N.Z,{fontSize:"small"})})}),(0,i.jsx)(p.Z,{children:"Theme"})]})}),(0,i.jsx)(m.Z,{children:(0,i.jsxs)(j.Z,{className:"h-10",onClick:()=>{I(!1)},children:[(0,i.jsx)(b.Z,{title:"Close Sidebar",children:(0,i.jsx)(Z.Z,{className:"text-2xl",children:(0,i.jsx)(O.Z,{className:"transform rotate-90",fontSize:"small"})})}),(0,i.jsx)(p.Z,{children:"Close Sidebar"})]})})]})})})]}):(0,i.jsxs)(f.Z,{className:"h-full py-6 flex flex-col justify-between",children:[(0,i.jsx)(f.Z,{className:"flex justify-center items-center",children:(0,i.jsx)(b.Z,{title:"Menu",children:(0,i.jsx)(D.Z,{className:"cursor-pointer text-2xl",onClick:()=>{I(!0)}})})}),(0,i.jsxs)(f.Z,{className:"flex flex-col gap-4 justify-center items-center",children:[R.map((e,t)=>(0,i.jsx)("div",{className:"flex justify-center text-2xl cursor-pointer",children:(0,i.jsx)(b.Z,{title:e.tooltip,children:e.icon})},"menu_".concat(t))),(0,i.jsx)(m.Z,{children:(0,i.jsx)(j.Z,{onClick:G,children:(0,i.jsx)(b.Z,{title:"Theme",children:(0,i.jsx)(Z.Z,{className:"text-2xl",children:"dark"===A?(0,i.jsx)(w.Z,{fontSize:"small"}):(0,i.jsx)(N.Z,{fontSize:"small"})})})})}),(0,i.jsx)(m.Z,{children:(0,i.jsx)(j.Z,{onClick:()=>{I(!0)},children:(0,i.jsx)(b.Z,{title:"Expand Sidebar",children:(0,i.jsx)(Z.Z,{className:"text-2xl",children:(0,i.jsx)(O.Z,{className:"transform rotate-90",fontSize:"small"})})})})})]})]})})})})},T=r(29720),H=r(41287),I=r(38230);let A=(0,H.Z)({colorSchemes:{light:{palette:{mode:"dark",primary:{...I.Z.grey,solidBg:"#e6f4ff",solidColor:"#1677ff",solidHoverBg:"#e6f4ff"},neutral:{plainColor:"#4d4d4d",plainHoverColor:"#131318",plainHoverBg:"#EBEBEF",plainActiveBg:"#D8D8DF",plainDisabledColor:"#B9B9C6"},background:{body:"#fff",surface:"#fff"},text:{primary:"#505050"}}},dark:{palette:{mode:"light",primary:{...I.Z.grey,softBg:"#353539",softHoverBg:"#35353978",softDisabledBg:"#353539",solidBg:"#51525beb",solidHoverBg:"#51525beb"},neutral:{plainColor:"#D8D8DF",plainHoverColor:"#F7F7F8",plainHoverBg:"#353539",plainActiveBg:"#434356",plainDisabledColor:"#434356",outlinedBorder:"#353539",outlinedHoverBorder:"#454651"},text:{primary:"#EBEBEF"},background:{body:"#212121",surface:"#51525beb"}}}},fontFamily:{body:"Josefin Sans, sans-serif",display:"Josefin Sans, sans-serif"},typography:{display1:{background:"linear-gradient(-30deg, var(--joy-palette-primary-900), var(--joy-palette-primary-400))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},zIndex:{modal:1001}});var J=r(53794),R=r.n(J),G=r(54486),K=r.n(G);let W=0;function M(){"loading"!==l&&(l="loading",n=setTimeout(function(){K().start()},250))}function U(){W>0||(l="stop",clearTimeout(n),K().done())}if(R().events.on("routeChangeStart",M),R().events.on("routeChangeComplete",U),R().events.on("routeChangeError",U),"function"==typeof(null==window?void 0:window.fetch)){let e=window.fetch;window.fetch=async function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];0===W&&M(),W++;try{let t=await e(...r);return t}catch(e){return Promise.reject(e)}finally{0==(W-=1)&&U()}}}function q(){return null}function Q(e){let{children:t}=e,{mode:r}=(0,u.tv)(),n=s.useRef(null);return(0,s.useEffect)(()=>{if((null==n?void 0:n.current)&&r){var e,t,l,i,s,a;null==n||null===(e=n.current)||void 0===e||null===(t=e.classList)||void 0===t||t.add(r),"light"===r?null==n||null===(l=n.current)||void 0===l||null===(i=l.classList)||void 0===i||i.remove("dark"):null==n||null===(s=n.current)||void 0===s||null===(a=s.classList)||void 0===a||a.remove("light")}},[n,r]),(0,i.jsxs)("div",{ref:n,className:"h-full",children:[(0,i.jsx)(q,{}),(0,i.jsx)(C.ZP,{children:t})]})}function V(e){let{children:t}=e,{isContract:r,isMenuExpand:n}=(0,C.Cg)(),[l,a]=s.useState(!1);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:z()("grid h-full w-full grid-cols-1 grid-rows-[auto,1fr] text-smd dark:text-gray-300 md:grid-rows-[1fr] transition-width duration-500",{"md:grid-cols-[280px,1fr]":n,"md:grid-cols-[60px,1fr]":!n}),children:[(0,i.jsx)(F,{}),(0,i.jsx)("div",{className:z()("relative min-h-0 min-w-0 overflow-hidden px-3",{"w-[calc(100vw - 76px)]":r}),children:t})]})})}var X=function(e){let{children:t}=e;return(0,i.jsx)("html",{lang:"en",className:"h-full font-sans",children:(0,i.jsx)("body",{className:"h-full font-sans",children:(0,i.jsx)(T.Z,{theme:A,children:(0,i.jsx)(u.lL,{theme:A,defaultMode:"light",children:(0,i.jsx)(Q,{children:(0,i.jsx)("div",{className:"contents h-full",children:(0,i.jsx)(V,{children:t})})})})})})})}},53534:function(e,t,r){"use strict";var n=r(24214),l=r(52040);let i=n.Z.create({baseURL:l.env.API_BASE_URL});i.defaults.timeout=1e4,i.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),t.Z=i},89749:function(e,t,r){"use strict";r.d(t,{Ej:function(){return u},Kw:function(){return c},PR:function(){return d},Tk:function(){return o}});var n=r(21628),l=r(53534),i=r(84835);let s={"content-type":"application/json"},a=e=>{if(!(0,i.isPlainObject)(e))return JSON.stringify(e);let t={...e};for(let e in t){let r=t[e];"string"==typeof r&&(t[e]=r.trim())}return JSON.stringify(t)},o=(e,t)=>{if(t){let r=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");r&&(e+="?".concat(r))}return l.Z.get("/api"+e,{headers:s}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})},c=(e,t)=>{let r=a(t);return l.Z.post("/api"+e,{body:r,headers:s}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})},d=(e,t)=>l.Z.post(e,t,{headers:s}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)}),u=(e,t)=>l.Z.post(e,t).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})},97402:function(){},23517:function(){}},function(e){e.O(0,[180,355,932,358,191,230,715,196,394,635,116,741,119,253,769,744],function(){return e(e.s=91909)}),_N_E=e.O()}]);