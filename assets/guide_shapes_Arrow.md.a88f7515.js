import{_ as o,o as l,c as a,a as n,w as r,b as c,r as p,d as e,e as s}from"./app.de36d695.js";const f=JSON.parse('{"title":"Arrow Shape","description":"","frontmatter":{},"headers":[],"relativePath":"guide/shapes/Arrow.md","lastUpdated":1678290843000}'),i={name:"guide/shapes/Arrow.md"},d=c('<h1 id="arrow-shape" tabindex="-1">Arrow Shape <a class="header-anchor" href="#arrow-shape" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This class is a descendant of <a href="/guide/shapes/Line">Line</a> it also inherits all the options that <a href="/guide/shapes/Line">Line</a> provides.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This component also supports a return function</p></div><p>To create an arrow shape with <code>fcanvas</code>, we can instantiate a <code>Arrow</code> object.</p><p>In addition, this shape also provides a few other parameters:</p><h2 id="require-options" tabindex="-1">Require Options <a class="header-anchor" href="#require-options" aria-hidden="true">#</a></h2><h3 id="inherit-line" tabindex="-1">Inherit <a href="/guide/shapes/Line">Line</a> <a class="header-anchor" href="#inherit-line" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>points</td><td>MayBeRef&lt;number[]&gt;</td><td>Flat array of points coordinates. You should define them as [x1, y1, x2, y2, x3, y3]</td></tr></tbody></table><h3 id="inherit-shape" tabindex="-1">Inherit <a href="/guide/essentials/Shape">Shape</a> <a class="header-anchor" href="#inherit-shape" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>x</td><td><code>MayBeRef&lt;number&gt;</code></td><td>offset x</td></tr><tr><td>y</td><td><code>MayBeRef&lt;number&gt;</code></td><td>offset y</td></tr></tbody></table><h2 id="optional-options" tabindex="-1">Optional Options <a class="header-anchor" href="#optional-options" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>pointerLength</td><td><code>MayBeRef&lt;number&gt;</code></td><td>10</td><td>Arrow pointer length.</td></tr><tr><td>pointerWidth</td><td><code>MayBeRef&lt;number&gt;</code></td><td>10</td><td>Arrow pointer width.</td></tr><tr><td>pointerAtBeginning</td><td><code>MayBeRef&lt;boolean&gt;</code></td><td>false</td><td>Do we need to draw pointer on beginning position?</td></tr><tr><td>pointerAtEnding</td><td><code>MayBeRef&lt;boolean&gt;</code></td><td>true</td><td>Do we need to draw pointer on ending position?</td></tr></tbody></table><h3 id="inherit-line-1" tabindex="-1">Inherit <a href="/guide/shapes/Line">Line</a> <a class="header-anchor" href="#inherit-line-1" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>tension</td><td><code>MayBeRef&lt;number&gt;</code></td><td>0</td><td>Higher values will result in a more curvy line. A value of 0 will result in no interpolation.</td></tr><tr><td>closed</td><td><code>MayBeRef&lt;boolean&gt;</code></td><td>false</td><td>Defines whether or not the line shape is closed, creating a polygon or blob (<code>quadraticCurveTo</code>)</td></tr><tr><td>bezier</td><td><code>MayBeRef&lt;boolean&gt;</code></td><td>false</td><td>If no tension is provided but <code>bezier=true</code>, we draw the line as a bezier using the passed points (<code>bezierCurveTo</code>)</td></tr></tbody></table><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2>',15),y=e("div",{class:"language-ts line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"Stage"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"Layer"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"Arrow"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"fcanvas"),e("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#A6ACCD"}}," stage "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"new"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"Stage"),e("span",{style:{color:"#A6ACCD"}},"()"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"mount"),e("span",{style:{color:"#A6ACCD"}},"("),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"#app"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#A6ACCD"}}," layer "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"new"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"Layer"),e("span",{style:{color:"#A6ACCD"}},"()"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"addTo"),e("span",{style:{color:"#A6ACCD"}},"(stage)")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#A6ACCD"}}," arrow "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"new"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"Arrow"),e("span",{style:{color:"#A6ACCD"}},"("),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"x"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," stage"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"size"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"width "),e("span",{style:{color:"#89DDFF"}},"/"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"4"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"y"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," stage"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"size"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"height "),e("span",{style:{color:"#89DDFF"}},"/"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"4"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"points"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," ["),e("span",{style:{color:"#F78C6C"}},"0"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"0"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," stage"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"size"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"width "),e("span",{style:{color:"#89DDFF"}},"/"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"2"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," stage"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"size"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"height "),e("span",{style:{color:"#89DDFF"}},"/"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"2"),e("span",{style:{color:"#A6ACCD"}},"]"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"pointerLength"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"20"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"pointerWidth"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"20"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"fill"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"black"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"stroke"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"black"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"strokeWidth"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#A6ACCD"}},")"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"addTo"),e("span",{style:{color:"#A6ACCD"}},"(layer)")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br")])],-1);function D(h,F,C,A,b,u){const t=p("Preview");return l(),a("div",null,[d,n(t,null,{default:r(()=>[y]),_:1})])}const g=o(i,[["render",D]]);export{f as __pageData,g as default};
