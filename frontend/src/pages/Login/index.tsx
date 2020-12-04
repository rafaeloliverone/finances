import React, { useContext, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock } from 'react-icons/fi';
import Switch from "react-switch";
import { ThemeContext } from 'styled-components'

import logo from '../../assets/investing.svg';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { Container, Main } from './styles';
// import dark from '../../theme/dark';

interface SignInFormData {
  email: string;
  password: string;
}

interface Props {
  toggleTheme(): void;
}

const Login: React.FC<Props> = ({ toggleTheme }) => {
  const formRef = useRef<FormHandles>(null);
  const { colors, title } = useContext(ThemeContext);

  const handleSubmit = (data: SignInFormData) => {
    console.log(data)
  }


  return (
    <>
      <Container>
        <img src={logo} width='500px' alt="logo" />
        <Main>
          <Switch
            checked={title === 'dark'}
            onChange={toggleTheme}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={colors.primary}
            onColor={colors.secondary}

          />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input icon={FiMail} name="email" placeholder="Email" />
            <Input icon={FiLock} name="password" placeholder="Password" type="password" />

            <Button type="submit">Entrar</Button>
          </Form>
        </Main>
      </Container>
    </>
  )

}

export default Login;
