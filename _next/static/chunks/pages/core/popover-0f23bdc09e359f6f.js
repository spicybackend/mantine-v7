(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6959],{17471:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/popover",function(){return t(4294)}])},4294:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return N}});var n=t(85893),r=t(11151),i=t(34940),s=t(25263),a=t(67294),l=t(92828),d=t(43406),p=t(77048);let c=`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,u={type:"code",code:c,centered:!0,component:function(){return a.createElement(l.J,{width:200,position:"bottom",withArrow:!0,shadow:"md"},a.createElement(l.J.Target,null,a.createElement(d.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(p.x,{size:"xs"},"This is uncontrolled popover, it is opened when button is clicked")))}};var h=t(78901);let m=`
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,w={type:"code",code:m,centered:!0,component:function(){let[e,{close:o,open:t}]=(0,h.q)(!1);return a.createElement(l.J,{width:200,position:"bottom",withArrow:!0,shadow:"md",opened:e},a.createElement(l.J.Target,null,a.createElement(d.z,{onMouseEnter:t,onMouseLeave:o},"Hover to see popover")),a.createElement(l.J.Dropdown,{style:{pointerEvents:"none"}},a.createElement(p.x,{size:"sm"},"This popover is shown when user hovers the target element")))}};var v=t(31577);let x=`
import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput label="Name" placeholder="Name" size="xs" />
        <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
`,f={type:"code",code:x,centered:!0,component:function(){return a.createElement(l.J,{width:300,trapFocus:!0,position:"bottom",withArrow:!0,shadow:"md"},a.createElement(l.J.Target,null,a.createElement(d.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(v.o,{label:"Name",placeholder:"Name",size:"xs"}),a.createElement(v.o,{label:"Email",placeholder:"john@doe.com",size:"xs",mt:"xs"})))}};var g=t(85880);let b=`
import { Popover, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Popover middlewares={{ flip: true, shift: true, inline: true }} position="top">
        <Popover.Target>
          <Mark>When visiting a junkyard</Mark>
        </Popover.Target>
        <Popover.Dropdown>Inline dropdown</Popover.Dropdown>
      </Popover>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`,P={type:"code",component:function(){return a.createElement(p.x,null,"Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers."," ",a.createElement(l.J,{middlewares:{flip:!0,shift:!0,inline:!0},position:"top"},a.createElement(l.J.Target,null,a.createElement(g.v,null,"When visiting a junkyard")),a.createElement(l.J.Dropdown,null,"Inline dropdown")),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot of a rainbow.")},code:b},j=`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

`,T={type:"code",code:j,centered:!0,component:function(){return a.createElement(l.J,{width:"target",position:"bottom",withArrow:!0,shadow:"md"},a.createElement(l.J.Target,null,a.createElement(d.z,{w:280},"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(p.x,{size:"sm"},"This popover has same width as target, it is useful when you are building input dropdowns")))}};var y=t(44982);let E=`
import { Popover, Button, Text } from '@mantine/core';


function Demo() {
  return (
    <Popover
      width={200}
      opened
      {{props}}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,D={type:"configurator",component:function(e){return a.createElement(l.J,Object.assign({width:200,opened:!0},e),a.createElement(l.J.Target,null,a.createElement(d.z,null,"Popover target")),a.createElement(l.J.Dropdown,null,a.createElement(p.x,{size:"xs"},"Change position and offset to configure dropdown offset relative to target")))},code:E,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:y.c,libraryValue:null},{type:"number",prop:"offset",initialValue:0,libraryValue:null,min:-50,max:50}]},k=e=>`
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={200}
      position="${e.position}"
      opened
      offset={{ mainAxis: ${e.mainAxis}, crossAxis: ${e.crossAxis} }}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,A={type:"configurator",component:function(e){return a.createElement(l.J,{width:200,position:e.position,opened:!0,offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis}},a.createElement(l.J.Target,null,a.createElement(d.z,null,"Popover target")),a.createElement(l.J.Dropdown,null,a.createElement(p.x,{size:"xs"},"Change position and offset to configure dropdown offset relative to target")))},code:k,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:y.c,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:0,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},B=`
import { Popover } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} opened position="bottom-start" withArrow{{props}}>
      <Popover.Target>
        <Button>Target element</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Arrow position can be changed for *-start and *-end positions</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,z={type:"configurator",component:function(e){return a.createElement(l.J,Object.assign({width:200,opened:!0,position:"bottom-start",withArrow:!0},e),a.createElement(l.J.Target,null,a.createElement(d.z,null,"Target element")),a.createElement(l.J.Dropdown,null,a.createElement(p.x,{size:"xs"},"Arrow position can be changed for *-start and *-end positions")))},code:B,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:10,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:7,libraryValue:7,min:5,max:12},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},J=`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200}{{props}}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,O={type:"configurator",component:function(e){return a.createElement(l.J,Object.assign({width:200},e),a.createElement(l.J.Target,null,a.createElement(d.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(p.x,{size:"xs"},"Disabled popover dropdown is always hidden")))},code:J,centered:!0,controls:[{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1}]},V=`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" clickOutsideEvents={['mouseup', 'touchend']}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Popover will be closed with mouseup and touchend events</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,C={type:"code",component:function(){return a.createElement(l.J,{width:200,position:"bottom",clickOutsideEvents:["mouseup","touchend"]},a.createElement(l.J.Target,null,a.createElement(d.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(p.x,{size:"xs"},"Popover will be closed with mouseup and touchend events")))},code:V,centered:!0},_=(0,i.A)(s.us.Popover);function I(e){let o=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Demo:t,TargetComponent:i,KeyboardEventsTable:s}=o;return t||S("Demo",!0),s||S("KeyboardEventsTable",!0),i||S("TargetComponent",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:u}),"\n",(0,n.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(o.p,{children:["You can control Popover state with ",(0,n.jsx)(o.code,{children:"opened"})," and ",(0,n.jsx)(o.code,{children:"onChange"})," props:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Popover, Button } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Popover opened={opened} onChange={setOpened}>\n      <Popover.Target>\n        <Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>\n      </Popover.Target>\n\n      <Popover.Dropdown>Dropdown</Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.p,{children:"Controlled example with mouse events:"}),"\n",(0,n.jsx)(t,{data:w,demoProps:{toggle:!1}}),"\n",(0,n.jsx)(o.h2,{id:"focus-trap",children:"Focus trap"}),"\n",(0,n.jsxs)(o.p,{children:["If you need to use interactive elements (inputs, buttons, etc.) inside ",(0,n.jsx)(o.code,{children:"Popover.Dropdown"}),", set ",(0,n.jsx)(o.code,{children:"trapFocus"})," prop:"]}),"\n",(0,n.jsx)(t,{data:f}),"\n",(0,n.jsx)(o.h2,{id:"inline-elements",children:"Inline elements"}),"\n",(0,n.jsxs)(o.p,{children:["Enable ",(0,n.jsx)(o.code,{children:"inline"})," middleware to use ",(0,n.jsx)(o.code,{children:"Popover"})," with inline elements:"]}),"\n",(0,n.jsx)(t,{data:P}),"\n",(0,n.jsx)(o.h2,{id:"same-width",children:"Same width"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:'width="target"'})," prop to make Popover dropdown take the same width as target element:"]}),"\n",(0,n.jsx)(t,{data:T}),"\n",(0,n.jsx)(o.h2,{id:"offset",children:"offset"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"offset"})," prop to a number to change dropdown position relative to the target element.\nThis way you can control dropdown offset on main axis only."]}),"\n",(0,n.jsx)(t,{data:D}),"\n",(0,n.jsxs)(o.p,{children:["To control offset on both axis, pass object with ",(0,n.jsx)(o.code,{children:"mainAxis"})," and ",(0,n.jsx)(o.code,{children:"crossAxis"})," properties:"]}),"\n",(0,n.jsx)(t,{data:A}),"\n",(0,n.jsx)(o.h2,{id:"dropdown-arrow",children:"Dropdown arrow"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"withArrow"})," prop to add an arrow to the dropdown. Arrow is a ",(0,n.jsx)(o.code,{children:"div"})," element rotated with ",(0,n.jsx)(o.code,{children:"transform: rotate(45deg)"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"arrowPosition"})," prop determines how arrow is position relative to the target element when ",(0,n.jsx)(o.code,{children:"position"})," is set to ",(0,n.jsx)(o.code,{children:"*-start"})," and ",(0,n.jsx)(o.code,{children:"*-end"})," values on ",(0,n.jsx)(o.code,{children:"Popover"})," component.\nBy default, the value is ",(0,n.jsx)(o.code,{children:"center"})," – the arrow is positioned in the center of the target element if it is possible."]}),"\n",(0,n.jsxs)(o.p,{children:["If you change ",(0,n.jsx)(o.code,{children:"arrowPosition"})," to ",(0,n.jsx)(o.code,{children:"side"}),", then the arrow will be positioned on the side of the target element,\nand you will be able to control arrow offset with ",(0,n.jsx)(o.code,{children:"arrowOffset"})," prop. Note that when ",(0,n.jsx)(o.code,{children:"arrowPosition"})," is set to ",(0,n.jsx)(o.code,{children:"center"}),",\n",(0,n.jsx)(o.code,{children:"arrowOffset"})," prop is ignored."]}),"\n",(0,n.jsx)(t,{data:z}),"\n",(0,n.jsx)(o.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"disabled"})," prop to prevent ",(0,n.jsx)(o.code,{children:"Popover.Dropdown"})," from rendering:"]}),"\n",(0,n.jsx)(t,{data:O}),"\n",(0,n.jsx)(o.h2,{id:"click-outside",children:"Click outside"}),"\n",(0,n.jsxs)(o.p,{children:["By default, ",(0,n.jsx)(o.code,{children:"Popover"})," closes when you click outside of the dropdown. To disable this behavior, set ",(0,n.jsx)(o.code,{children:"closeOnClickOutside={false}"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["You can configure events that are used for click outside detection with ",(0,n.jsx)(o.code,{children:"clickOutsideEvents"})," prop.\nBy default, ",(0,n.jsx)(o.code,{children:"Popover"})," listens to ",(0,n.jsx)(o.code,{children:"mousedown"})," and ",(0,n.jsx)(o.code,{children:"touchstart"})," events. You can change it to any other\nevents, for example, ",(0,n.jsx)(o.code,{children:"mouseup"})," and ",(0,n.jsx)(o.code,{children:"touchend"}),":"]}),"\n",(0,n.jsx)(t,{data:C}),"\n",(0,n.jsx)(o.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,n.jsxs)(o.p,{children:["Popover uses ",(0,n.jsx)(o.a,{href:"/core/focus-trap/",children:"FocusTrap"})," component to manage focus.\nAdd ",(0,n.jsx)(o.code,{children:"data-autofocus"})," attribute to element that should receive initial focus:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover>\n      <Popover.Target>\n        <button type=\"button\">Target</button>\n      </Popover.Target>\n      <Popover.Dropdown>\n        <input />\n        <input data-autofocus />\n        <input />\n      </Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(i,{component:"Popover"}),"\n",(0,n.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(o.p,{children:["Popover follows ",(0,n.jsx)(o.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Dropdown element has ",(0,n.jsx)(o.code,{children:'role="dialog"'})," and ",(0,n.jsx)(o.code,{children:'aria-labelledby="target-id"'})," attributes"]}),"\n",(0,n.jsxs)(o.li,{children:["Target element has ",(0,n.jsx)(o.code,{children:'aria-haspopup="dialog"'}),", ",(0,n.jsx)(o.code,{children:"aria-expanded"}),", ",(0,n.jsx)(o.code,{children:'aria-controls="dropdown-id"'})," attributes"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Uncontrolled Popover will be accessible only when used with ",(0,n.jsx)(o.code,{children:"button"})," element or component that renders it (",(0,n.jsx)(o.a,{href:"/core/button/",children:"Button"}),", ",(0,n.jsx)(o.a,{href:"/core/action-icon/",children:"ActionIcon"}),", etc.).\nOther elements will not support ",(0,n.jsx)(o.code,{children:"Space"})," and ",(0,n.jsx)(o.code,{children:"Enter"})," key presses."]}),"\n",(0,n.jsx)(o.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(s,{data:[{key:"Escape",description:"Closes dropdown",condition:"Focus within dropdown"},{key:"Space/Enter",description:"Opens/closes dropdown",condition:"Focus on target element"}]})]})}var N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(_,Object.assign({},e,{children:(0,n.jsx)(I,e)}))};function S(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44982:function(e,o,t){"use strict";t.d(o,{c:function(){return n}});let n=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}]}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=17471)}),_N_E=e.O()}]);