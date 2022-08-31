# React-Global-Modal

[![npm version](https://img.shields.io/npm/v/react-global-modal.svg?style=flat-square)](https://www.npmjs.com/package/react-global-modal)
[![npm downloads](https://img.shields.io/npm/dm/react-global-modal.svg?style=flat-square)](https://www.npmjs.com/package/react-global-modal)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-global-modal)

React Global Modal is a lightweight, simple, customizeable and ready to use modal in the global scope in the react project.

## Features

- Lightweight
- Build in simple modal, confirmation modal and async confirmation modal
- Fully constomizeable and can be used with any UI framework
- Invoked as a method so reduces the code base
- Promotes reusability
- Easy to maintain
- Enhance the performance as the main component never re-render when opening the modal
- Multiple modal can be pushed on top of another

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
      - [Configure React Global Modal](#1-configure-react-global-modal)
      - [Triggering exposed modal methods](#2-triggering-exposed-modal-methods)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install react-global-modal
    $ yarn add react-modal

## Usage

In order to use, you must follow the steps below:

#### 1. Configure React Global Modal

At first, you need to configure the modal at the root of your project as shown bellow

```jsx
import React, { useEffect } from 'react'
import { GlobalModalWrapper, GlobalModal } from 'react-global-modal'
import 'react-global-modal/dist/style.css'

let globalModalRef: any = null

function App() {
  useEffect(() => {
    GlobalModal.setUpModal(globalModalRef)
  }, [])

  return (
    <div className="App">
      <GlobalModalWrapper ref={(el) => (globalModalRef = el)} />
    </div>
  )
}

export default App
```
Here ``` GlobalModal.setUpModal ``` methods register our modal by storing the reference of the modal obtained from the ``` GlobalModalWrapper ```.  ``` react-global-modal/dist/style.css ``` is the styles of the modal which you also need to import in the root file of the project.

#### 2. Triggering exposed modal methods

The ``` GlobalModal``` consist of set method using which we can open and close the modal and also can update the props passed to the modal. It consist of following methods:

    1. setUpModal
    2. push
    3. pop
    4. add

##### 1. setUpModal
You can use this method to register the modal reference and should be defined in the root of the project as mention above in [Configure React Global Modal](#1-configure-react-global-modal)

##### 2. push
You can use this method to open the modal which conatin a list of props along with the component that we want to display inside the modal.

```jsx
  const openModal = async () => {
    GlobalModal.push({
      component:Component, //Component represent the component that you want to display inside the modal
      title:"Modal title" //modal title
      props:{   //props object are represented as the props to the component
        data:data   
      }
    })
  }
```
The methods contain different others properties which are described below
###### Properties

|   Props                       |  Types                            | Required             | Default        | Description                               |
|   --------------------------  |  -------------------------------  | --------------------:| -------------: | -----------------------------------------:|
| component                     |  React.FC<any>                    | ✅                   |                | Main component that will be displayed inside modal|
| props                         | { [key: string]: unknown }        |                      |                | It include the props of the component which can be accessed inside the modal |
| onClose                       | Function                          |                      |                | Is used to perfrom certain action when the modal is about to close |
| className                     | string                            |                      |                | It is used to provde the styles for outermost element of the modal and can be used accordingly with custom modal |
| modalSize                     | 'xs' , 'sm'  ,'md' , 'lg'         | ✅                   | md             | It is used to control the width of the modal |
| isCloseable                   | boolean                           |                      | false          | It indicate wheather the modal can be closed or not. If true, you can only close the modal manualy from the component inside the modal using the modal close method |
|  closeButtonClassName         | string                            |                      |                | It is used to style the close icon that is present inside the modal |
| title                         | string                            |                       |               | If you want to have a title in the modal you can use it.
|  hideHeader                   | boolean                           |                       | false         | It is used to hide the deafult heading component present in the modal |
| headerComponent               |   React.FC<any>                   |                       |               | You can pass the custom heading component in the modal |
|  headerClassName              | string                            |                       |               | It is used to style the heading the component |
|  actions                      |    IButtonProps[]                 |                       |               | It includes the list of button that can be included in the bottom of the modal |
|  actionClassName              | string                            |                       |               | It is used to style the footer of the component |
|   contentClassName            | string                            |                       |               | It is used to style the wrapper which wraps the passed component to the modal |  
|  hideCloseIcon                | boolean                           |                       |               | It is used to hide the close icon from the modal |
|   width                       | string                            |                       |               | It is used to include the custom width to the modal |
|isSlidePane                    | boolean                           |                       | false         | If it is true, then the modal will act as the slidePane and will be in right or left |
| position                      |  'right' , 'left'                 |                       | right         | It can only be used when the ``` isSlidePane ```   is true. Using this you can align the slidPane to right or left |

##### 3. pop
You can use this method to close the modal. In order to simply close the modal you can use like below:
```jsx

    GlobalModal.pop()

```
#### 4. add
You can use this method for updating any props values inside the modal. And this can be triggered from outside the modal as well as inside the modal

```jsx

 GlobalModal.add({
      props: {       // this is the updated props which will be passed to the component inside the modal
        value: newValue, 
      },
      modalIndex: 0,  // it indicate current number of modal open
 })

```
In above method, ``` modalIndex ``` represents the index of opened modal. If you have one modal opened, then ``` modalIndex ``` will be 0 else if you have second modal opened on top of first one then the``` modalIndex ``` will be 1 and soon. 
