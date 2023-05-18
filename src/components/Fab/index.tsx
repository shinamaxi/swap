import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Color } from '../../theme/styled'

type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  showMessage?: boolean
}

const bg1: Color = '#1568E5'
const bg2: Color = '#FD3944'

const StyledButton = styled.button<StyledButtonProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: ${({ showMessage }) => (showMessage ? '18px' : '14px')};
  font-family: 'Inter', sans-serif;
  border-style: none;
  background-color: ${({ theme, showMessage }) => (showMessage ? bg1 : bg2)};
  color: white;
  border-radius: ${({ showMessage }) => (showMessage ? '25px' : '50%')};
  min-width: ${({ showMessage }) => (showMessage ? '140px' : '25px')};
  height: ${({ showMessage }) => (showMessage ? '70px' : '25px')};
  transition: all 0.05s ease-in;

  &::before {
    content: '';
    position: absolute;
    top: 85%;
    right: -3%;
    margin-top: -8px;
    border-style: solid;
    border-width: 14px 0 0px 24px;
    border-color: transparent transparent transparent ${({ theme, showMessage }) => (showMessage ? bg1 : bg2)};
    visibility: ${({ showMessage }) => (showMessage ? 'visible' : 'hidden')};
  }
`

export function FloatingActionButton({
  changeShowMessage,
  showMessage
}: {
  changeShowMessage: Function
  showMessage: boolean
}) {
  const handleClick = () => {
    if (showMessage) {
      const newWindow = window.open('https://t.me/mxcchatgpt_bot')
      if (newWindow) newWindow.opener = null
    } else {
      changeShowMessage(!showMessage)
    }
  }

  return (
    <StyledButton showMessage={showMessage} onClick={handleClick}>
      <span>{showMessage ? 'Need help ?' : '1'}</span>
    </StyledButton>
  )
}
