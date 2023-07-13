"use strict";(globalThis.webpackChunkhubs=globalThis.webpackChunkhubs||[]).push([[7399],{"./src/react-components/input/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lw:()=>CancelButton,VD:()=>ApplyButton,aT:()=>AcceptButton,aW:()=>NextButton,fY:()=>ContinueButton,um:()=>presets,zx:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Button_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react-components/input/Button.scss"),_TextInput_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/react-components/input/TextInput.scss"),react_intl__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-intl/lib/src/components/message.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["as","sm","lg","xl","thin","thick","preset","className","children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const presets=["transparent","basic","primary","accept","cancel","accent1","accent2","accent3","accent4","accent5","accent6","landing","signin","text"],Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{as,sm,lg,xl,thin,thick,preset,className,children}=_ref,rest=_objectWithoutProperties(_ref,_excluded);const ButtonComponent=as,buttonProps="button"===ButtonComponent?{type:"button"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonComponent,_objectSpread(_objectSpread(_objectSpread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Button_scss__WEBPACK_IMPORTED_MODULE_2__.Z.button,_TextInput_scss__WEBPACK_IMPORTED_MODULE_3__.Z.button,_Button_scss__WEBPACK_IMPORTED_MODULE_2__.Z[preset],{[_Button_scss__WEBPACK_IMPORTED_MODULE_2__.Z.sm]:sm,[_Button_scss__WEBPACK_IMPORTED_MODULE_2__.Z.lg]:lg,[_Button_scss__WEBPACK_IMPORTED_MODULE_2__.Z.xl]:xl,[_Button_scss__WEBPACK_IMPORTED_MODULE_2__.Z.thin]:thin,[_Button_scss__WEBPACK_IMPORTED_MODULE_2__.Z.thick]:thick},className)},buttonProps),rest),{},{ref,children}))})));function NextButton(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Button,_objectSpread(_objectSpread({preset:"accept"},props),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__.Z,{id:"button.next",defaultMessage:"Next"})}))}function CancelButton(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Button,_objectSpread(_objectSpread({preset:"cancel"},props),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__.Z,{id:"button.cancel",defaultMessage:"Cancel"})}))}function ContinueButton(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Button,_objectSpread(_objectSpread({preset:"accept"},props),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__.Z,{id:"button.continue",defaultMessage:"Continue"})}))}function AcceptButton(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Button,_objectSpread(_objectSpread({preset:"accept"},props),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__.Z,{id:"button.accept",defaultMessage:"Accept"})}))}function ApplyButton(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Button,_objectSpread(_objectSpread({preset:"accept"},props),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__.Z,{id:"button.apply",defaultMessage:"Apply"})}))}Button.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType,preset:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(presets),className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,sm:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,lg:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,xl:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,thin:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,thick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool},Button.defaultProps={as:"button",preset:"basic"},NextButton.displayName="NextButton",CancelButton.displayName="CancelButton",ContinueButton.displayName="ContinueButton",AcceptButton.displayName="AcceptButton",ApplyButton.displayName="ApplyButton",NextButton.__docgenInfo={description:"",methods:[],displayName:"NextButton"},CancelButton.__docgenInfo={description:"",methods:[],displayName:"CancelButton"},ContinueButton.__docgenInfo={description:"",methods:[],displayName:"ContinueButton"},AcceptButton.__docgenInfo={description:"",methods:[],displayName:"AcceptButton"},ApplyButton.__docgenInfo={description:"",methods:[],displayName:"ApplyButton"}},"./src/react-components/misc/LevelBar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>LevelBar_LevelBar});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LevelBar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/misc/LevelBar.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LevelBar.Z,options);const misc_LevelBar=LevelBar.Z&&LevelBar.Z.locals?LevelBar.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LevelBar_LevelBar=(0,react.forwardRef)(((_ref,ref)=>{let{className}=_ref;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(misc_LevelBar.levelBarContainer,className),children:[(0,jsx_runtime.jsx)("div",{className:misc_LevelBar.levelBarBorder}),(0,jsx_runtime.jsx)("div",{ref,className:misc_LevelBar.levelBar})]})}));LevelBar_LevelBar.propTypes={className:prop_types_default().string},LevelBar_LevelBar.__docgenInfo={description:"",methods:[],displayName:"LevelBar",props:{className:{description:"",type:{name:"string"},required:!1}}}},"./src/react-components/icons/Microphone.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgMicrophone});var _path,_rect,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgMicrophone=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M7.5 17.5h5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_rect||(_rect=react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:8,y:8.7,width:4,height:0,fill:"#7ED320"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15 8.126v1.25c0 2.75-2.25 5-5 5s-5-2.25-5-5v-1.25",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 14.376v3.125",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 2.5A2.487 2.487 0 0 0 7.5 5v4.336c0 1.375 1.133 2.54 2.5 2.54s2.5-1.133 2.5-2.54V5c0-1.406-1.094-2.5-2.5-2.5Z",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}},"./src/react-components/icons/MicrophoneMuted.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgMicrophoneMuted});var _path,_rect,_path2,_path3,_path4,_path5,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgMicrophoneMuted=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M7.5 17.5h5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_rect||(_rect=react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:8,y:8.7,width:4,height:0,fill:"#7ED320"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15 8.126v1.25c0 2.75-2.25 5-5 5s-5-2.25-5-5v-1.25",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 14.376v3.125",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 2.5A2.487 2.487 0 0 0 7.5 5v4.336c0 1.375 1.133 2.54 2.5 2.54s2.5-1.133 2.5-2.54V5c0-1.406-1.094-2.5-2.5-2.5Z",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_path5||(_path5=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16.875 15.625 3.75 2.5",stroke:"currentColor",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round"})))}},"./src/react-components/icons/VolumeOff.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgVolumeOff});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgVolumeOff=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9.283 7.498h-2.72a.313.313 0 0 0-.313.313v4.375a.312.312 0 0 0 .312.312h2.721c.144 0 .284.05.396.142l3.573 2.93a.312.312 0 0 0 .498-.253V4.68a.313.313 0 0 0-.498-.252L9.68 7.357a.625.625 0 0 1-.396.141Z",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/misc/LevelBar.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".LevelBar__level-bar-container__mZX3P{position:relative;display:flex}.LevelBar__level-bar-border__iciQ1{position:relative;width:100%;border:1px solid var(--toolbar-basic-border-color);border-radius:6px;z-index:-1}.LevelBar__level-bar__AhD98{position:absolute;width:calc(100% - 8px);height:calc(100% - 8px);background-color:#7ed320;margin-left:4px;margin-top:4px;z-index:-1}","",{version:3,sources:["webpack://./src/react-components/misc/LevelBar.scss","webpack://./src/react-components/styles/theme.scss"],names:[],mappings:"AAEA,sCACE,iBAAA,CACA,YAAA,CAGF,mCACE,iBAAA,CACA,UAAA,CACA,kDAAA,CACA,iBCsEoB,CDrEpB,UAAA,CAGF,4BACE,iBAAA,CACA,sBAAA,CACA,uBAAA,CACA,wBCqBM,CDpBN,eAAA,CACA,cAAA,CACA,UAAA",sourcesContent:['@use "../styles/theme";\n\n:local(.level-bar-container) {\n  position: relative;\n  display: flex;\n}\n\n:local(.level-bar-border) {\n  position: relative;\n  width: 100%;\n  border: 1px solid var(--toolbar-basic-border-color);\n  border-radius: theme.$border-radius-small;\n  z-index: -1;\n}\n\n:local(.level-bar) {\n  position: absolute;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  background-color: theme.$green;\n  margin-left: 4px;\n  margin-top: 4px;\n  z-index: -1;\n}\n',"// default below 576px (Portrait Phones)\n$breakpoint-sm: 576px; // Landscape Phones\n$breakpoint-md: 768px; // Tablets\n$breakpoint-lg: 992px; // Desktops\n$breakpoint-xl: 1200px; // Large Desktops\n$breakpoint-xxl: 1600px; // Extra Large Desktops\n$breakpoint-vr: 600px; // Standalone VR Browsers\n\n$transparent: transparent;\n$transparent-hover: rgba(0, 0, 0, 0.08);\n$transparent-pressed: rgba(0, 0, 0, 0.12);\n\n$white: #ffffff;\n$white-hover: #e7e7e7;\n$white-pressed: #dbdbdb;\n\n$lightgrey: #e7e7e7;\n$lightgrey-hover: #f5f5f5;\n$lightgrey-pressed: #dbdbdb;\n\n$grey: #bbbbbb;\n$grey-hover: #c7c7c7;\n$grey-pressed: #adadad;\n\n$darkgrey: #868686;\n$darkgrey-hover: #949494;\n$darkgrey-pressed: #7a7a7a;\n\n$black: #000000;\n$black-hover: #404040;\n$black-pressed: #7a7a7a;\n\n$red: #f5325c;\n$red-hover: #f64b70;\n$red-pressed: #f41a49;\n\n$orange: #ff8500;\n$orange-hover: #ff911a;\n$orange-pressed: #e67800;\n\n$green: #7ed320;\n$green-hover: #8cdf2f;\n$green-pressed: #72be1d;\n\n$blue: #007ab8;\n$blue-hover: #008bd1;\n$blue-pressed: #00699e;\n\n$purple: #7854f6;\n$purple-hover: #8c6ef7;\n$purple-pressed: #663df5;\n\n$recessed-bg: #f9f9f9;\n\n$yellow: #ffc000;\n\n// Brand Colors\n$spoke-primary-color: #2f80ed;\n$twitter-primary-color: #6fc0fd;\n$slack-primary-color: #611f69;\n$discord--primary-color: #7289da;\n\n// Discord Bot Page Colors\n$discord-bg-color: #2a2d32;\n$discord-text1-color: white;\n$discord-text2-color: #a3a3a3;\n$discord-text3-color: rgb(127, 127, 127);\n$discord-text4-color: rgb(64, 64, 64);\n\n$font-size-xs: 10px;\n$font-size-sm: 12px;\n$font-size-md: 14px;\n$font-size-lg: 20px;\n$font-size-xl: 24px;\n$font-size-2xl: 28px;\n\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 700;\n\n$border-radius-regular: 8px;\n$border-radius-small: 6px;\n\n$outline-width: 3px;\n\n$spacing-2xs: 4px;\n$spacing-xs: 8px;\n$spacing-sm: 12px;\n$spacing-md: 16px;\n$spacing-lg: 20px;\n$spacing-xl: 24px;\n\n// Theme SCSS Variables:\n// Reference these variables in the Hubs codebase.\n// The CSS variables they reference are defined in ./global.scss such that they are only included on the page once.\n$font-family-default: var(--font-family-default);\n$font-family-monospace: var(--font-family-monospace);\n\n$text1-color: var(--text1-color);\n$text1-color-hover: var(--text1-color-hover);\n$text1-color-pressed: var(--text1-color-pressed);\n$text2-color: var(--text2-color);\n$text2-color-hover: var(--text2-color-hover);\n$text2-color-pressed: var(--text2-color-pressed);\n$text3-color: var(--text3-color);\n$text3-color-hover: var(--text3-color-hover);\n$text3-color-pressed: var(--text3-color-pressed);\n$text4-color: var(--text4-color);\n$text4-color-hover: var(--text4-color-hover);\n$text4-color-pressed: var(--text4-color-pressed);\n$text5-color: var(--text5-color);\n$text5-color-hover: var(--text5-color-hover);\n$text5-color-pressed: var(--text5-color-pressed);\n$text-inverted-color: var(--text-inverted-color);\n\n$link-color: var(--link-color);\n$link-color-hover: var(--link-color-hover);\n$link-color-pressed: var(--link-color-pressed);\n\n$accept-color: var(--accept-color);\n$accept-border-color: var(--accept-border-color);\n$accept-color-hover: var(--accept-color-hover);\n$accept-color-pressed: var(--accept-color-pressed);\n\n$cancel-color: var(--cancel-color);\n$cancel-color-hover: var(--cancel-color-hover);\n$cancel-color-pressed: var(--cancel-color-pressed);\n\n$accent1-color: var(--accent1-color);\n$accent1-border-color: var(--accent1-border-color);\n$accent1-color-hover: var(--accent1-color-hover);\n$accent1-color-pressed: var(--accent1-color-pressed);\n\n$accent2-color: var(--accent2-color);\n$accent2-border-color: var(--accent2-border-color);\n$accent2-color-hover: var(--accent2-color-hover);\n$accent2-color-pressed: var(--accent2-color-pressed);\n\n$accent3-color: var(--accent3-color);\n$accent3-color-hover: var(--accent3-color-hover);\n$accent3-color-pressed: var(--accent3-color-pressed);\n$accent3-border-color: var(--accent3-border-color);\n\n$accent4-color: var(--accent4-color);\n$accent4-border-color: var(--accent4-border-color);\n$accent4-color-hover: var(--accent4-color-hover);\n$accent4-color-pressed: var(--accent4-color-pressed);\n\n$accent5-color: var(--accent5-color);\n$accent5-border-color: var(--accent5-border-color);\n$accent5-color-hover: var(--accent5-color-hover);\n$accent5-color-pressed: var(--accent5-color-pressed);\n\n$accent6-color: var(--accent6-color);\n$accent6-color-hover: var(--accent6-color-hover);\n$accent6-color-pressed: var(--accent6-color-pressed);\n\n$primary-color: var(--primary-color);\n$primary-color-hover: var(--primary-color-hover);\n$primary-color-pressed: var(--primary-color-pressed);\n\n$secondary-color: var(--secondary-color);\n$secondary-color-hover: var(--secondary-color-hover);\n$secondary-color-pressed: var(--secondary-color-pressed);\n\n$background1-color: var(--background1-color);\n$background2-color: var(--background2-color);\n$background3-color: var(--background3-color);\n$background4-color: var(--background4-color);\n\n$loading-screen-background: var(--loading-screen-background);\n\n$border1-color: var(--border1-color);\n$border2-color: var(--border2-color);\n$border3-color: var(--border3-color);\n\n$outline-color: var(--outline-color);\n\n$shadow-color: var(--shadow-color);\n\n$basic-color: var(--basic-color);\n$basic-color-hover: var(--basic-color-hover);\n$basic-color-pressed: var(--basic-color-pressed);\n$basic-border-color: var(--basic-border-color);\n\n$disabled-text-color: var(--disabled-text-color);\n$disabled-bg-color: var(--disabled-bg-color);\n$disabled-icon-color: var(--disabled-icon-color);\n\n$radio-border-color: var(--radio-border-color);\n$radio-bg-color: var(--radio-bg-color);\n$radio-bg-color-hover: var(--radio-bg-color-hover);\n$radio-bg-color-pressed: var(--radio-bg-color-pressed);\n\n$toggle-button-color: var(--toggle-button-color);\n\n$input-bg-color: var(--input-bg-color);\n$input-icon-color: var(--input-icon-color);\n$input-border-color: var(--input-border-color);\n$input-border-color-hover: var(--input-border-color-hover);\n$input-outline-color: var(--input-outline-color);\n\n$list-bg-color-hover: var(--list-bg-color-hover);\n$list-bg-color-pressed: var(--list-bg-color-pressed);\n\n$dropdown-bg-color: var(--dropdown-bg-color);\n$dropdown-border-color: var(--dropdown-border-color);\n$dropdown-shadow-color: var(--dropdown-shadow-color);\n\n$button-text-color: var(--button-text-color);\n$button-border-color: var(--button-border-color);\n$button-bg-color: var(--button-bg-color);\n$button-bg-color-hover: var(--button-bg-color-hover);\n$button-bg-color-pressed: var(--button-bg-color-pressed);\n\n$active-text-color: var(--active-text-color);\n$active-color: var(--active-color);\n$active-color-hover: var(--active-color-hover);\n$active-color-pressed: var(--active-color-pressed);\n\n$chat-bubble-bg-color-sent: var(--chat-bubble-bg-color-sent);\n$chat-bubble-text-color-sent: var(--chat-bubble-text-color-sent);\n$chat-bubble-link-color-sent-hover: var(--chat-bubble-link-color-sent-hover);\n$chat-bubble-link-color-sent-pressed: var(--chat-bubble-link-color-sent-pressed);\n$chat-bubble-bg-color-received: var(--chat-bubble-bg-color-received);\n\n$tip-text-color: var(--tip-text-color);\n$tip-bg-color: var(--tip-bg-color);\n$tip-button-color: var(--tip-button-color);\n$tip-button-color-hover: var(--tip-button-color-hover);\n$tip-button-color-pressed: var(--tip-button-color-pressed);\n\n$favorite-color: var(--favorite-color);\n\n$admin-color: var(--admin-color);\n\n$error-color: var(--error-color);\n$error-color-hover: var(--error-color-hover);\n$error-color-pressed: var(--error-color-pressed);\n\n$status-unread-color: var(--status-unread-color);\n$status-recording-color: var(--status-recording-color);\n$status-enabled-color: var(--status-enabled-color);\n$status-disabled-color: var(--status-disabled-color);\n\n$overlay-bg-color: var(--overlay-bg-color);\n$overlay-text-color: var(--overlay-text-color);\n$overlay-border-color: var(--overlay-border-color);\n$overlay-outline-color: var(--overlay-outline-color);\n\n$toolbar-icon-color: var(--toolbar-icon-color);\n$toolbar-icon-selected-bg: var(--toolbar-icon-selected-bg);\n$toolbar-basic-icon-color: var(--toolbar-basic-icon-color);\n$toolbar-basic-selected-icon-color: var(--toolbar-basic-selected-icon-color);\n$toolbar-basic-color: var(--toolbar-basic-color);\n$toolbar-basic-color-hover: var(--toolbar-basic-color-hover);\n$toolbar-basic-color-pressed: var(--toolbar-basic-color-pressed);\n$toolbar-basic-border-color: var(--toolbar-basic-border-color);\n$toolbar-label-accent1: var(--toolbar-label-accent1);\n$toolbar-label-accent2: var(--toolbar-label-accent2);\n$toolbar-label-accent3: var(--toolbar-label-accent3);\n$toolbar-label-accent4: var(--toolbar-label-accent4);\n$toolbar-label-accent5: var(--toolbar-label-accent5);\n\n$tile-text-color: var(--tile-text-color);\n$tile-bg-color: var(--tile-bg-color);\n$tile-bg-color-hover: var(--tile-bg-color-hover);\n$tile-bg-color-pressed: var(--tile-bg-color-pressed);\n$tile-button-text-color: var(--tile-button-text-color);\n$tile-button-bg-color: var(--tile-button-bg-color);\n$tile-button-bg-color-hover: var(--tile-button-bg-color-hover);\n$tile-button-bg-color-pressed: var(--tile-button-bg-color-pressed);\n$tile-button-border-color: var(--tile-button-border-color);\n\n// Lilypad compatible variables (to eventually replace the above)\n\n/**\n  PRIMARY INTERACTION\n  **/\n$color-interaction-primary: var(--color-interaction-primary);\n$color-interaction-primary-hover: var(--color-interaction-primary-hover);\n$color-interaction-primary-active: var(--color-interaction-primary-active);\n$color-interaction-primary-disabled: var(--color-interaction-primary-disabled);\n$color-interaction-primary-alt: var(--color-interaction-primary-alt);\n$color-interaction-primary-alt-hover: var(--color-interaction-primary-alt-hover);\n$color-interaction-primary-alt-active: var(--color-interaction-primary-alt-active);\n$color-interaction-primary-alt-disabled: var(--color-interaction-primary-alt-disabled);\n\n/**\n  SECONDARY INTERACTION\n  **/\n$color-interaction-secondary: var(--color-interaction-secondary);\n$color-interaction-secondary-hover: var(--color-interaction-secondary-hover);\n$color-interaction-secondary-active: var(--color-interaction-secondary-active);\n$color-interaction-secondary-disabled: var(--color-interaction-secondary-disabled);\n$color-interaction-secondary-alt: var(--color-interaction-secondary-alt);\n$color-interaction-secondary-alt-hover: var(--color-interaction-secondary-alt-hover);\n$color-interaction-secondary-alt-active: var(--color-interaction-secondary-alt-active);\n$color-interaction-secondary-alt-disabled: var(--color-interaction-secondary-alt-disabled);\n\n/**\n  SEMANTIC\n  **/\n$color-semantic-info: var(--color-semantic-info);\n$color-semantic-info-hover: var(--color-semantic-info-hover);\n$color-semantic-info-active: var(--color-semantic-info-active);\n$color-semantic-disabled: var(--color-semantic-disabled);\n$color-semantic-success: var(--color-semantic-success);\n$color-semantic-success-hover: var(--color-semantic-success-hover);\n$color-semantic--success-active: var(--color-semantic-success-active);\n$color-semantic-success-disabled: var(--color-semantic-success-disabled);\n$color-semantic-warning: var(--color-semantic-warning);\n$color-semantic-warning-hover: var(--color-semantic-warning-hover);\n$color-semantic-warning-active: var(--color-semantic-warning-active);\n$color-semantic-warning-disabled: var(--color-semantic-warning-disabled);\n$color-semantic-critical: var(--color-semantic-critical);\n$color-semantic-critical-hover: var(--color-semantic-critical-hover);\n$color-semantic-critical-active: var(--color-semantic-critical-active);\n$color-semantic-critical-disabled: var(--color-semantic-critical-disabled);\n$color-semantic-critical-bg-alt: var(--color-semantic-critical-bg-alt);\n$color-semantic-neutral: var(--color-semantic-neutral);\n$color-semantic-neutral-hover: var(--color-semantic-neutral-hover);\n$color-semantic-neutral-active: var(--color-semantic-neutral-active);\n$color-semantic-neutral-inactive: var(--color-semantic-neutral-inactive);\n\n/**\n  TEXT\n  **/\n$color-text-main: var(--color-text-main);\n$color-text-subtle: var(--color-text-subtle);\n$color-text-reverse: var(--color-text-reverse);\n$color-text-reverse-subtle: var(--color-text-reverse-subtle);\n$color-text-disabled: var(--color-text-disabled);\n$color-text-info: var(--color-text-info);\n$color-text-success: var(--color-text-success);\n$color-text-warning: var(--color-text-warning);\n$color-text-critical: var(--color-text-critical);\n\n/**\n  BORDER\n  **/\n$color-border-1: var(--color-border-1);\n$color-border-2: var(--color-border-2);\n$color-border-3: var(--color-border-3);\n\n/**\n  NEUTRALS\n  **/\n$color-neutral-0: var(--color-neutral-0);\n$color-neutral-0-reverse: var(--color-neutral-0-reverse);\n$color-neutral-1: var(--color-neutral-1);\n$color-neutral-2: var(--color-neutral-2);\n$color-neutral-3: var(--color-neutral-3);\n\n/**\n  STATUS\n  **/\n$color-status-ready: var(--color-status-ready);\n$color-status-offline: var(--color-status-offline);\n$color-status-busy: var(--color-status-busy);\n\n/**\n  BACKGROUNDS\n  **/\n$color-background-overlay: var(--color-background-overlay);\n$color-background-callout: var(--color-background-subtle-callout);\n$color-background-modal-overlay: var(--color-background-modal-overlay);\n$color-background-critical: var(--color-background-critical);\n$color-background-neutral-0: var(--color-background-neutral-0);\n\n/**\n  MENU\n  **/\n$color-interactions-menu: var(--color-interactions-menu);\n$color-interactions-menu-hover: var(--color-interactions-menu-hover);\n$color-interactions-menu-inactive: var(--color-interactions-menu-inactive);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"level-bar-container":"LevelBar__level-bar-container__mZX3P",levelBarContainer:"LevelBar__level-bar-container__mZX3P","level-bar-border":"LevelBar__level-bar-border__iciQ1",levelBarBorder:"LevelBar__level-bar-border__iciQ1","level-bar":"LevelBar__level-bar__AhD98",levelBar:"LevelBar__level-bar__AhD98"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);