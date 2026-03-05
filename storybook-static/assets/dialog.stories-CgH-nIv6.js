import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as s,b as l,c as m,d as n,e as p,f as d}from"./dialog-7MQitNQH.js";import{B as r}from"./button-6PmRNPs2.js";import{I as i}from"./input-CO4-_412.js";import{L as t}from"./label-D7fUjf3M.js";import"./iframe-CQYA1bKh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./x-k9M1RaUo.js";import"./createLucideIcon-BQJuwl_y.js";import"./index-CeStPPEu.js";import"./index-Dc_FVRD7.js";import"./index-nhtlCHlS.js";import"./index-2ox2otwn.js";import"./index-CAOaTK7T.js";import"./index-BsL72y-_.js";import"./index-B8qRJwtU.js";import"./index-DHV5Rfx0.js";import"./index-Brvu00Jb.js";import"./index-B7vMyP4j.js";import"./index-B_jy3GnT.js";import"./index-BasqQ5e6.js";import"./index-B3l4VJXy.js";import"./index-BKRnHZPa.js";import"./index-iTr_kVCA.js";import"./index-LHNt3CwB.js";const P={title:"Components/Dialog",component:o,tags:["autodocs"]},a={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Open Dialog"})}),e.jsxs(l,{className:"sm:max-w-[425px]",children:[e.jsxs(m,{children:[e.jsx(n,{children:"Edit profile"}),e.jsx(p,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(t,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(i,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(t,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(i,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(d,{children:e.jsx(r,{type:"submit",children:"Save changes"})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">Username</Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...a.parameters?.docs?.source}}};const U=["Default"];export{a as Default,U as __namedExportsOrder,P as default};
