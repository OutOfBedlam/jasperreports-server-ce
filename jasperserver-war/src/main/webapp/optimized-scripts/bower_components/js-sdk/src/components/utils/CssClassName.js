define(["require","underscore","underscore.string"],function(t){"use strict";var e=t("underscore"),r=t("underscore.string"),n=function(t){t=t||{},this.type=t.type,this.name=t.name};return n.prototype=Object.create({get name(){return this._name},set name(t){if(!e.isString(t))throw new TypeError("'name' should be a string");if(0===t.length)throw new Error("'name' shouldn't be an empty string");var n=r.chars(t);n[0]=n[0].toUpperCase(),this._name=n.join("")},get type(){return this._type},set type(t){if(!e.isString(t))throw new TypeError("'type' should be a string");if(0===t.length)throw new Error("'type' shouldn't be an empty string");var r=Object.keys(n.TYPES).some(function(e){return n.TYPES[e]===t});if(!r)throw new Error("'type' should be one of available types");this._type=t},toString:function(){return n.MAIN_PREFIX+"-"+n.TYPE_PEFIXES[this.type]+this.name}}),n.TYPES={MODULE:"module",LAYOUT:"layout",UTIL:"util",STATE:"state",JSHOOK:"jshook"},n.TYPE_PEFIXES={module:"m",layout:"l",state:"is",util:"u",jshook:"j"},n.MAIN_PREFIX="jr",n});