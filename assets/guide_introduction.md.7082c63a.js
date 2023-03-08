import{_ as a,o as s,c as n,b as e}from"./app.de36d695.js";const y=JSON.parse('{"title":"Overview","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction.md","lastUpdated":1678290843000}'),t={name:"guide/introduction.md"},o=e(`<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h1><h2 id="what-is-fcanvas" tabindex="-1">What is fCanvas? <a class="header-anchor" href="#what-is-fcanvas" aria-hidden="true">#</a></h2><p>fCanvas is a powerful 2d canvas library that allows minimal rendering and provides diverse shapes.</p><p>fCanvas allows for high performance animations, transitions, button nesting, layering, filtering, caching, event handling for desktop and mobile apps, and more.</p><p>You can draw things to the stage, add event handlers to them, move them, scale and rotate them independently of other shapes for support high performance animation, even if your application uses thousands of shapes.</p><p>This project is an attempt at rewriting <a href="https://github.com/konvajs/konva" target="_blank" rel="noreferrer">KonvaJS</a> which allows for minimal reduction of useless APIs and increased performance reduction in redrawing.</p><h2 id="install-fcanvas" tabindex="-1">Install fCanvas <a class="header-anchor" href="#install-fcanvas" aria-hidden="true">#</a></h2><p>If you are using package managers:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fcanvas</span></span>
<span class="line"></span></code></pre></div><p>Or just use script tag:</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/fcanvas@1/dist/index.browser.min.global.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Or use module EMCA:</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Stage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/fcanvas@1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,13),l=[o];function p(r,i,c,d,h,u){return s(),n("div",null,l)}const v=a(t,[["render",p]]);export{y as __pageData,v as default};
