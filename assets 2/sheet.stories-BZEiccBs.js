import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CQYA1bKh.js";import{c as s}from"./utils-BQHNewu7.js";import{X as N}from"./x-k9M1RaUo.js";import{R as C,T,C as b,b as f,a as y,D as B,P as _,O as D}from"./index-CeStPPEu.js";import{B as r}from"./button-6PmRNPs2.js";import{I as w}from"./input-CO4-_412.js";import{L as I}from"./label-D7fUjf3M.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BQJuwl_y.js";import"./index-Dc_FVRD7.js";import"./index-nhtlCHlS.js";import"./index-2ox2otwn.js";import"./index-CAOaTK7T.js";import"./index-BsL72y-_.js";import"./index-B8qRJwtU.js";import"./index-DHV5Rfx0.js";import"./index-Brvu00Jb.js";import"./index-B7vMyP4j.js";import"./index-B_jy3GnT.js";import"./index-BasqQ5e6.js";import"./index-B3l4VJXy.js";import"./index-BKRnHZPa.js";import"./index-iTr_kVCA.js";import"./index-LHNt3CwB.js";function n({...t}){return e.jsx(C,{"data-slot":"sheet",...t})}function a({...t}){return e.jsx(T,{"data-slot":"sheet-trigger",...t})}function g({...t}){return e.jsx(f,{"data-slot":"sheet-close",...t})}function H({...t}){return e.jsx(_,{"data-slot":"sheet-portal",...t})}function F({className:t,...o}){return e.jsx(D,{"data-slot":"sheet-overlay",className:s("fixed inset-0 z-50 bg-foreground/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",t),...o})}function i({className:t,children:o,side:c="right",showCloseButton:j=!0,...v}){return e.jsxs(H,{children:[e.jsx(F,{}),e.jsxs(b,{"data-slot":"sheet-content",className:s("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",c==="right"&&"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",c==="left"&&"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",c==="top"&&"inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",c==="bottom"&&"inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",t),...v,children:[o,j&&e.jsxs(f,{className:"absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(N,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function d({className:t,...o}){return e.jsx("div",{"data-slot":"sheet-header",className:s("flex flex-col gap-1.5 p-4",t),...o})}function x({className:t,...o}){return e.jsx("div",{"data-slot":"sheet-footer",className:s("mt-auto flex flex-col gap-2 p-4",t),...o})}function l({className:t,...o}){return e.jsx(y,{"data-slot":"sheet-title",className:s("font-semibold text-foreground",t),...o})}function h({className:t,...o}){return e.jsx(B,{"data-slot":"sheet-description",className:s("text-sm text-muted-foreground",t),...o})}n.__docgenInfo={description:"",methods:[],displayName:"Sheet"};a.__docgenInfo={description:"",methods:[],displayName:"SheetTrigger"};g.__docgenInfo={description:"",methods:[],displayName:"SheetClose"};i.__docgenInfo={description:"",methods:[],displayName:"SheetContent",props:{side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};d.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};x.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"};l.__docgenInfo={description:"",methods:[],displayName:"SheetTitle"};h.__docgenInfo={description:"",methods:[],displayName:"SheetDescription"};const ne={title:"Components/Sheet",component:n,tags:["autodocs"]},m={render:()=>e.jsxs(n,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Open Sheet"})}),e.jsxs(i,{children:[e.jsxs(d,{children:[e.jsx(l,{children:"Edit profile"}),e.jsx(h,{children:"Make changes to your profile."})]}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(I,{htmlFor:"sheet-name",className:"text-right",children:"Name"}),e.jsx(w,{id:"sheet-name",defaultValue:"Pedro",className:"col-span-3"})]})}),e.jsx(x,{children:e.jsx(g,{asChild:!0,children:e.jsx(r,{type:"submit",children:"Save"})})})]})]})},p={render:()=>e.jsxs(n,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Left Sheet"})}),e.jsx(i,{side:"left",children:e.jsxs(d,{children:[e.jsx(l,{children:"Navigation"}),e.jsx(h,{children:"Browse sections."})]})})]})},u={render:()=>e.jsxs(n,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Top Sheet"})}),e.jsx(i,{side:"top",children:e.jsxs(d,{children:[e.jsx(l,{children:"Notification"}),e.jsx(h,{children:"You have new updates."})]})})]})},S={render:()=>e.jsxs(n,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Bottom Sheet"})}),e.jsx(i,{side:"bottom",children:e.jsxs(d,{children:[e.jsx(l,{children:"Footer Sheet"}),e.jsx(h,{children:"Actions panel."})]})})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="sheet-name" className="text-right">Name</Label>
            <Input id="sheet-name" defaultValue="Pedro" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse sections.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>You have new updates.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Footer Sheet</SheetTitle>
          <SheetDescription>Actions panel.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...S.parameters?.docs?.source}}};const re=["Default","Left","Top","Bottom"];export{S as Bottom,m as Default,p as Left,u as Top,re as __namedExportsOrder,ne as default};
