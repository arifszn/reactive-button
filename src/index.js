import React, { useEffect, useState } from 'react';
import './css/index.css';

const ReactiveButton = (props) => {
    const color       = props.color ? props.color : 'primary';
    const idleText    = props.idleText ? props.idleText : 'Click Me';
    const loadingText = props.loadingText ? props.loadingText : <span className = "drbll1"><i className = "rdbs1"></i>Loading</span>;
    const successText = props.successText ? props.successText : 'Success!';
    const errorText   = props.errorText ? props.errorText : 'Error!';
    const type        = props.type ? props.type : 'button';
    const className   = `reactive-btn${props.className ? ' ' + props.className : ''}${props.block ? ' block' : ''}`;
    const outline     = props.outline ? true : false;
    const shadow      = props.shadow ? true : false;
    const style       = props.style ? props.style : {};
    const rounded     = props.rounded ? true : false;
    const size        = props.size ? props.size : 'normal';
    const [buttonState, setButtonState] = useState(props.buttonState ? props.buttonState : 'idle');

    const onClickHandler = () => {
        if (typeof props.onClick !== 'undefined') {
            props.onClick();
        }
    }
    
    useEffect(() => {
        if (typeof props.buttonState !== 'undefined') {
            setButtonState(props.buttonState);
            if ((props.buttonState === 'success' || props.buttonState === 'error')) {
                setTimeout(() => {
                    setButtonState('idle');
                }, (props.messageDuration ? props.messageDuration : 2000));
            }
        }
    }, [props.buttonState, props.messageDuration])

    const getButtonText = (currentButtonState) => {
        if (currentButtonState === 'idle') {
            return idleText;
        } else if (currentButtonState === 'loading') {
            return loadingText;
        } else if (currentButtonState === 'success') {
            return successText;
        } else if (currentButtonState === 'error') {
            return errorText;
        }
    }

    return (
        <React.Fragment>
            <button
                ref={typeof props.buttonRef !== 'undefined' ? props.buttonRef : null }
                disabled={buttonState !== 'idle' || props.disabled}
                data-button-state={buttonState}
                type={type}
                className={
                    `${className} ${color} ${size}${outline ? ' outline' : ''}${rounded ? ' rounded' : ''}${shadow ? ' shadow' : ''}${props.disabled ? ' disabled' : ''}`
                }
                onClick={onClickHandler}
                style={style}
            >
                <span className="progress"></span>
                <span className="content" >{getButtonText(buttonState)}</span>
            </button>
        </React.Fragment>
    )
}

export default ReactiveButton;