<p align="center">
  <a href="https://arifszn.github.io/reactive-button" target="_blank">
    <img 
      src="https://arifszn.github.io/reactive-button/img/logo/logo.png"
      alt="Reactive Button"
      title="Reactive Button"
      width="80"
    />
  </a>
</p>

<h1 align="center">Reactive Button</h1>
<p align="center">3D animated react button component with progress bar.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/reactive-button">
    <img src="https://img.shields.io/npm/v/reactive-button"/>
  </a>
  <img src="https://img.shields.io/bundlephobia/min/reactive-button"/>
  <img src="https://arifszn.github.io/reactive-button/img/dependencies.svg"/>
  <a href="https://github.com/arifszn/reactive-button/blob/main/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
  </a>
  <a href="https://github.com/arifszn/reactive-button/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/arifszn/reactive-button"/>
  </a>
</p>

<br/>

<p align="center">
  <a href="https://arifszn.github.io/reactive-button" target="_blank">
    <img src="https://arifszn.github.io/reactive-button/img/preview.gif" alt="Reactive Button Preview" title="Reactive Button Preview">
  </a>
</p>

**Reactive Button** is a 3D animated react component to replace the traditional boring buttons. Change your button style without adding any UI framework. Comes with progress bar and the goal is to let the users visualize what is happening after a button click.

- 3D
- Animated
- Supports icons
- Zero dependency
- Progress indicator
- Notification message
- Supports TypeScript
- Super easy to setup
- Extremely lightweight
- Super easy to customize
- And much more !

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

> The below example demonstrates an asynchronous task. When clicking the button, an asynchronous task (e.g. Data fetch, form submit) will be processed and after processing, a success or error message will be displayed.

- Initialize a state with string value `'idle'` and assign it as <strong>'buttonState'</strong> prop. Now it will render an idle text.
- When the button is clicked, set <strong>'buttonState'</strong>'s value to `'loading'`.
- When the task is completed, set <strong>'buttonState'</strong> to `'success'`, `'error'` or `'idle'` according to your need.

<br/>
    
### Basic Usage

```js
import { useState } from 'react';
import ReactiveButton from 'reactive-button';

function App() {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
    }, 2000);
  };

  return <ReactiveButton buttonState={state} onClick={onClickHandler} />;
}

export default App;
```

### Full Usage

```js
import { useState } from 'react';
import ReactiveButton from 'reactive-button';

function App() {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
    }, 2000);
  };

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

## Available Props

|      Props      |          Type           |                                                            Description                                                            |   Default    |
| :-------------: | :---------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :----------: |
|   buttonState   |        `string`         |                                        `'idle'` \| `'loading'` \| `'success'` \| `'error'`                                        |   `'idle'`   |
|     onClick     |       `function`        |                                              Callback function when clicking button                                               |  `() => {}`  |
|      color      |        `string`         | `'primary'` \| `'secondary'` \| `'dark'` \| `'light'` \| `'green'` \| `'red'` \| `'yellow'` \| `'teal'` \| `'violet'` \| `'blue'` | `'primary'`  |
|    idleText     | `string` \| `ReactNode` |                                                       Button text when idle                                                       | `'Click Me'` |
|   loadingText   | `string` \| `ReactNode` |                                                     Button text when loading                                                      | `'Loading'`  |
|   successText   | `string` \| `ReactNode` |                                                Button text when loading successful                                                | `'Success'`  |
|    errorText    | `string` \| `ReactNode` |                                                  Button text when loading failed                                                  |  `'Error'`   |
|      type       |        `string`         |                                               `'button'` \| `'submit'` \| `'reset'`                                               |  `'button'`  |
|    className    |        `string`         |                                                         Button classnames                                                         |     `''`     |
|      style      |  `React.CSSProperties`  |                                                           Custom style                                                            |     `{}`     |
|     outline     |        `boolean`        |                                                       Enable outline effect                                                       |   `false`    |
|     shadow      |        `boolean`        |                                                       Enable shadow effect                                                        |   `false`    |
|     rounded     |        `boolean`        |                                                       Enable rounded button                                                       |   `false`    |
|      size       |        `string`         |                                         `'tiny'` \| `'small'` \| `'normal'` \| `'large'`                                          |  `'normal'`  |
|      block      |        `boolean`        |                                                           Block Button                                                            |   `false`    |
| messageDuration |        `number`         |                                           Success/Error message duration in millisecond                                           |    `2000`    |
|    disabled     |        `boolean`        |                                                          Disable button                                                           |   `false`    |
|    buttonRef    |  `React.Ref` \| `null`  |                                                         Button reference                                                          |    `null`    |
|      width      |   `string` \| `null`    |                                                       Override button width                                                       |    `null`    |
|     height      |   `string` \| `null`    |                                                      Override button height                                                       |    `null`    |
|    animation    |        `boolean`        |                                                 Button hover and click animation                                                  |    `true`    |

## Contribute

To contribute, see the [Contributing guide](https://github.com/arifszn/reactive-button/blob/main/CONTRIBUTING.md).

## Support

<a href="https://www.buymeacoffee.com/arifszn" target="_blank">
  <img src="https://raw.githubusercontent.com/arifszn/arifszn/main/assets/bmc-button.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

## License

**Reactive Button** is licensed under the [MIT License](https://github.com/arifszn/reactive-button/blob/main/LICENSE).
