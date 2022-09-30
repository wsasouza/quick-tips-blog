import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 200vh;
`

export const Header = styled.header`
  width: 100%;
  max-width: 80rem;
  padding: 0 1rem;
  height: 120px;
  background: ${(props) => props.theme['yellow-800']};
  margin: 0 auto;
`
