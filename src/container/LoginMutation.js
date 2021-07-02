import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

export const LOGIN = gql`
  mutation LOGIN($input: UserCredentials!) {
    login(input: $input)
  }
`
export const LoginMutation = ({ children }) => {
  return (
    <Mutation mutation={LOGIN}>
      {children}
    </Mutation>
  )
}
