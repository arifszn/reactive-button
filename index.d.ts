import React from 'react';

export interface ReactiveButtonProps {
  onClick ? () : void;
  buttonState: string;
  type: string;
  idleLabel: string|object;
  loadingLabel: string|object;
  successLabel: string|object;
  errorLabel: string|object;
  className: string;
  style: React.CSSProperties;
  rounded: boolean;
  outline: boolean;
  shadow: boolean;
  color: string;
  size: string;
  messageDuration: number;
  disabled: boolean;
  buttonRef: React.Ref;
}

declare class ReactiveButton extends React.Component<ReactiveButtonProps, any> {}

export default ReactiveButton;