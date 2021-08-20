<p align="center">
    <a href="https://arifszn.github.io/reactive-button" target="_blank">
        <img src="https://arifszn.github.io/reactive-button/img/logo/logo.png" alt="Reactive Button" title="Reactive Button" width="80"/>
    </a>
</p>

<h1 align="center">Reactive Button</h1>
<p align="center">3D animated react button component with progress bar.</p>
<p align="center">
    <a href="https://arifszn.github.io/reactive-button">https://arifszn.github.io/reactive-button</a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/reactive-button"><img src="https://img.shields.io/npm/v/reactive-button"/></a>
    <img src="https://img.shields.io/bundlephobia/min/reactive-button"/>
    <img src="https://arifszn.github.io/reactive-button/img/dependencies.svg"/>
    <a href="https://github.com/arifszn/reactive-button/blob/main/LICENSE"><img src="https://img.shields.io/github/license/arifszn/reactive-button"/></a>
</p>

<br/>

<p align="center">
    <a href="https://arifszn.github.io/reactive-button" target="_blank">
        <img src="https://arifszn.github.io/reactive-button/img/preview.gif" alt="Reactive Button Preview" title="Reactive Button Preview">
    </a>
</p>

Reactive Button is a beautiful 3D animated react component to replace the traditional boring buttons. Comes with progress bar and the goal is to let the users visualize what is happening after a button click.

* 3D
* Animated
* Progress indicator
* Lightweight <small><code><20KB</code></small>
* Supports icons
* Zero dependency 
* Super easy to setup
* Super easy to customize
* And much more !

## Resources

- [Demo](https://arifszn.github.io/reactive-button)
- [Documentation](https://arifszn.github.io/reactive-button/docs)
- [Playground](https://arifszn.github.io/reactive-button/docs/playground)
- [CodeSandbox](https://codesandbox.io/s/reactive-button-lvpeb)

## Installation

Install via <a href="https://www.npmjs.com/package/reactive-button">NPM</a>
```
npm install reactive-button
```

Install via <a href="https://yarnpkg.com/package/reactive-button">Yarn</a>
```
yarn add reactive-button
```

## Usage

For complete usage, visit the <a href="https://arifszn.github.io/reactive-button/docs/usage">docs</a>.

> Below example demonstrates an asynchronous task. When clicking the button, an asynchronous task (e.g. Data fetch, form submit) will be processed and after processing, a success or error message will be displayed.

- Initialize a state with string value <code>'idle'</code> and assign it as <strong>'buttonState'</strong> prop. Now it will render an idle text.
- When the button is clicked, set <strong>'buttonState'</strong>'s value to <code>'loading'</code>. 
- When the task is completed, set <strong>'buttonState'</strong> to <code>'success'</code>, <code>'error'</code> or <code>'idle'</code> according to your need.

<details>
<summary>Basic Usage:</summary>

```js
import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

function App() {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    }

    return (
        <ReactiveButton
            buttonState={state}
            onClick={onClickHandler}
        />
    );
}

export default App;
```

</details>

<details>
<summary>Full Usage:</summary>

```js
import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

function App() {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    }

    return (
        <ReactiveButton
            buttonState={state}
            onClick={onClickHandler}
            color={'primary'}
            idleText={'Button'}
            loadingText={'Loading'}
            successText={'Success'}
            errorText={'Error'}
            type={'button'}
            className={'class1 class2'}
            style={{ borderRadius: '5px' }}
            outline={false}
            shadow={false}
            rounded={false}
            size={'normal'}
            block={false}
            messageDuration={2000}
            disabled={false}
            buttonRef={null}
            width={null}
            height={null}
            animation={true}
        />
    );
}

export default App;
```

</details>

## Available Props 

| Props            |  Type   | Description                                     | Default |
| :-----------        | :---:   | :-------------------------------------          | :----:  |
| buttonState | string | <code>'idle'</code> \| <code>'loading'</code> \| <code>'success'</code> \| <code>'error'</code> | <code>'idle'</code> |
| onClick        | function   | Callback function when clicking button            | <code>() => {}</code>     |
| color     | string   | Button color       | <code>'primary'</code>     |
| idleText         | string \| ReactNode     | Button text when idle         | <code>'Click Me'</code>     |
| loadingText       | string \| ReactNode     | Button text when loading         | <code>'Loading'</code>     |
| successText         | string \| ReactNode     | Button text when loading successful         | <code>'Success'</code>     |
| errorText         | string \| ReactNode     | Button text when loading failed     | <code>'Error'</code>     |
| type | string | Button type attribute | <code>'button'</code> |
| className         | string     | Button classnames         | <code>''</code>     |
| style         | React.CSSProperties     | Custom style       | <code>{}</code>     |
| outline | boolean | Enable outline effect | <code>false</code> |
| shadow         | boolean     | Enable shadow effect      | <code>false</code>     |
| rounded         | boolean     | Enable rounded button     | <code>false</code>     |
| size         | string     | Button size | <code>'normal'</code>     |
| block         | boolean     | Block Button | <code>false</code>     |
| messageDuration         | number     | Success/Error message duration in millisecond      | <code>2000</code>     |
| disabled         | boolean     | Disable button | <code>false</code>     |
| buttonRef         | React.Ref \| null    | Button reference     | <code>null</code>     |
| width         | string \| null    | Override button width     | <code>null</code>     |
| height         | string \| null    | Override button height     | <code>null</code>     |
| animation         | boolean   | Button hover and click animation     | <code>true</code>     |


## Contribute

To contribute, clone this repo locally and commit your code on a new branch. Feel free to create an issue or make a pull request.


## Thank You

[![Stargazers repo roster for @arifszn/reactive-button](https://reporoster.com/stars/arifszn/reactive-button)](https://github.com/arifszn/reactive-button/stargazers)


## Support

Show your ❤️ and support by giving a ⭐.

## License

<p>MIT Licensed.</p>
<p>Copyright © <a href="https://arifszn.github.io">MD. Ariful Alam</a> 2021.</p>