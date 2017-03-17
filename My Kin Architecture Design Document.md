# My Kin: Architecture Design

## Introduction
The purpose of this document is to outline the major architectural components that are to comprise the My Kin application along with their purpose and public API

## Table of Contents
* 1 Application Components
* 2 Mobile Application
	* 2.1 Service Interfaces
		* 2.1.1 Record Interfaces
        * 2.1.2 Authentication Service
        * 2.1.3 User Service
        * 2.1.4 Kin Service
        * 2.1.5 List Service
        * 2.1.6 Event Service
	* 2.2 Components
		* 2.2.1 Main
		* 2.2.2 Authentication
			* 2.2.1.1 Login
			* 2.2.1.2 Register
			* 2.2.1.3 CreateProfile
		* 2.2.3 Kin
			* 2.2.3.1 AllKin
			* 2.2.3.2 CreateKin
			* 2.2.3.3 SelectKin
			* 2.2.3.4 SelectRelationship
			* 2.2.3.5 KinDetail
		* 2.2.4 ShoppingLists
			* 2.2.4.1 AllShoppingLists
			* 2.2.4.2 CreateShoppingList
			* 2.2.4.3 CreateListItem
		* 2.2.5 Events
			* 2.2.5.1 AllEvents
			* 2.2.5.2 CreateEvent
			* 2.2.5.3 EventDetail
			* 2.2.5.4 CreateComment
		* 2.2.6 Notifications
		* 2.2.7 Settings
		* 2.2.8 Shared
			* 2.2.8.1 ListRow
			* 2.2.8.2 ListFilterHeader
			* 2.2.8.3 NavBar
* 3 Backing Service
	* 3.1 Data Model

## 1. Application Components
* Application
	* The iOS and Android mobile application to be accessed by end users
* Backing Service
	* Firebase PaaS providing realtime HTTP/Websocket access to application data

## 2. Mobile Application
### 2.1 Service Interfaces: Local data management classes
#### 2.1.1 Record Interfaces
#### 2.1.1.1 User

```js
interface User {
    id?: Number
    kinId?: Number
    auth: String
    email: String
    firstName: String
    lastName: String
    birthDate: Date
    portraitUrl: String
    details: { String: String }
    settings: { String: String }
    list?: List
}
```
#### 2.1.1.2 Kin

```js
interface Kin {
    id?: Number
    userId?: Number
    firstName: String
    lastName: String
    birthDate: Date
    portraitUrl: String
    details: { String: String }
    relationship: String
}
```
#### 2.1.1.3 List

```js
interface List {
    id?: Number
    owner: Kin
    for: Kin
    name: String
    items: [ListItem]
}
```
#### 2.1.1.4 ListItem

```js
interface ListItem {
    id?: Number
    name: String
    purchaseUrl: String
    claimedBy?: Kin
}
```
#### 2.1.1.5 Event

```js
interface Event {
    id?: Number
    host: User
    for: User
    location: String
    name: String
    details: String
    startTime: Date
    endTime: Date
    list: List
    guests: [Kin]
    comments: [Comment]
}
```
#### 2.1.1.6

```js
interface Comment {
    id?: Number
    author: User
    body: String
    created: Date
}
```
#### 2.1.2 Authentication Service

```js
interface AuthService {
    authenticate(): Promise<_>
    register(user: User): Promise<User>
    getAuthToken(): Object
}
```
#### 2.1.3 User Service

```js
interface UserService {
    register(function([User]): ()): ()
    getContacts(userId: Number, method: 'contacts' | 'facebook'): Promise<[Kin]>
    updateSetting(key: String, value: String): Promise<_>
}
```
#### 2.1.4 Kin Service

```js
interface KinService {
    register(function([Kin]): ()): ()
    createKin(newKin: Kin): Promise<_>
    setRelationship(kin: Kin, relationship: String): Promise<_>
    updateKin(kin: Kin): Promise<_>
    removeKin(id: Number): Promise<_>
}
```
#### 2.1.5 List Service

```js
interface ListService {
    register(function([List]): ()): ()
    createList(newList: List): Promise<_>
    createItem(newItem: ListItem): Promise<_>
    removeItemFromList(itemId: Number, listId: Number): Promise<_>
    claimItem(itemId: Number, userId: Number): Promise<_>
    unClaimItem(itemId: Number): Promise<_>
    purchaseItem(item: Item, userId: Number): Promise<_>
    removeList(id: Number): Promise<_>
}
```

#### 2.1.6 Event Service

```js
interface EventService {
    register(function([Event]): ()): ()
    createEvent(newEvent: Event): Promise<_>
    rsvp(eventId: Number, userId: Number): Promise<_>
    unRsvp(eventId: Number, userId: Number): Promise<_>
    updateEvent(event: Event): Promise<_>
    removeEvent(id: Number): Promise<_>
    createComment(comment: Comment, eventId: Number): Promise<_>
    editComment(comment: Comment, eventId: Number): Promise<_>
    removeComment(commentId: numberm eventId: number): Promise<_>
}
```

### 2.2 Components: Navigational and View components of the UI
#### 2.2.1 Main
* Main entry point for the application. Handles navigation between major components.

#### 2.2.2 Authentication
* Root component for logging in or registering a new account. Handles navigation through child components.

#### 2.2.1.1 Login
* Application login screen, allowing the user to authenticate with a username/password or with Facebook.

