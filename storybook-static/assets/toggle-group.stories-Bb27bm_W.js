import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as i,a as l}from"./toggle-group-Cq0r9xbu.js";import"./iframe-Dzj-mL87.js";import"./preload-helper-nsbjtKhx.js";import"./utils-BQHNewu7.js";import"./index-LHNt3CwB.js";import"./index-Dc_FVRD7.js";import"./index-CglMG92_.js";import"./index-CqoRZGYm.js";import"./index-Dq1zw_lr.js";import"./index-xyRhfqyB.js";import"./index-CqjaA1iE.js";import"./index-CzgvWNzs.js";import"./index-wPz2Q4sg.js";import"./index-CjB5D-83.js";import"./index-BICdXHz1.js";import"./index-CPAKTMIc.js";import"./index-DGXtXeRM.js";import"./index-YNv9AqCf.js";const B={title:"Components/ToggleGroup",component:i,tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"]},variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]},spacing:{control:"number"}}},o={render:()=>e.jsxs(i,{type:"single",defaultValue:"bold",children:[e.jsx(l,{value:"bold",children:"Bold"}),e.jsx(l,{value:"italic",children:"Italic"}),e.jsx(l,{value:"underline",children:"Underline"})]})},r={render:()=>e.jsxs(i,{type:"single",variant:"outline",defaultValue:"italic",children:[e.jsx(l,{value:"bold",children:"Bold"}),e.jsx(l,{value:"italic",children:"Italic"}),e.jsx(l,{value:"underline",children:"Underline"})]})},t={render:()=>e.jsxs(i,{type:"multiple",defaultValue:["bold","italic"],children:[e.jsx(l,{value:"bold",children:"Bold"}),e.jsx(l,{value:"italic",children:"Italic"}),e.jsx(l,{value:"underline",children:"Underline"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="bold">
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" variant="outline" defaultValue="italic">
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
}`,...t.parameters?.docs?.source}}};const U=["Default","Outline","Multiple"];export{o as Default,t as Multiple,r as Outline,U as __namedExportsOrder,B as default};
