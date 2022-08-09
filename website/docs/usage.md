---
id: usage
title: Usage
---

import Playground from '../src/components/Playground/Playground'
import UsingIcons from '../src/components/DemoCodes/UsingIcons'
import AnchorTag from '../src/components/DemoCodes/AnchorTag'
import Colors from '../src/components/DemoCodes/Colors'
import Size from '../src/components/DemoCodes/Size'
import Style from '../src/components/DemoCodes/Style'
import ReactiveButton from 'reactive-button'
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

:::info

The Below example demonstrates an asynchronous task. When clicking the button, an asynchronous task (e.g. Data fetch, form submit) will be processed and after processing, a success or error message will be displayed.

:::

- Initialize a state with string value <code>'idle'</code> and assign it as <strong>'buttonState'</strong> prop. Now it will render an idle text.
- When the button is clicked, set <strong>'buttonState'</strong>'s value to <code>'loading'</code>.
- When the task is completed, set <strong>'buttonState'</strong> to <code>'success'</code>, <code>'error'</code> or <code>'idle'</code> according to your need.

## Basic Usage

```jsx
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

## Full Usage

```jsx
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

:::note

For non asynchronous task, state management is not needed. Use as like normal button.

:::

## Other Usage

Reactive Button has all the functionalities of a normal button.

### Color

Reactive Button comes with 10 default color options.

<div>
    <Playground
        code={Colors}
        scope={{ReactiveButton, faReply}}
        previewOnly={true}
    />
</div>

```jsx
<ReactiveButton color="primary"/>
<ReactiveButton color="secondary"/>
<ReactiveButton color="teal"/>
<ReactiveButton color="green"/>
<ReactiveButton color="red"/>
<ReactiveButton color="violet"/>
<ReactiveButton color="blue"/>
<ReactiveButton color="yellow"/>
<ReactiveButton color="dark"/>
<ReactiveButton color="light"/>
```

### Size

There are 4 sizes available.

<div>
    <Playground
        code={Size}
        scope={{ReactiveButton, faReply}}
        previewOnly={true}
    />
</div>

```jsx
<ReactiveButton size="tiny"/>
<ReactiveButton size="small"/>
<ReactiveButton size="medium"/>
<ReactiveButton size="large"/>
```

### Style

Make the buttons more beautiful with these customization options.

<div>
    <Playground
        code={Style}
        scope={{ReactiveButton, faReply}}
        previewOnly={true}
    />
</div>

```jsx
<ReactiveButton outline/>
<ReactiveButton rounded/>
<ReactiveButton shadow/>
```

### Existing State

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

### Without State

You are not limited to use state always.

```jsx
<ReactiveButton onClick={doSomething} idleText={'Some Text'} />
```

### Using Icons

You can use your own icons. Don't forget to wrap them with a parent element.

<div>
    <Playground
        code={UsingIcons}
        scope={{ReactiveButton, faReply, FontAwesomeIcon}}
        previewOnly={true}
    />
</div>

```jsx
<ReactiveButton
  idleText={
    <span>
      <faReply /> Send
    </span>
  }
/>
```

### Form Submit

If you need to submit form by button clicking, set the <code>type</code> prop as '<strong>submit</strong>'.

```jsx
<form>
  <input type="text" name="username" />
  <input type="password" name="password" />
  <ReactiveButton type={'submit'} idleText="Submit" />
</form>
```

### Anchor Tag

To use Reactive button as anchor tag, simply wrap it with an anchor tag.

<div>
    <Playground
        code={AnchorTag}
        scope={{ReactiveButton}}
        previewOnly={true}
    />
</div>

```jsx
<a href="https://github.com/" target="_blank">
  <ReactiveButton idleText="Visit Github" />
</a>
```

import Link from '@docusaurus/Link';

<strong>Note:</strong> For more usage, visit <Link to="/docs/Playground">Playground</Link>.

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
