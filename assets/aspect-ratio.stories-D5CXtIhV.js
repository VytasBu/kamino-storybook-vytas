import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-CQYA1bKh.js";import{P as c}from"./index-Brvu00Jb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7vMyP4j.js";import"./index-B_jy3GnT.js";import"./index-nhtlCHlS.js";var m="AspectRatio",o=p.forwardRef((s,a)=>{const{ratio:i=1/1,style:n,...d}=s;return t.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/i}%`},"data-radix-aspect-ratio-wrapper":"",children:t.jsx(c.div,{...d,ref:a,style:{...n,position:"absolute",top:0,right:0,bottom:0,left:0}})})});o.displayName=m;var l=o;function r({...s}){return t.jsx(l,{"data-slot":"aspect-ratio",...s})}r.__docgenInfo={description:"",methods:[],displayName:"AspectRatio"};const g={title:"Components/AspectRatio",component:r,tags:["autodocs"]},e={render:()=>t.jsx("div",{className:"w-[450px]",children:t.jsx(r,{ratio:16/9,children:t.jsx("div",{className:"flex h-full w-full items-center justify-center rounded-md bg-muted",children:t.jsx("span",{className:"text-sm text-muted-foreground",children:"16:9"})})})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
          <span className="text-sm text-muted-foreground">16:9</span>
        </div>
      </AspectRatio>
    </div>
}`,...e.parameters?.docs?.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,g as default};
