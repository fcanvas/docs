import{_ as p,o as r,c,a as e,w as o,b as n,r as t,e as a,d as s}from"./app.de36d695.js";const E=JSON.parse('{"title":"fCanvas Overview","description":"","frontmatter":{"title":"fCanvas Overview"},"headers":[],"relativePath":"guide/overview.md","lastUpdated":1678290843000}'),i={name:"guide/overview.md"},y=n("",10),D=s("div",{class:"language-ts line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"Stage"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"Layer"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"Circle"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"fcanvas"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// first we need to create a stage")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," stage "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Stage"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"500"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"500")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"mount"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"#app"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},") "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// selector of app <div>")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// then create layer")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," layer "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Layer"),s("span",{style:{color:"#A6ACCD"}},"()")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// create our shape")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," circle "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Circle"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"x"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," stage"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"width "),s("span",{style:{color:"#89DDFF"}},"/"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"y"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," stage"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"height "),s("span",{style:{color:"#89DDFF"}},"/"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"radius"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"70"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"fill"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"red"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"stroke"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"black"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"strokeWidth"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"4")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// add the shape to the layer")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"layer"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"add"),s("span",{style:{color:"#A6ACCD"}},"(circle)")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// add the layer to the stage")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stage"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"add"),s("span",{style:{color:"#A6ACCD"}},"(layer)")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// draw the image, call this if autoDraw=false")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// layer.draw();")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br")])],-1),F=n("",3),C=n("",4),A=n("",8),d=s("div",{class:"language-ts line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"Stage"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"Layer"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"Circle"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"Shape"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"fcanvas"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"installAnimate"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"@fcanvas/animate"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"installAnimate"),s("span",{style:{color:"#A6ACCD"}},"(Shape)")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," stage "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Stage"),s("span",{style:{color:"#A6ACCD"}},"()"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"mount"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"#app"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," layer "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Layer"),s("span",{style:{color:"#A6ACCD"}},"()")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stage"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"add"),s("span",{style:{color:"#A6ACCD"}},"(layer)")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," circle "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Circle"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"x"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"y"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"radius"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"30"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"fill"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"red"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"layer"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"add"),s("span",{style:{color:"#A6ACCD"}},"(circle)")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"circle"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"on"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"click"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#A6ACCD"}},"circle"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"to"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    x"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"100"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    y"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"100"),s("span",{style:{color:"#89DDFF"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    fill"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"blue"),s("span",{style:{color:"#89DDFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br")])],-1),b=n("",18);function u(h,m,g,f,v,_){const l=t("Preview");return r(),c("div",null,[y,e(l,null,{default:o(()=>[D]),_:1}),F,e(l,null,{default:o(()=>[a(" layer.add(triangle) ")]),_:1}),C,e(l,null,{default:o(()=>[a(" layer.add(triangle) ")]),_:1}),A,e(l,null,{default:o(()=>[d]),_:1}),b])}const x=p(i,[["render",u]]);export{E as __pageData,x as default};
