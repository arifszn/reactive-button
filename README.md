# Reactive Button

A React Button component that thinks like react.


# Installation

Install via <a href="https://www.npmjs.com/package/reactive-button">NPM</a>
```
npm install --save reactive-button
```

Install via <a href="https://yarnpkg.com/package/reactive-button">yarn</a>
```
yarn add reactive-button
```

## Doc

Simply manage 3 states to change button behaviour.
1. idle: When the button does nothing
2. loading: When data is loading
3. success/error: When data is loaded

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
          buttonState={state} /* 'idle' | 'loading' | 'success' | 'error'   Default: 'idle' */
          onClick={onClickHandler} /* function    Default: () => {} */
          color={'primary'} /* 'primary' | 'dark' | 'light' | 'green' | 'red'   Default: 'primary' */
          idleText={'Button'} /* string | ReactNode   Default: 'Click Me'*/
          loadingText={<span className="drbll1"><i className="rdbs1"></i>Loading</span>} /* string | ReactNode    Default: 'Loading' */
          successText={'Success!'} /* string | ReactNode    Default: 'Success!' */
          errorText={'Error!'} /* string | ReactNode   Default: 'Error!' */
          type={'button'} /* 'button' | 'submit' | 'reset'    Default: 'button' */
          className={'class1 class2'} /* string   Default: '' */
          style={{ textAlign: 'center' }} /* CSSProperties   Default: {} */
          outline={false} /* boolean    Default: false */
          shadow={false} /* boolean   Default: false */
          rounded={false} /*boolean   Default: false */
          size={'normal'} /* 'normal' | 'small' | 'large'   Default: 'normal' */
          block={false} /* boolean   Default: false */
          messageDuration={2000} /* number    Default: 2000 */
          disabled={false} /* Boolean    Default: false */
          buttonRef={null} /* React.Ref | null   Default: null */
        />
  );
}

export default App;
```

## Options

| Property            |  Type   | Description                                     | Default |
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

## Browser Compatibility

| Browser | Works? |
| :------ | :----: |
| Chrome  |   ✔   |
| Firefox |   ✔   |
| Safari  |   ✔   |


## Demo

> Work in progress

## Support

Show your ❤️ and support by giving a ⭐ on <a href="https://github.com/arifszn/reactive-button">Github</a>.

## License

<p>MIT Licensed.</p>
<p>Copyright © <a href="https://arifszn.github.io">MD. Ariful Alam</a> 2020.</p>
