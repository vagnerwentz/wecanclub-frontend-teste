import React from 'react';
import { Form } from '@unform/web';
import { FiMail, FiLock } from 'react-icons/fi';
import { Carousel } from 'react-bootstrap';

/* Images */
import logo from '../../assets/logo.webp';
import bannerOne from '../../assets/banner1.png';
import bannerTwo from '../../assets/banner2.png';
import bannerThree from '../../assets/banner3.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

/* Styles */
import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="WeCanClub" />

        <h1> Acessar </h1>

        <Form onSubmit={handleSubmit}>
          <Input name="login" icon={FiMail} placeholder="Login" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">
            <a href="/dashboard">Entrar</a>
          </Button>

          <a href="forgot">Esqueci a senha</a>
        </Form>

        <hr />

        <h1>Está tendo dificuldades?</h1>

        <button type="submit">AJUDA</button>
      </Content>
      <h1>Condições exclusivas</h1>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae
        mauris sed purus ultricies tincidunt vitae eu libero. Maecenas euismod
        arcu a dolor tincidunt.
      </span>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerOne} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block-two w-100"
            src={bannerTwo}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block-three w-100"
            src={bannerThree}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default SignIn;
