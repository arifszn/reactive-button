import React, { useEffect, useState } from 'react';
import './css/index.css';

const ReactiveButton = (props) => {
    const type         = props.type?props.type:'button';
    const outline      = props.outline?true:false;
    const shadow       = props.shadow?true:false;
    const idleLabel    = props.idleLabel?props.idleLabel:'Button';
    const loadingLabel = props.loadingLabel?props.loadingLabel:'<span class="drbll1"><i class="rdbs1"></i>Loading</span>';
    const successLabel = props.successLabel?props.successLabel:'Success!';
    const errorLabel   = props.errorLabel?props.errorLabel:'Error!';
    const className    = `reactive-btn${props.className?' '+props.className:''}${props.block?' block':''}`;
    const style        = props.style?props.style:null;
    const rounded      = props.rounded?true:false;
    const color        = props.color?props.color:'primary';
    const size         = props.size?props.size:'normal';
    const [buttonState, setButtonState] = useState(props.buttonState?props.buttonState:'idle');

    const setLabel = (state) => {
        if (state === 'idle') {
            return idleLabel;
        } else if (state === 'loading') {
            return loadingLabel;
        } else if (state === 'success') {
            return successLabel;
        } else if (state === 'error') {
            return errorLabel;
        } else {
            return idleLabel;
        }
    }

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
                }, (props.messageDuration ? props.messageDuration : 1000));
            }
        }
    }, [props.buttonState, props.messageDuration])

    return (
        <React.Fragment>
            <button
                disabled={buttonState !== 'idle' || props.disabled}
                type={type}
                className={
                    `${className} ${buttonState} ${color} ${size}${outline?' outline':''}${rounded?' rounded':''}${shadow?' shadow': ''}${props.disabled?' disabled':''}`
                }
                onClick={onClickHandler}
                style={style}
            >
                <span className="progress"></span>
                <span className="content" dangerouslySetInnerHTML={{ __html: setLabel(buttonState) }}></span>
            </button>
        </React.Fragment>
    )
}

export default ReactiveButton;