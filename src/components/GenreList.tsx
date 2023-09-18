import { useContext } from "react";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { GameQueryContext } from "../App";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  const { gameQuery, setGameQuery } = useContext(GameQueryContext);

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  gameQuery.genre?.id === genre.id ? "bold" : "normal"
                }
                colorScheme={
                  gameQuery.genre?.id === genre.id ? "green" : "white"
                }
                onClick={() => setGameQuery({ ...gameQuery, genre: genre })}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
