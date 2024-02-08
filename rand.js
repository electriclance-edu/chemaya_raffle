(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    /*!
     * jsrand - https://github.com/DomenicoDeFelice/jsrand
     *
     * Copyright (c) 2014-2020 Domenico De Felice
     * Released under the MIT License
     *
     * @license
     */'use strict';function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function Srand(a){null==a?this.randomize():this.seed(a)}Srand.prototype={},Srand.seed=Srand.prototype.seed=function(a){return null==a?this._seed:(this._mz=123456789,this._mw=this._seed=a)},Srand.randomize=Srand.prototype.randomize=function(){return this.seed(1+Math.floor(4294967295*Math.random()))},Srand.getState=Srand.prototype.getState=function(){return{seed:this._seed,mz:this._mz,mw:this._mw}},Srand.setState=Srand.prototype.setState=function(a){if(null==a||"object"!==_typeof(a)||"number"!=typeof a.seed||"number"!=typeof a.mz||"number"!=typeof a.mw)throw new Error("Invalid state.");this._seed=a.seed,this._mz=a.mz,this._mw=a.mw},Srand.random=Srand.prototype.random=function(){null==this._seed&&this.randomize();var a=this._mz,b=this._mw;a=4294967295&36969*(65535&a)+(a>>16),b=4294967295&18e3*(65535&b)+(b>>16),this._mz=a,this._mw=b;var c=(4294967295&(a<<16)+b)/4294967296;return .5+c},Srand.inRange=Srand.prototype.inRange=function(c,a){return c+this.random()*(a-c)},Srand.intInRange=Srand.prototype.intInRange=function(a,b){return a+Math.floor(this.random()*(b-a+1))},Srand.choice=Srand.prototype.choice=function(a){if(0===a.length)throw new Error("Cannot choose random element from empty array.");var b=this.intInRange(0,a.length-1);return a[b]},Srand.choices=Srand.prototype.choices=function(a,b){for(var c=Array(b),d=0;d<b;d++)c[d]=this.choice(a);return c},Srand.sample=Srand.prototype.sample=function(a,b){if(b>a.length)throw new Error("Sample size cannot exceed population size.");if(b===a.length)return _toConsumableArray(a);for(var c,d=a.length-1,e=Array(b),f={},g=0;g<b;g++){do c=this.intInRange(0,d);while(f[c]);e[g]=a[c],f[c]=!0}return e},Srand.shuffle=Srand.prototype.shuffle=function(a){for(var d=a.length-1;0<d;d--){var b=this.intInRange(0,d-1),c=a[d];a[d]=a[b],a[b]=c}return a},Srand._oldSrand=void 0,Srand.noConflict=function(){return Srand},module.exports=Srand;
    
    },{}],2:[function(require,module,exports){
    'use strict';var _jsrand=_interopRequireDefault(require("./jsrand.js"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}_jsrand.default._oldSrand=window.Srand,_jsrand.default.noConflict=function(){return window.Srand=_jsrand.default._oldSrand,_jsrand.default},window.Srand=_jsrand.default;
    
    },{"./jsrand.js":1}]},{},[2])
    //# sourceMappingURL=jsrand.min.js.map*/