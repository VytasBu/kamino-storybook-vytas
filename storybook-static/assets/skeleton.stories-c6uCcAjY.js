import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as l}from"./utils-BQHNewu7.js";function s({className:n,...o}){return e.jsx("div",{"data-slot":"skeleton",className:l("animate-pulse rounded-md bg-accent",n),...o})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const m={title:"Components/Skeleton",component:s,tags:["autodocs"]},a={render:()=>e.jsx(s,{className:"h-4 w-[250px]"})},r={render:()=>e.jsxs("div",{className:"flex flex-col space-y-3",children:[e.jsx(s,{className:"h-[125px] w-[250px] rounded-xl"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[250px]"}),e.jsx(s,{className:"h-4 w-[200px]"})]})]})},c={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-[90%]"}),e.jsx(s,{className:"h-4 w-[75%]"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton className="h-4 w-[250px]" />
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[75%]" />
    </div>
}`,...c.parameters?.docs?.source}}};const p=["Default","Card","TextLines"];export{r as Card,a as Default,c as TextLines,p as __namedExportsOrder,m as default};
