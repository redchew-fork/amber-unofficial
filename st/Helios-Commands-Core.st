Smalltalk current createPackage: 'Helios-Commands-Core'!
Object subclass: #HLCommand
	instanceVariableNames: 'input'
	package: 'Helios-Commands-Core'!

!HLCommand methodsFor: 'accessing'!

documentation
	^ self class documentation
!

input
	^ input
!

input: aString
	^ input := aString
!

inputCompletion
	^ #()
!

inputLabel
	^ self label
!

key
	^ self class key
!

label
	^ self class label
!

menuLabel
	^ self class menuLabel
! !

!HLCommand methodsFor: 'converting'!

asActionBinding
	^ (HLBindingAction on: self key labelled: self label)
    	command: self;
		yourself
!

asBinding
	^ self isBindingGroup
		ifTrue: [ self asGroupBinding ]
		ifFalse: [ self asActionBinding ]
!

asGroupBinding
	^ HLBindingGroup 
		on: self key 
		labelled: self label
! !

!HLCommand methodsFor: 'error handling'!

commandError: aString
	self error: aString
! !

!HLCommand methodsFor: 'executing'!

execute
! !

!HLCommand methodsFor: 'registration'!

registerOn: aBinding
	^ aBinding add: self asBinding
! !

!HLCommand methodsFor: 'testing'!

isActive
	^ true
!

isBindingGroup
	^ (self class methodDictionary includesKey: 'execute') not
!

isInputRequired
	^ false
! !

!HLCommand class methodsFor: 'accessing'!

documentation
	^ ''
!

key
	^ nil
!

label
	^ ''
!

menuLabel
	^ self label
!

registerConcreteClassesOn: aBinding
	| newBinding |
	
	self isConcrete
		ifTrue: [ newBinding := self registerOn: aBinding ]
		ifFalse: [ newBinding := aBinding ].
		
	self subclasses do: [ :each | each registerConcreteClassesOn: newBinding ]
! !

!HLCommand class methodsFor: 'registration'!

concreteClasses
	| classes |
	
	classes := OrderedCollection new.
	
	self isConcrete
		ifTrue: [ classes add: self ].
		
	self subclasses do: [ :each | 
		classes addAll: each concreteClasses ].
		
	^ classes
!

registerOn: aBinding
	^ self new registerOn: aBinding
! !

!HLCommand class methodsFor: 'testing'!

isConcrete
	^ self key notNil
!

isValidFor: aModel
	^ false
! !

HLCommand subclass: #HLCloseTabCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Core'!

!HLCloseTabCommand methodsFor: 'executing'!

execute
	HLManager current removeActiveTab
! !

!HLCloseTabCommand class methodsFor: 'accessing'!

key
	^ 87
!

label
	^ 'Close tab'
! !

HLCommand subclass: #HLModelCommand
	instanceVariableNames: 'model'
	package: 'Helios-Commands-Core'!

!HLModelCommand methodsFor: 'accessing'!

model
	^ model
!

model: aModel
	model := aModel
! !

!HLModelCommand class methodsFor: 'instance creation'!

for: aModel
	^ self new
! !

!HLModelCommand class methodsFor: 'registration'!

registerConcreteClassesOn: aBinding for: aModel
	| newBinding |
	
	self isConcrete
		ifTrue: [ newBinding := self registerOn: aBinding for: aModel ]
		ifFalse: [ newBinding := aBinding ].
		
	self subclasses do: [ :each |
		each registerConcreteClassesOn: newBinding for: aModel ]
!

registerOn: aBinding for: aModel
	^ (self for: aModel) registerOn: aBinding
! !

HLCommand subclass: #HLOpenCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Core'!

!HLOpenCommand class methodsFor: 'accessing'!

key
	^ 79
!

label
	^ 'Open'
! !

HLOpenCommand subclass: #HLOpenBrowserCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Core'!

!HLOpenBrowserCommand methodsFor: 'executing'!

execute
	^ HLBrowser openAsTab
! !

!HLOpenBrowserCommand class methodsFor: 'accessing'!

key
	^ 66
!

label
	^ 'Browser'
! !

HLOpenCommand subclass: #HLOpenTranscriptCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Core'!

!HLOpenTranscriptCommand methodsFor: 'executing'!

execute
	^ HLTranscript openAsTab
! !

!HLOpenTranscriptCommand class methodsFor: 'accessing'!

key
	^ 84
!

label
	^ 'Transcript'
! !

HLOpenCommand subclass: #HLOpenWorkspaceCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Core'!

!HLOpenWorkspaceCommand methodsFor: 'executing'!

execute
	^ HLCodeWidget openAsTab
! !

!HLOpenWorkspaceCommand class methodsFor: 'accessing'!

key
	^ 87
!

label
	^ 'Workspace'
! !

HLCommand subclass: #HLViewCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Core'!

!HLViewCommand class methodsFor: 'accessing'!

label
	^ 'View'
! !
