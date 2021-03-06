import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';


import { Header } from '@/components/Header';
import * as S from './styles';

import { useAuth } from '@/contexts/auth';

export const LoginTemplate = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const { email } = e.currentTarget

    if  (email.value.trim().length === 0) {
      return alert('Campo email é obrigatório')
    }

    login(email.value)
  
    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>
          Login
        </title>
      </Head>

      <Header />
      <S.Container>
        <S.Content>
          <S.LoginPoke>
            <S.BgPokeball 
            src="/image/pokeball.svg" 
            />
          <S.FormLogin onSubmit={handleSubmit}>
          <S.InputLogin
            type="email"
            name='email'
            placeholder='Seu melhor e-mail' 
            />
            <S.ButtonLogin>
              Acessar
            </S.ButtonLogin>
            </S.FormLogin>
          </S.LoginPoke>
        </S.Content>
      </S.Container>
    </>
  )
}
