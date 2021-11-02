"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[0],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2986:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1.1},s="Getting Started",c={unversionedId:"tools/lsp-factoryjs/getting-started",id:"tools/lsp-factoryjs/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The @lukso/lsp-factory.js package allows simple deployments of LSP3-UniversalProfiles and LSP4-DigitalCertificates.",source:"@site/docs/tools/lsp-factoryjs/getting-started.md",sourceDirName:"tools/lsp-factoryjs",slug:"/tools/lsp-factoryjs/getting-started",permalink:"/tools/lsp-factoryjs/getting-started",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/getting-started.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1},sidebar:"toolsSidebar",previous:{title:"Methods",permalink:"/tools/erc725js/technical-reference/ERC725"},next:{title:"Constructing LSP3 Metadata",permalink:"/tools/lsp-factoryjs/constructing-lsp3-data"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Instantiation",id:"instantiation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@lukso/lsp-factory.js")," package allows simple deployments of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile.md"},"LSP3-UniversalProfiles")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalCertificate.md"},"LSP4-DigitalCertificates"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub repo: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/tools-lsp-factory"},"https://github.com/lukso-network/tools-lsp-factory")),(0,o.kt)("li",{parentName:"ul"},"NPM: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@lukso/lsp-factory.js"},"https://www.npmjs.com/package/@lukso/lsp-factory.js"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lukso/lsp-factory.js\n")),(0,o.kt)("h2",{id:"instantiation"},"Instantiation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { LSPFactory } from "@lukso/lsp-factory.js";\n\nconst deployKey = \'0x...\' // Private key of the account which will deploy UPs\nconst provider = "https://rpc.l14.lukso.network" // RPC url used to connect to the network\nconst chainId = 22 // Chain Id of the network you want to connect to\n\nconst lspFactory = new LSPFactory(provider, {\n  deployKey,\n  chainId\n});\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Deploying a Universal Profile is as simple as running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myContracts = await lspFactory.LSP3UniversalProfile.deploy({\n    controllingAccounts: ['0x...'], // Account addresses which will control the UP\n    lsp3Profile: myUniversalProfileData\n  });\n};\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," contains the LSP3 metadata of your Universal Profile. This is the 'face' of your Universal Profile and contains all the public information people will see when they view your UP like your name, description and profile image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const myUniversalProfileData = {\n    name: "My Universal Profile",\n    description: "My cool Universal Profile",\n    profileImage: [\n      {\n          width: 500,\n          height: 500,\n          hashFunction: "keccak256(bytes)",\n          hash: "0x...", // bytes32 hex string of the image hash\n          url: "ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp",\n      },\n    ],\n    backgroundImage: [\n      {\n          width: 500,\n          height: 500,\n          hashFunction: "keccak256(bytes)",\n          hash: "0x...", // bytes32 hex string of the image hash\n          url: "ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp",\n      },\n    ],\n    tags: [\'Fashion\', \'Design\'],\n    links: [{ title: "My Website", url: "www.my-website.com" }],\n},\n')),(0,o.kt)("p",null,"When deploying your UP your LSP3 data will be automatically uploaded to IPFS."),(0,o.kt)("p",null,"If you already have LSP3 data uploaded then simply pass an IPFS URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myUniversalProfileData = 'https://ipfs.lukso.network/ipfs/QmPzUfdKhY6vfcTNDnitwKnnpm5GqjYSmw9todNVmi4bqy'\n")),(0,o.kt)("p",null,"To create a 'faceless' Universal Profile, omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," value. This can be useful if you wish to create the LSP3 metadata later or create an anonymous UP. "),(0,o.kt)("p",null,"You can now continue using your UP address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myUPAddress = myContracts.ERC725Account.address;\n")))}f.isMDXComponent=!0}}]);