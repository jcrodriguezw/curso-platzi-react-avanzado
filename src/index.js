import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './App'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-one-amber.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''

    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Context.Provider>
      <App />
    </Context.Provider>
  </ApolloProvider>,
  document.getElementById('app'))
