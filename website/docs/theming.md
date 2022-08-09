---
id: theming
title: Theming
---

Reactive Button provides flexible styling option. Most of the common style changes can be achieved by using the <code>style</code> prop.

import Playground from '../src/components/Playground/Playground'
import Theming from '../src/components/DemoCodes/Theming'
import ReactiveButton from 'reactive-button'

<div className="my-4">
    <Playground
        code={Theming}
        scope={{ReactiveButton}}
        style={{margin: '5px 0px'}}
    />
</div>

However, you are free to create your own theme.

## Custom Theme

Modify the values how you prefer and use it in your existing css file.

<!-- prettier-ignore-start -->

```css
.reactive-btn-wrapper,
.reactive-btn {
  --reactive-button-min-width: 100px !important;
  --reactive-button-min-height: 35px !important;
  --reactive-button-font-size: 14px !important;
  --reactive-button-font-weight: 400 !important;
  --reactive-button-border-radius: 0px !important;
  --reactive-button-text-color: #ffffff !important;
  --reactive-progress-color: rgba(0, 0, 0, 0.15) !important;

  --reactive-button-primary-color: rgba(88, 103, 221, 1) !important;
  --reactive-button-secondary-color: rgba(108, 117, 125, 1) !important;
  --reactive-button-dark-color: rgba(66, 78, 106, 1) !important;
  --reactive-button-light-color: rgba(183, 186, 191, 1) !important;
  --reactive-button-green-color: rgba(37, 162, 51, 1) !important;
  --reactive-button-red-color: rgba(244, 81, 108, 1) !important;
  --reactive-button-yellow-color: rgba(255, 193, 7, 1) !important;
  --reactive-button-teal-color: rgba(0, 181, 173, 1) !important;
  --reactive-button-violet-color: rgba(100, 53, 201, 1) !important;
  --reactive-button-blue-color: rgba(66, 153, 225, 1) !important;

  --reactive-progress-outline-primary-color: rgba(88, 103, 221, 0.3) !important;
  --reactive-progress-outline-secondary-color: rgba(108, 117, 125, 0.3) !important;
  --reactive-progress-outline-dark-color: rgba(66, 78, 106, 0.3) !important;
  --reactive-progress-outline-light-color: rgba(214, 212, 212, 0.3) !important;
  --reactive-progress-outline-green-color: rgba(37, 162, 51, 0.3) !important;
  --reactive-progress-outline-red-color: rgba(244, 81, 108, 0.3) !important;
  --reactive-progress-outline-yellow-color: rgba(255, 193, 7, 0.3) !important;
  --reactive-progress-outline-teal-color: rgba(0, 181, 173, 0.3) !important;
  --reactive-progress-outline-violet-color: rgba(100, 53, 201, 0.3) !important;
  --reactive-progress-outline-blue-color: rgba(66, 153, 225, 0.3) !important;
}
```
<!-- prettier-ignore-end -->
