"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[588],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),c=i,m=g["".concat(l,".").concat(c)]||g[c]||d[c]||s;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7738:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],o={sidebar_position:55},l="Settings",p={unversionedId:"settings",id:"settings",isDocsHomePage:!1,title:"Settings",description:"If you want users to be able to configure parts of your plugin themselves, you can expose them as settings.",source:"@site/docs/settings.md",sourceDirName:".",slug:"/settings",permalink:"/obsidian-plugin-docs/settings",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/settings.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55},sidebar:"tutorialSidebar",previous:{title:"Status bar",permalink:"/obsidian-plugin-docs/status-bar"},next:{title:"Events",permalink:"/obsidian-plugin-docs/events"}},u=[{value:"Create a settings definition",id:"create-a-settings-definition",children:[]},{value:"Save and load the settings object",id:"save-and-load-the-settings-object",children:[]},{value:"Provide default values",id:"provide-default-values",children:[]},{value:"Register a settings tab",id:"register-a-settings-tab",children:[]}],d={toc:u};function g(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"settings"},"Settings"),(0,s.kt)("p",null,"If you want users to be able to configure parts of your plugin themselves, you can expose them as ",(0,s.kt)("em",{parentName:"p"},"settings"),"."),(0,s.kt)("p",null,"In this guide, you'll learn how to create a settings page like this \ud83d\udc47"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Settings",src:n(6086).Z})),(0,s.kt)("p",null,"The main reason to add settings to a plugin is to store configuration that persists even after the user quits Obsidian. The following example demonstrates how to save and load settings from disk:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},'import { App, Plugin } from "obsidian";\n\ninterface ExamplePluginSettings {\n  dateFormat: string;\n}\n\nconst DEFAULT_SETTINGS: Partial<ExamplePluginSettings> = {\n  dateFormat: "YYYY-MM-DD",\n};\n\nexport default class ExamplePlugin extends Plugin {\n  settings: ExamplePluginSettings;\n\n  async onload() {\n    await this.loadSettings();\n  }\n\n  async loadSettings() {\n    this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData());\n  }\n\n  async saveSettings() {\n    await this.saveData(this.settings);\n  }\n}\n')),(0,s.kt)("p",null,"There's a lot going on here \ud83e\udd2f, so let's look closer at each part."),(0,s.kt)("h2",{id:"create-a-settings-definition"},"Create a settings definition"),(0,s.kt)("p",null,"First, you need to create a definition, ",(0,s.kt)("inlineCode",{parentName:"p"},"ExamplePluginSettings"),", for what settings you want the user to be able to configure. While the plugin is enabled, you can access the settings from the ",(0,s.kt)("inlineCode",{parentName:"p"},"settings")," member variable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface ExamplePluginSettings {\n  dateFormat: string;\n}\n\nexport default class ExamplePlugin extends Plugin {\n  settings: ExamplePluginSettings;\n\n  // ...\n}\n")),(0,s.kt)("h2",{id:"save-and-load-the-settings-object"},"Save and load the settings object"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"loadData()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"saveData()")," provide an easy way to store and retrieve data from disk. The example also introduces two helper methods that makes it easier to use ",(0,s.kt)("inlineCode",{parentName:"p"},"loadData()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"saveData()")," from other parts of the plugin."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export default class ExamplePlugin extends Plugin {\n\n  // ...\n\n  async loadSettings() {\n    this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData());\n  }\n\n  async saveSettings() {\n    await this.saveData(this.settings);\n  }\n}\n")),(0,s.kt)("h2",{id:"provide-default-values"},"Provide default values"),(0,s.kt)("p",null,"When the user enables the plugin for the first time, none of the settings will have been configured yet. The example above provides default values for any missing settings."),(0,s.kt)("p",null,"To understand how this work, let's look a little closer at this code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"Object.assign(DEFAULT_SETTINGS, await this.loadData())\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Object.assign()")," is a JavaScript function that copies all properties from one object to another. Any properties that are returned by ",(0,s.kt)("inlineCode",{parentName:"p"},"loadData()")," override the properties in ",(0,s.kt)("inlineCode",{parentName:"p"},"DEFAULT_SETTINGS"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const DEFAULT_SETTINGS: Partial<ExamplePluginSettings> = {\n  dateFormat: "YYYY-MM-DD",\n};\n')),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"Partial<Type>")," is a TypeScript utility that returns a type with all properties of ",(0,s.kt)("inlineCode",{parentName:"p"},"Type")," set to optional. It enables type checking while letting you only define the properties you want to provide defaults for."))),(0,s.kt)("h2",{id:"register-a-settings-tab"},"Register a settings tab"),(0,s.kt)("p",null,"The plugin can now save and load plugin configuration, but the user doesn't yet have any way of changing any of the settings. Let's change that by creating a ",(0,s.kt)("em",{parentName:"p"},"settings tab"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},'import { App, PluginSettingTab, Setting } from "obsidian";\n\nclass ExampleSettingTab extends PluginSettingTab {\n  plugin: ExamplePlugin;\n\n  constructor(app: App, plugin: ExamplePlugin) {\n    super(app, plugin);\n    this.plugin = plugin;\n  }\n\n  display(): void {\n    let { containerEl } = this;\n\n    containerEl.empty();\n\n    new Setting(containerEl)\n      .setName("Date format")\n      .setDesc("Default date format")\n      .addText((text) =>\n        text\n          .setPlaceholder("MMMM dd, yyyy")\n          .setValue(this.plugins.settings.dateFormat)\n          .onChange(async (value) => {\n            this.plugin.settings.dateFormat = value;\n            await this.plugin.saveSettings();\n          })\n      );\n  }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"display()")," is where you build the content for the settings tab."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"new Setting(containerEl)")," appends a setting to the container element. This example uses a text field using ",(0,s.kt)("inlineCode",{parentName:"p"},"addText()"),", but there are several other setting types available."),(0,s.kt)("p",null,"Update the settings object whenever the value of the text field changes, and then save it to disk:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2,3}","{2,3}":!0},".onChange(async (value) => {\n  this.plugin.settings.dateFormat = value;\n  await this.plugin.saveSettings();\n})\n")),(0,s.kt)("p",null,"Once you're happy with it, register the settings tab in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Plugin")," class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async onload() {\n  this.addSettingTab(new ExampleSettingTab(this.app, this));\n}\n")),(0,s.kt)("p",null,"Nice work! \ud83d\udcaa Your users will thank you for giving them a way to customize how they interact with your plugin. Before heading to the next guide, experiment with what you've leared by adding another setting."))}g.isMDXComponent=!0},6086:function(e,t,n){t.Z=n.p+"assets/images/settings-87e1136355eba40a3ee873ac20e5ff73.png"}}]);