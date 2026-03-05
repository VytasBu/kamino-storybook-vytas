import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as s}from"./button-DFO83297.js";import"./iframe-Dzj-mL87.js";import"./preload-helper-nsbjtKhx.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-CzgvWNzs.js";const D={title:"Components/Button",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link","dashed"]},size:{control:"select",options:["default","xs","sm","lg","icon","icon-xsm","icon-sm","icon-lg"]},loading:{control:"boolean"},disabled:{control:"boolean"}},args:{children:"Button",variant:"default",size:"default"}},r={},t={args:{variant:"destructive",children:"Delete"}},n={args:{variant:"outline",children:"Outline"}},o={args:{variant:"secondary",children:"Secondary"}},i={args:{variant:"ghost",children:"Ghost"}},d={args:{variant:"link",children:"Link"}},c={args:{variant:"dashed",children:"Dashed"}},l={args:{loading:!0,children:"Loading"}},u={args:{disabled:!0,children:"Disabled"}},m={args:{variant:"outline",size:"icon",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"M12 5v14"})]}),"aria-label":"Add"}},p={render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:["default","destructive","outline","secondary","ghost","link","dashed"].map(a=>e.jsx(s,{variant:a,children:a},a))})},g={render:()=>e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:["xs","sm","default","lg"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:a,children:a}),e.jsx("span",{className:"text-xs text-muted-foreground",children:a==="xs"?"16px":a==="sm"?"28px":a==="default"?"32px":"36px"})]},a))})},x={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(s,{children:"Default"}),e.jsx(s,{disabled:!0,children:"Disabled"}),e.jsx(s,{loading:!0,children:"Loading"})]})},h={name:"Full Matrix (7 variants x 4 sizes)",render:()=>e.jsx("div",{className:"space-y-4",children:["default","destructive","outline","secondary","ghost","link","dashed"].map(a=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-24 text-xs text-muted-foreground",children:a}),["xs","sm","default","lg"].map(v=>e.jsx(s,{variant:a,size:v,children:"Button"},v))]},a))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Delete'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dashed',
    children: 'Dashed'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Loading'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'icon',
    children: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>,
    'aria-label': 'Add'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      {(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'dashed'] as const).map(variant => <Button key={variant} variant={variant}>
          {variant}
        </Button>)}
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      {(['xs', 'sm', 'default', 'lg'] as const).map(size => <div key={size} className="flex flex-col items-center gap-1">
          <Button size={size}>{size}</Button>
          <span className="text-xs text-muted-foreground">{size === 'xs' ? '16px' : size === 'sm' ? '28px' : size === 'default' ? '32px' : '36px'}</span>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Full Matrix (7 variants x 4 sizes)',
  render: () => <div className="space-y-4">
      {(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'dashed'] as const).map(variant => <div key={variant} className="flex items-center gap-3">
          <span className="w-24 text-xs text-muted-foreground">{variant}</span>
          {(['xs', 'sm', 'default', 'lg'] as const).map(size => <Button key={size} variant={variant} size={size}>
              Button
            </Button>)}
        </div>)}
    </div>
}`,...h.parameters?.docs?.source}}};const N=["Default","Destructive","Outline","Secondary","Ghost","Link","Dashed","Loading","Disabled","IconButton","AllVariants","AllSizes","AllStates","FullMatrix"];export{g as AllSizes,x as AllStates,p as AllVariants,c as Dashed,r as Default,t as Destructive,u as Disabled,h as FullMatrix,i as Ghost,m as IconButton,d as Link,l as Loading,n as Outline,o as Secondary,N as __namedExportsOrder,D as default};
