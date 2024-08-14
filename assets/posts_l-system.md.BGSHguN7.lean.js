import{d as _,r as u,u as g,c as o,o as c,b as h,i as r,I as f,t as F,_ as w,s as y,z as X,l as i,R as p}from"./chunks/framework.DAMeiaR-.js";const k=["src","width","height"],b={class:"iframe-link"},v=["href"],L=_({__name:"IframePreview",props:{title:{},url:{}},setup(l){const e={w:1920,h:1080},s=u(),a=g(s),n=o(()=>{const t=a.width.value/e.w,m=a.height.value/e.h;return Math.min(t,m)}),d=o(()=>({transform:`scale(${n.value})`,transformOrigin:"top left"}));return(t,m)=>(c(),h("div",{class:"relative mb-12",ref_key:"container",ref:s},[r("iframe",{src:t.url,frameborder:"0",class:"absolute border-1 border-solid border-bGray-2",width:e.w,height:e.h,style:f(d.value)},null,12,k),r("div",b,[r("a",{href:t.url,target:"_blank"},F(t.title),9,v)])],512))}}),x=w(L,[["__scopeId","data-v-0ffbb6f5"]]),S=_({__name:"VEmbed",props:{type:{default:"iframe"},data:{},width:{default:"100%"},height:{},aspect:{default:"16/9"}},setup(l){const e=l,s=o(()=>({aspectRatio:e.aspect,width:e.width,height:e.height}));return(a,n)=>(c(),y(x,X({style:s.value},a.data),null,16,["style"]))}}),q=JSON.parse('{"title":"浅识 L-System","description":"","frontmatter":{"title":"浅识 L-System","date":"2024-06-01T12:24:29.000Z","tags":["fractal","l-system"],"read":{"text":"6 min read","minutes":5.46,"time":327600,"words":1092}},"headers":[{"level":2,"title":"L-System","slug":"l-system","link":"#l-system","children":[{"level":3,"title":"画图展示","slug":"画图展示","link":"#画图展示","children":[]}]},{"level":2,"title":"核心逻辑","slug":"核心逻辑","link":"#核心逻辑","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"relativePath":"posts/l-system.md","filePath":"posts/l-system.md"}'),T={name:"posts/l-system.md"},P=r("p",null,"分形，数学中的一个比较有趣的概念，是一种图形，却又和普通的图形有所区别。主要区分在于，分形的一部分，放大之后，和原来的形状一样。就像俄罗斯套娃一样，打开一个，出现一个新的套娃，再打开一个，又出现一个新的套娃，一直循环下去。这就是分形。",-1),E=r("p",null,"分形，可以用来创造很多有趣的图形，例如下面的一棵树：",-1),C=p("",27),V=p("",7),A=p("",2);function I(l,e,s,a,n,d){const t=S;return c(),h("div",null,[P,E,i(t,{data:{title:"Fractal Tree",url:"https://0x-jerry.github.io/visual-experiment/#/fractal-tree"}}),C,i(t,{data:{title:"Fractal Tree(3 iteration)",url:"https://0x-jerry.github.io/visual-experiment/#/fractal-tree?iteration=3&length=40"}}),V,i(t,{data:{title:"Fractal Tree(8 iteration)",url:"https://0x-jerry.github.io/visual-experiment/#/fractal-tree?iteration=8&length=2"}}),A])}const N=w(T,[["render",I]]);export{q as __pageData,N as default};
