import{d as c,r as g,o as r,b as i,i as e,p as n,t as h,J as u,K as _,_ as l,l as m,R as v}from"./chunks/framework.DAMeiaR-.js";const b=t=>(u("data-v-3c416986"),t=t(),_(),t),f={class:"count"},k=b(()=>e("h3",null,"count 组件",-1)),x=c({__name:"VCount",setup(t){const o=g(0);return(d,a)=>(r(),i("div",f,[k,e("div",null,[n(" count: "+h(o.value)+" ",1),e("button",{class:"btn",onClick:a[0]||(a[0]=s=>o.value++)},"+"),e("button",{class:"btn",onClick:a[1]||(a[1]=s=>o.value--)},"-")])]))}}),y=l(x,[["__scopeId","data-v-3c416986"]]),j=JSON.parse('{"title":"设计一个像 hexo 的博客系统(4)","description":"","frontmatter":{"title":"设计一个像 hexo 的博客系统(4)","date":"2021-10-26T07:43:57.000Z","tags":["Blog","System Design"],"read":{"text":"2 min read","minutes":1.5,"time":90000,"words":300}},"headers":[{"level":2,"title":"Vite Plugin Blog","slug":"vite-plugin-blog","link":"#vite-plugin-blog","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"posts/design-blog-system-4.md","filePath":"posts/design-blog-system-4.md"}'),S={name:"posts/design-blog-system-4.md"},V=v('<p>接 <a href="./design-blog-system-3">前篇</a>，距离上一次更新，差不多快一个月了，咕咕咕 😃。</p><p>现在这个博客，也就是建立在 <a href="https://github.com/0x-jerry/vite-plugin-blog" target="_blank" rel="noreferrer">vite-plugin-blog</a> 这个插件之上的。也就是前篇提到的 <code>v-blog</code>。粗略的尝试了一下之前的想法。</p><h2 id="vite-plugin-blog" tabindex="-1">Vite Plugin Blog <a class="header-anchor" href="#vite-plugin-blog" aria-label="Permalink to &quot;Vite Plugin Blog&quot;">​</a></h2><p>这个库，主要是利用 <a href="https://github.com/markedjs/marked" target="_blank" rel="noreferrer">marked</a> 把 <code>.md</code> 转换成 <code>.vue</code> 文件并保存在硬盘上。</p><p>一点点优点：</p><ol><li>建立在 vite 之上，所以还是比较快的</li><li>可利用 vite 插件</li><li>写主题更加方便</li><li>支持在 <code>markdown</code> 中直接用 <code>vue</code> 组件</li></ol><p>结合 <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">vite</a> 插件系统，实现了 <a href="https://hexo.io/docs/front-matter#Settings-amp-Their-Default-Values" target="_blank" rel="noreferrer">Hexo 的 layout</a> 功能。</p><p>结合 <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">vite</a> 的 <a href="https://vitejs.dev/guide/features.html#glob-import" target="_blank" rel="noreferrer">glob-import</a> 功能，可把 <code>markdown</code> 当做排版工具来使用，例如，<a href="https://blog.0x-jerry.icu/timeline" target="_blank" rel="noreferrer">timeline</a> 这个页面，就是把 <code>markdown</code> 当成排版工具，生成出来的。</p><p>再结合 <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">vite</a> 的 <a href="https://github.com/antfu/unplugin-auto-import" target="_blank" rel="noreferrer">auto-import</a> 插件，可实现在 <code>markdown</code> 中直接使用 <code>vue</code> 组件。</p><p>例如：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes vitesse-dark vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">v-count</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> /&gt;</span></span></code></pre></div><p>展示的效果如下：</p>',12),P=e("h2",{id:"总结",tabindex:"-1"},[n("总结 "),e("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),T=e("p",null,"现在差不多能用了，本来还想搞搞主题相关的东西，但是并没有太多的精力。先就这样吧。",-1);function B(t,o,d,a,s,C){const p=y;return r(),i("div",null,[V,m(p),P,T])}const w=l(S,[["render",B]]);export{j as __pageData,w as default};
