"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5787],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||s;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8471:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],o={sidebar_label:"LSP2 - ERC725Y JSON Schema",sidebar_position:2},p="LSP2 - ERC725Y JSON Schema",l={unversionedId:"standards/generic-standards/lsp2-json-schema",id:"standards/generic-standards/lsp2-json-schema",title:"LSP2 - ERC725Y JSON Schema",description:"LSP2 - ERC725Y JSON Schema",source:"@site/docs/standards/generic-standards/lsp2-json-schema.md",sourceDirName:"standards/generic-standards",slug:"/standards/generic-standards/lsp2-json-schema",permalink:"/standards/generic-standards/lsp2-json-schema",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/generic-standards/lsp2-json-schema.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"LSP2 - ERC725Y JSON Schema",sidebar_position:2},sidebar:"standardsSidebar",previous:{title:"LSP1 - Universal Receiver",permalink:"/standards/generic-standards/lsp1-universal-receiver"},next:{title:"Introduction",permalink:"/standards/universal-profile/introduction"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent?",id:"what-does-this-standard-represent",level:2},{value:"Specification",id:"specification",level:3},{value:"How does LSP2 work?",id:"how-does-lsp2-work",level:3},{value:"Data Key Types",id:"data-key-types",level:2},{value:"Singleton",id:"singleton",level:3},{value:"Array",id:"array",level:3},{value:"Mapping",id:"mapping",level:3},{value:"Bytes20Mapping",id:"bytes20mapping",level:3},{value:"Bytes20MappingWithGrouping",id:"bytes20mappingwithgrouping",level:3}],m={toc:c};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lsp2---erc725y-json-schema"},"LSP2 - ERC725Y JSON Schema"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Standard Document")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md"},"LSP2 - ERC725Y JSON Schema")))),(0,s.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Recommendation")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Our ",(0,s.kt)("a",{parentName:"p",href:"/tools/erc725js/getting-started"},"JavaScript library ",(0,s.kt)("strong",{parentName:"a"},"erc725.js"))," makes it easy to read + write data encoded according to the LSP2 Schema without manually going through all the encoding complexity."))),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"The storage of a smart contract consists of multiple ",(0,s.kt)("strong",{parentName:"p"},"storage slots"),". These slots are referenced by a ",(0,s.kt)("strong",{parentName:"p"},"slot number")," (as an ",(0,s.kt)("strong",{parentName:"p"},"integer"),") starting from slot 0. Each piece of data (= contract state) in a smart contract is stored as raw ",(0,s.kt)("strong",{parentName:"p"},"bytes")," under a specific storage slot."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"In summary, smart contracts understand only two languages: bytes and uint256.\nTake the following key-value pair, for instance. It is not easy to infer the meaning of these data keys by reading them as ",(0,s.kt)("strong",{parentName:"p"},"bytes"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"(key)                                                              => (value)\n0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1 => 0x4d7920546f6b656e20322e30\n")),(0,s.kt)("p",null,"Using ",(0,s.kt)("strong",{parentName:"p"},"slot numbers")," and ",(0,s.kt)("strong",{parentName:"p"},"raw bytes")," makes the contract storage very hard to handle. ",(0,s.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp0-erc725account#erc725y---generic-key-value-store"},"ERC725Y")," solves part of the problem through a more flexible storage layout, where data is addressed via ",(0,s.kt)("inlineCode",{parentName:"p"},"bytes32")," keys. However, with such low-level languages, it is difficult for humans to understand the data in the storage."),(0,s.kt)("p",null,'The main problem around smart contract storage also arises when data is stored differently, depending on individual use cases and application needs. No standard schema defines "what the data stored under a specific data key represents".'),(0,s.kt)("p",null,"These two issues make it very hard for smart contracts to interact with each other and for external services to interact with contracts' storage."),(0,s.kt)("h2",{id:"what-does-this-standard-represent"},"What does this standard represent?"),(0,s.kt)("h3",{id:"specification"},"Specification"),(0,s.kt)("p",null,"The LSP2 Standard aims to offer a better abstraction on top of the storage of a smart contract."),(0,s.kt)("p",null,"This standard introduces a JSON schema that enables to represent the storage of a smart contract through more understandable data keys. It makes the data stored in a smart contract more organized."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Universal Profile + ERC725Y JSON schema (diagram)",src:a(1912).Z,width:"1692",height:"590"})),(0,s.kt)("p",null,"By introducing a schema, we can represent contract storage in the same way across contracts in the network. Everyone has a unified view of the data stored between smart contracts. Developers can quickly parse data, and contracts or interfaces can read or write data from or to the contract storage in the same manner. The standardization makes smart contracts ",(0,s.kt)("strong",{parentName:"p"},"more interoperable with each other"),"."),(0,s.kt)("h3",{id:"how-does-lsp2-work"},"How does LSP2 work?"),(0,s.kt)("p",null,"LSP2 introduces new ways to encode data, depending on its type. From a single entry to multiple entries (like arrays or maps)."),(0,s.kt)("p",null,"A data key in the contract storage can be defined as a JSON object with properties that describe the key."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP4TokenName",\n  "key": "0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1",\n  "keyType": "Singleton",\n  "valueType": "string",\n  "valueContent": "String"\n}\n')),(0,s.kt)("h2",{id:"data-key-types"},"Data Key Types"),(0,s.kt)("p",null,"A Data Key Type defines ",(0,s.kt)("strong",{parentName:"p"},"HOW")," a 32 bytes data key is constructed, representing how a particular data key type is described in 32 bytes. For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"Singleton")," data keys are simple keccak256 hashes of the key name string. Other Data Key Types are constructed of slices of hashes to group different key name parts or define array element keys."),(0,s.kt)("p",null,"The LSP2 Standard defines several ",(0,s.kt)("strong",{parentName:"p"},"data key types"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#singleton"},"Singleton")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#array"},"Array")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#mapping"},"Mapping")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#bytes20mapping"},"Bytes20Mapping")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#bytes20mappingwithgrouping"},"Bytes20MappingWithGrouping"))),(0,s.kt)("h3",{id:"singleton"},"Singleton"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"Singleton")," data key is helpful to store a unique single value under a single data key."),(0,s.kt)("p",null,"Below is an example of a ",(0,s.kt)("strong",{parentName:"p"},"Singleton")," data key."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP4TokenName",\n  "key": "0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1",\n  "keyType": "Singleton",\n  "valueType": "string",\n  "valueContent": "String"\n}\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"LSP2 Singleton key type",src:a(5633).Z,width:"1696",height:"589"})),(0,s.kt)("h3",{id:"array"},"Array"),(0,s.kt)("p",null,"Developers can use a data key of the type Array to store a list of elements of the same data type. They are accessed by an ",(0,s.kt)("em",{parentName:"p"},"index")," that defines their position within it."),(0,s.kt)("p",null,"The Array elements are arranged systematically, in the order they are added or removed to or from it."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"main properties")," of the LSP2 Array data key type are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"ordering matters")," \u2757"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"duplicates are permitted")," \u2705")),(0,s.kt)("p",null,"A data key type Array can be useful when there is the need to store a large group of similar data items under the same data key. For instance, a list of tokens or NFTs that an address has received. Below is an example of an Array data key:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP5ReceivedAssets[]",\n  "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",\n  "keyType": "Array",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"LSP2 Array key type (length check)",src:a(1926).Z,width:"1138",height:"878"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"LSP2 Array key type (index access)",src:a(1800).Z,width:"1146",height:"872"})),(0,s.kt)("h3",{id:"mapping"},"Mapping"),(0,s.kt)("p",null,"A data key of type Mapping can be helpful to store a collection of data items that have a shared significance (for instance, items derived from a common ancestor type)."),(0,s.kt)("p",null,"The Mapping data key type is similar to the concept of lookup tables. Developers can use it to efficiently search or query specific elements in the collection."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"main properties")," of the LSP2 Mapping data key type are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"ordering does not matter")," \u2705"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"duplicates are not permitted")," \u274c")),(0,s.kt)("p",null,"Below is an example of a Mapping data key:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SupportedStandards:LSP3UniversalProfile",\n  "key": "0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6",\n  "keyType": "Mapping",\n  "valueType": "bytes4",\n  "valueContent": "0xabe425d6"\n}\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"LSP2 Mapping key type",src:a(6471).Z,width:"3081",height:"1298"})),(0,s.kt)("h3",{id:"bytes20mapping"},"Bytes20Mapping"),(0,s.kt)("p",null,"A data key of type ",(0,s.kt)("strong",{parentName:"p"},"Bytes20Mapping")," is similar to the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"#mapping"},"Mapping"))," data key type, except that it can be useful to map specific data to a 20-bytes long value (eg: an ",(0,s.kt)("inlineCode",{parentName:"p"},"address"),")."),(0,s.kt)("p",null,"Below is an example of Bytes20Mapping key:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP8MetadataAddress:0x20BytesTokenIdHash",\n  "key": "0x73dcc7c3c4096cdc00000000cafecafecafecafecafecafecafecafecafecafe",\n  "keyType": "Bytes20Mapping",\n  "valueType": "Mixed",\n  "valueContent": "Mixed"\n}\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"LSP2 Bytes20Mapping key type",src:a(6784).Z,width:"1395",height:"716"})),(0,s.kt)("h3",{id:"bytes20mappingwithgrouping"},"Bytes20MappingWithGrouping"),(0,s.kt)("p",null,"A data key of type ",(0,s.kt)("strong",{parentName:"p"},"Bytes20MappingWithGrouping")," is similar to the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"#bytes20mapping"},"Bytes20Mapping"))," data key type, except that sub-types can be added to the main mapping data key."),(0,s.kt)("p",null,"For instance, it can be used to differentiate various types from the primary mapping data key, like different types of permissions (see ",(0,s.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6 - Key Manager"),")."),(0,s.kt)("p",null,"Below is an example of a Bytes20MappingWithGrouping data key:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "AddressPermissions:Permissions:<address>",\n  "key": "0x4b80742d0000000082ac0000<address>",\n  "keyType": "Bytes20MappingWithGrouping",\n  "valueType": "bytes32",\n  "valueContent": "BitArray"\n}\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"LSP2 Bytes20MappingWithGrouping key type",src:a(5216).Z,width:"2938",height:"1361"})))}u.isMDXComponent=!0},1912:function(e,t,a){t.Z=a.p+"assets/images/ERC725Y-JSON-Schema-explained-ebb9fd1e6c2c1c77fa7bf75232737ef9.jpeg"},1800:function(e,t,a){t.Z=a.p+"assets/images/lsp2-key-type-array-index-access-03ade562bd986850564257f524659216.jpeg"},1926:function(e,t,a){t.Z=a.p+"assets/images/lsp2-key-type-array-length-check-dcf33b68541766254f2e21e10b45f91d.jpeg"},5216:function(e,t,a){t.Z=a.p+"assets/images/lsp2-key-type-bytes20-mapping-with-grouping-acf9384491eeeab2718efcf784cf5250.jpeg"},6784:function(e,t,a){t.Z=a.p+"assets/images/lsp2-key-type-bytes20-mapping-489e936fa8a9da50b19c545fe5db5426.jpeg"},6471:function(e,t,a){t.Z=a.p+"assets/images/lsp2-key-type-mapping-595833d93b1148c6c20cf4760e45c651.jpeg"},5633:function(e,t,a){t.Z=a.p+"assets/images/lsp2-key-type-singleton-f5773adc076859513bc0ca4821bab47c.jpeg"}}]);