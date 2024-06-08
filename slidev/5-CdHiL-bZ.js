import{d as u,o as d,b as _,e as s,A as r,y as B,f as v,i as m,h as f,r as w,az as b,c as C,k as a,l as k,m as F,a6 as t,aa as E,g as p,q as S,s as T,p as x,a as j}from"../modules/vue-uvdIgQm2.js";import{ab as R,_ as c,ac as g}from"../index-etgzCgYH.js";import{_ as O}from"./CodeBlockWrapper-DO2kb8Y3.js";import{p as $,u as z,f as I}from"./context-BEeGzwOE.js";import"../modules/shiki-BhEdCg85.js";import"../modules/unplugin-icons-DZotwfbM.js";function y(h){return h.startsWith("/")?"/"+h.slice(1):h}function N(h,n=!1,e="cover"){const l=h&&(h[0]==="#"||h.startsWith("rgb")),o={background:l?h:void 0,color:h&&!l?"white":void 0,backgroundImage:l?void 0:h?n?`linear-gradient(#0005, #0008), url(${y(h)})`:`url("${y(h)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:e};return o.background||delete o.background,o}const q=["width","height"],W=["id"],U=["fill"],P=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],M=u({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(h){const n=R();return(e,l)=>(d(),_("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[s("defs",null,[s("marker",{id:r(n),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,U)],8,W)]),s("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${r(n)})`},null,8,P)],8,q))}}),V=c(M,[["__file","C:/Users/zhw/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/builtin/Arrow.vue"]]),G={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},L=u({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(h){const n=h,e=B(()=>N(n.image,!1,n.backgroundSize));return(l,o)=>(d(),_("div",G,[s("div",{class:m(["slidev-layout default",n.class])},[v(l.$slots,"default")],2),s("div",{class:"w-full h-full",style:f(e.value)},null,4)]))}}),H=c(L,[["__file","C:/Users/zhw/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/layouts/image-right.vue"]]),i=h=>(x("data-v-b35da193"),h=h(),j(),h),X=i(()=>s("h1",null,"Code",-1)),Y=i(()=>s("p",null,[t("Use code snippets and get the highlighting directly, and even types hover!"),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])],-1)),J={class:"shiki shiki-themes vitesse-dark vitesse-light twoslash lsp slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},K={class:"language-ts"},Q=i(()=>s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// TwoSlash enables TypeScript hover information")],-1)),Z=i(()=>s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// and errors in markdown code blocks")],-1)),ss=i(()=>s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// More at https://shiki.style/packages/twoslash")],-1)),is=i(()=>s("span",{class:"line"},null,-1)),ts={class:"line"},hs=i(()=>s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import",-1)),as=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {",-1)),es=i(()=>s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),ls={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},ks=i(()=>s("span",null,"computed",-1)),ns=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": {"),s("br"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    <"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"getter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedGetter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">, "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," | "),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"undefined"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"): "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">;"),s("br"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    <"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"options"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"WritableComputedOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">, "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," | "),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"undefined"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"): "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"WritableComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<...>;"),s("br"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])],-1)),os=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",",-1)),ps=i(()=>s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),rs={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},ds=i(()=>s("span",null,"ref",-1)),cs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"):"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"UnwrapRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,[t(`Takes an inner value and returns a reactive and mutable ref object, which
has a single property `),s("code",null,".value"),t(" that points to the inner value.")])]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"value"),t("  - The object to wrap in the ref.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#ref"},"https://vuejs.org/api/reactivity-core.html#ref")])])])],-1)),gs=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }",-1)),ys=i(()=>s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from",-1)),us=i(()=>s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '",-1)),_s=i(()=>s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"vue",-1)),As=i(()=>s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'",-1)),Ds=i(()=>s("span",{class:"line"},null,-1)),Bs={class:"line"},vs=i(()=>s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const ",-1)),ms={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},fs=i(()=>s("span",null,"count",-1)),ws=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),bs=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),Cs=i(()=>s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ",-1)),Fs={style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},Es=i(()=>s("span",null,"ref",-1)),Ss=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,[t(`Takes an inner value and returns a reactive and mutable ref object, which
has a single property `),s("code",null,".value"),t(" that points to the inner value.")])]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"value"),t("  - The object to wrap in the ref.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#ref"},"https://vuejs.org/api/reactivity-core.html#ref")])])])],-1)),Ts=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(",-1)),xs=i(()=>s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"0",-1)),js=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")",-1)),Rs={class:"line"},Os=i(()=>s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const ",-1)),$s={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},zs=i(()=>s("span",null,"doubled",-1)),Is=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doubled"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),Ns=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),qs=i(()=>s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ",-1)),Ws={style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},Us=i(()=>s("span",null,"computed",-1)),Ps=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"getter"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"ComputedGetter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">,"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?:"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," DebuggerOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," |"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," undefined"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,`Takes a getter function and returns a readonly reactive ref object for the
returned value from the getter. It can also take an object with get and set
functions to create a writable ref object.`)]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@example"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Creating a readonly computed ref:"),s("br"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("br"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("br"),s("br"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 2"),s("br"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"++"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // error")]),t(`
`),s("code",null,[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Creating a writable computed ref:"),s("br"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("br"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({"),s("br"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  get"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("br"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  set"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"val"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("br"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," -"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("br"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }"),s("br"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"})"),s("br"),s("br"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("br"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 0")])])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"getter"),t("  - Function that produces the next value.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"debugOptions"),t("  - For debugging. See "),s("a",{href:"https://vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging"},"https://vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging"),t(".")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#computed"},"https://vuejs.org/api/reactivity-core.html#computed")])])])],-1)),Ms=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(()",-1)),Vs=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>",-1)),Gs=i(()=>s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),Ls={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},Hs=i(()=>s("span",null,"count",-1)),Xs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),Ys=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},".",-1)),Js={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},Ks=i(()=>s("span",null,"value",-1)),Qs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number")])],-1)),Zs=i(()=>s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," * ",-1)),si=i(()=>s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"2",-1)),ii=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")",-1)),ti=i(()=>s("span",{class:"line"},null,-1)),hi={class:"line"},ai={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},ei=i(()=>s("span",null,"doubled",-1)),li=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doubled"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),ki=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},".",-1)),ni=i(()=>s("span",{class:"twoslash-error"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value")],-1)),oi=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),pi=i(()=>s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 2",-1)),ri=i(()=>s("div",{class:"twoslash-meta-line twoslash-error-line vp-copy-ignore"},"Cannot assign to 'value' because it is a read-only property.",-1)),di=i(()=>s("hr",{class:"footnotes-sep"},null,-1)),ci=i(()=>s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://sli.dev/guide/syntax.html#line-highlighting",target:"_blank",rel:"noopener"},"Learn More"),t(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])])])],-1)),gi={__name:"5",setup(h){return $(g),z(),(n,e)=>{const l=w("v-menu"),o=O,A=V,D=b("click");return d(),C(H,S(T(r(I)(r(g),4))),{default:a(()=>[X,Y,k(o,F({},{ranges:["all","5","7","7-8","10","all"]}),{default:a(()=>[s("pre",J,[s("code",K,[Q,t(`
`),Z,t(`
`),ss,t(`
`),is,t(`
`),s("span",ts,[hs,as,es,s("span",ls,[k(l,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[ns]),default:a(()=>[ks]),_:1})]),os,ps,s("span",rs,[k(l,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[cs]),default:a(()=>[ds]),_:1})]),gs,ys,us,_s,As]),t(`
`),Ds,t(`
`),s("span",Bs,[vs,s("span",ms,[k(l,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[ws]),default:a(()=>[fs]),_:1})]),bs,Cs,s("span",Fs,[k(l,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[Ss]),default:a(()=>[Es]),_:1})]),Ts,xs,js]),t(`
`),s("span",Rs,[Os,s("span",$s,[k(l,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[Is]),default:a(()=>[zs]),_:1})]),Ns,qs,s("span",Ws,[k(l,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[Ps]),default:a(()=>[Us]),_:1})]),Ms,Vs,Gs,s("span",Ls,[k(l,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[Xs]),default:a(()=>[Hs]),_:1})]),Ys,s("span",Js,[k(l,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[Qs]),default:a(()=>[Ks]),_:1})]),Zs,si,ii]),t(`
`),ti,t(`
`),s("span",hi,[s("span",ai,[k(l,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[li]),default:a(()=>[ei]),_:1})]),ki,ni,oi,pi]),ri])])]),_:1},16),E(k(A,{x1:"350",y1:"310",x2:"195",y2:"334",color:"#953",width:"2",arrowSize:"1"},null,512),[[D,[4,5]]]),p(" This allow you to embed external code blocks "),p(" <<< @/snippets/external.ts#snippet "),p(" Footer "),p(" Inline style "),di,ci]),_:1},16)}}},vi=c(gi,[["__scopeId","data-v-b35da193"],["__file","/@slidev/slides/5.md"]]);export{vi as default};
