import React, { useEffect, useState } from 'react';
import './css/index.css';

const ReactiveButton = (props) => {
    const color        = props.color ? props.color : 'primary';
    const idleText    = props.idleText ? props.idleText : 'Click Me';
    const loadingText = props.loadingText ? props.loadingText : '<span class="drbll1"><i class="rdbs1"></i>Loading</span>';
    const successText = props.successText ? props.successText : 'Success!';
    const errorText   = props.errorText ? props.errorText : 'Error!';
    const type         = props.type ? props.type : 'button';
    const className    = `reactive-btn${props.className ? ' ' + props.className : ''}${props.block ? ' block' : ''}`;
    const outline      = props.outline ? true : false;
    const shadow       = props.shadow ? true : false;
    const style        = props.style ? props.style : null;
    const rounded      = props.rounded ? true : false;
    const size         = props.size ? props.size : 'normal';
    const [buttonState, setButtonState] = useState(props.buttonState ? props.buttonState : 'idle');
    const [buttonText, setButtonText] = useState(props.idleText ? props.idleText : idleText);

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

    useEffect(() => {
        if (buttonState === 'idle') {
            setButtonText(idleText);
        } else if (buttonState === 'loading') {
            setButtonText(loadingText);
        } else if (buttonState === 'success') {
            setButtonText(successText);
        } else if (buttonState === 'error') {
            setButtonText(errorText);
        }
    }, [buttonState])

    const populateButtonText = () => {
        if (typeof buttonText === 'object') {
            return <span className="content" >{buttonText}</span>;
        } else if (typeof buttonText === 'string') {
            return <span className="content" dangerouslySetInnerHTML={{ __html: buttonText }}></span>;
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
                    `${className} ${color} ${size}${outline?' outline':''}${rounded?' rounded':''}${shadow?' shadow': ''}${props.disabled?' disabled':''}`
                }
                onClick={onClickHandler}
                style={style}
            >
                <span className="progress"></span>
                {populateButtonText()}
            </button>
        </React.Fragment>
    )
}

export default ReactiveButton;