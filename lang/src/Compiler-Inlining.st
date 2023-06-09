Smalltalk createPackage: 'Compiler-Inlining'!
NodeVisitor subclass: #ASTPreInliner
	slots: {}
	package: 'Compiler-Inlining'!

!ASTPreInliner methodsFor: 'visiting'!

visitSendNode: aNode

	aNode superSend ifFalse: [ 
		(IRSendInliner inlinedSelectors includes: aNode selector) ifTrue: [
			aNode shouldBeInlined: true.
			aNode receiver ifNotNil: [ :receiver |
				receiver shouldBeAliased: true ] ] ].

	^ super visitSendNode: aNode
! !

IRClosure subclass: #IRInlinedClosure
	slots: {}
	package: 'Compiler-Inlining'!
!IRInlinedClosure commentStamp!
I represent an inlined closure instruction.!

!IRInlinedClosure methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedClosure methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	aVisitor visitIRInlinedClosure: self
! !

IRSend subclass: #IRInlinedSend
	slots: {}
	package: 'Compiler-Inlining'!
!IRInlinedSend commentStamp!
I am the abstract super class of inlined message send instructions.!

!IRInlinedSend methodsFor: 'accessing'!

internalVariables
	"Answer a collection of internal variables required 
	to perform the inlining"
	
	^ #()
! !

!IRInlinedSend methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedSend methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	aVisitor visitInlinedSend: self
! !

IRInlinedSend subclass: #IRInlinedIfFalse
	slots: {}
	package: 'Compiler-Inlining'!
!IRInlinedIfFalse commentStamp!
I represent an inlined `#ifFalse:` message send instruction.!

!IRInlinedIfFalse methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	aVisitor visitIRInlinedIfFalse: self
! !

IRInlinedSend subclass: #IRInlinedIfNilIfNotNil
	slots: {}
	package: 'Compiler-Inlining'!
!IRInlinedIfNilIfNotNil commentStamp!
I represent an inlined `#ifNil:ifNotNil:` message send instruction.!

!IRInlinedIfNilIfNotNil methodsFor: 'accessing'!

internalVariables
	^ Array with: self receiverInternalVariable
!

receiverInternalVariable
	^ IRVariable new
		variable: (AliasVar new name: self receiverInternalVariableName);
		yourself.
!

receiverInternalVariableName
	^ '$receiver'
! !

!IRInlinedIfNilIfNotNil methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	aVisitor visitIRInlinedIfNilIfNotNil: self
! !

IRInlinedSend subclass: #IRInlinedIfTrue
	slots: {}
	package: 'Compiler-Inlining'!
!IRInlinedIfTrue commentStamp!
I represent an inlined `#ifTrue:` message send instruction.!

!IRInlinedIfTrue methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	aVisitor visitIRInlinedIfTrue: self
! !

IRInlinedSend subclass: #IRInlinedIfTrueIfFalse
	slots: {}
	package: 'Compiler-Inlining'!
!IRInlinedIfTrueIfFalse commentStamp!
I represent an inlined `#ifTrue:ifFalse:` message send instruction.!

!IRInlinedIfTrueIfFalse methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	aVisitor visitIRInlinedIfTrueIfFalse: self
! !

IRBlockSequence subclass: #IRInlinedSequence
	slots: {}
	package: 'Compiler-Inlining'!
!IRInlinedSequence commentStamp!
I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`).!

!IRInlinedSequence methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedSequence methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	aVisitor visitIRInlinedSequence: self
! !

IRVisitor subclass: #IRInliner
	slots: {}
	package: 'Compiler-Inlining'!
!IRInliner commentStamp!
I visit an IR tree, inlining message sends and block closures.

Message selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`!

!IRInliner methodsFor: 'factory'!

assignmentInliner
	^ IRAssignmentInliner new
		translator: self;
		yourself
!

nonLocalReturnInliner
	^ IRNonLocalReturnInliner new
		translator: self;
		yourself
!

returnInliner
	^ IRReturnInliner new
		translator: self;
		yourself
!

sendInliner
	^ IRSendInliner new
		translator: self;
		yourself
! !

!IRInliner methodsFor: 'testing'!

shouldInlineAssignment: anIRAssignment
	^ anIRAssignment isInlined not and: [
		anIRAssignment right isSend and: [
			self shouldInlineSend: anIRAssignment right ]]
!

