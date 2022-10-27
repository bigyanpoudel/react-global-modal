# React-Global-Modal

### *React Global Modal - One For All*


React Global Modal is a lightweight, simple, customizable and ready to use modal in the global scope in the react project.


[![npm version](https://img.shields.io/npm/v/react-global-modal.svg?style=flat-square)](https://www.npmjs.com/package/react-global-modal)
[![npm downloads](https://img.shields.io/npm/dm/react-global-modal.svg?style=flat-square)](https://www.npmjs.com/package/react-global-modal)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-global-modal)

## Features

- Lightweight
- Build in simple modal, slide pane, confirmation modal and async confirmation modal
- Fully constomizable and can be used with any UI framework
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
  - [Examples](#examples)
  - [Modal as a SlidePane](#modal-as-a-slidepane)
  - [Confirmation Modal](#confirmation-modal)
  - [Async confirmation Modal](#async-confirmation-modal)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install react-global-modal
    $ yarn add react-global-modal

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
    5. closeAll

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
The methods contain different others properties which are described below:

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
| footer                     |  React.ReactNode                |                       |          | You can pass custom footer to the modal |
| closeIconComponent                    |  React.ReactNode                |                       |          | You can pass custom footer to the modal |

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

##### 5. closeAll
You can use this method to close all the modal that are opened. In order to simply close all the modal that you have opened previously you can use like below:
```jsx

    GlobalModal.closeAll()

```
### Examples

#### 1. Simple example with in built header and no footer
```jsx
const Example = () => {
  const openModal = async () => {
    GlobalModal.push({
      component: ComponentText,
      props: {
        test: 'Testing',
      },
    })
  }

  return (
    <div>
      <button onClick={openModal}>Open</button>
    </div>
  )
}
const ComponentText = ({ test }: { test: string }) => {
  return (
    <div
      style={{
        height: '400px',
      }}
    >
      hello {test}
    </div>
  )
}
export default Example
```
#### 2. Simple example with header and  footer inside component
```jsx
import React from 'react'
import { GlobalModal } from 'react-global-modal'

const Example = () => {
  const openModal = async () => {
    GlobalModal.push({
      component: ComponentText,
      props: {
        test: 'Testing',
      },
      hideHeader: true,
    })
  }

  return (
    <div>
      <button onClick={openModal}>Open</button>
    </div>
  )
}
const ComponentText = ({ test }: { test: string }) => {
  return (
    <div
      style={{
        height: '400px',
      }}
    >
      <div
        style={{
          height: '2rem',
        }}
      >
        Header
      </div>
      hello {test}
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid rgb(230 232 240)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '8px 10px',
            justifyContent: 'flex-end',
            gridGap: '5px',
          }}
        >
          <button className="btn btn-error">Close</button>
          <button className="btn btn-primary"> okay</button>
        </div>
      </div>
    </div>
  )
}
export default Example

```
You can also include the header and footer in the component which will by displayed inside the modal but you have to disable the header present inside the modal by passing the props ``` hideHeader: true ```

## Modal as a SlidePane
The slide pane are the one that appears on the side that may be left or right of the screen. You can open existing modal as the slide pane:

```jsx
import React from 'react'
import { GlobalModal } from 'react-global-modal'

const Example = () => {
  const openModal = async () => {
    GlobalModal.push({
      component: ComponentText,
      props: {
        test: 'Testing',
      },
      hideHeader: true,
      isSlidePane: true,
    })
  }

  return (
    <div>
      <button onClick={openModal}>Open</button>
    </div>
  )
}
const ComponentText = ({ test }: { test: string }) => {
  return (
    <div
      style={{
        height: '400px',
      }}
    >
      <div
        style={{
          height: '2rem',
        }}
      >
        Header
      </div>
      hello {test}
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid rgb(230 232 240)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '8px 10px',
            justifyContent: 'flex-end',
            gridGap: '5px',
          }}
        >
          <button className="btn btn-error">Close</button>
          <button className="btn btn-primary"> okay</button>
        </div>
      </div>
    </div>
  )
}
export default Example

```
You can open slide pane by passing the props ``` isSlidePane: true ``` while opening the modal. Their is additional properties for side pane that is position which determines whether you want it be right or left.

## Confirmation Modal
Confirmation modal is can be used to ask the user to perform the certain operation. You can invoke the confirmation similarly to that of normal modal.

```jsx
import React from 'react'
import { ConfirmationModal } from 'react-global-modal'

const Example = () => {
  const openModal = async () => {
    ConfirmationModal({
      onCancel: () => {
        // TODO when user tigger cancel action
      },
      onOkay: () => {
        //TODO when user tigger okay action
      },
      okayLabel: 'Continue',
      cancelLabel: 'Back',
    })
  }

  return (
    <div>
      <button onClick={openModal}>Open</button>
    </div>
  )
}

```
The confirmation modal can be used like above. It consist of list of properties which are descriped below:

|   Props                       |  Types                            | Required             | Default        | Description                               |
|   --------------------------  |  -------------------------------  | --------------------:| -------------: | -----------------------------------------:|
| confirmationBody              |  React.FC                         |                      |                | Main component that will be displayed inside modal|
| title                         | string                            |                      |                | It is the title of the confirmation modal |
| message                       | string                            |                      |                |  It is the message that is display inside the body of the modal  |
| onCancel                      | Function                          |                      |                | It is used to perfrom certain action when the user tigger the cancel action |
|  onOkay                       | Function                          |                       |               | It is used to perform certain action when the user tigger the okay action |
| cancelLabel                   | string                            |                      |                | onCancel action tittle                    |
| okayLabel                     | string                            |                      |                | onOkay action title                       |
| isCloseable                   | boolean                           |                      | true           | It indicate wheather the modal can be closed or not. If true, you can only close the modal manualy from the component inside the modal using the modal close method |
| className                     | string                            |                      |                | It is used to provde the styles for outer most element of the modal |
| confirmationClassName         | string                            |                      |                | It is used to provde the styles for inner most content of the modal |
| actions                       | IButtonProps[]   | any[]                 |                      |                 | You can define your own custiom actions list |
| footer                       | React.ReactNode                 |                      |                 | You can pass custom footer to the modal |
|  okyActionProps              | Record<any,any>                 |                      |                 | Adjust the styling of the okay or positive action button. |
| cancelActionProps            | Record<any,any>                 |                      |                 | Adjust the styling of the cancel or negative action button |


## Async Confirmation Modal
You can use this modal to perfrom certain action based on the user response.

```jsx

import React from 'react'
import { AsyncConfirmationModal} from 'react-global-modal'

const Example = () => {
  const openModal = async () => {
    const res = await AsyncConfirmationModal({
      title: 'This is testing',
      message: 'This is message',
    })
    if (res) {
      //TODO if yes agree or press okay
    } else {
      //TODO if user doesn't agree or press cancel
    }
  }

  return (
    <div>
      <button onClick={openModal}>Open</button>
    </div>
  )
}
export default Example

```
The async confirmation modal can be used like above. It consist of list of properties which are descriped below:

|   Props                       |  Types                            | Required             | Default        | Description                               |
|   --------------------------  |  -------------------------------  | --------------------:| -------------: | -----------------------------------------:|
| confirmationBody              |  React.FC                         |                      |                | Main component that will be displayed inside modal|
| title                         | string                            |                      |                | It is the title of the confirmation modal |
| message                       | string                            |                      |                |  It is the message that is display inside the body of the modal  |
| cancelLabel                   | string                            |                      |                | onCancel action tittle                    |
| okayLabel                     | string                            |                      |                | onOkay action title                       |
| isCloseable                   | boolean                           |                      | true           | It indicate wheather the modal can be closed or not. If true, you can only close the modal manualy from the component inside the modal using the modal close method |
| className                     | string                            |                      |                | It is used to provde the styles for outer most element of the modal |
| confirmationClassName         | string                            |                      |                | It is used to provde the styles for inner most content of the modal |
| actions                       | IButtonProps[]   | any[]                 |                      |                 | You can define your own custiom actions list |
| footer                       | React.ReactNode                 |                      |                 | You can pass custom footer to the modal |
|  okyActionProps              | Record<any,any>                 |                      |                 | Adjust the styling of the okay or positive action button. |
| cancelActionProps            | Record<any,any>                 |                      |                 | Adjust the styling of the cancel or negative action button |

## Full customization with different UI framework
The react-global-modal support customization of the existing modal which means you can use this package with any UI framework that you are currently working within your project. For customization, you can pass customModal to the ``` GlobalModalWrapper ``` component. At first create the custom modal like bellow:

```jsx
//This is the example with chackra-ui
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'
import { IModalProps } from 'react-global-modal'
type IAntModalProps = IModalProps & {
  width?: number
  scrollBehavior?: 'inside' | 'outside'
  isCentered?: boolean
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}
export const CustomModalComponent = React.forwardRef((propsValues: IAntModalProps, ref) => {
  const {
    children,
    open = false,
    isCloseable,
    title = 'Modal Header',
    onModalClose = () => {},
    footer,
    closeIconComponent,
    actions = [],
    isSlidePane = false,
    position,
    hideHeader,
    scrollBehavior = 'inside',
    isCentered = false,
    size = 'md',
  } = propsValues

  if (isSlidePane) {
    return (
      <Drawer placement={position} isOpen={open} onClose={onModalClose} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          {!isCloseable && (!closeIconComponent ? <DrawerCloseButton /> : closeIconComponent)}
          {!hideHeader && <DrawerHeader>{title}</DrawerHeader>}
          <DrawerBody padding={0} position="relative">
            {children}
          </DrawerBody>
          {footer && footer}
          {actions.length > 0 && !footer && (
            <DrawerFooter>
              {actions.map((el: any) => (
                <Button
                  key={el.title}
                  colorScheme={el.colorScheme}
                  mr={3}
                  onClick={el.onClick}
                  variant={el.variant ?? 'ghost'}
                >
                  {el.title}
                </Button>
              ))}
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    )
  }
  return (
    <Modal
      isOpen={open}
      onClose={onModalClose}
      closeOnOverlayClick={!isCloseable}
      scrollBehavior={scrollBehavior}
      isCentered={isCentered}
      size={size}
    >
      <ModalOverlay />
      <ModalContent>
        {!hideHeader && <ModalHeader>Modal Title</ModalHeader>}
        {!isCloseable && <ModalCloseButton />}
        <ModalBody padding={0} position="relative">
          {children}
        </ModalBody>
        {footer && footer}
        {actions.length > 0 && !footer && (
          <ModalFooter>
            {actions.map((el: any) => (
              <Button
                key={el.title}
                colorScheme={el.colorScheme}
                mr={3}
                onClick={el.onClick}
                variant={el.variant ?? 'ghost'}
              >
                {el.title}
              </Button>
            ))}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
})
```
After creating the custom modal, pass the custom modal to ``` GlobalModalWrapper ``` component.

```jsx
 <GlobalModalWrapper customModal={CustomModalComponent} ref={(el) => (globalModalRef = el)} />
```

Below are the some example with different UI framework using which you can replace the existing modal with your own custom modal
##### 1. With TailwindCSS
For working with react-global-modal and tailwindCss, you can check the [Example](https://github.com/bigyanpoudel/react-global-modal/tree/main/playground/with-tailwindCSS)

##### 2. With chakra-ui
For working with react-global-modal and chakra ui, you can check the [Example](https://github.com/bigyanpoudel/react-global-modal/tree/main/playground/with-chakra-ui)

##### 3. With antd 
For working with react-global-modal and ant design, you can check the [Example](https://github.com/bigyanpoudel/react-global-modal/tree/main/playground/with-antd)


##### 4. With material-ui
For working with react-global-modal and material ui, you can check the [Example](https://github.com/bigyanpoudel/react-global-modal/tree/main/playground/with-material-ui)

##### 5. simple example with package itself
For working with react-global-modal, you can check the [Example](https://github.com/bigyanpoudel/react-global-modal/tree/main/playground/react-global-modal-example)

Note: In the case of customization, if you need more props you can pass  the prop while opening the modal and can access the same prop in your custom modal. You can also observe this in the example.
# License

MIT © [bigyanpoudel](https://github.com/bigyanpoudel)

