import React from 'react';
import styled, { css } from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import palenight from 'prism-react-renderer/themes/palenight';
import PropTypes from 'prop-types';

const foreground = '#f8f8f2';
const red = '#ff5555';

const StyledProvider = styled(LiveProvider)`
  border-radius: 3px;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: 100px;
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Column = css`
  flex-basis: ${(props) => (props.previewOnly ? '100%' : '50%')};
  width: ${(props) => (props.previewOnly ? '100%' : '50%')};
  max-width: ${(props) => (props.previewOnly ? '100%' : '50%')};
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
    height: ${(props) => props.height};
    max-height: ${(props) => props.height};
  }
`;

const StyledEditor = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-size: 14px;
  height: ${(props) => props.height};
  max-height: ${(props) => props.height};
  overflow: auto;
  ${Column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 1.5rem;
  color: black;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  ${Column};
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: 0.5rem;
  background: ${red};
  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
`;

const Playground = ({ noInline, code, scope, height, previewOnly = false }) => {
  return (
    <StyledProvider
      code={code}
      noInline={noInline}
      theme={palenight}
      scope={scope}
    >
      <LiveWrapper>
        {!previewOnly && (
          <StyledEditor previewOnly={previewOnly} height={height}>
            <LiveEditor />
          </StyledEditor>
        )}
        <StyledPreview
          previewOnly={previewOnly}
          height={height}
          className="z-styled-preview"
        />
      </LiveWrapper>
      <StyledError />
    </StyledProvider>
  );
};

Playground.propTypes = {
  noInline: PropTypes.bool,
  code: PropTypes.string,
  scope: PropTypes.object,
  height: PropTypes.string,
  previewOnly: PropTypes.bool,
};

export default Playground;
