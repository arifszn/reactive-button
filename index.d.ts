import React from 'react';

export interface ReactiveButtonProps {
  onClick ? (): void;
  buttonState: string;
  type: string;
  idleLabel: string;
  loadingLabel: string;
  successLabel: string;
  errorLabel: string;
  className: string;
  style: React.CSSProperties;
  rounded: boolean;
  outline: boolean;
  shadow: boolean;
  color: string;
  size: string;
  messageDuration: number;
  disabled: boolean;
}

declare class ReactiveButton extends React.Component<ReactiveButtonProps, any> {}

export default ReactiveButton;