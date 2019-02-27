define(["amber/boot", "require", "amber/core/Kernel-Classes", "amber/core/Kernel-Exceptions", "amber/core/Kernel-Infrastructure", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Platform-ImportExport");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("AbstractExporter", $globals.Object, [], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AbstractExporter.comment="I am an abstract exporter for Amber source code.\x0a\x0a## API\x0a\x0aUse `#exportPackage:on:` to export a given package on a Stream.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "exportPackage:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},$globals.AbstractExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AbstractExporter);

$core.addMethod(
$core.method({
selector: "extensionMethodsOfPackage:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=$recv($globals.OrderedCollection)._new();
$recv($self._extensionProtocolsOfPackage_(aPackage))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(result)._addAll_($recv(each)._ownMethods());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extensionMethodsOfPackage:",{aPackage:aPackage,result:result},$globals.AbstractExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionMethodsOfPackage: aPackage\x0a\x09| result |\x0a\x09\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09(self extensionProtocolsOfPackage: aPackage) do: [ :each |\x0a\x09\x09result addAll: each ownMethods ].\x0a\x09\x09\x0a\x09^ result",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "extensionProtocolsOfPackage:", "addAll:", "ownMethods"]
}),
$globals.AbstractExporter);

$core.addMethod(
$core.method({
selector: "extensionProtocolsOfPackage:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
var extensionName,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(aPackage)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
extensionName="*".__comma($1);
result=$recv($globals.OrderedCollection)._new();
$recv($recv($recv($recv($globals.Smalltalk)._classes())._asArray())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(a)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=2;
//>>excludeEnd("ctx");
return $recv($2).__lt($recv(b)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv([each,$recv(each)._theMetaClass()])._copyWithout_(nil))._do_((function(behavior){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv($recv(behavior)._protocols())._includes_(extensionName);
if($core.assert($3)){
return $recv(result)._add_($recv($globals.ExportMethodProtocol)._name_theClass_(extensionName,behavior));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({behavior:behavior},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extensionProtocolsOfPackage:",{aPackage:aPackage,extensionName:extensionName,result:result},$globals.AbstractExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionProtocolsOfPackage: aPackage\x0a\x09| extensionName result |\x0a\x09\x0a\x09extensionName := '*', aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09\x22The classes must be loaded since it is extensions only.\x0a\x09Therefore topological sorting (dependency resolution) does not matter here.\x0a\x09Not sorting topologically improves the speed by a number of magnitude.\x0a\x09\x0a\x09Not to shuffle diffs, classes are sorted by their name.\x22\x0a\x09\x0a\x09(Smalltalk classes asArray sorted: [ :a :b | a name < b name ]) do: [ :each |\x0a\x09\x09({each. each theMetaClass} copyWithout: nil) do: [ :behavior |\x0a\x09\x09\x09(behavior protocols includes: extensionName) ifTrue: [\x0a\x09\x09\x09\x09result add: (ExportMethodProtocol name: extensionName theClass: behavior) ] ] ].\x0a\x0a\x09^ result",
referencedClasses: ["OrderedCollection", "Smalltalk", "ExportMethodProtocol"],
//>>excludeEnd("ide");
messageSends: [",", "name", "new", "do:", "sorted:", "asArray", "classes", "<", "copyWithout:", "theMetaClass", "ifTrue:", "includes:", "protocols", "add:", "name:theClass:"]
}),
$globals.AbstractExporter);



$core.addClass("ChunkExporter", $globals.AbstractExporter, [], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ChunkExporter.comment="I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.\x0a\x0aI do not output any compiled code.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "chunkEscape:",
protocol: "convenience",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aString)._replace_with_("!","!!"))._trimBoth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chunkEscape:",{aString:aString},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "chunkEscape: aString\x0a\x09\x22Replace all occurrences of ! with !! and trim at both ends.\x22\x0a\x0a\x09^ (aString replace: '!' with: '!!') trimBoth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trimBoth", "replace:with:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportBehavior:on:",
protocol: "output",
fn: function (aBehavior,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBehavior)._exportBehaviorDefinitionTo_using_(aStream,self);
$self._exportProtocols_on_($self._ownMethodProtocolsOfClass_(aBehavior),aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportBehavior:on:",{aBehavior:aBehavior,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBehavior", "aStream"],
source: "exportBehavior: aBehavior on: aStream\x0a\x09aBehavior exportBehaviorDefinitionTo: aStream using: self.\x0a\x09self \x0a\x09\x09exportProtocols: (self ownMethodProtocolsOfClass: aBehavior)\x0a\x09\x09on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exportBehaviorDefinitionTo:using:", "exportProtocols:on:", "ownMethodProtocolsOfClass:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportCategoryEpilogueOf:on:",
protocol: "output",
fn: function (aCategory,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(" !");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportCategoryEpilogueOf:on:",{aCategory:aCategory,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory", "aStream"],
source: "exportCategoryEpilogueOf: aCategory on: aStream\x0a\x09aStream write: ' !'; lf; lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportCategoryPrologueOf:on:",
protocol: "output",
fn: function (aCategory,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._print_($recv(aCategory)._theClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["print:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._write_(" methodsFor: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._print_(aCategory);
$recv(aStream)._write_("!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportCategoryPrologueOf:on:",{aCategory:aCategory,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory", "aStream"],
source: "exportCategoryPrologueOf: aCategory on: aStream\x0a\x09aStream\x0a\x09\x09write: '!';\x0a\x09\x09print: aCategory theClass;\x0a\x09\x09write: ' methodsFor: ';\x0a\x09\x09print: aCategory;\x0a\x09\x09write: '!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "print:", "theClass"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportDefinitionOf:on:",
protocol: "output",
fn: function (aClass,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv(aStream)._print_($recv(aClass)._superclass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["print:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._write_(" subclass: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._printSymbol_($recv(aClass)._name());
$1=$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._write_(["slots: {",". "._join_($recv($recv(aClass)._instanceVariableNames())._collect_("symbolPrintString")),"}"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._tab();
$recv(aStream)._write_("package: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._print_($recv(aClass)._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["print:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._write_("!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=4;
//>>excludeEnd("ctx");
$2=$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$3=$recv(aClass)._comment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["comment"]=1;
//>>excludeEnd("ctx");
$recv($3)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=5;
//>>excludeEnd("ctx");
$recv(aStream)._print_(aClass);
$recv(aStream)._write_(" commentStamp!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=6;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._write_([$self._chunkEscape_($recv(aClass)._comment()),"!"]);
$4=$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=5;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09print: aClass superclass;\x0a\x09\x09write: ' subclass: ';\x0a\x09\x09printSymbol: aClass name;\x0a\x09\x09lf.\x0a\x09\x22aClass traitComposition\x0a\x09\x09ifNotEmpty: [ aStream tab; write: {'uses: '. aClass traitCompositionDefinition}; lf ].\x22\x0a\x09aStream\x0a\x09\x09tab;\x0a\x09\x09write: {'slots: {'. ('. ' join: (aClass instanceVariableNames collect: #symbolPrintString)). '}'};\x0a\x09\x09lf;\x0a\x09\x09tab;\x0a\x09\x09write: 'package: ';\x0a\x09\x09print: aClass category;\x0a\x09\x09write: '!';\x0a\x09\x09lf.\x0a\x09aClass comment ifNotEmpty: [ aStream\x0a\x09\x09write: '!'; print: aClass; write: ' commentStamp!'; lf;\x0a\x09\x09write: { self chunkEscape: aClass comment. '!' }; lf ].\x0a\x09aStream lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["print:", "superclass", "write:", "printSymbol:", "name", "lf", "tab", "join:", "collect:", "instanceVariableNames", "category", "ifNotEmpty:", "comment", "chunkEscape:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportMetaDefinitionOf:on:",
protocol: "output",
fn: function (aClass,aStream){
var self=this,$self=this;
var classIvars,classTraitComposition;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(aClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
classIvars=$recv($1)._instanceVariableNames();
classTraitComposition=$recv($recv(aClass)._class())._traitComposition();
$2=$recv(classIvars)._notEmpty();
if($core.assert($2)){
$recv(aStream)._print_($recv(aClass)._theMetaClass());
$recv(aStream)._space();
$recv(aStream)._write_(["slots: {",". "._join_($recv(classIvars)._collect_("symbolPrintString")),"}!"]);
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream,classIvars:classIvars,classTraitComposition:classTraitComposition},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x0a\x09| classIvars classTraitComposition |\x0a\x09classIvars := aClass class instanceVariableNames.\x0a\x09classTraitComposition := aClass class traitComposition.\x0a\x0a\x09(classIvars notEmpty \x22or: [classTraitComposition notEmpty]\x22) ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09\x09print: aClass theMetaClass.\x0a\x09\x09aStream space. \x22classTraitComposition\x0a\x09\x09\x09ifEmpty: [ aStream space ]\x0a\x09\x09\x09ifNotEmpty: [ aStream lf; tab; write: {'uses: '. aClass class traitCompositionDefinition}; lf; tab ].\x22\x0a\x09\x09aStream\x0a\x09\x09\x09write: {'slots: {'. ('. ' join: (classIvars collect: #symbolPrintString)). '}!'}; lf; lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["instanceVariableNames", "class", "traitComposition", "ifTrue:", "notEmpty", "print:", "theMetaClass", "space", "write:", "join:", "collect:", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportMethod:on:",
protocol: "output",
fn: function (aMethod,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._write_($self._chunkEscape_($recv(aMethod)._source()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
$recv(aStream)._write_("!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09lf; lf; write: (self chunkEscape: aMethod source); lf;\x0a\x09\x09write: '!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lf", "write:", "chunkEscape:", "source"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackage:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$self._exportPackageDefinitionOf_on_(aPackage,aStream);
$self._exportPackageImportsOf_on_(aPackage,aStream);
$recv($recv(aPackage)._sortedClasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._exportBehavior_on_(each,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["exportBehavior:on:"]=1;
//>>excludeEnd("ctx");
$1=$recv(each)._theMetaClass();
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
var meta;
meta=$receiver;
return $self._exportBehavior_on_(meta,aStream);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._exportPackageTraitCompositionsOf_on_(aPackage,aStream);
$self._exportProtocols_on_($self._extensionProtocolsOfPackage_(aPackage),aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x0a\x09self\x0a\x09\x09exportPackageDefinitionOf: aPackage on: aStream;\x0a\x09\x09exportPackageImportsOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :each |\x0a\x09\x09self exportBehavior: each on: aStream.\x0a\x09\x09each theMetaClass ifNotNil: [ :meta | self exportBehavior: meta on: aStream ] ].\x0a\x09\x0a\x09self exportPackageTraitCompositionsOf: aPackage on: aStream.\x0a\x0a\x09self \x0a\x09\x09exportProtocols: (self extensionProtocolsOfPackage: aPackage)\x0a\x09\x09on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exportPackageDefinitionOf:on:", "exportPackageImportsOf:on:", "do:", "sortedClasses", "exportBehavior:on:", "ifNotNil:", "theMetaClass", "exportPackageTraitCompositionsOf:on:", "exportProtocols:on:", "extensionProtocolsOfPackage:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackageDefinitionOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("Smalltalk createPackage: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._print_($recv(aPackage)._name());
$recv(aStream)._write_("!");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: 'Smalltalk createPackage: ';\x0a\x09\x09print: aPackage name;\x0a\x09\x09write: '!';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "print:", "name", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackageImportsOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($recv(aPackage)._imports())._ifNotEmpty_((function(imports){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("(Smalltalk packageAt: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$1=$recv(aPackage)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._print_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["print:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._write_(" ifAbsent: [ self error: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._print_("Package not created: ".__comma($recv(aPackage)._name()));
$recv(aStream)._write_([" ]) imports: ",$self._chunkEscape_($recv(aPackage)._importsDefinition()),"!"]);
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({imports:imports},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageImportsOf:on:",{aPackage:aPackage,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageImportsOf: aPackage on: aStream\x0a\x09aPackage imports ifNotEmpty: [ :imports | aStream\x0a\x09\x09write: '(Smalltalk packageAt: ';\x0a\x09\x09print: aPackage name;\x0a\x09\x09write: ' ifAbsent: [ self error: ';\x0a\x09\x09print: 'Package not created: ', aPackage name;\x0a\x09\x09write: { ' ]) imports: '. self chunkEscape: aPackage importsDefinition. '!' };\x0a\x09\x09lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "imports", "write:", "print:", "name", ",", "chunkEscape:", "importsDefinition", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackageTraitCompositionsOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aPackage)._traitCompositions())._ifNotEmpty_((function(traitCompositions){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(traitCompositions)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._exportTraitComposition_of_on_(value,key,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._write_("! !");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({traitCompositions:traitCompositions},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageTraitCompositionsOf:on:",{aPackage:aPackage,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageTraitCompositionsOf: aPackage on: aStream\x0a\x09aPackage traitCompositions ifNotEmpty: [ :traitCompositions |\x0a\x09\x09traitCompositions keysAndValuesDo: [ :key :value | self exportTraitComposition: value of: key on: aStream ].\x0a\x09\x09aStream write: '! !'; lf; lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "traitCompositions", "keysAndValuesDo:", "exportTraitComposition:of:on:", "write:", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocol:on:",
protocol: "output",
fn: function (aProtocol,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aProtocol)._ownMethods())._ifNotEmpty_((function(methods){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._exportProtocolPrologueOf_on_(aProtocol,aStream);
$recv(methods)._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._exportMethod_on_(method,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $self._exportProtocolEpilogueOf_on_(aProtocol,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({methods:methods},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocol:on:",{aProtocol:aProtocol,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocol: aProtocol on: aStream\x0a\x09aProtocol ownMethods ifNotEmpty: [ :methods |\x0a\x09\x09self exportProtocolPrologueOf: aProtocol on: aStream.\x0a\x09\x09methods do: [ :method | \x0a\x09\x09\x09self exportMethod: method on: aStream ].\x0a\x09\x09self exportProtocolEpilogueOf: aProtocol on: aStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "ownMethods", "exportProtocolPrologueOf:on:", "do:", "exportMethod:on:", "exportProtocolEpilogueOf:on:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocolEpilogueOf:on:",
protocol: "output",
fn: function (aProtocol,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(" !");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocolEpilogueOf:on:",{aProtocol:aProtocol,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocolEpilogueOf: aProtocol on: aStream\x0a\x09aStream write: ' !'; lf; lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocolPrologueOf:on:",
protocol: "output",
fn: function (aProtocol,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._print_($recv(aProtocol)._theClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["print:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._write_(" methodsFor: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._print_($recv(aProtocol)._name());
$recv(aStream)._write_("!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocolPrologueOf:on:",{aProtocol:aProtocol,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocolPrologueOf: aProtocol on: aStream\x0a\x09aStream\x0a\x09\x09write: '!';\x0a\x09\x09print: aProtocol theClass;\x0a\x09\x09write: ' methodsFor: ';\x0a\x09\x09print: aProtocol name;\x0a\x09\x09write: '!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "print:", "theClass", "name"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocols:on:",
protocol: "output",
fn: function (aCollection,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._exportProtocol_on_(each,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocols:on:",{aCollection:aCollection,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "aStream"],
source: "exportProtocols: aCollection on: aStream\x0a\x09aCollection do: [ :each |\x0a\x09\x09self exportProtocol: each on: aStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "exportProtocol:on:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportTraitComposition:of:on:",
protocol: "output",
fn: function (aTraitComposition,aBehavior,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._print_(aBehavior);
$recv(aStream)._write_(" setTraitComposition: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._write_($recv(aBehavior)._traitCompositionDefinition());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._write_(" asTraitComposition!");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportTraitComposition:of:on:",{aTraitComposition:aTraitComposition,aBehavior:aBehavior,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTraitComposition", "aBehavior", "aStream"],
source: "exportTraitComposition: aTraitComposition of: aBehavior on: aStream\x0a\x09aStream \x0a\x09\x09print: aBehavior;\x0a\x09\x09write: ' setTraitComposition: ';\x0a\x09\x09write: aBehavior traitCompositionDefinition;\x0a\x09\x09write: ' asTraitComposition!';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["print:", "write:", "traitCompositionDefinition", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportTraitDefinitionOf:on:",
protocol: "output",
fn: function (aClass,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv(aStream)._write_("Trait named: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._printSymbol_($recv(aClass)._name());
$1=$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._tab();
$recv(aStream)._write_("package: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._print_($recv(aClass)._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["print:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._write_("!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$2=$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$3=$recv(aClass)._comment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["comment"]=1;
//>>excludeEnd("ctx");
$recv($3)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._print_(aClass);
$recv(aStream)._write_(" commentStamp!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=5;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._write_([$self._chunkEscape_($recv(aClass)._comment()),"!"]);
$4=$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportTraitDefinitionOf:on:",{aClass:aClass,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportTraitDefinitionOf: aClass on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09write: 'Trait named: '; printSymbol: aClass name; lf.\x0a\x09\x22aClass traitComposition\x0a\x09\x09ifNotEmpty: [ aStream tab; write: {'uses: '. aClass traitCompositionDefinition}; lf ].\x22\x0a\x09aStream\x0a\x09\x09tab; write: 'package: '; print:\x09aClass category; write: '!'; lf.\x0a\x09aClass comment ifNotEmpty: [\x0a\x09\x09aStream\x0a\x09\x09write: '!'; print: aClass; write: ' commentStamp!'; lf;\x0a\x09\x09write: { self chunkEscape: aClass comment. '!' }; lf ].\x0a\x09aStream lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "printSymbol:", "name", "lf", "tab", "print:", "category", "ifNotEmpty:", "comment", "chunkEscape:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "extensionCategoriesOfPackage:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
var name,map,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
name=$recv(aPackage)._name();
result=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($recv($globals.Package)._sortedClasses_($recv($globals.Smalltalk)._classes()))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([each,$recv(each)._theMetaClass()])._do_((function(aClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
map=$recv($globals.Dictionary)._new();
$recv(aClass)._protocolsDo_((function(category,methods){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$1=$recv(category).__eq("*".__comma(name));
if($core.assert($1)){
return $recv(map)._at_put_(category,methods);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({category:category,methods:methods},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $recv(result)._addAll_($recv($recv($recv(map)._keys())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(a).__lt_eq(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,5)});
//>>excludeEnd("ctx");
})))._collect_((function(category){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($globals.MethodCategory)._name_theClass_methods_(category,aClass,$recv(map)._at_(category));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({category:category},$ctx3,6)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({aClass:aClass},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extensionCategoriesOfPackage:",{aPackage:aPackage,name:name,map:map,result:result},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionCategoriesOfPackage: aPackage\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| name map result |\x0a\x09name := aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09(Package sortedClasses: Smalltalk classes) do: [ :each |\x0a\x09\x09{each. each theMetaClass} do: [ :aClass |\x0a\x09\x09\x09map := Dictionary new.\x0a\x09\x09\x09aClass protocolsDo: [ :category :methods |\x0a\x09\x09\x09\x09category = ('*', name) ifTrue: [ map at: category put: methods ] ].\x0a\x09\x09\x09result addAll: ((map keys sorted: [ :a :b | a <= b ]) collect: [ :category |\x0a\x09\x09\x09\x09MethodCategory name: category theClass: aClass methods: (map at: category) ]) ] ].\x0a\x09^ result",
referencedClasses: ["OrderedCollection", "Package", "Smalltalk", "Dictionary", "MethodCategory"],
//>>excludeEnd("ide");
messageSends: ["name", "new", "do:", "sortedClasses:", "classes", "theMetaClass", "protocolsDo:", "ifTrue:", "=", ",", "at:put:", "addAll:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "ownCategoriesOfClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
var map;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
map=$recv($globals.Dictionary)._new();
$recv(aClass)._protocolsDo_((function(each,methods){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._match_("^\x5c*");
if(!$core.assert($1)){
return $recv(map)._at_put_(each,methods);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,methods:methods},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($recv($recv(map)._keys())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__lt_eq(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.MethodCategory)._name_theClass_methods_(each,aClass,$recv(map)._at_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfClass:",{aClass:aClass,map:map},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownCategoriesOfClass: aClass\x0a\x09\x22Answer the protocols of aClass that are not package extensions\x22\x0a\x09\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| map |\x0a\x09map := Dictionary new.\x0a\x09aClass protocolsDo: [ :each :methods |\x0a\x09\x09(each match: '^\x5c*') ifFalse: [ map at: each put: methods ] ].\x0a\x09^ (map keys sorted: [ :a :b | a <= b ]) collect: [ :each |\x0a\x09\x09MethodCategory name: each theClass: aClass methods: (map at: each) ]",
referencedClasses: ["Dictionary", "MethodCategory"],
//>>excludeEnd("ide");
messageSends: ["new", "protocolsDo:", "ifFalse:", "match:", "at:put:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "ownCategoriesOfMetaClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._ownCategoriesOfClass_($recv(aClass)._theMetaClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfMetaClass:",{aClass:aClass},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownCategoriesOfMetaClass: aClass\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09^ self ownCategoriesOfClass: aClass theMetaClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ownCategoriesOfClass:", "theMetaClass"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "ownMethodProtocolsOfClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aClass)._ownProtocols())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.ExportMethodProtocol)._name_theClass_(each,aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodProtocolsOfClass:",{aClass:aClass},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodProtocolsOfClass: aClass\x0a\x09\x22Answer a collection of ExportMethodProtocol object of aClass that are not package extensions\x22\x0a\x09\x0a\x09^ aClass ownProtocols collect: [ :each |\x0a\x09\x09ExportMethodProtocol name: each theClass: aClass ]",
referencedClasses: ["ExportMethodProtocol"],
//>>excludeEnd("ide");
messageSends: ["collect:", "ownProtocols", "name:theClass:"]
}),
$globals.ChunkExporter);



$core.addClass("Exporter", $globals.AbstractExporter, [], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Exporter.comment="I am responsible for outputting Amber code into a JavaScript string.\x0a\x0aThe generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.\x0a\x0a## Use case\x0a\x0aI am typically used to save code outside of the Amber runtime (committing to disk, etc.).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "exportBehavior:on:",
protocol: "output",
fn: function (aBehavior,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBehavior)._exportBehaviorDefinitionTo_using_(aStream,self);
$recv($recv(aBehavior)._ownMethods())._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._exportMethod_on_(method,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportBehavior:on:",{aBehavior:aBehavior,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBehavior", "aStream"],
source: "exportBehavior: aBehavior on: aStream\x0a\x09aBehavior exportBehaviorDefinitionTo: aStream using: self.\x0a\x09aBehavior ownMethods do: [ :method |\x0a\x09\x09self exportMethod: method on: aStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exportBehaviorDefinitionTo:using:", "do:", "ownMethods", "exportMethod:on:"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportDefinitionOf:on:",
protocol: "output",
fn: function (aClass,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$5,$4,$6,$7,$2,$1,$8,$10,$9,$receiver;
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$3=$recv($recv(aClass)._name())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=1;
//>>excludeEnd("ctx");
$5=$recv(aClass)._superclass();
if(($receiver = $5) == null || $receiver.a$nil){
$4="null";
} else {
var superclass;
superclass=$receiver;
$4=$recv(superclass)._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=2;
//>>excludeEnd("ctx");
}
$6=$recv($recv(aClass)._instanceVariableNames())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=3;
//>>excludeEnd("ctx");
$7=$recv($recv(aClass)._category())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=4;
//>>excludeEnd("ctx");
$2=["$core.addClass(",$3,", ",$4,", ",$6,", ",$7,");"];
$1=$recv(aStream)._write_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$8=$recv(aClass)._comment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["comment"]=1;
//>>excludeEnd("ctx");
$recv($8)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._write_("//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$10=$recv(aClass)._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJavaScriptSource"]=5;
//>>excludeEnd("ctx");
$9=[$10,".comment=",$recv($recv($recv(aClass)._comment())._crlfSanitized())._asJavaScriptSource(),";"];
$recv(aStream)._write_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
return $recv(aStream)._write_("//>>excludeEnd(\x22ide\x22);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09write: {\x0a\x09\x09\x09'$core.addClass('.\x0a\x09\x09\x09aClass name asJavaScriptSource. ', '.\x0a\x09\x09\x09aClass superclass ifNil: [ 'null' ] ifNotNil: [ :superclass | superclass asJavaScriptSource ]. ', '.\x0a\x09\x09\x09aClass instanceVariableNames asJavaScriptSource. ', '.\x0a\x09\x09\x09aClass category asJavaScriptSource.\x0a\x09\x09\x09');' }.\x0a\x09aClass comment ifNotEmpty: [\x0a\x09\x09aStream\x0a\x09\x09\x09lf;\x0a\x09\x09\x09write: '//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);'; lf;\x0a\x09\x09\x09write: { aClass asJavaScriptSource. '.comment='. aClass comment crlfSanitized asJavaScriptSource. ';' }; lf;\x0a\x09\x09\x09write: '//>>excludeEnd(\x22ide\x22);' ].\x0a\x09aStream lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lf", "write:", "asJavaScriptSource", "name", "ifNil:ifNotNil:", "superclass", "instanceVariableNames", "category", "ifNotEmpty:", "comment", "crlfSanitized"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportMetaDefinitionOf:on:",
protocol: "output",
fn: function (aClass,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$2=$recv(aClass)._theMetaClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["theMetaClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._instanceVariableNames();
$recv($1)._ifNotEmpty_((function(classIvars){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv($recv(aClass)._theMetaClass())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJavaScriptSource"]=1;
//>>excludeEnd("ctx");
$3=["$core.setSlots(",$4,", ",$recv(classIvars)._asJavaScriptSource(),");"];
$recv(aStream)._write_($3);
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({classIvars:classIvars},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x09aStream lf.\x0a\x09aClass theMetaClass instanceVariableNames ifNotEmpty: [ :classIvars | aStream\x0a\x09\x09write: { '$core.setSlots('. aClass theMetaClass asJavaScriptSource. ', '. classIvars asJavaScriptSource. ');' };\x0a\x09\x09lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lf", "ifNotEmpty:", "instanceVariableNames", "theMetaClass", "write:", "asJavaScriptSource"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportMethod:on:",
protocol: "output",
fn: function (aMethod,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9,$12,$11,$14,$13;
$recv(aStream)._write_("$core.addMethod(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._write_("$core.method({");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$2=$recv($recv(aMethod)._selector())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=1;
//>>excludeEnd("ctx");
$1=["selector: ",$2,","];
$recv(aStream)._write_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$4=$recv($recv(aMethod)._protocol())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=2;
//>>excludeEnd("ctx");
$3=["protocol: ",$4,","];
$recv(aStream)._write_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._write_(["fn: ",$recv($recv(aMethod)._fn())._compiledSource(),","]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=5;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=5;
//>>excludeEnd("ctx");
$recv(aStream)._write_("//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=6;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=6;
//>>excludeEnd("ctx");
$6=$recv($recv(aMethod)._arguments())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=3;
//>>excludeEnd("ctx");
$5=["args: ",$6,","];
$recv(aStream)._write_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=7;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=7;
//>>excludeEnd("ctx");
$8=$recv($recv(aMethod)._source())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=4;
//>>excludeEnd("ctx");
$7=["source: ",$8,","];
$recv(aStream)._write_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=8;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=8;
//>>excludeEnd("ctx");
$10=$recv($recv(aMethod)._referencedClasses())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=5;
//>>excludeEnd("ctx");
$9=["referencedClasses: ",$10,","];
$recv(aStream)._write_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=9;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=9;
//>>excludeEnd("ctx");
$recv(aStream)._write_("//>>excludeEnd(\x22ide\x22);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=10;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=10;
//>>excludeEnd("ctx");
$12=$recv($recv(aMethod)._pragmas())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=6;
//>>excludeEnd("ctx");
$11=["pragmas: ",$12,","];
$recv(aStream)._write_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=11;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=11;
//>>excludeEnd("ctx");
$14=$recv($recv(aMethod)._messageSends())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=7;
//>>excludeEnd("ctx");
$13=["messageSends: ",$14];
$recv(aStream)._write_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=12;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=12;
//>>excludeEnd("ctx");
$recv(aStream)._write_("}),");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=13;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=13;
//>>excludeEnd("ctx");
$recv(aStream)._write_([$recv($recv(aMethod)._methodClass())._asJavaScriptSource(),");"]);
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=14;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09write: '$core.addMethod('; lf;\x0a\x09\x09write: '$core.method({'; lf;\x0a\x09\x09write: { 'selector: '. aMethod selector asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: { 'protocol: '. aMethod protocol asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: { 'fn: '. aMethod fn compiledSource. ',' }; lf;\x0a\x09\x09write: '//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);'; lf;\x0a\x09\x09write: { 'args: '. aMethod arguments asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: { 'source: '. aMethod source asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: { 'referencedClasses: '. aMethod referencedClasses asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: '//>>excludeEnd(\x22ide\x22);'; lf;\x0a\x09\x09write: { 'pragmas: '. aMethod pragmas asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: { 'messageSends: '. aMethod messageSends asJavaScriptSource }; lf;\x0a\x09\x09write: '}),'; lf;\x0a\x09\x09write: { aMethod methodClass asJavaScriptSource. ');' }; lf; lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "lf", "asJavaScriptSource", "selector", "protocol", "compiledSource", "fn", "arguments", "source", "referencedClasses", "pragmas", "messageSends", "methodClass"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackage:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$self._exportPackagePrologueOf_on_(aPackage,aStream);
$self._exportPackageDefinitionOf_on_(aPackage,aStream);
$self._exportPackageContextOf_on_(aPackage,aStream);
$self._exportPackageImportsOf_on_(aPackage,aStream);
$self._exportPackageTransportOf_on_(aPackage,aStream);
$recv($recv(aPackage)._sortedClasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._exportBehavior_on_(each,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["exportBehavior:on:"]=1;
//>>excludeEnd("ctx");
$1=$recv(each)._theMetaClass();
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
var meta;
meta=$receiver;
return $self._exportBehavior_on_(meta,aStream);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$self._exportPackageTraitCompositionsOf_on_(aPackage,aStream);
$recv($self._extensionMethodsOfPackage_(aPackage))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._exportMethod_on_(each,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$self._exportPackageEpilogueOf_on_(aPackage,aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09\x0a\x09self \x0a\x09\x09exportPackagePrologueOf: aPackage on: aStream;\x0a\x09\x09exportPackageDefinitionOf: aPackage on: aStream;\x0a\x09\x09exportPackageContextOf: aPackage on: aStream;\x0a\x09\x09exportPackageImportsOf: aPackage on: aStream;\x0a\x09\x09exportPackageTransportOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :each |\x0a\x09\x09self exportBehavior: each on: aStream.\x0a\x09\x09each theMetaClass ifNotNil: [ :meta | self exportBehavior: meta on: aStream ] ].\x0a\x09\x09\x09\x0a\x09self exportPackageTraitCompositionsOf: aPackage on: aStream.\x0a\x0a\x09(self extensionMethodsOfPackage: aPackage) do: [ :each |\x0a\x09\x09self exportMethod: each on: aStream ].\x0a\x09\x09\x0a\x09self exportPackageEpilogueOf: aPackage on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exportPackagePrologueOf:on:", "exportPackageDefinitionOf:on:", "exportPackageContextOf:on:", "exportPackageImportsOf:on:", "exportPackageTransportOf:on:", "do:", "sortedClasses", "exportBehavior:on:", "ifNotNil:", "theMetaClass", "exportPackageTraitCompositionsOf:on:", "extensionMethodsOfPackage:", "exportMethod:on:", "exportPackageEpilogueOf:on:"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageBodyBlockPrologueOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageBodyBlockPrologueOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageBodyBlockPrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: 'var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;'; lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageContextOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("$pkg.innerEval = function (expr) { return eval(expr); };");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageContextOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageContextOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: '$pkg.innerEval = function (expr) { return eval(expr); };';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageDefinitionOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(["var $pkg = $core.addPackage(",$recv($recv(aPackage)._name())._asJavaScriptSource(),");"]);
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: { 'var $pkg = $core.addPackage('. aPackage name asJavaScriptSource. ');' };\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "asJavaScriptSource", "name", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageEpilogueOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageImportsOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aPackage)._importsAsJson())._ifNotEmpty_((function(imports){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(["$pkg.imports = ",$recv(imports)._asJavaScriptSource(),";"]);
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({imports:imports},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageImportsOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageImportsOf: aPackage on: aStream\x0a\x09aPackage importsAsJson ifNotEmpty: [ :imports |\x0a\x09\x09aStream\x0a\x09\x09\x09write: { '$pkg.imports = '. imports asJavaScriptSource. ';' };\x0a\x09\x09\x09lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "importsAsJson", "write:", "asJavaScriptSource", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackagePrologueOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageTraitCompositionsOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aPackage)._traitCompositions())._ifNotEmpty_((function(traitCompositions){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(traitCompositions)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._exportTraitComposition_of_on_(value,key,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({traitCompositions:traitCompositions},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageTraitCompositionsOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageTraitCompositionsOf: aPackage on: aStream\x0a\x09aPackage traitCompositions ifNotEmpty: [ :traitCompositions |\x0a\x09\x09traitCompositions keysAndValuesDo: [ :key :value | self exportTraitComposition: value of: key on: aStream ].\x0a\x09\x09aStream lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "traitCompositions", "keysAndValuesDo:", "exportTraitComposition:of:on:", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageTransportOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(["$pkg.transport = ",$recv($recv(aPackage)._transport())._asJSONString(),";"]);
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageTransportOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageTransportOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: { '$pkg.transport = '. aPackage transport asJSONString. ';' };\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "asJSONString", "transport", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportTraitComposition:of:on:",
protocol: "output",
fn: function (aTraitComposition,aBehavior,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(aTraitComposition)._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=1;
//>>excludeEnd("ctx");
$1=["$core.setTraitComposition(",$2,", ",$recv(aBehavior)._asJavaScriptSource(),");"];
$recv(aStream)._write_($1);
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportTraitComposition:of:on:",{aTraitComposition:aTraitComposition,aBehavior:aBehavior,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTraitComposition", "aBehavior", "aStream"],
source: "exportTraitComposition: aTraitComposition of: aBehavior on: aStream\x0a\x09aStream write: {\x0a\x09\x09'$core.setTraitComposition('.\x0a\x09\x09aTraitComposition asJavaScriptSource.\x0a\x09\x09', '.\x0a\x09\x09aBehavior asJavaScriptSource.\x0a\x09\x09');' };\x0a\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "asJavaScriptSource", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportTraitDefinitionOf:on:",
protocol: "output",
fn: function (aClass,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$5,$7,$6;
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$3=$recv($recv(aClass)._name())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=1;
//>>excludeEnd("ctx");
$4=$recv($recv(aClass)._category())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavaScriptSource"]=2;
//>>excludeEnd("ctx");
$2=["$core.addTrait(",$3,", ",$4,");"];
$1=$recv(aStream)._write_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$5=$recv(aClass)._comment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["comment"]=1;
//>>excludeEnd("ctx");
$recv($5)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._write_("//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$7=$recv(aClass)._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJavaScriptSource"]=3;
//>>excludeEnd("ctx");
$6=[$7,".comment=",$recv($recv($recv(aClass)._comment())._crlfSanitized())._asJavaScriptSource(),";"];
$recv(aStream)._write_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
return $recv(aStream)._write_("//>>excludeEnd(\x22ide\x22);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportTraitDefinitionOf:on:",{aClass:aClass,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportTraitDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09write: {\x0a\x09\x09\x09'$core.addTrait('.\x0a\x09\x09\x09aClass name asJavaScriptSource. ', '.\x0a\x09\x09\x09aClass category asJavaScriptSource.\x0a\x09\x09\x09');' }.\x0a\x09aClass comment ifNotEmpty: [\x0a\x09\x09aStream\x0a\x09\x09\x09lf;\x0a\x09\x09\x09write: '//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);'; lf;\x0a\x09\x09\x09write: { aClass asJavaScriptSource. '.comment='. aClass comment crlfSanitized asJavaScriptSource. ';' }; lf;\x0a\x09\x09\x09write: '//>>excludeEnd(\x22ide\x22);' ].\x0a\x09aStream lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lf", "write:", "asJavaScriptSource", "name", "category", "ifNotEmpty:", "comment", "crlfSanitized"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "ownMethodsOfClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($recv($recv($recv(aClass)._methodDictionary())._values())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(a)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
return $recv($1).__lt_eq($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})))._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._protocol())._match_("^\x5c*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfClass:",{aClass:aClass},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodsOfClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ ((aClass methodDictionary values) sorted: [ :a :b | a selector <= b selector ])\x0a\x09\x09reject: [ :each | (each protocol match: '^\x5c*') ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reject:", "sorted:", "values", "methodDictionary", "<=", "selector", "match:", "protocol"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "ownMethodsOfMetaClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._ownMethodsOfClass_($recv(aClass)._theMetaClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfMetaClass:",{aClass:aClass},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodsOfMetaClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ self ownMethodsOfClass: aClass theMetaClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ownMethodsOfClass:", "theMetaClass"]
}),
$globals.Exporter);



$core.addClass("AmdExporter", $globals.Exporter, ["namespace"], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AmdExporter.comment="I am used to export Packages in an AMD (Asynchronous Module Definition) JavaScript format.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "amdNamesOfPackages:",
protocol: "private",
fn: function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($recv(anArray)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$self._amdNamespaceOfPackage_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["amdNamespaceOfPackage:"]=1;
//>>excludeEnd("ctx");
return $recv($1)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self._amdNamespaceOfPackage_(each)).__comma("/")).__comma($recv(each)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"amdNamesOfPackages:",{anArray:anArray},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "amdNamesOfPackages: anArray\x0a\x09^ (anArray\x0a\x09\x09select: [ :each | (self amdNamespaceOfPackage: each) notNil ])\x0a\x09\x09collect: [ :each | (self amdNamespaceOfPackage: each), '/', each name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "select:", "notNil", "amdNamespaceOfPackage:", ",", "name"]
}),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "amdNamespaceOfPackage:",
protocol: "private",
fn: function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(aPackage)._transport();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["transport"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._type();
$1=$recv($2).__eq("amd");
if($core.assert($1)){
return $recv($recv(aPackage)._transport())._namespace();
} else {
return nil;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"amdNamespaceOfPackage:",{aPackage:aPackage},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "amdNamespaceOfPackage: aPackage\x0a\x09^ (aPackage transport type = 'amd')\x0a\x09\x09ifTrue: [ aPackage transport namespace ]\x0a\x09\x09ifFalse: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "type", "transport", "namespace"]
}),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "exportPackageEpilogueOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("});");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: '});';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "lf"]
}),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "exportPackageImportsOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
var importsForOutput,pragmaStart,pragmaEnd;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$7,$11,$10,$12,$9,$8,$13,$6;
$1=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
pragmaStart="//>>excludeStart(\x22imports\x22, pragmas.excludeImports);".__comma($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
pragmaEnd="//>>excludeEnd(\x22imports\x22);".__comma($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.AmdExporter.superclass||$boot.nilAsClass).fn.prototype._exportPackageImportsOf_on_.apply($self, [aPackage,aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
importsForOutput=$self._importsForOutput_(aPackage);
$recv($recv(importsForOutput)._value())._ifNotEmpty_((function(imports){
var vars;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(pragmaStart);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
vars=$recv(importsForOutput)._key();
$recv(vars)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=","._join_(vars);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["join:"]=1;
//>>excludeEnd("ctx");
$3=["var ",$4,";"];
$recv(aStream)._write_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$5=$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$7=$recv(imports)._asJavaScriptSource();
$11=$recv(vars)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$10=(1)._to_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$12=$recv(each)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
return "$".__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
$8=","._join_($9);
$6=["$pkg.isReady = new Promise(function (resolve, reject) { requirejs(",$7,", function (",$8,") {",$recv((1)._to_($recv(vars)._size()))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$13=$recv($recv($recv(vars)._at_(each)).__comma("=$")).__comma($recv(each)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=5;
//>>excludeEnd("ctx");
return $recv($13).__comma("; ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)});
//>>excludeEnd("ctx");
})),"resolve();}, reject); });"];
$recv(aStream)._write_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
return $recv(aStream)._write_(pragmaEnd);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({imports:imports,vars:vars},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifNotEmpty:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageImportsOf:on:",{aPackage:aPackage,aStream:aStream,importsForOutput:importsForOutput,pragmaStart:pragmaStart,pragmaEnd:pragmaEnd},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageImportsOf: aPackage on: aStream\x0a\x09| importsForOutput pragmaStart pragmaEnd |\x0a\x09pragmaStart := '//>>excludeStart(\x22imports\x22, pragmas.excludeImports);', String lf.\x0a\x09pragmaEnd := '//>>excludeEnd(\x22imports\x22);', String lf.\x0a\x09super exportPackageImportsOf: aPackage on: aStream.\x0a\x09importsForOutput := self importsForOutput: aPackage.\x0a\x09importsForOutput value ifNotEmpty: [ :imports |\x0a\x09\x09| vars |\x0a\x09\x09aStream write: pragmaStart.\x0a\x09\x09vars := importsForOutput key.\x0a\x09\x09vars ifNotEmpty: [ aStream write: { 'var '. ',' join: vars. ';' }; lf ]. \x0a\x09\x09aStream\x0a\x09\x09\x09write: {\x0a\x09\x09\x09\x09'$pkg.isReady = new Promise(function (resolve, reject) { requirejs('.\x0a\x09\x09\x09\x09imports asJavaScriptSource.\x0a\x09\x09\x09\x09', function ('.\x0a\x09\x09\x09\x09',' join: ((1 to: vars size) collect: [ :each | '$', each asString ]).\x0a\x09\x09\x09\x09') {'.\x0a\x09\x09\x09\x09(1 to: vars size) collect: [ :each | (vars at: each), '=$', each asString, '; ' ].\x0a\x09\x09\x09\x09'resolve();}, reject); });' };\x0a\x09\x09\x09lf;\x0a\x09\x09\x09write: pragmaEnd ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "lf", "exportPackageImportsOf:on:", "importsForOutput:", "ifNotEmpty:", "value", "write:", "key", "join:", "asJavaScriptSource", "collect:", "to:", "size", "asString", "at:"]
}),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "exportPackagePrologueOf:on:",
protocol: "output",
fn: function (aPackage,aStream){
var self=this,$self=this;
var loadDependencies,pragmaStart,pragmaEnd;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
pragmaStart="//>>excludeStart(\x22imports\x22, pragmas.excludeImports);".__comma($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
pragmaEnd="//>>excludeEnd(\x22imports\x22);".__comma($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
loadDependencies=$self._amdNamesOfPackages_($recv(aPackage)._loadDependencies());
$recv(aStream)._write_(["define(",$recv(["amber/boot", "require"].__comma($recv($recv(loadDependencies)._asArray())._sorted()))._asJavaScriptSource(),", function($boot,requirejs){\x22use strict\x22;"]);
$recv(aStream)._lf();
$self._exportPackageBodyBlockPrologueOf_on_(aPackage,aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream,loadDependencies:loadDependencies,pragmaStart:pragmaStart,pragmaEnd:pragmaEnd},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09| loadDependencies pragmaStart pragmaEnd |\x0a\x09pragmaStart := '//>>excludeStart(\x22imports\x22, pragmas.excludeImports);', String lf.\x0a\x09pragmaEnd := '//>>excludeEnd(\x22imports\x22);', String lf.\x0a\x09loadDependencies := self amdNamesOfPackages: aPackage loadDependencies.\x0a\x09aStream\x0a\x09\x09write: {\x0a\x09\x09\x09'define('.\x0a\x09\x09\x09(#('amber/boot' 'require'), loadDependencies asArray sorted) asJavaScriptSource.\x0a\x09\x09\x09', function($boot,requirejs){\x22use strict\x22;' };\x0a\x09\x09lf.\x0a\x09self exportPackageBodyBlockPrologueOf: aPackage on: aStream",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: [",", "lf", "amdNamesOfPackages:", "loadDependencies", "write:", "asJavaScriptSource", "sorted", "asArray", "exportPackageBodyBlockPrologueOf:on:"]
}),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "importsForOutput:",
protocol: "private",
fn: function (aPackage){
var self=this,$self=this;
var namedImports,anonImports,importVarNames;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
namedImports=[];
anonImports=[];
importVarNames=[];
$recv($recv(aPackage)._imports())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._isString();
if($core.assert($1)){
return $recv(anonImports)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
} else {
$recv(namedImports)._add_($recv(each)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
return $recv(importVarNames)._add_($recv(each)._key());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(importVarNames).__minus_gt($recv(namedImports).__comma(anonImports));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsForOutput:",{aPackage:aPackage,namedImports:namedImports,anonImports:anonImports,importVarNames:importVarNames},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "importsForOutput: aPackage\x0a\x09\x22Returns an association where key is list of import variables\x0a\x09and value is list of external dependencies, with ones imported as variables\x0a\x09put at the beginning with same order as is in key.\x0a\x09\x0a\x09For example imports:{'jQuery'->'jquery'. 'bootstrap'} would yield\x0a\x09#('jQuery') -> #('jquery' 'bootstrap')\x22\x0a\x09| namedImports anonImports importVarNames |\x0a\x09namedImports := #().\x0a\x09anonImports := #().\x0a\x09importVarNames := #().\x0a\x09aPackage imports do: [ :each | each isString\x0a\x09\x09ifTrue: [ anonImports add: each ]\x0a\x09\x09ifFalse: [ namedImports add: each value.\x0a\x09\x09\x09importVarNames add: each key ]].\x0a\x09^ importVarNames -> (namedImports, anonImports)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "imports", "ifTrue:ifFalse:", "isString", "add:", "value", "key", "->", ","]
}),
$globals.AmdExporter);



$core.addClass("ChunkParser", $globals.Object, ["stream", "last"], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ChunkParser.comment="I am responsible for parsing aStream contents in the chunk format.\x0a\x0a## API\x0a\x0a    ChunkParser new\x0a        stream: aStream;\x0a        nextChunk";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "last",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.last;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "last\x0a\x09^ last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChunkParser);

$core.addMethod(
$core.method({
selector: "nextChunk",
protocol: "reading",
fn: function (){
var self=this,$self=this;
var char,result,chunk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
var $early={};
try {
result=""._writeStream();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
char=$recv($self.stream)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=1;
//>>excludeEnd("ctx");
return $recv(char)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(char).__eq("!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$2=$recv($recv($self.stream)._peek()).__eq("!");
if($core.assert($2)){
$recv($self.stream)._next();
} else {
$self.last=$recv($recv(result)._contents())._trimBoth();
$3=$self.last;
throw $early=[$3];
}
}
return $recv(result)._nextPut_(char);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self.last=nil;
$4=$self.last;
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextChunk",{char:char,result:result,chunk:chunk},$globals.ChunkParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextChunk\x0a\x09\x22The chunk format (Smalltalk Interchange Format or Fileout format)\x0a\x09is a trivial format but can be a bit tricky to understand:\x0a\x09\x09- Uses the exclamation mark as delimiter of chunks.\x0a\x09\x09- Inside a chunk a normal exclamation mark must be doubled.\x0a\x09\x09- A non empty chunk must be a valid Smalltalk expression.\x0a\x09\x09- A chunk on top level with a preceding empty chunk is an instruction chunk:\x0a\x09\x09\x09- The object created by the expression then takes over reading chunks.\x0a\x0a\x09This method returns next chunk as a String (trimmed), empty String (all whitespace) or nil.\x22\x0a\x0a\x09| char result chunk |\x0a\x09result := '' writeStream.\x0a\x09\x09[ char := stream next.\x0a\x09\x09char notNil ] whileTrue: [\x0a\x09\x09\x09\x09char = '!' ifTrue: [\x0a\x09\x09\x09\x09\x09\x09stream peek = '!'\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ stream next \x22skipping the escape double\x22 ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ ^ last := result contents trimBoth \x22chunk end marker found\x22 ]].\x0a\x09\x09\x09\x09result nextPut: char ].\x0a\x09^ last := nil \x22a chunk needs to end with !\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeStream", "whileTrue:", "next", "notNil", "ifTrue:", "=", "ifTrue:ifFalse:", "peek", "trimBoth", "contents", "nextPut:"]
}),
$globals.ChunkParser);

$core.addMethod(
$core.method({
selector: "stream:",
protocol: "accessing",
fn: function (aStream){
var self=this,$self=this;
$self.stream=aStream;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChunkParser);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
fn: function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._stream_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aStream:aStream},$globals.ChunkParser.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "on: aStream\x0a\x09^ self new stream: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stream:", "new"]
}),
$globals.ChunkParser.a$cls);


$core.addClass("ClassCommentReader", $globals.Object, ["class"], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassCommentReader.comment="I provide a mechanism for retrieving class comments stored on a file.\x0a\x0aSee also `ClassCategoryReader`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "class:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
$self.class=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "class: aClass\x0a\x09class := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassCommentReader);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ClassCommentReader.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ClassCommentReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.ClassCommentReader);

$core.addMethod(
$core.method({
selector: "scanFrom:",
protocol: "fileIn",
fn: function (aChunkParser){
var self=this,$self=this;
var chunk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
chunk=$recv(aChunkParser)._nextChunk();
$recv(chunk)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._setComment_(chunk);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},$globals.ClassCommentReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09chunk := aChunkParser nextChunk.\x0a\x09chunk ifNotEmpty: [\x0a\x09\x09self setComment: chunk ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextChunk", "ifNotEmpty:", "setComment:"]
}),
$globals.ClassCommentReader);

$core.addMethod(
$core.method({
selector: "setComment:",
protocol: "private",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.class)._comment_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setComment:",{aString:aString},$globals.ClassCommentReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setComment: aString\x0a\x09class comment: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["comment:"]
}),
$globals.ClassCommentReader);



$core.addClass("ClassProtocolReader", $globals.Object, ["class", "category"], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassProtocolReader.comment="I provide a mechanism for retrieving class descriptions stored on a file in the Smalltalk chunk format.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "class:category:",
protocol: "accessing",
fn: function (aClass,aString){
var self=this,$self=this;
$self.class=aClass;
$self.category=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "class: aClass category: aString\x0a\x09class := aClass.\x0a\x09category := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassProtocolReader);

$core.addMethod(
$core.method({
selector: "compileMethod:",
protocol: "private",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Compiler)._new())._install_forClass_protocol_(aString,$self.class,$self.category);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString},$globals.ClassProtocolReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compileMethod: aString\x0a\x09Compiler new install: aString forClass: class protocol: category",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["install:forClass:protocol:", "new"]
}),
$globals.ClassProtocolReader);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ClassProtocolReader.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ClassProtocolReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.ClassProtocolReader);

$core.addMethod(
$core.method({
selector: "scanFrom:",
protocol: "fileIn",
fn: function (aChunkParser){
var self=this,$self=this;
var chunk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
chunk=$recv(aChunkParser)._nextChunk();
return $recv(chunk)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._compileMethod_(chunk);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},$globals.ClassProtocolReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09[ chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty ] whileFalse: [\x0a\x09\x09self compileMethod: chunk ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", "nextChunk", "isEmpty", "compileMethod:"]
}),
$globals.ClassProtocolReader);



$core.addClass("ExportMethodProtocol", $globals.Object, ["name", "theClass"], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ExportMethodProtocol.comment="I am an abstraction for a method protocol in a class / metaclass.\x0a\x0aI know of my class, name and methods.\x0aI am used when exporting a package.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "methods",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($recv($self._theClass())._methodsInProtocol_($self._name()))._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(a)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
return $recv($1).__lt_eq($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methods",{},$globals.ExportMethodProtocol)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methods\x0a\x09^ (self theClass methodsInProtocol: self name)\x0a\x09\x09sorted: [ :a :b | a selector <= b selector ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sorted:", "methodsInProtocol:", "theClass", "name", "<=", "selector"]
}),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.name;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "name:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
$self.name=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "ownMethods",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($recv($self._theClass())._ownMethodsInProtocol_($self._name()))._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(a)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
return $recv($1).__lt_eq($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethods",{},$globals.ExportMethodProtocol)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ownMethods\x0a\x09^ (self theClass ownMethodsInProtocol: self name)\x0a\x09\x09sorted: [ :a :b | a selector <= b selector ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sorted:", "ownMethodsInProtocol:", "theClass", "name", "<=", "selector"]
}),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.theClass;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
$self.theClass=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExportMethodProtocol);


$core.addMethod(
$core.method({
selector: "name:theClass:",
protocol: "instance creation",
fn: function (aString,aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._name_(aString);
$recv($1)._theClass_(aClass);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:theClass:",{aString:aString,aClass:aClass},$globals.ExportMethodProtocol.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "name: aString theClass: aClass\x0a\x09^ self new\x0a\x09\x09name: aString;\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name:", "new", "theClass:", "yourself"]
}),
$globals.ExportMethodProtocol.a$cls);


$core.addClass("Importer", $globals.Object, ["lastSection", "lastChunk"], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Importer.comment="I can import Amber code from a string in the chunk format.\x0a\x0a## API\x0a\x0a    Importer new import: aString";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "import:",
protocol: "fileIn",
fn: function (aStream){
var self=this,$self=this;
var chunk,result,parser,lastEmpty;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
parser=$recv($globals.ChunkParser)._on_(aStream);
lastEmpty=false;
$self.lastSection="n/a, not started";
$self.lastChunk=nil;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
chunk=$recv(parser)._nextChunk();
return $recv(chunk)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(chunk)._ifEmpty_ifNotEmpty_((function(){
lastEmpty=true;
return lastEmpty;

}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$self.lastSection=chunk;
result=$recv($recv($globals.Compiler)._new())._evaluateExpression_(chunk);
$1=lastEmpty;
if($core.assert($1)){
lastEmpty=false;
return $recv(result)._scanFrom_(parser);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$self.lastSection="n/a, finished";
return $self.lastSection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.lastChunk=$recv(parser)._last();
return $recv(e)._pass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,7)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"import:",{aStream:aStream,chunk:chunk,result:result,parser:parser,lastEmpty:lastEmpty},$globals.Importer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "import: aStream\x0a\x09| chunk result parser lastEmpty |\x0a\x09parser := ChunkParser on: aStream.\x0a\x09lastEmpty := false.\x0a\x09lastSection := 'n/a, not started'.\x0a\x09lastChunk := nil.\x0a\x09[\x0a\x09[ chunk := parser nextChunk.\x0a\x09chunk isNil ] whileFalse: [\x0a\x09\x09chunk\x0a\x09\x09\x09ifEmpty: [ lastEmpty := true ]\x0a\x09\x09\x09ifNotEmpty: [\x0a\x09\x09\x09\x09lastSection := chunk.\x0a\x09\x09\x09\x09result := Compiler new evaluateExpression: chunk.\x0a\x09\x09\x09\x09lastEmpty\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09lastEmpty := false.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09result scanFrom: parser ]] ].\x0a\x09lastSection := 'n/a, finished'\x0a\x09] on: Error do: [:e | lastChunk := parser last. e pass ].",
referencedClasses: ["ChunkParser", "Compiler", "Error"],
//>>excludeEnd("ide");
messageSends: ["on:", "on:do:", "whileFalse:", "nextChunk", "isNil", "ifEmpty:ifNotEmpty:", "evaluateExpression:", "new", "ifTrue:", "scanFrom:", "last", "pass"]
}),
$globals.Importer);

$core.addMethod(
$core.method({
selector: "lastChunk",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.lastChunk;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastChunk\x0a\x09^ lastChunk",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Importer);

$core.addMethod(
$core.method({
selector: "lastSection",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.lastSection;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastSection\x0a\x09^ lastSection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Importer);



$core.addClass("PackageCommitError", $globals.Error, [], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageCommitError.comment="I get signaled when an attempt to commit a package has failed.";
//>>excludeEnd("ide");


$core.addClass("PackageHandler", $globals.Object, [], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ajaxPutAt:data:onSuccess:onError:",
protocol: "private",
fn: function (aURL,aString,aBlock,anotherBlock){
var self=this,$self=this;
var xhr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
xhr=$recv($globals.Platform)._newXhr();
$recv(xhr)._open_url_async_("PUT",aURL,true);
$recv(xhr)._onreadystatechange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(xhr)._readyState()).__eq((4));
if($core.assert($1)){
$4=$recv(xhr)._status();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["status"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__gt_eq((200));
$2=$recv($3)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(xhr)._status()).__lt((300));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv($2)._ifTrue_ifFalse_(aBlock,anotherBlock);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(xhr)._send_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:onSuccess:onError:",{aURL:aURL,aString:aString,aBlock:aBlock,anotherBlock:anotherBlock,xhr:xhr},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aURL", "aString", "aBlock", "anotherBlock"],
source: "ajaxPutAt: aURL data: aString onSuccess: aBlock onError: anotherBlock\x0a\x09| xhr |\x0a\x09xhr := Platform newXhr.\x0a\x09xhr open: 'PUT' url: aURL async: true.\x0a\x09xhr onreadystatechange: [\x0a\x09\x09xhr readyState = 4 ifTrue: [\x0a\x09\x09\x09(xhr status >= 200 and: [ xhr status < 300 ])\x0a\x09\x09\x09\x09ifTrue: aBlock\x0a\x09\x09\x09\x09ifFalse: anotherBlock ]].\x0a\x09xhr send: aString",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
messageSends: ["newXhr", "open:url:async:", "onreadystatechange:", "ifTrue:", "=", "readyState", "ifTrue:ifFalse:", "and:", ">=", "status", "<", "send:"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "chunkContentsFor:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._chunkExporter())._exportPackage_on_(aPackage,str);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chunkContentsFor:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "chunkContentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self chunkExporter exportPackage: aPackage on: str ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "exportPackage:on:", "chunkExporter"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "chunkExporter",
protocol: "factory",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._chunkExporterClass())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chunkExporter",{},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chunkExporter\x0a\x09^ self chunkExporterClass new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "chunkExporterClass"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "chunkExporterClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $globals.ChunkExporter;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chunkExporterClass\x0a\x09^ ChunkExporter",
referencedClasses: ["ChunkExporter"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commit:",
protocol: "committing",
fn: function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$self._commit_onSuccess_onError_(aPackage,(function(){

}),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($globals.PackageCommitError)._new();
$2=$recv("Commiting failed with reason: \x22".__comma($recv(error)._responseText())).__comma("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._messageText_($2);
return $recv($1)._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commit: aPackage\x0a\x09self \x0a\x09\x09commit: aPackage\x0a\x09\x09onSuccess: []\x0a\x09\x09onError: [ :error |\x0a\x09\x09\x09PackageCommitError new\x0a\x09\x09\x09\x09messageText: 'Commiting failed with reason: \x22' , (error responseText) , '\x22';\x0a\x09\x09\x09\x09signal ]",
referencedClasses: ["PackageCommitError"],
//>>excludeEnd("ide");
messageSends: ["commit:onSuccess:onError:", "messageText:", "new", ",", "responseText", "signal"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commit:onSuccess:onError:",
protocol: "committing",
fn: function (aPackage,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._commitJsFileFor_onSuccess_onError_(aPackage,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._commitStFileFor_onSuccess_onError_(aPackage,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(aPackage)._beClean();
return $recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commit: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09commitJsFileFor: aPackage \x0a\x09\x09onSuccess: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09commitStFileFor: aPackage \x0a\x09\x09\x09\x09onSuccess: [ aPackage beClean. aBlock value ]\x0a\x09\x09\x09\x09onError: anotherBlock ] \x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commitJsFileFor:onSuccess:onError:", "commitStFileFor:onSuccess:onError:", "beClean", "value"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitJsFileFor:onSuccess:onError:",
protocol: "committing",
fn: function (aPackage,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv($self._commitPathJsFor_(aPackage)).__comma("/")).__comma($recv(aPackage)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(".js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._ajaxPutAt_data_onSuccess_onError_($1,$self._contentsFor_(aPackage),aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitJsFileFor:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitJsFileFor: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathJsFor: aPackage), '/', aPackage name, '.js'\x0a\x09\x09data: (self contentsFor: aPackage)\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajaxPutAt:data:onSuccess:onError:", ",", "commitPathJsFor:", "name", "contentsFor:"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitPathJsFor:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitPathStFor:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitStFileFor:onSuccess:onError:",
protocol: "committing",
fn: function (aPackage,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv($self._commitPathStFor_(aPackage)).__comma("/")).__comma($recv(aPackage)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(".st");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._ajaxPutAt_data_onSuccess_onError_($1,$self._chunkContentsFor_(aPackage),aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitStFileFor:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitStFileFor: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathStFor: aPackage), '/', aPackage name, '.st'\x0a\x09\x09data: (self chunkContentsFor: aPackage)\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajaxPutAt:data:onSuccess:onError:", ",", "commitPathStFor:", "name", "chunkContentsFor:"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "contentsFor:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._exporter())._exportPackage_on_(aPackage,str);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contentsFor:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "contentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self exporter exportPackage: aPackage on: str ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "exportPackage:on:", "exporter"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "exporter",
protocol: "factory",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._exporterClass())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exporter",{},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporter\x0a\x09^ self exporterClass new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "exporterClass"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "exporterClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exporterClass",{},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporterClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "load:",
protocol: "loading",
fn: function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "load: aPackage\x0a\x09\x22Should return a TThenable\x22\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "onCommitError:",
protocol: "error handling",
fn: function (anError){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($globals.PackageCommitError)._new();
$2=$recv("Commiting failed with reason: \x22".__comma($recv(anError)._responseText())).__comma("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._messageText_($2);
$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onCommitError:",{anError:anError},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "onCommitError: anError\x0a\x09PackageCommitError new\x0a\x09\x09messageText: 'Commiting failed with reason: \x22' , (anError responseText) , '\x22';\x0a\x09\x09signal",
referencedClasses: ["PackageCommitError"],
//>>excludeEnd("ide");
messageSends: ["messageText:", "new", ",", "responseText", "signal"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "setPath:forPackage:",
protocol: "accessing",
fn: function (aString,aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPath:forPackage:",{aString:aString,aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aPackage"],
source: "setPath: aString forPackage: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageHandler);



$core.addClass("AmdPackageHandler", $globals.PackageHandler, [], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AmdPackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "commitPathJsFor:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._toUrl_($self._namespaceFor_(aPackage));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09^ self toUrl: (self namespaceFor: aPackage)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toUrl:", "namespaceFor:"]
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "commitPathStFor:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
var path,pathWithout;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($self._namespaceFor_(aPackage)).__comma("/_source");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
path=$self._toUrl_($1);
pathWithout=$self._commitPathJsFor_(aPackage);
$2=$recv(path).__eq($recv(pathWithout).__comma("/_source"));
if($core.assert($2)){
return pathWithout;
} else {
return path;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage,path:path,pathWithout:pathWithout},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09\x22If _source is not mapped, .st will be committed to .js path.\x0a\x09It is recommended not to use _source as it can be deprecated.\x22\x0a\x09\x0a\x09| path pathWithout |\x0a\x09path := self toUrl: (self namespaceFor: aPackage), '/_source'.\x0a\x09pathWithout := self commitPathJsFor: aPackage.\x0a\x09^ path = (pathWithout, '/_source') ifTrue: [ pathWithout ] ifFalse: [ path ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toUrl:", ",", "namespaceFor:", "commitPathJsFor:", "ifTrue:ifFalse:", "="]
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "exporterClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $globals.AmdExporter;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporterClass\x0a\x09^ AmdExporter",
referencedClasses: ["AmdExporter"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "load:",
protocol: "loading",
fn: function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
return $recv($globals.Promise)._new_((function(model){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($globals.Smalltalk)._amdRequire();
if(($receiver = $1) == null || $receiver.a$nil){
return $self._error_("AMD loader not present");
} else {
var require;
require=$receiver;
$3=$recv($recv($self._namespaceFor_(aPackage)).__comma("/")).__comma($recv(aPackage)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=[$3];
return $recv(require)._value_value_value_($2,(function(result){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(model)._value_(result);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({result:result},$ctx2,4)});
//>>excludeEnd("ctx");
}),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(model)._signal_(error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({error:error},$ctx2,5)});
//>>excludeEnd("ctx");
}));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{aPackage:aPackage},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "load: aPackage\x0a\x09^ Promise new: [ :model |\x0a\x09\x09Smalltalk amdRequire\x0a\x09\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09\x09ifNotNil: [ :require |\x0a\x09\x09\x09\x09require\x0a\x09\x09\x09\x09\x09value: { (self namespaceFor: aPackage), '/', aPackage name }\x0a\x09\x09\x09\x09\x09value: [ :result | model value: result ]\x0a\x09\x09\x09\x09\x09value: [ :error | model signal: error ] ] ]",
referencedClasses: ["Promise", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["new:", "ifNil:ifNotNil:", "amdRequire", "error:", "value:value:value:", ",", "namespaceFor:", "name", "value:", "signal:"]
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "namespaceFor:",
protocol: "committing",
fn: function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aPackage)._transport())._namespace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"namespaceFor:",{aPackage:aPackage},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "namespaceFor: aPackage\x0a\x09^ aPackage transport namespace",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["namespace", "transport"]
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "setPath:forPackage:",
protocol: "accessing",
fn: function (aString,aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(require)._provided())._config_($globals.HashedCollection._newFromPairs_(["paths",$globals.HashedCollection._newFromPairs_([$self._namespaceFor_(aPackage),aString])]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPath:forPackage:",{aString:aString,aPackage:aPackage},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aPackage"],
source: "setPath: aString forPackage: aPackage\x0a\x09\x22Set the path the the package's `namespace`\x22\x0a\x09\x0a\x09\x22Smalltalk amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require |\x22\x0a\x09\x09\x09require provided config: #{\x0a\x09\x09\x09\x09'paths' -> #{\x0a\x09\x09\x09\x09\x09(self namespaceFor: aPackage) -> aString\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x22]\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["config:", "provided", "namespaceFor:"]
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "toUrl:",
protocol: "private",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv($globals.Smalltalk)._amdRequire();
if(($receiver = $1) == null || $receiver.a$nil){
return $self._error_("AMD loader not present");
} else {
var require;
require=$receiver;
return $recv($recv(require)._provided())._toUrl_(aString);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toUrl:",{aString:aString},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "toUrl: aString\x0a\x09^ Smalltalk amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require | require provided toUrl: aString ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "amdRequire", "error:", "toUrl:", "provided"]
}),
$globals.AmdPackageHandler);


$core.addMethod(
$core.method({
selector: "defaultNamespace",
protocol: "commit paths",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._defaultAmdNamespace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},$globals.AmdPackageHandler.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk defaultAmdNamespace",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["defaultAmdNamespace"]
}),
$globals.AmdPackageHandler.a$cls);

$core.addMethod(
$core.method({
selector: "defaultNamespace:",
protocol: "commit paths",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Smalltalk)._defaultAmdNamespace_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace:",{aString:aString},$globals.AmdPackageHandler.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defaultNamespace: aString\x0a\x09Smalltalk defaultAmdNamespace: aString",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["defaultAmdNamespace:"]
}),
$globals.AmdPackageHandler.a$cls);


$core.addClass("PackageTransport", $globals.Object, ["package"], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageTransport.comment="I represent the transport mechanism used to commit a package.\x0a\x0aMy concrete subclasses have a `#handler` to which committing is delegated.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $globals.HashedCollection._newFromPairs_(["type",$self._type()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptObject",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ #{ 'type' -> self type }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["type"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commit",
protocol: "committing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._commitHandler())._commit_($self._package());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commit\x0a\x09self commitHandler commit: self package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commit:", "commitHandler", "package"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commitHandler",
protocol: "factory",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._commitHandlerClass())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitHandler",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandler\x0a\x09^ self commitHandlerClass new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "commitHandlerClass"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commitHandlerClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitHandlerClass",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandlerClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commitOnSuccess:onError:",
protocol: "committing",
fn: function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._commitHandler())._commit_onSuccess_onError_($self._package(),aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitOnSuccess:onError:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "commitOnSuccess: aBlock onError: anotherBlock\x0a\x09self commitHandler \x0a\x09\x09commit: self package\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commit:onSuccess:onError:", "commitHandler", "package"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "load",
protocol: "loading",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._commitHandler())._load_($self._package()))._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._postLoad();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "load\x0a\x09^ (self commitHandler load: self package)\x0a\x09\x09then: [ Smalltalk postLoad ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["then:", "load:", "commitHandler", "package", "postLoad"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.package;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "package:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
$self.package=aPackage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "setPath:",
protocol: "actions",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._commitHandler())._setPath_forPackage_(aString,$self.package);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPath:",{aString:aString},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setPath: aString\x0a\x09\x22Set the commit path for the package\x22\x0a\x0a\x09self commitHandler setPath: aString forPackage: package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setPath:forPackage:", "commitHandler"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "setupFromJson:",
protocol: "initialization",
fn: function (anObject){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09\x22no op. override if needed in subclasses\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "type",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ self class type",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["type", "class"]
}),
$globals.PackageTransport);


$core.setSlots($globals.PackageTransport.a$cls, ["registry"]);
$core.addMethod(
$core.method({
selector: "classRegisteredFor:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.registry)._at_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classRegisteredFor:",{aString:aString},$globals.PackageTransport.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "classRegisteredFor: aString\x0a\x09^ registry at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "defaultType",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.AmdPackageTransport)._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultType",{},$globals.PackageTransport.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultType\x0a\x09^ AmdPackageTransport type",
referencedClasses: ["AmdPackageTransport"],
//>>excludeEnd("ide");
messageSends: ["type"]
}),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "for:",
protocol: "instance creation",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._classRegisteredFor_(aString))._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},$globals.PackageTransport.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "for: aString\x0a\x09^ (self classRegisteredFor: aString) new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "classRegisteredFor:"]
}),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
if(($receiver = anObject) == null || $receiver.a$nil){
$1=$self._for_($self._defaultType());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["for:"]=1;
//>>excludeEnd("ctx");
return $1;
} else {
anObject;
}
$2=$self._for_($recv(anObject)._type());
$recv($2)._setupFromJson_(anObject);
return $recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{anObject:anObject},$globals.PackageTransport.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "fromJson: anObject\x0a\x09anObject ifNil: [ ^ self for: self defaultType ].\x0a\x09\x0a\x09^ (self for: anObject type)\x0a\x09\x09setupFromJson: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "for:", "defaultType", "setupFromJson:", "type", "yourself"]
}),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.PackageTransport.a$cls.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$self.__eq_eq($globals.PackageTransport);
if($core.assert($1)){
$self.registry=$globals.HashedCollection._newFromPairs_([]);
$self.registry;
} else {
$self._register();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PackageTransport.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self == PackageTransport\x0a\x09\x09ifTrue: [ registry := #{} ]\x0a\x09\x09ifFalse: [ self register ]",
referencedClasses: ["PackageTransport"],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifTrue:ifFalse:", "==", "register"]
}),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "register",
protocol: "registration",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.PackageTransport)._register_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register",{},$globals.PackageTransport.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "register\x0a\x09PackageTransport register: self",
referencedClasses: ["PackageTransport"],
//>>excludeEnd("ide");
messageSends: ["register:"]
}),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "register:",
protocol: "registration",
fn: function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(aClass)._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["type"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
$recv($self.registry)._at_put_($recv(aClass)._type(),aClass);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register:",{aClass:aClass},$globals.PackageTransport.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "register: aClass\x0a\x09aClass type ifNotNil: [\x0a\x09\x09registry at: aClass type put: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "type", "at:put:"]
}),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "type",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09\x22Override in subclasses\x22\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageTransport.a$cls);


$core.addClass("AmdPackageTransport", $globals.PackageTransport, ["namespace"], "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AmdPackageTransport.comment="I am the default transport for committing packages.\x0a\x0aSee `AmdExporter` and `AmdPackageHandler`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.AmdPackageTransport.superclass||$boot.nilAsClass).fn.prototype._asJavaScriptObject.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($1)._at_put_("amdNamespace",$self._namespace());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptObject",{},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ super asJavaScriptObject\x0a\x09\x09at: 'amdNamespace' put: self namespace;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "asJavaScriptObject", "namespace", "yourself"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "commitHandlerClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $globals.AmdPackageHandler;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandlerClass\x0a\x09^ AmdPackageHandler",
referencedClasses: ["AmdPackageHandler"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "defaultNamespace",
protocol: "defaults",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._defaultAmdNamespace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk defaultAmdNamespace",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["defaultAmdNamespace"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._write_([$recv($self._class())._name()," namespace: "]);
return $recv(stream)._print_($self._namespace());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream | stream \x0a\x09\x09write: { self class name. ' namespace: ' }; print: self namespace ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "write:", "name", "class", "print:", "namespace"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "namespace",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.namespace;
if(($receiver = $1) == null || $receiver.a$nil){
return $self._defaultNamespace();
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"namespace",{},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "namespace\x0a\x09^ namespace ifNil: [ self defaultNamespace ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultNamespace"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "namespace:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
$self.namespace=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "namespace: aString\x0a\x09namespace := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
fn: function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.AmdPackageTransport.superclass||$boot.nilAsClass).fn.prototype._printOn_.apply($self, [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aStream)._nextPutAll_(" (AMD Namespace: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._namespace());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: ' (AMD Namespace: ';\x0a\x09\x09nextPutAll: self namespace;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "namespace"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "setupFromJson:",
protocol: "initialization",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._namespace_($recv(anObject)._at_("amdNamespace"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupFromJson:",{anObject:anObject},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09self namespace: (anObject at: 'amdNamespace')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["namespace:", "at:"]
}),
$globals.AmdPackageTransport);


$core.addMethod(
$core.method({
selector: "namespace:",
protocol: "instance creation",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._namespace_(aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString},$globals.AmdPackageTransport.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "namespace: aString\x0a\x09^ self new\x0a\x09\x09namespace: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["namespace:", "new", "yourself"]
}),
$globals.AmdPackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "type",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return "amd";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ 'amd'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmdPackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "exportBehaviorDefinitionTo:using:",
protocol: "*Platform-ImportExport",
fn: function (aStream,anExporter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anExporter)._exportDefinitionOf_on_(self,aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportBehaviorDefinitionTo:using:",{aStream:aStream,anExporter:anExporter},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream", "anExporter"],
source: "exportBehaviorDefinitionTo: aStream using: anExporter\x0a\x09anExporter exportDefinitionOf: self on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exportDefinitionOf:on:"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "exportBehaviorDefinitionTo:using:",
protocol: "*Platform-ImportExport",
fn: function (aStream,anExporter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anExporter)._exportMetaDefinitionOf_on_($self._instanceClass(),aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportBehaviorDefinitionTo:using:",{aStream:aStream,anExporter:anExporter},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream", "anExporter"],
source: "exportBehaviorDefinitionTo: aStream using: anExporter\x0a\x09anExporter exportMetaDefinitionOf: self instanceClass on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exportMetaDefinitionOf:on:", "instanceClass"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "commit",
protocol: "*Platform-ImportExport",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._transport())._commit();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commit\x0a\x09^ self transport commit",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commit", "transport"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "load",
protocol: "*Platform-ImportExport",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._transport())._load();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "load\x0a\x09^ self transport load",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["load", "transport"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "loadFromNamespace:",
protocol: "*Platform-ImportExport",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._transport();
$recv($1)._namespace_(aString);
return $recv($1)._load();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadFromNamespace:",{aString:aString},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "loadFromNamespace: aString\x0a\x09^ self transport\x0a\x09\x09namespace: aString;\x0a\x09\x09load",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["namespace:", "transport", "load"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "load:",
protocol: "*Platform-ImportExport",
fn: function (aPackageName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._named_(aPackageName))._load();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{aPackageName:aPackageName},$globals.Package.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName"],
source: "load: aPackageName\x0a\x09^ (self named: aPackageName) load",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["load", "named:"]
}),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "load:fromNamespace:",
protocol: "*Platform-ImportExport",
fn: function (aPackageName,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._named_(aPackageName))._loadFromNamespace_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:fromNamespace:",{aPackageName:aPackageName,aString:aString},$globals.Package.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aString"],
source: "load: aPackageName fromNamespace: aString\x0a\x09^ (self named: aPackageName) loadFromNamespace: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loadFromNamespace:", "named:"]
}),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "methodsFor:",
protocol: "*Platform-ImportExport",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.ClassProtocolReader)._new();
$recv($1)._class_category_(self,aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsFor:",{aString:aString},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodsFor: aString\x0a\x09^ ClassProtocolReader new\x0a\x09\x09class: self category: aString;\x0a\x09\x09yourself",
referencedClasses: ["ClassProtocolReader"],
//>>excludeEnd("ide");
messageSends: ["class:category:", "new", "yourself"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodsFor:stamp:",
protocol: "*Platform-ImportExport",
fn: function (aString,aStamp){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._methodsFor_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsFor:stamp:",{aString:aString,aStamp:aStamp},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aStamp"],
source: "methodsFor: aString stamp: aStamp\x0a\x09\x22Added for file-in compatibility, ignores stamp.\x22\x0a\x09^ self methodsFor: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodsFor:"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "commentStamp",
protocol: "*Platform-ImportExport",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.ClassCommentReader)._new();
$recv($1)._class_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commentStamp",{},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commentStamp\x0a\x09^ ClassCommentReader new\x0a\x09class: self;\x0a\x09yourself",
referencedClasses: ["ClassCommentReader"],
//>>excludeEnd("ide");
messageSends: ["class:", "new", "yourself"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "commentStamp:prior:",
protocol: "*Platform-ImportExport",
fn: function (aStamp,prior){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._commentStamp();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commentStamp:prior:",{aStamp:aStamp,prior:prior},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStamp", "prior"],
source: "commentStamp: aStamp prior: prior\x0a\x09\x09^ self commentStamp",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commentStamp"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "exportBehaviorDefinitionTo:using:",
protocol: "*Platform-ImportExport",
fn: function (aStream,anExporter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anExporter)._exportTraitDefinitionOf_on_(self,aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportBehaviorDefinitionTo:using:",{aStream:aStream,anExporter:anExporter},$globals.Trait)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream", "anExporter"],
source: "exportBehaviorDefinitionTo: aStream using: anExporter\x0a\x09anExporter exportTraitDefinitionOf: self on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exportTraitDefinitionOf:on:"]
}),
$globals.Trait);

});
