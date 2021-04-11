import React from 'react';
import { Info, Star } from 'react-feather';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { Container } from './styles';

interface ComicProps {
  user_id?: string;
  code: number;
  title: string;
  thumbnail_path: string;
  thumbnail_extension: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function ComicCard(props: ComicProps) {
  const { user } = useAuth()
  const { addToast } = useToast()
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleMoreInfo(id: number) {
    alert(id);
  }

  async function handleFavoriteComic() {
    const favoriteComic: ComicProps = {
      user_id: user.id,
      code: props.code,
      title: props.title,
      thumbnail_path: props.thumbnail_path,
      thumbnail_extension: props.thumbnail_extension
    }
        
    await api.post('/comics', favoriteComic)

    addToast({
      type: 'success',
      title: 'Comic Favorites',
      description: 'Comic add in you favorites',
    });
  }
  return (
    <Container>
      <div className="movie-card">
        <img src={`${props.thumbnail_path}.${props.thumbnail_extension}`} alt={props.title} />

        <div>
          <div className="movie-info">
              <span>{`${props.title}`}</span>
            <div className="meta">
              <div>
                <Star onClick={() => handleFavoriteComic()} />
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
