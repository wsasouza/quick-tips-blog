import { Circles } from 'react-loader-spinner'

import { SpinnerContainer } from './styles'

interface SpinnerProps {
  message: string
}

export function Spinner({ message }: SpinnerProps) {
  return (
    <SpinnerContainer>
      <Circles color="#3294f8" height={50} width={200} />
    </SpinnerContainer>
  )
}
