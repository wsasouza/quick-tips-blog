import styled from 'styled-components'

export const HomeContainer = styled.main`
  h1 {
    color: ${(props) => props.theme['yellow-700']};
  }

  span {
    color: ${(props) => props.theme['purple-300']};
  }
`
