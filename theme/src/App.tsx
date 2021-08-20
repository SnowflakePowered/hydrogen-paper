import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  useQuery,
  gql
} from "@apollo/client";
import { Games } from 'support/Api';

const GAMES = gql`
  query Games($cursor: String) {
    games(first: 10, after: $cursor) {
      edges {
        node {
          id,
          record {
            gameId,
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

const App = () => {
  const { data, loading, fetchMore } = useQuery<Games>(GAMES);
  if (loading) return <div>Loading</div>;
  const nodes = data?.games?.edges?.map((edge) => edge.node!!);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {
            nodes?.map(g => <div>{g.record?.gameId}</div>)
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         
        </a>
      </header>
    </div>
  );
}

export default App;