shouldInlineReturn: anIRReturn
	^ anIRReturn isInlined not and: [
		anIRReturn expression isSend and: [
			self shouldInlineSend: anIRReturn expression ]]
!

shouldInlineSend: anIRSend
	^ anIRSend isInlined not and: [
		IRSendInliner shouldInline: anIRSend ]
! !

!IRInliner methodsFor: 'visiting'!

flattenedReturn: anIRNonLocalReturn
	| localReturn |
	localReturn := IRReturn new
		scope: anIRNonLocalReturn scope;
		yourself.
	anIRNonLocalReturn dagChildren do: [ :each | localReturn add: each ].
	^ localReturn
!

visitIRAssignment: anIRAssignment
	^ (self shouldInlineAssignment: anIRAssignment)
		ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]
		ifFalse: [ super visitIRAssignment: anIRAssignment ]
!

visitIRNonLocalReturn: anIRNonLocalReturn
	anIRNonLocalReturn scope canFlattenNonLocalReturns ifTrue: [
		| localReturn |
		anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.
		localReturn := self flattenedReturn: anIRNonLocalReturn.
		anIRNonLocalReturn replaceWith: localReturn.
		^ self visitIRReturn: localReturn ].
	^ (self shouldInlineReturn: anIRNonLocalReturn)
		ifTrue: [ self nonLocalReturnInliner inlineReturn: anIRNonLocalReturn ]
		ifFalse: [ super visitIRNonLocalReturn: anIRNonLocalReturn ]
!

visitIRReturn: anIRReturn
	^ (self shouldInlineReturn: anIRReturn)
		ifTrue: [ self returnInliner inlineReturn: anIRReturn ]
		ifFalse: [ super visitIRReturn: anIRReturn ]
!

visitIRSend: anIRSend
	^ (self shouldInlineSend: anIRSend)
		ifTrue: [ self sendInliner inlineSend: anIRSend ]
		ifFalse: [ super visitIRSend: anIRSend ]
! !

IRJSTranslator subclass: #IRInliningJSTranslator
	slots: {}
	package: 'Compiler-Inlining'!
!IRInliningJSTranslator commentStamp!
I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance).!

!IRInliningJSTranslator methodsFor: 'visiting'!

visitIRInlinedClosure: anIRInlinedClosure
	self stream nextPutVars: (anIRInlinedClosure tempDeclarations collect: [ :each |
		each name asVariableName ]).
	self visitAllChildren: anIRInlinedClosure
!

visitIRInlinedIfFalse: anIRInlinedIfFalse
	self stream nextPutIf: [
		self stream nextPutAll: '!!$core.assert('.
		self visit: anIRInlinedIfFalse dagChildren first.
		self stream nextPutAll: ')' ]
		then: [ self visit: anIRInlinedIfFalse dagChildren last ]
!

visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil
	self stream
		nextPutIf: [
			| recvVarName |
			recvVarName := anIRInlinedIfNilIfNotNil receiverInternalVariableName.
			self stream nextPutAll: '(', recvVarName, ' = '.
			self visit: anIRInlinedIfNilIfNotNil dagChildren first.
			self stream nextPutAll: ') == null || ', recvVarName, '.a$nil' ]
		then: [ self visit: anIRInlinedIfNilIfNotNil dagChildren second ]
		else: [ self visit: anIRInlinedIfNilIfNotNil dagChildren third ]
!

visitIRInlinedIfTrue: anIRInlinedIfTrue
	self stream nextPutIf: [
		self stream nextPutAll: '$core.assert('.
		self visit: anIRInlinedIfTrue dagChildren first.
		self stream nextPutAll: ')' ]
		then: [ self visit: anIRInlinedIfTrue dagChildren last ]
!

visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse
	self stream
		nextPutIf: [
			self stream nextPutAll: '$core.assert('.
			self visit: anIRInlinedIfTrueIfFalse dagChildren first.
			self stream nextPutAll: ')' ]
		then: [ self visit: anIRInlinedIfTrueIfFalse dagChildren second ]
		else: [ self visit: anIRInlinedIfTrueIfFalse dagChildren third ]
! !

