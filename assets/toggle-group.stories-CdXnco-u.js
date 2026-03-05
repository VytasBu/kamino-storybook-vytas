import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as i,a as l}from"./toggle-group-D89rlsgV.js";import"./iframe-BOiRAv0Y.js";import"./preload-helper-nsbjtKhx.js";import"./utils-BQHNewu7.js";import"./index-LHNt3CwB.js";import"./index-Dc_FVRD7.js";import"./index-B2hW_upo.js";import"./index-CUu-uf5O.js";import"./index-DW1YhDkg.js";import"./index-BvDNspiT.js";import"./index-Cw8MoOiG.js";import"./index-Bl2w7KNb.js";import"./index-BoQO47Gq.js";import"./index-mjmkYBIp.js";import"./index-CCVTgWy3.js";import"./index-BfZ742sb.js";import"./index-DydpsTYg.js";import"./index-CLkFjz_Q.js";const B={title:"Components/ToggleGroup",component:i,tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"]},variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]},spacing:{control:"number"}}},o={render:()=>e.jsxs(i,{type:"single",defaultValue:"bold",children:[e.jsx(l,{value:"bold",children:"Bold"}),e.jsx(l,{value:"italic",children:"Italic"}),e.jsx(l,{value:"underline",children:"Underline"})]})},r={render:()=>e.jsxs(i,{type:"single",variant:"outline",defaultValue:"italic",children:[e.jsx(l,{value:"bold",children:"Bold"}),e.jsx(l,{value:"italic",children:"Italic"}),e.jsx(l,{value:"underline",children:"Underline"})]})},t={render:()=>e.jsxs(i,{type:"multiple",defaultValue:["bold","italic"],children:[e.jsx(l,{value:"bold",children:"Bold"}),e.jsx(l,{value:"italic",children:"Italic"}),e.jsx(l,{value:"underline",children:"Underline"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
