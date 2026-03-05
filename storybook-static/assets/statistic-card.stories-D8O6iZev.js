import{j as a}from"./jsx-runtime-u17CrQMm.js";import{S as i}from"./statistic-card-DL6UfgnF.js";import"./utils-BQHNewu7.js";import"./card-BN8ZD0m-.js";import"./iframe-Dzj-mL87.js";import"./preload-helper-nsbjtKhx.js";const v={title:"Kamino/Statistic Card",component:i,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},value:{control:"text"}},args:{title:"Total Revenue",value:"$45,231.89"}},t={},e={args:{title:"Total Revenue",subtitle:"Last 30 days",value:"$45,231.89"}},s={args:{title:"Total Revenue",subtitle:"Last 30 days",value:"$45,231.89",additionalData:{label:"Change",value:"+20.1%",variant:"success"}}},r={render:()=>a.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3",children:[a.jsx(i,{title:"Total Revenue",subtitle:"Last 30 days",value:"$45,231.89",additionalData:{label:"Change",value:"+20.1%",variant:"success"}}),a.jsx(i,{title:"Active Users",subtitle:"Current period",value:"2,350",additionalData:{label:"vs last period",value:"2,100"}}),a.jsx(i,{title:"Conversion Rate",value:"12.5%"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Total Revenue',
    subtitle: 'Last 30 days',
    value: '$45,231.89'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Total Revenue',
    subtitle: 'Last 30 days',
    value: '$45,231.89',
    additionalData: {
      label: 'Change',
      value: '+20.1%',
      variant: 'success'
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <StatisticCard title="Total Revenue" subtitle="Last 30 days" value="$45,231.89" additionalData={{
      label: 'Change',
      value: '+20.1%',
      variant: 'success'
    }} />
      <StatisticCard title="Active Users" subtitle="Current period" value="2,350" additionalData={{
      label: 'vs last period',
      value: '2,100'
    }} />
      <StatisticCard title="Conversion Rate" value="12.5%" />
    </div>
}`,...r.parameters?.docs?.source}}};const m=["Default","WithSubtitle","WithAdditionalData","AllVariants"];export{r as AllVariants,t as Default,s as WithAdditionalData,e as WithSubtitle,m as __namedExportsOrder,v as default};
