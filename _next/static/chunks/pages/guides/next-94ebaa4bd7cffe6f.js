(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2469],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},72433:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/next",function(){return t(80166)}])},80166:function(e,n,t){"use strict";t.r(n);var o=t(85893),r=t(11151),s=t(19905),i=t(9904);let a=(0,s.A)(i.us.NextJs);function p(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre"},(0,r.ah)(),e.components),{GetTemplates:t,NpmScript:s,PackagesInstallation:i,InstallScript:a}=n;return t||c("GetTemplates",!0),a||c("InstallScript",!0),s||c("NpmScript",!0),i||c("PackagesInstallation",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usage-with-nextjs",children:"Usage with Next.js"}),"\n",(0,o.jsx)(t,{type:"next"}),"\n",(0,o.jsx)(n.h2,{id:"generate-new-application",children:"Generate new application"}),"\n",(0,o.jsxs)(n.p,{children:["Follow ",(0,o.jsx)(n.a,{href:"https://nextjs.org/docs/pages/api-reference/create-next-app",children:"create-next-app"})," guide to\ncreate new Next.js application:"]}),"\n",(0,o.jsx)(s,{yarnScript:"yarn create next-app --typescript",npmScript:"npx create-next-app@latest --typescript"}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(i,{}),"\n",(0,o.jsx)(n.h2,{id:"postcss-setup",children:"PostCSS setup"}),"\n",(0,o.jsxs)(n.p,{children:["Install PostCSS plugins and ",(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),":"]}),"\n",(0,o.jsx)(a,{packages:"postcss postcss-preset-mantine postcss-simple-vars",dev:!0}),"\n",(0,o.jsxs)(n.p,{children:["Create ",(0,o.jsx)(n.code,{children:"postcss.config.js"})," file at the root of your application with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setup-with-pages-router",children:"Setup with pages router"}),"\n",(0,o.jsxs)(n.p,{children:["Add styles imports and ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," to the ",(0,o.jsx)(n.code,{children:"pages/_app.tsx"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Import styles of packages that you've installed.\n// All packages except `@mantine/hooks` require styles imports\nimport '@mantine/core/styles.css';\n\nimport type { AppProps } from 'next/app';\nimport { MantineProvider, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  /** Put your mantine theme override here */\n});\n\nexport default function App({ Component, pageProps }: AppProps) {\n  return (\n    <MantineProvider theme={theme}>\n      <Component {...pageProps} />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Create ",(0,o.jsx)(n.code,{children:"pages/_document.tsx"})," file with ",(0,o.jsx)(n.a,{href:"/theming/color-schemes",children:"ColorSchemeScript"})," component.\nNote that it is required even if you use only one color scheme in your application."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Html, Head, Main, NextScript } from 'next/document';\nimport { ColorSchemeScript } from '@mantine/core';\n\nexport default function Document() {\n  return (\n    <Html lang=\"en\">\n      <Head>\n        <ColorSchemeScript defaultColorScheme=\"auto\" />\n      </Head>\n      <body>\n        <Main />\n        <NextScript />\n      </body>\n    </Html>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"All set! Start development server:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setup-with-app-router",children:"Setup with app router"}),"\n",(0,o.jsxs)(n.p,{children:["Add ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),", ",(0,o.jsx)(n.a,{href:"/theming/color-schemes",children:"ColorSchemeScript"}),"\nand styles imports to the ",(0,o.jsx)(n.code,{children:"app/layout.tsx"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Import styles of packages that you've installed.\n// All packages except `@mantine/hooks` require styles imports\nimport '@mantine/core/styles.css';\n\nimport { MantineProvider, ColorSchemeScript } from '@mantine/core';\n\nexport const metadata = {\n  title: 'My Mantine app',\n  description: 'I have followed setup instructions carefully',\n};\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang=\"en\">\n      <head>\n        <ColorSchemeScript />\n      </head>\n      <body>\n        <MantineProvider>{children}</MantineProvider>\n      </body>\n    </html>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"All set! Start development server:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,o.jsx)(n.h2,{id:"app--pages-router-together",children:"app + pages router together"}),"\n",(0,o.jsxs)(n.p,{children:["If you use both app and pages router in one application, you need to setup both ",(0,o.jsx)(n.code,{children:"pages/_app.tsx"}),"\nand ",(0,o.jsx)(n.code,{children:"app/layout.tsx"})," files as described above."]}),"\n",(0,o.jsx)(n.h2,{id:"nextjs-link-with-polymorphic-components",children:"Next.js Link with polymorphic components"}),"\n",(0,o.jsxs)(n.p,{children:["Next.js ",(0,o.jsx)(n.code,{children:"Link"})," does not work in the same way as other similar components in all Next.js versions."]}),"\n",(0,o.jsx)(n.p,{children:"With Next.js 12 and below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Link href=\"/hello\" passHref>\n      <Button component=\"a\">Next link button</Button>\n    </Link>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"With Next.js 13 and above:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} href=\"/hello\">\n      Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"server-components",children:"Server components"}),"\n",(0,o.jsxs)(n.p,{children:["All Mantine components use ",(0,o.jsx)(n.code,{children:"useContext"})," hook to support ",(0,o.jsx)(n.a,{href:"/theming/default-props",children:"default props"}),"\nand ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),". Mantine components cannot be used as server components.\nIt means that components will render both on the server and client."]}),"\n",(0,o.jsxs)(n.p,{children:["Entry points of all ",(0,o.jsx)(n.code,{children:"@mantine/*"})," packages (",(0,o.jsx)(n.code,{children:"index.js"})," files) have ",(0,o.jsx)(n.code,{children:"'use client';"})," directive at the\ntop of the file – you do not need to add ",(0,o.jsx)(n.code,{children:"'use client';"})," to your pages/layouts/components."]}),"\n",(0,o.jsx)(n.h2,{id:"compound-components-in-server-components",children:"Compound components in server components"}),"\n",(0,o.jsxs)(n.p,{children:["Some components like ",(0,o.jsx)(n.a,{href:"/core/popover",children:"Popover"})," have associated compound components (",(0,o.jsx)(n.code,{children:"Component.XXX"}),"),\nwhere ",(0,o.jsx)(n.code,{children:"XXX"})," is a compound component name. Compound components cannot be used in server components.\nInstead, use ",(0,o.jsx)(n.code,{children:"ComponentXXX"})," syntax or add ",(0,o.jsx)(n.code,{children:"'use client';"})," directive to the top of the file."]}),"\n",(0,o.jsx)(n.p,{children:"Example that will not work in server components:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\n// This will throw an error\nexport default function Page() {\n  return (\n    <Popover>\n      <Popover.Trigger>Trigger</Popover.Trigger>\n      <Popover.Dropdown>Dropdown</Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Example with ",(0,o.jsx)(n.code,{children:"'use client';"})," directive:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"'use client';\nimport { Popover } from '@mantine/core';\n\n// No error\nexport default function Page() {\n  return (\n    <Popover>\n      <Popover.Trigger>Trigger</Popover.Trigger>\n      <Popover.Dropdown>Dropdown</Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Example with ",(0,o.jsx)(n.code,{children:"ComponentXXX"})," syntax:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Popover, PopoverTarget, PopoverDropdown } from '@mantine/core';\n\n// No error\nexport default function Page() {\n  return (\n    <Popover>\n      <PopoverTarget>Trigger</PopoverTarget>\n      <PopoverDropdown>Dropdown</PopoverDropdown>\n    </Popover>\n  );\n}\n"})})]})}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(a,Object.assign({},e,{children:(0,o.jsx)(p,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=72433)}),_N_E=e.O()}]);