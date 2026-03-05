import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as s,T as a,a as r}from"./toggle-group-Cq0r9xbu.js";import"./iframe-Dzj-mL87.js";import"./preload-helper-nsbjtKhx.js";import"./utils-BQHNewu7.js";import"./index-LHNt3CwB.js";import"./index-Dc_FVRD7.js";import"./index-CglMG92_.js";import"./index-CqoRZGYm.js";import"./index-Dq1zw_lr.js";import"./index-xyRhfqyB.js";import"./index-CqjaA1iE.js";import"./index-CzgvWNzs.js";import"./index-wPz2Q4sg.js";import"./index-CjB5D-83.js";import"./index-BICdXHz1.js";import"./index-CPAKTMIc.js";import"./index-DGXtXeRM.js";import"./index-YNv9AqCf.js";const C={title:"Components/Toggle",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]}}},o={args:{children:"Toggle"}},t={args:{variant:"outline",children:"Outline"}},l={render:()=>e.jsxs(a,{type:"multiple",children:[e.jsx(r,{value:"bold",children:"B"}),e.jsx(r,{value:"italic",children:"I"}),e.jsx(r,{value:"underline",children:"U"})]})},n={render:()=>e.jsxs(a,{type:"single",defaultValue:"center",children:[e.jsx(r,{value:"left",children:"Left"}),e.jsx(r,{value:"center",children:"Center"}),e.jsx(r,{value:"right",children:"Right"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Toggle'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
}`,...n.parameters?.docs?.source}}};const R=["Default","Outline","Group","SingleGroup"];export{o as Default,l as Group,t as Outline,n as SingleGroup,R as __namedExportsOrder,C as default};
