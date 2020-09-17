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

  const onclickHandler = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
    }, 2000);
  }

  return (
        <ReactiveButton
          buttonState={state} /* idle|loading|success/error Default: idle*/
          onClick={onclickHandler} /* function|null Default: null*/
          color={'primary'} /* primary|dark|light|green|red Default: primary*/
          type={'button'} /* button|submit Default: button*/
          idleLabel={'Button'} /* Default: Button*/
          loadingLabel={'<span class="drbll1"><i class="rdbs1"></i>Loading</span>'} /* Default: Loading*/
          successLabel={'Success!'} /* Default: Success!*/
          errorLabel={'Error!'} /* Default: Error!*/
          className={'class1 class 2'} /* Default: null*/
          style={{ textAlign: 'center' }} /* Default: null*/
          size={'normal'} /* Default: normal*/
          autoHideMessage={true} /* Default: true*/
          messageDuration={2000} /* Default: 2000*/
          disabled={false} /* Default: false*/
          outline={false} /* Default: false*/
          shadow={false} /* Default: false*/
          rounded={false} /* Default: false*/
        />
  );
}

export default App;
```

## Options

| Property            |  Type   | Description                                     | Default |
| :-----------        | :---:   | :-------------------------------------          | :----:  |
| buttonState                 | string     | Current button state    | idle       |
| onClick        | function   | Button click event            | ()     |
| color     | string   | Button color       | primary     |
| type  | string | Button type submit or button   | button   |
| idleLabel         | string     | Button text when idle         | Button     |
| loadingLabel         | string     | Button text when loading         | Loading     |
| successLabel         | string     | Button text when successfully loaded         | Sucess!     |
| errorLabel         | string     | Button text when error occured       | Error!     |
| className         | string     | Custom classnames         | null     |
| style         | string     | Custom style       | null     |
| size         | string     | Button size | normal     |
| autoHideMessage         | boolean     | Auto hides success/error message         | true     |
| messageDuration         | number     | Duration of success/error message      | 2000     |
| disabled         | boolean     | Disabled button | false     |
| outline         |  boolean    | Enable outline effect        | false     |
| shadow         | boolean     | Enable shadow effect      | false     |
| rounded         | boolean     | Rounded button     | false     |

## Browser Compatibility

| Browser | Works? |
| :------ | :----: |
| Chrome  |   ✔   |
| Firefox |   ✔   |
| Safari  |   ✔   |

## Demo

> Work in progress

## Support

Support us by :star: on <a href="https://github.com/arifszn/reactive-button">Github</a>

## License

<p>MIT Licensed.</p>
<p>Copyright © <a href="https://arifszn.github.io">MD. Ariful Alam</a> 2020.</p>
