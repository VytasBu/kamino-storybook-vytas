import{j as a}from"./jsx-runtime-u17CrQMm.js";import{B as s}from"./badge-DqJV8chQ.js";import"./iframe-CQYA1bKh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-nhtlCHlS.js";const A={title:"Components/Badge",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","success","warning","accent"]},appearance:{control:"select",options:["filled","outline","soft"]},size:{control:"select",options:["md","sm"]}},args:{children:"Badge"}},t={},c={args:{variant:"destructive"}},n={args:{variant:"success"}},i={args:{variant:"warning"}},o={args:{variant:"accent"}},l={args:{appearance:"outline"}},d={args:{appearance:"soft"}},p={args:{size:"sm",children:"Small"}},m={name:"All Variants (Filled)",render:()=>a.jsx("div",{className:"flex flex-wrap gap-2",children:["default","destructive","success","warning","accent"].map(e=>a.jsx(s,{variant:e,appearance:"filled",children:e},e))})},u={name:"All Variants (Outline)",render:()=>a.jsx("div",{className:"flex flex-wrap gap-2",children:["default","destructive","success","warning","accent"].map(e=>a.jsx(s,{variant:e,appearance:"outline",children:e},e))})},g={name:"All Variants (Soft)",render:()=>a.jsx("div",{className:"flex flex-wrap gap-2",children:["default","destructive","success","warning","accent"].map(e=>a.jsx(s,{variant:e,appearance:"soft",children:e},e))})},v={name:"Full Matrix (5 variants x 3 styles x 2 sizes)",render:()=>a.jsx("div",{className:"space-y-6",children:["filled","outline","soft"].map(e=>a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-sm font-medium capitalize text-muted-foreground",children:e}),a.jsx("div",{className:"flex flex-wrap gap-2",children:["default","destructive","success","warning","accent"].map(r=>a.jsxs("div",{className:"flex flex-col items-center gap-1",children:[a.jsx(s,{variant:r,appearance:e,size:"md",children:r}),a.jsx(s,{variant:r,appearance:e,size:"sm",children:r})]},r))})]},e))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outline'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'soft'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'All Variants (Filled)',
  render: () => <div className="flex flex-wrap gap-2">
      {(['default', 'destructive', 'success', 'warning', 'accent'] as const).map(variant => <Badge key={variant} variant={variant} appearance="filled">{variant}</Badge>)}
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'All Variants (Outline)',
  render: () => <div className="flex flex-wrap gap-2">
      {(['default', 'destructive', 'success', 'warning', 'accent'] as const).map(variant => <Badge key={variant} variant={variant} appearance="outline">{variant}</Badge>)}
    </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'All Variants (Soft)',
  render: () => <div className="flex flex-wrap gap-2">
      {(['default', 'destructive', 'success', 'warning', 'accent'] as const).map(variant => <Badge key={variant} variant={variant} appearance="soft">{variant}</Badge>)}
    </div>
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Full Matrix (5 variants x 3 styles x 2 sizes)',
  render: () => <div className="space-y-6">
      {(['filled', 'outline', 'soft'] as const).map(appearance => <div key={appearance} className="space-y-2">
          <h3 className="text-sm font-medium capitalize text-muted-foreground">{appearance}</h3>
          <div className="flex flex-wrap gap-2">
            {(['default', 'destructive', 'success', 'warning', 'accent'] as const).map(variant => <div key={variant} className="flex flex-col items-center gap-1">
                <Badge variant={variant} appearance={appearance} size="md">{variant}</Badge>
                <Badge variant={variant} appearance={appearance} size="sm">{variant}</Badge>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}};const B=["Default","Destructive","Success","Warning","Accent","Outline","Soft","Small","AllVariantsFilled","AllVariantsOutline","AllVariantsSoft","FullMatrix"];export{o as Accent,m as AllVariantsFilled,u as AllVariantsOutline,g as AllVariantsSoft,t as Default,c as Destructive,v as FullMatrix,l as Outline,p as Small,d as Soft,n as Success,i as Warning,B as __namedExportsOrder,A as default};
