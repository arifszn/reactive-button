import React, { useEffect, useState } from 'react';
import './css/index.css';

const ReactiveButton = (props) => {
    const type            = props.type ? props.type : 'button';
    const idleLabel       = props.idleLabel ? props.idleLabel : 'Button';
    const loadingLabel    = props.loadingLabel ? props.loadingLabel : '<span class="drbll1"><i class="rdbs1"></i>Loading</span>';
    const successLabel    = props.successLabel ? props.successLabel : 'Success!';
    const errorLabel      = props.errorLabel ? props.errorLabel : 'Error!';
    const className       = `reactive-btn${props.className ? ' ' + props.className : ''}${props.block ? ' block' : ''}`;
    const style           = props.style ? props.style : null;
    const rounded         = props.rounded ? true : false;
    const mode            = props.mode ? props.mode : 'primary';
    const size            = props.size ? props.size : 'normal';
    const [buttonState, setButtonState] = useState(props.buttonState ? props.buttonState : 'idle');

    useEffect(() => {
        setButtonState(props.buttonState);


        if ((props.autoHideMessage ? true : false) && (props.buttonState === 'success' || props.buttonState === 'error')) {
            setTimeout(() => {
                setButtonState('idle');
            }, (props.messageDuration ? props.messageDuration : 1000));
        }
    }, [props.buttonState, props.messageDuration, props.autoHideMessage])

    return (
        <button
            disabled={buttonState !== 'idle' || props.disabled}
            type={type}
            data-mode={mode}
            data-size={size}
            data-button-state={buttonState}
            data-disabled={props.disabled}
            data-rounded={rounded}
            className={`${className}`}
            onClick={props.onClick}
            style={style}
        >
            <span className="progress"></span>
            <span className="content" dangerouslySetInnerHTML={{ __html: buttonState === 'idle' ? idleLabel : (buttonState === 'loading' ? loadingLabel : (buttonState === 'success' ? successLabel : (buttonState === 'error' ? errorLabel : idleLabel))) }}></span>
        </button>
    )
}

export default ReactiveButton;