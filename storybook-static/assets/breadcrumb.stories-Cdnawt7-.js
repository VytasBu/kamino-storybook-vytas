import{j as r}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CQYA1bKh.js";import{c as m}from"./utils-BQHNewu7.js";import{C as B}from"./chevron-right-BXg2FG0S.js";import{E as x}from"./ellipsis-D0YMTpei.js";import{S as h}from"./index-nhtlCHlS.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BQJuwl_y.js";function o({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function u({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:m("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5",e),...a})}function n({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:m("inline-flex items-center gap-1.5",e),...a})}function t({asChild:e,className:a,...i}){const p=e?h:"a";return r.jsx(p,{"data-slot":"breadcrumb-link",className:m("transition-colors hover:text-foreground",a),...i})}function l({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:m("font-normal text-foreground",e),...a})}function s({children:e,className:a,...i}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:m("[&>svg]:size-3.5",a),...i,children:e??r.jsx(B,{})})}function b({className:e,...a}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:m("flex size-9 items-center justify-center",e),...a,children:[r.jsx(x,{className:"size-4"}),r.jsx("span",{className:"sr-only",children:"More"})]})}o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const S={title:"Components/Breadcrumb",component:o,tags:["autodocs"]},d={render:()=>r.jsx(o,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(t,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(t,{href:"/components",children:"Components"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(l,{children:"Breadcrumb"})})]})})},c={render:()=>r.jsx(o,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(t,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(b,{})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(t,{href:"/components",children:"Components"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(l,{children:"Breadcrumb"})})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...c.parameters?.docs?.source}}};const y=["Default","WithEllipsis"];export{d as Default,c as WithEllipsis,y as __namedExportsOrder,S as default};
