(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7993],{44289:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/style-props",function(){return s(17360)}])},17360:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return y}});var r=s(85893),t=s(11151),o=s(34940),l=s(25263),i=s(67294),c=s(94873);let a=`
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
`,d={type:"code",component:function(){return i.createElement(c.x,{w:{base:200,sm:400,lg:500},py:{base:"xs",sm:"md",lg:"xl"},bg:{base:"blue.7",sm:"red.7",lg:"green.7"},c:"#fff",ta:"center",mx:"auto"},"Box with responsive style props")},code:a};var h=s(60721),m=s(2857),p=s(26564),x=s(14193);let u={color:"theme.colors",fontSize:"theme.fontSizes",spacing:"theme.spacing",lineHeight:"theme.lineHeights"};function g(e){let{source:n=h.p}=e,s=Object.keys(n).map(e=>{let s=n[e],t=u[s.type];return[(0,r.jsx)(m.E,{children:e},"1"),(0,r.jsx)(p.O,{separator:",",styles:{separator:{marginLeft:2,marginRight:2}},children:Array.isArray(s.property)?s.property.map(e=>(0,r.jsx)(m.E,{children:e},e)):(0,r.jsx)(m.E,{children:s.property})}),t?(0,r.jsx)(m.E,{children:t}):"–"]});return(0,r.jsx)(x.gw,{head:["Prop","CSS Property","Theme key"],data:s})}let j=(0,o.A)(l.us.StyleProps);function f(e){let n=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",h2:"h2",ul:"ul",li:"li"},(0,t.ah)(),e.components),{Demo:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"style-props",children:"Style props"}),"\n",(0,r.jsxs)(n.p,{children:["With style props, you can add inline styles to any Mantine component.\nStyle props add styles to the ",(0,r.jsx)(n.strong,{children:"root"})," element, if you need to style nested elements,\nuse ",(0,r.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," instead."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Box mx="auto" maw={400} c="blue.6" bg="#fff">\n      Your component\n    </Box>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"supported-props",children:"Supported props"}),"\n",(0,r.jsx)(n.p,{children:"All Mantine components that have root element support the following style props:"}),"\n",(0,r.jsx)(g,{}),"\n",(0,r.jsx)(n.h2,{id:"theme-values",children:"Theme values"}),"\n",(0,r.jsxs)(n.p,{children:["Some style props can reference values from theme, for example ",(0,r.jsx)(n.code,{children:"mt"})," will use ",(0,r.jsx)(n.code,{children:"theme.spacing"})," value\nif you set ",(0,r.jsx)(n.code,{children:"xs"}),", ",(0,r.jsx)(n.code,{children:"sm"}),", ",(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"lg"}),", ",(0,r.jsx)(n.code,{children:"xl"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\n// margin-top: theme.spacing.xs\n<Box mt="xs" />\n\n// margin-top: theme.spacing.md * -1\n<Box mt="-md" />\n\n// margin-top: auto\n<Box mt="auto" />\n\n// margin-top: 1rem\n<Box mt={16} />\n\n// margin-top: 5rem\n<Box mt="5rem" />\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"c"})," and ",(0,r.jsx)(n.code,{children:"bg"})," props you can reference colors from ",(0,r.jsx)(n.code,{children:"theme.colors"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\n// color: theme.colors.blue[theme.fn.primaryShade()]\n<Box c="blue" />\n\n// background: theme.colors.orange[1]\n<Box bg="orange.1" />\n\n// color: theme.colorScheme === \'dark\' ? theme.colors.dark[2] : theme.colors.gray[6]\n<Box c="dimmed" />\n\n// background: #EDFEFF\n<Box bg="#EDFEFF" />\n\n// background: rgba(0, 34, 45, 0.6)\n<Box bg="rgba(0, 34, 45, 0.6)" />\n'})}),"\n",(0,r.jsx)(n.h2,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,r.jsxs)(n.p,{children:["You can use object syntax to add responsive styles with style props.\nNote that responsive style props are ",(0,r.jsx)(n.a,{href:"/styles/styles-performance",children:"less performant"})," than regular style props,\nit is not recommended to use them in large lists of elements."]}),"\n",(0,r.jsx)(s,{data:d}),"\n",(0,r.jsx)(n.p,{children:"Responsive values are calculated the following way:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"base"})," value is used when none of breakpoint values are applied"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"xs"}),", ",(0,r.jsx)(n.code,{children:"sm"}),", ",(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"lg"}),", ",(0,r.jsx)(n.code,{children:"xl"})," values are used when the viewport width is larger that the value of corresponding breakpoint specified in ",(0,r.jsx)(n.a,{href:"/styles/responsive/",children:"theme.breakpoints"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\n<Box w={{ base: 320, sm: 480, lg: 640 }}} />\n"})}),"\n",(0,r.jsx)(n.p,{children:"In this case the element will have the following styles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"/* Base styles added to element and then get overwritten with responsive values */\n.element {\n  width: 20rem;\n}\n\n/* 48em is theme.breakpoints.sm by default */\n@media (min-width: 48em) {\n  .element {\n    width: 30rem;\n  }\n}\n\n/* 75em is theme.breakpoints.lg by default */\n@media (min-width: 75em) {\n  .element {\n    width: 40rem;\n  }\n}\n"})})]})}var y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(j,Object.assign({},e,{children:(0,r.jsx)(f,e)}))}}},function(e){e.O(0,[2411,7437,3523,9774,2888,179],function(){return e(e.s=44289)}),_N_E=e.O()}]);