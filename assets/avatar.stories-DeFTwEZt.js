import{j as a}from"./jsx-runtime-u17CrQMm.js";import{A as e,a as i,b as s,c as p,d as m,e as x}from"./avatar-DIDKMqE3.js";import"./iframe-Dzj-mL87.js";import"./preload-helper-nsbjtKhx.js";import"./utils-BQHNewu7.js";import"./index-wPz2Q4sg.js";import"./index-DGXtXeRM.js";import"./index-CqoRZGYm.js";import"./index-Dq1zw_lr.js";import"./index-xyRhfqyB.js";import"./index-CqjaA1iE.js";import"./index-CzgvWNzs.js";import"./index-AZEMKRF_.js";const S={title:"Components/Avatar",component:e,tags:["autodocs"],argTypes:{size:{control:"select",options:[5,6,8,10,12]}}},t={render:r=>a.jsxs(e,{...r,children:[a.jsx(i,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(s,{children:"CN"})]})},n={render:r=>a.jsx(e,{...r,children:a.jsx(s,{children:"CN"})})},c={render:()=>a.jsx("div",{className:"flex items-end gap-4",children:[5,6,8,10,12].map(r=>a.jsxs("div",{className:"flex flex-col items-center gap-1",children:[a.jsxs(e,{size:r,children:[a.jsx(i,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(s,{children:"CN"})]}),a.jsxs("span",{className:"text-xs text-muted-foreground",children:[r," (",r*4,"px)"]})]},r))})},l={render:()=>a.jsx("div",{className:"flex items-end gap-4",children:[5,6,8,10,12].map(r=>a.jsxs("div",{className:"flex flex-col items-center gap-1",children:[a.jsx(e,{size:r,children:a.jsx(s,{children:"CN"})}),a.jsxs("span",{className:"text-xs text-muted-foreground",children:[r," (",r*4,"px)"]})]},r))})},o={render:()=>a.jsxs(e,{size:10,children:[a.jsx(i,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(s,{children:"CN"}),a.jsx(x,{})]})},d={render:()=>a.jsxs(p,{children:[a.jsxs(e,{size:8,children:[a.jsx(i,{src:"https://github.com/shadcn.png",alt:"User 1"}),a.jsx(s,{children:"U1"})]}),a.jsx(e,{size:8,children:a.jsx(s,{children:"U2"})}),a.jsx(e,{size:8,children:a.jsx(s,{children:"U3"})}),a.jsx(m,{children:"+5"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args}>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      {([5, 6, 8, 10, 12] as const).map(size => <div key={size} className="flex flex-col items-center gap-1">
          <Avatar size={size}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{size} ({size * 4}px)</span>
        </div>)}
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      {([5, 6, 8, 10, 12] as const).map(size => <div key={size} className="flex flex-col items-center gap-1">
          <Avatar size={size}>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{size} ({size * 4}px)</span>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar size={10}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge />
    </Avatar>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup>
      <Avatar size={8}>
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar size={8}>
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar size={8}>
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
}`,...d.parameters?.docs?.source}}};const G=["Default","Fallback","AllSizes","AllSizesFallback","WithBadge","Group"];export{c as AllSizes,l as AllSizesFallback,t as Default,n as Fallback,d as Group,o as WithBadge,G as __namedExportsOrder,S as default};
