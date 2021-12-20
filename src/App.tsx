import {client} from 'Apollo';
import Pages from './pages';
import {GlobalStyle} from './styles';
import {ApolloProvider} from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
}

export default App;
