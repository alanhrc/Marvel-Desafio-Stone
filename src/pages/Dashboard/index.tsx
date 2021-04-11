import React, { useState } from 'react';
import 'react-day-picker/lib/style.css';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import noAvatarImg from '../../assets/no-avatar.png';
import { Content } from '../../components/Content';
import { SideBar } from '../../components/SideBar';
import { useAuth } from '../../hooks/auth';
import { Container, Header, HeaderContent, Profile } from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const [selectedGenreId, setSelectedGenreId] = useState('Characters');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleNavigation(route: string, title: string) {
    setSelectedGenreId(title);
    // alert(route);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            {user.avatar_url ? (
              <img src={user.avatar_url} alt={user.name} />
            ) : (
              <img src={noAvatarImg} alt="Sem imagem no avatar" />
            )}

            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar
          handleNavigation={handleNavigation}
          selectedGenreId={selectedGenreId}
        />
        <Content selectedGenreId={selectedGenreId} />
      </div>
    </Container>
  );
};

export default Dashboard;
