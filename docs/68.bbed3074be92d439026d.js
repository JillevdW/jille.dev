(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"7b97":function(e,o,i){"use strict";i.r(o),i.d(o,"IonCheckbox",function(){return r});var t=i("cBjU"),n=i("d6Vy"),c=i("JvIM"),r=function(){function e(){var e=this;this.inputId="ion-cb-"+a++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.ionBlur.emit()}}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.onClick=function(){this.setFocus(),this.checked=!this.checked,this.indeterminate=!1},e.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},e.prototype.hostData=function(){var e,o=this,i=o.disabled,t=o.checked,r=o.color,a=o.el,s=o.inputId+"-lbl",b=Object(c.d)(a);return b&&(b.id=s),{role:"checkbox","aria-disabled":i?"true":null,"aria-checked":""+t,"aria-labelledby":s,class:Object.assign({},Object(n.c)(r),(e={},e[""+this.mode]=!0,e["in-item"]=Object(n.d)("ion-item",a),e["checkbox-checked"]=t,e["checkbox-disabled"]=i,e["checkbox-indeterminate"]=this.indeterminate,e.interactive=!0,e))}},e.prototype.render=function(){var e=this;Object(c.e)(!0,this.el,this.name,this.checked?this.value:"",this.disabled);var o=Object(t.b)("path",this.indeterminate?{d:"M6 12L18 12"}:{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===this.mode&&(o=Object(t.b)("path",this.indeterminate?{d:"M2 12H22"}:{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),[Object(t.b)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},o),Object(t.b)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(o){return e.buttonEl=o}})]},Object.defineProperty(e,"is",{get:function(){return"ion-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},indeterminate:{type:Boolean,attr:"indeterminate",mutable:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-checkbox-ios-h{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ion-color.sc-ion-checkbox-ios-h{--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button.sc-ion-checkbox-ios{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl].sc-ion-checkbox-ios-h   button.sc-ion-checkbox-ios, [dir=rtl]   .sc-ion-checkbox-ios-h   button.sc-ion-checkbox-ios{right:0}button.sc-ion-checkbox-ios::-moz-focus-inner{border:0}.checkbox-icon.sc-ion-checkbox-ios{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon.sc-ion-checkbox-ios   path.sc-ion-checkbox-ios{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}.checkbox-checked.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios, .checkbox-indeterminate.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios{border-color:var(--border-color-checked);background:var(--background-checked)}.checkbox-checked.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios   path.sc-ion-checkbox-ios, .checkbox-indeterminate.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios   path.sc-ion-checkbox-ios{opacity:1}.checkbox-disabled.sc-ion-checkbox-ios-h{pointer-events:none}.sc-ion-checkbox-ios-h{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)));--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}.checkbox-disabled.sc-ion-checkbox-ios-h{opacity:.3}.in-item.sc-ion-checkbox-ios-h{margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-item.sc-ion-checkbox-ios-h{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}.in-item[slot=start].sc-ion-checkbox-ios-h{margin-left:2px;margin-right:16px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-item[slot=start].sc-ion-checkbox-ios-h{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px}}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),a=0}}]);