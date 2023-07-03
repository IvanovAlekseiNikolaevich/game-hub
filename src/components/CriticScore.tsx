import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "";

  return (
    <Badge fontSize="14px" borderRadius="4px" paddingX={2} colorScheme={color}>
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
