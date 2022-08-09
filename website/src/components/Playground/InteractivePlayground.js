import React, { useEffect, useState } from 'react';
import ReactiveButton from 'reactive-button';
import './InteractivePlayground.scss';
import '../../css/bootstrap.scss';

const InteractivePlayground = () => {
  const defaultValues = {
    buttonState: 'idle',
    color: 'primary',
    idleText: 'Click Me',
    loadingText: 'Loading',
    successText: 'Success',
    errorText: 'Error',
    className: '',
    outline: false,
    shadow: false,
    rounded: false,
    size: 'normal',
    messageDuration: 2000,
    block: false,
    disabled: false,
    width: '',
    height: '',
    animation: true,
  };
  const [buttonState, setButtonState] = useState(defaultValues.buttonState);
  const [color, setColor] = useState(defaultValues.color);
  const [idleText, setIdleText] = useState(defaultValues.idleText);
  const [loadingText, setLoadingText] = useState(defaultValues.loadingText);
  const [successText, setSuccessText] = useState(defaultValues.successText);
  const [errorText, setErrorText] = useState(defaultValues.errorText);
  const [className, setClassName] = useState(defaultValues.className);
  const [outline, setOutline] = useState(defaultValues.outline);
  const [shadow, setShadow] = useState(defaultValues.shadow);
  const [rounded, setRounded] = useState(defaultValues.rounded);
  const [size, setSize] = useState(defaultValues.size);
  const [messageDuration, setMessageDuration] = useState(
    defaultValues.messageDuration
  );
  const [block, setBlock] = useState(defaultValues.block);
  const [disabled, setDisabled] = useState(defaultValues.disabled);
  const [width, setWidth] = useState(defaultValues.width);
  const [height, setHeight] = useState(defaultValues.height);
  const [animation, setAnimation] = useState(defaultValues.animation);

  const [resetButtonState, setResetButtonState] = useState('idle');
  const [disableButtonStateProp, setDisableButtonStateProp] = useState(false);

  const buttonOnClickHandler = () => {
    setDisableButtonStateProp(true);
    setButtonState('loading');
    setTimeout(() => {
      setButtonState('success');
      setDisableButtonStateProp(false);
    }, 2000);
  };

  useEffect(() => {
    if (buttonState === 'success' || buttonState === 'error') {
      setDisableButtonStateProp(true);
      setTimeout(() => {
        setDisableButtonStateProp(false);
        setButtonState('idle');
      }, messageDuration);
    }
  }, [buttonState]);

  const buttonStateOnChangeHandler = (e) => {
    setButtonState(e.target.value);
  };

  const colorOnChangeHandler = (e) => {
    setColor(e.target.value);
  };

  const idleTextOnChangeHandler = (e) => {
    setIdleText(e.target.value);
  };

  const loadingTextOnChangeHandler = (e) => {
    setLoadingText(e.target.value);
  };

  const successTextOnChangeHandler = (e) => {
    setSuccessText(e.target.value);
  };

  const errorTextOnChangeHandler = (e) => {
    setErrorText(e.target.value);
  };

  const classNameOnChangeHandler = (e) => {
    setClassName(e.target.value);
  };

  const outlineOnChangeHandler = (e) => {
    setOutline(e.target.checked === true ? true : false);
  };

  const shadowOnChangeHandler = (e) => {
    setShadow(e.target.checked === true ? true : false);
  };

  const roundedOnChangeHandler = (e) => {
    setRounded(e.target.checked === true ? true : false);
  };

  const sizeOnChangeHandler = (e) => {
    setSize(e.target.value);
  };

  const blockOnChangeHandler = (e) => {
    setBlock(e.target.checked === true ? true : false);
  };

  const messageDurationOnChangeHandler = (e) => {
    if (parseInt(e.target.value) >= 0) {
      setMessageDuration(e.target.value);
    }
  };

  const disabledChangeHandler = (e) => {
    setDisabled(e.target.checked === true ? true : false);
  };

  const widthOnChangeHandler = (e) => {
    setWidth(e.target.value);
  };

  const heightOnChangeHandler = (e) => {
    setHeight(e.target.value);
  };

  const animationOnChangeHandler = (e) => {
    setAnimation(e.target.checked === true ? true : false);
  };

  const resetAll = () => {
    setResetButtonState('loading');

    setTimeout(() => {
      setButtonState(defaultValues.buttonState);
      setColor(defaultValues.buttonState);
      setIdleText(defaultValues.idleText);
      setLoadingText(defaultValues.loadingText);
      setSuccessText(defaultValues.successText);
      setErrorText(defaultValues.errorText);
      setClassName(defaultValues.className);
      setSize(defaultValues.size);
      setShadow(defaultValues.shadow);
      setRounded(defaultValues.rounded);
      setOutline(defaultValues.outline);
      setBlock(defaultValues.block);
      setMessageDuration(defaultValues.messageDuration);
      setDisabled(defaultValues.disabled);
      setWidth(defaultValues.width);
      setHeight(defaultValues.height);
      setAnimation(defaultValues.animation);

      setResetButtonState('success');
    }, 1000);
  };

  return (
    <div className="interactive-playground-component-wrapper">
      <div className="mb-3">
        <div className="card playground__card">
          <div className="card__body my-auto text-center">
            <ReactiveButton
              buttonState={buttonState}
              onClick={buttonOnClickHandler}
              color={color}
              idleText={idleText === '' ? defaultValues.idleText : idleText}
              loadingText={
                idleText === '' ? defaultValues.loadingText : loadingText
              }
              successText={
                successText === '' ? defaultValues.successText : successText
              }
              errorText={errorText === '' ? defaultValues.errorText : errorText}
              type={'button'}
              className={className}
              style={{}}
              outline={outline}
              shadow={shadow}
              rounded={rounded}
              size={size}
              block={block}
              messageDuration={messageDuration}
              disabled={disabled}
              buttonRef={null}
              width={width && width !== '' ? `${width}px` : null}
              height={height && height !== '' ? `${height}px` : null}
              animation={animation}
            />
          </div>
        </div>
      </div>
      <div className="card shadow-dim">
        <div className="card__body">
          <div className="container props__container">
            <div className="row" style={{ fontSize: '13px' }}>
              <div className="col col--6 bootstrap">
                <div className="pt-lg-4">
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      buttonState
                    </label>
                    <div className="col-sm-6">
                      <select
                        className="form-control form-control-sm"
                        id="buttonState"
                        value={buttonState}
                        onChange={buttonStateOnChangeHandler}
                        disabled={disableButtonStateProp}
                      >
                        <option value="idle">idle</option>
                        <option value="loading">loading</option>
                        <option value="success">success</option>
                        <option value="error">error</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      idleText
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="idleText"
                        placeholder="Click Me"
                        value={idleText}
                        onChange={idleTextOnChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      successText
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="successText"
                        placeholder="Success"
                        value={successText}
                        onChange={successTextOnChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      shadow
                    </label>
                    <div className="col-sm-6 align-self-end">
                      <input
                        type="checkbox"
                        id="shadow"
                        checked={shadow}
                        onChange={shadowOnChangeHandler}
                        className="z-switch"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      outline
                    </label>
                    <div className="col-sm-6 align-self-end">
                      <input
                        type="checkbox"
                        id="outline"
                        checked={outline}
                        onChange={outlineOnChangeHandler}
                        className="z-switch"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      animation
                    </label>
                    <div className="col-sm-6 align-self-end">
                      <input
                        type="checkbox"
                        id="animation"
                        checked={animation}
                        onChange={animationOnChangeHandler}
                        className="z-switch"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      className
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="className"
                        placeholder=""
                        value={className}
                        onChange={classNameOnChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      size
                    </label>
                    <div className="col-sm-6">
                      <select
                        className="form-control form-control-sm"
                        id="size"
                        value={size}
                        onChange={sizeOnChangeHandler}
                      >
                        <option value="tiny">tiny</option>
                        <option value="small">small</option>
                        <option value="normal">normal</option>
                        <option value="large">large</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      messageDuration
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        id="messageDuration"
                        value={messageDuration}
                        onChange={messageDurationOnChangeHandler}
                        placeholder="2000"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col--6 bootstrap">
                <div className="pt-lg-4">
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      color
                    </label>
                    <div className="col-sm-6">
                      <select
                        className="form-control form-control-sm"
                        id="color"
                        value={color}
                        onChange={colorOnChangeHandler}
                      >
                        <option value="primary">primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="dark">dark</option>
                        <option value="light">light</option>
                        <option value="green">green</option>
                        <option value="red">red</option>
                        <option value="yellow">yellow</option>
                        <option value="teal">teal</option>
                        <option value="violet">violet</option>
                        <option value="blue">blue</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      loadingText
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="loadingText"
                        placeholder="Loading"
                        value={loadingText}
                        onChange={loadingTextOnChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      errorText
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="errorText"
                        placeholder="Error"
                        value={errorText}
                        onChange={errorTextOnChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      rounded
                    </label>
                    <div className="col-sm-6 align-self-end">
                      <input
                        type="checkbox"
                        id="rounded"
                        checked={rounded}
                        onChange={roundedOnChangeHandler}
                        className="z-switch"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      block
                    </label>
                    <div className="col-sm-6 align-self-end">
                      <input
                        type="checkbox"
                        id="block"
                        checked={block}
                        onChange={blockOnChangeHandler}
                        className="z-switch"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      disabled
                    </label>
                    <div className="col-sm-6 align-self-end">
                      <input
                        type="checkbox"
                        id="disabled"
                        checked={disabled}
                        onChange={disabledChangeHandler}
                        className="z-switch"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      width
                    </label>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          id="width"
                          value={width}
                          onChange={widthOnChangeHandler}
                          placeholder=""
                        />
                        <div className="input-group-prepend">
                          <span className="input-group-text">px</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="buttonState"
                      className="col-sm-5 col-form-label text-lg-right"
                    >
                      height
                    </label>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          id="height"
                          value={height}
                          onChange={heightOnChangeHandler}
                          placeholder=""
                        />
                        <div className="input-group-prepend">
                          <span className="input-group-text">px</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card__footer text-center my-2">
          <ReactiveButton
            buttonState={resetButtonState}
            size="large"
            idleText={'Reset All'}
            loadingText={'Resetting...'}
            successText={'Done!'}
            color="dark"
            rounded
            onClick={resetAll}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractivePlayground;
