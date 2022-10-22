"use strict";(self.webpackChunkmui_file_input=self.webpackChunkmui_file_input||[]).push([[888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),s=o,d=f["".concat(c,".").concat(s)]||f[s]||m[s]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="React Hook Form",l={unversionedId:"react-hook-form",id:"react-hook-form",title:"React Hook Form",description:"Here an example if you want to plug MuiFileInput to your form using React Hook Form.",source:"@site/docs/react-hook-form.md",sourceDirName:".",slug:"/react-hook-form",permalink:"/mui-file-input/docs/react-hook-form",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Playground",permalink:"/mui-file-input/docs/playground"}},c={},u=[],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-hook-form"},"React Hook Form"),(0,o.kt)("p",null,"Here an example if you want to plug ",(0,o.kt)("inlineCode",{parentName:"p"},"MuiFileInput")," to your form using ",(0,o.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"React Hook Form"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom";\nimport Button from "@mui/material/Button";\nimport { MuiFileInput } from "mui-file-input";\nimport { Controller, useForm } from "react-hook-form";\n\nconst App = () => {\n  const { control, handleSubmit } = useForm({\n    defaultValues: {\n      file: undefined\n    }\n  });\n\n  const onSubmit = (data) => {\n    alert(JSON.stringify(data));\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <Controller\n        name="file"\n        control={control}\n        render={({ field, fieldState }) => (\n          <MuiFileInput\n            {...field}\n            helperText={fieldState.invalid ? "File is invalid" : ""}\n            error={fieldState.invalid}\n          />\n        )}\n      />\n     <div>\n        <Button type="submit" variant="contained" sx={{ mt: 2 }}>\n          Submit\n        </Button>\n      </div>\n    </form>\n  )\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/react-hook-form-with-mui-file-input-llrkce?fontsize=14&hidenavigation=1&theme=dark"},(0,o.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit on CodeSandbox"}))))}m.isMDXComponent=!0}}]);