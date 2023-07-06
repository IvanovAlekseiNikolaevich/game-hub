import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImages from "../services /api/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                {genre.name}
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImages(genre.image_background)}
                ></Image>
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  fontSize="lg"
                  variant={"link"}
                  onClick={() => onSelectedGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
