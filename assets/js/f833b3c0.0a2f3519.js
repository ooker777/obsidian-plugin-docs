"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[540],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,h=p["".concat(s,".").concat(u)]||p[u]||l[u]||i;return t?a.createElement(h,r(r({ref:n},m),{},{components:t})):a.createElement(h,r({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6921:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],d={sidebar_position:40},s="Commands",c={unversionedId:"guides/commands",id:"guides/commands",isDocsHomePage:!1,title:"Commands",description:"Commands are actions that the user can perform from the Command Palette or by using a hot key.",source:"@site/docs/guides/commands.md",sourceDirName:"guides",slug:"/guides/commands",permalink:"/obsidian-plugin-docs/guides/commands",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/commands.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"docs",previous:{title:"Ribbon actions",permalink:"/obsidian-plugin-docs/guides/ribbon-actions"},next:{title:"Status bar",permalink:"/obsidian-plugin-docs/guides/status-bar"}},m=[{value:"Conditional commands",id:"conditional-commands",children:[]},{value:"Editor commands",id:"editor-commands",children:[]},{value:"Hot keys",id:"hot-keys",children:[]}],l={toc:m};function p(e){var n=e.components,d=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,d,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Commands are actions that the user can perform from the ",(0,i.kt)("a",{parentName:"p",href:"https://help.obsidian.md/Plugins/Command+palette"},"Command Palette")," or by using a hot key."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Command",src:t(1449).Z})),(0,i.kt)("p",null,"To register a new command for your plugin, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"addCommand()")," method inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"onload()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts" {5-11}',title:'"main.ts"',"{5-11}":!0},'import { Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.addCommand({\n      id: "print-greeting-to-console",\n      name: "Print greeting to console",\n      callback: () => {\n        console.log("Hey, you!");\n      },\n    });\n  }\n}\n')),(0,i.kt)("h2",{id:"conditional-commands"},"Conditional commands"),(0,i.kt)("p",null,"If your command is only able to run under certain conditions, then consider using ",(0,i.kt)("inlineCode",{parentName:"p"},"checkCallback")," instead."),(0,i.kt)("p",null,"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"checkCallback"),", Obsidian first performs a ",(0,i.kt)("em",{parentName:"p"},"check")," to see whether the command can run. To determine whether the callback should perform a check or an action, a ",(0,i.kt)("inlineCode",{parentName:"p"},"checking")," argument is passed to the callback."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"checking")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", perform a check."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"checking")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", perform an action.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4,6-8,11,15}","{4,6-8,11,15}":!0},"this.addCommand({\n  id: 'example-command',\n  name: 'Example command',\n  checkCallback: (checking: boolean) => {\n    if (isCommandPossible()) {\n      if (!checking) {\n        // Perform the command.\n      }\n\n      // Check passed.\n      return true;\n    }\n\n    // Check failed. Hide the command.\n    return false;\n  },\n});\n")),(0,i.kt)("h2",{id:"editor-commands"},"Editor commands"),(0,i.kt)("p",null,"If your command needs access to the editor, you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"editorCallback"),", which provides the currently active editor and its view as arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"this.addCommand({\n  id: 'example-command',\n  name: 'Example command',\n  editorCallback: (editor: Editor, view: MarkdownView) => {\n    const sel = editor.getSelection()\n\n    console.log(`You have selected: ${sel}`);\n  },\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Editor commands only appear in the Command Palette when there's an active editor available."))),(0,i.kt)("p",null,"If the editor callback can only run given under certain conditions, consider using the ",(0,i.kt)("inlineCode",{parentName:"p"},"editorCheckCallback")," instead. For more information, refer to ",(0,i.kt)("a",{parentName:"p",href:"#conditional-commands"},"conditional commands"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"this.addCommand({\n  id: 'example-command',\n  name: 'Example command',\n  editorCheckCallback: (checking: boolean, editor: Editor, view: MarkdownView) => {\n    if (isCommandPossible()) {\n      if (!checking) {\n        // Perform the command.\n      }\n\n      // Check passed.\n      return true;\n    }\n\n    // Check failed. Hide the command.\n    return false;\n  },\n});\n")),(0,i.kt)("h2",{id:"hot-keys"},"Hot keys"),(0,i.kt)("p",null,"The user can run commands using a keyboard shortcut, or ",(0,i.kt)("em",{parentName:"p"},"hot key"),". While they can configure this themselves, you can also provide a default hot key."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Avoid setting default hot keys for plugins that are intended to be used by people other than yourself. Hot keys are highly likely to conflict with those defined by other plugins or by the user themselves."))),(0,i.kt)("p",null,"In this example, the user can run the command by pressing and holding Ctrl (or Cmd on Mac) and Shift together, and then pressing the letter ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," on their keyboard."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"this.addCommand({\n  id: 'example-command',\n  name: 'Example command',\n  hotkeys: [{ modifiers: [\"Mod\", \"Shift\"], key: \"a\" }],\n  callback: () => {\n    console.log('Hey, you!');\n  },\n});\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Mod key is a special modifier key that becomes Ctrl on Windows and Linux, and Cmd on macOS."))))}p.isMDXComponent=!0},1449:function(e,n,t){n.Z=t.p+"assets/images/command-1b673de629772795516d64bc5d1cfbf4.png"}}]);