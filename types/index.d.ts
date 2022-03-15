// Type definitions for Reactive Button
// Project https://github.com/arifszn/reactive-button
// Author: Ariful Alam <arifulalamszn@gmail.com>

import {
  CSSProperties,
  Component,
  MouseEvent,
  MutableRefObject,
  ReactNode,
} from 'react';

export interface ReactiveButtonProps {
  /**
   * Current button state. Values: 'idle' | 'loading' | 'success' | 'error'
   *
   * Default: 'idle'.
   */
  buttonState?: string;

  /**
   * Callback function when clicking button.
   *
   * Default: () => {}
   */
  onClick?: (event: MouseEvent) => void;

  /**
   * Button color. values: 'primary' | 'secondary' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'teal' | 'violet' | 'blue'
   *
   * Default: 'primary'
   */
  color?: string;

  /**
   * Button text when idle.
   *
   * Default: 'Click Me'
   */
  idleText?: string | ReactNode;

  /**
   * Button text when loading.
   *
   * Default: 'Loading'
   */
  loadingText?: string | ReactNode;

  /**
   * Button text when loading successful.
   *
   * Default: 'Success'
   */
  successText?: string | ReactNode;

  /**
   * Button text when loading failed.
   *
   * Default: 'Error'
   */
  errorText?: string | ReactNode;

  /**
   * Button type attribute. Values: 'button' | 'submit' | 'reset'
   *
   * Default: 'button'
   */
  type?: string;

  /**
   * Button classnames.
   *
   * Default: ''
   */
  className?: string;

  /**
   * Custom style.
   *
   * Default: {}
   */
  style?: CSSProperties;

  /**
   * Enable outline effect.
   *
   * Default: false
   */
  outline?: boolean;

  /**
   * Enable shadow effect.
   *
   * Default: false
   */
  shadow?: boolean;

  /**
   * Enable rounded button.
   *
   * Default: false
   */
  rounded?: boolean;

  /**
   * Button size. Values: 'tiny' | 'small' | 'normal' | 'large'
   *
   * Default: 'normal'
   */
  size?: string;

  /**
   * Block button.
   *
   * Default: false
   */
  block?: boolean;

  /**
   * Success/Error message duration in millisecond.
   *
   * Default: 2000
   */
  messageDuration?: number;

  /**
   * Disable button.
   *
   * Default: false
   */
  disabled?: boolean;

  /**
   * Button reference.
   *
   * Default null
   */
  buttonRef?: MutableRefObject<HTMLButtonElement | undefined | null> | null;

  /**
   * Override button width.
   *
   * Default null
   */
  width?: string | null;

  /**
   * Override button height.
   *
   * Default null
   */
  height?: string | null;

  /**
   * Button hover and click animation.
   *
   * Default true
   */
  animation?: boolean;
}

declare class ReactiveButton extends Component<ReactiveButtonProps, any> {}

export default ReactiveButton;
