import{_ as e,b as t,o as a,R as l}from"./chunks/framework.DAMeiaR-.js";const f=JSON.parse('{"title":"Vue3 - Reactivity","description":"","frontmatter":{"title":"Vue3 - Reactivity","date":"2020-03-05T21:37:20.000Z","tags":["Vue","Vue3"],"license":"CC BY-NC 4.0","read":{"text":"2 min read","minutes":1.81,"time":108600,"words":362}},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[{"level":3,"title":"baseHandlers.ts","slug":"basehandlers-ts","link":"#basehandlers-ts","children":[]},{"level":3,"title":"collectionHandlers.ts","slug":"collectionhandlers-ts","link":"#collectionhandlers-ts","children":[]},{"level":3,"title":"computed.ts","slug":"computed-ts","link":"#computed-ts","children":[]},{"level":3,"title":"reactive.ts","slug":"reactive-ts","link":"#reactive-ts","children":[]},{"level":3,"title":"ref.ts","slug":"ref-ts","link":"#ref-ts","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"posts/vue-reactivity.md","filePath":"posts/vue-reactivity.md"}'),r={name:"posts/vue-reactivity.md"},s=l('<p>Vue 3.0 系列之 Reactivity，对应代码版本 <a href="https://github.com/vuejs/vue-next/tree/fb4856b36375fcf3eecaf89f260b272052a0b432" target="_blank" rel="noreferrer">vue-next</a></p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><ul><li>baseHandlers.ts: Proxy 的基础 handler</li><li>collectionHandlers.ts: Set,Map,WeakMap,WeakSet 的 Proxy handler</li><li>computed.ts: getter 负责 track 响应式变量，setter 负责 trigger 响应式</li><li>effect.ts: 负责 追踪、分发 响应式变量的各种更改，包括增加、删除、设置、清除</li><li>index.ts: 入口，负责 export 接口</li><li>lock.ts: 全局锁</li><li>operations.ts: 定义 Proxy 操作常量</li><li>reactive.ts: 监听对象，添加响应式函数</li><li>ref.ts: 主要把非 Reactive 对象转换成 Reactive 对象，以及 wrap 和 unwrap 一层 get/set</li></ul><p>通过浏览各个文件，可以发现 operations.ts 没有依赖。然后是 effect.ts，只依赖 reactivity 中的 operation.ts ，那么就可以先从这两个文件开始看，然后再找依赖最少的文件，这样源码读起来，就会相对容易一点。</p><h3 id="basehandlers-ts" tabindex="-1">baseHandlers.ts <a class="header-anchor" href="#basehandlers-ts" aria-label="Permalink to &quot;baseHandlers.ts&quot;">​</a></h3><p>主要创建 <code>mutableHandlers, readonlyHandlers, shallowReactiveHandlers, shallowReadonlyHandlers</code> 四种 ProxyHandler</p><h3 id="collectionhandlers-ts" tabindex="-1">collectionHandlers.ts <a class="header-anchor" href="#collectionhandlers-ts" aria-label="Permalink to &quot;collectionHandlers.ts&quot;">​</a></h3><p>主要是在 <code>get, size, has, add, set, delete, clear, forEach</code> 的时候添加 track 和 trigger 使其具有响应式</p><h3 id="computed-ts" tabindex="-1">computed.ts <a class="header-anchor" href="#computed-ts" aria-label="Permalink to &quot;computed.ts&quot;">​</a></h3><p>功能不多，就是在变量的 getter 里面 添加 track，setter 里面 trigger 对应的 reactive</p><h3 id="reactive-ts" tabindex="-1">reactive.ts <a class="header-anchor" href="#reactive-ts" aria-label="Permalink to &quot;reactive.ts&quot;">​</a></h3><p>主要函数 <code>createReactiveObject</code>，用 Proxy 代理 target，分别存在 toProxy 和 toRaw 里面</p><h3 id="ref-ts" tabindex="-1">ref.ts <a class="header-anchor" href="#ref-ts" aria-label="Permalink to &quot;ref.ts&quot;">​</a></h3><p>就像<a href="#目录结构">目录结构</a>里面介绍的一样，主要把非 Reactive 对象转换成 Reactive 对象</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Reactivity 主要是负责给变量添加相应式，给 Vue 的 mutable 打下基础</p>',16),i=[s];function c(o,n,d,h,u,p){return a(),t("div",null,i)}const b=e(r,[["render",c]]);export{f as __pageData,b as default};
