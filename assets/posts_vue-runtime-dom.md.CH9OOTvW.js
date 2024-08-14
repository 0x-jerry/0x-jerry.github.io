import{_ as e,b as t,o,R as s}from"./chunks/framework.DAMeiaR-.js";const g=JSON.parse('{"title":"Vue3 - Runtime Dom","description":"","frontmatter":{"title":"Vue3 - Runtime Dom","date":"2020-03-05T00:46:31.000Z","tags":["Vue","Vue3"],"license":"CC BY-NC 4.0","read":{"text":"3 min read","minutes":2.805,"time":168300,"words":561}},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[{"level":3,"title":"components","slug":"components","link":"#components","children":[]},{"level":3,"title":"directives","slug":"directives","link":"#directives","children":[]},{"level":3,"title":"modules","slug":"modules","link":"#modules","children":[]},{"level":3,"title":"nodeOps.ts","slug":"nodeops-ts","link":"#nodeops-ts","children":[]},{"level":3,"title":"patchProp.ts","slug":"patchprop-ts","link":"#patchprop-ts","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"posts/vue-runtime-dom.md","filePath":"posts/vue-runtime-dom.md"}'),n={name:"posts/vue-runtime-dom.md"},a=s('<p>Vue 3.0 系列之 Runtime Dom，对应代码版本 <a href="https://github.com/vuejs/vue-next/tree/fb4856b36375fcf3eecaf89f260b272052a0b432" target="_blank" rel="noreferrer">vue-next</a></p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><ul><li>components: 两个 transition 相关的 Vue 组件</li><li>directives: v- 指令相关处理</li><li>modules: Element 属性对比，替换相关处理</li><li>index.ts: 挂载 Vue 到 Host 上，Host 有可能是 Document 有可能是 Hydration App</li><li>nodeOps.ts: 封装 Element 相关操作，统一不同平台上的操作</li><li>patchProp.ts: 对比 Element 上的属性，执行替换操作</li></ul><h3 id="components" tabindex="-1">components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;components&quot;">​</a></h3><p><strong>Transition.ts</strong> 组件主要处理 Element 的 class 在适当的时候添加以及删除，实际实现是 runtime-core 中的 <strong>BaseTransition</strong> 组件</p><p><strong>TransitionGroup.ts</strong> 组件主要给子组件添加 transition hook，以及子组件在添加/删除/移动的时候，添加 transition class</p><h3 id="directives" tabindex="-1">directives <a class="header-anchor" href="#directives" aria-label="Permalink to &quot;directives&quot;">​</a></h3><p><strong>vModel.ts</strong> 主要用于给 <code>select,textarea,input</code> 添加各种事件，例如 <code>change, input</code> 等，再根据 modifiers 执行对应的功能代码</p><p><strong>vOn.ts</strong> 中 <strong>withKeys</strong> 是为了兼容 2.x 的语法，<strong>withModifiers</strong> 则是 3.0 的新版本，主要处理 modifiers</p><p><strong>vShow.ts</strong> 中的代码很少，也很简单，就是处理 el.style.display，还考虑到了 transition，原始 display 值保存在 <code>el._vod</code>(Vue original display)</p><h3 id="modules" tabindex="-1">modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;modules&quot;">​</a></h3><p>modules 文件夹是为处理 Element 原生属性</p><p><strong>attrs.ts</strong> 分别处理了 svg 和 非 svg 的 attr 设置，特殊处理了 boolean 值，因为 Vue 会把所有非字符串 attr 的值转换成字符串，所以 boolean 值需要特殊处理</p><p><strong>class.ts</strong> 处理 className，一样分 svg 和 非 svg，特别注意 transition 相关的 className，transition 相关 classes 保存到 <code>el._vtc</code>(vue transition classes) 中的</p><p><strong>events.ts</strong> 在原生回调函数上 wrapper 了一层 invoker，invoker 只要在监听参数不变的情况下，实现重用</p><p><strong>prop.ts</strong> 处理 element 上的 props，特殊处理了 <code>InnerHTML,textContent</code>，progress 的 <code>value</code> 和 boolean 值的 prop</p><p><strong>style.ts</strong> 处理了 css 变量，自动添加前缀，特殊处理了 <code>!important</code> 语法</p><h3 id="nodeops-ts" tabindex="-1">nodeOps.ts <a class="header-anchor" href="#nodeops-ts" aria-label="Permalink to &quot;nodeOps.ts&quot;">​</a></h3><p>本文件主要封装了 Element 的常用函数，主要为了分开 svg 和非 svg 的相关操作，统一 api</p><h3 id="patchprop-ts" tabindex="-1">patchProp.ts <a class="header-anchor" href="#patchprop-ts" aria-label="Permalink to &quot;patchProp.ts&quot;">​</a></h3><p>本文件主要是统一一个 api 来管理 patch 操作，特殊处理了 <code>:true-value, :false-value</code> 语法，保存到 <code>el._trueValue, el._falseValue</code> 中</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Runtime Dom 主要就是为了执行 dom diff 之后的 patch 操作，代码看起来相对比较简单，另外添加了两个原生组件 <code>Transition</code> 和 <code>TransitionGroup</code></p>',23),r=[a];function i(l,d,c,p,u,m){return o(),t("div",null,r)}const v=e(n,[["render",i]]);export{g as __pageData,v as default};
