"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3898],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,y=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9811:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],a={title:"Proxying Plausible through Vercel with Next.js"},l=void 0,u={unversionedId:"proxy/guides/nextjs",id:"proxy/guides/nextjs",title:"Proxying Plausible through Vercel with Next.js",description:"There are two ways you can proxy Plausible through Next.js / Vercel. One is using the next-plausible npm package and the other is using the raw Next.js config. Here are the instructions:",source:"@site/docs/proxy/guides/nextjs.md",sourceDirName:"proxy/guides",slug:"/proxy/guides/nextjs",permalink:"/docs/proxy/guides/nextjs",editUrl:"https://github.com/plausible/docs/edit/master/docs/proxy/guides/nextjs.md",tags:[],version:"current",frontMatter:{title:"Proxying Plausible through Vercel with Next.js"},sidebar:"someSidebar",previous:{title:"Proxying Plausible through Vercel",permalink:"/docs/proxy/guides/vercel"},next:{title:"Proxying Plausible through CloudFront",permalink:"/docs/proxy/guides/cloudfront"}},p=[{value:"Using next-plausible",id:"using-next-plausible",children:[],level:2},{value:"Using raw Next.js config",id:"using-raw-nextjs-config",children:[{value:"Step 1: Add URL rewrite rules",id:"step-1-add-url-rewrite-rules",children:[],level:3},{value:"Step 2: Adjust your deployed script",id:"step-2-adjust-your-deployed-script",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are two ways you can proxy Plausible through Next.js / Vercel. One is using the next-plausible npm package and the other is using the raw Next.js config. Here are the instructions:"),(0,o.kt)("h2",{id:"using-next-plausible"},"Using next-plausible"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/4lejandrito/next-plausible"},"next-plausible")," is an npm package that makes it easier to include Plausible Analytics in your Next.js site."),(0,o.kt)("p",null,"It provides out of the box support for proxying the script, you just need to wrap your ",(0,o.kt)("inlineCode",{parentName:"p"},"next.config.js")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"withPlausibleProxy")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { withPlausibleProxy } = require('next-plausible')\n\nmodule.exports = withPlausibleProxy()({\n  // ...your next js config, if any\n})\n")),(0,o.kt)("p",null,"This will set up the necessary rewrites and configure ",(0,o.kt)("inlineCode",{parentName:"p"},"PlausibleProvider")," to use the local URLs so you can keep using it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'  <PlausibleProvider domain="example.com">\n    ...\n  </PlausibleProvider>\n}\n')),(0,o.kt)("p",null,"Read more in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4lejandrito/next-plausible#proxy-the-analytics-script"},"the next-plausible documentation"),"."),(0,o.kt)("h2",{id:"using-raw-nextjs-config"},"Using raw Next.js config"),(0,o.kt)("h3",{id:"step-1-add-url-rewrite-rules"},"Step 1: Add URL rewrite rules"),(0,o.kt)("p",null,"If you don't already have a ",(0,o.kt)("inlineCode",{parentName:"p"},"next.config.js")," file at the root of your repository, create one. You can learn\nmore about Next.js rewrites ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next.config.js/rewrites"},"here"),". Here's\nthe setup for proxying Plausible Analytics:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="next.config.js"',title:'"next.config.js"'},"module.exports = {\n  async rewrites() {\n      return [\n          {\n              source: '/js/script.js',\n              destination: 'https://plausible.io/js/script.js'\n          },\n          {\n              source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config\n              destination: 'https://plausible.io/api/event'\n          }\n      ];\n  },\n}\n")),(0,o.kt)("p",null,"You can also choose a subdirectory to install Plausible under to make sure it doesn't shadow any routes\nthat you may already have in your application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="next.config.js"',title:'"next.config.js"'},"module.exports = {\n  async rewrites() {\n      return [\n          {\n              source: '/your-subdirectory/js/script.js',\n              destination: 'https://plausible.io/js/script.js'\n          },\n          {\n              source: '/your-subdirectory/api/event',\n              destination: 'https://plausible.io/api/event'\n          }\n      ];\n  },\n}\n")),(0,o.kt)("p",null,"Choose a generic or irrelevant name for the subdirectory. If you choose something like ",(0,o.kt)("inlineCode",{parentName:"p"},"analytics")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"plausible"),",\nit might get blocked in the future."),(0,o.kt)("p",null,"Using our extensions such as hash-based routing, page exclusions or outbound link click tracking? Edit your ",(0,o.kt)("inlineCode",{parentName:"p"},"next.config.js")," and change the name from ",(0,o.kt)("inlineCode",{parentName:"p"},"script.js")," to the script you want to use: ",(0,o.kt)("inlineCode",{parentName:"p"},"script.hash.js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"script.exclusions.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"script.outbound-links.js"),". Want to use more than one extension? You can chain them like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"script.hash.exclusions.outbound-links.js")),(0,o.kt)("h3",{id:"step-2-adjust-your-deployed-script"},"Step 2: Adjust your deployed script"),(0,o.kt)("p",null,"With the URL rewrites in place, you can change your script tag as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script defer data-domain="yourdomain.com" src="/js/script.js"><\/script>\n')),(0,o.kt)("p",null,"In case of a subdirectory installation, you'll also need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"data-api")," attribute to tell the script where\nthe data should be sent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script defer data-domain="yourdomain.com" data-api="/subdirectory/api/event" src="/subdirectory/js/script.js"><\/script>\n')),(0,o.kt)("p",null,"Deploy these changes to your Next.js site. You can verify the proxy is working by opening your network tab. You should see a request to\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://yourdomain.com/js/script.js")," with status 200 and another one to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://yourdomain.com/api/event")," with status 202."),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sp3n"},"sp3n")," for contributing these instructions!"))}d.isMDXComponent=!0}}]);