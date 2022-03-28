"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8095],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"UTM tags and other query parameters"},s=void 0,c={unversionedId:"manual-link-tagging",id:"manual-link-tagging",title:"UTM tags and other query parameters",description:'To minimize the amount of traffic that falls within the "no referrer" category, you can add special query parameters including UTM tags to your links.',source:"@site/docs/manual-link-tagging.md",sourceDirName:".",slug:"/manual-link-tagging",permalink:"/docs/manual-link-tagging",editUrl:"https://github.com/plausible/docs/edit/master/docs/manual-link-tagging.md",tags:[],version:"current",frontMatter:{title:"UTM tags and other query parameters"},sidebar:"someSidebar",previous:{title:"Top Sources",permalink:"/docs/top-referrers"},next:{title:"Search Console integration",permalink:"/docs/google-search-console-integration"}},p=[{value:"Merging organic traffic and paid campaigns",id:"merging-organic-traffic-and-paid-campaigns",children:[],level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'To minimize the amount of traffic that falls within the "',(0,o.kt)("a",{parentName:"p",href:"/docs/top-referrers"},"no referrer"),'" category, you can add special query parameters including UTM tags to your links.'),(0,o.kt)("p",null,"Whenever you post a link in social media or send it to someone via email, you can choose to add a special query parameter to the link. When for instance ",(0,o.kt)("inlineCode",{parentName:"p"},"?ref=<value>")," query parameter is present, Plausible Analytics will show it as the referral source."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ref"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"utm_source"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"utm_medium"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"utm_campaign"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"utm_content")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"utm_term")," query parameters are all valid and supported."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All referral sources including UTM and other query parameters are counted only when they start a new session on your site. This is why you don't see all of your own visits if you click to test several different UTM tagged links at the same time"))),(0,o.kt)("p",null,"For example, here's what you can do when you want to send a newsletter to your subscribers. If you simply link to your site with ",(0,o.kt)("inlineCode",{parentName:"p"},"yourdomain.com"),', anyone who clicks on it would fall within the "',(0,o.kt)("strong",{parentName:"p"},"no referrer"),'" category. '),(0,o.kt)("p",null,"But if you link to ",(0,o.kt)("inlineCode",{parentName:"p"},"yourdomain.com?ref=Newsletter"),' anyone who clicks on that will show "',(0,o.kt)("strong",{parentName:"p"},"Newsletter"),'" as the referrer source. This will allow you to see how many people have clicked on your link in the newsletter.'),(0,o.kt)("p",null,"Here are examples of links with the different query parameters that are supported by Plausible Analytics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yourdomain.com?ref=Newsletter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yourdomain.com?source=Newsletter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yourdomain.com?utm_source=Newsletter"))),(0,o.kt)("p",null,'For any clicks on any of the above links, "',(0,o.kt)("strong",{parentName:"p"},"Newsletter"),'" would be listed as a referral source in your Plausible Analytics dashboard. '),(0,o.kt)("p",null,"You can also go a bit deeper and track your links in more detail:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yourdomain.com?utm_source=Newsletter&utm_medium=Email&utm_campaign=NovemberNewsletter&utm_content=Link"))),(0,o.kt)("p",null,'For any clicks on the above link, "',(0,o.kt)("strong",{parentName:"p"},"Newsletter"),'" would be listed as a referral source in your Plausible Analytics dashboard, "',(0,o.kt)("strong",{parentName:"p"},"Email"),'" would be listed as the medium, "',(0,o.kt)("strong",{parentName:"p"},"NovemberNewsletter"),'" would be listed as the campaign and "',(0,o.kt)("strong",{parentName:"p"},"Link"),'" would be listed as the content. '),(0,o.kt)("h2",{id:"merging-organic-traffic-and-paid-campaigns"},"Merging organic traffic and paid campaigns"),(0,o.kt)("p",null,"It is a good practice to tag your links where the referrer header is not sent. Emails, newsletters, chat, messaging applications, social media, paid advertising campaigns and so on."),(0,o.kt)("p",null,"When a query parameter is present in the link it takes priority. When someone lands on your website without the special query parameter defined, we fall back to the referrer header."),(0,o.kt)("p",null,'We merge all the identical sources in the "All" tab of the "Top Sources" report. For instance, clicks that you get from Facebook which are not tagged by UTMs are labeled with a referral source "',(0,o.kt)("strong",{parentName:"p"},"Facebook"),'" by Facebook itself. '),(0,o.kt)("p",null,'If you tag some links that you share on Facebook such as your paid ads with the utm_source=Facebook, clicks on those will be merged alongside organic Facebook clicks in the "All" tab. '),(0,o.kt)("p",null,'Then you can see combined number of clicks between organic and UTM-tagged clicks in the "All" tab and you can segment by UTM tagged clicks only in the "Medium", "Source", "Campaign", "Term" and "Content" sections.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"UTM and other tags are case-sensitive so utm_source=Twitter and utm_source=twitter will show separately in your analytics dashboard."))),(0,o.kt)("p",null,'Read more about "',(0,o.kt)("a",{parentName:"p",href:"https://plausible.io/blog/utm-tracking-tags"},"how to use UTM parameters to track your campaigns and understand the dark traffic"),'".'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Does your site use page URLs like ",(0,o.kt)("inlineCode",{parentName:"p"},"yoursite.com/blog/index.php?article=some_article&page=11"),"? They will be reported as ",(0,o.kt)("inlineCode",{parentName:"p"},"yoursite.com/blog/index.php")," in the Top Pages report of your Plausible dashboard as we strip custom parameters. You can manually enable these custom parameters to be tracked. ",(0,o.kt)("a",{parentName:"p",href:"/docs/custom-query-params"},"See how here"),"."))))}m.isMDXComponent=!0}}]);