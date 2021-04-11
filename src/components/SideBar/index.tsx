import React from 'react';
import { Award } from 'react-feather';
import { ButtonsSideBar } from '../ButtonSideBar';
import { Nav } from './styles';

interface SideBarProps {
  selectedGenreId: string;
  handleNavigation: (route: string, title: string) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function SideBar({ selectedGenreId, handleNavigation }: SideBarProps) {
  return (
    <Nav>
      <div className="buttons-container">
        <ButtonsSideBar
          title="Characters"
          icon={Award}
          onClick={() => handleNavigation('/dashboard', 'Characters')}
          selected={selectedGenreId === 'Characters'}
        />
        <ButtonsSideBar
          title="Comics"
          icon={Award}
          onClick={() => handleNavigation('/comics', 'Comics')}
          selected={selectedGenreId === 'Comics'}
        />
        <ButtonsSideBar
          title="Favorites"
          icon={Award}
          onClick={() => handleNavigation('/favorites', 'Favorites')}
          selected={selectedGenreId === 'Favorites'}
        />        
      </div>
    </Nav>
  );
}
