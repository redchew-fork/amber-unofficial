define("amber_core/Compiler-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $vm=$boot.vm,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$vm,_st=$recv,globals=$globals;
smalltalk.addPackage('Compiler-Tests');
smalltalk.packages["Compiler-Tests"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('ASTParsingTest', globals.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "analyze:forClass:",
protocol: 'convenience',
fn: function (aNode,aClass){
var self=this;
function $SemanticAnalyzer(){return globals.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(_st($SemanticAnalyzer())._on_(aClass))._visit_(aNode);
return aNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyze:forClass:",{aNode:aNode,aClass:aClass},globals.ASTParsingTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode", "aClass"],
source: "analyze: aNode forClass: aClass\x0a\x09(SemanticAnalyzer on: aClass) visit: aNode.\x0a\x09^ aNode",
referencedClasses: ["SemanticAnalyzer"],
//>>excludeEnd("ide");
messageSends: ["visit:", "on:"]
}),
globals.ASTParsingTest);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
protocol: 'parsing',
fn: function (aString){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Smalltalk())._parse_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},globals.ASTParsingTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk parse: aString",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:"]
}),
globals.ASTParsingTest);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:forClass:",
protocol: 'parsing',
fn: function (aString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._analyze_forClass_(self._parse_(aString),aClass);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:forClass:",{aString:aString,aClass:aClass},globals.ASTParsingTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "parse: aString forClass: aClass\x0a\x09^ self analyze: (self parse: aString) forClass: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["analyze:forClass:", "parse:"]
}),
globals.ASTParsingTest);



smalltalk.addClass('ASTPCNodeVisitorTest', globals.ASTParsingTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "astPCNodeVisitor",
protocol: 'factory',
fn: function (){
var self=this;
function $ASTPCNodeVisitor(){return globals.ASTPCNodeVisitor||(typeof ASTPCNodeVisitor=="undefined"?nil:ASTPCNodeVisitor)}
function $AIContext(){return globals.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1;
$2=_st($ASTPCNodeVisitor())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$3=$2;
$4=_st(_st($AIContext())._new())._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
_st($3)._context_($4);
$5=_st($2)._yourself();
$1=$5;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"astPCNodeVisitor",{},globals.ASTPCNodeVisitorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "astPCNodeVisitor\x0a\x09^ ASTPCNodeVisitor new\x0a\x09\x09context: (AIContext new\x0a\x09\x09\x09yourself);\x0a\x09\x09yourself",
referencedClasses: ["ASTPCNodeVisitor", "AIContext"],
//>>excludeEnd("ide");
messageSends: ["context:", "new", "yourself"]
}),
globals.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "astPCNodeVisitorForSelector:",
protocol: 'factory',
fn: function (aString){
var self=this;
function $ASTPCNodeVisitor(){return globals.ASTPCNodeVisitor||(typeof ASTPCNodeVisitor=="undefined"?nil:ASTPCNodeVisitor)}
function $AIContext(){return globals.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1;
$2=_st($ASTPCNodeVisitor())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
_st($2)._selector_(aString);
$3=$2;
$4=_st(_st($AIContext())._new())._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
_st($3)._context_($4);
$5=_st($2)._yourself();
$1=$5;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"astPCNodeVisitorForSelector:",{aString:aString},globals.ASTPCNodeVisitorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "astPCNodeVisitorForSelector: aString\x0a\x09^ ASTPCNodeVisitor new\x0a\x09\x09selector: aString;\x0a\x09\x09context: (AIContext new\x0a\x09\x09\x09yourself);\x0a\x09\x09yourself",
referencedClasses: ["ASTPCNodeVisitor", "AIContext"],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "context:", "yourself"]
}),
globals.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testJSStatementNode",
protocol: 'tests',
fn: function (){
var self=this;
var ast,visitor;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
ast=self._parse_forClass_("foo <consolee.log(1)>",$Object());
$1=self._astPCNodeVisitor();
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_(_st($2)._isJSStatementNode());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testJSStatementNode",{ast:ast,visitor:visitor},globals.ASTPCNodeVisitorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testJSStatementNode\x0a\x09| ast visitor |\x0a\x09\x0a\x09ast := self parse: 'foo <consolee.log(1)>' forClass: Object.\x0a\x09self assert: (self astPCNodeVisitor\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) isJSStatementNode",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["parse:forClass:", "assert:", "isJSStatementNode", "visit:", "astPCNodeVisitor", "currentNode"]
}),
globals.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSend",
protocol: 'tests',
fn: function (){
var self=this;
var ast;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
ast=self._parse_forClass_("foo self asString yourself. ^ self asBoolean",$Object());
$1=self._astPCNodeVisitorForSelector_("yourself");
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_equals_(_st($2)._selector(),"yourself");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{ast:ast},globals.ASTPCNodeVisitorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMessageSend\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo self asString yourself. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'yourself')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForSelector:", "currentNode"]
}),
globals.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSendWithBlocks",
protocol: 'tests',
fn: function (){
var self=this;
var ast;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
ast=self._parse_forClass_("foo true ifTrue: [ [ self asString yourself ] value.  ]. ^ self asBoolean",$Object());
$1=self._astPCNodeVisitorForSelector_("yourself");
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_equals_(_st($2)._selector(),"yourself");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMessageSendWithBlocks",{ast:ast},globals.ASTPCNodeVisitorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMessageSendWithBlocks\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ [ self asString yourself ] value.  ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'yourself')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForSelector:", "currentNode"]
}),
globals.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSendWithInlining",
protocol: 'tests',
fn: function (){
var self=this;
var ast;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$5,$6;
ast=self._parse_forClass_("foo true ifTrue: [ self asString yourself ]. ^ self asBoolean",$Object());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parse:forClass:"]=1;
//>>excludeEnd("ctx");
$3=self._astPCNodeVisitorForSelector_("yourself");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["astPCNodeVisitorForSelector:"]=1;
//>>excludeEnd("ctx");
_st($3)._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
$4=_st($3)._currentNode();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentNode"]=1;
//>>excludeEnd("ctx");
$2=$4;
$1=_st($2)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"yourself");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
ast=self._parse_forClass_("foo true ifTrue: [ self asString yourself ]. ^ self asBoolean",$Object());
$5=self._astPCNodeVisitorForSelector_("asBoolean");
_st($5)._visit_(ast);
$6=_st($5)._currentNode();
self._assert_equals_(_st($6)._selector(),"asBoolean");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMessageSendWithInlining",{ast:ast},globals.ASTPCNodeVisitorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMessageSendWithInlining\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'yourself')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'.\x0a\x09\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'asBoolean')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'asBoolean'",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForSelector:", "currentNode"]
}),
globals.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNoMessageSend",
protocol: 'tests',
fn: function (){
var self=this;
var ast;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
ast=self._parse_forClass_("foo ^ self",$Object());
$1=self._astPCNodeVisitor();
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_(_st($2)._isNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNoMessageSend",{ast:ast},globals.ASTPCNodeVisitorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNoMessageSend\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo ^ self' forClass: Object.\x0a\x09self assert: (self astPCNodeVisitor\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) isNil",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["parse:forClass:", "assert:", "isNil", "visit:", "astPCNodeVisitor", "currentNode"]
}),
globals.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPC",
protocol: 'tests',
fn: function (){
var self=this;
var ast,visitor;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
ast=self._parse_forClass_("foo <console.log(1)>",$Object());
$1=self._astPCNodeVisitor();
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_(_st($2)._isJSStatementNode());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPC",{ast:ast,visitor:visitor},globals.ASTPCNodeVisitorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPC\x0a\x09| ast visitor |\x0a\x09\x0a\x09ast := self parse: 'foo <console.log(1)>' forClass: Object.\x0a\x09self assert: (self astPCNodeVisitor\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) isJSStatementNode",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["parse:forClass:", "assert:", "isJSStatementNode", "visit:", "astPCNodeVisitor", "currentNode"]
}),
globals.ASTPCNodeVisitorTest);



