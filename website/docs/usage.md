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

The targets of the below example:

- Show a button showing the text '_Submit_'.
- After clicking the button, change the button text to '_Submitting_' and send an HTTP request.
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
      loadingText="Submitting"
      successText="Done"
      onClick={onClickHandler}
    />
  );
}

export default App;
```

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
return (
  <>
    <ReactiveButton size="tiny" />
    <ReactiveButton size="small" />
    <ReactiveButton size="medium" />
    <ReactiveButton size="large" />
  </>
);
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
return (
  <>
    <ReactiveButton outline />
    <ReactiveButton rounded />
    <ReactiveButton shadow />
  </>
);
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
return <ReactiveButton onClick={doSomething} idleText={'Some Text'} />;
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

### Form Submit

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
return (
  <a href="https://github.com/" target="_blank">
    <ReactiveButton idleText="Visit Github" />
  </a>
);
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
