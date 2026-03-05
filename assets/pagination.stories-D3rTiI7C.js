import{j as n}from"./jsx-runtime-u17CrQMm.js";import"./iframe-BOiRAv0Y.js";import{c as o}from"./utils-BQHNewu7.js";import{b as f}from"./button-CwDoq1bF.js";import{C as P}from"./chevron-left-DoQ89EUf.js";import{E as h}from"./ellipsis-DLgv91Og.js";import{C as u}from"./chevron-right-B09h4xew.js";import"./preload-helper-nsbjtKhx.js";import"./index-LHNt3CwB.js";import"./index-Bl2w7KNb.js";import"./createLucideIcon-BA63NghE.js";function r({className:i,...a}){return n.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o("mx-auto flex w-full justify-center",i),...a})}function l({className:i,...a}){return n.jsx("ul",{"data-slot":"pagination-content",className:o("flex flex-row items-center gap-1",i),...a})}function e({...i}){return n.jsx("li",{"data-slot":"pagination-item",...i})}function t({className:i,isActive:a,size:g="icon",...p}){return n.jsx("a",{"aria-current":a?"page":void 0,"data-slot":"pagination-link","data-active":a,className:o(f({variant:a?"outline":"ghost",size:g}),i),...p})}function c({className:i,...a}){return n.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 px-2.5 sm:pl-2.5",i),...a,children:[n.jsx(P,{}),n.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function d({className:i,...a}){return n.jsxs(t,{"aria-label":"Go to next page",size:"default",className:o("gap-1 px-2.5 sm:pr-2.5",i),...a,children:[n.jsx("span",{className:"hidden sm:block",children:"Next"}),n.jsx(u,{})]})}function m({className:i,...a}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("flex size-9 items-center justify-center",i),...a,children:[n.jsx(h,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]})}r.__docgenInfo={description:"",methods:[],displayName:"Pagination"};l.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};e.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};c.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const E={title:"Components/Pagination",component:r,tags:["autodocs"]},s={render:()=>n.jsx(r,{children:n.jsxs(l,{children:[n.jsx(e,{children:n.jsx(c,{href:"#"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(e,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(e,{children:n.jsx(m,{})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"10"})}),n.jsx(e,{children:n.jsx(d,{href:"#"})})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...s.parameters?.docs?.source}}};const z=["Default"];export{s as Default,z as __namedExportsOrder,E as default};
