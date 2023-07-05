<br/>

<p align="center">
  <img src="https://user-images.githubusercontent.com/45073703/183357205-60175f37-abcb-4027-bdfa-8762322f342b.png" width="35%">

  <h4 align="center">3D animated react button component with progress bar.</h4>

  <p align="center">
    <a href="https://www.npmjs.com/package/reactive-button">
      <img src="https://img.shields.io/npm/v/reactive-button"/>
    </a>
    <a href="https://www.npmjs.com/package/reactive-button">
      <img src="https://img.shields.io/npm/dt/reactive-button"/>
    </a>
    <img src="https://img.shields.io/bundlephobia/min/reactive-button"/>
    <img src="https://arifszn.github.io/reactive-button/img/dependencies.svg"/>
    <a href="https://codeclimate.com/github/arifszn/reactive-button/maintainability">
      <img src="https://api.codeclimate.com/v1/badges/c60f42d7d0b61bd33e98/maintainability" />
    </a>
    <a href="https://github.com/arifszn/reactive-button/issues">
      <img src="https://img.shields.io/github/issues/arifszn/reactive-button"/>
    </a>
    <a href="https://github.com/arifszn/reactive-button/stargazers">
      <img src="https://img.shields.io/github/stars/arifszn/reactive-button"/>
    </a>
    <a href="https://github.com/arifszn/reactive-button/commits/main">
      <img src="https://img.shields.io/github/last-commit/arifszn/reactive-button/main"/>
    </a>
    <a href="https://github.com/arifszn/reactive-button/blob/main/CONTRIBUTING.md">
      <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
    </a>
    <a href="https://github.com/arifszn/reactive-button/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/arifszn/reactive-button"/>
    </a>
    <a href="https://www.buymeacoffee.com/arifszn">
      <img src="https://img.shields.io/badge/sponsor-buy%20me%20a%20coffee-yellow?logo=buymeacoffee"/>
    </a>
    <a href="https://twitter.com/intent/tweet?text=3D%20animated%20react%20button%20component%20with%20progress%20bar.&url=https://github.com/arifszn/reactive-button&hashtags=javascript,reactjs,opensource,js,webdev,developers">
      <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Farifszn%2Freactive-button"/>
    </a>
  </p>

  <p align="center">
    <a href="https://arifszn.github.io/reactive-button">Documentation</a>
    ·
    <a href="https://github.com/arifszn/reactive-button/issues">Report Bug</a>
    ·
    <a href="https://github.com/arifszn/reactive-button/discussions">Request Feature</a>
  </p>
</p>

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

- [Documentation](https://arifszn.github.io/reactive-button)
- [Playground](https://arifszn.github.io/reactive-button/docs/playground)
- [StackBlitz](https://stackblitz.com/edit/reactive-button)

## Installation

Install via <a href="https://www.npmjs.com/package/reactive-button">NPM</a>.

```sh
npm install reactive-button
```

Or via <a href="https://yarnpkg.com/package/reactive-button">Yarn</a>.

```sh
yarn add reactive-button
```

## Usage

The targets of the below example:

- Show a button showing the text '_Submit_'.
- After clicking the button, change the button text to '_Loading_' and send an HTTP request.
- Upon successful request, change the button text to '_Done_' as success notification.

```jsx
import { useState } from 'react';
import ReactiveButton from 'reactive-button';

function App() {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');

    // send an HTTP request
    setTimeout(() => {
      setState('success');
    }, 2000);
  };

  return (
    <ReactiveButton
      buttonState={state}
      idleText="Submit"
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
    />
  );
}

export default App;
```

### Other Usage

Reactive Button has all the functionalities of a normal button.

#### Color

It comes with 10 default color options.

```jsx
return (
  <>
    <ReactiveButton color="primary" />
    <ReactiveButton color="secondary" />
    <ReactiveButton color="teal" />
    <ReactiveButton color="green" />
    <ReactiveButton color="red" />
    <ReactiveButton color="violet" />
    <ReactiveButton color="blue" />
    <ReactiveButton color="yellow" />
    <ReactiveButton color="dark" />
    <ReactiveButton color="light" />
  </>
);
```

#### Size

There are 4 sizes available.

```jsx
return (
  <>
    <ReactiveButton size="tiny" />
    <ReactiveButton size="small" />
    <ReactiveButton size="medium" />
    <ReactiveButton size="large" />
  </>
);
```

#### Style

Make the buttons more beautiful with these customization options.

```jsx
return (
  <>
    <ReactiveButton outline />
    <ReactiveButton rounded />
    <ReactiveButton shadow />
  </>
);
```

#### Existing State

In your project, There might be existing state for loading indicator which accepts boolean value only. If you don't want to define new state for Reactive Button, then utilize the existing state.

```jsx
const [loading, setLoading] = useState(false);

return (
  <ReactiveButton
    buttonState={loading ? 'loading' : 'idle'}
    idleText={'Button'}
    loadingText={'Loading'}
  />
);
```

#### Without State

`state` is not mandatory.

```jsx
return <ReactiveButton onClick={onClickHandler} />;
```

#### Using Icons

You can use your own icons. Don't forget to wrap them with a parent element.

```jsx
return (
  <ReactiveButton
    idleText={
      <span>
        <faReply /> Send
      </span>
    }
  />
);
```

#### Form Submit

If you need to submit form by button clicking, set the <code>type</code> prop as '<strong>submit</strong>'.

```jsx
return (
  <form>
    <input type="text" name="username" />
    <input type="password" name="password" />
    <ReactiveButton type={'submit'} idleText="Submit" />
  </form>
);
```

#### Anchor Tag

To use Reactive button as anchor tag, simply wrap it with an anchor tag.

```jsx
return (
  <a href="https://github.com/" target="_blank">
    <ReactiveButton idleText="Visit Github" />
  </a>
);
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

## Support

<p>You can show your support by starring this project.</p>
<a href="https://github.com/arifszn/reactive-button/stargazers">
  <img src="https://img.shields.io/github/stars/arifszn/reactive-button?style=social" alt="Github Star">
</a>

## Contribute

To contribute, see the [contributing guide](https://github.com/arifszn/reactive-button/blob/main/CONTRIBUTING.md).

## License

[MIT License](https://github.com/arifszn/reactive-button/blob/main/LICENSE)
