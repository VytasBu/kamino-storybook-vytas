import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as s,b as l,c as m,d as n,e as p,f as d}from"./dialog-B4bQmTS8.js";import{B as r}from"./button-DFO83297.js";import{I as i}from"./input-O3b8Sfi7.js";import{L as t}from"./label-BulBgvjT.js";import"./iframe-Dzj-mL87.js";import"./preload-helper-nsbjtKhx.js";import"./utils-BQHNewu7.js";import"./x-Bk4p30Gf.js";import"./createLucideIcon-CCIZXRp2.js";import"./index-Cf2tdiIn.js";import"./index-Dc_FVRD7.js";import"./index-CzgvWNzs.js";import"./index-wPz2Q4sg.js";import"./index-CPAKTMIc.js";import"./index-CqoRZGYm.js";import"./index-CglMG92_.js";import"./index-D60QFfpg.js";import"./index-Dq1zw_lr.js";import"./index-xyRhfqyB.js";import"./index-CqjaA1iE.js";import"./index-DGXtXeRM.js";import"./index-BM82IfsW.js";import"./index-7AMwYvUX.js";import"./index-3ownK4fR.js";import"./index-LHNt3CwB.js";const P={title:"Components/Dialog",component:o,tags:["autodocs"]},a={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Open Dialog"})}),e.jsxs(l,{className:"sm:max-w-[425px]",children:[e.jsxs(m,{children:[e.jsx(n,{children:"Edit profile"}),e.jsx(p,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(t,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(i,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(t,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(i,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(d,{children:e.jsx(r,{type:"submit",children:"Save changes"})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
