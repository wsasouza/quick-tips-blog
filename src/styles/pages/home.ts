import styled from 'styled-components'

export const HomeContainer = styled.main`
  h1 {
    margin-top: 1rem;
    color: ${(props) => props.theme['yellow-700']};
    font-size: 3rem;
  }

  span {
    color: ${(props) => props.theme['yellow-300']};
  }
`
