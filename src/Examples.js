define("amber_core/Examples", ["amber/boot", "amber_core/Web"], function($boot){
var $vm=$boot.vm,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$vm,_st=$recv,globals=$globals;
smalltalk.addPackage('Examples');
smalltalk.packages["Examples"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('Counter', globals.Widget, ['count', 'header'], 'Examples');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Counter.comment="This is a trivial Widget example mimicking the classic Counter example in Seaside.\x0aIn order to play with it, just evaluate the doit below in a workspace.\x0aThen take a look in the HTML document above the IDE.\x0a\x0a\x09\x09Counter tryExample";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "decrease",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@count"]=_st(self["@count"]).__minus((1));
_st(self["@header"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(html)._with_(_st(self["@count"])._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"decrease",{},globals.Counter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "decrease\x0a\x09count := count - 1.\x0a\x09header contents: [ :html | html with: count asString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "contents:", "with:", "asString"]
}),
globals.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "increase",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@count"]=_st(self["@count"]).__plus((1));
_st(self["@header"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(html)._with_(_st(self["@count"])._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"increase",{},globals.Counter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "increase\x0a\x09count := count + 1.\x0a\x09header contents: [ :html | html with: count asString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "contents:", "with:", "asString"]
}),
globals.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.Counter.superclass.fn.prototype._initialize.apply(_st(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@count"]=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Counter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09count := 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
globals.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._h1();
_st($1)._with_(_st(self["@count"])._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=_st($1)._yourself();
self["@header"]=$2;
$3=_st(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
_st($3)._with_("++");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=_st($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._increase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$5=_st(html)._button();
_st($5)._with_("--");
$6=_st($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._decrease();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Counter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09header := html h1\x0a\x09\x09with: count asString;\x0a\x09\x09yourself.\x0a\x09html button\x0a\x09\x09with: '++';\x0a\x09\x09onClick: [ self increase ].\x0a\x09html button\x0a\x09\x09with: '--';\x0a\x09\x09onClick: [ self decrease ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "asString", "yourself", "button", "onClick:", "increase", "decrease"]
}),
globals.Counter);


smalltalk.addMethod(
smalltalk.method({
selector: "tryExample",
protocol: 'example',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tryExample",{},globals.Counter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tryExample\x0a\x09\x22In order to play with the Counter, just select the\x0a\x09doit below and press the Do it button. Then take a\x0a\x09look in the HTML document above the IDE.\x22\x0a\x0a\x09\x22Counter tryExample\x22\x0a\x09\x09self new appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
globals.Counter.klass);

});