Object subclass: #IRSendInliner
	slots: {#send. #translator}
	package: 'Compiler-Inlining'!
!IRSendInliner commentStamp!
I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods.!

!IRSendInliner methodsFor: 'accessing'!

send
	^ send
!

send: anIRSend
	send := anIRSend
!

translator
	^ translator
!

translator: anASTTranslator
	translator := anASTTranslator
! !

!IRSendInliner methodsFor: 'error handling'!

inliningError: aString
	InliningError signal: aString
! !

!IRSendInliner methodsFor: 'factory'!

inlinedClosure
	^ IRInlinedClosure new
!

inlinedSequence
	^ IRInlinedSequence new
! !

!IRSendInliner methodsFor: 'inlining'!

ifFalse: anIRInstruction
	^ self inlinedSend: IRInlinedIfFalse new withBlock: anIRInstruction
!

ifFalse: anIRInstruction ifTrue: anotherIRInstruction
	^ self perform: #ifTrue:ifFalse: withArguments: { anotherIRInstruction. anIRInstruction }
!

ifNil: anIRInstruction
	^ self
		inlinedSend: IRInlinedIfNilIfNotNil new
		withBlock: anIRInstruction
		withBlock: (IRClosure new
			scope: anIRInstruction scope copy;
			add: (IRBlockSequence new
				add: self send receiver;
				yourself);
			yourself)
!

ifNil: anIRInstruction ifNotNil: anotherIRInstruction
	^ self inlinedSend: IRInlinedIfNilIfNotNil new withBlock: anIRInstruction withBlock: anotherIRInstruction
!

ifNotNil: anIRInstruction
	^ self
		inlinedSend: IRInlinedIfNilIfNotNil new
		withBlock: (IRClosure new
			scope: anIRInstruction scope copy;
			add: (IRBlockSequence new
				add: self send receiver;
				yourself);
			yourself)
		withBlock: anIRInstruction
!

ifNotNil: anIRInstruction ifNil: anotherIRInstruction
	^ self inlinedSend: IRInlinedIfNilIfNotNil new withBlock: anotherIRInstruction withBlock: anIRInstruction
!

ifTrue: anIRInstruction
	^ self inlinedSend: IRInlinedIfTrue new withBlock: anIRInstruction
!

ifTrue: anIRInstruction ifFalse: anotherIRInstruction
	^ self inlinedSend: IRInlinedIfTrueIfFalse new withBlock: anIRInstruction withBlock: anotherIRInstruction
!

inlineClosure: anIRClosure
	| inlinedClosure sequence statements |

	inlinedClosure := self inlinedClosure.
	inlinedClosure 
		scope: anIRClosure scope;
		parent: anIRClosure parent.

	"Add the possible temp declarations"
	anIRClosure tempDeclarations do: [ :each |
			inlinedClosure add: each ].

	"Add a block sequence"
	sequence := self inlinedSequence.

	"Map the closure arguments to the receiver of the message send"
	anIRClosure arguments do: [ :each |
		inlinedClosure add: (IRTempDeclaration new name: each; yourself).
		sequence add: (IRAssignment new
			add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: each; yourself));
			add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: '$receiver'; yourself));
			yourself) ].
			
	"To ensure the correct order of the closure instructions: first the temps then the sequence"
	inlinedClosure add: sequence.

	"Get all the statements"
	statements := anIRClosure sequence dagChildren.
	
	statements ifNotEmpty: [
		statements allButLast do: [ :each | sequence add: each ].

		"Inlined closures change local returns into result value itself"
		sequence add: statements last asInlinedBlockResult ].

	^ inlinedClosure
!

inlineSend: anIRSend
	self send: anIRSend.
	^ self
		perform: self send selector
		withArguments: self send arguments
!

inlinedClosure: closure wrapFinalValueIn: aBlock
	| sequence statements final |

	sequence := closure sequence.
	statements := sequence dagChildren.
	
	sequence dagChildren ifEmpty: [ sequence add: (IRVariable new
		variable: (closure scope pseudoVars at: 'nil');
		yourself) ].
	final := statements last.
	final yieldsValue ifTrue: [ sequence replace: final with: (aBlock value: final) ].

	^ closure
! !

!IRSendInliner methodsFor: 'private'!

inlineSend: anIRSend andReplace: anIRInstruction
	anIRInstruction replaceWith: anIRSend.
	^ self inlineSend: anIRSend
!

inlinedSend: inlinedSend withBlock: anIRInstruction
	| inlinedClosure |

	anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].
	anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].

	inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).

	inlinedSend
		add: self send receiver;
		add: inlinedClosure.

	self send replaceWith: inlinedSend.
	inlinedSend method internalVariables 
		addAll: inlinedSend internalVariables.

	^ inlinedSend
!

