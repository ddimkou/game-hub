import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return <Badge>{score}</Badge>;
};

export default CriticScore;
