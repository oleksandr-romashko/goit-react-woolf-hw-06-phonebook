import styled from 'styled-components';

/**
 * Styled text input.
 */
const Input = styled('input')({
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
  maxWidth: '272px',
  padding: '6px 5px',
  alignItems: 'center',

  fontSize: '22px',
  fontWeight: 400,
  lineHeight: '24px',

  border: '1px solid var(--color-basic-grey)',
  backgroundColor: 'var(--color-pure-white)',

  '&:focus': {
    outline: '1px solid rgba(124, 168, 225, 0.8)',
    border: '1px solid rgba(124, 168, 225, 0.8)',
    boxShadow:
      '0px 0px 3px 6px rgba(148, 192, 249, .9), inset 0px 0px 0px 2px rgba(148, 192, 249, 0.8)',
    borderRadius: '1px',
  },
});

export default Input;
