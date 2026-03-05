import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./iframe-CQYA1bKh.js";import{c as v}from"./utils-BQHNewu7.js";import{C as R}from"./checkbox-CoBIttF9.js";import{B as P}from"./button-6PmRNPs2.js";import{c as I}from"./createLucideIcon-BQJuwl_y.js";import{b as V,C as D,k as c,o as $,n as A,m as B,a as q,c as O,d as z,e as U,f as K,p as M,g as G,h as E,i as L,j as W,l as F}from"./table-cell-variants-Di3bKNpi.js";import"./preload-helper-PPVm8Dsz.js";import"./check-BWz9kaD3.js";import"./index-nhtlCHlS.js";import"./index-2ox2otwn.js";import"./index-Dc_FVRD7.js";import"./index-B8qRJwtU.js";import"./index-BsL72y-_.js";import"./index-DBjcuya3.js";import"./index-CxdTpMX1.js";import"./index-iTr_kVCA.js";import"./index-Brvu00Jb.js";import"./index-B7vMyP4j.js";import"./index-B_jy3GnT.js";import"./index-LHNt3CwB.js";import"./badge-DqJV8chQ.js";import"./avatar-B665fdb5.js";import"./index-BasqQ5e6.js";import"./index-Bc5Buw9x.js";import"./input-CO4-_412.js";import"./switch-DGpA6EX6.js";import"./progress-CRDNCPKu.js";import"./toggle-group-CLr_c8Cr.js";import"./index-DjOMLzjX.js";import"./index-CqJUJ-mp.js";import"./index-CAOaTK7T.js";import"./index-CbIEmcZQ.js";import"./chevron-down-Dv7GdA7V.js";const J=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Q=I("arrow-down",J);const X=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Y=I("arrow-up-down",X);const Z=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],ee=I("arrow-up",Z);function h({className:s,...l}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto rounded-2xl border",children:e.jsx("table",{"data-slot":"table",className:v("w-full caption-bottom text-sm",s),...l})})}function g({className:s,...l}){return e.jsx("thead",{"data-slot":"table-header",className:v("bg-muted [&_tr]:border-b",s),...l})}function j({className:s,...l}){return e.jsx("tbody",{"data-slot":"table-body",className:v("[&_tr:last-child]:border-0",s),...l})}function i({className:s,...l}){return e.jsx("tr",{"data-slot":"table-row",className:v("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...l})}function a({className:s,sortable:l=!1,sortDirection:o,onSort:d,showCheckbox:x=!1,checked:m,onCheckedChange:r,firstColumnSpacer:n=!1,children:b,...p}){const u=o==="ascending"?ee:o==="descending"?Q:Y;return e.jsx("th",{"data-slot":"table-head","aria-sort":l?o==="none"?void 0:o:void 0,className:v("h-10 px-2 text-left align-middle text-xs font-medium whitespace-nowrap text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",n&&"pl-4",s),...p,children:e.jsxs("div",{className:"flex items-center gap-2",children:[x&&e.jsx(R,{checked:m,onCheckedChange:r,"aria-label":"Select all"}),l?e.jsxs(P,{variant:"ghost",size:"xs",className:"-ml-2 h-8 gap-1 text-xs font-medium text-muted-foreground hover:text-foreground",onClick:d,children:[b,e.jsx(u,{className:"size-3"})]}):b]})})}function t({className:s,showCheckbox:l=!1,checked:o,onCheckedChange:d,firstColumnSpacer:x=!1,children:m,...r}){return e.jsx("td",{"data-slot":"table-cell",className:v("h-16 px-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",x&&"pl-4",s),...r,children:l?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{checked:o,onCheckedChange:d,"aria-label":"Select row"}),m]}):m})}h.__docgenInfo={description:"",methods:[],displayName:"Table"};g.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};j.__docgenInfo={description:"",methods:[],displayName:"TableBody"};a.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:'"ascending" | "descending" | "none"',elements:[{name:"literal",value:'"ascending"'},{name:"literal",value:'"descending"'},{name:"literal",value:'"none"'}]},description:""},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"union",raw:'boolean | "indeterminate"',elements:[{name:"boolean"},{name:"literal",value:'"indeterminate"'}]},description:""},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},firstColumnSpacer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"TableRow"};t.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:""},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},firstColumnSpacer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Be={title:"Components/Table",component:h,tags:["autodocs"]};function T(){return e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[e.jsx("circle",{cx:"6",cy:"6",r:"6",fill:"hsl(var(--primary) / 0.2)"}),e.jsx("circle",{cx:"6",cy:"6",r:"3",fill:"hsl(var(--primary))"})]})}function _(){return e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}const y=[{symbol:"CASH",desc:"Description Text",protocol:"Sentora"},{symbol:"CASH",desc:"Sentora",protocol:"Sentora"},{symbol:"CASH",desc:"Description Text",protocol:"Description Text"},{symbol:"CASH",desc:"Description Text",protocol:"Description Text"},{symbol:"CASH",desc:"Description Text",protocol:"Description Text"}],f={render:()=>e.jsxs(h,{children:[e.jsx(g,{children:e.jsxs(i,{children:[e.jsx(a,{className:"w-[240px]",children:"Head Text"}),e.jsx(a,{children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"})]})}),e.jsx(j,{children:y.map((s,l)=>e.jsxs(i,{children:[e.jsx(t,{children:e.jsx(V,{token:s.symbol,description:s.desc,cryptoIcon:e.jsx(T,{})})}),e.jsx(t,{children:e.jsx(D,{value:"Table Cell Text"})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:"$1,251.11"})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:"$1,251.11"})}),e.jsx(t,{className:"text-right",children:l===0?e.jsx(D,{value:"Table Cell Text",className:"font-medium"}):e.jsx(c,{value:"$1,251.11"})})]},l))})]})},k={name:"Sortable Headers",render:function(){const[l,o]=C.useState(null),[d,x]=C.useState("none");function m(r){l!==r?(o(r),x("ascending")):d==="ascending"?x("descending"):(x("none"),o(null))}return e.jsxs(h,{children:[e.jsx(g,{children:e.jsxs(i,{children:[e.jsx(a,{className:"w-[240px]",sortable:!0,sortDirection:l==="token"?d:"none",onSort:()=>m("token"),children:"Head Text"}),e.jsx(a,{children:"Head Text"}),e.jsx(a,{className:"text-right",sortable:!0,sortDirection:l==="value"?d:"none",onSort:()=>m("value"),children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"})]})}),e.jsx(j,{children:y.map((r,n)=>e.jsxs(i,{children:[e.jsx(t,{children:e.jsx(V,{token:r.symbol,description:r.desc,cryptoIcon:e.jsx(T,{})})}),e.jsx(t,{children:e.jsx(D,{value:"Table Cell Text"})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:"$1,251.11"})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:"$1,251.11"})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:"$1,251.11"})})]},n))})]})}},H={name:"Row Selection",render:function(){const[l,o]=C.useState(new Set),d=l.size===y.length,x=l.size>0&&!d;function m(n){o(n?new Set(y.map((b,p)=>p)):new Set)}function r(n,b){o(p=>{const u=new Set(p);return b?u.add(n):u.delete(n),u})}return e.jsxs(h,{children:[e.jsx(g,{children:e.jsxs(i,{children:[e.jsx(a,{showCheckbox:!0,checked:d?!0:x?"indeterminate":!1,onCheckedChange:m,className:"w-10"}),e.jsx(a,{className:"w-[240px]",children:"Head Text"}),e.jsx(a,{children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"})]})}),e.jsx(j,{children:y.map((n,b)=>e.jsxs(i,{"data-state":l.has(b)?"selected":void 0,children:[e.jsx(t,{showCheckbox:!0,checked:l.has(b),onCheckedChange:p=>r(b,p)}),e.jsx(t,{children:e.jsx(V,{token:n.symbol,description:n.desc,cryptoIcon:e.jsx(T,{})})}),e.jsx(t,{children:e.jsx(D,{value:"Table Cell Text"})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:"$1,251.11"})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:"$1,251.11"})})]},b))})]})}},w={name:"Vault + Position",render:()=>{const s=[{title:"Table Cell Text",desc:"Description Text",meta:"$1.25K"},{title:"Table Cell Text",desc:"Description Text",meta:"$1.25K"},{title:"Table Cell Text",desc:"Description Text",meta:"$1.25K"}];return e.jsxs(h,{children:[e.jsx(g,{children:e.jsxs(i,{children:[e.jsx(a,{className:"w-[280px]",children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"})]})}),e.jsx(j,{children:s.map((l,o)=>e.jsxs(i,{children:[e.jsx(t,{children:e.jsx(A,{title:l.title,description:l.desc,cryptoIcon:e.jsx(T,{}),metadata:{icon:e.jsx(_,{}),value:l.meta}})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:"$1,251.11"})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:"$1,251.11"})}),e.jsx(t,{className:"text-right",children:e.jsx(B,{value:"$1,251.11",icon:e.jsx(T,{})})})]},o))})]})}},N={name:"All Cell Variants",render:function(){const[l,o]=C.useState(!1),[d,x]=C.useState(!1),[m,r]=C.useState(""),[n,b]=C.useState("a"),p=[{label:"Default",cell:e.jsx(D,{value:"Table Cell Text"})},{label:"Badge",cell:e.jsx(q,{value:"Badge",variant:"default"})},{label:"Token + Description",cell:e.jsx(V,{token:"CASH",description:"Description Text",cryptoIcon:e.jsx(T,{})})},{label:"Switch",cell:e.jsx(O,{checked:l,onCheckedChange:o})},{label:"Button",cell:e.jsx(z,{label:"Button",variant:"outline",size:"sm"})},{label:"Dropdown",cell:e.jsx(U,{label:"Dropdown"})},{label:"Progress",cell:e.jsx(K,{value:65})},{label:"Image",cell:e.jsx(M,{size:32})},{label:"Input",cell:e.jsx(G,{value:m,onChange:u=>r(u.target.value),placeholder:"Placeholder"})},{label:"Toggle Group",cell:e.jsx(E,{options:[{value:"a",label:"O"},{value:"b",label:"O"},{value:"c",label:"O"}],value:n,onValueChange:b})},{label:"Checkbox",cell:e.jsx(L,{checked:d,onCheckedChange:x})},{label:"sm avatar",cell:e.jsx(W,{name:"Table Cell Text",icon:e.jsx(T,{})})},{label:"numbers default",cell:e.jsx(c,{value:"Table Cell Text"})},{label:"numbers avatar",cell:e.jsx(F,{value:"Table Cell Text",description:"Description Text"})},{label:"numbers sm avatar",cell:e.jsx(B,{value:"Table Cell Text",icon:e.jsx(T,{})})},{label:"Vault + Position",cell:e.jsx(A,{title:"Table Cell Text",description:"Description Text",cryptoIcon:e.jsx(T,{}),metadata:{icon:e.jsx(_,{}),value:"$1.25K"}})},{label:"allocation",cell:e.jsx($,{avatars:[{fallback:"CA"},{fallback:"US"},{fallback:"SO"}],extraCount:9})}];return e.jsxs(h,{children:[e.jsx(g,{children:e.jsxs(i,{children:[e.jsx(a,{className:"w-[200px]",children:"Variant"}),e.jsx(a,{children:"Default State"})]})}),e.jsx(j,{children:p.map(u=>e.jsxs(i,{children:[e.jsx(t,{children:e.jsx("span",{className:"text-xs font-medium text-muted-foreground",children:u.label})}),e.jsx(t,{children:u.cell})]},u.label))})]})}},S={name:"Numbers & Allocation",render:()=>{const s=[{token:"CASH",desc:"Description Text",val1:"$1,251.11",val2:"$1,251.11"},{token:"CASH",desc:"Sentora",val1:"$1,251.11",val2:"$1,251.11"},{token:"CASH",desc:"Description Text",val1:"$1,251.11",val2:"$1,251.11"}];return e.jsxs(h,{children:[e.jsx(g,{children:e.jsxs(i,{children:[e.jsx(a,{className:"w-[240px]",children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"}),e.jsx(a,{className:"text-right",children:"Head Text"})]})}),e.jsx(j,{children:s.map((l,o)=>e.jsxs(i,{children:[e.jsx(t,{children:e.jsx(V,{token:l.token,description:l.desc,cryptoIcon:e.jsx(T,{})})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:l.val1})}),e.jsx(t,{className:"text-right",children:e.jsx(c,{value:l.val2})}),e.jsx(t,{children:e.jsx($,{avatars:[{fallback:"CA"},{fallback:"US"},{fallback:"SO"}],extraCount:9})})]},o))})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[240px]">Head Text</TableHead>
          <TableHead>Head Text</TableHead>
          <TableHead className="text-right">Head Text</TableHead>
          <TableHead className="text-right">Head Text</TableHead>
          <TableHead className="text-right">Head Text</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens.map((t, i) => <TableRow key={i}>
            <TableCell>
              <CellTokenDescription token={t.symbol} description={t.desc} cryptoIcon={<CryptoIcon />} />
            </TableCell>
            <TableCell>
              <CellDefault value="Table Cell Text" />
            </TableCell>
            <TableCell className="text-right">
              <CellNumbersDefault value="$1,251.11" />
            </TableCell>
            <TableCell className="text-right">
              <CellNumbersDefault value="$1,251.11" />
            </TableCell>
            <TableCell className="text-right">
              {i === 0 ? <CellDefault value="Table Cell Text" className="font-medium" /> : <CellNumbersDefault value="$1,251.11" />}
            </TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...f.parameters?.docs?.source},description:{story:`The default table matching the Figma "Table" component exactly.
First column uses Token + Description cell with avatar,
middle columns show plain text and right-aligned numbers,
last column shows default text.`,...f.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Sortable Headers',
  render: function SortableTable() {
    const [sortCol, setSortCol] = React.useState<string | null>(null);
    const [sortDir, setSortDir] = React.useState<SortDirection>('none');
    function toggleSort(col: string) {
      if (sortCol !== col) {
        setSortCol(col);
        setSortDir('ascending');
      } else if (sortDir === 'ascending') {
        setSortDir('descending');
      } else {
        setSortDir('none');
        setSortCol(null);
      }
    }
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[240px]" sortable sortDirection={sortCol === 'token' ? sortDir : 'none'} onSort={() => toggleSort('token')}>
              Head Text
            </TableHead>
            <TableHead>Head Text</TableHead>
            <TableHead className="text-right" sortable sortDirection={sortCol === 'value' ? sortDir : 'none'} onSort={() => toggleSort('value')}>
              Head Text
            </TableHead>
            <TableHead className="text-right">Head Text</TableHead>
            <TableHead className="text-right">Head Text</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokens.map((t, i) => <TableRow key={i}>
              <TableCell>
                <CellTokenDescription token={t.symbol} description={t.desc} cryptoIcon={<CryptoIcon />} />
              </TableCell>
              <TableCell>
                <CellDefault value="Table Cell Text" />
              </TableCell>
              <TableCell className="text-right">
                <CellNumbersDefault value="$1,251.11" />
              </TableCell>
              <TableCell className="text-right">
                <CellNumbersDefault value="$1,251.11" />
              </TableCell>
              <TableCell className="text-right">
                <CellNumbersDefault value="$1,251.11" />
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...k.parameters?.docs?.source},description:{story:"Demonstrates sortable column headers with sort icons",...k.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Row Selection',
  render: function SelectableTable() {
    const [selected, setSelected] = React.useState<Set<number>>(new Set());
    const allChecked = selected.size === tokens.length;
    const someChecked = selected.size > 0 && !allChecked;
    function toggleAll(checked: boolean) {
      setSelected(checked ? new Set(tokens.map((_, i) => i)) : new Set());
    }
    function toggleRow(idx: number, checked: boolean) {
      setSelected(prev => {
        const next = new Set(prev);
        if (checked) next.add(idx);else next.delete(idx);
        return next;
      });
    }
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead showCheckbox checked={allChecked ? true : someChecked ? 'indeterminate' : false} onCheckedChange={toggleAll} className="w-10" />
            <TableHead className="w-[240px]">Head Text</TableHead>
            <TableHead>Head Text</TableHead>
            <TableHead className="text-right">Head Text</TableHead>
            <TableHead className="text-right">Head Text</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokens.map((t, i) => <TableRow key={i} data-state={selected.has(i) ? 'selected' : undefined}>
              <TableCell showCheckbox checked={selected.has(i)} onCheckedChange={c => toggleRow(i, c)} />
              <TableCell>
                <CellTokenDescription token={t.symbol} description={t.desc} cryptoIcon={<CryptoIcon />} />
              </TableCell>
              <TableCell>
                <CellDefault value="Table Cell Text" />
              </TableCell>
              <TableCell className="text-right">
                <CellNumbersDefault value="$1,251.11" />
              </TableCell>
              <TableCell className="text-right">
                <CellNumbersDefault value="$1,251.11" />
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...H.parameters?.docs?.source},description:{story:"Row selection with checkboxes in head and cells",...H.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Vault + Position',
  render: () => {
    const vaults = [{
      title: 'Table Cell Text',
      desc: 'Description Text',
      meta: '$1.25K'
    }, {
      title: 'Table Cell Text',
      desc: 'Description Text',
      meta: '$1.25K'
    }, {
      title: 'Table Cell Text',
      desc: 'Description Text',
      meta: '$1.25K'
    }];
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[280px]">Head Text</TableHead>
            <TableHead className="text-right">Head Text</TableHead>
            <TableHead className="text-right">Head Text</TableHead>
            <TableHead className="text-right">Head Text</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vaults.map((v, i) => <TableRow key={i}>
              <TableCell>
                <CellVaultPosition title={v.title} description={v.desc} cryptoIcon={<CryptoIcon />} metadata={{
              icon: <UserIcon />,
              value: v.meta
            }} />
              </TableCell>
              <TableCell className="text-right">
                <CellNumbersDefault value="$1,251.11" />
              </TableCell>
              <TableCell className="text-right">
                <CellNumbersDefault value="$1,251.11" />
              </TableCell>
              <TableCell className="text-right">
                <CellNumbersSmAvatar value="$1,251.11" icon={<CryptoIcon />} />
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...w.parameters?.docs?.source},description:{story:"Vault + Position variant with metadata row",...w.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'All Cell Variants',
  render: function AllVariantsTable() {
    const [switchVal, setSwitchVal] = React.useState(false);
    const [checkVal, setCheckVal] = React.useState(false);
    const [inputVal, setInputVal] = React.useState('');
    const [toggleVal, setToggleVal] = React.useState('a');
    const variants: {
      label: string;
      cell: React.ReactNode;
    }[] = [{
      label: 'Default',
      cell: <CellDefault value="Table Cell Text" />
    }, {
      label: 'Badge',
      cell: <CellBadge value="Badge" variant="default" />
    }, {
      label: 'Token + Description',
      cell: <CellTokenDescription token="CASH" description="Description Text" cryptoIcon={<CryptoIcon />} />
    }, {
      label: 'Switch',
      cell: <CellSwitch checked={switchVal} onCheckedChange={setSwitchVal} />
    }, {
      label: 'Button',
      cell: <CellButton label="Button" variant="outline" size="sm" />
    }, {
      label: 'Dropdown',
      cell: <CellDropdown label="Dropdown" />
    }, {
      label: 'Progress',
      cell: <CellProgress value={65} />
    }, {
      label: 'Image',
      cell: <CellImage size={32} />
    }, {
      label: 'Input',
      cell: <CellInput value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder="Placeholder" />
    }, {
      label: 'Toggle Group',
      cell: <CellToggleGroup options={[{
        value: 'a',
        label: 'O'
      }, {
        value: 'b',
        label: 'O'
      }, {
        value: 'c',
        label: 'O'
      }]} value={toggleVal} onValueChange={setToggleVal} />
    }, {
      label: 'Checkbox',
      cell: <CellCheckbox checked={checkVal} onCheckedChange={setCheckVal} />
    }, {
      label: 'sm avatar',
      cell: <CellSmAvatar name="Table Cell Text" icon={<CryptoIcon />} />
    }, {
      label: 'numbers default',
      cell: <CellNumbersDefault value="Table Cell Text" />
    }, {
      label: 'numbers avatar',
      cell: <CellNumbersAvatar value="Table Cell Text" description="Description Text" />
    }, {
      label: 'numbers sm avatar',
      cell: <CellNumbersSmAvatar value="Table Cell Text" icon={<CryptoIcon />} />
    }, {
      label: 'Vault + Position',
      cell: <CellVaultPosition title="Table Cell Text" description="Description Text" cryptoIcon={<CryptoIcon />} metadata={{
        icon: <UserIcon />,
        value: '$1.25K'
      }} />
    }, {
      label: 'allocation',
      cell: <CellAllocation avatars={[{
        fallback: 'CA'
      }, {
        fallback: 'US'
      }, {
        fallback: 'SO'
      }]} extraCount={9} />
    }];
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Variant</TableHead>
            <TableHead>Default State</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {variants.map(v => <TableRow key={v.label}>
              <TableCell>
                <span className="text-xs font-medium text-muted-foreground">
                  {v.label}
                </span>
              </TableCell>
              <TableCell>{v.cell}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...N.parameters?.docs?.source},description:{story:"All cell variants showcase — each row demonstrates a different cell type",...N.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Numbers & Allocation',
  render: () => {
    const rows = [{
      token: 'CASH',
      desc: 'Description Text',
      val1: '$1,251.11',
      val2: '$1,251.11'
    }, {
      token: 'CASH',
      desc: 'Sentora',
      val1: '$1,251.11',
      val2: '$1,251.11'
    }, {
      token: 'CASH',
      desc: 'Description Text',
      val1: '$1,251.11',
      val2: '$1,251.11'
    }];
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[240px]">Head Text</TableHead>
            <TableHead className="text-right">Head Text</TableHead>
            <TableHead className="text-right">Head Text</TableHead>
            <TableHead className="text-right">Head Text</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r, i) => <TableRow key={i}>
              <TableCell>
                <CellTokenDescription token={r.token} description={r.desc} cryptoIcon={<CryptoIcon />} />
              </TableCell>
              <TableCell className="text-right">
                <CellNumbersDefault value={r.val1} />
              </TableCell>
              <TableCell className="text-right">
                <CellNumbersDefault value={r.val2} />
              </TableCell>
              <TableCell>
                <CellAllocation avatars={[{
              fallback: 'CA'
            }, {
              fallback: 'US'
            }, {
              fallback: 'SO'
            }]} extraCount={9} />
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Numbers-focused table with allocation column",...S.parameters?.docs?.description}}};const _e=["Default","Sortable","WithRowSelection","VaultPositionTable","AllCellVariants","NumbersTable"];export{N as AllCellVariants,f as Default,S as NumbersTable,k as Sortable,w as VaultPositionTable,H as WithRowSelection,_e as __namedExportsOrder,Be as default};
