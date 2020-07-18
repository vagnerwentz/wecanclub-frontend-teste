import React from 'react';
import { Link } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Profile } from './styles';

import logo from '../../assets/logo.webp';

const HeaderFix: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="WeCanClub" />

          <Profile>
            <img
              src="https://avatars3.githubusercontent.com/u/26815672?s=460&u=4523985fe51eda4eebc170221cb99aa0ae713c8a&v=4"
              alt="Vagner"
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>Vagner Wentz</strong>
            </div>
          </Profile>

          <Link to="/">
            <FiPower />
          </Link>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default HeaderFix;
