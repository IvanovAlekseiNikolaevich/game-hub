import useGenres from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import getCroppedImages from "../services /api/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6];
  if (error) return null;
  return (
    <List>
      {isLoading &&
        skeleton.map((skeleton) => {
          return (
            <Stack paddingY={2}>
              <Skeleton height="30px" borderRadius={5} />
            </Stack>
          );
        })}
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              {genre.name}
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImages(genre.image_background)}
              ></Image>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
