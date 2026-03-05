import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as k}from"./iframe-Dzj-mL87.js";import{c as p}from"./utils-BQHNewu7.js";import{C as H}from"./checkbox-pnL9W7OU.js";import{B as D}from"./button-DFO83297.js";import{c as y}from"./createLucideIcon-CCIZXRp2.js";import{j as _,a as V,f as B,d as F,e as P}from"./table-cell-variants-DPmYSX-t.js";import"./preload-helper-nsbjtKhx.js";import"./check-Barngszj.js";import"./index-CzgvWNzs.js";import"./index-wPz2Q4sg.js";import"./index-Dc_FVRD7.js";import"./index-CglMG92_.js";import"./index-CqoRZGYm.js";import"./index-D5_66iob.js";import"./index-DRUHdHLq.js";import"./index-3ownK4fR.js";import"./index-Dq1zw_lr.js";import"./index-xyRhfqyB.js";import"./index-CqjaA1iE.js";import"./index-LHNt3CwB.js";import"./badge-CFXY4oYl.js";import"./avatar-DIDKMqE3.js";import"./index-DGXtXeRM.js";import"./index-AZEMKRF_.js";import"./input-O3b8Sfi7.js";import"./switch-DHOH4Uh0.js";import"./progress-BzWteGXR.js";import"./toggle-group-Cq0r9xbu.js";import"./index-CjB5D-83.js";import"./index-BICdXHz1.js";import"./index-CPAKTMIc.js";import"./index-YNv9AqCf.js";const q=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],z=y("arrow-down",q);const $=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],M=y("arrow-up-down",$);const W=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],U=y("arrow-up",W);function x({className:t,...a}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-hidden rounded-2xl border",children:e.jsx("table",{"data-slot":"table",className:p("w-full caption-bottom text-sm",t),...a})})}function C({className:t,...a}){return e.jsx("thead",{"data-slot":"table-header",className:p("bg-muted [&_tr]:border-b",t),...a})}function g({className:t,...a}){return e.jsx("tbody",{"data-slot":"table-body",className:p("[&_tr:last-child]:border-0",t),...a})}function R({className:t,...a}){return e.jsx("tfoot",{"data-slot":"table-footer",className:p("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...a})}function m({className:t,...a}){return e.jsx("tr",{"data-slot":"table-row",className:p("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...a})}function l({className:t,sortable:a=!1,sortDirection:i,onSort:r,showCheckbox:d=!1,checked:u,onCheckedChange:b,firstColumnSpacer:o=!1,children:c,...n}){const h=i==="ascending"?U:i==="descending"?z:M;return e.jsx("th",{"data-slot":"table-head","aria-sort":a?i==="none"?void 0:i:void 0,className:p("h-10 px-2 text-left align-middle text-xs font-medium whitespace-nowrap text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",o&&"pl-4",t),...n,children:e.jsxs("div",{className:"flex items-center gap-2",children:[d&&e.jsx(H,{checked:u,onCheckedChange:b,"aria-label":"Select all"}),a?e.jsxs(D,{variant:"ghost",size:"xs",className:"-ml-2 h-8 gap-1 font-medium text-muted-foreground hover:text-foreground",onClick:r,children:[c,e.jsx(h,{className:"size-3"})]}):c]})})}function s({className:t,showCheckbox:a=!1,checked:i,onCheckedChange:r,firstColumnSpacer:d=!1,children:u,...b}){return e.jsx("td",{"data-slot":"table-cell",className:p("h-16 px-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",d&&"pl-4",t),...b,children:a?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(H,{checked:i,onCheckedChange:r,"aria-label":"Select row"}),u]}):u})}function A({className:t,...a}){return e.jsx("caption",{"data-slot":"table-caption",className:p("mt-4 text-sm text-muted-foreground",t),...a})}x.__docgenInfo={description:"",methods:[],displayName:"Table"};C.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};g.__docgenInfo={description:"",methods:[],displayName:"TableBody"};R.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};l.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{sortable:{required:!1,tsType:{name:"boolean"},description:"Makes the column header clickable for sorting",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:'"ascending" | "descending" | "none"',elements:[{name:"literal",value:'"ascending"'},{name:"literal",value:'"descending"'},{name:"literal",value:'"none"'}]},description:"Current sort direction"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when sort is toggled"},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"Show a checkbox in the header for bulk selection",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"union",raw:'boolean | "indeterminate"',elements:[{name:"boolean"},{name:"literal",value:'"indeterminate"'}]},description:"Checkbox checked state"},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Checkbox change handler"},firstColumnSpacer:{required:!1,tsType:{name:"boolean"},description:"Adds left spacing for first column alignment",defaultValue:{value:"false",computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"TableRow"};s.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"Show a checkbox in the cell for row selection",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Checkbox checked state"},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Checkbox change handler"},firstColumnSpacer:{required:!1,tsType:{name:"boolean"},description:"Adds left spacing for first column alignment",defaultValue:{value:"false",computed:!1}}}};A.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const Se={title:"Components/Table",component:x,tags:["autodocs"]},T=[{invoice:"INV001",status:"Paid",method:"Credit Card",amount:250},{invoice:"INV002",status:"Pending",method:"PayPal",amount:150},{invoice:"INV003",status:"Unpaid",method:"Bank Transfer",amount:350},{invoice:"INV004",status:"Paid",method:"Credit Card",amount:450},{invoice:"INV005",status:"Paid",method:"PayPal",amount:550}],j={render:()=>e.jsxs(x,{children:[e.jsx(A,{children:"A list of your recent invoices."}),e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(l,{className:"w-[100px]",children:"Invoice"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Method"}),e.jsx(l,{className:"text-right",children:"Amount"})]})}),e.jsx(g,{children:T.map(t=>e.jsxs(m,{children:[e.jsx(s,{className:"font-medium",children:t.invoice}),e.jsx(s,{children:t.status}),e.jsx(s,{children:t.method}),e.jsxs(s,{className:"text-right",children:["$",t.amount.toFixed(2)]})]},t.invoice))}),e.jsx(R,{children:e.jsxs(m,{children:[e.jsx(s,{colSpan:3,children:"Total"}),e.jsx(s,{className:"text-right",children:"$1,750.00"})]})})]})},f={name:"Sortable Headers",render:function(){const[a,i]=k.useState(null),[r,d]=k.useState("none");function u(o){a!==o?(i(o),d("ascending")):r==="ascending"?d("descending"):(d("none"),i(null))}const b=[...T].sort((o,c)=>{if(!a||r==="none")return 0;const n=r==="ascending"?1:-1;return a==="invoice"?n*o.invoice.localeCompare(c.invoice):n*(o.amount-c.amount)});return e.jsxs(x,{children:[e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(l,{sortable:!0,sortDirection:a==="invoice"?r:"none",onSort:()=>u("invoice"),className:"w-[100px]",children:"Invoice"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Method"}),e.jsx(l,{sortable:!0,sortDirection:a==="amount"?r:"none",onSort:()=>u("amount"),className:"text-right",children:"Amount"})]})}),e.jsx(g,{children:b.map(o=>e.jsxs(m,{children:[e.jsx(s,{className:"font-medium",children:o.invoice}),e.jsx(s,{children:o.status}),e.jsx(s,{children:o.method}),e.jsxs(s,{className:"text-right",children:["$",o.amount.toFixed(2)]})]},o.invoice))})]})}},v={name:"Row Selection (Checkboxes)",render:function(){const[a,i]=k.useState(new Set),r=a.size===T.length,d=a.size>0&&!r;function u(o){i(o?new Set(T.map(c=>c.invoice)):new Set)}function b(o,c){i(n=>{const h=new Set(n);return c?h.add(o):h.delete(o),h})}return e.jsxs(x,{children:[e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(l,{showCheckbox:!0,checked:r?!0:d?"indeterminate":!1,onCheckedChange:u,className:"w-10"}),e.jsx(l,{children:"Invoice"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Method"}),e.jsx(l,{className:"text-right",children:"Amount"})]})}),e.jsx(g,{children:T.map(o=>e.jsxs(m,{"data-state":a.has(o.invoice)?"selected":void 0,children:[e.jsx(s,{showCheckbox:!0,checked:a.has(o.invoice),onCheckedChange:c=>b(o.invoice,c)}),e.jsx(s,{className:"font-medium",children:o.invoice}),e.jsx(s,{children:o.status}),e.jsx(s,{children:o.method}),e.jsxs(s,{className:"text-right",children:["$",o.amount.toFixed(2)]})]},o.invoice))})]})}},w={name:"First Column Spacer",render:()=>e.jsxs(x,{children:[e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(l,{firstColumnSpacer:!0,children:"Invoice"}),e.jsx(l,{children:"Status"}),e.jsx(l,{className:"text-right",children:"Amount"})]})}),e.jsx(g,{children:T.map(t=>e.jsxs(m,{children:[e.jsx(s,{firstColumnSpacer:!0,className:"font-medium",children:t.invoice}),e.jsx(s,{children:t.status}),e.jsxs(s,{className:"text-right",children:["$",t.amount.toFixed(2)]})]},t.invoice))})]})},S={name:"Cell Variants (Kamino)",render:function(){const[a,i]=k.useState(new Set),r=[{id:"1",name:"Alice Johnson",status:"Active",progress:75},{id:"2",name:"Bob Smith",status:"Pending",progress:30},{id:"3",name:"Carol White",status:"Inactive",progress:100}],d=a.size===r.length,u=a.size>0&&!d;function b(n){i(n?new Set(r.map(h=>h.id)):new Set)}function o(n,h){i(I=>{const N=new Set(I);return h?N.add(n):N.delete(n),N})}const c={Active:"success",Pending:"warning",Inactive:"default"};return e.jsxs(x,{children:[e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(l,{showCheckbox:!0,checked:d?!0:u?"indeterminate":!1,onCheckedChange:b,className:"w-10"}),e.jsx(l,{sortable:!0,sortDirection:"none",children:"User"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Progress"}),e.jsx(l,{children:"Action"}),e.jsx(l,{className:"w-10"})]})}),e.jsx(g,{children:r.map(n=>e.jsxs(m,{"data-state":a.has(n.id)?"selected":void 0,children:[e.jsx(s,{showCheckbox:!0,checked:a.has(n.id),onCheckedChange:h=>o(n.id,h)}),e.jsx(s,{children:e.jsx(_,{name:n.name})}),e.jsx(s,{children:e.jsx(V,{value:n.status,variant:c[n.status]})}),e.jsx(s,{children:e.jsx(B,{value:n.progress})}),e.jsx(s,{children:e.jsx(F,{label:"View",variant:"outline",size:"xs"})}),e.jsx(s,{children:e.jsx(P,{})})]},n.id))})]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">\${invoice.amount.toFixed(2)}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Sortable Headers',
  render: function SortableTable() {
    const [sortCol, setSortCol] = React.useState<'invoice' | 'amount' | null>(null);
    const [sortDir, setSortDir] = React.useState<SortDirection>('none');
    function toggleSort(col: 'invoice' | 'amount') {
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
    const sorted = [...invoices].sort((a, b) => {
      if (!sortCol || sortDir === 'none') return 0;
      const mult = sortDir === 'ascending' ? 1 : -1;
      if (sortCol === 'invoice') return mult * a.invoice.localeCompare(b.invoice);
      return mult * (a.amount - b.amount);
    });
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead sortable sortDirection={sortCol === 'invoice' ? sortDir : 'none'} onSort={() => toggleSort('invoice')} className="w-[100px]">
              Invoice
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead sortable sortDirection={sortCol === 'amount' ? sortDir : 'none'} onSort={() => toggleSort('amount')} className="text-right">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map(invoice => <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">\${invoice.amount.toFixed(2)}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Demonstrates sortable column headers with sort icons",...f.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Row Selection (Checkboxes)',
  render: function SelectableTable() {
    const [selected, setSelected] = React.useState<Set<string>>(new Set());
    const allChecked = selected.size === invoices.length;
    const someChecked = selected.size > 0 && !allChecked;
    function toggleAll(checked: boolean) {
      setSelected(checked ? new Set(invoices.map(i => i.invoice)) : new Set());
    }
    function toggleRow(id: string, checked: boolean) {
      setSelected(prev => {
        const next = new Set(prev);
        if (checked) next.add(id);else next.delete(id);
        return next;
      });
    }
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead showCheckbox checked={allChecked ? true : someChecked ? 'indeterminate' : false} onCheckedChange={toggleAll} className="w-10" />
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice => <TableRow key={invoice.invoice} data-state={selected.has(invoice.invoice) ? 'selected' : undefined}>
              <TableCell showCheckbox checked={selected.has(invoice.invoice)} onCheckedChange={c => toggleRow(invoice.invoice, c)} />
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">\${invoice.amount.toFixed(2)}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...v.parameters?.docs?.source},description:{story:"Demonstrates row selection with checkboxes in head and cells",...v.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'First Column Spacer',
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead firstColumnSpacer>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell firstColumnSpacer className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell className="text-right">\${invoice.amount.toFixed(2)}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...w.parameters?.docs?.source},description:{story:"Demonstrates first column spacer for indented rows",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Cell Variants (Kamino)',
  render: function CellVariantsTable() {
    const [selected, setSelected] = React.useState<Set<string>>(new Set());
    const users = [{
      id: '1',
      name: 'Alice Johnson',
      status: 'Active' as const,
      progress: 75
    }, {
      id: '2',
      name: 'Bob Smith',
      status: 'Pending' as const,
      progress: 30
    }, {
      id: '3',
      name: 'Carol White',
      status: 'Inactive' as const,
      progress: 100
    }];
    const allChecked = selected.size === users.length;
    const someChecked = selected.size > 0 && !allChecked;
    function toggleAll(checked: boolean) {
      setSelected(checked ? new Set(users.map(u => u.id)) : new Set());
    }
    function toggleRow(id: string, checked: boolean) {
      setSelected(prev => {
        const next = new Set(prev);
        if (checked) next.add(id);else next.delete(id);
        return next;
      });
    }
    const statusVariant = {
      Active: 'success' as const,
      Pending: 'warning' as const,
      Inactive: 'default' as const
    };
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead showCheckbox checked={allChecked ? true : someChecked ? 'indeterminate' : false} onCheckedChange={toggleAll} className="w-10" />
            <TableHead sortable sortDirection="none">User</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user => <TableRow key={user.id} data-state={selected.has(user.id) ? 'selected' : undefined}>
              <TableCell showCheckbox checked={selected.has(user.id)} onCheckedChange={c => toggleRow(user.id, c)} />
              <TableCell><CellSmAvatar name={user.name} /></TableCell>
              <TableCell><CellBadge value={user.status} variant={statusVariant[user.status]} /></TableCell>
              <TableCell><CellProgress value={user.progress} /></TableCell>
              <TableCell><CellButton label="View" variant="outline" size="xs" /></TableCell>
              <TableCell><CellDropdown /></TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Table with Kamino cell variant components",...S.parameters?.docs?.description}}};const je=["Default","Sortable","WithRowSelection","WithFirstColumnSpacer","WithCellVariants"];export{j as Default,f as Sortable,S as WithCellVariants,w as WithFirstColumnSpacer,v as WithRowSelection,je as __namedExportsOrder,Se as default};
