import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  useQuery,
  makeVar,
  useReactiveVar,
  gql
} from "@apollo/client";
import { Games, Platforms } from 'support/Api';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Framing from 'containers/Framing/Framing'
import SearchBar from 'components/SearchBar/SearchBar'
import Sidebar, { SelectableCollection, SelectablePlatform } from 'containers/Sidebar/Sidebar'
import TitleHeader from 'components/TitleHeader/TitleHeader'
import GamePlateGrid from 'components/GamePlateGrid/GamePlateGrid'
import GamePlate from 'components/GamePlate/GamePlate'

const GAMES = gql`
  query Games($cursor: String) {
    games(first: 10, after: $cursor) {
      edges {
        node {
          id,
          record {
            gameId,
            platformId,
            title,
            metadata {
              metadataId
            }
          }
        }
      }
      pageInfo {
         endCursor
         hasNextPage
      }
    }
  }
`;

const PLATFORMS = gql`
  query Platforms {
    stone {
      platforms {
        platformId,
        friendlyName,
        metadata {
          key
          value
        }
      }
    }
  }
`

const styles = createStyles({
  container: {
      height: 'calc(100vh)',
      width: '100vw'
  }
})


const SIZE = 200

const useStyles = makeStyles(styles)
const selectedPlatformVar = makeVar<string|undefined>(undefined);

const App = () => {
  const classes = useStyles()
  const { data, loading, fetchMore } = useQuery<Games>(GAMES);
  const { data: stonePlatforms, loading: platformsLoading, fetchMore: _ } = useQuery<Platforms>(PLATFORMS)
  const selectedPlatform = useReactiveVar(selectedPlatformVar);
  const platforms = stonePlatforms?.stone.platforms!;
  const selectedPlatformData = platforms?.filter(p => p.platformId === selectedPlatform)?.[0]
  console.log(selectedPlatformData)
  if (loading) return <div>Loading</div>;
  const games = data?.games?.edges?.map((edge) => edge.node!!);

  const sideBar =  
  <Sidebar 
      platforms={platforms}
      onPlatformSelect={platformId => selectedPlatformVar(platformId)}
      selectedPlatform={selectedPlatform}
  />

  const titleHeader = 
    <TitleHeader 
      title={selectedPlatformData ? selectedPlatformData.friendlyName : "No Platform Selected" } 
      subtitle={selectedPlatformData ? selectedPlatformData.metadata?.filter(({key}) => key === "platform_manufacturer")?.[0]?.value ?? "" : "Select a platform" }>
      <SearchBar />
    </TitleHeader>

const gamePlates = games?.filter(g => g.record?.platformId === selectedPlatform).map(g => {
  return (
  <GamePlate 
    title={g.record?.title ?? "No Title"}
    size={SIZE}
  />)
}) ?? []

  return (
    <div className={classes.container}>
        <Framing sidebar={
          platformsLoading ? <div>Loading</div> : sideBar} 
            titleHeader={titleHeader}>
       
            <GamePlateGrid size={SIZE}>
                {
                    gamePlates
                }
            </GamePlateGrid>
        </Framing>
    </div>
)
}

export default App;
