import {ApolloProvider} from '@apollo/client';
import {client} from 'Apollo';
import Pages from './pages';
import {GlobalStyle} from './styles';

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Pages />
      </ApolloProvider>
    </div>
  );
}

export default App;
