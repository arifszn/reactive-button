<p align="center">
  <a href="https://arifszn.github.io/reactive-button/" target="_blank"><img src="https://arifszn.github.io/reactive-button/img/logo/logo.svg" alt="Reactive Button" title="Reactive Button" width="80"></a>
</p>
<p><h1 align="center">Reactive Button</h1></p>
<p align="center">A React Button component that thinks like React.</p>
<p align="center">
    <img src="https://img.shields.io/npm/v/reactive-button">
    <img src="https://img.shields.io/bundlephobia/min/reactive-button">
    <a href="https://github.com/arifszn/reactive-button/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/reactive-button"></a>
    <a href="https://arifszn.github.io/"><img src="https://img.shields.io/badge/author-arifszn-informational" alt="Author arifszn"></a>
</p>
<p align="center">https://arifszn.github.io/reactive-button/</p>

<p align="center">
  <a href="https://arifszn.github.io/reactive-button/" target="_blank"><img src="https://arifszn.github.io/reactive-button/img/demo.gif" alt="Reactive Button Preview" title="Reactive Button Preview"></a>
</p>

* Reactive
* Animated
* Lightweight <small><code><20KB</code></small>
* Supports icons
* Zero dependency 
* Super easy to setup
* Super easy to customize
* And much more !

## Table of Contents

* [Resources](#resources)
* [Installation](#installation)
* [Usage](#usage)
* [Available Props](#available-props)
* [Browser Compatibility](#browser-compatibility)
* [Support](#support)
* [License](#license)

## Resources

- [Demo](https://arifszn.github.io/reactive-button/)
- [Documentation](https://arifszn.github.io/reactive-button/docs/)
- [Playground](https://arifszn.github.io/reactive-button/docs/playground)

# Installation

Install via <a href="https://www.npmjs.com/package/reactive-button">NPM</a>
```
npm install --save reactive-button
```

Install via <a href="https://yarnpkg.com/package/reactive-button">Yarn</a>
```
yarn add reactive-button
```

## Usage

- Initialize a state with string value <code>'idle'</code>
- When the button is clicked, set state to <code>'loading'</code>
- When the task is completed, set state to <code>'success'</code> or <code>'error'</code> according to your need

Basic Usage:

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

Full Usage:

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
      loadingText={<span><i className="reactive-btn-spinner"></i>Loading</span>}
      successText={'Success!'}
      errorText={'Error!'}
      type={'button'}
      className={'class1 class2'}
      style={{ textAlign: 'center' }}
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
    />
  );
}

export default App;
```

## Available Props 

| Props            |  Type   | Description                                     | Default |
| :-----------        | :---:   | :-------------------------------------          | :----:  |
| buttonState | string | Current button state | 'idle' |
| onClick        | function   | Callback function when clicking button            | () => {}     |
| color     | string   | Button color       | 'primary'     |
| idleText         | string \| ReactNode     | Button text when idle         | 'Click Me'     |
| loadingText       | string \| ReactNode     | Button text when loading         | 'Loading'     |
| successText         | string \| ReactNode     | Button text when loading successful         | 'Success!'     |
| errorText         | string \| ReactNode     | Button text when loading failed     | 'Error!'     |
| type | string | Button type attribute | 'button' |
| className         | string     | Button classnames         | ''     |
| style         | React.CSSProperties     | Custom style       | {}     |
| outline | boolean | Enable outline effect | false |
| shadow         | boolean     | Enable shadow effect      | false     |
| rounded         | boolean     | Enable rounded button     | false     |
| size         | string     | Button size | 'normal'     |
| block         | boolean     | Block Button | false     |
| messageDuration         | number     | Success/Error message duration in millisecond      | 2000     |
| disabled         | boolean     | Disable button | false     |
| buttonRef         | React.Ref \| null    | Button reference     | null     |
| width         | string \| null    | Override button width     | null     |
| height         | string \| null    | Override button height     | null     |

## Browser Compatibility

| Browser | Works? |
| :------ | :----: |
| Chrome  |   ✔   |
| Firefox |   ✔   |
| Safari  |   ✔   |

## Support

Show your ❤️ and support by giving a ⭐ on <a href="https://github.com/arifszn/reactive-button">Github</a>.

## License

<p>MIT Licensed.</p>
<p>Copyright © <a href="https://arifszn.github.io">MD. Ariful Alam</a> 2020.</p>
