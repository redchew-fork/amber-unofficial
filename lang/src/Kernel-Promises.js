define(["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage("Kernel-Promises");
($core.packageDescriptors||$core.packages)["Kernel-Promises"].innerEval = function (expr) { return eval(expr); };
($core.packageDescriptors||$core.packages)["Kernel-Promises"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass("Promise", $globals.Object, [], "Kernel-Promises");

$core.addMethod(
$core.method({
selector: "all:",
protocol: "composites",
fn: function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Promise.all($recv(aCollection)._asArray());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"all:",{aCollection:aCollection},$globals.Promise.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "all: aCollection\x0a\x22Returns a Promise resolved with results of sub-promises.\x22\x0a<inlineJS: 'return Promise.all($recv(aCollection)._asArray())'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "any:",
protocol: "composites",
fn: function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Promise.race($recv(aCollection)._asArray());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"any:",{aCollection:aCollection},$globals.Promise.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "any: aCollection\x0a\x22Returns a Promise resolved with first result of sub-promises.\x22\x0a<inlineJS: 'return Promise.race($recv(aCollection)._asArray())'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "forBlock:",
protocol: "instance creation",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._then_(aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forBlock:",{aBlock:aBlock},$globals.Promise.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "forBlock: aBlock\x0a\x22Returns a Promise that is resolved with the value of aBlock,\x0aand rejected if error happens while evaluating aBlock.\x22\x0a\x09^ self new then: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["then:", "new"]
}),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Promise.resolve();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.Promise.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x22Returns a dumb Promise resolved with nil.\x22\x0a<inlineJS: 'return Promise.resolve()'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "new:",
protocol: "instance creation",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new Promise(function (resolve, reject) {
    var model = {value: resolve, signal: reject};
    aBlock._value_(model);
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{aBlock:aBlock},$globals.Promise.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "new: aBlock\x0a\x22Returns a Promise that is eventually resolved or rejected.\x0aPass a block that is called with one argument, model.\x0aYou should call model value: ... to resolve the promise\x0aand model signal: ... to reject the promise.\x0aIf error happens during run of the block,\x0apromise is rejected with that error as well.\x22\x0a<inlineJS: 'return new Promise(function (resolve, reject) {\x0a    var model = {value: resolve, signal: reject};\x0a    aBlock._value_(model);\x0a})'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "signal:",
protocol: "instance creation",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anObject)._in_(function (x) {return Promise.reject(x)});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signal:",{anObject:anObject},$globals.Promise.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "signal: anObject\x0a\x22Returns a Promise rejected with anObject.\x22\x0a<inlineJS: 'return $recv(anObject)._in_(function (x) {return Promise.reject(x)})'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "instance creation",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anObject)._in_(function (x) {return Promise.resolve(x)});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},$globals.Promise.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x22Returns a Promise resolved with anObject.\x22\x0a<inlineJS: 'return $recv(anObject)._in_(function (x) {return Promise.resolve(x)})'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Promise.a$cls);


$core.addTrait("TThenable", "Kernel-Promises");
$core.addMethod(
$core.method({
selector: "catch:",
protocol: "promises",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.then(null, function (err) {return $core.seamless(function () {
    return aBlock._value_(err);
})});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"catch:",{aBlock:aBlock},$globals.TThenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "catch: aBlock\x0a<inlineJS: 'return self.then(null, function (err) {return $core.seamless(function () {\x0a    return aBlock._value_(err);\x0a})})'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: "promises",
fn: function (aClass,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.then(null, function (err) {return $core.seamless(function () {
    if (err._isKindOf_(aClass)) return aBlock._value_(err);
    else throw err;
})});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock},$globals.TThenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a<inlineJS: 'return self.then(null, function (err) {return $core.seamless(function () {\x0a    if (err._isKindOf_(aClass)) return aBlock._value_(err);\x0a    else throw err;\x0a})})'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "on:do:catch:",
protocol: "promises",
fn: function (aClass,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._on_do_(aClass,aBlock))._catch_(anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:catch:",{aClass:aClass,aBlock:aBlock,anotherBlock:anotherBlock},$globals.TThenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock", "anotherBlock"],
source: "on: aClass do: aBlock catch: anotherBlock\x0a\x09^ (self on: aClass do: aBlock) catch: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["catch:", "on:do:"]
}),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "then:",
protocol: "promises",
fn: function (aBlockOrArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

var array = Array.isArray(aBlockOrArray) ? aBlockOrArray : [aBlockOrArray];
return array.reduce(function (soFar, aBlock) {
    return soFar.then(typeof aBlock === "function" && aBlock.length > 1 ?
        function (result) {return $core.seamless(function () {
            if (Array.isArray(result)) {
                return aBlock._valueWithPossibleArguments_([result].concat(result.slice(0, aBlock.length-1)));
            } else {
                return aBlock._value_(result);
            }
        })} :
        function (result) {return $core.seamless(function () {
            return aBlock._value_(result);
        })}
    );
}, self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:",{aBlockOrArray:aBlockOrArray},$globals.TThenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray"],
source: "then: aBlockOrArray\x0a\x22Accepts a block or array of blocks.\x0aEach of blocks in the array or the singleton one is\x0aused in .then call to a promise, to accept a result\x0aand transform it to the result for the next one.\x0aIn case a block has more than one argument\x0aand result is an array, first n-1 elements of the array\x0aare put into additional arguments beyond the first.\x0aThe first argument always contains the result as-is.\x22\x0a<inlineJS: '\x0avar array = Array.isArray(aBlockOrArray) ? aBlockOrArray : [aBlockOrArray];\x0areturn array.reduce(function (soFar, aBlock) {\x0a    return soFar.then(typeof aBlock === \x22function\x22 && aBlock.length > 1 ?\x0a        function (result) {return $core.seamless(function () {\x0a            if (Array.isArray(result)) {\x0a                return aBlock._valueWithPossibleArguments_([result].concat(result.slice(0, aBlock.length-1)));\x0a            } else {\x0a                return aBlock._value_(result);\x0a            }\x0a        })} :\x0a        function (result) {return $core.seamless(function () {\x0a            return aBlock._value_(result);\x0a        })}\x0a    );\x0a}, self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "then:catch:",
protocol: "promises",
fn: function (aBlockOrArray,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._then_(aBlockOrArray))._catch_(anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:catch:",{aBlockOrArray:aBlockOrArray,anotherBlock:anotherBlock},$globals.TThenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray", "anotherBlock"],
source: "then: aBlockOrArray catch: anotherBlock\x0a\x09^ (self then: aBlockOrArray) catch: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["catch:", "then:"]
}),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "then:on:do:",
protocol: "promises",
fn: function (aBlockOrArray,aClass,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._then_(aBlockOrArray))._on_do_(aClass,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:on:do:",{aBlockOrArray:aBlockOrArray,aClass:aClass,aBlock:aBlock},$globals.TThenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray", "aClass", "aBlock"],
source: "then: aBlockOrArray on: aClass do: aBlock\x0a\x09^ (self then: aBlockOrArray) on: aClass do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:do:", "then:"]
}),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "then:on:do:catch:",
protocol: "promises",
fn: function (aBlockOrArray,aClass,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._then_(aBlockOrArray))._on_do_(aClass,aBlock))._catch_(anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:on:do:catch:",{aBlockOrArray:aBlockOrArray,aClass:aClass,aBlock:aBlock,anotherBlock:anotherBlock},$globals.TThenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray", "aClass", "aBlock", "anotherBlock"],
source: "then: aBlockOrArray on: aClass do: aBlock catch: anotherBlock\x0a\x09^ ((self then: aBlockOrArray) on: aClass do: aBlock) catch: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["catch:", "on:do:", "then:"]
}),
$globals.TThenable);

$core.setTraitComposition([{trait: $globals.TThenable}], $globals.Promise);

});