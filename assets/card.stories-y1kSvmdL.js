import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as o,a as i,b as l,c as d,d as c,e as p}from"./card-BnOyT1gB.js";import{B as s}from"./button-6PmRNPs2.js";import{I as m}from"./input-CO4-_412.js";import{L as u}from"./label-D7fUjf3M.js";import{S as n}from"./statistic-card-DwCAtziw.js";import"./iframe-CQYA1bKh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-LHNt3CwB.js";import"./index-nhtlCHlS.js";import"./index-Brvu00Jb.js";import"./index-B7vMyP4j.js";import"./index-B_jy3GnT.js";const L={title:"Components/Card",component:o,tags:["autodocs"]},a={render:()=>e.jsxs(o,{className:"w-[350px]",children:[e.jsxs(i,{children:[e.jsx(l,{children:"Create project"}),e.jsx(d,{children:"Deploy your new project in one-click."})]}),e.jsx(c,{children:e.jsx("div",{className:"grid w-full gap-4",children:e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(u,{htmlFor:"card-name",children:"Name"}),e.jsx(m,{id:"card-name",placeholder:"Name of your project"})]})})}),e.jsxs(p,{className:"flex justify-between",children:[e.jsx(s,{variant:"outline",children:"Cancel"}),e.jsx(s,{children:"Deploy"})]})]})},r={render:()=>e.jsx(n,{title:"Total Revenue",subtitle:"Last 30 days",value:"$45,231.89",additionalData:{label:"Change",value:"+20.1%",variant:"success"}})},t={render:()=>e.jsx(n,{title:"Active Users",subtitle:"Current period",value:"2,350",additionalData:{label:"vs last period",value:"2,100"}})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="card-name">Name</Label>
            <Input id="card-name" placeholder="Name of your project" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <StatisticCard title="Total Revenue" subtitle="Last 30 days" value="$45,231.89" additionalData={{
    label: "Change",
    value: "+20.1%",
    variant: "success"
  }} />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <StatisticCard title="Active Users" subtitle="Current period" value="2,350" additionalData={{
    label: "vs last period",
    value: "2,100"
  }} />
}`,...t.parameters?.docs?.source}}};const F=["Default","Statistic","StatisticDefault"];export{a as Default,r as Statistic,t as StatisticDefault,F as __namedExportsOrder,L as default};