smalltalk.addClass('ASTPositionTest', globals.ASTParsingTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testNodeAtPosition",
protocol: 'tests',
fn: function (){
var self=this;
var node;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$7,$8,$6,$5;
node=self._parse_("yourself\x0a\x09^ self");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parse:"]=1;
//>>excludeEnd("ctx");
$3=node;
$4=(2).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=_st($3)._navigationNodeAt_ifAbsent_($4,(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["navigationNodeAt:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$1=_st($2)._source();
self._assert_equals_($1,"self");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
node=self._parse_("foo\x0a\x09true ifTrue: [ 1 ]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parse:"]=2;
//>>excludeEnd("ctx");
$7=node;
$8=(2).__at((7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$6=_st($7)._navigationNodeAt_ifAbsent_($8,(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["navigationNodeAt:ifAbsent:"]=2;
//>>excludeEnd("ctx");
$5=_st($6)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($5,"ifTrue:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
node=self._parse_("foo\x0a\x09self foo; bar; baz");
self._assert_equals_(_st(_st(node)._navigationNodeAt_ifAbsent_((2).__at((8)),(function(){
return nil;

})))._selector(),"foo");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNodeAtPosition",{node:node},globals.ASTPositionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNodeAtPosition\x0a\x09| node |\x0a\x09\x0a\x09node := self parse: 'yourself\x0a\x09^ self'.\x0a\x09\x0a\x09self assert: (node navigationNodeAt: 2@4 ifAbsent: [ nil ]) source equals: 'self'.\x0a\x09\x0a\x09node := self parse: 'foo\x0a\x09true ifTrue: [ 1 ]'.\x0a\x09\x0a\x09self assert: (node navigationNodeAt: 2@7 ifAbsent: [ nil ]) selector equals: 'ifTrue:'.\x0a\x09\x0a\x09node := self parse: 'foo\x0a\x09self foo; bar; baz'.\x0a\x09\x0a\x09self assert: (node navigationNodeAt: 2@8 ifAbsent: [ nil ]) selector equals: 'foo'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parse:", "assert:equals:", "source", "navigationNodeAt:ifAbsent:", "@", "selector"]
}),
globals.ASTPositionTest);



smalltalk.addClass('CodeGeneratorTest', globals.ASTParsingTest, ['receiver'], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $CodeGenerator(){return globals.CodeGenerator||(typeof CodeGenerator=="undefined"?nil:CodeGenerator)}
return $CodeGenerator();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGeneratorClass\x0a\x09^ CodeGenerator",
referencedClasses: ["CodeGenerator"],
//>>excludeEnd("ide");
messageSends: []
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "compiler",
protocol: 'factory',
fn: function (){
var self=this;
function $Compiler(){return globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=_st($Compiler())._new();
_st($2)._codeGeneratorClass_(self._codeGeneratorClass());
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compiler",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compiler\x0a\x09^ Compiler new\x0a\x09\x09codeGeneratorClass: self codeGeneratorClass;\x0a\x09\x09yourself",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["codeGeneratorClass:", "new", "codeGeneratorClass", "yourself"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'initialization',
fn: function (){
var self=this;
function $DoIt(){return globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@receiver"]=_st($DoIt())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09receiver := DoIt new",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "should:receiver:return:",
protocol: 'testing',
fn: function (aString,anObject,aResult){
var self=this;
var method,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self["@receiver"]=anObject;
$1=self._compiler();
$2=_st(anObject)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
method=_st($1)._install_forClass_protocol_(aString,$2,"tests");
result=_st(self["@receiver"])._perform_(_st(method)._selector());
_st(_st(anObject)._class())._removeCompiledMethod_(method);
self._assert_equals_(aResult,result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:receiver:return:",{aString:aString,anObject:anObject,aResult:aResult,method:method,result:result},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "aResult"],
source: "should: aString receiver: anObject return: aResult\x0a\x09| method result |\x0a\x0a\x09receiver := anObject.\x0a\x09method := self compiler install: aString forClass: anObject class protocol: 'tests'.\x0a\x09result := receiver perform: method selector.\x0a\x09anObject class removeCompiledMethod: method.\x0a\x09self assert: aResult equals: result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["install:forClass:protocol:", "compiler", "class", "perform:", "selector", "removeCompiledMethod:", "assert:equals:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "should:return:",
protocol: 'testing',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._should_receiver_return_(aString,self["@receiver"],anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:return:",{aString:aString,anObject:anObject},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "should: aString return: anObject\x0a\x09^ self \x0a\x09\x09should: aString \x0a\x09\x09receiver: receiver \x0a\x09\x09return: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:receiver:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
protocol: 'initialization',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09\x22receiver := nil\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAssignment",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo | a | a := true ifTrue: [ 1 ]. ^ a",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo | a | a := false ifTrue: [ 1 ]. ^ a",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo | a | ^ a := true ifTrue: [ 1 ]",(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAssignment",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAssignment\x0a\x09self should: 'foo | a | a := true ifTrue: [ 1 ]. ^ a' return: 1.\x0a\x09self should: 'foo | a | a := false ifTrue: [ 1 ]. ^ a' return: nil.\x0a\x0a\x09self should: 'foo | a | ^ a := true ifTrue: [ 1 ]' return: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBackslashSelectors",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("\x5c arg ^ 4",(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("\x5c\x5c arg ^ 42",(42));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBackslashSelectors",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBackslashSelectors\x0a\x09\x0a\x09self should: '\x5c arg ^ 4' return: 4.\x0a\x09self should: '\x5c\x5c arg ^ 42' return: 42",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBlockReturn",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]",[(2), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]",[(2), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]",[(2), (1), (4)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBlockReturn",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBlockReturn\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]' return: #(2 3 4).\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]' return: #(2 3 4).\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]' return: #(2 1 4).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCascades",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ Array new add: 3; add: 4; yourself",[(3), (4)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCascades",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCascades\x0a\x09\x0a\x09self should: 'foo ^ Array new add: 3; add: 4; yourself' return: #(3 4)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCascadesWithInlining",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCascadesWithInlining",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCascadesWithInlining\x0a\x09\x0a\x09self should: 'foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]' return: 1.\x0a\x09self should: 'foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]' return: 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicArrayElementsOrdered",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. x := 2 }\x0a",[(1), (2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a",[(1), (2)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDynamicArrayElementsOrdered",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDynamicArrayElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. x := 2 }\x0a' return: #(1 2).\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a' return: #(1 2).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicDictionaryElementsOrdered",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 'foo'.\x0a\x09^ #{ x->1. 'bar'->(true ifTrue: [ 2 ]) }\x0a",globals.HashedCollection._newFromPairs_(["foo",(1),"bar",(2)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaryElementsOrdered",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDynamicDictionaryElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := ''foo''.\x0a\x09^ #{ x->1. ''bar''->(true ifTrue: [ 2 ]) }\x0a' return: #{'foo'->1. 'bar'->2}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicDictionaryWithMoreArrows",
protocol: 'tests',
fn: function (){
var self=this;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=_st((1).__minus_gt((2))).__minus_gt((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$1=_st($HashedCollection())._with_($2);
self._should_return_("foo ^ #{1->2->3}",$1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaryWithMoreArrows",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDynamicDictionaryWithMoreArrows\x0a\x09self should: 'foo ^ #{1->2->3}' return: (HashedCollection with: 1->2->3)",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["should:return:", "with:", "->"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGlobalVar",
protocol: 'tests',
fn: function (){
var self=this;
function $BlockClosure(){return globals.BlockClosure||(typeof BlockClosure=="undefined"?nil:BlockClosure)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ eval class",$BlockClosure());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ Math cos: 0",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo ^ NonExistingVar",nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testGlobalVar",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testGlobalVar\x0a\x09self should: 'foo ^ eval class' return: BlockClosure.\x0a\x09self should: 'foo ^ Math cos: 0' return: 1.\x0a\x09self should: 'foo ^ NonExistingVar' return: nil",
referencedClasses: ["BlockClosure"],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInnerTemporalDependentElementsOrdered",
protocol: 'tests',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$11,$10;
$2="foo".__minus_gt($Array());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3="bar".__minus_gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$1=[$2,$3];
self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(x := 2)\x0a",$1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$5="foo".__minus_gt($Array());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$6="bar".__minus_gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$4=[$5,$6];
self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$8="foo".__minus_gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$9="bar".__minus_gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$7=[$8,$9];
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$11="foo".__minus_gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$10=[$11,"bar".__minus_gt((2))];
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",globals.HashedCollection._newFromPairs_(["foo",(1),"bar",(2)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInnerTemporalDependentElementsOrdered",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInnerTemporalDependentElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: ''foo''->x with: ''bar''->(x := 2)\x0a' return: {'foo'->Array. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])\x0a' return: {'foo'->Array. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])\x0a' return: {'foo'->1. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }\x0a' return: {'foo'->1. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }\x0a' return: #{'foo'->1. 'bar'->2}.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["should:return:", "->"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testJSStatement",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo <return 2+3>",(5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testJSStatement",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testJSStatement\x0a\x09self should: 'foo <return 2+3>' return: 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLexicalScope",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo | a | a := 1. [ a := 2 ] value. ^ a",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLexicalScope",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLexicalScope\x0a\x09self should: 'foo | a | a := 1. [ a := 2 ] value. ^ a' return: 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLiterals",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ 'hello'","hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo ^ #(1 2 3 4)",[(1), (2), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo ^ {1. [:x | x ] value: 2. 3. [4] value}",[(1), (2), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
self._should_return_("foo ^ true",true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=5;
//>>excludeEnd("ctx");
self._should_return_("foo ^ false",false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=6;
//>>excludeEnd("ctx");
self._should_return_("foo ^ #{1->2. 3->4}",globals.HashedCollection._newFromPairs_([(1),(2),(3),(4)]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=7;
//>>excludeEnd("ctx");
self._should_return_("foo ^ #hello","hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=8;
//>>excludeEnd("ctx");
self._should_return_("foo ^ $h","h");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=9;
//>>excludeEnd("ctx");
self._should_return_("foo ^ -123.456",(-123.456));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=10;
//>>excludeEnd("ctx");
self._should_return_("foo ^ -2.5e4",(-25000));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLiterals",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLiterals\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ ''hello''' return: 'hello'.\x0a\x09self should: 'foo ^ #(1 2 3 4)' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ {1. [:x | x ] value: 2. 3. [4] value}' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ true' return: true.\x0a\x09self should: 'foo ^ false' return: false.\x0a\x09self should: 'foo ^ #{1->2. 3->4}' return: #{1->2. 3->4}.\x0a\x09self should: 'foo ^ #hello' return: #hello.\x0a\x09self should: 'foo ^ $h' return: 'h'.\x0a\x09self should: 'foo ^ -123.456' return: -123.456.\x0a\x09self should: 'foo ^ -2.5e4' return: -25000.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLocalReturn",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 + 1",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo ",self["@receiver"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo self asString",self["@receiver"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
self._should_return_("foo | a b | a := 1. b := 2. ^ a + b",(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLocalReturn",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLocalReturn\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ 1 + 1' return: 2.\x0a\x09self should: 'foo ' return: receiver.\x0a\x09self should: 'foo self asString' return: receiver.\x0a\x09self should: 'foo | a b | a := 1. b := 2. ^ a + b' return: 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSends",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 asString","1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 + 1",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 + 2 * 3",(9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 to: 3",[(1), (2), (3)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 to: 5 by: 2",[(1), (3), (5)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMessageSends",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMessageSends\x0a\x09self should: 'foo ^ 1 asString' return: '1'.\x0a\x0a\x09self should: 'foo ^ 1 + 1' return: 2.\x0a\x09self should: 'foo ^ 1 + 2 * 3' return: 9.\x0a\x0a\x09self should: 'foo ^ 1 to: 3' return: #(1 2 3).\x0a\x09self should: 'foo ^ 1 to: 5 by: 2' return: #(1 3 5)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMultipleSequences",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo | a b c | a := 2. b := 3. c := a + b. ^ c * 6",(30));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMultipleSequences",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMultipleSequences\x0a\x09self should: 'foo | a b c | a := 2. b := 3. c := a + b. ^ c * 6' return: 30",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMutableLiterals",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ #( 1 2 ) at: 1 put: 3; yourself",[(3), (2)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMutableLiterals",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMutableLiterals\x0a\x09\x22Mutable literals must be aliased in cascades.\x0a\x09See https://github.com/amber-smalltalk/amber/issues/428\x22\x0a\x09\x0a\x09self \x0a\x09\x09should: 'foo ^ #( 1 2 ) at: 1 put: 3; yourself' \x0a\x09\x09return: #(3 2)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNestedIfTrue",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]",self["@receiver"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNestedIfTrue",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNestedIfTrue\x0a\x09self should: 'foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]' return: 1.\x0a\x09self should: 'foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]' return: nil.\x0a\x0a\x09self should: 'foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]' return: 1.\x0a\x09self should: 'foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]' return: receiver.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNestedSends",
protocol: 'tests',
fn: function (){
var self=this;
function $Point(){return globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ (Point x: (Point x: 2 y: 3) y: 4) asString",_st(_st($Point())._x_y_((2).__at((3)),(4)))._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNestedSends",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNestedSends\x0a\x09self should: 'foo ^ (Point x: (Point x: 2 y: 3) y: 4) asString' return: (Point x: (2@3) y: 4) asString",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["should:return:", "asString", "x:y:", "@"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonLocalReturn",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo [ ^ 1 ] value",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo [ ^ 1 + 1 ] value",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo [ :x | ^ x + x ] value: 4. ^ 2",(8));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNonLocalReturn\x0a\x09self should: 'foo [ ^ 1 ] value' return: 1.\x0a\x09self should: 'foo [ ^ 1 + 1 ] value' return: 2.\x0a\x09self should: 'foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt' return: 3.\x0a\x09self should: 'foo [ :x | ^ x + x ] value: 4. ^ 2' return: 8",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPascalCaseGlobal",
protocol: 'tests',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^Object",_st(_st($Smalltalk())._globals())._at_("Object"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^NonExistent",nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPascalCaseGlobal",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPascalCaseGlobal\x0a\x09self should: 'foo ^Object' return: (Smalltalk globals at: 'Object').\x0a\x09self should: 'foo ^NonExistent' return: nil",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["should:return:", "at:", "globals"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSendReceiverAndArgumentsOrdered",
protocol: 'tests',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: x with: (true ifTrue: [ x := 2 ])\x0a",[(1), (2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: x with: (true ifTrue: [ x := 2 ])\x0a",[$Array(),(2)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSendReceiverAndArgumentsOrdered",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSendReceiverAndArgumentsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: x with: (true ifTrue: [ x := 2 ])\x0a' return: #(1 2).\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: x with: (true ifTrue: [ x := 2 ])\x0a' return: {Array. 2}.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSuperSend",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_receiver_return_("foo ^ super isBoolean",true,false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSuperSend",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSuperSend\x0a\x09self \x0a\x09\x09should: 'foo ^ super isBoolean' \x0a\x09\x09receiver: true\x0a\x09\x09return: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:receiver:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTempVariables",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo | a | ^ a",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo | AVariable | ^ AVariable",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo | a b c | ^ c",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo | a | [ | d | ^ d ] value",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
self._should_return_("foo | a | a:= 1. ^ a",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=5;
//>>excludeEnd("ctx");
self._should_return_("foo | AVariable | AVariable := 1. ^ AVariable",(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTempVariables",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTempVariables\x0a\x09self should: 'foo | a | ^ a' return: nil.\x0a\x09self should: 'foo | AVariable | ^ AVariable' return: nil.\x0a\x09self should: 'foo | a b c | ^ c' return: nil.\x0a\x09self should: 'foo | a | [ | d | ^ d ] value' return: nil.\x0a\x09\x0a\x09self should: 'foo | a | a:= 1. ^ a' return: 1.\x0a\x09self should: 'foo | AVariable | AVariable := 1. ^ AVariable' return: 1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testThisContext",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ [ thisContext ] value outerContext == thisContext",true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testThisContext",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testThisContext\x0a\x09self should: 'foo ^ [ thisContext ] value outerContext == thisContext' return: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifFalse",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo true ifFalse: [ ^ 1 ]",self["@receiver"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo false ifFalse: [ ^ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo ^ true ifFalse: [ 1 ]",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo ^ false ifFalse: [ 2 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifFalse",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifFalse\x0a\x09self should: 'foo true ifFalse: [ ^ 1 ]' return: receiver.\x0a\x09self should: 'foo false ifFalse: [ ^ 2 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ true ifFalse: [ 1 ]' return: nil.\x0a\x09self should: 'foo ^ false ifFalse: [ 2 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifFalseIfTrue",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifFalseIfTrue",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifFalseIfTrue\x0a\x09self should: 'foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]' return: 2.\x0a\x09self should: 'foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]' return: 2.\x0a\x09self should: 'foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNil",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 ifNil: [ 2 ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ nil ifNil: [ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo 1 ifNil: [ ^ 2 ]",self["@receiver"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo nil ifNil: [ ^ 2 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifNil",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifNil\x0a\x09self should: 'foo ^ 1 ifNil: [ 2 ]' return: 1.\x0a\x09self should: 'foo ^ nil ifNil: [ 2 ]' return: 2.\x0a\x0a\x09self should: 'foo 1 ifNil: [ ^ 2 ]' return: receiver.\x0a\x09self should: 'foo nil ifNil: [ ^ 2 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNilIfNotNil",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifNilIfNotNil",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifNilIfNotNil\x0a\x09self should: 'foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 2.\x0a\x0a\x09self should: 'foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 3.\x0a\x09self should: 'foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNotNil",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 ifNotNil: [ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ nil ifNotNil: [ 2 ]",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo 1 ifNotNil: [ ^ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo nil ifNotNil: [ ^ 2 ]",self["@receiver"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifNotNil",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifNotNil\x0a\x09self should: 'foo ^ 1 ifNotNil: [ 2 ]' return: 2.\x0a\x09self should: 'foo ^ nil ifNotNil: [ 2 ]' return: nil.\x0a\x0a\x09self should: 'foo 1 ifNotNil: [ ^ 2 ]' return: 2.\x0a\x09self should: 'foo nil ifNotNil: [ ^ 2 ]' return: receiver.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNotNilWithArgument",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 ifNotNil: [ :val | val + 2 ]",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo ^ nil ifNotNil: [ :val | val + 2 ]",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo ^ nil ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]",(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
self._should_return_("foo ^ 1 ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=5;
//>>excludeEnd("ctx");
self._should_return_("foo ^ nil ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]",(5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifNotNilWithArgument",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifNotNilWithArgument\x0a\x09self should: 'foo ^ 1 ifNotNil: [ :val | val + 2 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNotNil: [ :val | val + 2 ]' return: nil.\x0a\x09\x0a\x09self should: 'foo ^ 1 ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]' return: 5.\x0a\x09\x0a\x09self should: 'foo ^ 1 ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]' return: 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifTrue",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo false ifTrue: [ ^ 1 ]",self["@receiver"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo true ifTrue: [ ^ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo ^ false ifTrue: [ 1 ]",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo ^ true ifTrue: [ 2 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifTrue",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifTrue\x0a\x09self should: 'foo false ifTrue: [ ^ 1 ]' return: receiver.\x0a\x09self should: 'foo true ifTrue: [ ^ 2 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ false ifTrue: [ 1 ]' return: nil.\x0a\x09self should: 'foo ^ true ifTrue: [ 2 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifTrueIfFalse",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_return_("foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
self._should_return_("foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
self._should_return_("foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
self._should_return_("foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifTrueIfFalse",{},globals.CodeGeneratorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifTrueIfFalse\x0a\x09self should: 'foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]' return: 2.\x0a\x09self should: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]' return: 1.\x0a\x09\x0a\x09self should: 'foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 1.\x0a\x09self should: 'foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:return:"]
}),
globals.CodeGeneratorTest);



smalltalk.addClass('ASTInterpreterTest', globals.CodeGeneratorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "analyze:forClass:",
protocol: 'parsing',
fn: function (aNode,aClass){
var self=this;
function $SemanticAnalyzer(){return globals.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(_st($SemanticAnalyzer())._on_(aClass))._visit_(aNode);
return aNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyze:forClass:",{aNode:aNode,aClass:aClass},globals.ASTInterpreterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode", "aClass"],
source: "analyze: aNode forClass: aClass\x0a\x09(SemanticAnalyzer on: aClass) visit: aNode.\x0a\x09^ aNode",
referencedClasses: ["SemanticAnalyzer"],
//>>excludeEnd("ide");
messageSends: ["visit:", "on:"]
}),
globals.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:receiver:withArguments:",
protocol: 'private',
fn: function (aString,anObject,aDictionary){
var self=this;
var ctx,ast,interpreter;
function $ASTInterpreter(){return globals.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
function $AIContext(){return globals.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$6,$4,$receiver;
interpreter=_st($ASTInterpreter())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
ast=self._parse_forClass_(aString,_st(anObject)._class());
$1=_st($AIContext())._new();
_st($1)._receiver_(anObject);
_st($1)._interpreter_(interpreter);
$2=_st($1)._yourself();
ctx=$2;
$3=_st(ast)._sequenceNode();
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
var sequence;
sequence=$receiver;
_st(_st(sequence)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(ctx)._defineLocal_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
};
_st(aDictionary)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(ctx)._localAt_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$5=interpreter;
_st($5)._context_(ctx);
_st($5)._interpret_(_st(ast)._nextChild());
_st($5)._proceed();
$6=_st($5)._result();
$4=$6;
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpret:receiver:withArguments:",{aString:aString,anObject:anObject,aDictionary:aDictionary,ctx:ctx,ast:ast,interpreter:interpreter},globals.ASTInterpreterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "aDictionary"],
source: "interpret: aString receiver: anObject withArguments: aDictionary\x0a\x09\x22The food is a methodNode. Interpret the sequenceNode only\x22\x0a\x09\x0a\x09| ctx ast interpreter |\x0a\x09\x0a\x09interpreter := ASTInterpreter new.\x0a\x09ast := self parse: aString forClass: anObject class.\x0a\x09\x0a\x09ctx := AIContext new\x0a\x09\x09receiver: anObject;\x0a\x09\x09interpreter: interpreter;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09\x22Define locals for the context\x22\x0a\x09ast sequenceNode ifNotNil: [ :sequence |\x0a\x09\x09sequence temps do: [ :each |\x0a\x09\x09\x09ctx defineLocal: each ] ].\x0a\x09\x09\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09ctx localAt: key put: value ].\x0a\x09\x0a\x09^ interpreter\x0a\x09\x09context: ctx;\x0a\x09\x09interpret: ast nextChild;\x0a\x09\x09proceed;\x0a\x09\x09result",
referencedClasses: ["ASTInterpreter", "AIContext"],
//>>excludeEnd("ide");
messageSends: ["new", "parse:forClass:", "class", "receiver:", "interpreter:", "yourself", "ifNotNil:", "sequenceNode", "do:", "temps", "defineLocal:", "keysAndValuesDo:", "localAt:put:", "context:", "interpret:", "nextChild", "proceed", "result"]
}),
globals.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
protocol: 'parsing',
fn: function (aString){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Smalltalk())._parse_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},globals.ASTInterpreterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk parse: aString",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:"]
}),
globals.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:forClass:",
protocol: 'parsing',
fn: function (aString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._analyze_forClass_(self._parse_(aString),aClass);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:forClass:",{aString:aString,aClass:aClass},globals.ASTInterpreterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "parse: aString forClass: aClass\x0a\x09^ self analyze: (self parse: aString) forClass: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["analyze:forClass:", "parse:"]
}),
globals.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "should:receiver:return:",
protocol: 'testing',
fn: function (aString,anObject,aResult){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@receiver"]=anObject;
$1=self._assert_equals_(self._interpret_receiver_withArguments_(aString,self["@receiver"],globals.HashedCollection._newFromPairs_([])),aResult);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:receiver:return:",{aString:aString,anObject:anObject,aResult:aResult},globals.ASTInterpreterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "aResult"],
source: "should: aString receiver: anObject return: aResult\x0a\x09receiver := anObject.\x0a\x09\x0a\x09^ self \x0a\x09\x09assert: (self interpret: aString receiver: receiver withArguments: #{})\x0a\x09\x09equals: aResult",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "interpret:receiver:withArguments:"]
}),
globals.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "should:return:",
protocol: 'testing',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._should_receiver_return_(aString,self["@receiver"],anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:return:",{aString:aString,anObject:anObject},globals.ASTInterpreterTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "should: aString return: anObject\x0a\x09^ self \x0a\x09\x09should: aString\x0a\x09\x09receiver: receiver\x0a\x09\x09return: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["should:receiver:return:"]
}),
globals.ASTInterpreterTest);



smalltalk.addClass('ASTDebuggerTest', globals.ASTInterpreterTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "interpret:receiver:withArguments:",
protocol: 'private',
fn: function (aString,anObject,aDictionary){
var self=this;
var ctx,ast,debugger_;
function $AIContext(){return globals.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
function $ASTInterpreter(){return globals.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
function $ASTDebugger(){return globals.ASTDebugger||(typeof ASTDebugger=="undefined"?nil:ASTDebugger)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$7,$5,$receiver;
$1=_st($AIContext())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
_st($1)._receiver_(anObject);
_st($1)._interpreter_(_st($ASTInterpreter())._new());
$2=_st($1)._yourself();
ctx=$2;
ast=self._parse_forClass_(aString,_st(anObject)._class());
$3=_st(ast)._sequenceNode();
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
var sequence;
sequence=$receiver;
_st(_st(sequence)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(ctx)._defineLocal_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
};
_st(aDictionary)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(ctx)._localAt_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$4=_st(ctx)._interpreter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interpreter"]=1;
//>>excludeEnd("ctx");
_st($4)._context_(ctx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context:"]=1;
//>>excludeEnd("ctx");
_st(_st(ctx)._interpreter())._node_(_st(ast)._nextChild());
debugger_=_st($ASTDebugger())._context_(ctx);
$6=debugger_;
_st($6)._proceed();
$7=_st($6)._result();
$5=$7;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpret:receiver:withArguments:",{aString:aString,anObject:anObject,aDictionary:aDictionary,ctx:ctx,ast:ast,debugger_:debugger_},globals.ASTDebuggerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "aDictionary"],
source: "interpret: aString receiver: anObject withArguments: aDictionary\x0a\x09| ctx ast debugger |\x0a\x09\x0a\x09ctx := AIContext new\x0a\x09\x09receiver: anObject;\x0a\x09\x09interpreter: ASTInterpreter new;\x0a\x09\x09yourself.\x0a\x09ast := self parse: aString forClass: anObject class.\x0a\x09\x09\x0a\x09\x22Define locals for the context\x22\x0a\x09ast sequenceNode ifNotNil: [ :sequence |\x0a\x09\x09sequence temps do: [ :each |\x0a\x09\x09\x09ctx defineLocal: each ] ].\x0a\x09\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09ctx localAt: key put: value ].\x0a\x09ctx interpreter context: ctx.\x0a\x09\x0a\x09ctx interpreter node: ast nextChild.\x0a\x09\x0a\x09debugger := ASTDebugger context: ctx.\x0a\x09\x0a\x09^ debugger \x0a\x09\x09proceed; \x0a\x09\x09result",
referencedClasses: ["AIContext", "ASTInterpreter", "ASTDebugger"],
//>>excludeEnd("ide");
messageSends: ["receiver:", "new", "interpreter:", "yourself", "parse:forClass:", "class", "ifNotNil:", "sequenceNode", "do:", "temps", "defineLocal:", "keysAndValuesDo:", "localAt:put:", "context:", "interpreter", "node:", "nextChild", "proceed", "result"]
}),
globals.ASTDebuggerTest);



smalltalk.addClass('InliningCodeGeneratorTest', globals.CodeGeneratorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $InliningCodeGenerator(){return globals.InliningCodeGenerator||(typeof InliningCodeGenerator=="undefined"?nil:InliningCodeGenerator)}
return $InliningCodeGenerator();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGeneratorClass\x0a\x09^ InliningCodeGenerator",
referencedClasses: ["InliningCodeGenerator"],
//>>excludeEnd("ide");
messageSends: []
}),
globals.InliningCodeGeneratorTest);



smalltalk.addClass('ScopeVarTest', globals.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testClassRefVar",
protocol: 'tests',
fn: function (){
var self=this;
var node;
function $VariableNode(){return globals.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
function $SemanticAnalyzer(){return globals.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
function $MethodLexicalScope(){return globals.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=_st($VariableNode())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
_st($1)._value_("Object");
$2=_st($1)._yourself();
node=$2;
$3=_st($SemanticAnalyzer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
_st($3)._pushScope_(_st($MethodLexicalScope())._new());
$4=_st($3)._visit_(node);
self._assert_(_st(_st(node)._binding())._isClassRefVar());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassRefVar",{node:node},globals.ScopeVarTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassRefVar\x0a\x09| node |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'Object';\x0a\x09\x09yourself.\x0a\x09SemanticAnalyzer new \x0a\x09\x09pushScope: MethodLexicalScope new;\x0a\x09\x09visit: node.\x0a\x09self assert: node binding isClassRefVar",
referencedClasses: ["VariableNode", "SemanticAnalyzer", "MethodLexicalScope"],
//>>excludeEnd("ide");
messageSends: ["value:", "new", "yourself", "pushScope:", "visit:", "assert:", "isClassRefVar", "binding"]
}),
globals.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstanceVar",
protocol: 'tests',
fn: function (){
var self=this;
var node,scope;
function $VariableNode(){return globals.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
function $MethodLexicalScope(){return globals.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=_st($VariableNode())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
scope=_st($MethodLexicalScope())._new();
_st(scope)._addIVar_("bzzz");
self._assert_(_st(_st(scope)._bindingFor_(node))._isInstanceVar());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInstanceVar",{node:node,scope:scope},globals.ScopeVarTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInstanceVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addIVar: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isInstanceVar",
referencedClasses: ["VariableNode", "MethodLexicalScope"],
//>>excludeEnd("ide");
messageSends: ["value:", "new", "yourself", "addIVar:", "assert:", "isInstanceVar", "bindingFor:"]
}),
globals.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPseudoVar",
protocol: 'tests',
fn: function (){
var self=this;
var node,pseudoVars;
function $VariableNode(){return globals.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
function $MethodLexicalScope(){return globals.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
pseudoVars=["self", "super", "true", "false", "nil"];
_st(pseudoVars)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=_st($VariableNode())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
_st($1)._value_(each);
$2=_st($1)._yourself();
node=$2;
node;
return self._assert_(_st(_st(_st($MethodLexicalScope())._new())._bindingFor_(node))._isPseudoVar());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPseudoVar",{node:node,pseudoVars:pseudoVars},globals.ScopeVarTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPseudoVar\x0a\x09| node pseudoVars |\x0a\x09pseudoVars := #('self' 'super' 'true' 'false' 'nil').\x0a\x09pseudoVars do: [:each |\x0a\x09\x09node := VariableNode new\x0a\x09\x09value: each;\x0a\x09\x09yourself.\x0a\x09\x09self assert: (MethodLexicalScope new bindingFor: node) isPseudoVar ]",
referencedClasses: ["VariableNode", "MethodLexicalScope"],
//>>excludeEnd("ide");
messageSends: ["do:", "value:", "new", "yourself", "assert:", "isPseudoVar", "bindingFor:"]
}),
globals.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTempVar",
protocol: 'tests',
fn: function (){
var self=this;
var node,scope;
function $VariableNode(){return globals.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
function $MethodLexicalScope(){return globals.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=_st($VariableNode())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
scope=_st($MethodLexicalScope())._new();
_st(scope)._addTemp_("bzzz");
self._assert_(_st(_st(scope)._bindingFor_(node))._isTempVar());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTempVar",{node:node,scope:scope},globals.ScopeVarTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTempVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addTemp: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isTempVar",
referencedClasses: ["VariableNode", "MethodLexicalScope"],
//>>excludeEnd("ide");
messageSends: ["value:", "new", "yourself", "addTemp:", "assert:", "isTempVar", "bindingFor:"]
}),
globals.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnknownVar",
protocol: 'tests',
fn: function (){
var self=this;
var node;
function $VariableNode(){return globals.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
function $MethodLexicalScope(){return globals.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=_st($VariableNode())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
self._assert_(_st(_st(_st($MethodLexicalScope())._new())._bindingFor_(node))._isNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnknownVar",{node:node},globals.ScopeVarTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnknownVar\x0a\x09| node |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09self assert: (MethodLexicalScope new bindingFor: node) isNil",
referencedClasses: ["VariableNode", "MethodLexicalScope"],
//>>excludeEnd("ide");
messageSends: ["value:", "new", "yourself", "assert:", "isNil", "bindingFor:"]
}),
globals.ScopeVarTest);



smalltalk.addClass('SemanticAnalyzerTest', globals.TestCase, ['analyzer'], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
function $SemanticAnalyzer(){return globals.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@analyzer"]=_st($SemanticAnalyzer())._on_($Object());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09analyzer := SemanticAnalyzer on: Object",
referencedClasses: ["SemanticAnalyzer", "Object"],
//>>excludeEnd("ide");
messageSends: ["on:"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAssignment",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $InvalidAssignmentError(){return globals.InvalidAssignmentError||(typeof InvalidAssignmentError=="undefined"?nil:InvalidAssignmentError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo self := 1";
ast=_st($Smalltalk())._parse_(src);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self["@analyzer"])._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$InvalidAssignmentError());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAssignment",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAssignment\x0a\x09| src ast |\x0a\x0a\x09src := 'foo self := 1'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: InvalidAssignmentError",
referencedClasses: ["Smalltalk", "InvalidAssignmentError"],
//>>excludeEnd("ide");
messageSends: ["parse:", "should:raise:", "visit:"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonLocalReturn",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo | a | a + 1. ^ a";
ast=_st($Smalltalk())._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._deny_(_st(_st(ast)._scope())._hasNonLocalReturn());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNonLocalReturn\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. ^ a'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast scope hasNonLocalReturn",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:", "visit:", "deny:", "hasNonLocalReturn", "scope"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonLocalReturn2",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ [ ^ a] ]";
ast=_st($Smalltalk())._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._assert_(_st(_st(ast)._scope())._hasNonLocalReturn());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn2",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNonLocalReturn2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ ^ a] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope hasNonLocalReturn",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:", "visit:", "assert:", "hasNonLocalReturn", "scope"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testScope",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
src="foo | a | a + 1. [ | b | b := a ]";
ast=_st($Smalltalk())._parse_(src);
_st(self["@analyzer"])._visit_(ast);
$4=_st(_st(_st(ast)._nodes())._first())._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._last();
$2=_st($3)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$1=_st($2).__eq_eq(_st(ast)._scope());
self._deny_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testScope",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast nodes first nodes last scope == ast scope.",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "last", "nodes", "first"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testScope2",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $8,$7,$6,$5,$4,$3,$2,$1;
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st($Smalltalk())._parse_(src);
_st(self["@analyzer"])._visit_(ast);
$8=_st(_st(_st(ast)._nodes())._first())._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=3;
//>>excludeEnd("ctx");
$7=_st($8)._last();
$6=_st($7)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=2;
//>>excludeEnd("ctx");
$5=_st($6)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$4=_st($5)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$2=_st($3)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$1=_st($2).__eq_eq(_st(ast)._scope());
self._deny_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testScope2",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testScope2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast nodes first nodes last nodes first nodes first scope == ast scope.",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "first", "nodes", "last"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testScopeLevel",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$10,$9,$8,$7,$6,$5,$4,$3;
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st($Smalltalk())._parse_(src);
_st(self["@analyzer"])._visit_(ast);
$2=_st(ast)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$1=_st($2)._scopeLevel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scopeLevel"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$10=_st(_st(_st(ast)._nodes())._first())._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=3;
//>>excludeEnd("ctx");
$9=_st($10)._last();
$8=_st($9)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=2;
//>>excludeEnd("ctx");
$7=_st($8)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$6=_st($7)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
$5=_st($6)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$4=_st($5)._scope();
$3=_st($4)._scopeLevel();
self._assert_equals_($3,(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testScopeLevel",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testScopeLevel\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope scopeLevel equals: 1.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first scope scopeLevel equals: 3",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:", "visit:", "assert:equals:", "scopeLevel", "scope", "first", "nodes", "last"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnknownVariables",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $UnknownVariableError(){return globals.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo | a | b + a";
ast=_st($Smalltalk())._parse_(src);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self["@analyzer"])._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$UnknownVariableError());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnknownVariables",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnknownVariables\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | b + a'.\x0a\x09ast := Smalltalk parse: src.\x0a\x0a\x09self should: [ analyzer visit: ast ] raise: UnknownVariableError",
referencedClasses: ["Smalltalk", "UnknownVariableError"],
//>>excludeEnd("ide");
messageSends: ["parse:", "should:raise:", "visit:"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnknownVariablesWithScope",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $UnknownVariableError(){return globals.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo | a b | [ c + 1. [ a + 1. d + 1 ]]";
ast=_st($Smalltalk())._parse_(src);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self["@analyzer"])._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$UnknownVariableError());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnknownVariablesWithScope",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnknownVariablesWithScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a b | [ c + 1. [ a + 1. d + 1 ]]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09\x0a\x09self should: [ analyzer visit: ast ] raise: UnknownVariableError",
referencedClasses: ["Smalltalk", "UnknownVariableError"],
//>>excludeEnd("ide");
messageSends: ["parse:", "should:raise:", "visit:"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo | a | a + 1";
ast=_st($Smalltalk())._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariableShadowing\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:", "visit:"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing2",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ShadowingVariableError(){return globals.ShadowingVariableError||(typeof ShadowingVariableError=="undefined"?nil:ShadowingVariableError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ | a | a := 2 ]";
ast=_st($Smalltalk())._parse_(src);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self["@analyzer"])._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$ShadowingVariableError());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing2",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariableShadowing2\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | a | a := 2 ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
referencedClasses: ["Smalltalk", "ShadowingVariableError"],
//>>excludeEnd("ide");
messageSends: ["parse:", "should:raise:", "visit:"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing3",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ | b | b := 2 ]";
ast=_st($Smalltalk())._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing3",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariableShadowing3\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | b | b := 2 ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:", "visit:"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing4",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]";
ast=_st($Smalltalk())._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing4",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariableShadowing4\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:", "visit:"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing5",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ShadowingVariableError(){return globals.ShadowingVariableError||(typeof ShadowingVariableError=="undefined"?nil:ShadowingVariableError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]";
ast=_st($Smalltalk())._parse_(src);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self["@analyzer"])._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$ShadowingVariableError());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing5",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariableShadowing5\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
referencedClasses: ["Smalltalk", "ShadowingVariableError"],
//>>excludeEnd("ide");
messageSends: ["parse:", "should:raise:", "visit:"]
}),
globals.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariablesLookup",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $7,$6,$5,$4,$3,$2,$1,$15,$14,$13,$12,$11,$10,$9,$16,$8,$27,$26,$25,$24,$23,$22,$21,$20,$19,$18,$17,$39,$38,$37,$36,$35,$34,$33,$32,$31,$30,$29,$42,$41,$40,$28;
src="foo | a | a + 1. [ | b | b := a ]";
ast=_st($Smalltalk())._parse_(src);
_st(self["@analyzer"])._visit_(ast);
$7=_st(ast)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=2;
//>>excludeEnd("ctx");
$6=_st($7)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$5=_st($6)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
$4=_st($5)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
$2=_st($3)._binding();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binding"]=1;
//>>excludeEnd("ctx");
$1=_st($2)._isTempVar();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isTempVar"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$15=_st(ast)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=4;
//>>excludeEnd("ctx");
$14=_st($15)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=4;
//>>excludeEnd("ctx");
$13=_st($14)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=3;
//>>excludeEnd("ctx");
$12=_st($13)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=3;
//>>excludeEnd("ctx");
$11=_st($12)._receiver();
$10=_st($11)._binding();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binding"]=2;
//>>excludeEnd("ctx");
$9=_st($10)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$16=_st(ast)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
$8=_st($9).__eq_eq($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$27=_st(ast)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=8;
//>>excludeEnd("ctx");
$26=_st($27)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=7;
//>>excludeEnd("ctx");
$25=_st($26)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=7;
//>>excludeEnd("ctx");
$24=_st($25)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last"]=1;
//>>excludeEnd("ctx");
$23=_st($24)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=6;
//>>excludeEnd("ctx");
$22=_st($23)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=6;
//>>excludeEnd("ctx");
$21=_st($22)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=5;
//>>excludeEnd("ctx");
$20=_st($21)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=5;
//>>excludeEnd("ctx");
$19=_st($20)._left();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["left"]=1;
//>>excludeEnd("ctx");
$18=_st($19)._binding();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binding"]=3;
//>>excludeEnd("ctx");
$17=_st($18)._isTempVar();
self._assert_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$39=_st(ast)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=12;
//>>excludeEnd("ctx");
$38=_st($39)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=10;
//>>excludeEnd("ctx");
$37=_st($38)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=11;
//>>excludeEnd("ctx");
$36=_st($37)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last"]=2;
//>>excludeEnd("ctx");
$35=_st($36)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=10;
//>>excludeEnd("ctx");
$34=_st($35)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=9;
//>>excludeEnd("ctx");
$33=_st($34)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=9;
//>>excludeEnd("ctx");
$32=_st($33)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=8;
//>>excludeEnd("ctx");
$31=_st($32)._left();
$30=_st($31)._binding();
$29=_st($30)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=3;
//>>excludeEnd("ctx");
$42=_st(_st(_st(ast)._nodes())._first())._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=13;
//>>excludeEnd("ctx");
$41=_st($42)._last();
$40=_st($41)._scope();
$28=_st($29).__eq_eq($40);
self._assert_($28);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariablesLookup",{src:src,ast:ast},globals.SemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariablesLookup\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09\x22Binding for `a` in the message send\x22\x0a\x09self assert: ast nodes first nodes first receiver binding isTempVar.\x0a\x09self assert: ast nodes first nodes first receiver binding scope == ast scope.\x0a\x0a\x09\x22Binding for `b`\x22\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding isTempVar.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding scope == ast nodes first nodes last scope.",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:", "visit:", "assert:", "isTempVar", "binding", "receiver", "first", "nodes", "==", "scope", "left", "last"]
}),
globals.SemanticAnalyzerTest);



smalltalk.addClass('AISemanticAnalyzerTest', globals.SemanticAnalyzerTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
function $AISemanticAnalyzer(){return globals.AISemanticAnalyzer||(typeof AISemanticAnalyzer=="undefined"?nil:AISemanticAnalyzer)}
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
function $AIContext(){return globals.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$6;
$1=_st($AISemanticAnalyzer())._on_($Object());
$2=$1;
$4=_st($AIContext())._new();
_st($4)._defineLocal_("local");
_st($4)._localAt_put_("local",(3));
$5=_st($4)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3=$5;
_st($2)._context_($3);
$6=_st($1)._yourself();
self["@analyzer"]=$6;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.AISemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09analyzer := (AISemanticAnalyzer on: Object)\x0a\x09\x09context: (AIContext new\x0a\x09\x09\x09defineLocal: 'local';\x0a\x09\x09\x09localAt: 'local' put: 3;\x0a\x09\x09\x09yourself);\x0a\x09\x09yourself",
referencedClasses: ["AISemanticAnalyzer", "Object", "AIContext"],
//>>excludeEnd("ide");
messageSends: ["context:", "on:", "defineLocal:", "new", "localAt:put:", "yourself"]
}),
globals.AISemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContextVariables",
protocol: 'tests',
fn: function (){
var self=this;
var src,ast;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $UnknownVariableError(){return globals.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
src="foo | a | local + a";
ast=_st($Smalltalk())._parse_(src);
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self["@analyzer"])._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$UnknownVariableError());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testContextVariables",{src:src,ast:ast},globals.AISemanticAnalyzerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testContextVariables\x0a\x09| src ast |\x0a\x09\x0a\x09src := 'foo | a | local + a'.\x0a\x09ast := Smalltalk parse: src.\x0a\x0a\x09self shouldnt: [ analyzer visit: ast ] raise: UnknownVariableError",
referencedClasses: ["Smalltalk", "UnknownVariableError"],
//>>excludeEnd("ide");
messageSends: ["parse:", "shouldnt:raise:", "visit:"]
}),
globals.AISemanticAnalyzerTest);


});
