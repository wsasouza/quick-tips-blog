import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header<{ scroll: boolean }>`
  position: fixed;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  transition: 0.5s;
  background: ${(props) => props.theme.colors['base-profile']};

  ${(props) => props.scroll && scrollStyle};

  nav {
    display: flex;
    align-items: center;
    display: flex;
    max-width: 80rem;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }
`

const scrollStyle = css`
  background: rgba(31, 38, 135, 0.37);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  border: 1px solid rgba(10, 10, 10, 0.18);
  padding: 1rem 1rem;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    border: none;
    height: 2rem;
    min-width: 25rem;
    border-radius: 6px;
    font-size: ${(props) => props.theme.fontSizes['text-m']};
    color: ${(props) => props.theme.colors['base-text']};
    padding: 1.5rem;
    background: ${(props) => props.theme.colors['base-input']};
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 2px solid ${(props) => props.theme.colors['yellow-700']};
  cursor: pointer;
  height: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-900']};

  &:hover {
    background: ${(props) => props.theme['yellow-500']};
    font-weight: bold;

    svg {
      animation: icon 0.7s;
    }

    @keyframes icon {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1.3);
      }
    }
  }
`

export const GithubButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-700']};

  &:hover {
    background: ${(props) => props.theme['yellow-500']};

    svg {
      animation: icon 0.7s;
    }

    @keyframes icon {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1.3);
      }
    }
  }
`

export const UserLogoutButton = styled.button``
