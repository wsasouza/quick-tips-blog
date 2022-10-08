import Link from 'next/link'
import Image from 'next/future/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { MagnifyingGlass } from 'phosphor-react'
import { Github } from '@icons-pack/react-simple-icons'

import logoImg from '../../assets/logo.svg'
import detail from '../../assets/detail.svg'

import {
  GithubButton,
  HeaderContainer,
  SearchButton,
  SearchContainer,
  UserLogoutButton,
} from './styles'

interface HeaderProps {
  scroll: boolean
}

export function Header({ scroll }: HeaderProps) {
  const { data: session } = useSession()
  console.log(session)

  return (
    <HeaderContainer scroll={scroll}>
      <nav>
        <Link href="/">
          <Image src={logoImg} alt="logotipo" width={130} />
        </Link>
        <SearchContainer>
          <Image src={detail} alt="detail" width={40} />
          <input type="text" placeholder="Buscar conteúdo" />
          <SearchButton>
            <MagnifyingGlass size={16} weight="bold" />
            Pesquisar
          </SearchButton>
        </SearchContainer>
        {!session ? (
          <GithubButton onClick={() => signIn()}>
            <Github size={22} />
            Entrar
          </GithubButton>
        ) : (
          <UserLogoutButton onClick={() => signOut()}>
            <Image
              src={session.user?.image || ''}
              alt="logotipo"
              width={40}
              height={40}
            />
            Sair
          </UserLogoutButton>
        )}
      </nav>
    </HeaderContainer>
  )
}
