define(["amber/boot", "require", "amber/core/Kernel-Objects", "amber/core/SUnit"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Tests");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("AnnouncementSubscriptionTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testAddExtensionMethod",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddExtensionMethod\x0a\x09| method dirty |\x0a\x09dirty := self class package isDirty.\x0a\x09self class package beClean.\x0a\x09method := self class compile: 'doNothing' protocol: '**not-a-package'.\x0a\x09self deny: self class package isDirty.\x0a\x09\x0a\x09self class removeCompiledMethod: method.\x0a\x09dirty ifTrue: [ self class package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isDirty", "package", "class", "beClean", "compile:protocol:", "deny:", "removeCompiledMethod:", "ifTrue:", "beDirty"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var method,dirty;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$8,$7,$6,$9,$10;
$2=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
dirty=$recv($1)._isDirty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isDirty"]=1;
//>>excludeEnd("ctx");
$4=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=2;
//>>excludeEnd("ctx");
$recv($3)._beClean();
$5=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=3;
//>>excludeEnd("ctx");
method=$recv($5)._compile_protocol_("doNothing","**not-a-package");
$8=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=4;
//>>excludeEnd("ctx");
$7=$recv($8)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=3;
//>>excludeEnd("ctx");
$6=$recv($7)._isDirty();
$self._deny_($6);
$9=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=5;
//>>excludeEnd("ctx");
$recv($9)._removeCompiledMethod_(method);
$10=dirty;
if($core.assert($10)){
$recv($recv($self._class())._package())._beDirty();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddExtensionMethod",{method:method,dirty:dirty})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncementSubscriptionTest);

$core.addMethod(
$core.method({
selector: "testHandlesAnnouncement",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testHandlesAnnouncement\x0a\x09| subscription announcementClass1 announcementClass2 classBuilder |\x0a\x09\x0a\x09classBuilder := ClassBuilder new.\x0a\x09announcementClass1 := classBuilder basicAddSubclassOf: SystemAnnouncement named: 'TestAnnouncement1' instanceVariableNames: #() package: 'Kernel-Tests'.\x0a\x09\x0a\x09subscription := AnnouncementSubscription new announcementClass: SystemAnnouncement.\x0a\x09\x22Test whether the same class triggers the announcement\x22\x0a\x09self assert: (subscription handlesAnnouncement: SystemAnnouncement new) equals: true.\x0a\x09\x22Test whether a subclass triggers the announcement\x22\x0a\x09self assert: (subscription handlesAnnouncement: announcementClass1 new) equals: true.\x0a\x09\x22Test whether an unrelated class does not trigger the announcement\x22\x0a\x09self assert: (subscription handlesAnnouncement: Object new) equals: false.\x0a\x09\x0a\x09classBuilder basicRemoveClass: announcementClass1.",
referencedClasses: ["ClassBuilder", "SystemAnnouncement", "AnnouncementSubscription", "Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "basicAddSubclassOf:named:instanceVariableNames:package:", "announcementClass:", "assert:equals:", "handlesAnnouncement:", "basicRemoveClass:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var subscription,announcementClass1,announcementClass2,classBuilder;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$6,$7,$5;
classBuilder=$recv($globals.ClassBuilder)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
announcementClass1=$recv(classBuilder)._basicAddSubclassOf_named_instanceVariableNames_package_($globals.SystemAnnouncement,"TestAnnouncement1",[],"Kernel-Tests");
$1=$recv($globals.AnnouncementSubscription)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
subscription=$recv($1)._announcementClass_($globals.SystemAnnouncement);
$3=subscription;
$4=$recv($globals.SystemAnnouncement)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$2=$recv($3)._handlesAnnouncement_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["handlesAnnouncement:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($2,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=subscription;
$7=$recv(announcementClass1)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$5=$recv($6)._handlesAnnouncement_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["handlesAnnouncement:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($5,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(subscription)._handlesAnnouncement_($recv($globals.Object)._new()),false);
$recv(classBuilder)._basicRemoveClass_(announcementClass1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testHandlesAnnouncement",{subscription:subscription,announcementClass1:announcementClass1,announcementClass2:announcementClass2,classBuilder:classBuilder})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncementSubscriptionTest);



$core.addClass("AnnouncerTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testOnDo",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOnDo\x0a\x09| counter announcer |\x0a\x09\x0a\x09counter := 0.\x0a\x09announcer := Announcer new.\x0a\x09announcer on: SystemAnnouncement do: [ counter := counter + 1 ].\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 2.",
referencedClasses: ["Announcer", "SystemAnnouncement"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "on:do:", "+", "announce:", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var counter,announcer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
counter=(0);
announcer=$recv($globals.Announcer)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(announcer)._on_do_($globals.SystemAnnouncement,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
counter=$recv(counter).__plus((1));
return counter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=announcer;
$2=$recv($globals.SystemAnnouncement)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($1)._announce_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_(counter,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(announcer)._announce_($recv($globals.SystemAnnouncement)._new());
$self._assert_equals_(counter,(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOnDo",{counter:counter,announcer:announcer})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncerTest);

$core.addMethod(
$core.method({
selector: "testOnDoFor",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOnDoFor\x0a\x09| counter announcer |\x0a\x09\x0a\x09counter := 0.\x0a\x09announcer := Announcer new.\x0a\x09announcer on: SystemAnnouncement do: [ counter := counter + 1 ] for: self.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 2.\x0a\x09\x0a\x09announcer unsubscribe: self.\x0a\x09\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 2.",
referencedClasses: ["Announcer", "SystemAnnouncement"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "on:do:for:", "+", "announce:", "assert:equals:", "unsubscribe:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var counter,announcer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
counter=(0);
announcer=$recv($globals.Announcer)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(announcer)._on_do_for_($globals.SystemAnnouncement,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
counter=$recv(counter).__plus((1));
return counter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),self);
$1=announcer;
$2=$recv($globals.SystemAnnouncement)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($1)._announce_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_(counter,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=announcer;
$4=$recv($globals.SystemAnnouncement)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$recv($3)._announce_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_(counter,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(announcer)._unsubscribe_(self);
$recv(announcer)._announce_($recv($globals.SystemAnnouncement)._new());
$self._assert_equals_(counter,(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOnDoFor",{counter:counter,announcer:announcer})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncerTest);

$core.addMethod(
$core.method({
selector: "testOnDoOnce",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOnDoOnce\x0a\x09| counter announcer |\x0a\x09\x0a\x09counter := 0.\x0a\x09announcer := Announcer new.\x0a\x09announcer on: SystemAnnouncement doOnce: [ counter := counter + 1 ].\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.",
referencedClasses: ["Announcer", "SystemAnnouncement"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "on:doOnce:", "+", "announce:", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var counter,announcer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
counter=(0);
announcer=$recv($globals.Announcer)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(announcer)._on_doOnce_($globals.SystemAnnouncement,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
counter=$recv(counter).__plus((1));
return counter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=announcer;
$2=$recv($globals.SystemAnnouncement)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($1)._announce_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_(counter,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(announcer)._announce_($recv($globals.SystemAnnouncement)._new());
$self._assert_equals_(counter,(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOnDoOnce",{counter:counter,announcer:announcer})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncerTest);



$core.addClass("BlockClosureTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "localReturnOnDoCatch",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "localReturnOnDoCatch\x0a    [ ^ 2 ] on: Error do: [].\x0a    ^ 3",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$recv((function(){
throw $early=[(2)];

}))._on_do_($globals.Error,(function(){

}));
return (3);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localReturnOnDoCatch",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "localReturnOnDoMiss",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "localReturnOnDoMiss\x0a    [ ^ 2 ] on: Class do: [].\x0a    ^ 3",
referencedClasses: ["Class"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$recv((function(){
throw $early=[(2)];

}))._on_do_($globals.Class,(function(){

}));
return (3);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localReturnOnDoMiss",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testCanClearInterval",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCanClearInterval\x0a\x09self shouldnt: [ ([ Error new signal ] valueWithInterval: 0) clearInterval ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldnt:raise:", "clearInterval", "valueWithInterval:", "signal", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Error)._new())._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._valueWithInterval_((0)))._clearInterval();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCanClearInterval",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testCanClearTimeout",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCanClearTimeout\x0a\x09self shouldnt: [ ([ Error new signal ] valueWithTimeout: 0) clearTimeout ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldnt:raise:", "clearTimeout", "valueWithTimeout:", "signal", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Error)._new())._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((0)))._clearTimeout();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCanClearTimeout",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testCompiledSource",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCompiledSource\x0a\x09self assert: ([ 1+1 ] compiledSource includesSubString: 'function')",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "includesSubString:", "compiledSource", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._compiledSource())._includesSubString_("function"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCompiledSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testCurrySelf",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCurrySelf\x0a\x09| curriedMethod array |\x0a\x09curriedMethod := [ :selfarg :x | selfarg at: x ] currySelf asCompiledMethod: 'foo:'.\x0a\x09curriedMethod protocol: '**test helper'.\x0a\x09array := #(3 1 4).\x0a\x09Array addCompiledMethod: curriedMethod.\x0a\x09[ self assert: (array foo: 2) equals: 1 ]\x0a\x09ensure: [ Array removeCompiledMethod: curriedMethod ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asCompiledMethod:", "currySelf", "at:", "protocol:", "addCompiledMethod:", "ensure:", "assert:equals:", "foo:", "removeCompiledMethod:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var curriedMethod,array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
curriedMethod=$recv($recv((function(selfarg,x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(selfarg)._at_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({selfarg:selfarg,x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}))._currySelf())._asCompiledMethod_("foo:");
$recv(curriedMethod)._protocol_("**test helper");
array=[(3), (1), (4)];
$recv($globals.Array)._addCompiledMethod_(curriedMethod);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_equals_($recv(array)._foo_((2)),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Array)._removeCompiledMethod_(curriedMethod);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCurrySelf",{curriedMethod:curriedMethod,array:array})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testEnsure",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEnsure\x0a\x09self assert: ([ 3 ] ensure: [ 4 ]) equals: 3",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "ensure:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv((function(){
return (3);

}))._ensure_((function(){
return (4);

})),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEnsure",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testEnsureRaises",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEnsureRaises\x0a\x09self should: [ [Error new signal ] ensure: [ true ]] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "ensure:", "signal", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Error)._new())._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEnsureRaises",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testExceptionSemantics",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testExceptionSemantics\x0a\x09\x22See https://lolg.it/amber/amber/issues/314\x22\x0a\x09self timeout: 100.\x0a\x09\x0a\x09(self async: [\x0a\x09\x09[\x0a\x09\x09\x09self assert: true.\x0a\x09\x09\x09Error signal.\x0a\x09\x09\x09\x22The following should *not* be run\x22\x0a\x09\x09\x09self deny: true.\x0a\x09\x09\x09self finished.\x0a\x09\x09] on: Error do: [ :ex | self finished ]\x0a\x09]) valueWithTimeout: 0",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "valueWithTimeout:", "async:", "on:do:", "assert:", "signal", "deny:", "finished"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._timeout_((100));
$recv($self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$self._assert_(true);
$recv($globals.Error)._signal();
$self._deny_(true);
return $self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["finished"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testExceptionSemantics",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testLocalReturnOnDoCatch",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLocalReturnOnDoCatch\x0a\x09self assert: self localReturnOnDoCatch equals: 2",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "localReturnOnDoCatch"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($self._localReturnOnDoCatch(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLocalReturnOnDoCatch",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testLocalReturnOnDoMiss",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLocalReturnOnDoMiss\x0a\x09self assert: self localReturnOnDoMiss equals: 2",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "localReturnOnDoMiss"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($self._localReturnOnDoMiss(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLocalReturnOnDoMiss",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testNewWithValues",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNewWithValues\x0a<inlineJS: '\x0a\x09function TestConstructor(arg1, arg2, arg3) {}\x0a\x09TestConstructor.prototype.name = \x22theTestPrototype\x22;\x0a\x0a\x09var wrappedConstructor = $recv(TestConstructor);\x0a\x09var result = wrappedConstructor._newWithValues_([1, 2, 3]);\x0a\x09$self._assert_(result instanceof TestConstructor);\x0a\x09$self._assert_equals_(result.name, \x22theTestPrototype\x22);\x0a\x0a\x09/* newWithValues: cannot help if the argument list is wrong, and should warn that a mistake was made. */\x0a\x09$self._should_raise_(function () {wrappedConstructor._newWithValues_(\x22single argument\x22);}, $globals.Error);\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09function TestConstructor(arg1, arg2, arg3) {}\x0a\x09TestConstructor.prototype.name = \x22theTestPrototype\x22;\x0a\x0a\x09var wrappedConstructor = $recv(TestConstructor);\x0a\x09var result = wrappedConstructor._newWithValues_([1, 2, 3]);\x0a\x09$self._assert_(result instanceof TestConstructor);\x0a\x09$self._assert_equals_(result.name, \x22theTestPrototype\x22);\x0a\x0a\x09/* newWithValues: cannot help if the argument list is wrong, and should warn that a mistake was made. */\x0a\x09$self._should_raise_(function () {wrappedConstructor._newWithValues_(\x22single argument\x22);}, $globals.Error);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	function TestConstructor(arg1, arg2, arg3) {}
	TestConstructor.prototype.name = "theTestPrototype";

	var wrappedConstructor = $recv(TestConstructor);
	var result = wrappedConstructor._newWithValues_([1, 2, 3]);
	$self._assert_(result instanceof TestConstructor);
	$self._assert_equals_(result.name, "theTestPrototype");

	/* newWithValues: cannot help if the argument list is wrong, and should warn that a mistake was made. */
	$self._should_raise_(function () {wrappedConstructor._newWithValues_("single argument");}, $globals.Error);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNewWithValues",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testNumArgs",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNumArgs\x0a\x09self assert: [] numArgs equals: 0.\x0a\x09self assert: [ :a :b | ] numArgs equals: 2",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "numArgs"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv((function(){

}))._numArgs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["numArgs"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv((function(a,b){

}))._numArgs(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNumArgs",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testOnDo",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOnDo\x0a\x09self assert: ([ Error new signal ] on: Error do: [ :ex | true ])",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "on:do:", "signal", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Error)._new())._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(ex){
return true;

})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOnDo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testValue",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValue\x0a\x09self assert: ([ 1+1 ] value) equals: 2.\x0a\x09self assert: ([ :x | x +1 ] value: 2) equals: 3.\x0a\x09self assert: ([ :x :y | x*y ] value: 2 value: 4) equals: 8.\x0a\x0a\x09\x22Arguments are optional in Amber. This isn't ANSI compliant.\x22\x0a\x0a\x09self assert: ([ :a :b :c | 1 ] value) equals: 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "value", "+", "value:", "value:value:", "*"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}))._value_((2)),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv((function(x,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x).__star(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1,3)});
//>>excludeEnd("ctx");
}))._value_value_((2),(4)),(8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($recv((function(a,b,c){
return (1);

}))._value(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testValueWithPossibleArguments",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValueWithPossibleArguments\x0a\x09self assert: ([ 1 ] valueWithPossibleArguments: #(3 4)) equals: 1.\x0a\x09self assert: ([ :a | a + 4 ] valueWithPossibleArguments: #(3 4)) equals: 7.\x0a\x09self assert: ([ :a :b | a + b ] valueWithPossibleArguments: #(3 4 5)) equals: 7.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "valueWithPossibleArguments:", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv((function(){
return (1);

}))._valueWithPossibleArguments_([(3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valueWithPossibleArguments:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv((function(a){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__plus((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithPossibleArguments_([(3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valueWithPossibleArguments:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__plus(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)});
//>>excludeEnd("ctx");
}))._valueWithPossibleArguments_([(3), (4), (5)]),(7));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValueWithPossibleArguments",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testWhileFalse",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWhileFalse\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[ i > 5 ] whileFalse: [ i := i + 1 ].\x0a\x09self assert: i equals: 6.\x0a\x0a\x09i := 0.\x0a\x09[ i := i + 1. i > 5 ] whileFalse.\x0a\x09self assert: i equals: 6",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileFalse:", ">", "+", "assert:equals:", "whileFalse"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
i=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(i).__gt((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_(i,(6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
i=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
return $recv(i).__gt((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._whileFalse();
$self._assert_equals_(i,(6));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWhileFalse",{i:i})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testWhileTrue",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWhileTrue\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[ i < 5 ] whileTrue: [ i := i + 1 ].\x0a\x09self assert: i equals: 5.\x0a\x0a\x09i := 0.\x0a\x09[ i := i + 1. i < 5 ] whileTrue.\x0a\x09self assert: i equals: 5",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileTrue:", "<", "+", "assert:equals:", "whileTrue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
i=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(i).__lt((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_(i,(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
i=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
return $recv(i).__lt((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._whileTrue();
$self._assert_equals_(i,(5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWhileTrue",{i:i})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosureTest);



$core.addClass("BooleanTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testEquality",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 = false.\x0a\x09self deny: false = 0.\x0a\x09self deny: '' = false.\x0a\x09self deny: false = ''.\x0a\x0a\x09self assert: (true = true).\x0a\x09self deny: false = true.\x0a\x09self deny: true = false.\x0a\x09self assert: (false = false).\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: (true yourself = true).\x0a\x09self assert: (true yourself = true yourself)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deny:", "=", "assert:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$10,$9,$12,$11;
$1=(0).__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$2=false.__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$3="".__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
$self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$4=false.__eq("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
$self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=4;
//>>excludeEnd("ctx");
$5=true.__eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
$self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$6=false.__eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=6;
//>>excludeEnd("ctx");
$self._deny_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=5;
//>>excludeEnd("ctx");
$7=true.__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=7;
//>>excludeEnd("ctx");
$self._deny_($7);
$8=false.__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=8;
//>>excludeEnd("ctx");
$self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$10=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=9;
//>>excludeEnd("ctx");
$self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$12=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__eq(true._yourself());
$self._assert_($11);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testIdentity",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentity\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 == false.\x0a\x09self deny: false == 0.\x0a\x09self deny: '' == false.\x0a\x09self deny: false == ''.\x0a\x0a\x09self assert: true == true.\x0a\x09self deny: false == true.\x0a\x09self deny: true == false.\x0a\x09self assert: false == false.\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: true yourself == true.\x0a\x09self assert: true yourself == true yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deny:", "==", "assert:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$10,$9,$12,$11;
$1=(0).__eq_eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
$self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$2=false.__eq_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
$self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$3="".__eq_eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=3;
//>>excludeEnd("ctx");
$self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$4=false.__eq_eq("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=4;
//>>excludeEnd("ctx");
$self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=4;
//>>excludeEnd("ctx");
$5=true.__eq_eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=5;
//>>excludeEnd("ctx");
$self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$6=false.__eq_eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=6;
//>>excludeEnd("ctx");
$self._deny_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=5;
//>>excludeEnd("ctx");
$7=true.__eq_eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=7;
//>>excludeEnd("ctx");
$self._deny_($7);
$8=false.__eq_eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=8;
//>>excludeEnd("ctx");
$self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$10=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__eq_eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=9;
//>>excludeEnd("ctx");
$self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$12=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__eq_eq(true._yourself());
$self._assert_($11);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentity",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testIfTrueIfFalse",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIfTrueIfFalse\x0a\x0a\x09self assert: (true ifTrue: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x09self assert: (true ifFalse: [ 'alternative block' ]) equals: nil.\x0a\x0a\x09self assert: (false ifTrue: [ 'alternative block' ]) equals: nil.\x0a\x09self assert: (false ifFalse: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (false ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block2'.\x0a\x09self assert: (false ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (true ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x09self assert: (true ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block2'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
if($core.assert(true)){
$1="alternative block";
}
$self._assert_equals_($1,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
if(!$core.assert(true)){
$2="alternative block";
}
$self._assert_equals_($2,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
if($core.assert(false)){
$3="alternative block";
}
$self._assert_equals_($3,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
if(!$core.assert(false)){
$4="alternative block";
}
$self._assert_equals_($4,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
if($core.assert(false)){
$5="alternative block";
} else {
$5="alternative block2";
}
$self._assert_equals_($5,"alternative block2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
if($core.assert(false)){
$6="alternative block2";
} else {
$6="alternative block";
}
$self._assert_equals_($6,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
if($core.assert(true)){
$7="alternative block";
} else {
$7="alternative block2";
}
$self._assert_equals_($7,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
if($core.assert(true)){
$8="alternative block2";
} else {
$8="alternative block";
}
$self._assert_equals_($8,"alternative block2");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalse",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testIfTrueIfFalseWithBoxing",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIfTrueIfFalseWithBoxing\x0a\x0a\x09self assert: (true yourself ifTrue: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x09self assert: (true yourself ifFalse: [ 'alternative block' ]) equals: nil.\x0a\x0a\x09self assert: (false yourself ifTrue: [ 'alternative block' ]) equals: nil.\x0a\x09self assert: (false yourself ifFalse: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (false yourself ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block2'.\x0a\x09self assert: (false yourself ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (true yourself ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x09self assert: (true yourself ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block2'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "ifTrue:", "yourself", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9,$12,$11,$14,$13,$16,$15;
$2=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$1="alternative block";
}
$self._assert_equals_($1,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
if(!$core.assert($4)){
$3="alternative block";
}
$self._assert_equals_($3,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$6=false._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
if($core.assert($6)){
$5="alternative block";
}
$self._assert_equals_($5,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$8=false._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=4;
//>>excludeEnd("ctx");
if(!$core.assert($8)){
$7="alternative block";
}
$self._assert_equals_($7,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$10=false._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=5;
//>>excludeEnd("ctx");
if($core.assert($10)){
$9="alternative block";
} else {
$9="alternative block2";
}
$self._assert_equals_($9,"alternative block2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$12=false._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=6;
//>>excludeEnd("ctx");
if($core.assert($12)){
$11="alternative block2";
} else {
$11="alternative block";
}
$self._assert_equals_($11,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$14=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=7;
//>>excludeEnd("ctx");
if($core.assert($14)){
$13="alternative block";
} else {
$13="alternative block2";
}
$self._assert_equals_($13,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$16=true._yourself();
if($core.assert($16)){
$15="alternative block2";
} else {
$15="alternative block";
}
$self._assert_equals_($15,"alternative block2");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalseWithBoxing",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testLogic",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLogic\x0a\x09\x22Trivial logic table\x22\x0a\x09self assert: (true & true);\x0a\x09\x09deny: (true & false);\x0a\x09\x09deny: (false & true);\x0a\x09\x09deny: (false & false).\x0a\x09self assert: (true | true);\x0a\x09\x09assert: (true | false);\x0a\x09\x09assert: (false | true);\x0a\x09\x09deny: (false | false).\x0a\x09\x22Checking that expressions work fine too\x22\x0a\x09self assert: (true & (1 > 0));\x0a\x09\x09deny: ((1 > 0) & false);\x0a\x09\x09deny: ((1 > 0) & (1 > 2)).\x0a\x09self assert: (false | (1 > 0));\x0a\x09\x09assert: ((1 > 0) | false);\x0a\x09\x09assert: ((1 > 0) | (1 > 2))",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "&", "deny:", "|", ">"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$10,$9,$12,$11,$14,$15,$13,$17,$16,$19,$18,$21,$20;
$1=true.__and(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=true.__and(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=2;
//>>excludeEnd("ctx");
$self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$3=false.__and(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=3;
//>>excludeEnd("ctx");
$self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$4=false.__and(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=4;
//>>excludeEnd("ctx");
$self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$5=true.__or(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=1;
//>>excludeEnd("ctx");
$self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=true.__or(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=2;
//>>excludeEnd("ctx");
$self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$7=false.__or(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=3;
//>>excludeEnd("ctx");
$self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$8=false.__or(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=4;
//>>excludeEnd("ctx");
$self._deny_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=4;
//>>excludeEnd("ctx");
$10=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
$9=true.__and($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=5;
//>>excludeEnd("ctx");
$self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$12=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__and(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=6;
//>>excludeEnd("ctx");
$self._deny_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=5;
//>>excludeEnd("ctx");
$14=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=3;
//>>excludeEnd("ctx");
$15=(1).__gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=4;
//>>excludeEnd("ctx");
$13=$recv($14).__and($15);
$self._deny_($13);
$17=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=5;
//>>excludeEnd("ctx");
$16=false.__or($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=5;
//>>excludeEnd("ctx");
$self._assert_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$19=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=6;
//>>excludeEnd("ctx");
$18=$recv($19).__or(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=6;
//>>excludeEnd("ctx");
$self._assert_($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$21=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=7;
//>>excludeEnd("ctx");
$20=$recv($21).__or((1).__gt((2)));
$self._assert_($20);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLogic",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testLogicKeywords",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLogicKeywords\x0a\x09\x22Trivial logic table\x22\x0a\x09self\x0a\x09\x09assert: (true and: [ true ]);\x0a\x09\x09deny: (true and: [ false ]);\x0a\x09\x09deny: (false and: [ true ]);\x0a\x09\x09deny: (false and: [ false ]).\x0a\x09self\x0a\x09\x09assert: (true or: [ true ]);\x0a\x09\x09assert: (true or: [ false ]);\x0a\x09\x09assert: (false or: [ true ]);\x0a\x09\x09deny: (false or: [ false ]).\x0a\x09\x09\x0a\x09\x22Checking that expressions work fine too\x22\x0a\x09self\x0a\x09\x09assert: (true and: [ 1 > 0 ]);\x0a\x09\x09deny: ((1 > 0) and: [ false ]);\x0a\x09\x09deny: ((1 > 0) and: [ 1 > 2 ]).\x0a\x09self\x0a\x09\x09assert: (false or: [ 1 > 0 ]);\x0a\x09\x09assert: ((1 > 0) or: [ false ]);\x0a\x09\x09assert: ((1 > 0) or: [ 1 > 2 ])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "and:", "deny:", "or:", ">"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$11,$10,$13,$12,$14,$16,$15,$18,$17;
$1=true._and_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=true._and_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=2;
//>>excludeEnd("ctx");
$self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$3=false._and_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=3;
//>>excludeEnd("ctx");
$self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$4=false._and_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=4;
//>>excludeEnd("ctx");
$self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$5=true._or_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
$self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=true._or_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=2;
//>>excludeEnd("ctx");
$self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$7=false._or_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=3;
//>>excludeEnd("ctx");
$self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$8=false._or_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=4;
//>>excludeEnd("ctx");
$self._deny_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=4;
//>>excludeEnd("ctx");
$9=true._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=5;
//>>excludeEnd("ctx");
$self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$11=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._and_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=6;
//>>excludeEnd("ctx");
$self._deny_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=5;
//>>excludeEnd("ctx");
$13=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=3;
//>>excludeEnd("ctx");
$12=$recv($13)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,11)});
//>>excludeEnd("ctx");
}));
$self._deny_($12);
$14=false._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,12)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=5;
//>>excludeEnd("ctx");
$self._assert_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$16=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=6;
//>>excludeEnd("ctx");
$15=$recv($16)._or_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=6;
//>>excludeEnd("ctx");
$self._assert_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$18=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=7;
//>>excludeEnd("ctx");
$17=$recv($18)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,14)});
//>>excludeEnd("ctx");
}));
$self._assert_($17);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLogicKeywords",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testNonBooleanError",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNonBooleanError\x0a\x09self should: [ '' ifTrue: [] ifFalse: [] ] raise: NonBooleanReceiver",
referencedClasses: ["NonBooleanReceiver"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "ifTrue:ifFalse:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert("")){
return nil;
} else {
return nil;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.NonBooleanReceiver);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNonBooleanError",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BooleanTest);



$core.addClass("ClassBuilderTest", $globals.TestCase, ["builder", "theClass"], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09builder := ClassBuilder new",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.builder=$recv($globals.ClassBuilder)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09self tearDownTheClass.\x0a\x09theClass ifNotNil: [\x0a\x09\x09self deny: (theClass package classes includes: theClass).\x0a\x09\x09self assert: (Smalltalk globals at: theClass name) equals: nil ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tearDownTheClass", "ifNotNil:", "deny:", "includes:", "classes", "package", "assert:equals:", "at:", "globals", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$self._tearDownTheClass();
$1=$self.theClass;
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
$self._deny_($recv($recv($recv($self.theClass)._package())._classes())._includes_($self.theClass));
$self._assert_equals_($recv($recv($globals.Smalltalk)._globals())._at_($recv($self.theClass)._name()),nil);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tearDown",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testAddTrait",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddTrait\x0a\x09theClass := builder addTraitNamed: 'ObjectMock2' package: 'Kernel-Tests'.\x0a\x09self assert: theClass name equals: 'ObjectMock2'.\x0a\x09self assert: (theClass package classes occurrencesOf: theClass) equals: 1.\x0a\x09self assert: theClass package equals: ObjectMock package",
referencedClasses: ["ObjectMock"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addTraitNamed:package:", "assert:equals:", "name", "occurrencesOf:", "classes", "package"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
$self.theClass=$recv($self.builder)._addTraitNamed_package_("ObjectMock2","Kernel-Tests");
$self._assert_equals_($recv($self.theClass)._name(),"ObjectMock2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=$recv($self.theClass)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._classes();
$1=$recv($2)._occurrencesOf_($self.theClass);
$self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$4=$recv($self.theClass)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($4,$recv($globals.ObjectMock)._package());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddTrait",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testClassCopy",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassCopy\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09self assert: theClass name equals: 'ObjectMock2'.\x0a\x09self assert: theClass isClassCopyOf: ObjectMock",
referencedClasses: ["ObjectMock"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "assert:equals:", "name", "assert:isClassCopyOf:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.theClass=$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
$self._assert_equals_($recv($self.theClass)._name(),"ObjectMock2");
$self._assert_isClassCopyOf_($self.theClass,$globals.ObjectMock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testClassMigration",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassMigration\x0a\x09| instance oldClass |\x0a\x09\x0a\x09oldClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09instance := (Smalltalk globals at: 'ObjectMock2') new.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09theClass := ObjectMock subclass: #ObjectMock2\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self deny: oldClass == ObjectMock2.\x0a\x09\x0a\x09self assert: ObjectMock2 superclass == ObjectMock.\x0a\x09self assert: ObjectMock2 instanceVariableNames isEmpty.\x0a\x09self assert: ObjectMock2 selectors equals: oldClass selectors.\x0a\x09self assert: ObjectMock2 comment equals: oldClass comment.\x0a\x09self assert: ObjectMock2 package name equals: 'Kernel-Tests'.\x0a\x09self assert: (ObjectMock2 package classes includes: ObjectMock2).\x0a\x09\x0a\x09self deny: instance class == ObjectMock2.\x0a\x09\x0a\x09self assert: (Smalltalk globals at: instance class name) isNil",
referencedClasses: ["ObjectMock", "Smalltalk", "ObjectMock2"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "new", "at:", "globals", "subclass:instanceVariableNames:package:", "deny:", "==", "assert:", "superclass", "isEmpty", "instanceVariableNames", "assert:equals:", "selectors", "comment", "name", "package", "includes:", "classes", "class", "isNil"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var instance,oldClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5,$6,$8,$7,$10,$9;
oldClass=$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
$2=$recv($globals.Smalltalk)._globals();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["globals"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_("ObjectMock2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
instance=$recv($1)._new();
$self.theClass=$recv($globals.ObjectMock)._subclass_instanceVariableNames_package_("ObjectMock2","","Kernel-Tests");
$3=$recv(oldClass).__eq_eq($globals.ObjectMock2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
$self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$4=$recv($recv($globals.ObjectMock2)._superclass()).__eq_eq($globals.ObjectMock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
$self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$self._assert_($recv($recv($globals.ObjectMock2)._instanceVariableNames())._isEmpty());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$5=$recv($globals.ObjectMock2)._selectors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectors"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$recv(oldClass)._selectors());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=$recv($globals.ObjectMock2)._comment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["comment"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($6,$recv(oldClass)._comment());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$8=$recv($globals.ObjectMock2)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($7,"Kernel-Tests");
$self._assert_($recv($recv($recv($globals.ObjectMock2)._package())._classes())._includes_($globals.ObjectMock2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$10=$recv(instance)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__eq_eq($globals.ObjectMock2);
$self._deny_($9);
$self._assert_($recv($recv($recv($globals.Smalltalk)._globals())._at_($recv($recv(instance)._class())._name()))._isNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassMigration",{instance:instance,oldClass:oldClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testClassMigrationWithClassInstanceVariables",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassMigrationWithClassInstanceVariables\x0a\x09\x0a\x09builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09ObjectMock2 class instanceVariableNames: '    foo  bar       '.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09theClass := ObjectMock subclass: #ObjectMock2\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self assert: ObjectMock2 class instanceVariableNames equals: #('foo' 'bar')",
referencedClasses: ["ObjectMock", "ObjectMock2"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "instanceVariableNames:", "class", "subclass:instanceVariableNames:package:", "assert:equals:", "instanceVariableNames"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
$1=$recv($globals.ObjectMock2)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._instanceVariableNames_("    foo  bar       ");
$self.theClass=$recv($globals.ObjectMock)._subclass_instanceVariableNames_package_("ObjectMock2","","Kernel-Tests");
$self._assert_equals_($recv($recv($globals.ObjectMock2)._class())._instanceVariableNames(),["foo", "bar"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithClassInstanceVariables",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testClassMigrationWithSubclasses",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassMigrationWithSubclasses\x0a\x09\x0a\x09builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09ObjectMock2 subclass: 'ObjectMock3' instanceVariableNames: '' package: 'Kernel-Tests'.\x0a\x09ObjectMock3 subclass: 'ObjectMock4' instanceVariableNames: '' package: 'Kernel-Tests'.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09theClass := ObjectMock subclass: #ObjectMock2\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self assert: ObjectMock subclasses equals: {ObjectMock2}.\x0a\x09self assert: ObjectMock2 subclasses equals: {ObjectMock3}.\x0a\x09self assert: ObjectMock3 subclasses equals: {ObjectMock4}",
referencedClasses: ["ObjectMock", "ObjectMock2", "ObjectMock3", "ObjectMock4"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "subclass:instanceVariableNames:package:", "assert:equals:", "subclasses"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
$recv($globals.ObjectMock2)._subclass_instanceVariableNames_package_("ObjectMock3","","Kernel-Tests");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclass:instanceVariableNames:package:"]=1;
//>>excludeEnd("ctx");
$recv($globals.ObjectMock3)._subclass_instanceVariableNames_package_("ObjectMock4","","Kernel-Tests");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclass:instanceVariableNames:package:"]=2;
//>>excludeEnd("ctx");
$self.theClass=$recv($globals.ObjectMock)._subclass_instanceVariableNames_package_("ObjectMock2","","Kernel-Tests");
$1=$recv($globals.ObjectMock)._subclasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclasses"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,[$globals.ObjectMock2]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.ObjectMock2)._subclasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclasses"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,[$globals.ObjectMock3]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($globals.ObjectMock3)._subclasses(),[$globals.ObjectMock4]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithSubclasses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testSubclass",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSubclass\x0a\x09theClass := builder addSubclassOf: ObjectMock named: 'ObjectMock2' instanceVariableNames: #(foo bar) package: 'Kernel-Tests'.\x0a\x09self assert: theClass superclass equals: ObjectMock.\x0a\x09self assert: theClass instanceVariableNames equals: #(foo bar).\x0a\x09self assert: theClass name equals: 'ObjectMock2'.\x0a\x09self assert: (theClass package classes occurrencesOf: theClass) equals: 1.\x0a\x09self assert: theClass package equals: ObjectMock package.\x0a\x09self assert: theClass methodDictionary keys size equals: 0",
referencedClasses: ["ObjectMock"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "assert:equals:", "superclass", "instanceVariableNames", "name", "occurrencesOf:", "classes", "package", "size", "keys", "methodDictionary"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
$self.theClass=$recv($self.builder)._addSubclassOf_named_instanceVariableNames_package_($globals.ObjectMock,"ObjectMock2",["foo", "bar"],"Kernel-Tests");
$self._assert_equals_($recv($self.theClass)._superclass(),$globals.ObjectMock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self.theClass)._instanceVariableNames(),["foo", "bar"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self.theClass)._name(),"ObjectMock2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$3=$recv($self.theClass)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._classes();
$1=$recv($2)._occurrencesOf_($self.theClass);
$self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$4=$recv($self.theClass)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($4,$recv($globals.ObjectMock)._package());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($recv($recv($self.theClass)._methodDictionary())._keys())._size(),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSubclass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.theClass;

}; }),
$globals.ClassBuilderTest);



$core.addClass("ClassTest", $globals.TestCase, ["builder", "theClass"], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "augmentMethodInstantiationOf:withAttachments:",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aHashedCollection"],
source: "augmentMethodInstantiationOf: aMethod withAttachments: aHashedCollection\x0a\x09| plain |\x0a\x09plain := aMethod instantiateFn.\x0a\x09aMethod instantiateFn: [ :arg |\x0a\x09\x09(plain value: arg)\x0a\x09\x09\x09basicAt: 'a$atx' put: aHashedCollection;\x0a\x09\x09\x09yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["instantiateFn", "instantiateFn:", "basicAt:put:", "value:", "yourself"]
}, function ($methodClass){ return function (aMethod,aHashedCollection){
var self=this,$self=this;
var plain;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
plain=$recv(aMethod)._instantiateFn();
$recv(aMethod)._instantiateFn_((function(arg){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(plain)._value_(arg);
$recv($1)._basicAt_put_("a$atx",aHashedCollection);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({arg:arg},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentMethodInstantiationOf:withAttachments:",{aMethod:aMethod,aHashedCollection:aHashedCollection,plain:plain})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "jsConstructor",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsConstructor\x0a\x09<inlineJS: '\x0a\x09\x09function Foo(){}\x0a\x09\x09Foo.prototype.valueOf = function () {return 4;};\x0a\x09\x09return Foo;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09function Foo(){}\x0a\x09\x09Foo.prototype.valueOf = function () {return 4;};\x0a\x09\x09return Foo;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		function Foo(){}
		Foo.prototype.valueOf = function () {return 4;};
		return Foo;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsConstructor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "jsConstructorWithAction",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsConstructorWithAction\x0a\x09<inlineJS: '\x0a\x09\x09function Foo(aFoo){this.foo = aFoo;}\x0a\x09\x09return Foo;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09function Foo(aFoo){this.foo = aFoo;}\x0a\x09\x09return Foo;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		function Foo(aFoo){this.foo = aFoo;}
		return Foo;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsConstructorWithAction",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09builder := ClassBuilder new",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.builder=$recv($globals.ClassBuilder)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "testAllSubclasses",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAllSubclasses\x0a\x09| subclasses index |\x0a\x0a\x09subclasses := Object subclasses.\x0a\x09index := 1.\x0a\x09[ index > subclasses size ]\x0a\x09\x09whileFalse: [ subclasses addAll: (subclasses at: index) subclasses.\x0a\x09\x09\x09index := index + 1 ].\x0a\x0a\x09self assert: Object allSubclasses equals: subclasses",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclasses", "whileFalse:", ">", "size", "addAll:", "at:", "+", "assert:equals:", "allSubclasses"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var subclasses,index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
subclasses=$recv($globals.Object)._subclasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclasses"]=1;
//>>excludeEnd("ctx");
index=(1);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(index).__gt($recv(subclasses)._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(subclasses)._addAll_($recv($recv(subclasses)._at_(index))._subclasses());
index=$recv(index).__plus((1));
return index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_($recv($globals.Object)._allSubclasses(),subclasses);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAllSubclasses",{subclasses:subclasses,index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "testAlternateConstructorViaSelector",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAlternateConstructorViaSelector\x0a\x09| instance block |\x0a\x09block := ObjectMock alternateConstructorViaSelector: #foo:.\x0a\x0a\x09instance := block newValue: 4.\x0a\x09self assert: instance class == ObjectMock.\x0a\x09self assert: instance foo equals: 4.\x0a\x09self shouldnt: [ instance foo: 9 ] raise: Error.\x0a\x09self assert: instance foo equals: 9",
referencedClasses: ["ObjectMock", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["alternateConstructorViaSelector:", "newValue:", "assert:", "==", "class", "assert:equals:", "foo", "shouldnt:raise:", "foo:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var instance,block;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
block=$recv($globals.ObjectMock)._alternateConstructorViaSelector_("foo:");
instance=$recv(block)._newValue_((4));
$self._assert_($recv($recv(instance)._class()).__eq_eq($globals.ObjectMock));
$1=$recv(instance)._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["foo"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(instance)._foo_((9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
$self._assert_equals_($recv(instance)._foo(),(9));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAlternateConstructorViaSelector",{instance:instance,block:block})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "testApplySuperConstructor",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testApplySuperConstructor\x0a\x09| instance constructor |\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09constructor := self jsConstructorWithAction.\x0a\x09theClass beJavaScriptSubclassOf: constructor.\x0a\x09Compiler new\x0a\x09\x09install: 'bar: anObject\x0a\x09\x09\x09ObjectMock2\x0a\x09\x09\x09\x09applySuperConstructorOn: self\x0a\x09\x09\x09\x09withArguments: {anObject}'\x0a\x09\x09forClass: theClass\x0a\x09\x09protocol: 'tests'.\x0a\x09\x22testing specific to late-coupled detached root class\x22\x0a\x09instance := (theClass alternateConstructorViaSelector: #bar:) newValue: 7.\x0a\x09self assert: instance class == theClass.\x0a\x09self assert: instance isJavaScriptInstanceOf: constructor.\x0a\x09self assert: instance foo equals: 7",
referencedClasses: ["ObjectMock", "Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "jsConstructorWithAction", "beJavaScriptSubclassOf:", "install:forClass:protocol:", "new", "newValue:", "alternateConstructorViaSelector:", "assert:", "==", "class", "assert:isJavaScriptInstanceOf:", "assert:equals:", "foo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var instance,constructor;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.theClass=$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
constructor=$self._jsConstructorWithAction();
$recv($self.theClass)._beJavaScriptSubclassOf_(constructor);
$recv($recv($globals.Compiler)._new())._install_forClass_protocol_("bar: anObject\x0a\x09\x09\x09ObjectMock2\x0a\x09\x09\x09\x09applySuperConstructorOn: self\x0a\x09\x09\x09\x09withArguments: {anObject}",$self.theClass,"tests");
instance=$recv($recv($self.theClass)._alternateConstructorViaSelector_("bar:"))._newValue_((7));
$self._assert_($recv($recv(instance)._class()).__eq_eq($self.theClass));
$self._assert_isJavaScriptInstanceOf_(instance,constructor);
$self._assert_equals_($recv(instance)._foo(),(7));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testApplySuperConstructor",{instance:instance,constructor:constructor})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "testBeJavaScriptSubclassOf",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBeJavaScriptSubclassOf\x0a\x09| instance constructor |\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09constructor := self jsConstructor.\x0a\x09theClass beJavaScriptSubclassOf: constructor.\x0a\x09self assert: theClass name equals: 'ObjectMock2'.\x0a\x09self assert: theClass isClassCopyOf: ObjectMock.\x0a\x09\x22testing specific to late-coupled detached root class\x22\x0a\x09instance := theClass new.\x0a\x09self assert: instance class == theClass.\x0a\x09self assert: instance isJavaScriptInstanceOf: constructor.\x0a\x09self assert: instance value equals: 4.\x0a\x09self shouldnt: [ instance foo: 9 ] raise: Error.\x0a\x09self assert: instance foo equals: 9",
referencedClasses: ["ObjectMock", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "jsConstructor", "beJavaScriptSubclassOf:", "assert:equals:", "name", "assert:isClassCopyOf:", "new", "assert:", "==", "class", "assert:isJavaScriptInstanceOf:", "value", "shouldnt:raise:", "foo:", "foo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var instance,constructor;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.theClass=$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
constructor=$self._jsConstructor();
$recv($self.theClass)._beJavaScriptSubclassOf_(constructor);
$self._assert_equals_($recv($self.theClass)._name(),"ObjectMock2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_isClassCopyOf_($self.theClass,$globals.ObjectMock);
instance=$recv($self.theClass)._new();
$self._assert_($recv($recv(instance)._class()).__eq_eq($self.theClass));
$self._assert_isJavaScriptInstanceOf_(instance,constructor);
$self._assert_equals_($recv(instance)._value(),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(instance)._foo_((9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
$self._assert_equals_($recv(instance)._foo(),(9));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBeJavaScriptSubclassOf",{instance:instance,constructor:constructor})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "testMetaclassSubclasses",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMetaclassSubclasses\x0a\x09| subclasses |\x0a\x0a\x09subclasses := (Object class instanceClass subclasses \x0a\x09\x09select: [ :each | each isMetaclass not ])\x0a\x09\x09collect: [ :each | each theMetaClass ].\x0a\x0a\x09self assert: Object class subclasses equals: subclasses",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "select:", "subclasses", "instanceClass", "class", "not", "isMetaclass", "theMetaClass", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var subclasses;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv($globals.Object)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._instanceClass();
$2=$recv($3)._subclasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclasses"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._isMetaclass())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
subclasses=$recv($1)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._theMetaClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_($recv($recv($globals.Object)._class())._subclasses(),subclasses);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMetaclassSubclasses",{subclasses:subclasses})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "testMethodAttachmentsAreAdded",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMethodAttachmentsAreAdded\x0a\x09| instance theMethod anObject |\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09anObject := #{#foo -> 'oof'}.\x0a\x09theMethod := Compiler new\x0a\x09\x09compile: 'bar' forClass: ObjectMock2 protocol: '**test'.\x0a\x09self\x0a\x09\x09augmentMethodInstantiationOf: theMethod\x0a\x09\x09withAttachments: #{#a -> 42. #b -> anObject}.\x0a\x09ObjectMock2 addCompiledMethod: theMethod.\x0a\x09self assert: (ObjectMock2 new basicAt: #a) equals: 42.\x0a\x09self assert: (ObjectMock2 new basicAt: #b) equals: anObject",
referencedClasses: ["ObjectMock", "Compiler", "ObjectMock2"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "compile:forClass:protocol:", "new", "augmentMethodInstantiationOf:withAttachments:", "addCompiledMethod:", "assert:equals:", "basicAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var instance,theMethod,anObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$self.theClass=$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
anObject=$globals.HashedCollection._newFromPairs_(["foo","oof"]);
$1=$recv($globals.Compiler)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
theMethod=$recv($1)._compile_forClass_protocol_("bar",$globals.ObjectMock2,"**test");
$self._augmentMethodInstantiationOf_withAttachments_(theMethod,$globals.HashedCollection._newFromPairs_(["a",(42),"b",anObject]));
$recv($globals.ObjectMock2)._addCompiledMethod_(theMethod);
$3=$recv($globals.ObjectMock2)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._basicAt_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(42));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($recv($globals.ObjectMock2)._new())._basicAt_("b"),anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMethodAttachmentsAreAdded",{instance:instance,theMethod:theMethod,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "testMethodAttachmentsAreRemoved",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMethodAttachmentsAreRemoved\x0a\x09| instance theMethod anObject |\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09anObject := #{#foo -> 'oof'}.\x0a\x09theMethod := Compiler new\x0a\x09\x09compile: 'bar' forClass: ObjectMock2 protocol: '**test'.\x0a\x09self\x0a\x09\x09augmentMethodInstantiationOf: theMethod\x0a\x09\x09withAttachments: #{#a -> 42. #b -> anObject}.\x0a\x09ObjectMock2 addCompiledMethod: theMethod.\x0a\x09theMethod := Compiler new\x0a\x09\x09compile: 'bar' forClass: ObjectMock2 protocol: '**test'.\x0a\x09ObjectMock2 addCompiledMethod: theMethod.\x0a\x09self assert: (ObjectMock2 new basicAt: #a) equals: nil.\x0a\x09self assert: (ObjectMock2 new basicAt: #b) equals: nil",
referencedClasses: ["ObjectMock", "Compiler", "ObjectMock2"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "compile:forClass:protocol:", "new", "augmentMethodInstantiationOf:withAttachments:", "addCompiledMethod:", "assert:equals:", "basicAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var instance,theMethod,anObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$self.theClass=$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
anObject=$globals.HashedCollection._newFromPairs_(["foo","oof"]);
$1=$recv($globals.Compiler)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
theMethod=$recv($1)._compile_forClass_protocol_("bar",$globals.ObjectMock2,"**test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["compile:forClass:protocol:"]=1;
//>>excludeEnd("ctx");
$self._augmentMethodInstantiationOf_withAttachments_(theMethod,$globals.HashedCollection._newFromPairs_(["a",(42),"b",anObject]));
$recv($globals.ObjectMock2)._addCompiledMethod_(theMethod);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addCompiledMethod:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.Compiler)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
theMethod=$recv($2)._compile_forClass_protocol_("bar",$globals.ObjectMock2,"**test");
$recv($globals.ObjectMock2)._addCompiledMethod_(theMethod);
$4=$recv($globals.ObjectMock2)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$3=$recv($4)._basicAt_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($3,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($recv($globals.ObjectMock2)._new())._basicAt_("b"),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMethodAttachmentsAreRemoved",{instance:instance,theMethod:theMethod,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "testMethodAttachmentsAreReplaced",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMethodAttachmentsAreReplaced\x0a\x09| instance theMethod anObject |\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09anObject := #{#foo -> 'oof'}.\x0a\x09theMethod := Compiler new\x0a\x09\x09compile: 'bar' forClass: ObjectMock2 protocol: '**test'.\x0a\x09self\x0a\x09\x09augmentMethodInstantiationOf: theMethod\x0a\x09\x09withAttachments: #{#a -> 42. #b -> anObject}.\x0a\x09ObjectMock2 addCompiledMethod: theMethod.\x0a\x09theMethod := Compiler new\x0a\x09\x09compile: 'bar' forClass: ObjectMock2 protocol: '**test'.\x0a\x09self\x0a\x09\x09augmentMethodInstantiationOf: theMethod\x0a\x09\x09withAttachments: #{#a -> 6. #c -> [^9]}.\x0a\x09ObjectMock2 addCompiledMethod: theMethod.\x0a\x09self assert: (ObjectMock2 new basicAt: #a) equals: 6.\x0a\x09self assert: (ObjectMock2 new basicAt: #b) equals: nil.\x0a\x09self assert: (ObjectMock2 new basicPerform: #c) equals: 9",
referencedClasses: ["ObjectMock", "Compiler", "ObjectMock2"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "compile:forClass:protocol:", "new", "augmentMethodInstantiationOf:withAttachments:", "addCompiledMethod:", "assert:equals:", "basicAt:", "basicPerform:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var instance,theMethod,anObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$6,$5;
var $early={};
try {
$self.theClass=$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
anObject=$globals.HashedCollection._newFromPairs_(["foo","oof"]);
$1=$recv($globals.Compiler)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
theMethod=$recv($1)._compile_forClass_protocol_("bar",$globals.ObjectMock2,"**test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["compile:forClass:protocol:"]=1;
//>>excludeEnd("ctx");
$self._augmentMethodInstantiationOf_withAttachments_(theMethod,$globals.HashedCollection._newFromPairs_(["a",(42),"b",anObject]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["augmentMethodInstantiationOf:withAttachments:"]=1;
//>>excludeEnd("ctx");
$recv($globals.ObjectMock2)._addCompiledMethod_(theMethod);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addCompiledMethod:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.Compiler)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
theMethod=$recv($2)._compile_forClass_protocol_("bar",$globals.ObjectMock2,"**test");
$self._augmentMethodInstantiationOf_withAttachments_(theMethod,$globals.HashedCollection._newFromPairs_(["a",(6),"c",(function(){
throw $early=[(9)];

})]));
$recv($globals.ObjectMock2)._addCompiledMethod_(theMethod);
$4=$recv($globals.ObjectMock2)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$3=$recv($4)._basicAt_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($3,(6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=$recv($globals.ObjectMock2)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$5=$recv($6)._basicAt_("b");
$self._assert_equals_($5,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($recv($globals.ObjectMock2)._new())._basicPerform_("c"),(9));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMethodAttachmentsAreReplaced",{instance:instance,theMethod:theMethod,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "testSetJavaScriptConstructor",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSetJavaScriptConstructor\x0a\x09| instance |\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09theClass javaScriptConstructor: self jsConstructor.\x0a\x09self assert: theClass name equals: 'ObjectMock2'.\x0a\x09self assert: theClass isClassCopyOf: ObjectMock.\x0a\x09\x22testing specific to late-coupled detached root class\x22\x0a\x09instance := theClass new.\x0a\x09self assert: instance class == theClass.\x0a\x09self assert: instance value equals: 4.\x0a\x09self shouldnt: [ instance foo: 9 ] raise: Error.\x0a\x09self assert: instance foo equals: 9",
referencedClasses: ["ObjectMock", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "javaScriptConstructor:", "jsConstructor", "assert:equals:", "name", "assert:isClassCopyOf:", "new", "assert:", "==", "class", "value", "shouldnt:raise:", "foo:", "foo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.theClass=$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
$recv($self.theClass)._javaScriptConstructor_($self._jsConstructor());
$self._assert_equals_($recv($self.theClass)._name(),"ObjectMock2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_isClassCopyOf_($self.theClass,$globals.ObjectMock);
instance=$recv($self.theClass)._new();
$self._assert_($recv($recv(instance)._class()).__eq_eq($self.theClass));
$self._assert_equals_($recv(instance)._value(),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(instance)._foo_((9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
$self._assert_equals_($recv(instance)._foo(),(9));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSetJavaScriptConstructor",{instance:instance})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "testTrickySetJavaScriptConstructor",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTrickySetJavaScriptConstructor\x0a\x09| instance |\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09theClass javaScriptConstructor: self trickyJsConstructor.\x0a\x09self assert: theClass name equals: 'ObjectMock2'.\x0a\x09self assert: theClass isClassCopyOf: ObjectMock.\x0a\x09\x22testing specific to late-coupled detached root class\x22\x0a\x09instance := theClass new.\x0a\x09self assert: instance class == theClass.\x0a\x09self assert: instance value equals: 4.\x0a\x09self shouldnt: [ instance foo: 9 ] raise: Error.\x0a\x09self assert: instance foo equals: 9",
referencedClasses: ["ObjectMock", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyClass:named:", "javaScriptConstructor:", "trickyJsConstructor", "assert:equals:", "name", "assert:isClassCopyOf:", "new", "assert:", "==", "class", "value", "shouldnt:raise:", "foo:", "foo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.theClass=$recv($self.builder)._copyClass_named_($globals.ObjectMock,"ObjectMock2");
$recv($self.theClass)._javaScriptConstructor_($self._trickyJsConstructor());
$self._assert_equals_($recv($self.theClass)._name(),"ObjectMock2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_isClassCopyOf_($self.theClass,$globals.ObjectMock);
instance=$recv($self.theClass)._new();
$self._assert_($recv($recv(instance)._class()).__eq_eq($self.theClass));
$self._assert_equals_($recv(instance)._value(),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(instance)._foo_((9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
$self._assert_equals_($recv(instance)._foo(),(9));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTrickySetJavaScriptConstructor",{instance:instance})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.theClass;

}; }),
$globals.ClassTest);

$core.addMethod(
$core.method({
selector: "trickyJsConstructor",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trickyJsConstructor\x0a\x09<inlineJS: '\x0a\x09\x09function Foo(){}\x0a\x09\x09Foo.prototype.valueOf = function () {return 4;};\x0a\x09\x09Foo.prototype._foo = function () {return \x22bar\x22;};\x0a\x09\x09return Foo;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09function Foo(){}\x0a\x09\x09Foo.prototype.valueOf = function () {return 4;};\x0a\x09\x09Foo.prototype._foo = function () {return \x22bar\x22;};\x0a\x09\x09return Foo;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		function Foo(){}
		Foo.prototype.valueOf = function () {return 4;};
		Foo.prototype._foo = function () {return "bar";};
		return Foo;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trickyJsConstructor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassTest);



$core.addClass("CollectionTest", $globals.TestCase, ["sampleBlock"], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "assertSameContents:as:",
protocol: "convenience",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "anotherCollection"],
source: "assertSameContents: aCollection as: anotherCollection\x0a\x09self assert: (aCollection size = anotherCollection size).\x0a\x09aCollection do: [ :each |\x0a\x09\x09self assert: ((aCollection occurrencesOf: each) = (anotherCollection occurrencesOf: each)) ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "=", "size", "do:", "occurrencesOf:"]
}, function ($methodClass){ return function (aCollection,anotherCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=$recv(aCollection)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($recv(anotherCollection)._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(aCollection)._occurrencesOf_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["occurrencesOf:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq($recv(anotherCollection)._occurrencesOf_(each));
return $self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertSameContents:as:",{aCollection:aCollection,anotherCollection:anotherCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collection",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09\x22Answers pre-filled collection of type tested.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09\x22Answers class of collection type tested\x22\x0a\x0a\x09^ self class collectionClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collectionClass", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09\x22Answers self collection but with values\x0a\x09changed to their printStrings\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionOfPrintStrings",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09\x22Answers size of self collection.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionSize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09\x22Answers pre-filled collection of type tested,\x0a\x09with exactly six distinct elements,\x0a\x09some of them appearing multiple times, if possible.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09\x22Answers a collection which shows how\x0a\x09self collection would look after adding\x0a\x09self sampleNewValue\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09sampleBlock := []",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._initialize.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self.sampleBlock=(function(){

});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNewValue",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewValue\x0a\x09\x22Answers a value that is not yet there\x0a\x09and can be put into a tested collection\x22\x0a\x09\x0a\x09^ 'N'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "N";

}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNewValueAsCollection",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewValueAsCollection\x0a\x09\x22Answers self sampleNewValue\x0a\x09wrapped in single element collection\x0a\x09of tested type\x22\x0a\x09\x0a\x09^ self collectionClass with: self sampleNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:", "collectionClass", "sampleNewValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._collectionClass())._with_($self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sampleNewValueAsCollection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAddAll",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddAll\x0a\x09self assert: (self collection addAll: self collectionClass new; yourself) equals: self collection.\x0a\x09self assert: (self collectionClass new addAll: self collection; yourself) equals: self collection.\x0a\x09self assert: (self collectionClass new addAll: self collectionClass new; yourself) equals: self collectionClass new.\x0a\x09self assert: (self collection addAll: self sampleNewValueAsCollection; yourself) equals: self collectionWithNewValue.\x0a\x09self assertSameContents: (self sampleNewValueAsCollection addAll: self collection; yourself) as: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "addAll:", "collection", "new", "collectionClass", "yourself", "sampleNewValueAsCollection", "collectionWithNewValue", "assertSameContents:as:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$5,$1,$6,$9,$8,$10,$11,$7,$12,$15,$14,$17,$16,$18,$13,$20,$21,$22,$19,$23,$25,$24;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$4=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($2)._addAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
$5=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$1=$5;
$6=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$9=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$10=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$recv($8)._addAll_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=2;
//>>excludeEnd("ctx");
$11=$recv($8)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$7=$11;
$12=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($7,$12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$15=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=3;
//>>excludeEnd("ctx");
$14=$recv($15)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$17=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=4;
//>>excludeEnd("ctx");
$16=$recv($17)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$recv($14)._addAll_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=3;
//>>excludeEnd("ctx");
$18=$recv($14)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$13=$18;
$self._assert_equals_($13,$recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$20=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=5;
//>>excludeEnd("ctx");
$21=$self._sampleNewValueAsCollection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValueAsCollection"]=1;
//>>excludeEnd("ctx");
$recv($20)._addAll_($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=4;
//>>excludeEnd("ctx");
$22=$recv($20)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=4;
//>>excludeEnd("ctx");
$19=$22;
$23=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($19,$23);
$25=$self._sampleNewValueAsCollection();
$recv($25)._addAll_($self._collection());
$24=$recv($25)._yourself();
$self._assertSameContents_as_($24,$self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAllSatisfy",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAllSatisfy\x0a\x09| collection anyOne |\x0a\x09collection := self collection.\x0a\x09anyOne := collection anyOne.\x0a\x09self assert: (collection allSatisfy: [ :each | collection includes: each ]).\x0a\x09self deny: (collection allSatisfy: [ :each | each ~= anyOne ])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collection", "anyOne", "assert:", "allSatisfy:", "includes:", "deny:", "~="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var collection,anyOne;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
collection=$self._collection();
anyOne=$recv(collection)._anyOne();
$1=$recv(collection)._allSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(collection)._includes_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["allSatisfy:"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
$self._deny_($recv(collection)._allSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__tild_eq(anyOne);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAllSatisfy",{collection:collection,anyOne:anyOne})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAnyOne",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAnyOne\x0a\x09self should: [ self collectionClass new anyOne ] raise: Error.\x0a\x09self assert: (self collection includes: self collection anyOne)",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "anyOne", "new", "collectionClass", "assert:", "includes:", "collection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self._collectionClass())._new())._anyOne();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["anyOne"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_($recv($self._collection())._anyOne());
$self._assert_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAnyOne",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAnySatisfy",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAnySatisfy\x0a\x09| anyOne |\x0a\x09anyOne := self collection anyOne.\x0a\x09self assert: (self collection anySatisfy: [ :each | each = anyOne ]).\x0a\x09self deny: (self collection anySatisfy: [ :each | each = Object new ])",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["anyOne", "collection", "assert:", "anySatisfy:", "=", "deny:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var anyOne;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
anyOne=$recv($1)._anyOne();
$3=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq(anyOne);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["anySatisfy:"]=1;
//>>excludeEnd("ctx");
$self._assert_($2);
$self._deny_($recv($self._collection())._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq($recv($globals.Object)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAnySatisfy",{anyOne:anyOne})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAsArray",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsArray\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: self collection asArray",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assertSameContents:as:", "collection", "asArray"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$self._assertSameContents_as_($1,$recv($self._collection())._asArray());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsArray",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAsOrderedCollection",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsOrderedCollection\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: self collection asOrderedCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assertSameContents:as:", "collection", "asOrderedCollection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$self._assertSameContents_as_($1,$recv($self._collection())._asOrderedCollection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsOrderedCollection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAsSet",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsSet\x0a\x09| c set |\x0a\x09c := self collectionWithDuplicates.\x0a\x09set := c asSet.\x0a\x09self assert: set size equals: 6.\x0a\x09c do: [ :each |\x0a\x09\x09self assert: (set includes: each) ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collectionWithDuplicates", "asSet", "assert:equals:", "size", "do:", "assert:", "includes:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var c,set;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
c=$self._collectionWithDuplicates();
set=$recv(c)._asSet();
$self._assert_equals_($recv(set)._size(),(6));
$recv(c)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_($recv(set)._includes_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsSet",{c:c,set:set})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testCollect",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCollect\x0a\x09self assert: (self collection collect: [ :each | each ]) equals: self collection.\x0a\x09self assert: (self collectionWithNewValue collect: [ :each | each ]) equals: self collectionWithNewValue.\x0a\x09self assert: (self collectionClass new collect: [ :each | each printString ]) equals: self collectionClass new.\x0a\x09self assert: ((self collection collect: [ self sampleNewValue ]) detect: [ true ]) equals: self sampleNewValue.\x0a\x09self assert: (self collection collect: [ :each | each printString ]) equals: self collectionOfPrintStrings",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "collect:", "collection", "collectionWithNewValue", "new", "collectionClass", "printString", "detect:", "sampleNewValue", "collectionOfPrintStrings"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4,$8,$7,$6,$11,$10,$9;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._collect_((function(each){
return each;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
$3=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$5=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._collect_((function(each){
return each;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($4,$self._collectionWithNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$8=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($6,$recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$11=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._collect_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=4;
//>>excludeEnd("ctx");
$9=$recv($10)._detect_((function(){
return true;

}));
$self._assert_equals_($9,$self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self._collection())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,6)});
//>>excludeEnd("ctx");
})),$self._collectionOfPrintStrings());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCollect",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testComma",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComma\x0a\x09self assert: self collection, self collectionClass new equals: self collection.\x0a\x09self assert: self collectionClass new, self collection equals: self collection.\x0a\x09self assert: self collectionClass new, self collectionClass new equals: self collectionClass new.\x0a\x09self assert: self collection, self sampleNewValueAsCollection equals: self collectionWithNewValue.\x0a\x09self assertSameContents: self sampleNewValueAsCollection, self collection as: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", ",", "collection", "new", "collectionClass", "sampleNewValueAsCollection", "collectionWithNewValue", "assertSameContents:as:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$5,$8,$7,$9,$6,$10,$13,$12,$15,$14,$11,$17,$18,$16,$19;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$4=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$5=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$8=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$9=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$10=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($6,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$13=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=3;
//>>excludeEnd("ctx");
$12=$recv($13)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$15=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=4;
//>>excludeEnd("ctx");
$14=$recv($15)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$11=$recv($12).__comma($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($11,$recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$17=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=5;
//>>excludeEnd("ctx");
$18=$self._sampleNewValueAsCollection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValueAsCollection"]=1;
//>>excludeEnd("ctx");
$16=$recv($17).__comma($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$19=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($16,$19);
$self._assertSameContents_as_($recv($self._sampleNewValueAsCollection()).__comma($self._collection()),$self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComma",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testCopy",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopy\x0a\x09self assert: self collectionClass new copy equals: self collectionClass new.\x0a\x09self assert: self collection copy equals: self collection.\x0a\x09self assert: self collectionWithNewValue copy equals: self collectionWithNewValue.\x0a\x09\x0a\x09self deny: self collectionClass new copy = self collection.\x0a\x09self deny: self collection copy = self collectionClass new.\x0a\x09self deny: self collection copy = self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "copy", "new", "collectionClass", "collection", "collectionWithNewValue", "deny:", "="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$7,$6,$8,$10,$9,$11,$15,$14,$13,$16,$12,$19,$18,$17;
$3=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=1;
//>>excludeEnd("ctx");
$5=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$7=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=2;
//>>excludeEnd("ctx");
$8=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($6,$8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$10=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=3;
//>>excludeEnd("ctx");
$11=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($9,$11);
$15=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=3;
//>>excludeEnd("ctx");
$14=$recv($15)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$13=$recv($14)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=4;
//>>excludeEnd("ctx");
$16=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$12=$recv($13).__eq($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._deny_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$19=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$18=$recv($19)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=5;
//>>excludeEnd("ctx");
$17=$recv($18).__eq($recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$self._deny_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$self._deny_($recv($recv($self._collection())._copy()).__eq($self._collectionWithNewValue()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testCopySeparates",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopySeparates\x0a\x09| original copy |\x0a\x09original := self collection.\x0a\x09copy := original copy.\x0a\x09copy addAll: self sampleNewValueAsCollection.\x0a\x09self assert: original = self collection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collection", "copy", "addAll:", "sampleNewValueAsCollection", "assert:", "="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var original,copy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
original=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
copy=$recv(original)._copy();
$recv(copy)._addAll_($self._sampleNewValueAsCollection());
$self._assert_($recv(original).__eq($self._collection()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopySeparates",{original:original,copy:copy})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testDetect",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDetect\x0a\x09self\x0a\x09\x09shouldnt: [ self collection detect: [ true ] ]\x0a\x09\x09raise: Error.\x0a\x09self\x0a\x09\x09should: [ self collection detect: [ false ] ]\x0a\x09\x09raise: Error.\x0a\x09self assert: (self sampleNewValueAsCollection detect: [ true ]) equals: self sampleNewValue.\x0a\x09self assert: (self collectionWithNewValue detect: [ :each | each = self sampleNewValue ]) equals: self sampleNewValue.\x0a\x09self\x0a\x09\x09should: [ self collection detect: [ :each | each = self sampleNewValue ] ]\x0a\x09\x09raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldnt:raise:", "detect:", "collection", "should:raise:", "assert:equals:", "sampleNewValueAsCollection", "sampleNewValue", "collectionWithNewValue", "="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5,$7;
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
return $recv($1)._detect_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["detect:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
return $recv($2)._detect_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["detect:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),$globals.Error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
$3=$recv($self._sampleNewValueAsCollection())._detect_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:"]=3;
//>>excludeEnd("ctx");
$4=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$5=$recv($self._collectionWithNewValue())._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
return $recv(each).__eq($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:"]=4;
//>>excludeEnd("ctx");
$7=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValue"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$7);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._collection())._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each).__eq($self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDetect",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testDetectIfNone",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDetectIfNone\x0a\x09| sentinel |\x0a\x09sentinel := Object new.\x0a\x09self assert: (self collection detect: [ true ] ifNone: [ sentinel ]) ~= sentinel.\x0a\x09self assert: (self collection detect: [ false ] ifNone: [ sentinel ]) equals: sentinel.\x0a\x09self assert: (self sampleNewValueAsCollection detect: [ true ] ifNone: [ sentinel ]) equals: self sampleNewValue.\x0a\x09self assert: (self collectionWithNewValue detect: [ :each | each = self sampleNewValue ] ifNone: [ sentinel ]) equals: self sampleNewValue.\x0a\x09self assert: (self collection detect: [ :each | each = self sampleNewValue ] ifNone: [ sentinel ]) equals: sentinel",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "assert:", "~=", "detect:ifNone:", "collection", "assert:equals:", "sampleNewValueAsCollection", "sampleNewValue", "collectionWithNewValue", "="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var sentinel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$6,$7,$9,$8,$10;
sentinel=$recv($globals.Object)._new();
$3=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._detect_ifNone_((function(){
return true;

}),(function(){
return sentinel;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:ifNone:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__tild_eq(sentinel);
$self._assert_($1);
$5=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._detect_ifNone_((function(){
return false;

}),(function(){
return sentinel;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:ifNone:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($4,sentinel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=$recv($self._sampleNewValueAsCollection())._detect_ifNone_((function(){
return true;

}),(function(){
return sentinel;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:ifNone:"]=3;
//>>excludeEnd("ctx");
$7=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($6,$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$8=$recv($self._collectionWithNewValue())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
return $recv(each).__eq($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,7)});
//>>excludeEnd("ctx");
}),(function(){
return sentinel;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:ifNone:"]=4;
//>>excludeEnd("ctx");
$10=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValue"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($8,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self._collection())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq($self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,9)});
//>>excludeEnd("ctx");
}),(function(){
return sentinel;

})),sentinel);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDetectIfNone",{sentinel:sentinel})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testDo",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDo\x0a\x09| newCollection |\x0a\x09newCollection := OrderedCollection new.\x0a\x09self collection do: [ :each |\x0a\x09\x09newCollection add: each ].\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: newCollection.\x0a\x09newCollection := OrderedCollection new.\x0a\x09self collectionWithDuplicates do: [ :each |\x0a\x09\x09newCollection add: each ].\x0a\x09self\x0a\x09\x09assertSameContents: self collectionWithDuplicates\x0a\x09\x09as: newCollection",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "collection", "add:", "assertSameContents:as:", "collectionWithDuplicates"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
newCollection=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$self._assertSameContents_as_($self._collection(),newCollection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertSameContents:as:"]=1;
//>>excludeEnd("ctx");
newCollection=$recv($globals.OrderedCollection)._new();
$2=$self._collectionWithDuplicates();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithDuplicates"]=1;
//>>excludeEnd("ctx");
$recv($2)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._assertSameContents_as_($self._collectionWithDuplicates(),newCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDo",{newCollection:newCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testEquality",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09self assert: self collectionClass new equals: self collectionClass new.\x0a\x09self assert: self collection equals: self collection.\x0a\x09self assert: self collectionWithNewValue equals: self collectionWithNewValue.\x0a\x09\x0a\x09self deny: self collectionClass new = self collection.\x0a\x09self deny: self collection = self collectionClass new.\x0a\x09self deny: self collection = self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "new", "collectionClass", "collection", "collectionWithNewValue", "deny:", "="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$6,$7,$8,$11,$10,$12,$9,$14,$13;
$2=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$4=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$5=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$6=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$7=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$8=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($7,$8);
$11=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$12=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__eq($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._deny_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$14=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$13=$recv($14).__eq($recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$self._deny_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$self._deny_($recv($self._collection()).__eq($self._collectionWithNewValue()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testIfEmptyFamily",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIfEmptyFamily\x0a\x09self assert: (self collectionClass new ifEmpty: [ 42 ]) equals: 42.\x0a\x09self assert: (self collection ifEmpty: [ 42 ]) equals: self collection.\x0a\x0a\x09self assert: (self collectionClass new ifNotEmpty: [ 42 ]) equals: self collectionClass new.\x0a\x09self assert: (self collection ifNotEmpty: [ 42 ]) equals: 42.\x0a\x09self assert: (self collection ifNotEmpty: [ :col | col ]) equals: self collection.\x0a\x09\x0a\x09self assert: (self collectionClass new ifEmpty: [ 42 ] ifNotEmpty: [ 999 ]) equals: 42.\x0a\x09self assert: (self collection ifEmpty: [ 42 ] ifNotEmpty: [ 999 ]) equals: 999.\x0a\x09self assert: (self collection ifEmpty: [ 42 ] ifNotEmpty: [ :col | col ]) equals: self collection.\x0a\x0a\x09self assert: (self collectionClass new ifNotEmpty: [ 42 ] ifEmpty: [ 999 ]) equals: 999.\x0a\x09self assert: (self collection ifNotEmpty: [ 42 ] ifEmpty: [ 999 ]) equals: 42.\x0a\x09self assert: (self collection ifNotEmpty: [ :col | col ] ifEmpty: [ 999 ]) equals: self collection.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "ifEmpty:", "new", "collectionClass", "collection", "ifNotEmpty:", "ifEmpty:ifNotEmpty:", "ifNotEmpty:ifEmpty:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$6,$9,$8,$7,$11,$10,$13,$12,$15,$14,$16,$19,$18,$17,$21,$20,$23,$22,$24,$25,$27,$26,$29,$28;
$3=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._ifEmpty_((function(){
return (42);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifEmpty:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(42));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$5=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._ifEmpty_((function(){
return (42);

}));
$6=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($4,$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$9=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._ifNotEmpty_((function(){
return (42);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifNotEmpty:"]=1;
//>>excludeEnd("ctx");
$11=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($7,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$13=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$12=$recv($13)._ifNotEmpty_((function(){
return (42);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifNotEmpty:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($12,(42));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$15=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$14=$recv($15)._ifNotEmpty_((function(col){
return col;

}));
$16=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_($14,$16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$19=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=4;
//>>excludeEnd("ctx");
$18=$recv($19)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$17=$recv($18)._ifEmpty_ifNotEmpty_((function(){
return (42);

}),(function(){
return (999);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifEmpty:ifNotEmpty:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($17,(42));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$21=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=6;
//>>excludeEnd("ctx");
$20=$recv($21)._ifEmpty_ifNotEmpty_((function(){
return (42);

}),(function(){
return (999);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifEmpty:ifNotEmpty:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($20,(999));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$23=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=7;
//>>excludeEnd("ctx");
$22=$recv($23)._ifEmpty_ifNotEmpty_((function(){
return (42);

}),(function(col){
return col;

}));
$24=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=8;
//>>excludeEnd("ctx");
$self._assert_equals_($22,$24);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=8;
//>>excludeEnd("ctx");
$25=$recv($recv($self._collectionClass())._new())._ifNotEmpty_ifEmpty_((function(){
return (42);

}),(function(){
return (999);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifNotEmpty:ifEmpty:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($25,(999));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=9;
//>>excludeEnd("ctx");
$27=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=9;
//>>excludeEnd("ctx");
$26=$recv($27)._ifNotEmpty_ifEmpty_((function(){
return (42);

}),(function(){
return (999);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifNotEmpty:ifEmpty:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($26,(42));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=10;
//>>excludeEnd("ctx");
$29=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=10;
//>>excludeEnd("ctx");
$28=$recv($29)._ifNotEmpty_ifEmpty_((function(col){
return col;

}),(function(){
return (999);

}));
$self._assert_equals_($28,$self._collection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIfEmptyFamily",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testIsEmpty",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsEmpty\x0a\x09self assert: self collectionClass new isEmpty.\x0a\x09self deny: self collection isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "isEmpty", "new", "collectionClass", "deny:", "collection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($self._collectionClass())._new())._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isEmpty"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
$self._deny_($recv($self._collection())._isEmpty());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testNoneSatisfy",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNoneSatisfy\x0a\x09| anyOne |\x0a\x09anyOne := self collection anyOne.\x0a\x09self deny: (self collection noneSatisfy: [ :each | each = anyOne ]).\x0a\x09self assert: (self collection noneSatisfy: [ :each | each = Object new ])",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["anyOne", "collection", "deny:", "noneSatisfy:", "=", "assert:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var anyOne;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
anyOne=$recv($1)._anyOne();
$3=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._noneSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq(anyOne);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["noneSatisfy:"]=1;
//>>excludeEnd("ctx");
$self._deny_($2);
$self._assert_($recv($self._collection())._noneSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq($recv($globals.Object)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNoneSatisfy",{anyOne:anyOne})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testRegression1224",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRegression1224\x0a\x09self assert: (self collectionClass new\x0a\x09\x09remove: self sampleNewValue ifAbsent: [];\x0a\x09\x09yourself) size equals: 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "size", "remove:ifAbsent:", "new", "collectionClass", "sampleNewValue", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv($self._collectionClass())._new();
$recv($3)._remove_ifAbsent_($self._sampleNewValue(),(function(){

}));
$2=$recv($3)._yourself();
$1=$recv($2)._size();
$self._assert_equals_($1,(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRegression1224",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testRemoveAll",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveAll\x0a\x09self assert: (self collection removeAll; yourself) equals: self collectionClass new",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "removeAll", "collection", "yourself", "new", "collectionClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$self._collection();
$recv($2)._removeAll();
$1=$recv($2)._yourself();
$self._assert_equals_($1,$recv($self._collectionClass())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testSelect",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSelect\x0a\x09self assert: (self collection select: [ false ]) equals: self collectionClass new.\x0a\x09self assert: (self collection select: [ true ]) equals: self collection.\x0a\x09self assert: (self collectionWithNewValue select: [ :each | each = self sampleNewValue ]) equals: self sampleNewValueAsCollection.\x0a\x09self assert: (self collectionWithNewValue select: [ :each | each ~= self sampleNewValue ]) equals: self collection.\x0a\x09self assert: (self collection select: [ :each | each = self sampleNewValue ]) equals: self collectionClass new.\x0a\x09self assert: (self collectionWithNewValue select: [ :each | each ~= self sampleNewValue ]) equals: self collection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "select:", "collection", "new", "collectionClass", "collectionWithNewValue", "=", "sampleNewValue", "sampleNewValueAsCollection", "~="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$7,$9,$10,$8,$12,$13,$11,$14,$16,$17,$15;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._select_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=1;
//>>excludeEnd("ctx");
$4=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._select_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=2;
//>>excludeEnd("ctx");
$7=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$9=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$10=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
return $recv(each).__eq($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($8,$self._sampleNewValueAsCollection());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$12=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
$11=$recv($12)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$13=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
return $recv(each).__tild_eq($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["~="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=4;
//>>excludeEnd("ctx");
$14=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($11,$14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$16=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=5;
//>>excludeEnd("ctx");
$15=$recv($16)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$17=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=3;
//>>excludeEnd("ctx");
return $recv(each).__eq($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_($15,$recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self._collectionWithNewValue())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__tild_eq($self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,6)});
//>>excludeEnd("ctx");
})),$self._collection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSelect",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testSelectThenCollect",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSelectThenCollect\x0a\x09self assert: (self collection select: [ false ] thenCollect: #isString) equals: self collectionClass new.\x0a\x09self assert: (self collection select: [ true ] thenCollect: [:x|x]) equals: self collection.\x0a\x09self assert: (self collection select: [ :each | each = self sampleNewValue ] thenCollect: [:x|x]) equals: self collectionClass new.\x0a\x09self assert: (self collectionWithNewValue select: [ :each | each ~= self sampleNewValue ] thenCollect: #printString) equals: self collectionOfPrintStrings",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "select:thenCollect:", "collection", "new", "collectionClass", "=", "sampleNewValue", "collectionWithNewValue", "~=", "collectionOfPrintStrings"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$7,$9,$8;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._select_thenCollect_((function(){
return false;

}),"isString");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:thenCollect:"]=1;
//>>excludeEnd("ctx");
$4=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._select_thenCollect_((function(){
return true;

}),(function(x){
return x;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:thenCollect:"]=2;
//>>excludeEnd("ctx");
$7=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$8=$recv($self._collection())._select_thenCollect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
return $recv(each).__eq($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}),(function(x){
return x;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:thenCollect:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($8,$recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self._collectionWithNewValue())._select_thenCollect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__tild_eq($self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,6)});
//>>excludeEnd("ctx");
}),"printString"),$self._collectionOfPrintStrings());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSelectThenCollect",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testSingle",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSingle\x0a\x09self should: [ self collectionClass new single ] raise: Error.\x0a\x09self should: [ self collection single ] raise: Error.\x0a\x09self assert: self sampleNewValueAsCollection single equals: self sampleNewValue",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "single", "new", "collectionClass", "collection", "assert:equals:", "sampleNewValueAsCollection", "sampleNewValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self._collectionClass())._new())._single();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["single"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._collection())._single();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["single"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
$self._assert_equals_($recv($self._sampleNewValueAsCollection())._single(),$self._sampleNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSingle",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testSize",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSize\x0a\x09self assert: self collectionClass new size equals: 0.\x0a\x09self assert: self sampleNewValueAsCollection size equals: 1.\x0a\x09self assert: self collection size equals: self collectionSize",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "size", "new", "collectionClass", "sampleNewValueAsCollection", "collection", "collectionSize"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($recv($self._collectionClass())._new())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv($self._sampleNewValueAsCollection())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self._collection())._size(),$self._collectionSize());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09\x22Answers class of collection type tested,\x0a\x09or nil if test is abstract\x22\x0a\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return nil;

}; }),
$globals.CollectionTest.a$cls);

$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09^ self collectionClass isNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isNil", "collectionClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._collectionClass())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CollectionTest.a$cls);


$core.addClass("AssociativeCollectionTest", $globals.CollectionTest, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "collectionKeys",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionKeys\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionKeys",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionValues",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionValues\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionValues",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "nonIndexesDo:",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nonIndexesDo: aBlock\x0a\x09aBlock value: 5.\x0a\x09aBlock value: [].\x0a\x09aBlock value: Object new.\x0a\x09aBlock value: 'z'",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "new"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_((function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
$recv(aBlock)._value_($recv($globals.Object)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=3;
//>>excludeEnd("ctx");
$recv(aBlock)._value_("z");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonIndexesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNewIndex",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewIndex\x0a\x09^ 'new'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "new";

}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09aBlock value: 'a' value: 2",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_("a",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testAddAll",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddAll\x0a\x09super testAddAll.\x0a\x09self assert: (self collection addAll: self collection; yourself) equals: self collection.\x0a\x09self assert: (self collection addAll: self collectionWithNewValue; yourself) equals: self collectionWithNewValue.\x0a\x09self assert: (self collectionWithNewValue addAll: self collection; yourself) equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["testAddAll", "assert:equals:", "addAll:", "collection", "yourself", "collectionWithNewValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$5,$7,$8,$9,$6,$10,$12,$11;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._testAddAll.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$3=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$recv($2)._addAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
$4=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$1=$4;
$5=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$7=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$8=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$recv($7)._addAll_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=2;
//>>excludeEnd("ctx");
$9=$recv($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$6=$9;
$10=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($6,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$12=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=3;
//>>excludeEnd("ctx");
$recv($12)._addAll_($self._collection());
$11=$recv($12)._yourself();
$self._assert_equals_($11,$self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testAsDictionary",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsDictionary\x0aself assert: ( self collectionClass new asDictionary isMemberOf: Dictionary ).",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "isMemberOf:", "asDictionary", "new", "collectionClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv($recv($recv($self._collectionClass())._new())._asDictionary())._isMemberOf_($globals.Dictionary));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsDictionary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testAsHashedCollection",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsHashedCollection\x0aself assert: ( self collectionClass new asHashedCollection isMemberOf: HashedCollection ).",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "isMemberOf:", "asHashedCollection", "new", "collectionClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv($recv($recv($self._collectionClass())._new())._asHashedCollection())._isMemberOf_($globals.HashedCollection));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsHashedCollection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testComma",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComma\x0a\x09super testComma.\x0a\x09self assert: self collection, self collection equals: self collection.\x0a\x09self assert: self collection, self collectionWithNewValue equals: self collectionWithNewValue.\x0a\x09self assert: self collectionWithNewValue, self collection equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["testComma", "assert:equals:", ",", "collection", "collectionWithNewValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$6,$7,$5,$8,$10,$9;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._testComma.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$3=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$7=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$8=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$10=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__comma($self._collection());
$self._assert_equals_($9,$self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComma",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testFrom",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFrom\x0a\x22Accept a collection of associations.\x22\x0a| associations |\x0aassociations := { 'a' -> 1. 'b' -> 2 }.\x0aself assertSameContents: ( self class collectionClass from: associations ) as: #{ 'a' -> 1. 'b' -> 2 }.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["->", "assertSameContents:as:", "from:", "collectionClass", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var associations;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="a".__minus_gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
associations=[$1,"b".__minus_gt((2))];
$self._assertSameContents_as_($recv($recv($self._class())._collectionClass())._from_(associations),$globals.HashedCollection._newFromPairs_(["a",(1),"b",(2)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFrom",{associations:associations})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testKeys",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testKeys\x0a\x09self assert:self collectionClass new keys isEmpty.\x0a\x09self assertSameContents:self collection keys as: self collectionKeys.\x0a\x09self assertSameContents:self collectionWithNewValue keys as: self collectionKeys, { self sampleNewIndex }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "isEmpty", "keys", "new", "collectionClass", "assertSameContents:as:", "collection", "collectionKeys", "collectionWithNewValue", ",", "sampleNewIndex"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
$2=$recv($recv($self._collectionClass())._new())._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keys"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
$self._assert_($1);
$3=$recv($self._collection())._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keys"]=2;
//>>excludeEnd("ctx");
$4=$self._collectionKeys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionKeys"]=1;
//>>excludeEnd("ctx");
$self._assertSameContents_as_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertSameContents:as:"]=1;
//>>excludeEnd("ctx");
$self._assertSameContents_as_($recv($self._collectionWithNewValue())._keys(),$recv($self._collectionKeys()).__comma([$self._sampleNewIndex()]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testKeys",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testNewFromPairs",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNewFromPairs\x0a\x22Accept an array in which all odd indexes are keys and evens are values.\x22\x0a| flattenedAssociations |\x0aflattenedAssociations := { 'a'. 1. 'b'. 2 }.\x0aself assertSameContents: ( self class collectionClass newFromPairs: flattenedAssociations ) as: #{ 'a' -> 1. 'b' -> 2 }.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assertSameContents:as:", "newFromPairs:", "collectionClass", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var flattenedAssociations;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
flattenedAssociations=["a",(1),"b",(2)];
$self._assertSameContents_as_($recv($recv($self._class())._collectionClass())._newFromPairs_(flattenedAssociations),$globals.HashedCollection._newFromPairs_(["a",(1),"b",(2)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNewFromPairs",{flattenedAssociations:flattenedAssociations})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testPrintString",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrintString\x0a\x09self\x0a\x09\x09assert: (self collectionClass new\x0a\x09\x09\x09\x09\x09\x09\x09at:'firstname' put: 'James';\x0a\x09\x09\x09\x09\x09\x09\x09at:'lastname' put: 'Bond';\x0a\x09\x09\x09\x09\x09\x09\x09printString)\x0a\x09\x09equals: 'a ', self collectionClass name, ' (''firstname'' -> ''James'' , ''lastname'' -> ''Bond'')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "at:put:", "new", "collectionClass", "printString", ",", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
$3=$self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._new();
$recv($2)._at_put_("firstname","James");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("lastname","Bond");
$1=$recv($2)._printString();
$4=$recv("a ".__comma($recv($self._collectionClass())._name())).__comma(" ('firstname' -> 'James' , 'lastname' -> 'Bond')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrintString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testRemoveKey",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveKey\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self should: [ collection removeKey: each ] raise: Error.\x0a\x09\x09self assert: collection equals: self collection ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self assert: (collection removeKey: index) equals: value.\x0a\x09\x09self deny: collection = self collection ].\x0a\x09self\x0a\x09\x09assert: (self collectionWithNewValue removeKey: self sampleNewIndex; yourself)\x0a\x09\x09equals: self collection",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nonIndexesDo:", "collection", "should:raise:", "removeKey:", "assert:equals:", "samplesDo:", "deny:", "=", "collectionWithNewValue", "sampleNewIndex", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$6,$4,$8,$7;
$self._nonIndexesDo_((function(each){
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
collection=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(collection)._removeKey_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["removeKey:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
$1=collection;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
return $self._assert_equals_($1,$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,collection:collection},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._samplesDo_((function(index,value){
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
collection=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$3=$recv(collection)._removeKey_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["removeKey:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($3,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$5=collection;
$6=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$4=$recv($5).__eq($6);
return $self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value,collection:collection},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$8=$self._collectionWithNewValue();
$recv($8)._removeKey_($self._sampleNewIndex());
$7=$recv($8)._yourself();
$self._assert_equals_($7,$self._collection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveKey",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testRemoveKeyIfAbsent",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveKeyIfAbsent\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self assert: (collection removeKey: each ifAbsent: [ self sampleNewValue ]) equals: self sampleNewValue.\x0a\x09\x09self assert: collection equals: self collection ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self assert: (collection removeKey: index ifAbsent: [ self sampleNewValue ]) equals: value.\x0a\x09\x09self deny: collection = self collection ].\x0a\x09self\x0a\x09\x09assert: (self collectionWithNewValue removeKey: self sampleNewIndex ifAbsent: [ self assert: false ]; yourself)\x0a\x09\x09equals: self collection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nonIndexesDo:", "collection", "assert:equals:", "removeKey:ifAbsent:", "sampleNewValue", "samplesDo:", "deny:", "=", "collectionWithNewValue", "sampleNewIndex", "assert:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$7,$8,$6,$10,$9;
$self._nonIndexesDo_((function(each){
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
collection=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv(collection)._removeKey_ifAbsent_(each,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["removeKey:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$2=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=collection;
$4=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
return $self._assert_equals_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,collection:collection},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._samplesDo_((function(index,value){
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
collection=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$5=$recv(collection)._removeKey_ifAbsent_(index,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["removeKey:ifAbsent:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($5,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$7=collection;
$8=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$6=$recv($7).__eq($8);
return $self._deny_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value,collection:collection},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$10=$self._collectionWithNewValue();
$recv($10)._removeKey_ifAbsent_($self._sampleNewIndex(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
$9=$recv($10)._yourself();
$self._assert_equals_($9,$self._collection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveKeyIfAbsent",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testValues",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValues\x0a\x09self assert:self collectionClass new values isEmpty.\x0a\x09self assertSameContents:self collection values as: self collectionValues.\x0a\x09self assertSameContents:self collectionWithNewValue values as: self collectionValues, { self sampleNewValue }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "isEmpty", "values", "new", "collectionClass", "assertSameContents:as:", "collection", "collectionValues", "collectionWithNewValue", ",", "sampleNewValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
$2=$recv($recv($self._collectionClass())._new())._values();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["values"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
$self._assert_($1);
$3=$recv($self._collection())._values();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["values"]=2;
//>>excludeEnd("ctx");
$4=$self._collectionValues();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionValues"]=1;
//>>excludeEnd("ctx");
$self._assertSameContents_as_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertSameContents:as:"]=1;
//>>excludeEnd("ctx");
$self._assertSameContents_as_($recv($self._collectionWithNewValue())._values(),$recv($self._collectionValues()).__comma([$self._sampleNewValue()]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValues",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollectionTest);



$core.addClass("DictionaryTest", $globals.AssociativeCollectionTest, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "collection",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 1@3 put: -4;\x0a\x09\x09at: sampleBlock put: 9;\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "new", "@", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Dictionary)._new();
$recv($1)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("a",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_(true,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($1)._at_put_((1).__at((3)),(-4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($1)._at_put_($self.sampleBlock,(9));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionKeys",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionKeys\x0a\x09^ {1. 'a'. true. 1@3. sampleBlock}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["@"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [(1),"a",true,(1).__at((3)),$self.sampleBlock];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionKeys",{})});
//>>excludeEnd("ctx");
}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: '1';\x0a\x09\x09at: 'a' put: '2';\x0a\x09\x09at: true put: '3';\x0a\x09\x09at: 1@3 put: '-4';\x0a\x09\x09at: sampleBlock put: '9';\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "new", "@", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Dictionary)._new();
$recv($1)._at_put_((1),"1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("a","2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_(true,"3");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($1)._at_put_((1).__at((3)),"-4");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($1)._at_put_($self.sampleBlock,"9");
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionOfPrintStrings",{})});
//>>excludeEnd("ctx");
}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09^ 5",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (5);

}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionValues",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionValues\x0a\x09^ {1. 2. 3. -4. 9}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [(1),(2),(3),(-4),(9)];

}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 4 put: -4;\x0a\x09\x09at: sampleBlock put: 9;\x0a\x09\x09at: 'b' put: 1;\x0a\x09\x09at: 3 put: 3;\x0a\x09\x09at: false put: 12;\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Dictionary)._new();
$recv($1)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("a",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_(true,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($1)._at_put_((4),(-4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($1)._at_put_($self.sampleBlock,(9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($1)._at_put_("b",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv($1)._at_put_((3),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv($1)._at_put_(false,(12));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{})});
//>>excludeEnd("ctx");
}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 1@3 put: -4;\x0a\x09\x09at: sampleBlock put: 9;\x0a\x09\x09at: 'new' put: 'N';\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "new", "@", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Dictionary)._new();
$recv($1)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("a",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_(true,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($1)._at_put_((1).__at((3)),(-4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($1)._at_put_($self.sampleBlock,(9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($1)._at_put_("new","N");
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "sampleNewValueAsCollection",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewValueAsCollection\x0a\x09^ Dictionary new\x0a\x09\x09at: 'new' put: 'N';\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Dictionary)._new();
$recv($1)._at_put_("new","N");
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sampleNewValueAsCollection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09super samplesDo: aBlock.\x0a\x09aBlock value: true value: 3.\x0a\x09aBlock value: 1@3 value: -4.\x0a\x09aBlock value: sampleBlock value: 9",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["samplesDo:", "value:value:", "@"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._samplesDo_.call($self,aBlock));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aBlock)._value_value_(true,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:value:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_((1).__at((3)),(-4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:value:"]=2;
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_($self.sampleBlock,(9));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "testAccessing",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAccessing\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x0a\x09d at: 'hello' put: 'world'.\x0a\x09self assert: (d at: 'hello') equals: 'world'.\x0a\x09self assert: (d at: 'hello' ifAbsent: [ nil ]) equals: 'world'.\x0a\x09self deny: (d at: 'foo' ifAbsent: [ nil ]) = 'world'.\x0a\x0a\x09self assert: (d includesKey: 'hello').\x0a\x09self deny: (d includesKey: 'foo').\x0a\x0a\x09d at: 1 put: 2.\x0a\x09self assert: (d at: 1) equals: 2.\x0a\x0a\x09d at: 1@3 put: 3.\x0a\x09self assert: (d at: 1@3) equals: 3.\x0a\x0a\x09self assert: (d includesKey: 1@3).\x0a\x09self deny: (d includesKey: 3@1)",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "at:put:", "assert:equals:", "at:", "at:ifAbsent:", "deny:", "=", "assert:", "includesKey:", "@"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$9,$10,$8,$12,$13,$11;
d=$recv($globals.Dictionary)._new();
$recv(d)._at_put_("hello","world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$1=$recv(d)._at_("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(d)._at_ifAbsent_("hello",(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($2,"world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._deny_($recv($recv(d)._at_ifAbsent_("foo",(function(){
return nil;

}))).__eq("world"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$3=$recv(d)._includesKey_("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includesKey:"]=1;
//>>excludeEnd("ctx");
$self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$recv(d)._includesKey_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includesKey:"]=2;
//>>excludeEnd("ctx");
$self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$recv(d)._at_put_((1),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$5=$recv(d)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($5,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$6=d;
$7=(1).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$recv($6)._at_put_($7,(3));
$9=d;
$10=(1).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._at_($10);
$self._assert_equals_($8,(3));
$12=d;
$13=(1).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$11=$recv($12)._includesKey_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includesKey:"]=3;
//>>excludeEnd("ctx");
$self._assert_($11);
$self._deny_($recv(d)._includesKey_((3).__at((1))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAccessing",{d:d})});
//>>excludeEnd("ctx");
}; }),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "testDynamicDictionaries",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDynamicDictionaries\x0a\x09self assert: #{'hello' -> 1} asDictionary equals: (Dictionary with: 'hello' -> 1)",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "asDictionary", "with:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($globals.HashedCollection._newFromPairs_(["hello",(1)]))._asDictionary(),$recv($globals.Dictionary)._with_("hello".__minus_gt((1))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaries",{})});
//>>excludeEnd("ctx");
}; }),
$globals.DictionaryTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ Dictionary",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.Dictionary;

}; }),
$globals.DictionaryTest.a$cls);


$core.addClass("HashedCollectionTest", $globals.AssociativeCollectionTest, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "collection",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4 }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.HashedCollection._newFromPairs_(["b",(1),"a",(2),"c",(3),"d",(-4)]);

}; }),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionKeys",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionKeys\x0a\x09^ { 'b'. 'a'. 'c'. 'd' }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["b","a","c","d"];

}; }),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09^ #{ 'b' -> '1'. 'a' -> '2'. 'c' -> '3'. 'd' -> '-4' }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.HashedCollection._newFromPairs_(["b","1","a","2","c","3","d","-4"]);

}; }),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09^ 4",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (4);

}; }),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionValues",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionValues\x0a\x09^ { 1. 2. 3. -4 }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [(1),(2),(3),(-4)];

}; }),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4. 'e' -> 1. 'f' -> 2. 'g' -> 10. 'h' -> 0 }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.HashedCollection._newFromPairs_(["b",(1),"a",(2),"c",(3),"d",(-4),"e",(1),"f",(2),"g",(10),"h",(0)]);

}; }),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4. 'new' -> 'N' }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.HashedCollection._newFromPairs_(["b",(1),"a",(2),"c",(3),"d",(-4),"new","N"]);

}; }),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNewValueAsCollection",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewValueAsCollection\x0a\x09^ #{ 'new' -> 'N' }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.HashedCollection._newFromPairs_(["new","N"]);

}; }),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "testDynamicDictionaries",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDynamicDictionaries\x0a\x09self assert: #{'hello' -> 1} asHashedCollection equals: (HashedCollection with: 'hello' -> 1)",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "asHashedCollection", "with:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($globals.HashedCollection._newFromPairs_(["hello",(1)]))._asHashedCollection(),$recv($globals.HashedCollection)._with_("hello".__minus_gt((1))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaries",{})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollectionTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ HashedCollection",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.HashedCollection;

}; }),
$globals.HashedCollectionTest.a$cls);


$core.addClass("SequenceableCollectionTest", $globals.CollectionTest, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "collectionFirst",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirst\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionFirst",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionFirstTwo",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirstTwo\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionFirstTwo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionLast",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLast\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionLast",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionLastTwo",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLastTwo\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionLastTwo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "nonIndexesDo:",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nonIndexesDo: aBlock\x0a\x09aBlock value: 0.\x0a\x09aBlock value: self collectionSize + 1.\x0a\x09aBlock value: 'z'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "+", "collectionSize"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_($recv($self._collectionSize()).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
$recv(aBlock)._value_("z");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonIndexesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09aBlock value: 1 value: self collectionFirst.\x0a\x09aBlock value: self collectionSize value: self collectionLast",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:value:", "collectionFirst", "collectionSize", "collectionLast"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_((1),$self._collectionFirst());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:value:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_($self._collectionSize(),$self._collectionLast());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testBeginsWith",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBeginsWith\x0a\x09self assert: (self collection beginsWith: self collectionClass new).\x0a\x09self assert: (self collection beginsWith: self collection).\x0a\x09self assert: (self collection beginsWith: self collectionFirstTwo).\x0a\x09self deny: (self collection beginsWith: self collectionLastTwo)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "beginsWith:", "collection", "new", "collectionClass", "collectionFirstTwo", "deny:", "collectionLastTwo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$5,$3,$7,$6;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._beginsWith_($recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["beginsWith:"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$5=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$3=$recv($4)._beginsWith_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["beginsWith:"]=2;
//>>excludeEnd("ctx");
$self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$7=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$6=$recv($7)._beginsWith_($self._collectionFirstTwo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["beginsWith:"]=3;
//>>excludeEnd("ctx");
$self._assert_($6);
$self._deny_($recv($self._collection())._beginsWith_($self._collectionLastTwo()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBeginsWith",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testEndsWith",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEndsWith\x0a\x09self assert: (self collection endsWith: self collectionClass new).\x0a\x09self assert: (self collection endsWith: self collection).\x0a\x09self assert: (self collection endsWith: self collectionLastTwo).\x0a\x09self deny: (self collection endsWith: self collectionFirstTwo)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "endsWith:", "collection", "new", "collectionClass", "collectionLastTwo", "deny:", "collectionFirstTwo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$5,$3,$7,$6;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._endsWith_($recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["endsWith:"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$5=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$3=$recv($4)._endsWith_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["endsWith:"]=2;
//>>excludeEnd("ctx");
$self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$7=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$6=$recv($7)._endsWith_($self._collectionLastTwo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["endsWith:"]=3;
//>>excludeEnd("ctx");
$self._assert_($6);
$self._deny_($recv($self._collection())._endsWith_($self._collectionFirstTwo()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEndsWith",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testFirst",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFirst\x0a\x09self assert: self collection first equals: self collectionFirst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "first", "collection", "collectionFirst"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self._collection())._first(),$self._collectionFirst());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFirst",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testFirstN",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFirstN\x0a\x09self \x0a\x09\x09assert: (self collection first: 2)\x0a\x09\x09equals: self collectionFirstTwo.\x0a\x09\x09\x0a\x09self\x0a\x09\x09assert: (self collection first: 0)\x0a\x09\x09equals: self collectionClass new.\x0a\x09\x09\x0a\x09self\x0a\x09\x09assert: (self collection first: self collectionSize)\x0a\x09\x09equals: self collection.\x0a\x09\x09\x0a\x09self should: [ self collection first: 33 ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "first:", "collection", "collectionFirstTwo", "new", "collectionClass", "collectionSize", "should:raise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$7;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._first_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$self._collectionFirstTwo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._first_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($3,$recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$6=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._first_($self._collectionSize());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first:"]=3;
//>>excludeEnd("ctx");
$7=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$7);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._collection())._first_((33));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFirstN",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testFourth",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFourth\x0a\x09self assert: (self collection fourth) equals: (self collection at: 4)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "fourth", "collection", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._fourth();
$self._assert_equals_($1,$recv($self._collection())._at_((4)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFourth",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testIndexOfStartingAt",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOfStartingAt\x0a\x09| jsNull |\x0a\x09jsNull := JSON parse: 'null'.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection indexOf: value startingAt: 1) equals: index.\x0a\x09\x09self assert: (self collection indexOf: value startingAt: index) equals: index.\x0a\x09\x09self assert: (self collection indexOf: value startingAt: index+1) equals: 0 ]",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "samplesDo:", "assert:equals:", "indexOf:startingAt:", "collection", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var jsNull;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
jsNull=$recv($globals.JSON)._parse_("null");
$self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._indexOf_startingAt_(value,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._indexOf_startingAt_(value,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($3,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
return $self._assert_equals_($recv($self._collection())._indexOf_startingAt_(value,$recv(index).__plus((1))),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIndexOfStartingAt",{jsNull:jsNull})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testIndexOfStartingAtWithNull",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOfStartingAtWithNull\x0a\x09| jsNull |\x0a\x09jsNull := JSON parse: 'null'.\x0a\x09self samplesDo: [ :index :value | | collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09collection at: index put: jsNull.\x0a\x09\x09self assert: (collection indexOf: jsNull startingAt: 1) equals: index.\x0a\x09\x09self assert: (collection indexOf: jsNull startingAt: index) equals: index.\x0a\x09\x09self assert: (collection indexOf: jsNull startingAt: index+1) equals: 0 ]",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "samplesDo:", "collection", "at:put:", "assert:equals:", "indexOf:startingAt:", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var jsNull;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
jsNull=$recv($globals.JSON)._parse_("null");
$self._samplesDo_((function(index,value){
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
collection=$self._collection();
$recv(collection)._at_put_(index,jsNull);
$1=$recv(collection)._indexOf_startingAt_(jsNull,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(collection)._indexOf_startingAt_(jsNull,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
return $self._assert_equals_($recv(collection)._indexOf_startingAt_(jsNull,$recv(index).__plus((1))),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value,collection:collection},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIndexOfStartingAtWithNull",{jsNull:jsNull})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testLast",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLast\x0a\x09self assert: self collection last equals: self collectionLast",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "last", "collection", "collectionLast"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self._collection())._last(),$self._collectionLast());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLast",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testLastN",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLastN\x0a\x09self \x0a\x09\x09assert: (self collection last: 2) \x0a\x09\x09equals: self collectionLastTwo.\x0a\x09\x09\x0a\x09self\x0a\x09\x09assert: (self collection last: 0)\x0a\x09\x09equals: self collectionClass new.\x0a\x0a\x09self\x0a\x09\x09assert: (self collection last: self collectionSize)\x0a\x09\x09equals: self collection.\x0a\x0a\x09self should: [ self collection last: 33 ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "last:", "collection", "collectionLastTwo", "new", "collectionClass", "collectionSize", "should:raise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$7;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._last_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$self._collectionLastTwo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._last_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($3,$recv($self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$6=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._last_($self._collectionSize());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last:"]=3;
//>>excludeEnd("ctx");
$7=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$7);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._collection())._last_((33));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLastN",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testSecond",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSecond\x0a\x09self assert: (self collection second) equals: (self collection at: 2)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "second", "collection", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._second();
$self._assert_equals_($1,$recv($self._collection())._at_((2)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSecond",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testThird",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testThird\x0a\x09self assert: (self collection third) equals: (self collection at: 3)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "third", "collection", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._third();
$self._assert_equals_($1,$recv($self._collection())._at_((3)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testThird",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollectionTest);



$core.addClass("ArrayTest", $globals.SequenceableCollectionTest, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "collection",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ #(1 2 3 -4)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [(1), (2), (3), (-4)];

}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionFirst",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirst\x0a\x09^ 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (1);

}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionFirstTwo",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirstTwo\x0a\x09^ #(1 2)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [(1), (2)];

}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionLast",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLast\x0a\x09^ -4",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (-4);

}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionLastTwo",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLastTwo\x0a\x09^ #(3 -4)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [(3), (-4)];

}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09^ #('1' '2' '3' '-4')",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["1", "2", "3", "-4"];

}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09^ 4",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (4);

}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09^ #('a' 'b' 'c' 1 2 1 'a' ())",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["a", "b", "c", (1), (2), (1), "a", []];

}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09^ #(1 2 3 -4 'N')",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [(1), (2), (3), (-4), "N"];

}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "sampleNewIndex",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewIndex\x0a\x09^ 5",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (5);

}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09super samplesDo: aBlock.\x0a\x09aBlock value: 3 value: 3.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["samplesDo:", "value:value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._samplesDo_.call($self,aBlock));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aBlock)._value_value_((3),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testAdd",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAdd \x0a\x09| array | \x0a\x09array := self collection. \x0a\x09array add: 6.\x0a\x09\x0a\x09self assert: array last equals: 6",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collection", "add:", "assert:equals:", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
array=$self._collection();
$recv(array)._add_((6));
$self._assert_equals_($recv(array)._last(),(6));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAdd",{array:array})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testAddFirst",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddFirst\x0a\x09self assert: (self collection addFirst: 0; yourself) first equals: 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "first", "addFirst:", "collection", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$self._collection();
$recv($3)._addFirst_((0));
$2=$recv($3)._yourself();
$1=$recv($2)._first();
$self._assert_equals_($1,(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddFirst",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testPrintString",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrintString\x0a\x09| array |\x0a\x09array := Array new.\x0a\x09self assert: array printString equals: 'an Array ()'.\x0a\x09array add: 1; add: 3.\x0a\x09self assert: array printString equals: 'an Array (1 3)'.\x0a\x09array add: 'foo'.\x0a\x09self assert: array printString equals: 'an Array (1 3 ''foo'')'.\x0a\x09array remove: 1; remove: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'')'.\x0a\x09array addLast: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'' 3)'.\x0a\x09array addLast: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'' 3 3)'.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:", "addLast:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
array=$recv($globals.Array)._new();
$1=$recv(array)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"an Array ()");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=array;
$recv($2)._add_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$3=$recv(array)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($3,"an Array (1 3)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(array)._add_("foo");
$4=$recv(array)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($4,"an Array (1 3 'foo')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$5=array;
$recv($5)._remove_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:"]=1;
//>>excludeEnd("ctx");
$recv($5)._remove_((3));
$6=$recv(array)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($6,"an Array ('foo')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$recv(array)._addLast_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addLast:"]=1;
//>>excludeEnd("ctx");
$7=$recv(array)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_($7,"an Array ('foo' 3)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$recv(array)._addLast_((3));
$self._assert_equals_($recv(array)._printString(),"an Array ('foo' 3 3)");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrintString",{array:array})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testRemove",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemove \x0a\x09| array |\x0a\x09array := #(1 2 3 4 5). \x0a\x09array remove: 3.\x0a\x0a\x09self assert: array equals: #(1 2 4 5).\x0a\x09self should: [ array remove: 3 ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["remove:", "assert:equals:", "should:raise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
array=[(1), (2), (3), (4), (5)];
$recv(array)._remove_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_(array,[(1), (2), (4), (5)]);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(array)._remove_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemove",{array:array})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testRemoveFromTo",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveFromTo\x0a\x09\x0a\x09self assert: (#(1 2 3 4) removeFrom: 1 to: 3) equals: #(4).\x0a\x09self assert: (#(1 2 3 4) removeFrom: 2 to: 3) equals: #(1 4).\x0a\x09self assert: (#(1 2 3 4) removeFrom: 2 to: 4) equals: #(1)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "removeFrom:to:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=[(1), (2), (3), (4)]._removeFrom_to_((1),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeFrom:to:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,[(4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=[(1), (2), (3), (4)]._removeFrom_to_((2),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeFrom:to:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,[(1), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_([(1), (2), (3), (4)]._removeFrom_to_((2),(4)),[(1)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveFromTo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testRemoveIndex",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveIndex\x0a\x09\x0a\x09self assert: (#(1 2 3 4) removeIndex: 2) equals: #(1 3 4).\x0a\x09self assert: (#(1 2 3 4) removeIndex: 1) equals: #(2 3 4).\x0a\x09self assert: (#('hello') removeIndex: 1) equals: #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "removeIndex:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=[(1), (2), (3), (4)]._removeIndex_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeIndex:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,[(1), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=[(1), (2), (3), (4)]._removeIndex_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeIndex:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,[(2), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_(["hello"]._removeIndex_((1)),[]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveIndex",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testRemoveLast",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveLast \x0a\x09| array |\x0a\x09array := #(1 2). \x0a\x09array removeLast.\x0a\x09\x0a\x09self assert: array last equals: 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["removeLast", "assert:equals:", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
array=[(1), (2)];
$recv(array)._removeLast();
$self._assert_equals_($recv(array)._last(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveLast",{array:array})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testReversed",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReversed\x0a\x09|array|\x0a\x09array := #(5 4 3 2 1). \x0a\x09self assert: (array reversed) equals: #(1 2 3 4 5)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "reversed"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
array=[(5), (4), (3), (2), (1)];
$self._assert_equals_($recv(array)._reversed(),[(1), (2), (3), (4), (5)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReversed",{array:array})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testSort",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSort\x0a\x09| array |\x0a\x09array := #(10 1 5). \x0a\x09array sort.\x0a\x09self assert: array equals: #(1 5 10)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sort", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
array=[(10), (1), (5)];
$recv(array)._sort();
$self._assert_equals_(array,[(1), (5), (10)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSort",{array:array})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ Array",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.Array;

}; }),
$globals.ArrayTest.a$cls);


$core.addClass("StringTest", $globals.SequenceableCollectionTest, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "collection",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ 'helLo'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "helLo";

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionFirst",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirst\x0a\x09^ 'h'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "h";

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionFirstTwo",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirstTwo\x0a\x09^ 'he'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "he";

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionLast",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLast\x0a\x09^ 'o'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "o";

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionLastTwo",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLastTwo\x0a\x09^ 'Lo'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "Lo";

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09^ '''h''''e''''l''''L''''o'''",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "'h''e''l''L''o'";

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09^ 5",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (5);

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09^ 'abbaerten'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "abbaerten";

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09^ 'helLoN'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "helLoN";

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "sampleNewValueAsCollection",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewValueAsCollection\x0a\x09^ 'N'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "N";

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09super samplesDo: aBlock.\x0a\x09aBlock value: 3 value: 'l'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["samplesDo:", "value:value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._samplesDo_.call($self,aBlock));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aBlock)._value_value_((3),"l");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAddAll",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddAll\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: [ self collection addAll: self collection ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "addAll:", "collection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
return $recv($1)._addAll_($self._collection());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAddRemove",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddRemove\x0a\x09self should: [ 'hello' add: 'a' ] raise: Error.\x0a\x09self should: [ 'hello' remove: 'h' ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "add:", "remove:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "hello"._add_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "hello"._remove_("h");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAsArray",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsArray\x0a\x09self assert: 'hello' asArray equals: #('h' 'e' 'l' 'l' 'o').",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "asArray"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_("hello"._asArray(),["h", "e", "l", "l", "o"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsArray",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAsLowerCase",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsLowerCase\x0a\x09self assert: 'JACKIE' asLowercase equals: 'jackie'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "asLowercase"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_("JACKIE"._asLowercase(),"jackie");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsLowerCase",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAsNumber",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsNumber\x0a\x09self assert: '3' asNumber equals: 3.\x0a\x09self assert: '-3' asNumber equals: -3.\x0a\x09self assert: '-1.5' asNumber equals: -1.5.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "asNumber"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1="3"._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asNumber"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2="-3"._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asNumber"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(-3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_("-1.5"._asNumber(),(-1.5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsNumber",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAsUpperCase",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsUpperCase\x0a\x09self assert: 'jackie' asUppercase equals: 'JACKIE'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "asUppercase"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_("jackie"._asUppercase(),"JACKIE");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsUpperCase",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAsciiValue",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsciiValue\x0a    | characterA characterU |\x0a    characterA := 'A'.\x0a    characterU := 'U'.\x0a    self assert: (characterA asciiValue) equals:65.\x0a    self assert: (characterU asciiValue) equals:85",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "asciiValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var characterA,characterU;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
characterA="A";
characterU="U";
$1=$recv(characterA)._asciiValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asciiValue"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(65));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(characterU)._asciiValue(),(85));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsciiValue",{characterA:characterA,characterU:characterU})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAtIfAbsentPut",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfAbsentPut\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: [ 'hello' at: 6 ifAbsentPut: [ 'a' ] ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "at:ifAbsentPut:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "hello"._at_ifAbsentPut_((6),(function(){
return "a";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsentPut",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAtPut",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtPut\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: [ 'hello' at: 1 put: 'a' ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "at:put:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "hello"._at_put_((1),"a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtPut",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testCapitalized",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCapitalized\x0a\x09self assert: 'test' capitalized equals: 'Test'.\x0a\x09self assert: 'Test' capitalized equals: 'Test'.\x0a\x09self assert: '' capitalized equals: ''.\x0a\x09self assert: 'Test' isCapitalized equals: true.\x0a\x09self assert: 'test' isCapitalized equals: false.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "capitalized", "isCapitalized"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1="test"._capitalized();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["capitalized"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"Test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2="Test"._capitalized();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["capitalized"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,"Test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_(""._capitalized(),"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$3="Test"._isCapitalized();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isCapitalized"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($3,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_("test"._isCapitalized(),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCapitalized",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testCharCodeAt",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCharCodeAt\x0a\x09self assert: ('jackie' charCodeAt:1) equals: 106.\x0a\x09self assert: ('jackie' charCodeAt:2) equals: 97.\x0a\x09self assert: ('jackie' charCodeAt:3) equals: 99.\x0a\x09self assert: ('jackie' charCodeAt:4) equals: 107.\x0a\x09self assert: ('jackie' charCodeAt:5) equals: 105.\x0a\x09self assert: ('jackie' charCodeAt:6) equals: 101",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "charCodeAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1="jackie"._charCodeAt_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charCodeAt:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(106));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2="jackie"._charCodeAt_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charCodeAt:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(97));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3="jackie"._charCodeAt_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charCodeAt:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($3,(99));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4="jackie"._charCodeAt_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charCodeAt:"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($4,(107));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5="jackie"._charCodeAt_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charCodeAt:"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_($5,(105));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_("jackie"._charCodeAt_((6)),(101));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCharCodeAt",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testCopyFromTo",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopyFromTo\x0a\x09self assert: ('jackie' copyFrom: 1 to: 3) equals: 'jac'.\x0a\x09self assert: ('jackie' copyFrom: 4 to: 6) equals: 'kie'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "copyFrom:to:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="jackie"._copyFrom_to_((1),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"jac");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_("jackie"._copyFrom_to_((4),(6)),"kie");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopyFromTo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testCopySeparates",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopySeparates\x0a\x09\x22String instances are immutable\x22\x0a\x09self assert: self collection copy == self collection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "==", "copy", "collection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._copy();
$1=$recv($2).__eq_eq($self._collection());
$self._assert_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopySeparates",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testCopyWithoutAll",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopyWithoutAll\x0a\x09self\x0a\x09\x09assert: ('*hello* *world*' copyWithoutAll: '*')\x0a\x09\x09equals: 'hello world'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "copyWithoutAll:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_("*hello* *world*"._copyWithoutAll_("*"),"hello world");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopyWithoutAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testEquality",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09self assert: 'hello' equals: 'hello'.\x0a\x09self deny: 'hello' = 'world'.\x0a\x09\x0a\x09\x22Test for issue 459\x22\x0a\x09self deny: 'hello' = (#() at: 1 ifAbsent: [ ]).\x0a\x0a\x09self assert: 'hello' equals: 'hello' yourself.\x0a\x09self assert: 'hello' yourself equals: 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' = 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "deny:", "=", "at:ifAbsent:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$self._assert_equals_("hello","hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$1="hello".__eq("world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$2="hello".__eq([]._at_ifAbsent_((1),(function(){

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$3="hello"._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_("hello",$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_("hello"._yourself(),"hello");
$self._deny_("".__eq((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIdentity",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentity\x0a\x09self assert: 'hello' == 'hello'.\x0a\x09self deny: 'hello' == 'world'.\x0a\x0a\x09self assert: 'hello' == 'hello' yourself.\x0a\x09self assert: 'hello' yourself == 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' == 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "==", "deny:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
$1="hello".__eq_eq("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2="hello".__eq_eq("world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
$self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$4="hello"._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3="hello".__eq_eq($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=3;
//>>excludeEnd("ctx");
$self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$5=$recv("hello"._yourself()).__eq_eq("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=4;
//>>excludeEnd("ctx");
$self._assert_($5);
$self._deny_("".__eq_eq((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentity",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIncludesSubString",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIncludesSubString\x0a\x09self assert: ('amber' includesSubString: 'ber').\x0a\x09self deny: ('amber' includesSubString: 'zork').",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "includesSubString:", "deny:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="amber"._includesSubString_("ber");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includesSubString:"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
$self._deny_("amber"._includesSubString_("zork"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIncludesSubString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIndexOfStartingAtWithNull",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOfStartingAtWithNull\x0a\x09\x22String cannot hold JS null\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIndexOfWithNull",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOfWithNull\x0a\x09\x22String cannot hold JS null\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIsVowel",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsVowel\x0a    |vowel consonant|\x0a    vowel := 'u'.\x0a    consonant := 'z'.\x0a    self assert: vowel isVowel equals: true.\x0a    self assert: consonant isVowel equals: false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "isVowel"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var vowel,consonant;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
vowel="u";
consonant="z";
$1=$recv(vowel)._isVowel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isVowel"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(consonant)._isVowel(),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsVowel",{vowel:vowel,consonant:consonant})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testJoin",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testJoin\x0a\x09self assert: (',' join: #('hello' 'world')) equals: 'hello,world'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "join:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_(","._join_(["hello", "world"]),"hello,world");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testJoin",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testRegression1224",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRegression1224\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: [ (self collectionClass new\x0a\x09\x09remove: self sampleNewValue ifAbsent: [];\x0a\x09\x09yourself) size ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "size", "remove:ifAbsent:", "new", "collectionClass", "sampleNewValue", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($self._collectionClass())._new();
$recv($2)._remove_ifAbsent_($self._sampleNewValue(),(function(){

}));
$1=$recv($2)._yourself();
return $recv($1)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRegression1224",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testRemoveAll",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveAll\x0a\x09self should: [ self collection removeAll ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "removeAll", "collection"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._collection())._removeAll();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testReversed",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReversed\x0a\x09self assert: 'jackiechan' reversed equals: 'nahceikcaj'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "reversed"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_("jackiechan"._reversed(),"nahceikcaj");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReversed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testStreamContents",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStreamContents\x0a\x09self\x0a\x09\x09assert: (String streamContents: [ :aStream |\x0a\x09\x09\x09aStream\x0a\x09\x09\x09\x09nextPutAll: 'hello'; space;\x0a\x09\x09\x09\x09nextPutAll: 'world' ])\x0a\x09\x09equals: 'hello world'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($globals.String)._streamContents_((function(aStream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._space();
return $recv(aStream)._nextPutAll_("world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aStream:aStream},$ctx1,1)});
//>>excludeEnd("ctx");
})),"hello world");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStreamContents",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testSubStrings",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSubStrings\x0a\x09self assert: ('jackiechan' subStrings: 'ie') equals: #( 'jack' 'chan' ).",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "subStrings:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_("jackiechan"._subStrings_("ie"),["jack", "chan"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSubStrings",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testTrim",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTrim\x0a\x09self assert: '       jackie' trimLeft equals: 'jackie'.\x0a\x09self assert: 'jackie               ' trimRight equals: 'jackie'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "trimLeft", "trimRight"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_("       jackie"._trimLeft(),"jackie");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_("jackie               "._trimRight(),"jackie");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTrim",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testValue",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValue\x0a\x0a\x09self assert: (#asString value: 1) equals: '1'.\x0a\x0a\x09\x22Which (since String and BlockClosure are now polymorphic) enables the nice idiom...\x22\x0a\x09self assert: (#(1 2 3) collect: #asString) equals: #('1' '2' '3')",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "value:", "collect:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_("asString"._value_((1)),"1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_([(1), (2), (3)]._collect_("asString"),["1", "2", "3"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ String",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.String;

}; }),
$globals.StringTest.a$cls);


$core.addClass("SetTest", $globals.CollectionTest, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "collection",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ Set new\x0a\x09\x09add: Smalltalk;\x0a\x09\x09add: nil;\x0a\x09\x09add: 3@3;\x0a\x09\x09add: false;\x0a\x09\x09add: sampleBlock;\x0a\x09\x09yourself",
referencedClasses: ["Set", "Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "new", "@", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Set)._new();
$recv($1)._add_($globals.Smalltalk);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($1)._add_((3).__at((3)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv($1)._add_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv($1)._add_($self.sampleBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09^ Set new\x0a\x09\x09add: 'a SmalltalkImage';\x0a\x09\x09add: 'nil';\x0a\x09\x09add: '3@3';\x0a\x09\x09add: 'false';\x0a\x09\x09add: 'a BlockClosure';\x0a\x09\x09yourself",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Set)._new();
$recv($1)._add_("a SmalltalkImage");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_("nil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($1)._add_("3@3");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv($1)._add_("false");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv($1)._add_("a BlockClosure");
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionOfPrintStrings",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09^ 5",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (5);

}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09\x22Set has no duplicates\x22\x0a\x09^ self collection add: 0; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "collection", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._collection();
$recv($1)._add_((0));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09^ Set new\x0a\x09\x09add: Smalltalk;\x0a\x09\x09add: nil;\x0a\x09\x09add: 3@3;\x0a\x09\x09add: 'N';\x0a\x09\x09add: false;\x0a\x09\x09add: sampleBlock;\x0a\x09\x09yourself",
referencedClasses: ["Set", "Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "new", "@", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Set)._new();
$recv($1)._add_($globals.Smalltalk);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($1)._add_((3).__at((3)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv($1)._add_("N");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv($1)._add_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=5;
//>>excludeEnd("ctx");
$recv($1)._add_($self.sampleBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testAddAll",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddAll\x0a\x09super testAddAll.\x0a\x09self assert: (self collection addAll: self collection; yourself) equals: self collection.\x0a\x09self assert: (self collection addAll: self collectionWithNewValue; yourself) equals: self collectionWithNewValue.\x0a\x09self assert: (self collectionWithNewValue addAll: self collection; yourself) equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["testAddAll", "assert:equals:", "addAll:", "collection", "yourself", "collectionWithNewValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$5,$7,$8,$9,$6,$10,$12,$11;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._testAddAll.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$3=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$recv($2)._addAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
$4=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$1=$4;
$5=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$7=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$8=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$recv($7)._addAll_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=2;
//>>excludeEnd("ctx");
$9=$recv($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$6=$9;
$10=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($6,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$12=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=3;
//>>excludeEnd("ctx");
$recv($12)._addAll_($self._collection());
$11=$recv($12)._yourself();
$self._assert_equals_($11,$self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testAddRemove",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddRemove\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09\x0a\x09self assert: set isEmpty.\x0a\x0a\x09set add: 3.\x0a\x09self assert: (set includes: 3).\x0a\x0a\x09set add: 5.\x0a\x09self assert: (set includes: 5).\x0a\x0a\x09set remove: 3.\x0a\x09self deny: (set includes: 3)",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "assert:", "isEmpty", "add:", "includes:", "remove:", "deny:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var set;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
set=$recv($globals.Set)._new();
$self._assert_($recv(set)._isEmpty());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$recv(set)._add_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$1=$recv(set)._includes_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$recv(set)._add_((5));
$2=$recv(set)._includes_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=2;
//>>excludeEnd("ctx");
$self._assert_($2);
$recv(set)._remove_((3));
$self._deny_($recv(set)._includes_((3)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{set:set})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testAt",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAt\x0a\x09self should: [ Set new at: 1 put: 2 ] raise: Error",
referencedClasses: ["Set", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "at:put:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Set)._new())._at_put_((1),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAt",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testCollect",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCollect\x0a\x09super testCollect.\x0a\x09self assert: (#(5 6 8) asSet collect: [ :x | x \x5c\x5c 3 ]) equals: #(0 2) asSet",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["testCollect", "assert:equals:", "collect:", "asSet", "\x5c\x5c"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._testCollect.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=[(5), (6), (8)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._collect_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x).__backslash_backslash((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_($1,[(0), (2)]._asSet());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCollect",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testComma",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComma\x0a\x09super testComma.\x0a\x09self assert: self collection, self collection equals: self collection.\x0a\x09self assert: self collection, self collectionWithNewValue equals: self collectionWithNewValue.\x0a\x09self assert: self collectionWithNewValue, self collection equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["testComma", "assert:equals:", ",", "collection", "collectionWithNewValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$6,$7,$5,$8,$10,$9;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._testComma.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$3=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$7=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$8=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$10=$self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__comma($self._collection());
$self._assert_equals_($9,$self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComma",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testComparing",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComparing\x0a\x09self assert: #(0 2) asSet equals: #(0 2) asSet.\x0a\x09self assert: #(2 0) asSet equals: #(0 2) asSet.\x0a\x09self deny: #(0 2 3) asSet = #(0 2) asSet.\x0a\x09self deny: #(1 2) asSet = #(0 2) asSet",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "asSet", "deny:", "="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$7,$5,$9,$8;
$1=[(0), (2)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=1;
//>>excludeEnd("ctx");
$2=[(0), (2)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=[(2), (0)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=3;
//>>excludeEnd("ctx");
$4=[(0), (2)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($3,$4);
$6=[(0), (2), (3)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=5;
//>>excludeEnd("ctx");
$7=[(0), (2)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=6;
//>>excludeEnd("ctx");
$5=$recv($6).__eq($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._deny_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$9=[(1), (2)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=7;
//>>excludeEnd("ctx");
$8=$recv($9).__eq([(0), (2)]._asSet());
$self._deny_($8);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComparing",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testPrintString",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrintString\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09self assert: set printString equals: 'a Set ()'.\x0a\x09set add: 1; add: 3.\x0a\x09self assert: set printString equals: 'a Set (1 3)'.\x0a\x09set add: 'foo'.\x0a\x09self assert: set printString equals: 'a Set (1 3 ''foo'')'.\x0a\x09set remove: 1; remove: 3.\x0a\x09self assert: set printString equals: 'a Set (''foo'')'.\x0a\x09set add: 3.\x0a\x09self assert: set printString equals: 'a Set (3 ''foo'')'.\x0a\x09set add: 3.\x0a\x09self assert: set printString equals: 'a Set (3 ''foo'')'",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var set;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
set=$recv($globals.Set)._new();
$1=$recv(set)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"a Set ()");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=set;
$recv($2)._add_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$3=$recv(set)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($3,"a Set (1 3)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(set)._add_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$4=$recv(set)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($4,"a Set (1 3 'foo')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$5=set;
$recv($5)._remove_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:"]=1;
//>>excludeEnd("ctx");
$recv($5)._remove_((3));
$6=$recv(set)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($6,"a Set ('foo')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$recv(set)._add_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$7=$recv(set)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_($7,"a Set (3 'foo')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$recv(set)._add_((3));
$self._assert_equals_($recv(set)._printString(),"a Set (3 'foo')");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrintString",{set:set})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testRegression1225",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRegression1225\x0a\x09self assert: (#(1 2 3) asSet add: 3) equals: 3",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "add:", "asSet"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv([(1), (2), (3)]._asSet())._add_((3)),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRegression1225",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testRegression1226",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRegression1226\x0a\x09self assert: (#(1 2 3) asSet remove: 3) equals: 3",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "remove:", "asSet"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv([(1), (2), (3)]._asSet())._remove_((3)),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRegression1226",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testRegression1227",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRegression1227\x0a\x09self assert: (#(1 2 3) asSet remove: 4 ifAbsent: [5]) equals: 5",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "remove:ifAbsent:", "asSet"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv([(1), (2), (3)]._asSet())._remove_ifAbsent_((4),(function(){
return (5);

})),(5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRegression1227",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testRegression1228",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRegression1228\x0a\x09self should: [#(1 2 3) asSet remove: 4] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "remove:", "asSet"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([(1), (2), (3)]._asSet())._remove_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRegression1228",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testRegression1245",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRegression1245\x0a\x09self assert: ({Object. String} asSet remove: String) equals: String",
referencedClasses: ["Object", "String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "remove:", "asSet"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($recv([$globals.Object,$globals.String])._asSet())._remove_($globals.String),$globals.String);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRegression1245",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testUnboxedObjects",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnboxedObjects\x0a\x09self assert: {'foo' yourself. 'foo' yourself} asSet asArray equals: #('foo')",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "asArray", "asSet", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4="foo"._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3=[$4,"foo"._yourself()];
$2=$recv($3)._asSet();
$1=$recv($2)._asArray();
$self._assert_equals_($1,["foo"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnboxedObjects",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testUnicity",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnicity\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09set add: 21.\x0a\x09set add: 'hello'.\x0a\x0a\x09set add: 21.\x0a\x09self assert: set size equals: 2.\x0a\x09\x0a\x09set add: 'hello'.\x0a\x09self assert: set size equals: 2.\x0a\x0a\x09self assert: set asArray equals: #(21 'hello')",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "add:", "assert:equals:", "size", "asArray"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var set;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
set=$recv($globals.Set)._new();
$recv(set)._add_((21));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(set)._add_("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv(set)._add_((21));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$1=$recv(set)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(set)._add_("hello");
$self._assert_equals_($recv(set)._size(),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(set)._asArray(),[(21), "hello"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnicity",{set:set})});
//>>excludeEnd("ctx");
}; }),
$globals.SetTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ Set",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.Set;

}; }),
$globals.SetTest.a$cls);


$core.addClass("ConsoleTranscriptTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testShow",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testShow\x0a| originalTranscript |\x0aoriginalTranscript := Transcript current.\x0aTranscript register: ConsoleTranscript new.\x0a\x0aself shouldnt: [ Transcript show: 'Hello console!' ] raise: Error.\x0aself shouldnt: [ Transcript show: console ] raise: Error.\x0a\x0aTranscript register: originalTranscript.",
referencedClasses: ["Transcript", "ConsoleTranscript", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["current", "register:", "new", "shouldnt:raise:", "show:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var originalTranscript;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
originalTranscript=$recv($globals.Transcript)._current();
$recv($globals.Transcript)._register_($recv($globals.ConsoleTranscript)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["register:"]=1;
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Transcript)._show_("Hello console!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shouldnt:raise:"]=1;
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Transcript)._show_(console);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
$recv($globals.Transcript)._register_(originalTranscript);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testShow",{originalTranscript:originalTranscript})});
//>>excludeEnd("ctx");
}; }),
$globals.ConsoleTranscriptTest);



$core.addClass("DateTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testEquality",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09| now |\x0a\x09now := Date new.\x0a\x0a\x09self assert: now = now.\x0a\x0a\x09self deny: now = (Date fromMilliseconds: 0).\x0a\x0a\x09self assert: (Date fromMilliseconds: 12345678) = (Date fromMilliseconds: 12345678).\x0a\x09self assert: now = (Date fromMilliseconds: now asMilliseconds).\x0a\x09self assert: (Date fromMilliseconds: now asMilliseconds) = now",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "assert:", "=", "deny:", "fromMilliseconds:", "asMilliseconds"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var now;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$6,$7,$5,$9,$11,$10,$8;
now=$recv($globals.Date)._new();
$1=$recv(now).__eq(now);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$3=now;
$4=$recv($globals.Date)._fromMilliseconds_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromMilliseconds:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$self._deny_($2);
$6=$recv($globals.Date)._fromMilliseconds_((12345678));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromMilliseconds:"]=2;
//>>excludeEnd("ctx");
$7=$recv($globals.Date)._fromMilliseconds_((12345678));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromMilliseconds:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
$self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$9=now;
$11=$recv(now)._asMilliseconds();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asMilliseconds"]=1;
//>>excludeEnd("ctx");
$10=$recv($globals.Date)._fromMilliseconds_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromMilliseconds:"]=4;
//>>excludeEnd("ctx");
$8=$recv($9).__eq($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
$self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$self._assert_($recv($recv($globals.Date)._fromMilliseconds_($recv(now)._asMilliseconds())).__eq(now));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{now:now})});
//>>excludeEnd("ctx");
}; }),
$globals.DateTest);

$core.addMethod(
$core.method({
selector: "testIdentity",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentity\x0a\x09| now |\x0a\x09now := Date new.\x0a\x0a\x09self assert: now == now.\x0a\x0a\x09self deny: now == (Date fromMilliseconds: 0).\x0a\x0a\x09self deny: (Date fromMilliseconds: 12345678) == (Date fromMilliseconds: 12345678).\x0a\x09self deny: now == (Date fromMilliseconds: now asMilliseconds).\x0a\x09self deny: (Date fromMilliseconds: now asMilliseconds) == now",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "assert:", "==", "deny:", "fromMilliseconds:", "asMilliseconds"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var now;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$6,$7,$5,$9,$11,$10,$8;
now=$recv($globals.Date)._new();
$1=$recv(now).__eq_eq(now);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
$3=now;
$4=$recv($globals.Date)._fromMilliseconds_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromMilliseconds:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq_eq($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
$self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$6=$recv($globals.Date)._fromMilliseconds_((12345678));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromMilliseconds:"]=2;
//>>excludeEnd("ctx");
$7=$recv($globals.Date)._fromMilliseconds_((12345678));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromMilliseconds:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq_eq($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=3;
//>>excludeEnd("ctx");
$self._deny_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$9=now;
$11=$recv(now)._asMilliseconds();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asMilliseconds"]=1;
//>>excludeEnd("ctx");
$10=$recv($globals.Date)._fromMilliseconds_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromMilliseconds:"]=4;
//>>excludeEnd("ctx");
$8=$recv($9).__eq_eq($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=4;
//>>excludeEnd("ctx");
$self._deny_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$self._deny_($recv($recv($globals.Date)._fromMilliseconds_($recv(now)._asMilliseconds())).__eq_eq(now));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentity",{now:now})});
//>>excludeEnd("ctx");
}; }),
$globals.DateTest);

$core.addMethod(
$core.method({
selector: "testPlusAndMinus",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPlusAndMinus\x0a\x09| a b now zeroDuration |\x0a\x09a := Date fromString: '1974-07-12 14:30'.\x0a\x09now := Date now.\x0a\x09b := Date fromString: '2616-03-06'.\x0a\x09zeroDuration := 0.\x0a\x0a\x09self assert: {a-a. now-now. b-b} asSet equals: (Set with: zeroDuration).\x0a\x09self assert: now + (b - now) equals: b.\x0a\x09self assert: a + (b - a) equals: b.\x0a\x09self assert: now + (a - now) equals: a.\x0a\x09self assert: a + ((now - a) + (b - now)) equals: b",
referencedClasses: ["Date", "Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fromString:", "now", "assert:equals:", "asSet", "-", "with:", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var a,b,now,zeroDuration;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$5,$2,$1,$7,$8,$6,$10,$11,$9,$13,$14,$12,$16,$18,$17,$15;
a=$recv($globals.Date)._fromString_("1974-07-12 14:30");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromString:"]=1;
//>>excludeEnd("ctx");
now=$recv($globals.Date)._now();
b=$recv($globals.Date)._fromString_("2616-03-06");
zeroDuration=(0);
$3=$recv(a).__minus(a);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=$recv(now).__minus(now);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$5=$recv(b).__minus(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
$2=[$3,$4,$5];
$1=$recv($2)._asSet();
$self._assert_equals_($1,$recv($globals.Set)._with_(zeroDuration));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$7=now;
$8=$recv(b).__minus(now);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=4;
//>>excludeEnd("ctx");
$6=$recv($7).__plus($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($6,b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$10=a;
$11=$recv(b).__minus(a);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=5;
//>>excludeEnd("ctx");
$9=$recv($10).__plus($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($9,b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$13=now;
$14=$recv(a).__minus(now);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=6;
//>>excludeEnd("ctx");
$12=$recv($13).__plus($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($12,a);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$16=a;
$18=$recv(now).__minus(a);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=7;
//>>excludeEnd("ctx");
$17=$recv($18).__plus($recv(b).__minus(now));
$15=$recv($16).__plus($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($15,b);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPlusAndMinus",{a:a,b:b,now:now,zeroDuration:zeroDuration})});
//>>excludeEnd("ctx");
}; }),
$globals.DateTest);



$core.addClass("JSObjectProxyTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "jsObject",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsObject\x0a\x09<inlineJS: \x0a\x09\x09'return {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: \x22\x22, \x22e\x22: null, \x22f\x22: void 0}'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: \x22\x22, \x22e\x22: null, \x22f\x22: void 0}"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: "", "e": null, "f": void 0};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsObject",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "jsUndefined",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsUndefined\x0a\x09<inlineJS: 'return'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsUndefined",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testAtIfAbsent",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfAbsent\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09self assert: (testObject at: 'abc' ifAbsent: [ 'Property does not exist' ]) equals: 'Property does not exist'.\x0a\x09self assert: (testObject at: 'e' ifAbsent: [ 'Property does not exist' ]) equals: nil.\x0a\x09self assert: (testObject at: 'a' ifAbsent: [ 'Property does not exist' ]) equals: 1.\x0a\x09self assert: (testObject at: 'f' ifAbsent: [ 'Property does not exist' ]) equals: nil.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["jsObject", "assert:equals:", "at:ifAbsent:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var testObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
testObject=$self._jsObject();
$1=$recv(testObject)._at_ifAbsent_("abc",(function(){
return "Property does not exist";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"Property does not exist");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(testObject)._at_ifAbsent_("e",(function(){
return "Property does not exist";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(testObject)._at_ifAbsent_("a",(function(){
return "Property does not exist";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($3,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(testObject)._at_ifAbsent_("f",(function(){
return "Property does not exist";

})),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{testObject:testObject})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testAtIfPresent",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfPresent\x0a\x09| testObject |\x0a\x09\x0a\x09testObject := self jsObject.\x0a\x09\x0a\x09self assert: (testObject at: 'abc' ifPresent: [ :x | 'hello ',x asString ]) equals: nil.\x0a\x09self assert: (testObject at: 'e' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello nil'.\x0a\x09self assert: (testObject at: 'a' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello 1'.\x0a\x09self assert: (testObject at: 'f' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello nil'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:", ",", "asString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var testObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
testObject=$self._jsObject();
$1=$recv(testObject)._at_ifPresent_("abc",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
return "hello ".__comma($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=$recv(testObject)._at_ifPresent_("e",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
return "hello ".__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($3,"hello nil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$5=$recv(testObject)._at_ifPresent_("a",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=3;
//>>excludeEnd("ctx");
return "hello ".__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($5,"hello 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(testObject)._at_ifPresent_("f",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "hello ".__comma($recv(x)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,4)});
//>>excludeEnd("ctx");
})),"hello nil");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfPresent",{testObject:testObject})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testAtIfPresentIfAbsent",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfPresentIfAbsent\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09self assert: (testObject at: 'abc' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'not present'.\x0a\x09self assert: (testObject at: 'e' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello nil'.\x0a\x09self assert: (testObject at: 'a' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello 1'.\x0a\x09self assert: (testObject at: 'f' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello nil'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:ifAbsent:", ",", "asString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var testObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
testObject=$self._jsObject();
$1=$recv(testObject)._at_ifPresent_ifAbsent_("abc",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
return "hello ".__comma($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return "not present";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"not present");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=$recv(testObject)._at_ifPresent_ifAbsent_("e",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
return "hello ".__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,3)});
//>>excludeEnd("ctx");
}),(function(){
return "not present";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($3,"hello nil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$5=$recv(testObject)._at_ifPresent_ifAbsent_("a",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=3;
//>>excludeEnd("ctx");
return "hello ".__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,5)});
//>>excludeEnd("ctx");
}),(function(){
return "not present";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($5,"hello 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(testObject)._at_ifPresent_ifAbsent_("f",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "hello ".__comma($recv(x)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,7)});
//>>excludeEnd("ctx");
}),(function(){
return "not present";

})),"hello nil");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfPresentIfAbsent",{testObject:testObject})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testAtPut",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtPut\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09\x0a\x09self assert: (testObject at: 'abc') ~= 'xyz'.\x0a\x09self assert: (testObject at: 'abc' put: 'xyz') equals: 'xyz'.\x0a\x09self assert: (testObject at: 'abc') equals: 'xyz'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["jsObject", "assert:", "~=", "at:", "assert:equals:", "at:put:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var testObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
testObject=$self._jsObject();
$2=$recv(testObject)._at_("abc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__tild_eq("xyz");
$self._assert_($1);
$self._assert_equals_($recv(testObject)._at_put_("abc","xyz"),"xyz");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(testObject)._at_("abc"),"xyz");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtPut",{testObject:testObject})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testComparison",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComparison\x0a\x09self assert: ({ console. 2 } indexOf: console) equals: 1.\x0a\x09self assert: console = console.\x0a\x09self deny: console = Object new.\x0a\x09self deny: console = self jsObject",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "indexOf:", "assert:", "=", "deny:", "new", "jsObject"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$self._assert_equals_($recv([console,(2)])._indexOf_(console),(1));
$1=$recv(console).__eq(console);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
$2=$recv(console).__eq($recv($globals.Object)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$self._deny_($recv(console).__eq($self._jsObject()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComparison",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testDNU",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDNU\x0a\x09self should: [ self jsObject foo ] raise: MessageNotUnderstood",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "foo", "jsObject"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._jsObject())._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDNU",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testDNUWithAllowJavaScriptCalls",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDNUWithAllowJavaScriptCalls\x0a\x09| jsObject |\x0a\x09jsObject := #().\x0a\x09jsObject basicAt: 'allowJavaScriptCalls' put: true.\x0a\x09self should: [ jsObject foo ] raise: MessageNotUnderstood",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["basicAt:put:", "should:raise:", "foo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var jsObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
jsObject=[];
$recv(jsObject)._basicAt_put_("allowJavaScriptCalls",true);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(jsObject)._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDNUWithAllowJavaScriptCalls",{jsObject:jsObject})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testMessageSend",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMessageSend\x0a\x0a\x09self assert: self jsObject a equals: 1.\x0a\x09self assert: self jsObject b equals: 2.\x0a\x09self assert: (self jsObject c: 3) equals: 3",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "a", "jsObject", "b", "c:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=$self._jsObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["jsObject"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._a();
$self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=$self._jsObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["jsObject"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._b();
$self._assert_equals_($3,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self._jsObject())._c_((3)),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testMethodWithArguments",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMethodWithArguments\x0a\x09self assert: (self jsObject c: 1) equals: 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "c:", "jsObject"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self._jsObject())._c_((1)),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMethodWithArguments",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testNull",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNull\x0a\x09self assert: JSObjectProxy null isNil.\x0a\x09self\x0a\x09\x09assert: (JSON stringify: #{#foo -> JSObjectProxy null})\x0a\x09\x09equals: '{\x22foo\x22:null}'",
referencedClasses: ["JSObjectProxy", "JSON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "isNil", "null", "assert:equals:", "stringify:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($globals.JSObjectProxy)._null();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["null"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isNil();
$self._assert_($1);
$self._assert_equals_($recv($globals.JSON)._stringify_($globals.HashedCollection._newFromPairs_(["foo",$recv($globals.JSObjectProxy)._null()])),"{\x22foo\x22:null}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNull",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testPrinting",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrinting\x0a\x09self assert: self jsObject printString equals: '[object Object]'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "printString", "jsObject"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self._jsObject())._printString(),"[object Object]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrinting",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testPropertyThatReturnsEmptyString",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPropertyThatReturnsEmptyString\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self assert: object d equals: ''.\x0a\x0a\x09object d: 'hello'.\x0a\x09self assert: object d equals: 'hello'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["jsObject", "assert:equals:", "d", "d:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var object;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
object=$self._jsObject();
$1=$recv(object)._d();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["d"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(object)._d_("hello");
$self._assert_equals_($recv(object)._d(),"hello");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsEmptyString",{object:object})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testPropertyThatReturnsUndefined",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPropertyThatReturnsUndefined\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self shouldnt: [ object e ] raise: MessageNotUnderstood.\x0a\x09self assert: object e isNil",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["jsObject", "shouldnt:raise:", "e", "assert:", "isNil"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var object;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
object=$self._jsObject();
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(object)._e();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["e"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
$self._assert_($recv($recv(object)._e())._isNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsUndefined",{object:object})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testSetPropertyWithFalsyValue",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSetPropertyWithFalsyValue\x0a\x09| jsObject |\x0a\x09jsObject := self jsObject.\x0a\x09self assert: (jsObject a) equals: 1.\x0a\x0a\x09jsObject a: JSObjectProxy null.\x0a\x09self assert: (jsObject a) equals: nil.\x0a\x09jsObject a: 0.\x0a\x09self assert: (jsObject a) equals: 0.\x0a\x09jsObject a: self jsUndefined.\x0a\x09self assert: (jsObject a) equals: nil.\x0a\x09jsObject a: ''.\x0a\x09self assert: (jsObject a) equals: ''.\x0a\x09jsObject a: false.\x0a\x09self assert: (jsObject a) equals: false",
referencedClasses: ["JSObjectProxy"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["jsObject", "assert:equals:", "a", "a:", "null", "jsUndefined"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var jsObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
jsObject=$self._jsObject();
$1=$recv(jsObject)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(jsObject)._a_($recv($globals.JSObjectProxy)._null());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a:"]=1;
//>>excludeEnd("ctx");
$2=$recv(jsObject)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(jsObject)._a_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a:"]=2;
//>>excludeEnd("ctx");
$3=$recv(jsObject)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($3,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$recv(jsObject)._a_($self._jsUndefined());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a:"]=3;
//>>excludeEnd("ctx");
$4=$recv(jsObject)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($4,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$recv(jsObject)._a_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a:"]=4;
//>>excludeEnd("ctx");
$5=$recv(jsObject)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_($5,"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$recv(jsObject)._a_(false);
$self._assert_equals_($recv(jsObject)._a(),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSetPropertyWithFalsyValue",{jsObject:jsObject})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testUndefined",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUndefined\x0a\x09self assert: JSObjectProxy undefined isNil.\x0a\x09self\x0a\x09\x09assert: (JSON stringify: #{#foo -> JSObjectProxy undefined})\x0a\x09\x09equals: '{}'",
referencedClasses: ["JSObjectProxy", "JSON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "isNil", "undefined", "assert:equals:", "stringify:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($globals.JSObjectProxy)._undefined();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["undefined"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isNil();
$self._assert_($1);
$self._assert_equals_($recv($globals.JSON)._stringify_($globals.HashedCollection._newFromPairs_(["foo",$recv($globals.JSObjectProxy)._undefined()])),"{}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUndefined",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testValue",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValue\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09testObject at: 'value' put: 'aValue'.\x0a\x09self assert: testObject value equals: 'aValue'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["jsObject", "at:put:", "assert:equals:", "value"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var testObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
testObject=$self._jsObject();
$recv(testObject)._at_put_("value","aValue");
$self._assert_equals_($recv(testObject)._value(),"aValue");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValue",{testObject:testObject})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testYourself",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testYourself\x0a\x09| object |\x0a\x09object := self jsObject\x0a\x09\x09d: 'test';\x0a\x09\x09yourself.\x0a\x0a\x09self assert: object d equals: 'test'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["d:", "jsObject", "yourself", "assert:equals:", "d"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var object;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._jsObject();
$recv($1)._d_("test");
object=$recv($1)._yourself();
$self._assert_equals_($recv(object)._d(),"test");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testYourself",{object:object})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxyTest);



$core.addClass("JavaScriptExceptionTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testCatchingException",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCatchingException\x0a\x09[ self throwException ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :error |\x0a\x09\x09\x09self assert: error exception = 'test' ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "throwException", "assert:", "=", "exception"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._throwException();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_($recv($recv(error)._exception()).__eq("test"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCatchingException",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JavaScriptExceptionTest);

$core.addMethod(
$core.method({
selector: "testRaisingException",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRaisingException\x0a\x09self should: [ self throwException ] raise: JavaScriptException",
referencedClasses: ["JavaScriptException"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "throwException"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._throwException();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.JavaScriptException);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRaisingException",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JavaScriptExceptionTest);

$core.addMethod(
$core.method({
selector: "throwException",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "throwException\x0a\x09<inlineJS: 'throw \x22test\x22'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["throw \x22test\x22"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
throw "test";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"throwException",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JavaScriptExceptionTest);



$core.addClass("MessageSendTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testValue",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValue\x0a\x09| messageSend |\x0a\x09\x0a\x09messageSend := MessageSend new\x0a\x09\x09receiver: Object new;\x0a\x09\x09selector: #asString;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self assert: messageSend value equals: 'an Object'",
referencedClasses: ["MessageSend", "Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["receiver:", "new", "selector:", "yourself", "assert:equals:", "value"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var messageSend;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.MessageSend)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._receiver_($recv($globals.Object)._new());
$recv($1)._selector_("asString");
messageSend=$recv($1)._yourself();
$self._assert_equals_($recv(messageSend)._value(),"an Object");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValue",{messageSend:messageSend})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSendTest);

$core.addMethod(
$core.method({
selector: "testValueWithArguments",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValueWithArguments\x0a\x09| messageSend |\x0a\x09\x0a\x09messageSend := MessageSend new\x0a\x09\x09receiver: 2;\x0a\x09\x09selector: '+';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self assert: (messageSend value: 3) equals: 5.\x0a\x09\x0a\x09self assert: (messageSend valueWithPossibleArguments: #(4)) equals: 6",
referencedClasses: ["MessageSend"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["receiver:", "new", "selector:", "yourself", "assert:equals:", "value:", "valueWithPossibleArguments:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var messageSend;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.MessageSend)._new();
$recv($1)._receiver_((2));
$recv($1)._selector_("+");
messageSend=$recv($1)._yourself();
$self._assert_equals_($recv(messageSend)._value_((3)),(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(messageSend)._valueWithPossibleArguments_([(4)]),(6));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValueWithArguments",{messageSend:messageSend})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSendTest);



$core.addClass("MethodInheritanceTest", $globals.TestCase, ["receiverTop", "receiverMiddle", "receiverBottom", "method", "performBlock"], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "codeGeneratorClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGeneratorClass\x0a\x09^ CodeGenerator",
referencedClasses: ["CodeGenerator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.CodeGenerator;

}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "compiler",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compiler\x0a\x09^ Compiler new\x0a\x09\x09codeGeneratorClass: self codeGeneratorClass;\x0a\x09\x09yourself",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["codeGeneratorClass:", "new", "codeGeneratorClass", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Compiler)._new();
$recv($1)._codeGeneratorClass_($self._codeGeneratorClass());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compiler",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "deinstallBottom",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deinstallBottom\x0a\x09self targetClassBottom removeCompiledMethod: method",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["removeCompiledMethod:", "targetClassBottom"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._targetClassBottom())._removeCompiledMethod_($self.method);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deinstallBottom",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "deinstallMiddle",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deinstallMiddle\x0a\x09self targetClassMiddle removeCompiledMethod: method",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["removeCompiledMethod:", "targetClassMiddle"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._targetClassMiddle())._removeCompiledMethod_($self.method);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deinstallMiddle",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "deinstallTop",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deinstallTop\x0a\x09self targetClassTop removeCompiledMethod: method",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["removeCompiledMethod:", "targetClassTop"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._targetClassTop())._removeCompiledMethod_($self.method);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deinstallTop",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "installBottom:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "installBottom: aString\x0a\x09method := self compiler install: aString forClass: self targetClassBottom protocol: 'tests'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["install:forClass:protocol:", "compiler", "targetClassBottom"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.method=$recv($self._compiler())._install_forClass_protocol_(aString,$self._targetClassBottom(),"tests");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installBottom:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "installMiddle:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "installMiddle: aString\x0a\x09method := self compiler install: aString forClass: self targetClassMiddle protocol: 'tests'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["install:forClass:protocol:", "compiler", "targetClassMiddle"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.method=$recv($self._compiler())._install_forClass_protocol_(aString,$self._targetClassMiddle(),"tests");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installMiddle:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "installTop:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "installTop: aString\x0a\x09method := self compiler install: aString forClass: self targetClassTop protocol: 'tests'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["install:forClass:protocol:", "compiler", "targetClassTop"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.method=$recv($self._compiler())._install_forClass_protocol_(aString,$self._targetClassTop(),"tests");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installTop:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09receiverTop := self targetClassTop new.\x0a\x09receiverMiddle := self targetClassMiddle new.\x0a\x09receiverBottom := self targetClassBottom new.\x0a\x09method := nil.\x0a\x09performBlock := [ self error: 'performBlock not initialized' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "targetClassTop", "targetClassMiddle", "targetClassBottom", "error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiverTop=$recv($self._targetClassTop())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$self.receiverMiddle=$recv($self._targetClassMiddle())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$self.receiverBottom=$recv($self._targetClassBottom())._new();
$self.method=nil;
$self.performBlock=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._error_("performBlock not initialized");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldMNU",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldMNU\x0a\x09self shouldMNUTop.\x0a\x09self shouldMNUMiddle.\x0a\x09self shouldMNUBottom",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldMNUTop", "shouldMNUMiddle", "shouldMNUBottom"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldMNUTop();
$self._shouldMNUMiddle();
$self._shouldMNUBottom();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldMNU",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldMNUBottom",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldMNUBottom\x0a\x09self should: [ performBlock value: receiverBottom ] raise: MessageNotUnderstood",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "value:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.performBlock)._value_($self.receiverBottom);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldMNUBottom",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldMNUMiddle",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldMNUMiddle\x0a\x09self should: [ performBlock value: receiverMiddle ] raise: MessageNotUnderstood",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "value:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.performBlock)._value_($self.receiverMiddle);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldMNUMiddle",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldMNUTop",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldMNUTop\x0a\x09self should: [ performBlock value: receiverTop ] raise: MessageNotUnderstood",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "value:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.performBlock)._value_($self.receiverTop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldMNUTop",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldReturn:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "shouldReturn: anObject\x0a\x09| result |\x0a\x0a\x09result := performBlock value: receiverTop.\x0a\x09self assert: { 'top'. anObject } equals: { 'top'. result }.\x0a\x09result := performBlock value: receiverMiddle.\x0a\x09self assert: { 'middle'. anObject } equals: { 'middle'. result }.\x0a\x09result := performBlock value: receiverBottom.\x0a\x09self assert: { 'bottom'. anObject } equals: { 'bottom'. result }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "assert:equals:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=$recv($self.performBlock)._value_($self.receiverTop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_(["top",anObject],["top",result]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
result=$recv($self.performBlock)._value_($self.receiverMiddle);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_(["middle",anObject],["middle",result]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
result=$recv($self.performBlock)._value_($self.receiverBottom);
$self._assert_equals_(["bottom",anObject],["bottom",result]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldReturn:",{anObject:anObject,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldReturn:and:and:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2", "anObject3"],
source: "shouldReturn: anObject and: anObject2 and: anObject3\x0a\x09| result |\x0a\x0a\x09result := performBlock value: receiverTop.\x0a\x09self assert: { 'top'. anObject } equals: { 'top'. result }.\x0a\x09result := performBlock value: receiverMiddle.\x0a\x09self assert: { 'middle'. anObject2 } equals: { 'middle'. result }.\x0a\x09result := performBlock value: receiverBottom.\x0a\x09self assert: { 'bottom'. anObject3 } equals: { 'bottom'. result }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "assert:equals:"]
}, function ($methodClass){ return function (anObject,anObject2,anObject3){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=$recv($self.performBlock)._value_($self.receiverTop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_(["top",anObject],["top",result]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
result=$recv($self.performBlock)._value_($self.receiverMiddle);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_(["middle",anObject2],["middle",result]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
result=$recv($self.performBlock)._value_($self.receiverBottom);
$self._assert_equals_(["bottom",anObject3],["bottom",result]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldReturn:and:and:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "targetClassBottom",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetClassBottom\x0a\x09^ JavaScriptException",
referencedClasses: ["JavaScriptException"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.JavaScriptException;

}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "targetClassMiddle",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetClassMiddle\x0a\x09^ Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.Error;

}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "targetClassTop",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetClassTop\x0a\x09^ Object",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.Object;

}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09[ self deinstallTop ] on: Error do: [ ].\x0a\x09[ self deinstallMiddle ] on: Error do: [ ].\x0a\x09[ self deinstallBottom ] on: Error do: [ ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "deinstallTop", "deinstallMiddle", "deinstallBottom"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._deinstallTop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._deinstallMiddle();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=2;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._deinstallBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tearDown",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "testMNU11",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMNU11\x0a\x09performBlock := [ :x | x foo ].\x0a\x09self shouldMNU.\x0a\x09self installTop: 'foo ^ false'.\x0a\x09self installTop: 'foo ^ true'.\x0a\x09self deinstallTop.\x0a\x09self shouldMNU",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["foo", "shouldMNU", "installTop:", "deinstallTop"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.performBlock=(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x)._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
});
$self._shouldMNU();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shouldMNU"]=1;
//>>excludeEnd("ctx");
$self._installTop_("foo ^ false");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["installTop:"]=1;
//>>excludeEnd("ctx");
$self._installTop_("foo ^ true");
$self._deinstallTop();
$self._shouldMNU();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMNU11",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "testMNU22",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMNU22\x0a\x09performBlock := [ :x | x foo ].\x0a\x09self shouldMNU.\x0a\x09self installMiddle: 'foo ^ false'.\x0a\x09self installMiddle: 'foo ^ true'.\x0a\x09self deinstallMiddle.\x0a\x09self shouldMNU",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["foo", "shouldMNU", "installMiddle:", "deinstallMiddle"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.performBlock=(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x)._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
});
$self._shouldMNU();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shouldMNU"]=1;
//>>excludeEnd("ctx");
$self._installMiddle_("foo ^ false");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["installMiddle:"]=1;
//>>excludeEnd("ctx");
$self._installMiddle_("foo ^ true");
$self._deinstallMiddle();
$self._shouldMNU();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMNU22",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "testReturns1",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReturns1\x0a\x09performBlock := [ :x | x foo ].\x0a\x09self installTop: 'foo ^ false'.\x0a\x09self shouldReturn: false.\x0a\x09self installTop: 'foo ^ true'.\x0a\x09self shouldReturn: true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["foo", "installTop:", "shouldReturn:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.performBlock=(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x)._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
});
$self._installTop_("foo ^ false");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["installTop:"]=1;
//>>excludeEnd("ctx");
$self._shouldReturn_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shouldReturn:"]=1;
//>>excludeEnd("ctx");
$self._installTop_("foo ^ true");
$self._shouldReturn_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReturns1",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodInheritanceTest);



$core.addClass("NumberTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testAbs",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAbs\x0a\x09self assert: 4 abs equals: 4.\x0a\x09self assert: -4 abs equals: 4",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "abs"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(4)._abs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["abs"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_((-4)._abs(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAbs",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testArithmetic",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testArithmetic\x0a\x09\x0a\x09\x22We rely on JS here, so we won't test complex behavior, just check if\x0a\x09message sends are corrects\x22\x0a\x0a\x09self assert: 1.5 + 1 equals: 2.5.\x0a\x09self assert: 2 - 1 equals: 1.\x0a\x09self assert: -2 - 1 equals: -3.\x0a\x09self assert: 12 / 2 equals: 6.\x0a\x09self assert: 3 * 4 equals: 12.\x0a\x09self assert: 7 // 2 equals: 3.\x0a\x09self assert: 7 \x5c\x5c 2 equals: 1.\x0a\x0a\x09\x22Simple parenthesis and execution order\x22\x0a\x09self assert: 1 + 2 * 3 equals: 9.\x0a\x09self assert: 1 + (2 * 3) equals: 7",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "+", "-", "/", "*", "//", "\x5c\x5c"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4;
$1=(1.5).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(2.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(2).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_((-2).__minus((1)),(-3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_((12).__slash((2)),(6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$3=(3).__star((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($3,(12));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_((7).__slash_slash((2)),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$self._assert_equals_((7).__backslash_backslash((2)),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$5=(1).__plus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__star((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($4,(9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=8;
//>>excludeEnd("ctx");
$self._assert_equals_((1).__plus((2).__star((3))),(7));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testAsNumber",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsNumber\x0a\x09self assert: 3 asNumber equals: 3.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "asNumber"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_((3)._asNumber(),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsNumber",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testBetweenAnd",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBetweenAnd\x0a\x09self assert: (4 between: 3 and: 5).\x0a\x09self assert: (1 between: 5 and: 6) not.\x0a\x09self assert: (90 between: 67 and: 87) not.\x0a\x09self assert: (1 between: 1 and: 1).",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "between:and:", "not"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$5,$4;
$1=(4)._between_and_((3),(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$3=(1)._between_and_((5),(6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["not"]=1;
//>>excludeEnd("ctx");
$self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$5=(90)._between_and_((67),(87));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=3;
//>>excludeEnd("ctx");
$4=$recv($5)._not();
$self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$self._assert_((1)._between_and_((1),(1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBetweenAnd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testBitAnd",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBitAnd\x0a\x09self assert: (15 bitAnd: 2) equals: 2.\x0a\x09self assert: (15 bitAnd: 15) equals: 15.\x0a\x09self assert: (-1 bitAnd: 1021) equals: 1021",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "bitAnd:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=(15)._bitAnd_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitAnd:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(15)._bitAnd_((15));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitAnd:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(15));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_((-1)._bitAnd_((1021)),(1021));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBitAnd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testBitNot",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBitNot\x0a\x09self assert: 2 bitNot equals: -3.\x0a\x09self assert: -1 bitNot equals: 0.\x0a\x09self assert: -1022 bitNot equals: 1021",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "bitNot"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=(2)._bitNot();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitNot"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(-3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(-1)._bitNot();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitNot"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_((-1022)._bitNot(),(1021));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBitNot",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testBitOr",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBitOr\x0a\x09self assert: (2 bitOr: 4) equals: 6.\x0a\x09self assert: (7 bitOr: 2) equals: 7.\x0a\x09self assert: (-1 bitOr: 1021) equals: -1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "bitOr:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=(2)._bitOr_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitOr:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(7)._bitOr_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitOr:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_((-1)._bitOr_((1021)),(-1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBitOr",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testBitXor",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBitXor\x0a\x09self assert: (2 bitXor: 4) equals: 6.\x0a\x09self assert: (7 bitXor: 2) equals: 5.\x0a\x09self assert: (-1 bitXor: 1021) equals: -1022.\x0a\x09self assert: (91 bitXor: 91) equals: 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "bitXor:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(2)._bitXor_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(7)._bitXor_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=(-1)._bitXor_((1021));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bitXor:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($3,(-1022));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_((91)._bitXor_((91)),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBitXor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testCeiling",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCeiling\x0a\x09self assert: 1.2 ceiling equals: 2.\x0a\x09self assert: -1.2 ceiling equals: -1.\x0a\x09self assert: 1.0 ceiling equals: 1.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "ceiling"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=(1.2)._ceiling();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ceiling"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(-1.2)._ceiling();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ceiling"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_((1)._ceiling(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCeiling",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testComparison",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComparison\x0a\x0a\x09self assert: 3 > 2.\x0a\x09self assert: 2 < 3.\x0a\x09\x0a\x09self deny: 3 < 2.\x0a\x09self deny: 2 > 3.\x0a\x0a\x09self assert: 3 >= 3.\x0a\x09self assert: 3.1 >= 3.\x0a\x09self assert: 3 <= 3.\x0a\x09self assert: 3 <= 3.1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", ">", "<", "deny:", ">=", "<="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=(3).__gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=(2).__lt((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
$self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$self._deny_((3).__lt((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$self._deny_((2).__gt((3)));
$3=(3).__gt_eq((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=1;
//>>excludeEnd("ctx");
$self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$self._assert_((3.1).__gt_eq((3)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$4=(3).__lt_eq((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
$self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$self._assert_((3).__lt_eq((3.1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComparison",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testCopying",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopying\x0a\x09self assert: 1 copy == 1.\x0a\x09self assert: 1 deepCopy == 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "==", "copy", "deepCopy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv((1)._copy()).__eq_eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$self._assert_($recv((1)._deepCopy()).__eq_eq((1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopying",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testDegreesToRadians",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDegreesToRadians\x0a\x09self assert: (180 degreesToRadians - Number pi) abs <= 0.01.",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "<=", "abs", "-", "degreesToRadians", "pi"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv($recv($recv((180)._degreesToRadians()).__minus($recv($globals.Number)._pi()))._abs()).__lt_eq((0.01)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDegreesToRadians",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testEquality",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09self assert: (1 = 1).\x0a\x09self assert: (0 = 0).\x0a\x09self deny: (1 = 0).\x0a\x0a\x09self assert: (1 yourself = 1).\x0a\x09self assert: (1 = 1 yourself).\x0a\x09self assert: (1 yourself = 1 yourself).\x0a\x09\x0a\x09self deny: 0 = false.\x0a\x09self deny: false = 0.\x0a\x09self deny: '' = 0.\x0a\x09self deny: 0 = ''",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "=", "deny:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$7,$6,$9,$8,$10,$11,$12;
$1=(1).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=(0).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$3=(1).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
$self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$5=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
$self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$7=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$6=(1).__eq($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
$self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$9=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__eq((1)._yourself());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=6;
//>>excludeEnd("ctx");
$self._assert_($8);
$10=(0).__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=7;
//>>excludeEnd("ctx");
$self._deny_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$11=false.__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=8;
//>>excludeEnd("ctx");
$self._deny_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$12="".__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=9;
//>>excludeEnd("ctx");
$self._deny_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=4;
//>>excludeEnd("ctx");
$self._deny_((0).__eq(""));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testFloor",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFloor\x0a\x09self assert: 1.2 floor equals: 1.\x0a\x09self assert: -1.2 floor equals: -2.\x0a\x09self assert: 1.0 floor equals: 1.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "floor"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=(1.2)._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["floor"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(-1.2)._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["floor"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(-2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_((1)._floor(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFloor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testHexNumbers",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testHexNumbers\x0a\x0a\x09self assert: 16r9 equals: 9.\x0a\x09self assert: 16rA truncated equals: 10.\x0a\x09self assert: 16rB truncated equals: 11.\x0a\x09self assert: 16rC truncated equals: 12.\x0a\x09self assert: 16rD truncated equals: 13.\x0a\x09self assert: 16rE truncated equals: 14.\x0a\x09self assert: 16rF truncated equals: 15",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "truncated"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$self._assert_equals_((9),(9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$1=(10)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$2=(11)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(11));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$3=(12)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($3,(12));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$4=(13)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($4,(13));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$5=(14)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_($5,(14));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$self._assert_equals_((15)._truncated(),(15));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testHexNumbers",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testIdentity",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentity\x0a\x09self assert: 1 == 1.\x0a\x09self assert: 0 == 0.\x0a\x09self deny: 1 == 0.\x0a\x0a\x09self assert: 1 yourself == 1.\x0a\x09self assert: 1 == 1 yourself.\x0a\x09self assert: 1 yourself == 1 yourself.\x0a\x09\x0a\x09self deny: 1 == 2",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "==", "deny:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$7,$6,$9,$8;
$1=(1).__eq_eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=(0).__eq_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
$self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$3=(1).__eq_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=3;
//>>excludeEnd("ctx");
$self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$5=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq_eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=4;
//>>excludeEnd("ctx");
$self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$7=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$6=(1).__eq_eq($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=5;
//>>excludeEnd("ctx");
$self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$9=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__eq_eq((1)._yourself());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=6;
//>>excludeEnd("ctx");
$self._assert_($8);
$self._deny_((1).__eq_eq((2)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentity",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testInvalidHexNumbers",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInvalidHexNumbers\x0a\x0a\x09self should: [ 16rG ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rg ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rH ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rh ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rI ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ri ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rJ ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rj ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rK ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rk ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rL ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rl ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rM ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rm ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rN ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rn ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rO ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ro ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rP ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rp ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rQ ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rq ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rR ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rr ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rS ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rs ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rT ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rt ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rU ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ru ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rV ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rv ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rW ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rw ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rX ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rx ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rY ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ry ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rZ ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rz ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rABcdEfZ ] raise: MessageNotUnderstood.",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "rG", "rg", "rH", "rh", "rI", "ri", "rJ", "rj", "rK", "rk", "rL", "rl", "rM", "rm", "rN", "rn", "rO", "ro", "rP", "rp", "rQ", "rq", "rR", "rr", "rS", "rs", "rT", "rt", "rU", "ru", "rV", "rv", "rW", "rw", "rX", "rx", "rY", "ry", "rZ", "rz", "Z"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rG();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rg();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=2;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rH();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=3;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rh();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=4;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rI();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=5;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._ri();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=6;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rJ();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=7;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rj();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=8;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rK();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=9;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rk();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,10)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=10;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rL();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,11)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=11;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rl();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,12)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=12;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rM();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,13)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=13;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rm();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,14)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=14;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rN();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,15)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=15;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,16)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=16;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rO();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,17)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=17;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._ro();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,18)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=18;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rP();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,19)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=19;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rp();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,20)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=20;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rQ();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,21)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=21;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rq();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,22)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=22;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rR();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,23)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=23;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,24)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=24;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rS();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,25)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=25;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,26)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=26;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rT();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,27)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=27;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,28)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=28;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rU();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,29)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=29;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._ru();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,30)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=30;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rV();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,31)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=31;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rv();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,32)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=32;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rW();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,33)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=33;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rw();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,34)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=34;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rX();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,35)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=35;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rx();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,36)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=36;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rY();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,37)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=37;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._ry();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,38)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=38;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rZ();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,39)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=39;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rz();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,40)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=40;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (11259375)._Z();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,41)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInvalidHexNumbers",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testLog",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLog\x0a\x09self assert: 10000 log equals: 4.\x0a\x09self assert: (512 log: 2) equals: 9.\x0a\x09self assert: Number e ln equals: 1.",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "log", "log:", "ln", "e"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_((10000)._log(),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_((512)._log_((2)),(9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($recv($globals.Number)._e())._ln(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLog",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testMinMax",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMinMax\x0a\x09\x0a\x09self assert: (2 max: 5) equals: 5.\x0a\x09self assert: (2 min: 5) equals: 2.\x0a\x09self assert: (2 min: 5 max: 3) equals: 3.\x0a\x09self assert: (7 min: 5 max: 3) equals: 5.\x0a\x09self assert: (4 min: 5 max: 3) equals: 4.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "max:", "min:", "min:max:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$self._assert_equals_((2)._max_((5)),(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_((2)._min_((5)),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$1=(2)._min_max_((5),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["min:max:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$2=(7)._min_max_((5),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["min:max:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_((4)._min_max_((5),(3)),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMinMax",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testNegated",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNegated\x0a\x09self assert: 3 negated equals: -3.\x0a\x09self assert: -3 negated equals: 3",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "negated"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(3)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(-3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_((-3)._negated(),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNegated",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testPrintShowingDecimalPlaces",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrintShowingDecimalPlaces\x0a\x09self assert: (23 printShowingDecimalPlaces: 2) equals: '23.00'.\x0a\x09self assert: (23.5698 printShowingDecimalPlaces: 2) equals: '23.57'.\x0a\x09self assert: (234.567 negated printShowingDecimalPlaces: 5) equals: '-234.56700'.\x0a\x09self assert: (23.4567 printShowingDecimalPlaces: 0) equals: '23'.\x0a\x09self assert: (23.5567 printShowingDecimalPlaces: 0) equals: '24'.\x0a\x09self assert: (23.4567 negated printShowingDecimalPlaces: 0) equals: '-23'.\x0a\x09self assert: (23.5567 negated printShowingDecimalPlaces: 0) equals: '-24'.\x0a\x09self assert: (100000000 printShowingDecimalPlaces: 1) equals: '100000000.0'.\x0a\x09self assert: (0.98 printShowingDecimalPlaces: 5) equals: '0.98000'.\x0a\x09self assert: (0.98 negated printShowingDecimalPlaces: 2) equals: '-0.98'.\x0a\x09self assert: (2.567 printShowingDecimalPlaces: 2) equals: '2.57'.\x0a\x09self assert: (-2.567 printShowingDecimalPlaces: 2) equals: '-2.57'.\x0a\x09self assert: (0 printShowingDecimalPlaces: 2) equals: '0.00'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "printShowingDecimalPlaces:", "negated"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$6,$8,$7,$10,$9,$11,$12,$13,$14,$15;
$1=(23)._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"23.00");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(23.5698)._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,"23.57");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$4=(234.567)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._printShowingDecimalPlaces_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($3,"-234.56700");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$5=(23.4567)._printShowingDecimalPlaces_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_($5,"23");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$6=(23.5567)._printShowingDecimalPlaces_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_($6,"24");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$8=(23.4567)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._printShowingDecimalPlaces_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=6;
//>>excludeEnd("ctx");
$self._assert_equals_($7,"-23");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$10=(23.5567)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._printShowingDecimalPlaces_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=7;
//>>excludeEnd("ctx");
$self._assert_equals_($9,"-24");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$11=(100000000)._printShowingDecimalPlaces_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=8;
//>>excludeEnd("ctx");
$self._assert_equals_($11,"100000000.0");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=8;
//>>excludeEnd("ctx");
$12=(0.98)._printShowingDecimalPlaces_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=9;
//>>excludeEnd("ctx");
$self._assert_equals_($12,"0.98000");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=9;
//>>excludeEnd("ctx");
$13=$recv((0.98)._negated())._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=10;
//>>excludeEnd("ctx");
$self._assert_equals_($13,"-0.98");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=10;
//>>excludeEnd("ctx");
$14=(2.567)._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=11;
//>>excludeEnd("ctx");
$self._assert_equals_($14,"2.57");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=11;
//>>excludeEnd("ctx");
$15=(-2.567)._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=12;
//>>excludeEnd("ctx");
$self._assert_equals_($15,"-2.57");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=12;
//>>excludeEnd("ctx");
$self._assert_equals_((0)._printShowingDecimalPlaces_((2)),"0.00");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrintShowingDecimalPlaces",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testPrintStringBase",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrintStringBase\x0a\x09self assert: (15 printStringBase: 2) equals: '1111'.\x0a\x09self assert: (15 printStringBase: 16) equals: 'f'.\x0a\x09self assert: (256 printStringBase: 16) equals: '100'.\x0a\x09self assert: (256 printStringBase: 2) equals: '100000000'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "printStringBase:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(15)._printStringBase_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printStringBase:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"1111");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(15)._printStringBase_((16));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printStringBase:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,"f");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=(256)._printStringBase_((16));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printStringBase:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($3,"100");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_((256)._printStringBase_((2)),"100000000");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrintStringBase",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testRadiansToDegrees",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRadiansToDegrees\x0a\x09self assert: (Number pi radiansToDegrees - 180) abs <= 0.01.",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "<=", "abs", "-", "radiansToDegrees", "pi"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv($recv($recv($recv($recv($globals.Number)._pi())._radiansToDegrees()).__minus((180)))._abs()).__lt_eq((0.01)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRadiansToDegrees",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testRaisedTo",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRaisedTo\x0a\x09self assert: (2 raisedTo: 4) equals: 16.\x0a\x09self assert: (2 raisedTo: 0) equals: 1.\x0a\x09self assert: (2 raisedTo: -3) equals: 0.125.\x0a\x09self assert: (4 raisedTo: 0.5) equals: 2.\x0a\x09\x0a\x09self assert: 2 ** 4 equals: 16.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "raisedTo:", "**"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(2)._raisedTo_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(16));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(2)._raisedTo_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=(2)._raisedTo_((-3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($3,(0.125));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_((4)._raisedTo_((0.5)),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_((2).__star_star((4)),(16));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRaisedTo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testRounded",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRounded\x0a\x09\x0a\x09self assert: 3 rounded equals: 3.\x0a\x09self assert: 3.212 rounded equals: 3.\x0a\x09self assert: 3.51 rounded equals: 4",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "rounded"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=(3)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rounded"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(3.212)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rounded"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_((3.51)._rounded(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRounded",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testSign",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSign\x0a\x09self assert: 5 sign equals: 1.\x0a\x09self assert: 0 sign equals: 0.\x0a\x09self assert: -1.4 sign equals: -1.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "sign"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=(5)._sign();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sign"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(0)._sign();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sign"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_((-1.4)._sign(),(-1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSign",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testSqrt",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSqrt\x0a\x09\x0a\x09self assert: 4 sqrt equals: 2.\x0a\x09self assert: 16 sqrt equals: 4",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "sqrt"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(4)._sqrt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sqrt"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_((16)._sqrt(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSqrt",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testSquared",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSquared\x0a\x09\x0a\x09self assert: 4 squared equals: 16",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "squared"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_((4)._squared(),(16));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSquared",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testTimesRepeat",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTimesRepeat\x0a\x09| i |\x0a\x0a\x09i := 0.\x0a\x090 timesRepeat: [ i := i + 1 ].\x0a\x09self assert: i equals: 0.\x0a\x0a\x095 timesRepeat: [ i := i + 1 ].\x0a\x09self assert: i equals: 5",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timesRepeat:", "+", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
i=(0);
(0)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["timesRepeat:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_(i,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
(5)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_(i,(5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTimesRepeat",{i:i})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testTo",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTo\x0a\x09self assert: (1 to: 5) equals: #(1 2 3 4 5)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "to:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_((1)._to_((5)),[(1), (2), (3), (4), (5)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testToBy",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testToBy\x0a\x09self assert: (0 to: 6 by: 2) equals: #(0 2 4 6).\x0a\x0a\x09self should: [ 1 to: 4 by: 0 ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "to:by:", "should:raise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(0)._to_by_((6),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:by:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,[(0), (2), (4), (6)]);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1)._to_by_((4),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testToBy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testTrigonometry",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTrigonometry\x0a\x09self assert: 0 cos equals: 1.\x0a\x09self assert: 0 sin equals: 0.\x0a\x09self assert: 0 tan equals: 0.\x0a\x09self assert: 1 arcCos equals: 0.\x0a\x09self assert: 0 arcSin equals: 0.\x0a\x09self assert: 0 arcTan equals: 0.\x0a\x09\x0a\x09self assert: (0 arcTan: 1) equals: 0.\x0a\x09self assert: (1 arcTan: 0) equals: (Number pi / 2)",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "cos", "sin", "tan", "arcCos", "arcSin", "arcTan", "arcTan:", "/", "pi"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self._assert_equals_((0)._cos(),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_((0)._sin(),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_((0)._tan(),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_((1)._arcCos(),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$self._assert_equals_((0)._arcSin(),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$self._assert_equals_((0)._arcTan(),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$1=(0)._arcTan_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["arcTan:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$self._assert_equals_((1)._arcTan_((0)),$recv($recv($globals.Number)._pi()).__slash((2)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTrigonometry",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testTruncated",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTruncated\x0a\x09\x0a\x09self assert: 3 truncated equals: 3.\x0a\x09self assert: 3.212 truncated equals: 3.\x0a\x09self assert: 3.51 truncated equals: 3",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "truncated"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=(3)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(3.212)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_((3.51)._truncated(),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTruncated",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NumberTest);



$core.addClass("ObjectMock", $globals.Object, ["foo", "bar"], "Kernel-Tests");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ObjectMock.comment="ObjectMock is there only to perform tests on classes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "foo",
protocol: "not yet classified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "foo\x0a\x09^ foo",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.foo;

}; }),
$globals.ObjectMock);

$core.addMethod(
$core.method({
selector: "foo:",
protocol: "not yet classified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "foo: anObject\x0a\x09foo := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.foo=anObject;
return self;

}; }),
$globals.ObjectMock);



$core.addClass("ObjectTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "notDefined",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notDefined\x0a\x09<inlineJS: 'return void 0;'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return void 0;"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return void 0;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notDefined",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testBasicAccess",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBasicAccess\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'a' put: 1.\x0a\x09self assert: (o basicAt: 'a') equals: 1.\x0a\x09self assert: (o basicAt: 'b') equals: nil",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "basicAt:put:", "assert:equals:", "basicAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var o;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
o=$recv($globals.Object)._new();
$recv(o)._basicAt_put_("a",(1));
$1=$recv(o)._basicAt_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(o)._basicAt_("b"),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBasicAccess",{o:o})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testBasicPerform",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBasicPerform\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'func' put: [ 'hello' ].\x0a\x09o basicAt: 'func2' put: [ :a | a + 1 ].\x0a\x0a\x09self assert: (o basicPerform: 'func') equals: 'hello'.\x0a\x09self assert: (o basicPerform: 'func2' withArguments: #(3)) equals: 4",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "basicAt:put:", "+", "assert:equals:", "basicPerform:", "basicPerform:withArguments:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var o;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
o=$recv($globals.Object)._new();
$recv(o)._basicAt_put_("func",(function(){
return "hello";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:put:"]=1;
//>>excludeEnd("ctx");
$recv(o)._basicAt_put_("func2",(function(a){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_($recv(o)._basicPerform_("func"),"hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(o)._basicPerform_withArguments_("func2",[(3)]),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBasicPerform",{o:o})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testDNU",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDNU\x0a\x09self should: [ Object new foo ] raise: MessageNotUnderstood",
referencedClasses: ["Object", "MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "foo", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Object)._new())._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDNU",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testEquality",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o = Object new.\x0a\x09self assert: (o = o).\x0a\x09self assert: (o yourself = o).\x0a\x09self assert: (o = o yourself)",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "deny:", "=", "assert:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var o;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
o=$recv($globals.Object)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv(o).__eq($recv($globals.Object)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._deny_($1);
$2=$recv(o).__eq(o);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$recv(o)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq(o);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
$self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$self._assert_($recv(o).__eq($recv(o)._yourself()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{o:o})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testHalt",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testHalt\x0a\x09self should: [ Object new halt ] raise: Error",
referencedClasses: ["Object", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "halt", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Object)._new())._halt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testHalt",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testIdentity",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentity\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o == Object new.\x0a\x09self assert: o == o.\x0a\x09self assert: o yourself == o.\x0a\x09self assert: o == o yourself",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "deny:", "==", "assert:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var o;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
o=$recv($globals.Object)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv(o).__eq_eq($recv($globals.Object)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
$self._deny_($1);
$2=$recv(o).__eq_eq(o);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
$self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$recv(o)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq_eq(o);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=3;
//>>excludeEnd("ctx");
$self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$self._assert_($recv(o).__eq_eq($recv(o)._yourself()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentity",{o:o})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testIfNil",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIfNil\x0a\x09self deny: Object new isNil.\x0a\x09self deny: (Object new ifNil: [ true ]) = true.\x0a\x09self assert: (Object new ifNotNil: [ true ]) equals: true.\x0a\x0a\x09self assert: (Object new ifNil: [ false ] ifNotNil: [ true ]) equals: true.\x0a\x09self assert: (Object new ifNotNil: [ true ] ifNil: [ false ]) equals: true",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deny:", "isNil", "new", "=", "ifNil:", "assert:equals:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$7,$6,$9,$8,$11,$10,$receiver;
$2=$recv($globals.Object)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isNil();
$self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$5=$recv($globals.Object)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
if(($receiver = $5) == null || $receiver.a$nil){
$4=true;
} else {
$4=$5;
}
$3=$recv($4).__eq(true);
$self._deny_($3);
$7=$recv($globals.Object)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
if(($receiver = $7) == null || $receiver.a$nil){
$6=$7;
} else {
$6=true;
}
$self._assert_equals_($6,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$9=$recv($globals.Object)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
if(($receiver = $9) == null || $receiver.a$nil){
$8=false;
} else {
$8=true;
}
$self._assert_equals_($8,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$11=$recv($globals.Object)._new();
if(($receiver = $11) == null || $receiver.a$nil){
$10=false;
} else {
$10=true;
}
$self._assert_equals_($10,true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIfNil",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testInstVars",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInstVars\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: (o instVarAt: #foo) equals: nil.\x0a\x0a\x09o instVarAt: #foo put: 1.\x0a\x09self assert: (o instVarAt: #foo) equals: 1.\x0a\x09self assert: (o instVarAt: 'foo') equals: 1",
referencedClasses: ["ObjectMock"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "assert:equals:", "instVarAt:", "instVarAt:put:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var o;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
o=$recv($globals.ObjectMock)._new();
$1=$recv(o)._instVarAt_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instVarAt:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(o)._instVarAt_put_("foo",(1));
$2=$recv(o)._instVarAt_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instVarAt:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(o)._instVarAt_("foo"),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInstVars",{o:o})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testNilUndefined",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNilUndefined\x0a\x09\x22nil in Smalltalk is the undefined object in JS\x22\x0a\x0a\x09self assert: self notDefined equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "notDefined"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($self._notDefined(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNilUndefined",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testYourself",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testYourself\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: o yourself == o",
referencedClasses: ["ObjectMock"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "assert:", "==", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var o;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
o=$recv($globals.ObjectMock)._new();
$self._assert_($recv($recv(o)._yourself()).__eq_eq(o));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testYourself",{o:o})});
//>>excludeEnd("ctx");
}; }),
$globals.ObjectTest);



$core.addClass("PointTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testAccessing",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAccessing\x0a\x09self assert: (Point x: 3 y: 4) x equals: 3.\x0a\x09self assert: (Point x: 3 y: 4) y equals: 4.\x0a\x09self assert: (Point new x: 3) x equals: 3.\x0a\x09self assert: (Point new y: 4) y equals: 4",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "x", "x:y:", "y", "x:", "new", "y:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$6,$5,$4;
$2=$recv($globals.Point)._x_y_((3),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:y:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=$recv($recv($globals.Point)._x_y_((3),(4)))._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($3,(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$6=$recv($globals.Point)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._x_((3));
$4=$recv($5)._x();
$self._assert_equals_($4,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($recv($recv($globals.Point)._new())._y_((4)))._y(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAccessing",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testAngle",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAngle\x0a\x09self assert: (-1@0) angle equals: Number pi",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "angle", "@", "pi"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv((-1).__at((0)))._angle(),$recv($globals.Number)._pi());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAngle",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testArithmetic",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testArithmetic\x0a\x09self assert: 3@4 * (3@4 ) equals: (Point x: 9 y: 16).\x0a\x09self assert: 3@4 + (3@4 ) equals: (Point x: 6 y: 8).\x0a\x09self assert: 3@4 - (3@4 ) equals: (Point x: 0 y: 0).\x0a\x09self assert: 6@8 / (3@4 ) equals: (Point x: 2 y: 2)",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "*", "@", "x:y:", "+", "-", "/"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$6,$7,$5,$8,$10,$11,$9,$12,$14,$13;
$2=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__star($3);
$4=$recv($globals.Point)._x_y_((9),(16));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:y:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$7=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$5=$recv($6).__plus($7);
$8=$recv($globals.Point)._x_y_((6),(8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:y:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$10=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$11=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$9=$recv($10).__minus($11);
$12=$recv($globals.Point)._x_y_((0),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:y:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($9,$12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$14=(6).__at((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$13=$recv($14).__slash((3).__at((4)));
$self._assert_equals_($13,$recv($globals.Point)._x_y_((2),(2)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testAt",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAt\x0a\x09self assert: 3@4 equals: (Point x: 3 y: 4)",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "@", "x:y:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_((3).__at((4)),$recv($globals.Point)._x_y_((3),(4)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAt",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testComparison",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComparison\x0a\x09self assert: 3@4 < (4@5).\x0a\x09self deny: 3@4 < (4@4).\x0a\x09\x0a\x09self assert: 4@5 <= (4@5).\x0a\x09self deny: 4@5 <= (3@5).\x0a\x09\x0a\x09self assert: 5@6 > (4@5).\x0a\x09self deny: 5@6 > (6@6).\x0a\x09\x0a\x09self assert: 4@5 >= (4@5).\x0a\x09self deny: 4@5 >= (5@5)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "<", "@", "deny:", "<=", ">", ">="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$11,$12,$10,$14,$15,$13,$17,$18,$16,$20,$21,$19,$23,$22;
$2=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__lt($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$5=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$6=(4).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$4=$recv($5).__lt($6);
$self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$8=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$9=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$7=$recv($8).__lt_eq($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
$self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$11=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$12=(3).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=8;
//>>excludeEnd("ctx");
$10=$recv($11).__lt_eq($12);
$self._deny_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$14=(5).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=9;
//>>excludeEnd("ctx");
$15=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=10;
//>>excludeEnd("ctx");
$13=$recv($14).__gt($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
$self._assert_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$17=(5).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=11;
//>>excludeEnd("ctx");
$18=(6).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=12;
//>>excludeEnd("ctx");
$16=$recv($17).__gt($18);
$self._deny_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$20=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=13;
//>>excludeEnd("ctx");
$21=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=14;
//>>excludeEnd("ctx");
$19=$recv($20).__gt_eq($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=1;
//>>excludeEnd("ctx");
$self._assert_($19);
$23=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=15;
//>>excludeEnd("ctx");
$22=$recv($23).__gt_eq((5).__at((5)));
$self._deny_($22);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComparison",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testDotProduct",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDotProduct\x0a\x09self assert: (2@3 dotProduct: 3@7) equals: 27",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "dotProduct:", "@"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=(2).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._dotProduct_((3).__at((7)));
$self._assert_equals_($1,(27));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDotProduct",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testEgality",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEgality\x0a\x09self assert: (3@4 = (3@4)).\x0a\x09self deny: 3@5 = (3@6)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "=", "@", "deny:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$4;
$2=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
$5=(3).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$4=$recv($5).__eq((3).__at((6)));
$self._deny_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEgality",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testNew",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNew\x0a\x0a\x09self assert: (Point new x: 3) y equals: nil.\x0a\x09self deny: (Point new x: 3) x = 0.\x0a\x09self assert: (Point new y: 4) x equals: nil.\x0a\x09self deny: (Point new y: 4) y = 0",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "y", "x:", "new", "deny:", "=", "x", "y:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$7,$6,$5,$4,$10,$9,$8;
$3=$recv($globals.Point)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._x_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$7=$recv($globals.Point)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._x_((3));
$5=$recv($6)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$10=$recv($globals.Point)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._y_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y:"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._x();
$self._assert_equals_($8,nil);
$self._deny_($recv($recv($recv($recv($globals.Point)._new())._y_((4)))._y()).__eq((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNew",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testNormal",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNormal\x0a\x09self assert: (1@0) normal equals: 0@1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "normal", "@"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=(1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._normal();
$self._assert_equals_($1,(0).__at((1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNormal",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testNormalized",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNormalized\x0a\x09self assert: (0@2) normalized equals: 0@1.\x0a\x09self assert: (0@0) normalized equals: 0@0.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "normalized", "@"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
$2=(0).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._normalized();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["normalized"]=1;
//>>excludeEnd("ctx");
$3=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$5=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$4=$recv($5)._normalized();
$self._assert_equals_($4,(0).__at((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNormalized",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testPolarCoordinates",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPolarCoordinates\x0a\x09self assert: (1@0) r equals: 1.\x0a\x09self assert: (0@0) r equals: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "r", "@"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=(1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._r();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["r"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv((0).__at((0)))._r(),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPolarCoordinates",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testRectangleCreation",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRectangleCreation\x0a\x09self assert: (1@1 corner: 2@2) equals: (Rectangle origin: 1@1 corner: 2@2).\x0a\x09self assert: (1@1 rectangle: 2@2) equals: (Rectangle point: 1@1 point: 2@2).\x0a\x09self assert: (1@1 extent: 2@2) equals: (Rectangle origin: 1@1 extent: 2@2)",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "corner:", "@", "origin:corner:", "rectangle:", "point:point:", "extent:", "origin:extent:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$11,$12,$10,$14,$15,$13,$17,$16;
$2=(1).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(2).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._corner_($3);
$5=(1).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$6=(2).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$4=$recv($globals.Rectangle)._origin_corner_($5,$6);
$self._assert_equals_($1,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$8=(1).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$9=(2).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$7=$recv($8)._rectangle_($9);
$11=(1).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$12=(2).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=8;
//>>excludeEnd("ctx");
$10=$recv($globals.Rectangle)._point_point_($11,$12);
$self._assert_equals_($7,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$14=(1).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=9;
//>>excludeEnd("ctx");
$15=(2).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=10;
//>>excludeEnd("ctx");
$13=$recv($14)._extent_($15);
$17=(1).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=11;
//>>excludeEnd("ctx");
$16=$recv($globals.Rectangle)._origin_extent_($17,(2).__at((2)));
$self._assert_equals_($13,$16);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRectangleCreation",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testTranslateBy",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTranslateBy\x0a\x09self assert: (3@3 translateBy: 0@1) equals: 3@4.\x0a\x09self assert: (3@3 translateBy: 0@1 negated) equals: 3@2.\x0a\x09self assert: (3@3 translateBy: 2@3) equals: 5@6.\x0a\x09self assert: (3@3 translateBy: 3 negated @0) equals: 0@3.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "translateBy:", "@", "negated"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$6,$8,$7,$5,$9,$11,$12,$10,$13,$15,$16,$14;
$2=(3).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._translateBy_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["translateBy:"]=1;
//>>excludeEnd("ctx");
$4=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=(3).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$8=(1)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$7=(0).__at($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$5=$recv($6)._translateBy_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["translateBy:"]=2;
//>>excludeEnd("ctx");
$9=(3).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$self._assert_equals_($5,$9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$11=(3).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$12=(2).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=8;
//>>excludeEnd("ctx");
$10=$recv($11)._translateBy_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["translateBy:"]=3;
//>>excludeEnd("ctx");
$13=(5).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=9;
//>>excludeEnd("ctx");
$self._assert_equals_($10,$13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$15=(3).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=10;
//>>excludeEnd("ctx");
$16=$recv((3)._negated()).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=11;
//>>excludeEnd("ctx");
$14=$recv($15)._translateBy_($16);
$self._assert_equals_($14,(0).__at((3)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTranslateBy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PointTest);



$core.addClass("QueueTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testNextIfAbsent",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNextIfAbsent\x0a\x09| queue |\x0a\x09queue := Queue new.\x0a\x09queue nextPut: 'index1'. \x0a\x0a\x09self assert: (queue  nextIfAbsent: 'empty') = 'index1'.\x0a\x09self deny: (queue  nextIfAbsent: 'empty') = 'index1'",
referencedClasses: ["Queue"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "nextPut:", "assert:", "=", "nextIfAbsent:", "deny:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var queue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
queue=$recv($globals.Queue)._new();
$recv(queue)._nextPut_("index1");
$2=$recv(queue)._nextIfAbsent_("empty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextIfAbsent:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("index1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
$self._deny_($recv($recv(queue)._nextIfAbsent_("empty")).__eq("index1"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNextIfAbsent",{queue:queue})});
//>>excludeEnd("ctx");
}; }),
$globals.QueueTest);

$core.addMethod(
$core.method({
selector: "testQueueNext",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testQueueNext\x0a\x09| queue |               \x0a\x09queue := Queue new.\x0a\x09queue \x0a\x09\x09nextPut: 'index1';\x0a\x09\x09nextPut: 'index2'.\x0a\x0a\x09self assert: queue next = 'index1'.\x0a\x09self deny: queue next = 'index'.\x0a\x09self should: [ queue next ] raise: Error",
referencedClasses: ["Queue", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "nextPut:", "assert:", "=", "next", "deny:", "should:raise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var queue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$5,$4;
queue=$recv($globals.Queue)._new();
$1=queue;
$recv($1)._nextPut_("index1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPut_("index2");
$3=$recv(queue)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq("index1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._assert_($2);
$5=$recv(queue)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__eq("index");
$self._deny_($4);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(queue)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testQueueNext",{queue:queue})});
//>>excludeEnd("ctx");
}; }),
$globals.QueueTest);



$core.addClass("RandomTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testAtRandomNumber",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtRandomNumber\x0a\x09|val|\x09\x0a\x0a\x09100 timesRepeat: [\x0a\x09\x09val := 10 atRandom.\x09\x0a\x09\x09self assert: (val > 0).\x0a\x09\x09self assert: (val <11)\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timesRepeat:", "atRandom", "assert:", ">", "<"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var val;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(100)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
val=(10)._atRandom();
$self._assert_($recv(val).__gt((0)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
return $self._assert_($recv(val).__lt((11)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtRandomNumber",{val:val})});
//>>excludeEnd("ctx");
}; }),
$globals.RandomTest);

$core.addMethod(
$core.method({
selector: "testAtRandomSequenceableCollection",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtRandomSequenceableCollection\x0a\x09|val|\x0a\x09\x0a\x09100 timesRepeat: [\x0a\x09\x09val := 'abc' atRandom.\x0a\x09\x09self assert: ((val = 'a') | (val = 'b') | (val = 'c' )).\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timesRepeat:", "atRandom", "assert:", "|", "="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var val;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1;
(100)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
val="abc"._atRandom();
$3=$recv(val).__eq("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
$4=$recv(val).__eq("b");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__or($4);
$1=$recv($2).__or($recv(val).__eq("c"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["|"]=1;
//>>excludeEnd("ctx");
return $self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtRandomSequenceableCollection",{val:val})});
//>>excludeEnd("ctx");
}; }),
$globals.RandomTest);

$core.addMethod(
$core.method({
selector: "textNext",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "textNext\x0a\x0a\x0910000 timesRepeat: [\x0a\x09\x09\x09| current next |\x0a\x09\x09\x09next := Random new next.\x0a\x09\x09\x09self assert: (next >= 0).\x0a\x09\x09\x09self assert: (next < 1).\x0a\x09\x09\x09self deny: current = next.\x0a\x09\x09\x09next = current ]",
referencedClasses: ["Random"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timesRepeat:", "next", "new", "assert:", ">=", "<", "deny:", "="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(10000)._timesRepeat_((function(){
var current,next;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
next=$recv($recv($globals.Random)._new())._next();
$self._assert_($recv(next).__gt_eq((0)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$self._assert_($recv(next).__lt((1)));
$1=$recv(current).__eq(next);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._deny_($1);
return $recv(next).__eq(current);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({current:current,next:next},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"textNext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RandomTest);



$core.addClass("RectangleTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testContainsPoint",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testContainsPoint\x0a\x09| rect |\x0a\x09rect := Rectangle origin: 0@0 corner: 4@4.\x0a\x09\x0a\x09self assert: (rect containsPoint: 1@2).\x0a\x09self assert: (rect containsPoint: 5@4) not.",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["origin:corner:", "@", "assert:", "containsPoint:", "not"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var rect;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3;
$1=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=(4).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
rect=$recv($globals.Rectangle)._origin_corner_($1,$2);
$4=rect;
$5=(1).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$3=$recv($4)._containsPoint_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["containsPoint:"]=1;
//>>excludeEnd("ctx");
$self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$self._assert_($recv($recv(rect)._containsPoint_((5).__at((4))))._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testContainsPoint",{rect:rect})});
//>>excludeEnd("ctx");
}; }),
$globals.RectangleTest);

$core.addMethod(
$core.method({
selector: "testContainsRect",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testContainsRect\x0a\x09self assert: ((Rectangle origin: 0@0 corner: 6@6) containsRect: (Rectangle origin: 1@1 corner: 5@5)).\x0a\x09self assert: ((Rectangle origin: 0@0 corner: 6@6) containsRect: (Rectangle origin: 1@(-1) corner: 5@5)) not.",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "containsRect:", "origin:corner:", "@", "not"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$6,$7,$5,$1,$11,$12,$10,$14,$13,$9,$8;
$3=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$4=(6).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$2=$recv($globals.Rectangle)._origin_corner_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin:corner:"]=1;
//>>excludeEnd("ctx");
$6=(1).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$7=(5).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$5=$recv($globals.Rectangle)._origin_corner_($6,$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin:corner:"]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._containsRect_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["containsRect:"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$11=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$12=(6).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$10=$recv($globals.Rectangle)._origin_corner_($11,$12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin:corner:"]=3;
//>>excludeEnd("ctx");
$14=(1).__at((-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$13=$recv($globals.Rectangle)._origin_corner_($14,(5).__at((5)));
$9=$recv($10)._containsRect_($13);
$8=$recv($9)._not();
$self._assert_($8);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testContainsRect",{})});
//>>excludeEnd("ctx");
}; }),
$globals.RectangleTest);

$core.addMethod(
$core.method({
selector: "testOriginExtent",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOriginExtent\x0a\x09| rectangle |\x0a\x09rectangle := Rectangle origin: 3@4 extent: 7@8.\x0a\x09\x0a\x09self assert: rectangle origin equals: 3@4.\x0a\x09self assert: rectangle corner equals: 10@12.",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["origin:extent:", "@", "assert:equals:", "origin", "corner"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var rectangle;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=(7).__at((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
rectangle=$recv($globals.Rectangle)._origin_extent_($1,$2);
$3=$recv(rectangle)._origin();
$4=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(rectangle)._corner(),(10).__at((12)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOriginExtent",{rectangle:rectangle})});
//>>excludeEnd("ctx");
}; }),
$globals.RectangleTest);



$core.addClass("StreamTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ self class collectionClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collectionClass", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "newCollection",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newCollection\x0a\x09^ self collectionClass new",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "collectionClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._collectionClass())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCollection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "newStream",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newStream\x0a\x09^ self collectionClass new stream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["stream", "new", "collectionClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._collectionClass())._new())._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newStream",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testAtStartAtEnd",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtStartAtEnd\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09self assert: stream atStart.\x0a\x09self assert: stream atEnd.\x0a\x09\x0a\x09stream nextPutAll: self newCollection.\x0a\x09self assert: stream atEnd.\x0a\x09self deny: stream atStart.\x0a\x09\x0a\x09stream position: 1.\x0a\x09self deny: stream atEnd.\x0a\x09self deny: stream atStart",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newStream", "assert:", "atStart", "atEnd", "nextPutAll:", "newCollection", "deny:", "position:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
stream=$self._newStream();
$1=$recv(stream)._atStart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atStart"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=$recv(stream)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atEnd"]=1;
//>>excludeEnd("ctx");
$self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($self._newCollection());
$3=$recv(stream)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atEnd"]=2;
//>>excludeEnd("ctx");
$self._assert_($3);
$4=$recv(stream)._atStart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atStart"]=2;
//>>excludeEnd("ctx");
$self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._position_((1));
$self._deny_($recv(stream)._atEnd());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$self._deny_($recv(stream)._atStart());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtStartAtEnd",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testContents",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testContents\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09stream nextPutAll: self newCollection.\x0a\x09\x0a\x09self assert: stream contents equals: self newCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newStream", "nextPutAll:", "newCollection", "assert:equals:", "contents"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
stream=$self._newStream();
$1=stream;
$2=$self._newCollection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newCollection"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_($2);
$self._assert_equals_($recv(stream)._contents(),$self._newCollection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testContents",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testIsEmpty",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsEmpty\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09self assert: stream isEmpty.\x0a\x09\x0a\x09stream nextPutAll: self newCollection.\x0a\x09self deny: stream isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newStream", "assert:", "isEmpty", "nextPutAll:", "newCollection", "deny:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
stream=$self._newStream();
$1=$recv(stream)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isEmpty"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
$recv(stream)._nextPutAll_($self._newCollection());
$self._deny_($recv(stream)._isEmpty());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testPosition",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPosition\x0a\x09| collection stream |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09stream nextPutAll: collection.\x0a\x09self assert: stream position equals: collection size.\x0a\x09\x0a\x09stream position: 0.\x0a\x09self assert: stream position equals: 0.\x0a\x09\x0a\x09stream next.\x0a\x09self assert: stream position equals: 1.\x0a\x09\x0a\x09stream next.\x0a\x09self assert: stream position equals: 2",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newCollection", "newStream", "nextPutAll:", "assert:equals:", "position", "size", "position:", "next"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var collection,stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
collection=$self._newCollection();
stream=$self._newStream();
$recv(stream)._nextPutAll_(collection);
$1=$recv(stream)._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$recv(collection)._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._position_((0));
$2=$recv(stream)._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($2,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
$3=$recv(stream)._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_($3,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$recv(stream)._next();
$self._assert_equals_($recv(stream)._position(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPosition",{collection:collection,stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testReading",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReading\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09stream \x0a\x09\x09nextPutAll: collection;\x0a\x09\x09position: 0.\x0a\x09\x0a\x09collection do: [ :each |\x0a\x09\x09self assert: stream next equals: each ].\x0a\x09\x09\x0a\x09self assert: stream next isNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newCollection", "newStream", "nextPutAll:", "position:", "do:", "assert:equals:", "next", "assert:", "isNil"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var stream,collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
collection=$self._newCollection();
stream=$self._newStream();
$1=stream;
$recv($1)._nextPutAll_(collection);
$recv($1)._position_((0));
$recv(collection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(stream)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=1;
//>>excludeEnd("ctx");
return $self._assert_equals_($2,each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._assert_($recv($recv(stream)._next())._isNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReading",{stream:stream,collection:collection})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testStreamContents",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStreamContents",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testWrite",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWrite\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09collection do: [ :each | stream << each ].\x0a\x09self assert: stream contents equals: collection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newCollection", "newStream", "do:", "<<", "assert:equals:", "contents"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var stream,collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
collection=$self._newCollection();
stream=$self._newStream();
$recv(collection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream).__lt_lt(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_($recv(stream)._contents(),collection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWrite",{stream:stream,collection:collection})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testWriting",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWriting\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09collection do: [ :each | stream nextPut: each ].\x0a\x09self assert: stream contents equals: collection.\x0a\x09\x0a\x09stream := self newStream.\x0a\x09stream nextPutAll: collection.\x0a\x09self assert: stream contents equals: collection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newCollection", "newStream", "do:", "nextPut:", "assert:equals:", "contents", "nextPutAll:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var stream,collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
collection=$self._newCollection();
stream=$self._newStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newStream"]=1;
//>>excludeEnd("ctx");
$recv(collection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(stream)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,collection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
stream=$self._newStream();
$recv(stream)._nextPutAll_(collection);
$self._assert_equals_($recv(stream)._contents(),collection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWriting",{stream:stream,collection:collection})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return nil;

}; }),
$globals.StreamTest.a$cls);

$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09^ self collectionClass isNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isNil", "collectionClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._collectionClass())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StreamTest.a$cls);


$core.addClass("ArrayStreamTest", $globals.StreamTest, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "newCollection",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newCollection\x0a\x09^ { true. 1. 3@4. 'foo' }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["@"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [true,(1),(3).__at((4)),"foo"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCollection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ArrayStreamTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ Array",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.Array;

}; }),
$globals.ArrayStreamTest.a$cls);


$core.addClass("StringStreamTest", $globals.StreamTest, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "newCollection",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newCollection\x0a\x09^ 'hello world'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "hello world";

}; }),
$globals.StringStreamTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ String",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.String;

}; }),
$globals.StringStreamTest.a$cls);


$core.addTrait("TClassBuildingTest", "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "assert:isClassCopyOf:",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherClass"],
source: "assert: aClass isClassCopyOf: anotherClass\x0a\x09self assert: aClass superclass == anotherClass superclass.\x0a\x09self assert: aClass instanceVariableNames == anotherClass instanceVariableNames.\x0a\x09self assert: aClass package == anotherClass package.\x0a\x09self assert: (aClass package classes includes: aClass).\x0a\x09self assert: aClass methodDictionary keys equals: anotherClass methodDictionary keys",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "==", "superclass", "instanceVariableNames", "package", "includes:", "classes", "assert:equals:", "keys", "methodDictionary"]
}, function ($methodClass){ return function (aClass,anotherClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$7,$5,$9,$8;
$2=$recv(aClass)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq($recv(anotherClass)._superclass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$recv(aClass)._instanceVariableNames();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instanceVariableNames"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq_eq($recv(anotherClass)._instanceVariableNames());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
$self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$6=$recv(aClass)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
$7=$recv(anotherClass)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__eq_eq($7);
$self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$self._assert_($recv($recv($recv(aClass)._package())._classes())._includes_(aClass));
$9=$recv(aClass)._methodDictionary();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodDictionary"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keys"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($8,$recv($recv(anotherClass)._methodDictionary())._keys());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assert:isClassCopyOf:",{aClass:aClass,anotherClass:anotherClass})});
//>>excludeEnd("ctx");
}; }),
$globals.TClassBuildingTest);

$core.addMethod(
$core.method({
selector: "assert:isJavaScriptInstanceOf:",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aJavaScriptClass"],
source: "assert: anObject isJavaScriptInstanceOf: aJavaScriptClass\x0a\x09self assert: (self is: anObject javaScriptInstanceOf: aJavaScriptClass)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "is:javaScriptInstanceOf:"]
}, function ($methodClass){ return function (anObject,aJavaScriptClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($self._is_javaScriptInstanceOf_(anObject,aJavaScriptClass));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assert:isJavaScriptInstanceOf:",{anObject:anObject,aJavaScriptClass:aJavaScriptClass})});
//>>excludeEnd("ctx");
}; }),
$globals.TClassBuildingTest);

$core.addMethod(
$core.method({
selector: "is:javaScriptInstanceOf:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aJavaScriptClass"],
source: "is: anObject javaScriptInstanceOf: aJavaScriptClass\x0a\x09<inlineJS: 'return anObject instanceof aJavaScriptClass'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return anObject instanceof aJavaScriptClass"]]],
messageSends: []
}, function ($methodClass){ return function (anObject,aJavaScriptClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject instanceof aJavaScriptClass;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"is:javaScriptInstanceOf:",{anObject:anObject,aJavaScriptClass:aJavaScriptClass})});
//>>excludeEnd("ctx");
}; }),
$globals.TClassBuildingTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09self theClass ifNotNil: [ :theClass |\x0a\x09\x09(Array streamContents: [ :s | theClass allSubclassesDo: [ :each | s nextPut: each ] ])\x0a\x09\x09\x09reverseDo: [ :each | Smalltalk removeClass: each ].\x0a\x09\x09Smalltalk removeClass: theClass ]",
referencedClasses: ["Array", "Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "theClass", "reverseDo:", "streamContents:", "allSubclassesDo:", "nextPut:", "removeClass:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._theClass();
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var theClass;
theClass=$receiver;
$recv($recv($globals.Array)._streamContents_((function(s){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(theClass)._allSubclassesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(s)._nextPut_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,2)});
//>>excludeEnd("ctx");
})))._reverseDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._removeClass_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["removeClass:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$recv($globals.Smalltalk)._removeClass_(theClass);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tearDown",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TClassBuildingTest);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TClassBuildingTest);


$core.addTrait("TKeyValueCollectionTest", "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "nonIndexesDo:",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nonIndexesDo: aBlock\x0a\x09\x22Executes block a few times,\x0a\x09each time passing value that is known\x0a\x09not to be an index, as the first parameter\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonIndexesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNewIndex",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewIndex\x0a\x09\x22Answers a value that can be used as index in at:put: or at:ifAbsentPut:\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sampleNewIndex",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: "fixture",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09\x22Executes block a few times,\x0a\x09each time passing known index and value stored\x0a\x09under that index as the parameters\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "testAt",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAt\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09self should: [ self collection at: each ] raise: Error ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection at: index) equals: value ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nonIndexesDo:", "should:raise:", "at:", "collection", "samplesDo:", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self._nonIndexesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
return $recv($1)._at_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_equals_($recv($self._collection())._at_(index),value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAt",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "testAtIfAbsent",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfAbsent\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09self assert: (self collection at: each ifAbsent: [ self sampleNewValue ]) equals: self sampleNewValue ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection at: index ifAbsent: [ self sampleNewValue ]) equals: value ].",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nonIndexesDo:", "assert:equals:", "at:ifAbsent:", "collection", "sampleNewValue", "samplesDo:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
$self._nonIndexesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_ifAbsent_(each,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$3=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
return $self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_equals_($recv($self._collection())._at_ifAbsent_(index,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
})),value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "testAtIfAbsentPut",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfAbsentPut\x0a\x09| newCollection |\x0a\x09newCollection := self collection.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (newCollection at: index ifAbsentPut: [ self sampleNewValue ]) equals: value ].\x0a\x09self assert: newCollection equals: self collection.\x0a\x09self assert: (newCollection at: self sampleNewIndex ifAbsentPut: [ self sampleNewValue ]) equals: self sampleNewValue.\x0a\x09self assert: newCollection equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collection", "samplesDo:", "assert:equals:", "at:ifAbsentPut:", "sampleNewValue", "sampleNewIndex", "collectionWithNewValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newCollection=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(newCollection)._at_ifAbsentPut_(index,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifAbsentPut:"]=1;
//>>excludeEnd("ctx");
return $self._assert_equals_($1,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_(newCollection,$self._collection());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv(newCollection)._at_ifAbsentPut_($self._sampleNewIndex(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
})),$self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$self._assert_equals_(newCollection,$self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsentPut",{newCollection:newCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "testAtIfPresent",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfPresent\x0a\x09| visited sentinel |\x0a\x09sentinel := Object new.\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: each ifPresent: [ :value1 | visited := value1. sentinel ]) equals: nil.\x0a\x09\x09self assert: visited isNil ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: index ifPresent: [ :value2 | visited := value2. sentinel ]) equals: sentinel.\x0a\x09\x09self assert: visited equals: (self collection at: index) ]",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "nonIndexesDo:", "assert:equals:", "at:ifPresent:", "collection", "assert:", "isNil", "samplesDo:", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var visited,sentinel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
sentinel=$recv($globals.Object)._new();
$self._nonIndexesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
visited=nil;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_ifPresent_(each,(function(value1){
visited=value1;
return sentinel;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifPresent:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
return $self._assert_($recv(visited)._isNil());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
visited=nil;
$4=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._at_ifPresent_(index,(function(value2){
visited=value2;
return sentinel;

}));
$self._assert_equals_($3,sentinel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
return $self._assert_equals_(visited,$recv($self._collection())._at_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfPresent",{visited:visited,sentinel:sentinel})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "testAtIfPresentIfAbsent",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfPresentIfAbsent\x0a\x09| visited sentinel |\x0a\x09sentinel := Object new.\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: each ifPresent: [ :value1 | visited := value1. sentinel ] ifAbsent: [ self sampleNewValue ] ) equals: self sampleNewValue.\x0a\x09\x09self assert: visited isNil ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: index ifPresent: [ :value2 | visited := value2. sentinel ] ifAbsent: [ self sampleNewValue ]) equals: sentinel.\x0a\x09\x09self assert: visited equals: (self collection at: index) ]",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "nonIndexesDo:", "assert:equals:", "at:ifPresent:ifAbsent:", "collection", "sampleNewValue", "assert:", "isNil", "samplesDo:", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var visited,sentinel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
sentinel=$recv($globals.Object)._new();
$self._nonIndexesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
visited=nil;
$2=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_ifPresent_ifAbsent_(each,(function(value1){
visited=value1;
return sentinel;

}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifPresent:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$3=$self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
return $self._assert_($recv(visited)._isNil());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
visited=nil;
$5=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._at_ifPresent_ifAbsent_(index,(function(value2){
visited=value2;
return sentinel;

}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_($4,sentinel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
return $self._assert_equals_(visited,$recv($self._collection())._at_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfPresentIfAbsent",{visited:visited,sentinel:sentinel})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "testAtPut",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtPut\x0a\x09| newCollection |\x0a\x09newCollection := self collection.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09newCollection at: index put: value ].\x0a\x09self assert: newCollection equals: self collection.\x0a\x09newCollection at: self sampleNewIndex put: self sampleNewValue.\x0a\x09self assert: newCollection equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collection", "samplesDo:", "at:put:", "assert:equals:", "sampleNewIndex", "sampleNewValue", "collectionWithNewValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newCollection=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._at_put_(index,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._assert_equals_(newCollection,$self._collection());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(newCollection)._at_put_($self._sampleNewIndex(),$self._sampleNewValue());
$self._assert_equals_(newCollection,$self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtPut",{newCollection:newCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "testIndexOf",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOf\x0a\x09self should: [ self collection indexOf: self sampleNewValue ] raise: Error.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection indexOf: value) equals: index ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "indexOf:", "collection", "sampleNewValue", "samplesDo:", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
return $recv($1)._indexOf_($self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
$self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_equals_($recv($self._collection())._indexOf_(value),index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIndexOf",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "testIndexOfWithNull",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOfWithNull\x0a\x09| jsNull |\x0a\x09jsNull := JSON parse: 'null'.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection at: index put: jsNull; indexOf: jsNull) equals: index ]",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "samplesDo:", "assert:equals:", "at:put:", "collection", "indexOf:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var jsNull;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
jsNull=$recv($globals.JSON)._parse_("null");
$self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$self._collection();
$recv($2)._at_put_(index,jsNull);
$1=$recv($2)._indexOf_(jsNull);
return $self._assert_equals_($1,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIndexOfWithNull",{jsNull:jsNull})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);

$core.addMethod(
$core.method({
selector: "testWithIndexDo",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWithIndexDo\x0a\x09| collection |\x0a\x09collection := self collection.\x0a\x09\x0a\x09self collection withIndexDo: [ :each :index |\x0a\x09\x09self assert: (collection at: index) equals: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collection", "withIndexDo:", "assert:equals:", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
collection=$self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$recv($self._collection())._withIndexDo_((function(each,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_equals_($recv(collection)._at_(index),each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWithIndexDo",{collection:collection})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollectionTest);


$core.addClass("UndefinedTest", $globals.TestCase, [], "Kernel-Tests");
$core.addMethod(
$core.method({
selector: "testCopying",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopying\x0a\x09self assert: nil copy equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "copy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_(nil._copy(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopying",{})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedTest);

$core.addMethod(
$core.method({
selector: "testDeepCopy",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDeepCopy\x0a\x09self assert: nil deepCopy = nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "=", "deepCopy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv(nil._deepCopy()).__eq(nil));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDeepCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedTest);

$core.addMethod(
$core.method({
selector: "testIfNil",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIfNil\x0a\x09self assert: (nil ifNil: [ true ]) equals: true.\x0a\x09self deny: (nil ifNotNil: [ true ]) = true.\x0a\x09self assert: (nil ifNil: [ true ] ifNotNil: [ false ]) equals: true.\x0a\x09self deny: (nil ifNotNil: [ true ] ifNil: [ false ]) = true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "ifNil:", "deny:", "=", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5,$receiver;
if(($receiver = nil) == null || $receiver.a$nil){
$1=true;
} else {
$1=nil;
}
$self._assert_equals_($1,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
if(($receiver = nil) == null || $receiver.a$nil){
$3=nil;
} else {
$3=true;
}
$2=$recv($3).__eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
if(($receiver = nil) == null || $receiver.a$nil){
$4=true;
} else {
$4=false;
}
$self._assert_equals_($4,true);
if(($receiver = nil) == null || $receiver.a$nil){
$6=false;
} else {
$6=true;
}
$5=$recv($6).__eq(true);
$self._deny_($5);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIfNil",{})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedTest);

$core.addMethod(
$core.method({
selector: "testIsNil",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsNil\x0a\x09self assert: nil isNil.\x0a\x09self deny: nil notNil.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "isNil", "deny:", "notNil"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_(nil._isNil());
$self._deny_(nil._notNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsNil",{})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedTest);


$core.setTraitComposition([{trait: $globals.TClassBuildingTest, aliases: {"tearDownTheClass":"tearDown"}}], $globals.ClassBuilderTest);
$core.setTraitComposition([{trait: $globals.TClassBuildingTest}], $globals.ClassTest);
$core.setTraitComposition([{trait: $globals.TKeyValueCollectionTest}], $globals.AssociativeCollectionTest);
$core.setTraitComposition([{trait: $globals.TKeyValueCollectionTest}], $globals.SequenceableCollectionTest);

});
