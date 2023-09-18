import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import { createContext, useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

type SetGameQuery = (gameQuery: GameQuery) => void;
export interface GameQueryContextType {
  gameQuery: GameQuery;
  setGameQuery: SetGameQuery;
}

export const GameQueryContext = createContext<GameQueryContextType>({
  gameQuery: {} as GameQuery,
  setGameQuery: null as unknown as SetGameQuery,
});

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div>
      <GameQueryContext.Provider value={{ gameQuery, setGameQuery }}>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`, //1024px
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList />
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box paddingLeft={2}>
              <GameHeading />
              <HStack spacing={5} marginBottom={5}>
                <PlatformSelector />
                <SortSelector />
              </HStack>
            </Box>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </GameQueryContext.Provider>
    </div>
  );
}

export default App;
