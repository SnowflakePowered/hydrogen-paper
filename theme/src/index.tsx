import ReactDOM from 'react-dom';
import './index.css';
import './scrollbar.css';
import "@fontsource/roboto";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: relayStylePagination()
      }
    }
  }
})

persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
}).then(() => {
    const client = new ApolloClient({
      uri: 'http://localhost:9797/graphql',
      cache
    });
    
    ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root'));
});




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