inlinedSend: inlinedSend withBlock: anIRInstruction withBlock: anotherIRInstruction
	| inlinedClosure1 inlinedClosure2 |

	anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].
	anotherIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].

	inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).
	inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).

	inlinedSend
		add: self send receiver;
		add: inlinedClosure1;
		add: inlinedClosure2.

	self send replaceWith: inlinedSend.
	inlinedSend method internalVariables 
		addAll: inlinedSend internalVariables.
		
	^ inlinedSend
! !

!IRSendInliner class methodsFor: 'accessing'!

inlinedSelectors
	^ #('ifTrue:' 'ifFalse:' 'ifTrue:ifFalse:' 'ifFalse:ifTrue:' 'ifNil:' 'ifNotNil:' 'ifNil:ifNotNil:' 'ifNotNil:ifNil:')
!

shouldInline: anIRSend
	(self inlinedSelectors includes: anIRSend selector) ifFalse: [ ^ false ].
	anIRSend receiver isSuper ifTrue: [ ^ false ].
	^ anIRSend arguments allSatisfy: [ :each | each isClosure ]
! !

IRSendInliner subclass: #IRAssignmentInliner
	slots: {#target}
	package: 'Compiler-Inlining'!
!IRAssignmentInliner commentStamp!
I inline message sends together with assignments by moving them around into the inline closure instructions.

##Example

	foo
		| a |
		a := true ifTrue: [ 1 ]

Will produce:

	if($core.assert(true) {
		a = 1;
	};!

!IRAssignmentInliner methodsFor: 'accessing'!

target
	^ target
!

target: anObject
	target := anObject
! !

!IRAssignmentInliner methodsFor: 'inlining'!

inlineAssignment: anIRAssignment
	self target: anIRAssignment left.
	^ self inlineSend: anIRAssignment right andReplace: anIRAssignment
!

inlineClosure: anIRClosure
	^ self
		inlinedClosure: (super inlineClosure: anIRClosure)
		wrapFinalValueIn: [ :final |
			IRAssignment new
				add: self target;
				add: final copy;
				yourself ]
! !

IRSendInliner subclass: #IRNonLocalReturnInliner
	slots: {}
	package: 'Compiler-Inlining'!
!IRNonLocalReturnInliner commentStamp!
I inline message sends with inlined closure together with a return instruction.!

!IRNonLocalReturnInliner methodsFor: 'inlining'!

inlineClosure: anIRClosure
	^ self
		inlinedClosure: (super inlineClosure: anIRClosure)
		wrapFinalValueIn: [ :final |
			IRNonLocalReturn new
				add: final copy;
				yourself ]
!

inlineReturn: anIRReturn
	^ self inlineSend: anIRReturn expression andReplace: anIRReturn
! !

IRSendInliner subclass: #IRReturnInliner
	slots: {}
	package: 'Compiler-Inlining'!
!IRReturnInliner commentStamp!
I inline message sends with inlined closure together with a return instruction.!

!IRReturnInliner methodsFor: 'inlining'!

inlineClosure: anIRClosure
	^ self
		inlinedClosure: (super inlineClosure: anIRClosure)
		wrapFinalValueIn: [ :final |
			IRReturn new
				add: final copy;
				yourself ]
!

inlineReturn: anIRReturn
	^ self inlineSend: anIRReturn expression andReplace: anIRReturn
! !

CodeGenerator subclass: #InliningCodeGenerator
	slots: {}
	package: 'Compiler-Inlining'!
!InliningCodeGenerator commentStamp!
I am a specialized code generator that uses inlining to produce more optimized JavaScript output!

!InliningCodeGenerator methodsFor: 'compiling'!

inliner
	^ IRInliner new
!

irTranslatorClass
	^ IRInliningJSTranslator
!

preInliner
	^ ASTPreInliner new
!

transformersDictionary
	^ transformersDictionary ifNil: [ transformersDictionary := super transformersDictionary
		at: '3000-inlinerTagging' put: self preInliner;
		at: '6000-inliner' put: self inliner;
		at: '8000-irToJs' put: self irTranslator;
		yourself ]
! !

SemanticError subclass: #InliningError
	slots: {}
	package: 'Compiler-Inlining'!
!InliningError commentStamp!
Instances of InliningError are signaled when using an `InliningCodeGenerator`in a `Compiler`.!

!IRBlockReturn methodsFor: '*Compiler-Inlining'!

asInlinedBlockResult
	^ self expression
! !

!IRInstruction methodsFor: '*Compiler-Inlining'!

asInlinedBlockResult
	^ self
! !

