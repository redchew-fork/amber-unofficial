Smalltalk createPackage: 'Kernel-Announcements'!
Object subclass: #AnnouncementSubscription
	slots: {#valuable. #announcementClass}
	package: 'Kernel-Announcements'!
!AnnouncementSubscription commentStamp!
I am a single entry in a subscription registry of an `Announcer`.
Several subscriptions by the same object is possible.!

!AnnouncementSubscription methodsFor: 'accessing'!

announcementClass
	^ announcementClass
!

announcementClass: aClass
	announcementClass := Smalltalk globals at: aClass name
!

receiver
	^ self valuable receiver
!

valuable
	^ valuable
!

valuable: aValuable
	valuable := aValuable
! !

!AnnouncementSubscription methodsFor: 'announcing'!

deliver: anAnnouncement
	(self handlesAnnouncement: anAnnouncement)
		ifTrue: [ self valuable value: anAnnouncement ]
!

handlesAnnouncement: anAnnouncement
	"anAnnouncement might be announced from within another Amber environment"
	
	^ (Smalltalk globals at: anAnnouncement class name) includesBehavior: self announcementClass
! !

Object subclass: #AnnouncementValuable
	slots: {#valuable. #receiver}
	package: 'Kernel-Announcements'!
!AnnouncementValuable commentStamp!
I wrap `valuable` objects (typically instances of `BlockClosure`) with a `receiver` to be able to unregister subscriptions based on a `receiver`.!

!AnnouncementValuable methodsFor: 'accessing'!

receiver
	^ receiver
!

receiver: anObject
	receiver := anObject
!

valuable
	^ valuable
!

valuable: anObject
	valuable := anObject
! !

!AnnouncementValuable methodsFor: 'evaluating'!

value
	^ self valuable value
!

value: anObject
	^ self valuable value: anObject
! !

Object subclass: #Announcer
	slots: {#registry. #subscriptions}
	package: 'Kernel-Announcements'!
!Announcer commentStamp!
I hold annoncement subscriptions (instances of `AnnouncementSubscription`) in a private registry.
I announce (trigger) announces, which are then dispatched to all subscriptions.

The code is based on the announcements as [described by Vassili Bykov](http://www.cincomsmalltalk.com/userblogs/vbykov/blogView?searchCategory=Announcements%20Framework).

## API

Use `#announce:` to trigger an announcement.

Use `#on:do:` or `#on:send:to:` to register subscriptions.

When using `#on:send:to:`, unregistration can be done with `#unregister:`.

## Usage example:

    SystemAnnouncer current
        on: ClassAdded
        do: [ :ann | window alert: ann theClass name, ' added' ].!

!Announcer methodsFor: 'announcing'!

announce: anAnnouncement
	subscriptions do: [ :each |
		each deliver: anAnnouncement ]
! !

!Announcer methodsFor: 'initialization'!

initialize
	super initialize.
	subscriptions := OrderedCollection new
! !

!Announcer methodsFor: 'subscribing'!

on: aClass do: aBlock
	self on: aClass do: aBlock for: nil
!

on: aClass do: aBlock for: aReceiver
	subscriptions add: (AnnouncementSubscription new
		valuable: (AnnouncementValuable new
			valuable: aBlock;
			receiver: aReceiver;
			yourself);
		announcementClass: aClass;
		yourself)
!

on: aClass doOnce: aBlock
	| subscription |
	
	subscription := AnnouncementSubscription new
		announcementClass: aClass;
		yourself.
	subscription valuable: [ :ann |
		subscriptions remove: subscription.
		aBlock value: ann ].

	subscriptions add: subscription
!

on: aClass send: aSelector to: anObject
	subscriptions add: (AnnouncementSubscription new
		valuable: (MessageSend new
			receiver: anObject;
			selector: aSelector;
			yourself);
		announcementClass: aClass;
		yourself)
!

unsubscribe: anObject
	subscriptions := subscriptions reject: [ :each |
		each receiver = anObject ]
! !

Announcer subclass: #SystemAnnouncer
	slots: {}
	package: 'Kernel-Announcements'!
!SystemAnnouncer commentStamp!
My unique instance is the global announcer handling all Amber system-related announces.

## API

Access to the unique instance is done via `#current`!

SystemAnnouncer class slots: {#current}!

!SystemAnnouncer class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := super new ]
! !

!SystemAnnouncer class methodsFor: 'instance creation'!

new
	self shouldNotImplement
! !

Object subclass: #SystemAnnouncement
	slots: {}
	package: 'Kernel-Announcements'!
!SystemAnnouncement commentStamp!
I am the superclass of all system announcements!

!SystemAnnouncement class methodsFor: 'accessing'!

classTag
	"Returns a tag or general category for this class.
	Typically used to help tools do some reflection.
	Helios, for example, uses this to decide what icon the class should display."
	
	^ 'announcement'
! !

SystemAnnouncement subclass: #ClassAnnouncement
	slots: {#theClass}
	package: 'Kernel-Announcements'!
!ClassAnnouncement commentStamp!
I am the abstract superclass of class-related announcements.!

!ClassAnnouncement methodsFor: 'accessing'!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

ClassAnnouncement subclass: #ClassAdded
	slots: {}
	package: 'Kernel-Announcements'!
!ClassAdded commentStamp!
I am emitted when a class is added to the system.
See ClassBuilder >> #addSubclassOf:... methods!

ClassAnnouncement subclass: #ClassCommentChanged
	slots: {}
	package: 'Kernel-Announcements'!
!ClassCommentChanged commentStamp!
I am emitted when the comment of a class changes. (Behavior >> #comment)!

ClassAnnouncement subclass: #ClassDefinitionChanged
	slots: {}
	package: 'Kernel-Announcements'!
!ClassDefinitionChanged commentStamp!
I am emitted when the definition of a class changes.
See ClassBuilder >> #class:instanceVariableNames:!

ClassAnnouncement subclass: #ClassMigrated
	slots: {#oldClass}
	package: 'Kernel-Announcements'!
!ClassMigrated commentStamp!
I am emitted when a class is migrated.!

!ClassMigrated methodsFor: 'accessing'!

oldClass
	^ oldClass
!

oldClass: aClass
	oldClass := aClass
! !

ClassAnnouncement subclass: #ClassMoved
	slots: {#oldPackage}
	package: 'Kernel-Announcements'!
!ClassMoved commentStamp!
I am emitted when a class is moved from one package to another.!

!ClassMoved methodsFor: 'accessing'!

oldPackage
	^ oldPackage
!

oldPackage: aPackage
	oldPackage := aPackage
! !

ClassAnnouncement subclass: #ClassRemoved
	slots: {}
	package: 'Kernel-Announcements'!
!ClassRemoved commentStamp!
I am emitted when a class is removed.
See Smalltalk >> #removeClass:!

ClassAnnouncement subclass: #ClassRenamed
	slots: {}
	package: 'Kernel-Announcements'!
!ClassRenamed commentStamp!
I am emitted when a class is renamed.
See ClassBuilder >> #renameClass:to:!

SystemAnnouncement subclass: #MethodAnnouncement
	slots: {#method}
	package: 'Kernel-Announcements'!
!MethodAnnouncement commentStamp!
I am the abstract superclass of method-related announcements.!

!MethodAnnouncement methodsFor: 'accessing'!

method
	^ method
!

method: aCompiledMethod
	method := aCompiledMethod
! !

MethodAnnouncement subclass: #MethodAdded
	slots: {}
	package: 'Kernel-Announcements'!
!MethodAdded commentStamp!
I am emitted when a `CompiledMethod` is added to a class.!

MethodAnnouncement subclass: #MethodModified
	slots: {#oldMethod}
	package: 'Kernel-Announcements'!
!MethodModified commentStamp!
I am emitted when a `CompiledMethod` is modified (a new method is installed). I hold a reference to the old method being replaced.!

!MethodModified methodsFor: 'accessing'!

oldMethod
	^ oldMethod
!

oldMethod: aMethod
	oldMethod := aMethod
! !

MethodAnnouncement subclass: #MethodMoved
	slots: {#oldProtocol}
	package: 'Kernel-Announcements'!
!MethodMoved commentStamp!
I am emitted when a `CompiledMethod` is moved to another protocol. I hold a refernce to the old protocol of the method.!

!MethodMoved methodsFor: 'accessing'!

oldProtocol
	^ oldProtocol
!

oldProtocol: aString
	oldProtocol := aString
! !

MethodAnnouncement subclass: #MethodRemoved
	slots: {}
	package: 'Kernel-Announcements'!
!MethodRemoved commentStamp!
I am emitted when a `CompiledMethod` is removed from a class.!

SystemAnnouncement subclass: #PackageAnnouncement
	slots: {#package}
	package: 'Kernel-Announcements'!
!PackageAnnouncement commentStamp!
I am the abstract superclass of package-related announcements.!

!PackageAnnouncement methodsFor: 'accessing'!

package
	^ package
!

package: aPackage
	package := aPackage
! !

PackageAnnouncement subclass: #PackageAdded
	slots: {}
	package: 'Kernel-Announcements'!
!PackageAdded commentStamp!
I am emitted when a `Package` is added to the system.!

PackageAnnouncement subclass: #PackageClean
	slots: {}
	package: 'Kernel-Announcements'!
!PackageClean commentStamp!
I am emitted when a package is committed and becomes clean.!

PackageAnnouncement subclass: #PackageDirty
	slots: {}
	package: 'Kernel-Announcements'!
!PackageDirty commentStamp!
I am emitted when a package becomes dirty.!

PackageAnnouncement subclass: #PackageRemoved
	slots: {}
	package: 'Kernel-Announcements'!
!PackageRemoved commentStamp!
I am emitted when a `Package` is removed from the system.!

SystemAnnouncement subclass: #ProtocolAnnouncement
	slots: {#theClass. #protocol}
	package: 'Kernel-Announcements'!
!ProtocolAnnouncement commentStamp!
I am the abstract superclass of protocol-related announcements.!

!ProtocolAnnouncement methodsFor: 'accessing'!

package
	
	^ self theClass ifNotNil: [ :class | class packageOfProtocol: self protocol ]
!

protocol
	^ protocol
!

protocol: aString
	protocol := aString
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

ProtocolAnnouncement subclass: #ProtocolAdded
	slots: {}
	package: 'Kernel-Announcements'!
!ProtocolAdded commentStamp!
I am emitted when a protocol is added to a class.!

ProtocolAnnouncement subclass: #ProtocolRemoved
	slots: {}
	package: 'Kernel-Announcements'!
!ProtocolRemoved commentStamp!
I am emitted when a protocol is removed from a class.!

