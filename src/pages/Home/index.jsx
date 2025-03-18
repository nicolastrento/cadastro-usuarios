import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'
import { User, Mail, Calendar, ArrowRight } from 'lucide-react';
import Button from '../../components/Button'

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  Background,
  IconWrapper,
  ButtonIcon,
} from "./styles"

const Home = () => {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const userData = {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    };
  
    console.log(userData); // Verifique os dados no console
  
    await api.post('/usuarios', userData)
      .then(response => {
        console.log('Usuário cadastrado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
      });

      navigate('/lista-de-usuarios')
  }

  return (

    <Background>
      <Container>
        <Form>
          <Title>Cadastrar Usuários</Title>

          <ContainerInputs>
            <div>
              <IconWrapper>
                <User size={20} />
              </IconWrapper>
              <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
            </div>

            <div>
              <IconWrapper>
                <Calendar size={20} />
              </IconWrapper>
              <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
            </div>

          </ContainerInputs>
          <div style={{ width: '100%' }}>
            <IconWrapper>
              <Mail size={20} />
            </IconWrapper>
            <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
          </div>

          <Button type='button' onClick={registerNewUser} theme="primary">
            Cadastrar
            <ButtonIcon>
              <ArrowRight size={20} />
            </ButtonIcon>
          </Button>
        </Form>

        <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Lista de Usuários</Button>
      </Container>
    </Background>
  )
}

export default Home
