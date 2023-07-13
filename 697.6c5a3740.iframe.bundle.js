"use strict";(globalThis.webpackChunkhubs=globalThis.webpackChunkhubs||[]).push([[697],{"./src/react-components/input/SelectInputField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>SelectInputField_SelectInputField});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),InputField=__webpack_require__("./src/react-components/input/InputField.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SelectInputField=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/input/SelectInputField.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SelectInputField.Z,options);const input_SelectInputField=SelectInputField.Z&&SelectInputField.Z.locals?SelectInputField.Z.locals:void 0;var CaretDown=__webpack_require__("./src/react-components/icons/CaretDown.svg"),downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),message=__webpack_require__("./node_modules/react-intl/lib/src/components/message.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","error","description","inputClassName","buttonClassName","label","onChange","value","options","fullWidth"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function getItemValue(item){return"object"==typeof item?item.value:item}function getSelectedItem(value,options){const selectedItemValue=getItemValue(value);return options.length>0&&"object"==typeof options[0]?options.find((item=>item.value===selectedItemValue)):selectedItemValue}function getItemLabel(item){return"object"==typeof item?item.label||item.value:item}function SelectInputField_SelectInputField(_ref){let{className,error,description,inputClassName,buttonClassName,label,onChange,value,options,fullWidth}=_ref,rest=_objectWithoutProperties(_ref,_excluded);const{isOpen,selectedItem,getToggleButtonProps,getMenuProps,getLabelProps,highlightedIndex,getItemProps}=(0,downshift_esm.L7)(_objectSpread(_objectSpread({items:options,selectedItem:getSelectedItem(value,options)},rest),{},{onSelectedItemChange:_ref2=>{let{selectedItem}=_ref2;onChange&&onChange(getItemValue(selectedItem))}})),selectedItemLabel=getItemLabel(selectedItem);return(0,jsx_runtime.jsx)(InputField.U,_objectSpread(_objectSpread({},getLabelProps()),{},{className,label,error,description,fullWidth,children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()(input_SelectInputField.selectInput,{[input_SelectInputField.open]:isOpen},inputClassName),children:[(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({className:classnames_default()(input_SelectInputField.dropdownButton,buttonClassName),type:"button"},getToggleButtonProps()),{},{children:[(0,jsx_runtime.jsx)("span",{children:void 0!==selectedItemLabel?selectedItemLabel:(0,jsx_runtime.jsx)(message.Z,{id:"select-input-field.placeholder",defaultMessage:"Select..."})}),(0,jsx_runtime.jsx)(CaretDown.r,{})]})),options.length>0&&(0,jsx_runtime.jsx)("ul",_objectSpread(_objectSpread({},getMenuProps()),{},{className:input_SelectInputField.dropdown,children:isOpen&&options.map(((item,index)=>(0,jsx_runtime.jsx)("li",_objectSpread(_objectSpread({className:classnames_default()(input_SelectInputField.dropdownItem,{[input_SelectInputField.highlightedItem]:highlightedIndex===index})},getItemProps({item,index})),{},{children:getItemLabel(item)}),getItemValue(item))))}))]})}))}SelectInputField_SelectInputField.displayName="SelectInputField",SelectInputField_SelectInputField.propTypes={className:prop_types_default().string,label:prop_types_default().node,error:prop_types_default().node,description:prop_types_default().node,labelClassName:prop_types_default().string,inputClassName:prop_types_default().string,buttonClassName:prop_types_default().string,value:prop_types_default().any,options:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().shape({label:prop_types_default().string,value:prop_types_default().any.isRequired})])).isRequired,onChange:prop_types_default().func,fullWidth:prop_types_default().bool},SelectInputField_SelectInputField.defaultProps={options:[]},SelectInputField_SelectInputField.__docgenInfo={description:"",methods:[],displayName:"SelectInputField",props:{options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"number"},{name:"shape",value:{label:{name:"string",required:!1},value:{name:"any",required:!0}}}]}},required:!1},className:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"node"},required:!1},error:{description:"",type:{name:"node"},required:!1},description:{description:"",type:{name:"node"},required:!1},labelClassName:{description:"",type:{name:"string"},required:!1},inputClassName:{description:"",type:{name:"string"},required:!1},buttonClassName:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"any"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},fullWidth:{description:"",type:{name:"bool"},required:!1}}}},"./src/react-components/icons/CaretDown.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgCaretDown});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgCaretDown=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"m3.828 7.424 5.46 6.372a.938.938 0 0 0 1.424 0l5.46-6.372a.938.938 0 0 0-.712-1.548H4.538c-.8 0-1.233.94-.71 1.548Z",fill:"currentColor"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/input/SelectInputField.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".SelectInputField__select-input__Q9wMN{position:relative}.SelectInputField__dropdown-button__E2fNK{display:flex;align-items:center;justify-content:space-between;height:40px;border:1px solid var(--input-border-color);border-radius:8px;color:var(--text1-color);background-color:var(--input-bg-color);width:100%;max-width:300px;padding:0 8px}.SelectInputField__dropdown-button__E2fNK span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.SelectInputField__dropdown-button__E2fNK:hover{border-color:var(--input-border-color-hover)}.SelectInputField__dropdown-button__E2fNK:focus{outline:none}.SelectInputField__dropdown-button__E2fNK:focus-within{border-color:var(--input-outline-color);box-shadow:0 0 0 2px var(--input-outline-color)}.SelectInputField__dropdown-button__E2fNK svg{color:var(--text1-color)}.SelectInputField__dropdown__wN7x4{position:absolute;top:44px;display:none;flex-direction:column;background-color:var(--dropdown-bg-color);border-radius:8px;padding:8px 0;z-index:99999;left:0;right:0;box-shadow:-1px -1px 1px var(--dropdown-border-color),3px 3px 6px var(--dropdown-shadow-color);max-height:320px;overflow-y:auto}.SelectInputField__open__B7Ur0 .SelectInputField__dropdown-button__E2fNK svg{transform:rotate(180deg)}.SelectInputField__open__B7Ur0 .SelectInputField__dropdown__wN7x4{display:flex}.SelectInputField__dropdown-item__lLzp4{width:100%;padding:8px;cursor:pointer}.SelectInputField__dropdown-item__lLzp4:focus{outline:none}.SelectInputField__highlighted-item__BhcUo{color:var(--active-text-color);background-color:var(--active-color-hover)}","",{version:3,sources:["webpack://./src/react-components/input/SelectInputField.scss","webpack://./src/react-components/styles/theme.scss"],names:[],mappings:"AAIA,uCACE,iBAAA,CAGF,0CACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,WAVa,CAWb,0CAAA,CACA,iBCkEsB,CDjEtB,wBCmFY,CDlFZ,sCCoLe,CDnLf,UAAA,CACA,eAAA,CACA,aAAA,CAEA,+CACE,eAAA,CACA,kBAAA,CACA,sBAAA,CAGF,gDACE,4CC2KuB,CDxKzB,gDACE,YAAA,CAGF,uDACE,uCCoKkB,CDnKlB,+CAAA,CAGF,8CACE,wBCyDU,CDrDd,mCACE,iBAAA,CACA,QAAA,CACA,YAAA,CACA,qBAAA,CACA,yCC2JkB,CD1JlB,iBAAA,CACA,aAAA,CACA,aAAA,CACA,MAAA,CACA,OAAA,CACA,8FAAA,CACA,gBAAA,CACA,eAAA,CAIA,6EACE,wBAAA,CAGF,kEACE,YAAA,CAIJ,wCACE,UAAA,CACA,WAAA,CACA,cAAA,CAEA,8CACE,YAAA,CAIJ,2CACE,8BCqIkB,CDpIlB,0CCsImB",sourcesContent:['@use "../styles/theme.scss";\n\n$input-height: 40px;\n\n:local(.select-input) {\n  position: relative;\n}\n\n:local(.dropdown-button) {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: $input-height;\n  border: 1px solid theme.$input-border-color;\n  border-radius: theme.$border-radius-regular;\n  color: theme.$text1-color;\n  background-color: theme.$input-bg-color;\n  width: 100%;\n  max-width: 300px;\n  padding: 0 8px;\n\n  span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  &:hover {\n    border-color: theme.$input-border-color-hover;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus-within {\n    border-color: theme.$input-outline-color;\n    box-shadow: 0 0 0 2px theme.$input-outline-color;\n  }\n\n  svg {\n    color: theme.$text1-color;\n  }\n}\n\n:local(.dropdown) {\n  position: absolute;\n  top: $input-height + 4px;\n  display: none;\n  flex-direction: column;\n  background-color: theme.$dropdown-bg-color;\n  border-radius: 8px;\n  padding: 8px 0;\n  z-index: 99999;\n  left: 0;\n  right: 0;\n  box-shadow: -1px -1px 1px theme.$dropdown-border-color, 3px 3px 6px theme.$dropdown-shadow-color;\n  max-height: 320px;\n  overflow-y: auto;\n}\n\n:local(.open) {\n  :local(.dropdown-button) svg {\n    transform: rotate(180deg);\n  }\n\n  :local(.dropdown) {\n    display: flex;\n  }\n}\n\n:local(.dropdown-item) {\n  width: 100%;\n  padding: 8px;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n}\n\n:local(.highlighted-item) {\n  color: theme.$active-text-color;\n  background-color: theme.$active-color-hover;\n}\n',"// default below 576px (Portrait Phones)\n$breakpoint-sm: 576px; // Landscape Phones\n$breakpoint-md: 768px; // Tablets\n$breakpoint-lg: 992px; // Desktops\n$breakpoint-xl: 1200px; // Large Desktops\n$breakpoint-xxl: 1600px; // Extra Large Desktops\n$breakpoint-vr: 600px; // Standalone VR Browsers\n\n$transparent: transparent;\n$transparent-hover: rgba(0, 0, 0, 0.08);\n$transparent-pressed: rgba(0, 0, 0, 0.12);\n\n$white: #ffffff;\n$white-hover: #e7e7e7;\n$white-pressed: #dbdbdb;\n\n$lightgrey: #e7e7e7;\n$lightgrey-hover: #f5f5f5;\n$lightgrey-pressed: #dbdbdb;\n\n$grey: #bbbbbb;\n$grey-hover: #c7c7c7;\n$grey-pressed: #adadad;\n\n$darkgrey: #868686;\n$darkgrey-hover: #949494;\n$darkgrey-pressed: #7a7a7a;\n\n$black: #000000;\n$black-hover: #404040;\n$black-pressed: #7a7a7a;\n\n$red: #f5325c;\n$red-hover: #f64b70;\n$red-pressed: #f41a49;\n\n$orange: #ff8500;\n$orange-hover: #ff911a;\n$orange-pressed: #e67800;\n\n$green: #7ed320;\n$green-hover: #8cdf2f;\n$green-pressed: #72be1d;\n\n$blue: #007ab8;\n$blue-hover: #008bd1;\n$blue-pressed: #00699e;\n\n$purple: #7854f6;\n$purple-hover: #8c6ef7;\n$purple-pressed: #663df5;\n\n$recessed-bg: #f9f9f9;\n\n$yellow: #ffc000;\n\n// Brand Colors\n$spoke-primary-color: #2f80ed;\n$twitter-primary-color: #6fc0fd;\n$slack-primary-color: #611f69;\n$discord--primary-color: #7289da;\n\n// Discord Bot Page Colors\n$discord-bg-color: #2a2d32;\n$discord-text1-color: white;\n$discord-text2-color: #a3a3a3;\n$discord-text3-color: rgb(127, 127, 127);\n$discord-text4-color: rgb(64, 64, 64);\n\n$font-size-xs: 10px;\n$font-size-sm: 12px;\n$font-size-md: 14px;\n$font-size-lg: 20px;\n$font-size-xl: 24px;\n$font-size-2xl: 28px;\n\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 700;\n\n$border-radius-regular: 8px;\n$border-radius-small: 6px;\n\n$outline-width: 3px;\n\n$spacing-2xs: 4px;\n$spacing-xs: 8px;\n$spacing-sm: 12px;\n$spacing-md: 16px;\n$spacing-lg: 20px;\n$spacing-xl: 24px;\n\n// Theme SCSS Variables:\n// Reference these variables in the Hubs codebase.\n// The CSS variables they reference are defined in ./global.scss such that they are only included on the page once.\n$font-family-default: var(--font-family-default);\n$font-family-monospace: var(--font-family-monospace);\n\n$text1-color: var(--text1-color);\n$text1-color-hover: var(--text1-color-hover);\n$text1-color-pressed: var(--text1-color-pressed);\n$text2-color: var(--text2-color);\n$text2-color-hover: var(--text2-color-hover);\n$text2-color-pressed: var(--text2-color-pressed);\n$text3-color: var(--text3-color);\n$text3-color-hover: var(--text3-color-hover);\n$text3-color-pressed: var(--text3-color-pressed);\n$text4-color: var(--text4-color);\n$text4-color-hover: var(--text4-color-hover);\n$text4-color-pressed: var(--text4-color-pressed);\n$text5-color: var(--text5-color);\n$text5-color-hover: var(--text5-color-hover);\n$text5-color-pressed: var(--text5-color-pressed);\n$text-inverted-color: var(--text-inverted-color);\n\n$link-color: var(--link-color);\n$link-color-hover: var(--link-color-hover);\n$link-color-pressed: var(--link-color-pressed);\n\n$accept-color: var(--accept-color);\n$accept-border-color: var(--accept-border-color);\n$accept-color-hover: var(--accept-color-hover);\n$accept-color-pressed: var(--accept-color-pressed);\n\n$cancel-color: var(--cancel-color);\n$cancel-color-hover: var(--cancel-color-hover);\n$cancel-color-pressed: var(--cancel-color-pressed);\n\n$accent1-color: var(--accent1-color);\n$accent1-border-color: var(--accent1-border-color);\n$accent1-color-hover: var(--accent1-color-hover);\n$accent1-color-pressed: var(--accent1-color-pressed);\n\n$accent2-color: var(--accent2-color);\n$accent2-border-color: var(--accent2-border-color);\n$accent2-color-hover: var(--accent2-color-hover);\n$accent2-color-pressed: var(--accent2-color-pressed);\n\n$accent3-color: var(--accent3-color);\n$accent3-color-hover: var(--accent3-color-hover);\n$accent3-color-pressed: var(--accent3-color-pressed);\n$accent3-border-color: var(--accent3-border-color);\n\n$accent4-color: var(--accent4-color);\n$accent4-border-color: var(--accent4-border-color);\n$accent4-color-hover: var(--accent4-color-hover);\n$accent4-color-pressed: var(--accent4-color-pressed);\n\n$accent5-color: var(--accent5-color);\n$accent5-border-color: var(--accent5-border-color);\n$accent5-color-hover: var(--accent5-color-hover);\n$accent5-color-pressed: var(--accent5-color-pressed);\n\n$accent6-color: var(--accent6-color);\n$accent6-color-hover: var(--accent6-color-hover);\n$accent6-color-pressed: var(--accent6-color-pressed);\n\n$primary-color: var(--primary-color);\n$primary-color-hover: var(--primary-color-hover);\n$primary-color-pressed: var(--primary-color-pressed);\n\n$secondary-color: var(--secondary-color);\n$secondary-color-hover: var(--secondary-color-hover);\n$secondary-color-pressed: var(--secondary-color-pressed);\n\n$background1-color: var(--background1-color);\n$background2-color: var(--background2-color);\n$background3-color: var(--background3-color);\n$background4-color: var(--background4-color);\n\n$loading-screen-background: var(--loading-screen-background);\n\n$border1-color: var(--border1-color);\n$border2-color: var(--border2-color);\n$border3-color: var(--border3-color);\n\n$outline-color: var(--outline-color);\n\n$shadow-color: var(--shadow-color);\n\n$basic-color: var(--basic-color);\n$basic-color-hover: var(--basic-color-hover);\n$basic-color-pressed: var(--basic-color-pressed);\n$basic-border-color: var(--basic-border-color);\n\n$disabled-text-color: var(--disabled-text-color);\n$disabled-bg-color: var(--disabled-bg-color);\n$disabled-icon-color: var(--disabled-icon-color);\n\n$radio-border-color: var(--radio-border-color);\n$radio-bg-color: var(--radio-bg-color);\n$radio-bg-color-hover: var(--radio-bg-color-hover);\n$radio-bg-color-pressed: var(--radio-bg-color-pressed);\n\n$toggle-button-color: var(--toggle-button-color);\n\n$input-bg-color: var(--input-bg-color);\n$input-icon-color: var(--input-icon-color);\n$input-border-color: var(--input-border-color);\n$input-border-color-hover: var(--input-border-color-hover);\n$input-outline-color: var(--input-outline-color);\n\n$list-bg-color-hover: var(--list-bg-color-hover);\n$list-bg-color-pressed: var(--list-bg-color-pressed);\n\n$dropdown-bg-color: var(--dropdown-bg-color);\n$dropdown-border-color: var(--dropdown-border-color);\n$dropdown-shadow-color: var(--dropdown-shadow-color);\n\n$button-text-color: var(--button-text-color);\n$button-border-color: var(--button-border-color);\n$button-bg-color: var(--button-bg-color);\n$button-bg-color-hover: var(--button-bg-color-hover);\n$button-bg-color-pressed: var(--button-bg-color-pressed);\n\n$active-text-color: var(--active-text-color);\n$active-color: var(--active-color);\n$active-color-hover: var(--active-color-hover);\n$active-color-pressed: var(--active-color-pressed);\n\n$chat-bubble-bg-color-sent: var(--chat-bubble-bg-color-sent);\n$chat-bubble-text-color-sent: var(--chat-bubble-text-color-sent);\n$chat-bubble-link-color-sent-hover: var(--chat-bubble-link-color-sent-hover);\n$chat-bubble-link-color-sent-pressed: var(--chat-bubble-link-color-sent-pressed);\n$chat-bubble-bg-color-received: var(--chat-bubble-bg-color-received);\n\n$tip-text-color: var(--tip-text-color);\n$tip-bg-color: var(--tip-bg-color);\n$tip-button-color: var(--tip-button-color);\n$tip-button-color-hover: var(--tip-button-color-hover);\n$tip-button-color-pressed: var(--tip-button-color-pressed);\n\n$favorite-color: var(--favorite-color);\n\n$admin-color: var(--admin-color);\n\n$error-color: var(--error-color);\n$error-color-hover: var(--error-color-hover);\n$error-color-pressed: var(--error-color-pressed);\n\n$status-unread-color: var(--status-unread-color);\n$status-recording-color: var(--status-recording-color);\n$status-enabled-color: var(--status-enabled-color);\n$status-disabled-color: var(--status-disabled-color);\n\n$overlay-bg-color: var(--overlay-bg-color);\n$overlay-text-color: var(--overlay-text-color);\n$overlay-border-color: var(--overlay-border-color);\n$overlay-outline-color: var(--overlay-outline-color);\n\n$toolbar-icon-color: var(--toolbar-icon-color);\n$toolbar-icon-selected-bg: var(--toolbar-icon-selected-bg);\n$toolbar-basic-icon-color: var(--toolbar-basic-icon-color);\n$toolbar-basic-selected-icon-color: var(--toolbar-basic-selected-icon-color);\n$toolbar-basic-color: var(--toolbar-basic-color);\n$toolbar-basic-color-hover: var(--toolbar-basic-color-hover);\n$toolbar-basic-color-pressed: var(--toolbar-basic-color-pressed);\n$toolbar-basic-border-color: var(--toolbar-basic-border-color);\n$toolbar-label-accent1: var(--toolbar-label-accent1);\n$toolbar-label-accent2: var(--toolbar-label-accent2);\n$toolbar-label-accent3: var(--toolbar-label-accent3);\n$toolbar-label-accent4: var(--toolbar-label-accent4);\n$toolbar-label-accent5: var(--toolbar-label-accent5);\n\n$tile-text-color: var(--tile-text-color);\n$tile-bg-color: var(--tile-bg-color);\n$tile-bg-color-hover: var(--tile-bg-color-hover);\n$tile-bg-color-pressed: var(--tile-bg-color-pressed);\n$tile-button-text-color: var(--tile-button-text-color);\n$tile-button-bg-color: var(--tile-button-bg-color);\n$tile-button-bg-color-hover: var(--tile-button-bg-color-hover);\n$tile-button-bg-color-pressed: var(--tile-button-bg-color-pressed);\n$tile-button-border-color: var(--tile-button-border-color);\n\n// Lilypad compatible variables (to eventually replace the above)\n\n/**\n  PRIMARY INTERACTION\n  **/\n$color-interaction-primary: var(--color-interaction-primary);\n$color-interaction-primary-hover: var(--color-interaction-primary-hover);\n$color-interaction-primary-active: var(--color-interaction-primary-active);\n$color-interaction-primary-disabled: var(--color-interaction-primary-disabled);\n$color-interaction-primary-alt: var(--color-interaction-primary-alt);\n$color-interaction-primary-alt-hover: var(--color-interaction-primary-alt-hover);\n$color-interaction-primary-alt-active: var(--color-interaction-primary-alt-active);\n$color-interaction-primary-alt-disabled: var(--color-interaction-primary-alt-disabled);\n\n/**\n  SECONDARY INTERACTION\n  **/\n$color-interaction-secondary: var(--color-interaction-secondary);\n$color-interaction-secondary-hover: var(--color-interaction-secondary-hover);\n$color-interaction-secondary-active: var(--color-interaction-secondary-active);\n$color-interaction-secondary-disabled: var(--color-interaction-secondary-disabled);\n$color-interaction-secondary-alt: var(--color-interaction-secondary-alt);\n$color-interaction-secondary-alt-hover: var(--color-interaction-secondary-alt-hover);\n$color-interaction-secondary-alt-active: var(--color-interaction-secondary-alt-active);\n$color-interaction-secondary-alt-disabled: var(--color-interaction-secondary-alt-disabled);\n\n/**\n  SEMANTIC\n  **/\n$color-semantic-info: var(--color-semantic-info);\n$color-semantic-info-hover: var(--color-semantic-info-hover);\n$color-semantic-info-active: var(--color-semantic-info-active);\n$color-semantic-disabled: var(--color-semantic-disabled);\n$color-semantic-success: var(--color-semantic-success);\n$color-semantic-success-hover: var(--color-semantic-success-hover);\n$color-semantic--success-active: var(--color-semantic-success-active);\n$color-semantic-success-disabled: var(--color-semantic-success-disabled);\n$color-semantic-warning: var(--color-semantic-warning);\n$color-semantic-warning-hover: var(--color-semantic-warning-hover);\n$color-semantic-warning-active: var(--color-semantic-warning-active);\n$color-semantic-warning-disabled: var(--color-semantic-warning-disabled);\n$color-semantic-critical: var(--color-semantic-critical);\n$color-semantic-critical-hover: var(--color-semantic-critical-hover);\n$color-semantic-critical-active: var(--color-semantic-critical-active);\n$color-semantic-critical-disabled: var(--color-semantic-critical-disabled);\n$color-semantic-critical-bg-alt: var(--color-semantic-critical-bg-alt);\n$color-semantic-neutral: var(--color-semantic-neutral);\n$color-semantic-neutral-hover: var(--color-semantic-neutral-hover);\n$color-semantic-neutral-active: var(--color-semantic-neutral-active);\n$color-semantic-neutral-inactive: var(--color-semantic-neutral-inactive);\n\n/**\n  TEXT\n  **/\n$color-text-main: var(--color-text-main);\n$color-text-subtle: var(--color-text-subtle);\n$color-text-reverse: var(--color-text-reverse);\n$color-text-reverse-subtle: var(--color-text-reverse-subtle);\n$color-text-disabled: var(--color-text-disabled);\n$color-text-info: var(--color-text-info);\n$color-text-success: var(--color-text-success);\n$color-text-warning: var(--color-text-warning);\n$color-text-critical: var(--color-text-critical);\n\n/**\n  BORDER\n  **/\n$color-border-1: var(--color-border-1);\n$color-border-2: var(--color-border-2);\n$color-border-3: var(--color-border-3);\n\n/**\n  NEUTRALS\n  **/\n$color-neutral-0: var(--color-neutral-0);\n$color-neutral-0-reverse: var(--color-neutral-0-reverse);\n$color-neutral-1: var(--color-neutral-1);\n$color-neutral-2: var(--color-neutral-2);\n$color-neutral-3: var(--color-neutral-3);\n\n/**\n  STATUS\n  **/\n$color-status-ready: var(--color-status-ready);\n$color-status-offline: var(--color-status-offline);\n$color-status-busy: var(--color-status-busy);\n\n/**\n  BACKGROUNDS\n  **/\n$color-background-overlay: var(--color-background-overlay);\n$color-background-callout: var(--color-background-subtle-callout);\n$color-background-modal-overlay: var(--color-background-modal-overlay);\n$color-background-critical: var(--color-background-critical);\n$color-background-neutral-0: var(--color-background-neutral-0);\n\n/**\n  MENU\n  **/\n$color-interactions-menu: var(--color-interactions-menu);\n$color-interactions-menu-hover: var(--color-interactions-menu-hover);\n$color-interactions-menu-inactive: var(--color-interactions-menu-inactive);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"select-input":"SelectInputField__select-input__Q9wMN",selectInput:"SelectInputField__select-input__Q9wMN","dropdown-button":"SelectInputField__dropdown-button__E2fNK",dropdownButton:"SelectInputField__dropdown-button__E2fNK",dropdown:"SelectInputField__dropdown__wN7x4",open:"SelectInputField__open__B7Ur0","dropdown-item":"SelectInputField__dropdown-item__lLzp4",dropdownItem:"SelectInputField__dropdown-item__lLzp4","highlighted-item":"SelectInputField__highlighted-item__BhcUo",highlightedItem:"SelectInputField__highlighted-item__BhcUo"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);