Smalltalk createPackage: 'Compiler-AST'!
DagParentNode subclass: #ASTNode
	slots: {#parent. #position. #source. #shouldBeAliased}
	package: 'Compiler-AST'!
!ASTNode commentStamp!
I am the abstract root class of the abstract syntax tree.

Concrete classes should implement `#accept:` to allow visiting.

`position` holds a point containing line and column number of the symbol location in the original source file.!

!ASTNode methodsFor: 'accessing'!

location: aLocation
	self position: aLocation start line @ aLocation start column
!

method
	^ self parent ifNotNil: [ :node | node method ]
!

navigationNodeAt: aPoint ifAbsent: aBlock
	"Answer the navigation node in the receiver's tree at aPoint 
	or nil if no navigation node was found.
	
	See `node >> isNaviationNode`"
	
	| children |
	
	children := self allDagChildren select: [ :each | 
		each isNavigationNode and: [ each inPosition: aPoint ] ].
	
	children ifEmpty: [ ^ aBlock value ].
	
	^ (children asArray sort: [ :a :b | 
		(a positionStart dist: aPoint) <= 
		(b positionStart dist: aPoint) ]) first
!

parent
	^ parent
!

parent: aNode
	parent := aNode
!

position
	"answer the line and column of the receiver in the source code"
	
	^ position ifNil: [ 
		self parent ifNotNil: [ :node | node position ] ]
!

position: aPosition
	position := aPosition
!

positionEnd
	^ self positionStart + ((self source lines size - 1) @ (self source lines last size - 1))
!

positionStart
	^ self position
!

shouldBeAliased
	^ shouldBeAliased ifNil: [ false ]
!

shouldBeAliased: aBoolean
	shouldBeAliased := aBoolean
!

size
	^ self source size
!

source
	^ source ifNil: [ '' ]
!

source: aString
	source := aString
! !

!ASTNode methodsFor: 'building'!

withTail: aCollection
	^ aCollection inject: self into: [
		:receiver :send | SendNode new
			position: send position;
			source: send source;
			receiver: receiver;
			selector: send selector;
			arguments: send arguments;
			yourself ]
! !

!ASTNode methodsFor: 'testing'!

inPosition: aPoint
	^ (self positionStart <= aPoint and: [
		self positionEnd >= aPoint ])
!

isAssignmentNode
	^ false
!

isBlockNode
	^ false
!

isBlockSequenceNode
	^ false
!

isCascadeNode
	^ false
!

isImmutable
	^ false
!

isJSStatementNode
	^ false
!

isNavigationNode
	"Answer true if the node can be navigated to"
	
	^ false
!

isReturnNode
	^ false
!

isSendNode
	^ false
!

isSequenceNode
	^ false
!

isSuper
	^ false
!

isValueNode
	^ false
!

isVariableNode
	^ false
!

requiresSmalltalkContext
	"Answer true if the receiver requires a smalltalk context.
	Only send nodes require a context.
	
	If no node requires a context, the method will be compiled without one.
	See `IRJSTranslator` and `JSStream` for context creation"
	
	^ (self dagChildren 
		detect: [ :each | each requiresSmalltalkContext ]
		ifNone: [ nil ]) notNil
! !

ASTNode subclass: #AssignmentNode
	slots: {#left. #right}
	package: 'Compiler-AST'!
!AssignmentNode commentStamp!
I represent an assignment node.!

!AssignmentNode methodsFor: 'accessing'!

dagChildren
	^ Array with: self left with: self right
!

left
	^ left
!

left: aNode
	left := aNode
!

right
	^ right
!

right: aNode
	right := aNode
! !

!AssignmentNode methodsFor: 'testing'!

isAssignmentNode
	^ true
! !

!AssignmentNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitAssignmentNode: self
! !

ASTNode subclass: #BlockNode
	slots: {#parameters. #scope}
	package: 'Compiler-AST'!
!BlockNode commentStamp!
I represent an block closure node.!

!BlockNode methodsFor: 'accessing'!

parameters
	^ parameters ifNil: [ parameters := Array new ]
!

parameters: aCollection
	parameters := aCollection
!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
! !

!BlockNode methodsFor: 'testing'!

isBlockNode
	^ true
! !

!BlockNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitBlockNode: self
! !

ASTNode subclass: #CascadeNode
	slots: {#receiver}
	package: 'Compiler-AST'!
!CascadeNode commentStamp!
I represent an cascade node.!

!CascadeNode methodsFor: 'accessing'!

receiver
	^ receiver
!

receiver: aNode
	receiver := aNode
! !

!CascadeNode methodsFor: 'testing'!

isCascadeNode
	^ true
! !

!CascadeNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitCascadeNode: self
! !

ASTNode subclass: #DynamicArrayNode
	slots: {}
	package: 'Compiler-AST'!
!DynamicArrayNode commentStamp!
I represent an dynamic array node.!

!DynamicArrayNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitDynamicArrayNode: self
! !

ASTNode subclass: #DynamicDictionaryNode
	slots: {}
	package: 'Compiler-AST'!
!DynamicDictionaryNode commentStamp!
I represent an dynamic dictionary node.!

!DynamicDictionaryNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitDynamicDictionaryNode: self
! !

ASTNode subclass: #JSStatementNode
	slots: {}
	package: 'Compiler-AST'!
!JSStatementNode commentStamp!
I represent an JavaScript statement node.!

!JSStatementNode methodsFor: 'testing'!

isJSStatementNode
	^ true
!

requiresSmalltalkContext
	^ true
! !

!JSStatementNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitJSStatementNode: self
! !

ASTNode subclass: #MethodNode
	slots: {#selector. #arguments. #pragmas. #scope. #classReferences. #sendIndexes}
	package: 'Compiler-AST'!
!MethodNode commentStamp!
I represent an method node.

A method node must be the root and only method node of a valid AST.!

!MethodNode methodsFor: 'accessing'!

arguments
	^ arguments ifNil: [ #() ]
!

arguments: aCollection
	arguments := aCollection
!

classReferences
	^ classReferences
!

classReferences: aCollection
	classReferences := aCollection
!

messageSends
	^ self sendIndexes keys
!

method
	^ self
!

pragmas
	^ pragmas ifNil: [ #() ]
!

pragmas: aCollection
	pragmas := aCollection
!

scope
	^ scope
!

scope: aMethodScope
	scope := aMethodScope
!

selector
	^ selector
!

selector: aString
	selector := aString
!

sendIndexes
	^ sendIndexes
!

sendIndexes: aDictionary
	sendIndexes := aDictionary
!

sequenceNode
	self dagChildren do: [ :each |
		each isSequenceNode ifTrue: [ ^ each ] ].
		
	^ nil
! !

!MethodNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitMethodNode: self
! !

ASTNode subclass: #ReturnNode
	slots: {#scope}
	package: 'Compiler-AST'!
!ReturnNode commentStamp!
I represent an return node. At the AST level, there is not difference between a local return or non-local return.!

!ReturnNode methodsFor: 'accessing'!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
! !

!ReturnNode methodsFor: 'testing'!

isReturnNode
	^ true
!

nonLocalReturn
	^ self scope isMethodScope not
! !

!ReturnNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitReturnNode: self
! !

ASTNode subclass: #SendNode
	slots: {#selector. #arguments. #receiver. #index. #shouldBeInlined}
	package: 'Compiler-AST'!
!SendNode commentStamp!
I represent an message send node.!

!SendNode methodsFor: 'accessing'!

arguments
	^ arguments ifNil: [ arguments := #() ]
!

arguments: aCollection
	arguments := aCollection
!

dagChildren
	self receiver ifNil: [ ^ self arguments copy ].
	
	^ (Array with: self receiver)
		addAll: self arguments;
		yourself
!

index
	^ index
!

index: anInteger
	index := anInteger
!

navigationLink
	^ self selector
!

receiver
	^ receiver
!

receiver: aNode
	receiver := aNode
!

selector
	^ selector
!

selector: aString
	selector := aString
!

shouldBeInlined
	^ shouldBeInlined ifNil: [ false ]
!

shouldBeInlined: aBoolean
	shouldBeInlined := aBoolean
!

superSend
	^ self receiver notNil and: [ self receiver isSuper ]
! !

!SendNode methodsFor: 'testing'!

isNavigationNode
	^ true
!

isSendNode
	^ true
!

requiresSmalltalkContext
	^ true
! !

!SendNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitSendNode: self
! !

ASTNode subclass: #SequenceNode
	slots: {#temps. #scope}
	package: 'Compiler-AST'!
!SequenceNode commentStamp!
I represent an sequence node. A sequence represent a set of instructions inside the same scope (the method scope or a block scope).!

!SequenceNode methodsFor: 'accessing'!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
!

temps
	^ temps ifNil: [ #() ]
!

temps: aCollection
	temps := aCollection
! !

!SequenceNode methodsFor: 'testing'!

isSequenceNode
	^ true
! !

!SequenceNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitSequenceNode: self
! !

SequenceNode subclass: #BlockSequenceNode
	slots: {}
	package: 'Compiler-AST'!
!BlockSequenceNode commentStamp!
I represent an special sequence node for block scopes.!

!BlockSequenceNode methodsFor: 'testing'!

isBlockSequenceNode
	^ true
! !

!BlockSequenceNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitBlockSequenceNode: self
! !

ASTNode subclass: #ValueNode
	slots: {#value}
	package: 'Compiler-AST'!
!ValueNode commentStamp!
I represent a value node.!

!ValueNode methodsFor: 'accessing'!

value
	^ value
!

value: anObject
	value := anObject
! !

!ValueNode methodsFor: 'testing'!

isImmutable
	^ self value isImmutable
!

isValueNode
	^ true
! !

!ValueNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitValueNode: self
! !

ValueNode subclass: #VariableNode
	slots: {#assigned. #binding}
	package: 'Compiler-AST'!
!VariableNode commentStamp!
I represent an variable node.!

!VariableNode methodsFor: 'accessing'!

alias
	^ self binding alias
!

assigned
	^ assigned ifNil: [ false ]
!

assigned: aBoolean
	assigned := aBoolean
!

beAssigned
	self binding validateAssignment.
	assigned := true
!

binding
	^ binding
!

binding: aScopeVar
	binding := aScopeVar
!

navigationLink
	^ self value
! !

!VariableNode methodsFor: 'testing'!

isArgument
	^ self binding isArgVar
!

isImmutable
	^ self binding isImmutable
!

isNavigationNode
	^ true
!

isSuper
	^ self binding isSuper
!

isVariableNode
	^ true
! !

!VariableNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitVariableNode: self
! !

Object subclass: #AstPragmator
	slots: {#methodNode}
	package: 'Compiler-AST'!
!AstPragmator commentStamp!
I am abstract superclass for pragma-processing transformer.

My subclasses should implement messages for each pragma
they process. Pragma processing checks if a message is known
to a class but not to its superclass. IOW, each and only those
pragmas are processed which are defined as methods in the subclass.

These messages can access sequence node in which
a pragma occurred and its containing method node
as `self sequenceNode` and `self methodNode`.

See `EarlyPragmator` for an example.!

!AstPragmator methodsFor: 'accessing'!

methodNode
	^ methodNode
!

methodNode: anObject
	methodNode := anObject
! !

!AstPragmator methodsFor: 'visiting'!

value: aMethodNode
	self methodNode: aMethodNode.
	self processPragmas: aMethodNode pragmas.
	^ aMethodNode
! !

AstPragmator subclass: #AstEarlyPragmator
	slots: {}
	package: 'Compiler-AST'!

!AstEarlyPragmator methodsFor: 'pragmas'!

inlineJS: aString
	self methodNode sequenceNode dagChildren ifNotEmpty: [
		CompilerError signal: 'There must be no other code or code generator pragma than a lone inlineJS:' ].
	self methodNode sequenceNode addDagChild: (
		JSStatementNode new
			source: aString;
			yourself)
! !

Error subclass: #CompilerError
	slots: {}
	package: 'Compiler-AST'!
!CompilerError commentStamp!
I am the common superclass of all compiling errors.!

PathDagVisitor subclass: #ParentFakingPathDagVisitor
	slots: {#setParentSelector}
	package: 'Compiler-AST'!
!ParentFakingPathDagVisitor commentStamp!
I am base class of `DagNode` visitor.

I hold the path of ancestors up to actual node
in `self path`.!

!ParentFakingPathDagVisitor methodsFor: 'visiting'!

visit: aNode
	self path ifNotEmpty: [ :p | aNode parent: p last ].
	^ super visit: aNode
! !

ParentFakingPathDagVisitor subclass: #NodeVisitor
	slots: {}
	package: 'Compiler-AST'!
!NodeVisitor commentStamp!
I am the abstract super class of all AST node visitors.!

!NodeVisitor methodsFor: 'visiting'!

visitAssignmentNode: aNode
	^ self visitDagNode: aNode
!

visitBlockNode: aNode
	^ self visitDagNode: aNode
!

visitBlockSequenceNode: aNode
	^ self visitSequenceNode: aNode
!

visitCascadeNode: aNode
	^ self visitDagNode: aNode
!

visitDagNode: aNode
	^ self visitDagNodeVariantSimple: aNode
!

visitDynamicArrayNode: aNode
	^ self visitDagNode: aNode
!

visitDynamicDictionaryNode: aNode
	^ self visitDagNode: aNode
!

visitJSStatementNode: aNode
	^ self visitDagNode: aNode
!

visitMethodNode: aNode
	^ self visitDagNode: aNode
!

visitReturnNode: aNode
	^ self visitDagNode: aNode
!

visitSendNode: aNode
	^ self visitDagNode: aNode
!

visitSequenceNode: aNode
	^ self visitDagNode: aNode
!

visitValueNode: aNode
	^ self visitDagNode: aNode
!

visitVariableNode: aNode
	^ self visitDagNode: aNode
! !

AstPragmator setTraitComposition: {TPragmator} asTraitComposition!
! !

!CompiledMethod methodsFor: '*Compiler-AST'!

ast
	self source ifEmpty: [ CompilerError signal: 'Method source is empty' ].
	
	^ Compiler new
		ast: self source
		forClass: self origin
		protocol: self protocol
! !

