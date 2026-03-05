import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as a,a as l,b as t,c as o,d as r,e as m,f as i,g as d,h as c,i as n,j as u,k as x,l as p,m as v,n as h,o as f}from"./table-cell-variants-pOlufHHu.js";import"./iframe-BOiRAv0Y.js";import"./preload-helper-nsbjtKhx.js";import"./badge-CFx_vEci.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-Bl2w7KNb.js";import"./button-CwDoq1bF.js";import"./avatar-B02BiNAY.js";import"./index-BoQO47Gq.js";import"./index-DydpsTYg.js";import"./index-CUu-uf5O.js";import"./index-DW1YhDkg.js";import"./index-BvDNspiT.js";import"./index-Cw8MoOiG.js";import"./index-DYwgIo0D.js";import"./checkbox-BoqEPeLy.js";import"./check-BH77E53f.js";import"./createLucideIcon-BA63NghE.js";import"./index-Dc_FVRD7.js";import"./index-B2hW_upo.js";import"./index-CNbQGu3V.js";import"./index-DznGWiZ_.js";import"./index-DdxtLXFR.js";import"./input-CxU6Y9uy.js";import"./switch-CnXp-WuF.js";import"./progress-cOkpUVF6.js";import"./toggle-group-D89rlsgV.js";import"./index-mjmkYBIp.js";import"./index-CCVTgWy3.js";import"./index-BfZ742sb.js";import"./index-CLkFjz_Q.js";const X={title:"Kamino/Table Cell Variants",tags:["autodocs"],parameters:{docs:{description:{component:"Reusable table cell components for composing data tables with consistent styling."}}}},s={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8 p-6 md:grid-cols-3 lg:grid-cols-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellDefault"}),e.jsx(a,{value:"Hello World"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellBadge"}),e.jsxs("div",{className:"flex flex-wrap gap-1",children:[e.jsx(l,{value:"Active",variant:"success"}),e.jsx(l,{value:"Pending",variant:"warning"}),e.jsx(l,{value:"Failed",variant:"destructive"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellTokenDescription"}),e.jsx(t,{token:"SOL",description:"Solana"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellSwitch"}),e.jsx(o,{checked:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellButton"}),e.jsx(r,{label:"Action",variant:"outline",size:"sm"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellDropdown"}),e.jsx(m,{})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellProgress"}),e.jsx(i,{value:65})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellInput"}),e.jsx(d,{placeholder:"Enter value..."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellToggleGroup"}),e.jsx(c,{options:[{value:"a",label:"A"},{value:"b",label:"B"},{value:"c",label:"C"}],value:"a"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellCheckbox"}),e.jsx(n,{checked:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellSmAvatar"}),e.jsx(u,{name:"Alice Johnson"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellNumbersDefault"}),e.jsx(x,{value:"1,234.56",suffix:"USD"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellNumbersAvatar"}),e.jsx(p,{value:"$5,678.90",name:"Bob Smith"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellNumbersSmAvatar"}),e.jsx(v,{value:"$1,234",name:"Carol"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellVaultPosition"}),e.jsx(h,{vault:"SOL-USDC",position:"Long"})]}),e.jsxs("div",{className:"col-span-2 space-y-2",children:[e.jsx("h4",{className:"text-xs font-medium text-muted-foreground",children:"CellAllocation"}),e.jsx(f,{items:[{label:"SOL",percentage:50,color:"#9945FF"},{label:"USDC",percentage:30,color:"#2775CA"},{label:"ETH",percentage:20,color:"#627EEA"}]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8 p-6 md:grid-cols-3 lg:grid-cols-4">
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellDefault</h4>
        <CellDefault value="Hello World" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellBadge</h4>
        <div className="flex flex-wrap gap-1">
          <CellBadge value="Active" variant="success" />
          <CellBadge value="Pending" variant="warning" />
          <CellBadge value="Failed" variant="destructive" />
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellTokenDescription</h4>
        <CellTokenDescription token="SOL" description="Solana" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellSwitch</h4>
        <CellSwitch checked={true} />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellButton</h4>
        <CellButton label="Action" variant="outline" size="sm" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellDropdown</h4>
        <CellDropdown />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellProgress</h4>
        <CellProgress value={65} />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellInput</h4>
        <CellInput placeholder="Enter value..." />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellToggleGroup</h4>
        <CellToggleGroup options={[{
        value: 'a',
        label: 'A'
      }, {
        value: 'b',
        label: 'B'
      }, {
        value: 'c',
        label: 'C'
      }]} value="a" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellCheckbox</h4>
        <CellCheckbox checked={true} />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellSmAvatar</h4>
        <CellSmAvatar name="Alice Johnson" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellNumbersDefault</h4>
        <CellNumbersDefault value="1,234.56" suffix="USD" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellNumbersAvatar</h4>
        <CellNumbersAvatar value="$5,678.90" name="Bob Smith" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellNumbersSmAvatar</h4>
        <CellNumbersSmAvatar value="$1,234" name="Carol" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellVaultPosition</h4>
        <CellVaultPosition vault="SOL-USDC" position="Long" />
      </div>

      <div className="col-span-2 space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellAllocation</h4>
        <CellAllocation items={[{
        label: 'SOL',
        percentage: 50,
        color: '#9945FF'
      }, {
        label: 'USDC',
        percentage: 30,
        color: '#2775CA'
      }, {
        label: 'ETH',
        percentage: 20,
        color: '#627EEA'
      }]} />
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};const Y=["Default"];export{s as Default,Y as __namedExportsOrder,X as default};
