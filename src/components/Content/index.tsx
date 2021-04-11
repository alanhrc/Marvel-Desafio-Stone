import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import api from '../../services/api';
import {
  apiKey,
  apiMarvel,
  hash,
  limit,
  timestamp as ts
} from '../../services/apiMarvel';
import { ComicCard } from '../ComicCard';
import { MovieCard } from '../MovieCard';
import { Container, Header, Main } from './styles';

interface CharacterProps {
  code: number;
  name: string;
  description: string;
  thumbnail_path: string;
  thumbnail_extension: string;
  comics: number;
}

interface ComicsProps {
  code: number;
  title: string;
  thumbnail_path: string;
  thumbnail_extension: string;
}

interface ContentProps {
  selectedGenreId: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Content({ selectedGenreId }: ContentProps) {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [favoritecharacters, setFavoriteCharacters] = useState<CharacterProps[]>([]);
  const [comics, setComics] = useState<ComicsProps[]>([]);

  useEffect(() => {
    apiMarvel
      .get('/characters', {
        params: {
          ts,
          apikey: apiKey,
          hash,
          limit,
        },
      })
      .then((responseData) => {
        // console.log(responseData.data);
        const arrayResponse = Array.from(responseData.data.data.results);

        const charactersFound = arrayResponse.map((character: any) => {
          const characterFound: CharacterProps = {
            code: character.id,
            name: character.name,
            description: character.description,
            thumbnail_path: character.thumbnail.path,
            thumbnail_extension: character.thumbnail.extension,
            comics: character.comics.available,
          };

          return characterFound;
        });

        setCharacters(charactersFound);
        setLoading(false);
      });

    apiMarvel
      .get('/comics', {
        params: {
          ts,
          apikey: apiKey,
          hash,
          limit,
        },
      })
      .then((responseData) => {
        // console.log(responseData.data);
        const arrayResponse = Array.from(responseData.data.data.results);

        const comicsFound = arrayResponse.map((comic: any) => {
          const comicFound: ComicsProps = {
            code: comic.id,
            title: comic.title,
            thumbnail_path: comic.thumbnail.path,
            thumbnail_extension: comic.thumbnail.extension,
          };

          return comicFound;
        });

        setComics(comicsFound);
      });

      api.get<CharacterProps[]>('/characters')
        .then(response => setFavoriteCharacters(response.data))

      console.log('entrou novamene no effect')
  }, []);

  if (loading) {
    return (
      <Container>
        <Main
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ReactLoading
            height={700}
            width={450}
            type="spokes"
            color="#cecece"
          />
        </Main>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <span className="category">
          <span>{selectedGenreId}</span>
        </span>
      </Header>

      <Main>
        <div className="movies-list">
          {selectedGenreId === 'Favorites' &&
            favoritecharacters.map((character) => (
              <MovieCard
              key={character.code}
              code={character.code}
              name={character.name}
              description={character.description}
              thumbnail_path={character.thumbnail_path}
              thumbnail_extension={character.thumbnail_extension}
              comics={character.comics}
              />
            ))}

          {selectedGenreId === 'Comics' &&
            comics.map((comic) => (
              <ComicCard
                key={comic.code}
                code={comic.code}
                title={comic.title}
                thumbnail_path={comic.thumbnail_path}
                thumbnail_extension={comic.thumbnail_extension}
              />
            ))}

          {selectedGenreId === 'Characters' &&
            characters.map((character) => (
              <MovieCard
                key={character.code}
                code={character.code}
                name={character.name}
                description={character.description}
                thumbnail_path={character.thumbnail_path}
                thumbnail_extension={character.thumbnail_extension}
                comics={character.comics}
              />
            ))}
        </div>
      </Main>
    </Container>
  );
}
