"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9044],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8871:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={sidebar_position:1.1,title:"Universal Profile"},s="Deploying a Universal Profile",p={unversionedId:"tools/lsp-factoryjs/deployment/universal-profile",id:"tools/lsp-factoryjs/deployment/universal-profile",title:"Universal Profile",description:"LSPFactory allows easy deployment and configuration of a Universal Profile in one line of code:",source:"@site/docs/tools/lsp-factoryjs/deployment/universal-profile.md",sourceDirName:"tools/lsp-factoryjs/deployment",slug:"/tools/lsp-factoryjs/deployment/universal-profile",permalink:"/tools/lsp-factoryjs/deployment/universal-profile",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/deployment/universal-profile.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1,title:"Universal Profile"},sidebar:"toolsSidebar",previous:{title:"Getting Started",permalink:"/tools/lsp-factoryjs/getting-started"},next:{title:"NFT2.0 (LSP7, LSP8)",permalink:"/tools/lsp-factoryjs/deployment/nft"}},c={},d=[{value:"Profile Options",id:"profile-options",level:2},{value:"Controller Addresses",id:"controller-addresses",level:3},{value:"Adding LSP3 Metadata",id:"adding-lsp3-metadata",level:3},{value:"Setting Profile and Background Images",id:"setting-profile-and-background-images",level:3},{value:"Using Image Metadata",id:"using-image-metadata",level:4},{value:"Using Javascript File object",id:"using-javascript-file-object",level:4},{value:"Using Image Buffer",id:"using-image-buffer",level:4},{value:"Uploading LSP3 metadata to IPFS",id:"uploading-lsp3-metadata-to-ipfs",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Proxy Deployment",id:"proxy-deployment",level:3},{value:"Universal Receiver Delegate proxy deployment",id:"universal-receiver-delegate-proxy-deployment",level:4},{value:"Using a Custom Address",id:"using-a-custom-address",level:3},{value:"Contract Versions",id:"contract-versions",level:3},{value:"Deploying Custom Bytecode",id:"deploying-custom-bytecode",level:3},{value:"IPFS Upload Options",id:"ipfs-upload-options",level:3},{value:"Reactive Deployment",id:"reactive-deployment",level:3}],m={toc:d};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-a-universal-profile"},"Deploying a Universal Profile"),(0,o.kt)("p",null,"LSPFactory allows easy deployment and configuration of a Universal Profile in one line of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"lspFactory.LSP3UniversalProfile.deploy(\n  profileDeploymentOptions,\n  contractDeploymentOptions?\n);\n")),(0,o.kt)("p",null,"This will deploy the following contracts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp0-erc725account"},"LSP0 ERC725 Account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp6-key-manager"},"LSP6 Key Manager"))),(0,o.kt)("p",null,"Then, it will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"upload metadata to IPFS and set the ",(0,o.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3 Universal Profile")," metadata."),(0,o.kt)("li",{parentName:"ul"},"attach the Universal Receiver Delegate to the ERC725 Account."),(0,o.kt)("li",{parentName:"ul"},"set the Key Manager as the owner of the ERC725 Account."),(0,o.kt)("li",{parentName:"ul"},"sets all ",(0,o.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp6-key-manager#-types-of-permissions"},"permissions")," for the ",(0,o.kt)("inlineCode",{parentName:"li"},"controllerAddresses")," except ",(0,o.kt)("inlineCode",{parentName:"li"},"DELEGATECALL"),".")),(0,o.kt)("p",null,"These smart contracts linked with some ",(0,o.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3 Universal Profile Metadata")," forms a Universal Profile. The metadata is the 'face' of your profile and contains information such as your name, description and profile image."),(0,o.kt)("h2",{id:"profile-options"},"Profile Options"),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"profileDeploymentOptions")," object you can set profile configuration options such as controller addresses and LSP3 metadata."),(0,o.kt)("h3",{id:"controller-addresses"},"Controller Addresses"),(0,o.kt)("p",null,"By passing ",(0,o.kt)("inlineCode",{parentName:"p"},"controllerAddresses")," you can set the addresses which should be able to control your Universal Profile. Addresses passed here will be given all LSP6 KeyManager permissions except ",(0,o.kt)("inlineCode",{parentName:"p"},"DELEGATECALL")," to prevent potential ",(0,o.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/hacks/delegatecall/"},"vulnerabilities"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"controllerAddresses")," can be addresses of externally owned accounts or another smart contract such as a Universal Profile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await lspFactory.LSP3UniversalProfile.deploy({\n  controllerAddresses: [\n    '0x7Ab53a0C861fb955050A8DA109eEeA5E61fd8Aa4',\n    '0x56fE4E7dc2bc0b6397E4609B07b4293482E3F72B',\n  ],\n});\n")),(0,o.kt)("h3",{id:"adding-lsp3-metadata"},"Adding LSP3 Metadata"),(0,o.kt)("p",null,"When deploying a Universal Profile with LSPFactory you can specify your Universal Profile metadata using the ",(0,o.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," key in the profileDeploymentOptions object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await lspFactory.LSP3UniversalProfile.deploy({\n  controllerAddresses: ['0x...'],\n  lsp3Profile: myUniversalProfileData,\n});\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Profile Metadata can be passed as either an object containing the metadata you want to upload, or an IPFS url of your previously uploaded metadata."))),(0,o.kt)("p",null,"If an object is passed, LSPFactory will process and upload your metadata to IPFS. See ",(0,o.kt)("a",{parentName:"p",href:"././universal-profile#uploadoptions-1"},"UploadOptions")," for details on how to specify a custom IPFS gateway."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='Setting LSP3 metadata to be uploaded'",title:"'Setting",LSP3:!0,metadata:!0,to:!0,be:!0,"uploaded'":!0},"await lspFactory.LSP3UniversalProfile.deploy({\n    controllerAddresses: ['0x...'],\n    lsp3Profile: {\n      name: 'My Universal Profile',\n      description: 'My cool Universal Profile',\n      tags: ['public-profile'],\n      links: [{ title: 'My Website', url: 'www.my-website.com' }],\n    }\n  });\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='Setting LSP3 metadata using shortened IPFS url'",title:"'Setting",LSP3:!0,metadata:!0,using:!0,shortened:!0,IPFS:!0,"url'":!0},"await lspFactory.LSP3UniversalProfile.deploy({\n    controllerAddresses: ['0x...'],\n    lsp3Profile: 'ipfs://QmQ7Wq4y2gWiuzB4a4Wd6UiidKNpzCJRpgzFqQwzyq6SsV'\n  });\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='Setting LSP3 metadata using HTTP IPFS url'",title:"'Setting",LSP3:!0,metadata:!0,using:!0,HTTP:!0,IPFS:!0,"url'":!0},"await lspFactory.LSP3UniversalProfile.deploy({\n    controllerAddresses: ['0x...'],\n    lsp3Profile: 'https://ipfs.lukso.network/ipfs/QmRzUfdKhY6vhcTNDnitwKnnpm5GqjYSmw9tcdNVmi4bqy'\n  });\n};\n")),(0,o.kt)("h3",{id:"setting-profile-and-background-images"},"Setting Profile and Background Images"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"profileImage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundImage")," can be passed inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," object . These can be passed as an object containing previously uploaded image Metadata, a Javascript ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," object if being used client-side or ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageBuffer")," if the library is being used in a Node environment."),(0,o.kt)("h4",{id:"using-image-metadata"},"Using Image Metadata"),(0,o.kt)("p",null,"An LSP3 Profile requires ",(0,o.kt)("inlineCode",{parentName:"p"},"profileImage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundImage")," to be uploaded in multiple sizes so that interfaces can choose which one to load for better loading performance."),(0,o.kt)("p",null,"If you already have an image uploaded to IPFS in multiple sizes, you can pass image metadata inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," object when deploying a Profile."),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"profileImage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundImage")," take an Array, where each element is the metadata of a different image size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='Setting LSP3 metadata to be uploaded with profile and background images'",title:"'Setting",LSP3:!0,metadata:!0,to:!0,be:!0,uploaded:!0,with:!0,profile:!0,and:!0,background:!0,"images'":!0},"const myUniversalProfileData = {\n  name: 'My Universal Profile',\n  description: 'My cool Universal Profile',\n  profileImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      hash: '0xfdafad027ecfe57eb4ad044b938805d1dec209d6e9f960fc320d7b9b11cced14', // bytes32 hex string of the image hash\n      url: 'ipfs://QmPLqMFDxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrajSGp',\n    },\n    ... // Multiple image sizes should be included\n  ],\n  backgroundImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14', // bytes32 hex string of the image hash\n      url: 'ipfs://QmPLqMFHxiUDYAom3Zg4SiwoxDaFcZpHXpAmiDzxrtjSGp',\n    },\n    ... // Multiple image sizes should be included\n  ],\n};\n\nawait lspFactory.LSP3UniversalProfile.deploy({\n    controllingAccounts: ['0x...'],\n    lsp3Profile: myUniversalProfileData\n  });\n};\n")),(0,o.kt)("h4",{id:"using-javascript-file-object"},"Using Javascript File object"),(0,o.kt)("p",null,"Javascript offers a ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," object for easy handling of files inside a browser. These can be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"profileImage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundImage")," fields to allow easy drag and drop of images from a user interface."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Javascript's ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," object is only available client-side. If using LSPFactory in a Node environment Images should be uploaded as an ",(0,o.kt)("a",{parentName:"p",href:"./universal-profile#using-image-buffer"},"ImageBuffer")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'<input type="file" id="input">\n\n<script>\n    const myLocalFile = document.getElementById(\'input\').files[0];\n\n    const myUniversalProfileData = {\n        name: "My Universal Profile",\n        description: "My cool Universal Profile",\n        profileImage: myLocalFile,\n        backgroundImage: myLocalFile,\n        tags: [\'Fashion\', \'Design\'],\n        links: [{ title: "My Website", url: "www.my-website.com" }],\n    };\n\n    await lspFactory.LSP3UniversalProfile.deploy({\n      controllingAccounts: [\'0x...\'],\n      lsp3Profile: myUniversalProfileData\n    });\n};\n<script/>\n')),(0,o.kt)("p",null,"LSPFactory will create 5 resized versions of the passed image, with max sizes of 1800x1800, 1024x1024, 640x640, 320x320, 180x180. These resized images will be set inside the LSP3 metadata and attached to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC725Account"),"."),(0,o.kt)("h4",{id:"using-image-buffer"},"Using Image Buffer"),(0,o.kt)("p",null,"If using LSPFactory in a Node environment where Javascript ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," object is not available, ",(0,o.kt)("inlineCode",{parentName:"p"},"profileImage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundImage")," can be uploaded by passing a File Buffer directly."),(0,o.kt)("p",null,"The image mimetype must also be passed so that the image can be reconstructed and resized. Supported mimetypes can be easily accessed by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"SupportedImageBufferFormats")," enum exported by LSPFactory. Supported mime types are ",(0,o.kt)("inlineCode",{parentName:"p"},"image/png"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"image/bmp"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"image/jpeg")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"image/gif"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const profileImageBuffer = fs.readFileSync('./my-profile-image.png');\nconst backgroundImageBuffer = fs.readFileSync('./my-background-image.png');\n\nconst myUniversalProfileData = {\n  name: 'My Universal Profile',\n  description: 'My cool Universal Profile',\n  profileImage: {\n    buffer: profileImageBuffer,\n    mimeType: SupportedImageBufferFormats.png,\n  },\n  backgroundImage: {\n    buffer: backgroundImageBuffer,\n    mimeType: SupportedImageBufferFormats.png,\n  },\n};\n\nawait lspFactory.LSP3UniversalProfile.deploy({\n  controllingAccounts: ['0x...'],\n  lsp3Profile: myUniversalProfileData,\n});\n")),(0,o.kt)("h3",{id:"uploading-lsp3-metadata-to-ipfs"},"Uploading LSP3 metadata to IPFS"),(0,o.kt)("p",null,"You can upload your LSP3 metadata before deploying a Universal Profile by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadProfileData")," method. This uses the same ",(0,o.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," object schema defined ",(0,o.kt)("a",{parentName:"p",href:"./universal-profile#adding-lsp3-metadata"},"above")," when deploying a Universal Profile."),(0,o.kt)("p",null,"Returns an object containing the IPFS upload location of your metadata, and your lsp3metdata as a javascript object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"myLSPFactory.LSP3UniversalProfile.uploadProfileData(\n  lsp3Profile,\n  uploadOptions?\n);\n")),(0,o.kt)("p",null,"To upload using a custom IPFS gateway pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadOptions")," object. This is the same ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadOptions")," object used when deploying a Universal Profile. Read more ",(0,o.kt)("a",{parentName:"p",href:"./universal-profile#uploadoptions"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"uploadProfileData")," is available as both a static or non-static method so can be called without instantiating an LSPFactory object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="calling uploadProfileData on LSPFactory instance"',title:'"calling',uploadProfileData:!0,on:!0,LSPFactory:!0,'instance"':!0},'const uploadResult = await myLSPFactory.LSP3UniversalProfile.uploadProfileData(\n  myUniversalProfileData,\n);\n\nconst myUniversalProfileMetadataJSON = uploadResult.profile;\n/**\n{\n  LSP3Profile: {\n    name: "My Universal Profile",\n    description: "My Cool Universal Profile"\n  }\n}\n*/\n\nconst myUniversalProfileMetadataUrl = uploadResult.url;\n// \'https://ipfs.lukso.network/ipfs/QmPzUfdKhY6vfcLNDnitwKanpm5GqjYSmw9todNVmi4bqy\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="static uploadProfileData call"',title:'"static',uploadProfileData:!0,'call"':!0},'const uploadResult = await LSP3UniversalProfile.uploadProfileData(\n  myUniversalProfileData,\n);\n\nconst myUniversalProfileMetadataJSON = uploadResult.profile;\n/**\n{\n  LSP3Profile: {\n    name: "My Universal Profile",\n    description: "My Cool Universal Profile"\n  }\n}\n*/\n\nconst myUniversalProfileMetadataUrl = uploadResult.url;\n// \'https://ipfs.lukso.network/ipfs/QmPzUfdKhY6vfcLNDnitwKanpm5GqjYSmw9todNVmi4bqy\'\n')),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"A Universal Profile is composed of three contracts. ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC725Account"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LSP6KeyManager")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LSP1UniversalRecieverDelegate"),". You can configure how these contracts should be deployed inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"contractDeploymentOptions")," object when deploying a Universal Profile. Each contract can be configured separately, the available options are the same for all contracts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    ERC725Account: {\n        version: '0.4.1',\n    },\n    UniversalReceiverDelegate: {\n        baseContract: '0x...'\n    },\n    KeyManager: {\n        libAddress: '0x6c1F3Ed2F99054C88897e2f32187ef15c62dC560'\n    },\n})\n")),(0,o.kt)("h3",{id:"proxy-deployment"},"Proxy Deployment"),(0,o.kt)("p",null,"Allows you to determine whether your contract should be deployed as a ",(0,o.kt)("strong",{parentName:"p"},"minimal proxy contract")," based on ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1167"},"EIP1167")," or a full contract with a constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    ERC725Account: {\n        deployProxy: false,\n    },\n})\n")),(0,o.kt)("p",null,"A proxy contract is a lightweight contract which inherits its logic by referencing the address of a contract already deployed on the blockchain. This allows cheaper deployment of Universal Profiles because only the proxy contract needs to be deployed."),(0,o.kt)("p",null,"LSPFactory stores base contract addresses inside the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json"},"version file"),". If no version is specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," parameter, the latest available base contract version will be used."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"LSPFactory stores base contract addresses for different versions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json"},"internally")," and uses the latest available version if no version is specified."))),(0,o.kt)("p",null,"If you do not want your contract to use proxy deployment you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"deployProxy")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". This will deploy a 'full' contract with a constructor rather than using a proxy deployment with initializer. When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", the latest available contract version will be deployed."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"deployProxy")," defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC725Account")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LSP6KeyManager")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"UniversalReceiverDelegate"),"."),(0,o.kt)("p",null,"When using proxy deployment, LSPFactory will check that there is bytecode deployed at the base contract address before deploying. If there is none, a new base contract will be deployed and referenced in the proxy contract. This is useful when using LSPFactory on a local development network like Hardhat where there will be no pre-deployed base contracts."),(0,o.kt)("h4",{id:"universal-receiver-delegate-proxy-deployment"},"Universal Receiver Delegate proxy deployment"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UniversalReceiverDelegate")," is a logic contract which writes to the Universal Profile when it receives some asset. This is not specific to any particular Universal Profile so the same ",(0,o.kt)("inlineCode",{parentName:"p"},"UniversalReceiverDelegate")," contract can be used for multiple different Universal Profile deployments."),(0,o.kt)("p",null,"By default LSPFactory will use the latest available version of ",(0,o.kt)("inlineCode",{parentName:"p"},"UniversalReceiverDelegate")," version stored in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json"},"version file"),". This address is used directly on the Universal Profile and is given the ",(0,o.kt)("inlineCode",{parentName:"p"},"SETDATA")," LSP6 permission. This means that no ",(0,o.kt)("inlineCode",{parentName:"p"},"UniversalReceiverDelegate")," contract needs to be deployed when deploying a Universal Profile which further saves on the gas cost of Universal Profile deployment."),(0,o.kt)("p",null,"To specify that your Universal Profile should use proxy deployment when deploying the ",(0,o.kt)("inlineCode",{parentName:"p"},"UniversalReceiverDelegate")," contract, set ",(0,o.kt)("inlineCode",{parentName:"p"},"deployProxy")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    UniversalReceiverDelegate: {\n        deployProxy: true,\n    },\n})\n")),(0,o.kt)("h3",{id:"using-a-custom-address"},"Using a Custom Address"),(0,o.kt)("p",null,"You can specify the base contract address of a contract by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"libAddress")," parameter. This allows you to use a custom implementation of a contract standard by using a custom base contract you have previously deployed. A custom base contract passed here must adhere to the relevant LSP contract standard it is being used for."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Universal Profile with a custom base contract implementation of ERC725Account"',title:'"Deploying',a:!0,Universal:!0,Profile:!0,with:!0,custom:!0,base:!0,contract:!0,implementation:!0,of:!0,'ERC725Account"':!0},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    ERC725Account: {\n        libAddress: '0x00b1d454Eb5d917253FD6cb4D5560dEC30b0960c',\n    },\n})\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"UniversalReceiverDelegate")," does not use proxy deployment by default. When setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"UniversalReceiverDelegate")," ",(0,o.kt)("inlineCode",{parentName:"p"},"libAddress"),", if ",(0,o.kt)("inlineCode",{parentName:"p"},"deployProxy")," is not set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," LSPFactory will use the provided address directly. The provided address will be given the ",(0,o.kt)("inlineCode",{parentName:"p"},"SETDATA")," LSP6 permission and set as the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md#lsp1universalreceiverdelegate"},"LSP1UniversalReceiverDelegate key")," on the ERC725Account. ",(0,o.kt)("a",{parentName:"p",href:"./universal-profile#universal-receiver-delegate-proxy-deployment"},"Read more")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Using a custom UniversalReceiverDelegate address"',title:'"Using',a:!0,custom:!0,UniversalReceiverDelegate:!0,'address"':!0},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    UniversalReceiverDelegate: {\n        libAddress: '0x00b1d454Eb5d917253FD6cb4D5560dEC30b0960c',\n        deployProxy: false\n    },\n})\n")),(0,o.kt)("h3",{id:"contract-versions"},"Contract Versions"),(0,o.kt)("p",null,"The version of all three contracts can be set at once by passing the global ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," parameter. This will set all contracts to use the same base contract version. Version can also be set per contract which will take precedence over the global version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Universal Profile with all contracts set to version 0.5.0"',title:'"Deploying',a:!0,Universal:!0,Profile:!0,with:!0,all:!0,contracts:!0,set:!0,to:!0,version:!0,'0.5.0"':!0},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    version: '0.5.0'\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Universal Profile at version 0.5.0, with a KeyManager set to version to 0.4.0"',title:'"Deploying',a:!0,Universal:!0,Profile:!0,at:!0,version:!0,"0.5.0,":!0,with:!0,KeyManager:!0,set:!0,to:!0,'0.4.0"':!0},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    version: '0.5.0',\n    KeyManager: {\n      version: '0.4.0'\n    }\n});\n")),(0,o.kt)("h3",{id:"deploying-custom-bytecode"},"Deploying Custom Bytecode"),(0,o.kt)("p",null,"When deploying a Universal Profile, you can use your own custom implementation of a contract by passing the compiled creation bytecode of a contract you have written as the ",(0,o.kt)("inlineCode",{parentName:"p"},"bytecode")," parameter. This can be the creation byte code of a custom contract implementation you have written according to your use case. The implementation must meet the relevant LSP standard requirements."),(0,o.kt)("p",null,"The custom bytecode will be deployed and used as part of the Universal Profile. Contracts deployed from custom bytecode will not use any proxy contract deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Universal Profile with a custom KeyManager implementation"',title:'"Deploying',a:!0,Universal:!0,Profile:!0,with:!0,custom:!0,KeyManager:!0,'implementation"':!0},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    KeyManager: {\n      bytecode: '0x...'\n    }\n});\n")),(0,o.kt)("h3",{id:"ipfs-upload-options"},"IPFS Upload Options"),(0,o.kt)("p",null,"You can specify how you want your profile metadata to be uploaded by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadOptions")," object. Here you can set the IPFS gateway where you want the profile metadata to be uploaded."),(0,o.kt)("p",null,"This takes an ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfsClientOptions")," object as defined by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions"},"ipfs-http-client library")," which is used internally to interact with IPFS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n  uploadOptions: {\n    ipfsClientOptions: {\n      host: 'ipfs.infura.io',\n      port: 5001,\n      protocol: 'https',\n  },\n}\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadOptions")," are ommitted, profile metadata will be uploaded according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadOptions")," set during instantiation of LSPFactory. ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadOptions")," passed when deploying a Universal Profile will take precedence over upload configuration set during instantiation."),(0,o.kt)("h3",{id:"reactive-deployment"},"Reactive Deployment"),(0,o.kt)("p",null,"LSPFactory uses ",(0,o.kt)("a",{parentName:"p",href:"https://rxjs.dev/"},"RxJS")," to deploy contracts. This can be leveraged to achieve reactive deployment of Universal Profiles."),(0,o.kt)("p",null,"When deploying a Universal Profile pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"deployReactive")," flag inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"contractDeploymentOptions")," object to receive an ",(0,o.kt)("a",{parentName:"p",href:"https://rxjs.dev/"},"RxJS")," Observable which will emit events as your contract is deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const universalProfileDeploymentObservable = lspFactory.LSP3UniversalProfile.deploy({...}, {\n    deployReactive: true\n  }\n);\n\nuniversalProfileDeploymentObservable.subscribe({\n  next: (deploymentEvent) => {\n    console.log(deploymentEvent);\n  },\n  complete: () => {\n    console.log('Universal Profile deployment completed');\n  },\n});\n\n/**\n  { type: 'PROXY',        contractName: 'ERC725Account',                                              status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'ERC725Account',                                              status: 'PENDING',  receipt:      {} },\n  { type: \"PROXY\",        contractName: 'ERC725Account',           functionName: 'initialize',        status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'ERC725Account',           functionName: 'initialize',        status: 'COMPLETE', receipt:      {} },\n\n  { type: 'CONTRACT',     contractName: 'KeyManager',                                                 status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',                                       status: 'PENDING',  transaction:  {} },\n  { type: 'CONTRACT',     contractName: 'KeyManager',                                                 status: 'COMPLETE', receipt:      {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',                                       status: 'PENDING',  receipt:      {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',    functionName: 'initialize',        status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',    functionName: 'initialize',        status: 'COMPLETE', receipt:      {} },\n\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'setData',           status: 'PENDING',  transaction:  {} },\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'setData',           status: 'COMPLETE', receipt:      {} },\n\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'transferOwnership', status: 'PENDING',  transaction:  {} },\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'transferOwnership', status: 'COMPLETE', receipt:      {} },\n  Universal Profile deployment completed\n */\n\n")),(0,o.kt)("p",null,"The function defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," will be called whenever a new deployment event is created. The function defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"complete")," will be called once after deployment is finished."),(0,o.kt)("p",null,"Reactive Deployment may be useful for certain front end behaviours to give better feedback to users when they trigger a UP deployment from a user interface. For example you may want to implement a loading bar to tell users how deployment is progressing, or display details and addresses of the contracts as they are deployed"))}u.isMDXComponent=!0}}]);