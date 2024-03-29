# Customizable accessible modal component in React / Test

Version 1.0.0 !!

## Introduction

The react-modalisa package provides a customizable modal component for React applications. This component allows you to create accessible and visually appealing modals with various themes and customization options. This documentation will guide you on how to install and use the Modal component in your React project.

## Installation

To install the 'react-modalisa' package, run the following command:

```shell
npm i react-modalisa
```

## Usage

To use the Modal component, you need to import it along with other necessary dependencies:

```js
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-modalisa";
```

Next, you can set up the state to control the visibility of the modal:

```js
const [showModal, setShowModal] = useState(false);
```

You can also define a callback function for the button's click event:

```js
const handleFirstBtnClick = () => {
  // Provide the logic you want to perform here
  // for example, an alert box to indicate successful Exit
  alert("Exit!");
  // and closed modal
  setShowModal(false);
};

const handleSecondBtnClick = () => {
  // Provide the validation logic you want to perform here
  // for example, an alert box to indicate successful validation
  alert("Validation successful!");
};
```

To trigger the modal, use the following code:

```jsx
<button onClick={() => setShowModal(true)}>open modal</button>
```

Finally, integrate the Modal component after the return:

```jsx
{
  showModal &&
    createPortal(
      <Modal
        closeModal={() => setShowModal(false)} // Callback function to close the modal
        theme="success" // Theme of the modal ('validation', 'success', 'success-dark', 'alert', 'error')
        title="Title" // Title of the modal // Optional ! //
        textContent="Your text content!" // Text content of the modal
        modalSize="modal-medium" // Size of the modal ('modal-large' in this case)
        miniBtnActive={true} // Flag indicating whether the mini button is active // true or false
        FirstBtnActive={{
          text: "Close", // Text for the first button
          onFirstBtnClick: handleFirstBtnClick, // Callback function when the first button is clicked
        }}
        DoubleBtnActive={{
          text: "Validation", // Text for the second button
          onSecondBtnClick: handleSecondBtnClick, // Callback function when the second button is clicked
        }}
      />,
      document.body
    );
}
```

## customization options

The Modal component provides several customization options:

theme (string): Sets the theme of the modal. Available options: "success", "success-dark", "alert", "error", "validation".
title (string): Sets the title of the modal (optional).
textContent (string): Sets the text content of the modal.
modalSize (string): Sets the size of the modal. Available options: "modal-small", "modal-medium", "modal-large".
miniBtnActive (boolean): Determines whether the mini button is active.
FirstBtnActive (object): Configures the first button. Contains text (string) and onFirstBtnClick (callback function).
DoubleBtnActive (object): Configures the second button. Contains text (string) and onSecondBtnClick (callback function).

## Issue

If you encounter an error (ts(7016)) during installation, follow these steps:

1./ Create an index.d.ts file at the root of your project.
2/. Add the following line to the index.d.ts file:

```ts
declare module "react-modalisa";
```
