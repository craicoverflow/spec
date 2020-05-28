(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(10),o=(n(0),n(166)),r={id:"spec-delete",title:"Delete operation"},l={id:"spec-delete",title:"Delete operation",description:"Delete Operation",source:"@site/../docs/spec-delete.md",permalink:"/docs/next/spec-delete",editUrl:"https://github.com/aerogear/GraphQLCRUD/edit/master/website/../docs/spec-delete.md",version:"next",sidebar:"docs",previous:{title:"Update Operation",permalink:"/docs/next/spec-update"},next:{title:"Find Operation",permalink:"/docs/next/spec-find"}},p=[{value:"Delete Operation",id:"delete-operation",children:[]},{value:"Variations",id:"variations",children:[{value:"Contidional deletion",id:"contidional-deletion",children:[]}]}],c={rightToc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"delete-operation"},"Delete Operation"),Object(o.b)("p",null,"Delete operation is enabled accepting single inputType as arguments"),Object(o.b)("p",null,"For ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"type Note {\n  id: ID!\n  title: String!\n  description: String\n  comments: [Comment]!\n}\n")),Object(o.b)("p",null,"Following mutation can be used"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n    deleteNote(input: MutateNoteInput!): Note!\n}\n")),Object(o.b)("p",null,"Input type for update operation looks as follows"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"input MutateNoteInput {\n  # ID field is required for update\n  id: ID!\n  title: String\n  description: String\n}\n")),Object(o.b)("h2",{id:"variations"},"Variations"),Object(o.b)("h3",{id:"contidional-deletion"},"Contidional deletion"),Object(o.b)("p",null,"Conditional deletion can be enabled for the cases where we want to perform deletion\noperation only after meeting certain criteria"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  deleteNote(input: MutateNoteInput!, where: DeleteNoteFilter): Note!\n}\n")),Object(o.b)("p",null,"Input type for filtering has all fields marked as optional"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"input DeleteNoteFilter {\n  title: StringInput\n  description: StringInput\n}\n")))}d.isMDXComponent=!0}}]);