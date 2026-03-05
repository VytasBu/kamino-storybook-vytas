import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as s,T as a,a as r}from"./toggle-group-CLr_c8Cr.js";import"./iframe-CQYA1bKh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-LHNt3CwB.js";import"./index-Dc_FVRD7.js";import"./index-B8qRJwtU.js";import"./index-BsL72y-_.js";import"./index-Brvu00Jb.js";import"./index-B7vMyP4j.js";import"./index-B_jy3GnT.js";import"./index-nhtlCHlS.js";import"./index-2ox2otwn.js";import"./index-DjOMLzjX.js";import"./index-CqJUJ-mp.js";import"./index-CAOaTK7T.js";import"./index-BasqQ5e6.js";import"./index-CbIEmcZQ.js";const C={title:"Components/Toggle",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]}}},o={args:{children:"Toggle"}},t={args:{variant:"outline",children:"Outline"}},l={render:()=>e.jsxs(a,{type:"multiple",children:[e.jsx(r,{value:"bold",children:"B"}),e.jsx(r,{value:"italic",children:"I"}),e.jsx(r,{value:"underline",children:"U"})]})},n={render:()=>e.jsxs(a,{type:"single",defaultValue:"center",children:[e.jsx(r,{value:"left",children:"Left"}),e.jsx(r,{value:"center",children:"Center"}),e.jsx(r,{value:"right",children:"Right"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
