/*! For license information please see 9034.c8206dd9.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkhubs=globalThis.webpackChunkhubs||[]).push([[9034],{"./src/react-components/layout/LoadingScreenLayout.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>LoadingScreenLayout_LoadingScreenLayout});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LoadingScreenLayout=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/layout/LoadingScreenLayout.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LoadingScreenLayout.Z,options);const layout_LoadingScreenLayout=LoadingScreenLayout.Z&&LoadingScreenLayout.Z.locals?LoadingScreenLayout.Z.locals:void 0;var Column=__webpack_require__("./src/react-components/layout/Column.js"),AppLogo=__webpack_require__("./src/react-components/misc/AppLogo.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function LoadingScreenLayout_LoadingScreenLayout(_ref){let{center,bottom}=_ref;return(0,jsx_runtime.jsxs)("div",{className:layout_LoadingScreenLayout.loadingScreenLayout,children:[(0,jsx_runtime.jsxs)(Column.s,{center:!0,padding:!0,gap:"lg",className:layout_LoadingScreenLayout.center,children:[(0,jsx_runtime.jsx)(AppLogo.G,{className:layout_LoadingScreenLayout.logo}),center]}),bottom&&(0,jsx_runtime.jsx)(Column.s,{center:!0,className:layout_LoadingScreenLayout.bottom,children:bottom})]})}LoadingScreenLayout_LoadingScreenLayout.displayName="LoadingScreenLayout",LoadingScreenLayout_LoadingScreenLayout.propTypes={center:prop_types_default().node,bottom:prop_types_default().node},LoadingScreenLayout_LoadingScreenLayout.__docgenInfo={description:"",methods:[],displayName:"LoadingScreenLayout",props:{center:{description:"",type:{name:"node"},required:!1},bottom:{description:"",type:{name:"node"},required:!1}}}},"./src/react-components/misc/AppLogo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>AppLogo});__webpack_require__("./node_modules/react/index.js");var _utils_configs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/configs.js"),_icons_HmcLogo_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react-components/icons/HmcLogo.svg"),_utils_isHmc__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/isHmc.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/react-components/styles/theme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AppLogo(_ref){let{className}=_ref;const logo=(0,_styles_theme__WEBPACK_IMPORTED_MODULE_4__.uP)();return(0,_utils_isHmc__WEBPACK_IMPORTED_MODULE_3__.G)()&&!logo?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons_HmcLogo_svg__WEBPACK_IMPORTED_MODULE_2__.r,{className:"hmc-logo"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img",{className,alt:_utils_configs__WEBPACK_IMPORTED_MODULE_1__.Z.translation("app-name"),src:logo})}try{AppLogo.displayName="AppLogo",AppLogo.__docgenInfo={description:"",displayName:"AppLogo",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-components/misc/AppLogo.tsx#AppLogo"]={docgenInfo:AppLogo.__docgenInfo,name:"AppLogo",path:"src/react-components/misc/AppLogo.tsx#AppLogo"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/isHmc.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>isHmc});var _configs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/configs.js");function isHmc(){return _configs__WEBPACK_IMPORTED_MODULE_0__.Z.feature("show_cloud")}},"./src/react-components/icons/HmcLogo.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>SvgHmcLogo});var _path,_path2,_path3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgHmcLogo=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:144,height:100,viewBox:"0 0 144 100",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M144 99.74H0V58.115h144v41.627ZM41.88 87.245h-2.32V78.95c0-4.329-2.96-6.311-6.2-6.311-2.84 0-4.88 1.497-5.88 3.924-.88-2.67-3.28-3.924-5.88-3.924-2.52 0-4.4 1.173-5.48 3.115v-2.751H8.56v3.964h2.4v10.316h-2.4v3.964h10.96v-3.964h-3.44v-6.351c0-2.549 1-4.329 3.48-4.329 2.04 0 3.08 1.214 3.08 4.37v10.274h7.56v-3.964h-2.4v-6.351c0-2.549 1-4.329 3.48-4.329 2.04 0 3.08 1.214 3.08 4.37v10.234h7.52v-3.965ZM53.801 72.64c-6.48 0-9.68 4.41-9.68 9.75 0 5.824 3.84 9.263 9.4 9.263 5.76 0 9.92-3.681 9.92-9.507 0-5.097-3.16-9.506-9.64-9.506Zm-4.36 9.382c0 3.155 1.44 5.582 4.24 5.582 2.68 0 4.44-2.143 4.44-5.663 0-3.681-1.961-5.34-4.4-5.34-2.64 0-4.28 1.982-4.28 5.421Zm30.156 2.43 4.08.404-1.12 6.392h-15.72l-.52-2.75 9.92-11.53h-5.64l-.8 2.832-3.72-.405.64-6.392h15.8l.4 2.751-10 11.53h5.84l.84-2.832Zm13.283 6.797h-5.4v-6.553h5.4v6.553Zm-5.4-11.692h5.4v-6.554h-5.4v6.554Zm13.798 11.65 7.8-27.792h-5.08l-7.8 27.792h5.08Zm18.282-27.792-7.801 27.792h-5.08l7.8-27.792h5.081Zm17.2 24.718c.24 0 .479-.04.76-.12l.12 2.79c-.961.527-2.12.85-3.24.85-2.401 0-3.72-1.416-3.96-3.64-1.04 1.86-2.88 3.64-5.801 3.64-2.6 0-5.559-1.416-5.559-5.219 0-4.49 4.279-5.542 8.4-5.542 1 0 2.04.04 2.96.162v-.607c0-1.86-.04-4.085-2.96-4.085-1.08 0-1.92.08-2.76.526l-.6 2.063-4.12-.445.64-4.208c3.16-1.294 4.76-1.658 7.72-1.658 3.88 0 7.16 2.022 7.16 6.19v7.888c0 1.051.4 1.415 1.24 1.415Z",fill:"currentColor"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M126.48 87.891c-1.56 0-2.12-.93-2.12-2.104 0-1.982 1.6-2.508 3.44-2.508.84 0 1.76.122 2.6.243-.12 3.034-2.08 4.37-3.92 4.37Z",fill:"currentColor"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M43.81 46.79H30.181V41.35h3.283V32.54c0-2.17-.383-3.721-1.149-4.657-.73-.935-1.788-1.402-3.174-1.402-1.606 0-2.864.505-3.776 1.515-.876 1.01-1.35 2.337-1.424 3.983v9.37h3.284v5.442H13.6v-5.442h3.284v-27.66h-3.284V8.191h10.343v17.168c1.642-2.918 4.288-4.376 7.936-4.376 2.335 0 4.36.71 6.075 2.132 1.715 1.42 2.572 3.628 2.572 6.62v11.614h3.284v5.442Zm31.964 0H65.156v-3.87c-1.642 2.917-4.287 4.376-7.935 4.376-2.335 0-4.36-.711-6.075-2.132-1.715-1.422-2.572-3.629-2.572-6.62V26.93H45.29v-5.442h10.343v14.25c0 2.207.347 3.778 1.04 4.713.73.898 1.788 1.346 3.175 1.346 1.678 0 2.973-.56 3.885-1.683.949-1.122 1.423-2.562 1.423-4.32V26.93h-3.995v-5.442h11.055v19.86h3.558v5.443Zm29.77-13.24c0 3.74-.967 6.976-2.901 9.706-1.897 2.73-4.706 4.096-8.428 4.096-3.758 0-6.403-1.459-7.936-4.377a34.365 34.365 0 0 1-.273 1.908 34.28 34.28 0 0 1-.274 1.908h-7.06c.255-1.31.475-2.619.657-3.928.182-1.309.274-2.6.274-3.87V13.688h-3.284V8.191h10.344v18.122c.656-1.46 1.641-2.712 2.955-3.76 1.35-1.047 3.138-1.57 5.363-1.57 3.102 0 5.637 1.103 7.608 3.31 1.97 2.207 2.955 5.292 2.955 9.257Zm-7.334.617c0-2.431-.51-4.283-1.532-5.554-1.022-1.272-2.372-1.908-4.05-1.908-1.897 0-3.375.71-4.433 2.132-1.022 1.422-1.532 3.067-1.532 4.937v.617c0 2.058.492 3.797 1.477 5.218 1.022 1.384 2.463 2.076 4.324 2.076 1.605 0 2.955-.598 4.05-1.795 1.13-1.234 1.696-3.142 1.696-5.723Zm32.278 4.881c0 2.805-1.095 4.9-3.284 6.284-2.152 1.346-4.962 2.02-8.427 2.02-1.789 0-3.595-.187-5.419-.561a21.349 21.349 0 0 1-5.144-1.908l.985-7.07 5.473.618v3.142c.656.224 1.35.374 2.079.449.73.037 1.278.056 1.643.056 1.349 0 2.517-.225 3.502-.673.985-.45 1.477-1.123 1.477-2.02 0-1.085-.748-1.795-2.243-2.132a102.972 102.972 0 0 0-5.2-1.01c-1.97-.337-3.703-1.029-5.199-2.076-1.496-1.047-2.244-2.824-2.244-5.33 0-3.104 1.168-5.18 3.503-6.227 2.372-1.085 4.816-1.627 7.334-1.627 3.284 0 6.366.766 9.248 2.3l.603 6.452-5.473.617-.438-3.535c-1.204-.41-2.499-.617-3.886-.617-.911 0-1.696.206-2.352.617-.622.375-.931.973-.931 1.796 0 1.085.711 1.814 2.134 2.188 1.459.337 3.137.673 5.035 1.01 1.934.336 3.613 1.028 5.035 2.076 1.46 1.01 2.189 2.73 2.189 5.161Z",fill:"currentColor"})))}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/layout/LoadingScreenLayout.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".LoadingScreenLayout__loading-screen-layout__Tybb0{pointer-events:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;position:fixed;left:0;right:0;bottom:0;top:0;background:var(--loading-screen-background);font-size:12px}@media(min-width: 992px)and (min-height: 600px){.LoadingScreenLayout__loading-screen-layout__Tybb0{font-size:14px}}.LoadingScreenLayout__center__HTsFi{flex-grow:0}.LoadingScreenLayout__logo__r1f8O{position:absolute;transform:translateY(calc(-100% - 20px));max-width:260px;max-height:140px}.LoadingScreenLayout__bottom__Ivx3e{position:absolute;bottom:10%;width:100%;padding:0 48px}","",{version:3,sources:["webpack://./src/react-components/layout/LoadingScreenLayout.scss","webpack://./src/react-components/styles/theme.scss"],names:[],mappings:"AAEA,mDACE,mBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,qBAAA,CACA,cAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,KAAA,CACA,2CC6J0B,CD3J1B,cCuDa,CDrDb,gDAfF,mDAgBI,cCqDW,CAAA,CDjDf,oCACE,WAAA,CAGF,kCAEE,iBAAA,CACA,wCAAA,CACA,eAAA,CACA,gBAAA,CAGF,oCACE,iBAAA,CACA,UAAA,CACA,UAAA,CACA,cAAA",sourcesContent:['@use "../styles/theme.scss";\n\n:local(.loading-screen-layout) {\n  pointer-events: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: theme.$loading-screen-background;\n\n  font-size: theme.$font-size-sm;\n\n  @media(min-width: theme.$breakpoint-lg) and (min-height: theme.$breakpoint-vr) {\n    font-size: theme.$font-size-md;\n  }\n}\n\n:local(.center) {\n  flex-grow: 0;\n}\n\n:local(.logo) {\n  // Keep arbitrary-sized logos from making the page jump on load\n  position: absolute;\n  transform: translateY(calc(-100% - 20px));\n  max-width: 260px;\n  max-height: 140px;\n}\n\n:local(.bottom) {\n  position: absolute;\n  bottom: 10%;\n  width: 100%;\n  padding: 0 48px;\n}\n',"// default below 576px (Portrait Phones)\n$breakpoint-sm: 576px; // Landscape Phones\n$breakpoint-md: 768px; // Tablets\n$breakpoint-lg: 992px; // Desktops\n$breakpoint-xl: 1200px; // Large Desktops\n$breakpoint-xxl: 1600px; // Extra Large Desktops\n$breakpoint-vr: 600px; // Standalone VR Browsers\n\n$transparent: transparent;\n$transparent-hover: rgba(0, 0, 0, 0.08);\n$transparent-pressed: rgba(0, 0, 0, 0.12);\n\n$white: #ffffff;\n$white-hover: #e7e7e7;\n$white-pressed: #dbdbdb;\n\n$lightgrey: #e7e7e7;\n$lightgrey-hover: #f5f5f5;\n$lightgrey-pressed: #dbdbdb;\n\n$grey: #bbbbbb;\n$grey-hover: #c7c7c7;\n$grey-pressed: #adadad;\n\n$darkgrey: #868686;\n$darkgrey-hover: #949494;\n$darkgrey-pressed: #7a7a7a;\n\n$black: #000000;\n$black-hover: #404040;\n$black-pressed: #7a7a7a;\n\n$red: #f5325c;\n$red-hover: #f64b70;\n$red-pressed: #f41a49;\n\n$orange: #ff8500;\n$orange-hover: #ff911a;\n$orange-pressed: #e67800;\n\n$green: #7ed320;\n$green-hover: #8cdf2f;\n$green-pressed: #72be1d;\n\n$blue: #007ab8;\n$blue-hover: #008bd1;\n$blue-pressed: #00699e;\n\n$purple: #7854f6;\n$purple-hover: #8c6ef7;\n$purple-pressed: #663df5;\n\n$recessed-bg: #f9f9f9;\n\n$yellow: #ffc000;\n\n// Brand Colors\n$spoke-primary-color: #2f80ed;\n$twitter-primary-color: #6fc0fd;\n$slack-primary-color: #611f69;\n$discord--primary-color: #7289da;\n\n// Discord Bot Page Colors\n$discord-bg-color: #2a2d32;\n$discord-text1-color: white;\n$discord-text2-color: #a3a3a3;\n$discord-text3-color: rgb(127, 127, 127);\n$discord-text4-color: rgb(64, 64, 64);\n\n$font-size-xs: 10px;\n$font-size-sm: 12px;\n$font-size-md: 14px;\n$font-size-lg: 20px;\n$font-size-xl: 24px;\n$font-size-2xl: 28px;\n\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 700;\n\n$border-radius-regular: 8px;\n$border-radius-small: 6px;\n\n$outline-width: 3px;\n\n$spacing-2xs: 4px;\n$spacing-xs: 8px;\n$spacing-sm: 12px;\n$spacing-md: 16px;\n$spacing-lg: 20px;\n$spacing-xl: 24px;\n\n// Theme SCSS Variables:\n// Reference these variables in the Hubs codebase.\n// The CSS variables they reference are defined in ./global.scss such that they are only included on the page once.\n$font-family-default: var(--font-family-default);\n$font-family-monospace: var(--font-family-monospace);\n\n$text1-color: var(--text1-color);\n$text1-color-hover: var(--text1-color-hover);\n$text1-color-pressed: var(--text1-color-pressed);\n$text2-color: var(--text2-color);\n$text2-color-hover: var(--text2-color-hover);\n$text2-color-pressed: var(--text2-color-pressed);\n$text3-color: var(--text3-color);\n$text3-color-hover: var(--text3-color-hover);\n$text3-color-pressed: var(--text3-color-pressed);\n$text4-color: var(--text4-color);\n$text4-color-hover: var(--text4-color-hover);\n$text4-color-pressed: var(--text4-color-pressed);\n$text5-color: var(--text5-color);\n$text5-color-hover: var(--text5-color-hover);\n$text5-color-pressed: var(--text5-color-pressed);\n$text-inverted-color: var(--text-inverted-color);\n\n$link-color: var(--link-color);\n$link-color-hover: var(--link-color-hover);\n$link-color-pressed: var(--link-color-pressed);\n\n$accept-color: var(--accept-color);\n$accept-border-color: var(--accept-border-color);\n$accept-color-hover: var(--accept-color-hover);\n$accept-color-pressed: var(--accept-color-pressed);\n\n$cancel-color: var(--cancel-color);\n$cancel-color-hover: var(--cancel-color-hover);\n$cancel-color-pressed: var(--cancel-color-pressed);\n\n$accent1-color: var(--accent1-color);\n$accent1-border-color: var(--accent1-border-color);\n$accent1-color-hover: var(--accent1-color-hover);\n$accent1-color-pressed: var(--accent1-color-pressed);\n\n$accent2-color: var(--accent2-color);\n$accent2-border-color: var(--accent2-border-color);\n$accent2-color-hover: var(--accent2-color-hover);\n$accent2-color-pressed: var(--accent2-color-pressed);\n\n$accent3-color: var(--accent3-color);\n$accent3-color-hover: var(--accent3-color-hover);\n$accent3-color-pressed: var(--accent3-color-pressed);\n$accent3-border-color: var(--accent3-border-color);\n\n$accent4-color: var(--accent4-color);\n$accent4-border-color: var(--accent4-border-color);\n$accent4-color-hover: var(--accent4-color-hover);\n$accent4-color-pressed: var(--accent4-color-pressed);\n\n$accent5-color: var(--accent5-color);\n$accent5-border-color: var(--accent5-border-color);\n$accent5-color-hover: var(--accent5-color-hover);\n$accent5-color-pressed: var(--accent5-color-pressed);\n\n$accent6-color: var(--accent6-color);\n$accent6-color-hover: var(--accent6-color-hover);\n$accent6-color-pressed: var(--accent6-color-pressed);\n\n$primary-color: var(--primary-color);\n$primary-color-hover: var(--primary-color-hover);\n$primary-color-pressed: var(--primary-color-pressed);\n\n$secondary-color: var(--secondary-color);\n$secondary-color-hover: var(--secondary-color-hover);\n$secondary-color-pressed: var(--secondary-color-pressed);\n\n$background1-color: var(--background1-color);\n$background2-color: var(--background2-color);\n$background3-color: var(--background3-color);\n$background4-color: var(--background4-color);\n\n$loading-screen-background: var(--loading-screen-background);\n\n$border1-color: var(--border1-color);\n$border2-color: var(--border2-color);\n$border3-color: var(--border3-color);\n\n$outline-color: var(--outline-color);\n\n$shadow-color: var(--shadow-color);\n\n$basic-color: var(--basic-color);\n$basic-color-hover: var(--basic-color-hover);\n$basic-color-pressed: var(--basic-color-pressed);\n$basic-border-color: var(--basic-border-color);\n\n$disabled-text-color: var(--disabled-text-color);\n$disabled-bg-color: var(--disabled-bg-color);\n$disabled-icon-color: var(--disabled-icon-color);\n\n$radio-border-color: var(--radio-border-color);\n$radio-bg-color: var(--radio-bg-color);\n$radio-bg-color-hover: var(--radio-bg-color-hover);\n$radio-bg-color-pressed: var(--radio-bg-color-pressed);\n\n$toggle-button-color: var(--toggle-button-color);\n\n$input-bg-color: var(--input-bg-color);\n$input-icon-color: var(--input-icon-color);\n$input-border-color: var(--input-border-color);\n$input-border-color-hover: var(--input-border-color-hover);\n$input-outline-color: var(--input-outline-color);\n\n$list-bg-color-hover: var(--list-bg-color-hover);\n$list-bg-color-pressed: var(--list-bg-color-pressed);\n\n$dropdown-bg-color: var(--dropdown-bg-color);\n$dropdown-border-color: var(--dropdown-border-color);\n$dropdown-shadow-color: var(--dropdown-shadow-color);\n\n$button-text-color: var(--button-text-color);\n$button-border-color: var(--button-border-color);\n$button-bg-color: var(--button-bg-color);\n$button-bg-color-hover: var(--button-bg-color-hover);\n$button-bg-color-pressed: var(--button-bg-color-pressed);\n\n$active-text-color: var(--active-text-color);\n$active-color: var(--active-color);\n$active-color-hover: var(--active-color-hover);\n$active-color-pressed: var(--active-color-pressed);\n\n$chat-bubble-bg-color-sent: var(--chat-bubble-bg-color-sent);\n$chat-bubble-text-color-sent: var(--chat-bubble-text-color-sent);\n$chat-bubble-link-color-sent-hover: var(--chat-bubble-link-color-sent-hover);\n$chat-bubble-link-color-sent-pressed: var(--chat-bubble-link-color-sent-pressed);\n$chat-bubble-bg-color-received: var(--chat-bubble-bg-color-received);\n\n$tip-text-color: var(--tip-text-color);\n$tip-bg-color: var(--tip-bg-color);\n$tip-button-color: var(--tip-button-color);\n$tip-button-color-hover: var(--tip-button-color-hover);\n$tip-button-color-pressed: var(--tip-button-color-pressed);\n\n$favorite-color: var(--favorite-color);\n\n$admin-color: var(--admin-color);\n\n$error-color: var(--error-color);\n$error-color-hover: var(--error-color-hover);\n$error-color-pressed: var(--error-color-pressed);\n\n$status-unread-color: var(--status-unread-color);\n$status-recording-color: var(--status-recording-color);\n$status-enabled-color: var(--status-enabled-color);\n$status-disabled-color: var(--status-disabled-color);\n\n$overlay-bg-color: var(--overlay-bg-color);\n$overlay-text-color: var(--overlay-text-color);\n$overlay-border-color: var(--overlay-border-color);\n$overlay-outline-color: var(--overlay-outline-color);\n\n$toolbar-icon-color: var(--toolbar-icon-color);\n$toolbar-icon-selected-bg: var(--toolbar-icon-selected-bg);\n$toolbar-basic-icon-color: var(--toolbar-basic-icon-color);\n$toolbar-basic-selected-icon-color: var(--toolbar-basic-selected-icon-color);\n$toolbar-basic-color: var(--toolbar-basic-color);\n$toolbar-basic-color-hover: var(--toolbar-basic-color-hover);\n$toolbar-basic-color-pressed: var(--toolbar-basic-color-pressed);\n$toolbar-basic-border-color: var(--toolbar-basic-border-color);\n$toolbar-label-accent1: var(--toolbar-label-accent1);\n$toolbar-label-accent2: var(--toolbar-label-accent2);\n$toolbar-label-accent3: var(--toolbar-label-accent3);\n$toolbar-label-accent4: var(--toolbar-label-accent4);\n$toolbar-label-accent5: var(--toolbar-label-accent5);\n\n$tile-text-color: var(--tile-text-color);\n$tile-bg-color: var(--tile-bg-color);\n$tile-bg-color-hover: var(--tile-bg-color-hover);\n$tile-bg-color-pressed: var(--tile-bg-color-pressed);\n$tile-button-text-color: var(--tile-button-text-color);\n$tile-button-bg-color: var(--tile-button-bg-color);\n$tile-button-bg-color-hover: var(--tile-button-bg-color-hover);\n$tile-button-bg-color-pressed: var(--tile-button-bg-color-pressed);\n$tile-button-border-color: var(--tile-button-border-color);\n\n// Lilypad compatible variables (to eventually replace the above)\n\n/**\n  PRIMARY INTERACTION\n  **/\n$color-interaction-primary: var(--color-interaction-primary);\n$color-interaction-primary-hover: var(--color-interaction-primary-hover);\n$color-interaction-primary-active: var(--color-interaction-primary-active);\n$color-interaction-primary-disabled: var(--color-interaction-primary-disabled);\n$color-interaction-primary-alt: var(--color-interaction-primary-alt);\n$color-interaction-primary-alt-hover: var(--color-interaction-primary-alt-hover);\n$color-interaction-primary-alt-active: var(--color-interaction-primary-alt-active);\n$color-interaction-primary-alt-disabled: var(--color-interaction-primary-alt-disabled);\n\n/**\n  SECONDARY INTERACTION\n  **/\n$color-interaction-secondary: var(--color-interaction-secondary);\n$color-interaction-secondary-hover: var(--color-interaction-secondary-hover);\n$color-interaction-secondary-active: var(--color-interaction-secondary-active);\n$color-interaction-secondary-disabled: var(--color-interaction-secondary-disabled);\n$color-interaction-secondary-alt: var(--color-interaction-secondary-alt);\n$color-interaction-secondary-alt-hover: var(--color-interaction-secondary-alt-hover);\n$color-interaction-secondary-alt-active: var(--color-interaction-secondary-alt-active);\n$color-interaction-secondary-alt-disabled: var(--color-interaction-secondary-alt-disabled);\n\n/**\n  SEMANTIC\n  **/\n$color-semantic-info: var(--color-semantic-info);\n$color-semantic-info-hover: var(--color-semantic-info-hover);\n$color-semantic-info-active: var(--color-semantic-info-active);\n$color-semantic-disabled: var(--color-semantic-disabled);\n$color-semantic-success: var(--color-semantic-success);\n$color-semantic-success-hover: var(--color-semantic-success-hover);\n$color-semantic--success-active: var(--color-semantic-success-active);\n$color-semantic-success-disabled: var(--color-semantic-success-disabled);\n$color-semantic-warning: var(--color-semantic-warning);\n$color-semantic-warning-hover: var(--color-semantic-warning-hover);\n$color-semantic-warning-active: var(--color-semantic-warning-active);\n$color-semantic-warning-disabled: var(--color-semantic-warning-disabled);\n$color-semantic-critical: var(--color-semantic-critical);\n$color-semantic-critical-hover: var(--color-semantic-critical-hover);\n$color-semantic-critical-active: var(--color-semantic-critical-active);\n$color-semantic-critical-disabled: var(--color-semantic-critical-disabled);\n$color-semantic-critical-bg-alt: var(--color-semantic-critical-bg-alt);\n$color-semantic-neutral: var(--color-semantic-neutral);\n$color-semantic-neutral-hover: var(--color-semantic-neutral-hover);\n$color-semantic-neutral-active: var(--color-semantic-neutral-active);\n$color-semantic-neutral-inactive: var(--color-semantic-neutral-inactive);\n\n/**\n  TEXT\n  **/\n$color-text-main: var(--color-text-main);\n$color-text-subtle: var(--color-text-subtle);\n$color-text-reverse: var(--color-text-reverse);\n$color-text-reverse-subtle: var(--color-text-reverse-subtle);\n$color-text-disabled: var(--color-text-disabled);\n$color-text-info: var(--color-text-info);\n$color-text-success: var(--color-text-success);\n$color-text-warning: var(--color-text-warning);\n$color-text-critical: var(--color-text-critical);\n\n/**\n  BORDER\n  **/\n$color-border-1: var(--color-border-1);\n$color-border-2: var(--color-border-2);\n$color-border-3: var(--color-border-3);\n\n/**\n  NEUTRALS\n  **/\n$color-neutral-0: var(--color-neutral-0);\n$color-neutral-0-reverse: var(--color-neutral-0-reverse);\n$color-neutral-1: var(--color-neutral-1);\n$color-neutral-2: var(--color-neutral-2);\n$color-neutral-3: var(--color-neutral-3);\n\n/**\n  STATUS\n  **/\n$color-status-ready: var(--color-status-ready);\n$color-status-offline: var(--color-status-offline);\n$color-status-busy: var(--color-status-busy);\n\n/**\n  BACKGROUNDS\n  **/\n$color-background-overlay: var(--color-background-overlay);\n$color-background-callout: var(--color-background-subtle-callout);\n$color-background-modal-overlay: var(--color-background-modal-overlay);\n$color-background-critical: var(--color-background-critical);\n$color-background-neutral-0: var(--color-background-neutral-0);\n\n/**\n  MENU\n  **/\n$color-interactions-menu: var(--color-interactions-menu);\n$color-interactions-menu-hover: var(--color-interactions-menu-hover);\n$color-interactions-menu-inactive: var(--color-interactions-menu-inactive);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"loading-screen-layout":"LoadingScreenLayout__loading-screen-layout__Tybb0",loadingScreenLayout:"LoadingScreenLayout__loading-screen-layout__Tybb0",center:"LoadingScreenLayout__center__HTsFi",logo:"LoadingScreenLayout__logo__r1f8O",bottom:"LoadingScreenLayout__bottom__Ivx3e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);