#### 2.2.1.2 Register
* Registration page. Allows a user to register a new account with a username/password or with Facebook.

#### 2.2.1.3 CreateProfile
* Profile creation page. Once a user has registered, allows them to enter their basic profile information and photo.
* Props: `email?: String`

#### 2.2.3 Kin
* Root component for Kin related use cases. Handles navigation between child components.

#### 2.2.3.1 AllKin
* Component to display list of user's current kin. Allows users to search and filter kin and select a kin for further details.
* Props:
	* `kin: [Kin]`
	* `onDetailPressed: function(kin: Kin): ()`

#### 2.2.3.2 CreateKin
* Component to handle user input when creating a kin from scratch. Allows users to upload a photo and input relevant text information.
* Props:
    * `onSavePressed: function(kin: Kin): ()`

#### 2.2.3.3 SelectKin
* View allowing users to select kin from their facebook or phone contents
* Props:
    * `contacts: [Kin]`
    * `onSelectKin: function(selectedKin: Kin): ()`

#### 2.2.3.4 SelectRelationship
* View allowing user to select their relationship with the selected/created kin.
* Props:
    * `selectedKin: Kin`
    * `onSelectRelationship: function(kin: Kin, relationship: string): ()`

#### 2.2.3.5 KinDetail
* View showing the user details and events for a selected kin. Shared component.
* Props: `kin: Kin`

### 2.2.4 ShoppingLists
* Root component for shopping list use cases. Handles navigation between child components.

#### 2.2.4.1 AllShoppingLists
* View showing the user their personal shopping list and all kin shopping lists they can view.
* Props:
    * `lists: [List]`
    * `onDetailPressed: function(list: List): ()`

#### 2.2.4.2 CreateShoppingList
* View accepting user input to create a new shopping list
* Props:
    * `kinId: number`
    * `forKin?: Kin`
    * `onChooseKinPressed: function(): ()`
    * `onSavePressed: function(list: List): ()`

#### 2.2.4.3 CreateListItem
* View accepting user input to create a new item for an existing shopping list
* Props:
    * `listId?: number`
    * `userId: number`
    * `onSavePressed: function(item: ListItem): ()`

#### 2.2.4.4 ListDetails
* View showing details and items of a single shopping list
* Props: `list: List`

### 2.2.5 Events
* Root component for event use cases. Handles navigation between child components

#### 2.2.5.1 AllEvents
* View showing the user all events created or referencing one of their kin and allowing access to creating and viewing events
* Props:
    * `events: [Event]`
    * `onDetailPressed: function(event: Event): ()`

#### 2.2.5.2 CreateEvent
* View accepting user input to create a new event
* Props:
    * `userId: number`
    * `onSavePressed: function(event: Event): ()`

#### 2.2.5.3 EventDetail
* View showing more details about an existing event and allowing access to comments
* Props: `event: Event`

#### 2.2.5.4 CreateComment
* View allowing user to input a comment on an event
* Props:
    * `eventId: number`
    * `onSavePressed: function(comment: Comment, eventId: number): ()`

### 2.2.6 Notifications
* View showing notifications sent to the user

### 2.2.7 Settings
* View allowing user to edit their settings

### 2.2.8 Shared

#### 2.2.8.1 ListRow
* A shared list row component with a heading, sub-heading, details, and a portrait/icon
* Props:
	* `heading: string`
	* `subHeading: string`
	* `details: string`
	* `imageUrl?: string`
	* `date?: { month: string, date: number }`
	* `onPress: function`

#### 2.2.8.2 ListFilterHeader
* A shared filtering header for lists. Renders buttons based on props that fire a callback when pressed
* Props:
	* `items: { text: string, selected: bool }`
	* `onPress: function`

#### 2.2.8.3 NavBar
* A shared navigation bar component that can change colors and buttons based on the depth of the navigation stack

## 3. Backing Service
### Firebase
PaaS offering a managed K/V Database, traditional and OAuth authentication, and messaging

### 3.1 Data Model:
```json
{
    "Users": {
        "id": {
            "id": "string",
            "settings": {
                "key": "string"
            }
        }
    },
    "Kin": {
        "id": {
            "userId": "strgin",
            "fullName": "string",
            // OR
            "firstName": "string",
            "lastName": "string",
            "birthDate": "string",
            "portraitUrl": "string",
            "details": {
                "type": "string" // values keyed by type, i.e. "Food": "Pizza"
            },
            "relationships": {
                "kinId": "string"
            },
            "shoppingListItems": [
                "id"
            ]
        }
    },
    "Lists": {
        "id": {
            "name": "string",
            "ownerId": "string", // Who owns this list to make changes to it
            "forId": "string", // Who is this list for (could control visibility?)
            "items": {
                "id": {
                    "claimedBy": "string"
                }
            }
        }
    },
    "ListItems": {
        "id": {
            "name": "string",
            "purchaseUrl": "string",
        }
    },
    "Events": {
        "id": {
            "id": "string",
            "hostId": "string",
            "forId": "string",
            "listId": "string",
            "name": "string",
            "guestIds": [
                "string"
            ],
            "startTime": "string",
            "endTime": "string",
            "location": "string",
            "details": "string",
            "comments": {
                "id": {
                    "id": "string",
                    "userId": "string",
                    "body": "string",
                    "created": "string"
                }
            }
        }
    },
    "Notifications": {
        "id": {
            "title": "string",
            "details": "string",
            "sent": "string"
        }
    }
}
```

