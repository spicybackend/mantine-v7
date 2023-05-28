(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7971],{46995:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table",function(){return l(79683)}])},79683:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return f}});var t=l(85893),a=l(11151),o=l(34940),i=l(25263),r=l(60261),m=l(67294),s=l(69713),T=l(19144);let c=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,b={type:"configurator",component:function(e){return m.createElement(s.i,Object.assign({},e),m.createElement(s.i.Thead,null,m.createElement(s.i.Tr,null,m.createElement(s.i.Th,null,"Position"),m.createElement(s.i.Th,null,"Name"),m.createElement(s.i.Th,null,"Symbol"),m.createElement(s.i.Th,null,"Mass"))),m.createElement(s.i.Tbody,null,T.R.map(e=>m.createElement(s.i.Tr,{key:e.name},m.createElement(s.i.Td,null,e.position),m.createElement(s.i.Td,null,e.name),m.createElement(s.i.Td,null,e.symbol),m.createElement(s.i.Td,null,e.mass)))))},code:c,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},u=`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );

  return (
    <Table captionSide="bottom">
      <Table.Caption>Some elements from periodic table</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>{ths}</Table.Tfoot>
    </Table>
  );
}
`,p={type:"code",code:u,component:function(){let e=T.R.map(e=>m.createElement(s.i.Tr,{key:e.name},m.createElement(s.i.Td,null,e.position),m.createElement(s.i.Td,null,e.name),m.createElement(s.i.Td,null,e.symbol),m.createElement(s.i.Td,null,e.mass))),n=m.createElement(s.i.Tr,null,m.createElement(s.i.Th,null,"Element position"),m.createElement(s.i.Th,null,"Element name"),m.createElement(s.i.Th,null,"Symbol"),m.createElement(s.i.Th,null,"Atomic mass"));return m.createElement(s.i,{captionSide:"bottom"},m.createElement(s.i.Caption,null,"Some elements from periodic table"),m.createElement(s.i.Thead,null,n),m.createElement(s.i.Tbody,null,e),m.createElement(s.i.Tfoot,null,n))}},d=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,h={type:"configurator",component:function(e){return m.createElement(s.i,Object.assign({},e),m.createElement(s.i.Thead,null,m.createElement(s.i.Tr,null,m.createElement(s.i.Th,null,"Element position"),m.createElement(s.i.Th,null,"Element name"),m.createElement(s.i.Th,null,"Symbol"),m.createElement(s.i.Th,null,"Atomic mass"))),m.createElement(s.i.Tbody,null,T.R.map(e=>m.createElement(s.i.Tr,{key:e.name},m.createElement(s.i.Td,null,e.position),m.createElement(s.i.Td,null,e.name),m.createElement(s.i.Td,null,e.symbol),m.createElement(s.i.Td,null,e.mass)))))},code:d,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},E=(0,o.A)(i.us.Table);function y(e){let n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components),{Demo:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Table data for all examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,t.jsx)(l,{data:r.j}),"\n",(0,t.jsx)(n.h2,{id:"spacing",children:"Spacing"}),"\n",(0,t.jsxs)(n.p,{children:["To control spacing use ",(0,t.jsx)(n.code,{children:"horizontalSpacing"})," and ",(0,t.jsx)(n.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,t.jsx)(n.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,t.jsx)(l,{data:b}),"\n",(0,t.jsx)(n.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,t.jsxs)(n.p,{children:["Table support tfoot and caption elements. Set ",(0,t.jsx)(n.code,{children:"captionSide"})," prop (top or bottom) to change caption position."]}),"\n",(0,t.jsx)(l,{data:p}),"\n",(0,t.jsx)(n.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,t.jsx)(l,{data:h})]})}var f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(E,Object.assign({},e,{children:(0,t.jsx)(y,e)}))}},60261:function(e,n,l){"use strict";l.d(n,{j:function(){return r}});var t=l(67294),a=l(69713),o=l(19144);let i=`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,r={type:"code",code:i,component:function(){let e=o.R.map(e=>t.createElement(a.i.Tr,{key:e.name},t.createElement(a.i.Td,null,e.position),t.createElement(a.i.Td,null,e.name),t.createElement(a.i.Td,null,e.symbol),t.createElement(a.i.Td,null,e.mass)));return t.createElement(a.i,null,t.createElement(a.i.Thead,null,t.createElement(a.i.Tr,null,t.createElement(a.i.Th,null,"Element position"),t.createElement(a.i.Th,null,"Element name"),t.createElement(a.i.Th,null,"Symbol"),t.createElement(a.i.Th,null,"Atomic mass"))),t.createElement(a.i.Tbody,null,e))}}},19144:function(e,n,l){"use strict";l.d(n,{R:function(){return t}});let t=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=46995)}),_N_E=e.O()}]);