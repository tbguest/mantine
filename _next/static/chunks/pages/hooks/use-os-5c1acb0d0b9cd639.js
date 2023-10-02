(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[440],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},34357:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-os",function(){return t(90713)}])},90713:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var i=t(85893),s=t(11151),o=t(19905),r=t(9904),d=t(67294),c=t(67510);function a(){if("undefined"==typeof window)return"undetermined";let{userAgent:e}=window.navigator;return/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i.test(e)?"macos":/(iPhone)|(iPad)|(iPod)/i.test(e)?"ios":/(Win32)|(Win64)|(Windows)|(WinCE)/i.test(e)?"windows":/Android/i.test(e)?"android":/Linux/i.test(e)?"linux":"undetermined"}var u=t(72039);let l=`
import { useOs } from '@mantine/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`,h={type:"code",component:function(){let e=function(e={getValueInEffect:!0}){let[n,t]=(0,d.useState)(e.getValueInEffect?"undetermined":a());return(0,c.Y)(()=>{e.getValueInEffect&&t(a)},[]),n}();return d.createElement(u.x,{ta:"center"},"Your os is ",d.createElement("b",null,e))},code:l},p=(0,o.A)(r.us.useOs);function f(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,s.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-os"})," returns user's os. Possible values are: ",(0,i.jsx)(n.code,{children:"undetermined"}),", ",(0,i.jsx)(n.code,{children:"macos"}),", ",(0,i.jsx)(n.code,{children:"ios"}),", ",(0,i.jsx)(n.code,{children:"windows"}),", ",(0,i.jsx)(n.code,{children:"android"}),", ",(0,i.jsx)(n.code,{children:"linux"}),".\nIf the OS cannot be identified, for example, during server side rendering ",(0,i.jsx)(n.code,{children:"undetermined"})," will be returned."]}),"\n",(0,i.jsx)(t,{data:h}),"\n",(0,i.jsx)(n.h2,{id:"os-type",children:"OS type"}),"\n",(0,i.jsxs)(n.p,{children:["You can import ",(0,i.jsx)(n.code,{children:"OS"})," union type from ",(0,i.jsx)(n.code,{children:"@mantine/hooks"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import type { OS } from '@mantine/hooks';\n// OS type is 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function getOS(options?: {\n  getValueInEffect: boolean;\n}): 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';\n"})})]})}var v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(p,Object.assign({},e,{children:(0,i.jsx)(f,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=34357)}),_N_E=e.O()}]);