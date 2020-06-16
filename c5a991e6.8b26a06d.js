(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(10),o=(n(0),n(163)),i={id:"delete",title:"Delete operation"},l={id:"delete",title:"Delete operation",description:"Delete Operation",source:"@site/../docs/spec-delete.md",permalink:"/docs/next/delete",editUrl:"https://github.com/aerogear/GraphQLCRUD/edit/master/website/../docs/spec-delete.md",version:"next",sidebar:"docs",previous:{title:"Update Operation",permalink:"/docs/next/update"},next:{title:"Find Operation",permalink:"/docs/next/find"}},c=[{value:"Delete Operation",id:"delete-operation",children:[]},{value:"Variations",id:"variations",children:[{value:"Contidional deletion",id:"contidional-deletion",children:[]}]}],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"delete-operation"},"Delete Operation"),Object(o.b)("p",null,"Delete operation is enabled accepting single inputType as arguments"),Object(o.b)("p",null,"For ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Note {\n  id: ID!\n  title: String!\n  description: String\n  comments: [Comment]!\n}\n")),Object(o.b)("p",null,"Following mutation can be used"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n    deleteNote(input: MutateNoteInput!): Note!\n}\n")),Object(o.b)("p",null,"Input type for update operation looks as follows"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"input MutateNoteInput {\n  # ID field is required for update\n  id: ID!\n  title: String\n  description: String\n}\n")),Object(o.b)("h2",{id:"variations"},"Variations"),Object(o.b)("h3",{id:"contidional-deletion"},"Contidional deletion"),Object(o.b)("p",null,"Conditional deletion can be enabled for the cases where we want to perform deletion\noperation only after meeting certain criteria"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  deleteNote(input: MutateNoteInput!, where: DeleteNoteFilter): Note!\n}\n")),Object(o.b)("p",null,"Input type for filtering has all fields marked as optional"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"input DeleteNoteFilter {\n  title: StringInput\n  description: StringInput\n}\n")))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,f=d["".concat(i,".").concat(s)]||d[s]||b[s]||o;return n?a.a.createElement(f,l(l({ref:t},p),{},{components:n})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);