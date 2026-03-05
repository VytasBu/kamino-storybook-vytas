import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as s,T as a,a as r}from"./toggle-group-D89rlsgV.js";import"./iframe-BOiRAv0Y.js";import"./preload-helper-nsbjtKhx.js";import"./utils-BQHNewu7.js";import"./index-LHNt3CwB.js";import"./index-Dc_FVRD7.js";import"./index-B2hW_upo.js";import"./index-CUu-uf5O.js";import"./index-DW1YhDkg.js";import"./index-BvDNspiT.js";import"./index-Cw8MoOiG.js";import"./index-Bl2w7KNb.js";import"./index-BoQO47Gq.js";import"./index-mjmkYBIp.js";import"./index-CCVTgWy3.js";import"./index-BfZ742sb.js";import"./index-DydpsTYg.js";import"./index-CLkFjz_Q.js";const C={title:"Components/Toggle",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]}}},o={args:{children:"Toggle"}},t={args:{variant:"outline",children:"Outline"}},l={render:()=>e.jsxs(a,{type:"multiple",children:[e.jsx(r,{value:"bold",children:"B"}),e.jsx(r,{value:"italic",children:"I"}),e.jsx(r,{value:"underline",children:"U"})]})},n={render:()=>e.jsxs(a,{type:"single",defaultValue:"center",children:[e.jsx(r,{value:"left",children:"Left"}),e.jsx(r,{value:"center",children:"Center"}),e.jsx(r,{value:"right",children:"Right"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
