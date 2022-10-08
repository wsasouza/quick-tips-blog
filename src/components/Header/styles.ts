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
    min-width: 30rem;
    border-radius: 6px 0 0 6px;
    font-size: ${(props) => props.theme.fontSizes['text-m']};
    color: ${(props) => props.theme.colors['base-text']};
    padding: 1.5rem;
    background: ${(props) => props.theme.colors['base-input']};
    z-index: 1;

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors['blue-action']};
    }
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 0;
  margin-left: -0.5rem;
  cursor: pointer;
  height: 2rem;
  padding: 1.5rem 1rem;
  border-radius: 0 6px 6px 0;
  background: ${(props) => props.theme.colors['base-input']};
  color: ${(props) => props.theme.colors['blue-action']};

  &:hover {
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
  padding: 0.5rem 2rem;
  border: 1px solid ${(props) => props.theme.colors['blue-action']};
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-input']};
  color: ${(props) => props.theme.colors['blue-action']};

  &:hover {
    background: ${(props) => props.theme.colors['base-background']};

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
