import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as s,b as l,c as m,d as n,e as p,f as d}from"./dialog-CLnvvkvr.js";import{B as r}from"./button-CwDoq1bF.js";import{I as i}from"./input-CxU6Y9uy.js";import{L as t}from"./label-DtLWP7om.js";import"./iframe-BOiRAv0Y.js";import"./preload-helper-nsbjtKhx.js";import"./utils-BQHNewu7.js";import"./x-C9qW0LhP.js";import"./createLucideIcon-BA63NghE.js";import"./index-IH6yl7d_.js";import"./index-Dc_FVRD7.js";import"./index-Bl2w7KNb.js";import"./index-BoQO47Gq.js";import"./index-BfZ742sb.js";import"./index-CUu-uf5O.js";import"./index-B2hW_upo.js";import"./index-C551brUX.js";import"./index-DW1YhDkg.js";import"./index-BvDNspiT.js";import"./index-Cw8MoOiG.js";import"./index-DydpsTYg.js";import"./index-BTz_YFMf.js";import"./index-Dwcy55Rx.js";import"./index-DdxtLXFR.js";import"./index-LHNt3CwB.js";const P={title:"Components/Dialog",component:o,tags:["autodocs"]},a={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Open Dialog"})}),e.jsxs(l,{className:"sm:max-w-[425px]",children:[e.jsxs(m,{children:[e.jsx(n,{children:"Edit profile"}),e.jsx(p,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(t,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(i,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(t,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(i,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(d,{children:e.jsx(r,{type:"submit",children:"Save changes"})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
