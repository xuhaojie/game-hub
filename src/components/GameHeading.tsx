import { Heading } from "@chakra-ui/react";
import { GameQueryContext, GameQueryContextType } from "../App";
import { useContext } from "react";

const GameHeading = () => {
  const { gameQuery } = useContext<GameQueryContextType>(GameQueryContext);
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
