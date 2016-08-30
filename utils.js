'use strict';

//PUBLIC
function Prototype(inherits,definition){
	var object = {};
	definition.inherits = [];
	for ( var i in inherits )Inherit(definition,inherits[i].prototype);
	return Object.assign(object,definition);
};
	
function Inherit(child,parent){
	for ( var i in parent.inherits )Inherit(child,parent.inherits[i]);
	for ( var p in parent )if (p != "constructor" && p != "inherits")child[p] = parent[p];
	if ( child.inherits.indexOf(parent) < 0)child.inherits.push(parent);
};
	
function Initialize(object,args){ 
	args = Object.assign({},args);
	if ( typeof args.__current__ != 'undefined' )return;
	for ( var c in object.__proto__.inherits ){
		args.__current__ = object.__proto__.inherits[c].constructor;
		object.__proto__.inherits[c].constructor.call(object,args); 
	}
};

function isIE() { return (document.all != null); };


//PRIVATE
if (typeof Object.assign != 'function') { // === Object.assign ===
	(function () {
		Object.assign = function (target) {
			if (target === undefined || target === null) {
				throw new TypeError('Cannot convert undefined or null to object');
			}

			var output = Object(target);
			for (var index = 1; index < arguments.length; index++) {
				var source = arguments[index];
				if (source !== undefined && source !== null) {
					for (var nextKey in source) {
						if (source.hasOwnProperty(nextKey)) {
							output[nextKey] = source[nextKey];
						}
					}
				}
			}
			return output;
		};
	})();
}




module.exports = global.Utils = {
						Prototype: Prototype,
						Inherit: Inherit,
						Initialize: Initialize,
						isIE: isIE
};