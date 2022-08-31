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

## Table of Contents

- [React-Global-Modal](#react-global-modal)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [1. Configure React Global Modal](#1-configure-react-global-modal)
    - [1. Opening the Modal](#1-opening-the-modal)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install react-global-modal
    $ yarn add react-modal

## Usage

In order to use, you must follow the steps below
   ### 1. Configure React Global Modal

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
        Here, ``` GlobalModal.setUpModal``` method register reference of our modal which is obtained from GlobalModalWrapper component

   ### 1. Opening the Modal