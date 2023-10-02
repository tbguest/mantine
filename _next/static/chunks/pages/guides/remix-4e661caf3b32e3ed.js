(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3540],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},67936:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/remix",function(){return t(87452)}])},87452:function(e,n,t){"use strict";t.r(n);var s=t(85893),r=t(11151),i=t(19905),a=t(9904);let o=(0,i.A)(a.us.Remix);function c(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components),{GetTemplates:t,PackagesInstallation:i,InstallScript:a}=n;return t||l("GetTemplates",!0),a||l("InstallScript",!0),i||l("PackagesInstallation",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usage-with-remix",children:"Usage with Remix"}),"\n",(0,s.jsx)(t,{type:"remix"}),"\n",(0,s.jsx)(n.h2,{id:"generate-new-application",children:"Generate new application"}),"\n",(0,s.jsxs)(n.p,{children:["Follow ",(0,s.jsx)(n.a,{href:"https://remix.run/",children:"Remix getting started guide"})," guide to create new Remix application:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx create-remix@latest\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"postcss-setup",children:"PostCSS setup"}),"\n",(0,s.jsxs)(n.p,{children:["Install PostCSS plugins and ",(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),":"]}),"\n",(0,s.jsx)(a,{packages:"postcss postcss-preset-mantine postcss-simple-vars",dev:!0}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"postcss.config.cjs"})," file at the root of your application with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enable PostCSS in Remix ",(0,s.jsx)(n.code,{children:"remix.config.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  postcss: true,\n  // ... other options\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["Add styles imports, ",(0,s.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," and ",(0,s.jsx)(n.a,{href:"/theming/color-schemes",children:"ColorSchemeScript"})," to ",(0,s.jsx)(n.code,{children:"app/root.tsx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Import styles of packages that you've installed.\n// All packages except `@mantine/hooks` require styles imports\nimport '@mantine/core/styles.css';\n\nimport { cssBundleHref } from '@remix-run/css-bundle';\nimport type { LinksFunction } from '@remix-run/node';\nimport { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';\nimport { MantineProvider, ColorSchemeScript } from '@mantine/core';\n\nexport const links: LinksFunction = () => [\n  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),\n];\n\nexport default function App() {\n  return (\n    <html lang=\"en\">\n      <head>\n        <meta charSet=\"utf-8\" />\n        <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n        <Meta />\n        <Links />\n        <ColorSchemeScript />\n      </head>\n      <body>\n        <MantineProvider>\n          <Outlet />\n          <ScrollRestoration />\n          <Scripts />\n          <LiveReload />\n        </MantineProvider>\n      </body>\n    </html>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"All set! Start development server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})})]})}function l(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(o,Object.assign({},e,{children:(0,s.jsx)(c,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=67936)}),_N_E=e.O()}]);