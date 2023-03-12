import{_ as o,o as t,c as l,a as n,w as r,b as c,r as p,d as e,e as a}from"./app.d7422473.js";const u=JSON.parse('{"title":"Image Shape","description":"","frontmatter":{},"headers":[],"relativePath":"guide/shapes/Image.md","lastUpdated":1678587456000}'),i={name:"guide/shapes/Image.md"},d=c('<h1 id="image-shape" tabindex="-1">Image Shape <a class="header-anchor" href="#image-shape" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This class is a descendant of <a href="/guide/essentials/Shape">Shape</a> it also inherits all the options that <a href="/guide/essentials/Shape">Shape</a> provides.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This component also supports a return function</p></div><p>To create an image with <code>fcanvas</code>, we can instantiate a <code>Image</code> object with image property.</p><p>For image property you can use:</p><p><code>image</code> An element to draw into the context. The specification permits any canvas image source, specifically,</p><ul><li>an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement" target="_blank" rel="noreferrer">HTMLImageElement</a>,</li><li>an <a href="https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement" target="_blank" rel="noreferrer">SVGImageElement</a>,</li><li>an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement" target="_blank" rel="noreferrer">HTMLVideoElement</a>,</li><li>an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement" target="_blank" rel="noreferrer">HTMLCanvasElement</a>,</li><li>an <a href="https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap" target="_blank" rel="noreferrer">ImageBitmap</a>,</li><li>an <a href="https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas" target="_blank" rel="noreferrer">OffscreenCanvas</a>,</li><li>an <a href="https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame" target="_blank" rel="noreferrer">VideoFrame</a>,</li><li>or <code>string</code> is url image loaded. This <code>url</code> must have been loaded by <code>await loadImage(&#39;&lt;url&gt;&#39;)</code> before. <a href="/guide/functions/other-utils#loadImage">refer to loadImage</a></li></ul><p>In addition, this shape also provides a few other parameters:</p><h2 id="require-options" tabindex="-1">Require Options <a class="header-anchor" href="#require-options" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>image</td><td><code>MayBeRef&lt;CanvasImageSource | string&gt;</code></td><td>multiply by a value as stated above</td></tr></tbody></table><h3 id="inherit-shape" tabindex="-1">Inherit <a href="/guide/essentials/Shape">Shape</a> <a class="header-anchor" href="#inherit-shape" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>x</td><td><code>MayBeRef&lt;number&gt;</code></td><td>offset x</td></tr><tr><td>y</td><td><code>MayBeRef&lt;number&gt;</code></td><td>offset y</td></tr></tbody></table><h2 id="optional-options" tabindex="-1">Optional Options <a class="header-anchor" href="#optional-options" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>crop</td><td><code>MayBeRef&lt;{ x: number; y: number; width: number; height: number }&gt;</code></td><td>undefined</td><td>An object that specifies the <code>x</code>, <code>y</code> coordinates to start cropping and the <code>width</code>, <code>height</code> dimensions of the image to be crop.</td></tr><tr><td>width</td><td><code>MayBeRef&lt;number&gt;</code></td><td>width of <code>image</code> or <code>crop.width</code> if available</td><td>Final width to display photo</td></tr><tr><td>height</td><td><code>MayBeRef&lt;number&gt;</code></td><td>height of <code>image</code> or <code>crop.height</code> if available</td><td>Final height to display photo</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The <code>crop</code> feature provided by this component is very simple. If you need more powerful cropping (e.g. <code>Tile</code>) use <a href="/guide/functions/other-utils#cropImage">cropImage</a></p></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2>',16),h=e("div",{class:"language-ts line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"Stage"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"Layer"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"Image"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"loadImage"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"fcanvas"),e("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#A6ACCD"}}," stage "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"new"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"Stage"),e("span",{style:{color:"#A6ACCD"}},"()"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"mount"),e("span",{style:{color:"#A6ACCD"}},"("),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"#app"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#A6ACCD"}}," layer "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"new"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"Layer"),e("span",{style:{color:"#A6ACCD"}},"()"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"addTo"),e("span",{style:{color:"#A6ACCD"}},"(stage)")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#A6ACCD"}}," image "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"new"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"Image"),e("span",{style:{color:"#A6ACCD"}},"("),e("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"x"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"0"),e("span",{style:{color:"#89DDFF"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"y"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"0"),e("span",{style:{color:"#89DDFF"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"width"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"150"),e("span",{style:{color:"#89DDFF"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"height"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"150"),e("span",{style:{color:"#89DDFF"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"image"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"loadImage"),e("span",{style:{color:"#A6ACCD"}},"("),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"https://shin.is-a.dev/favicon.ico"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#A6ACCD"}},")"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"addTo"),e("span",{style:{color:"#A6ACCD"}},"(layer)")]),a(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br")])],-1);function y(m,D,A,F,C,b){const s=p("Preview");return t(),l("div",null,[d,n(s,null,{default:r(()=>[h]),_:1})])}const f=o(i,[["render",y]]);export{u as __pageData,f as default};