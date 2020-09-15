import * as React from "react";


export interface ReactiveButtonProps {
  type: string;
  idleLabel: string;
  loadingLabel: string;
  successLabel: string;
  errorLabel: string;
  className: string;
  style: React.CSSProperties;
  rounded: boolean;
  mode: string;
  size: string;
  buttonState: string;
  autoHideMessage: boolean;
  messageDuration: number;
  disabled: boolean;
  onClick ? (): void;
}

declare class ReactiveButton extends React.Component<ReactiveButtonProps, any> {}

export default ReactiveButton;