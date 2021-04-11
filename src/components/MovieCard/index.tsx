import React from 'react';
import { Info, Star } from 'react-feather';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { Container } from './styles';

interface CharacterProps {
  user_id?: string;
  code: number;
  name: string;
  description: string;
  thumbnail_path: string;
  thumbnail_extension: string;
  comics?: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function MovieCard(props: CharacterProps) {
  const { user } = useAuth()
  const { addToast } = useToast()
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleMoreInfo(id: number) {
    alert(id);
  }

  async function handleFavoriteCharacter() {
    const favoriteCharacter: CharacterProps = {
      user_id: user.id,
      code: props.code,
      name: props.name,
      description: props.description,
      thumbnail_path: props.thumbnail_path,
      thumbnail_extension: props.thumbnail_extension
    }
        
    await api.post('/characters', favoriteCharacter)

    addToast({
      type: 'success',
      title: 'Character Favorites',
      description: 'Character add in you favorites',
    });
  }
  return (
    <Container>
      <div className="movie-card">
        <img src={`${props.thumbnail_path}.${props.thumbnail_extension}`} alt={props.name} />

        <div>
          <div className="movie-info">
            {props.comics ? (
              <span>{`${props.name} (${props.comics} Comics)`}</span>
            ) : (
              <span>{`${props.name}`}</span>
            )}
            <div className="meta">
              <div>
                <Star onClick={() => handleFavoriteCharacter()} />
              </div>

              <div>
                <Info onClick={() => handleMoreInfo(props.code)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
