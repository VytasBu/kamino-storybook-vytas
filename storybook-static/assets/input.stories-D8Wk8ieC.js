import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as o}from"./input-CO4-_412.js";import{L as d}from"./label-D7fUjf3M.js";import"./iframe-CQYA1bKh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-Brvu00Jb.js";import"./index-B7vMyP4j.js";import"./index-B_jy3GnT.js";import"./index-nhtlCHlS.js";const b={title:"Components/Input",component:o,tags:["autodocs"],args:{placeholder:"Enter text..."}},a={},r={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(d,{htmlFor:"email",children:"Email"}),e.jsx(o,{type:"email",id:"email",placeholder:"Email"})]})},s={args:{type:"file"}},t={args:{type:"password",placeholder:"Password"}},i={args:{disabled:!0,value:"Disabled input"}},l={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(d,{htmlFor:"invalid-input",children:"Email"}),e.jsx(o,{id:"invalid-input",type:"email",placeholder:"Email","aria-invalid":"true"}),e.jsx("p",{className:"text-xs text-destructive",children:"Please enter a valid email."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Password'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="invalid-input">Email</Label>
      <Input id="invalid-input" type="email" placeholder="Email" aria-invalid="true" />
      <p className="text-xs text-destructive">Please enter a valid email.</p>
    </div>
}`,...l.parameters?.docs?.source}}};const f=["Default","WithLabel","File","Password","Disabled","Invalid"];export{a as Default,i as Disabled,s as File,l as Invalid,t as Password,r as WithLabel,f as __namedExportsOrder,b as default};
