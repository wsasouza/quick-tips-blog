import Link from 'next/link'
import Image from 'next/future/image'
import logoImg from '../../assets/logo.svg'
import { MagnifyingGlass } from 'phosphor-react'
import { Github } from '@icons-pack/react-simple-icons'
import {
  GithubButton,
  HeaderContainer,
  SearchButton,
  SearchContainer,
} from './styles'

interface HeaderProps {
  scroll: boolean
}

export function Header({ scroll }: HeaderProps) {
  return (
    <HeaderContainer scroll={scroll}>
      <nav>
        <Link href="/">
          <Image src={logoImg} alt="logotipo" width={130} />
        </Link>
        <SearchContainer>
          <input type="text" />
          <SearchButton>
            <MagnifyingGlass size={16} weight="bold" />
            Pesquisar
          </SearchButton>
        </SearchContainer>
        <GithubButton>
          <Github size={22} />
          Entrar
        </GithubButton>
      </nav>
    </HeaderContainer>
  )
}
