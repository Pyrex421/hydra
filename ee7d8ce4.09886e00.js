(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{220:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(227)),c={id:"search_path",title:"Config search path",sidebar_label:"Config search path"},i={id:"advanced/search_path",title:"Config search path",description:"Hydra uses a search path approach to find configuration files as it composes the configuration object.",source:"@site/docs/advanced/search_path.md",permalink:"/docs/next/advanced/search_path",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/search_path.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1570385071,sidebar_label:"Config search path",sidebar:"Docs",previous:{title:"The package header",permalink:"/docs/next/advanced/package_header"},next:{title:"Hydra plugins types",permalink:"/docs/next/advanced/plugins"}},p=[],s={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra uses a search path approach to find configuration files as it composes the configuration object.\n",Object(o.b)("inlineCode",{parentName:"p"},"SearchPathPlugin")," can manipulate the search path."),Object(o.b)("p",null,"You can inspect the search path and the configurations loaded by Hydra by turning on verbose logging for the ",Object(o.b)("inlineCode",{parentName:"p"},"hydra")," logger:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py hydra.verbose=hydra\n")))}u.isMDXComponent=!0},227:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,b=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return r?a.a.createElement(b,i({ref:t},s,{components:r})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);