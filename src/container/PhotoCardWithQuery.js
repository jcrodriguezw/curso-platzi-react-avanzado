import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhotos($id:ID!){
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data = {} }) => {
  if (loading) return <p>loading...</p>
  if (error) return <p>Error!</p>

  const { photo = {} } = data

  return <PhotoCard {...photo} />
}

export function PhotoCardWithQuery ({ id }) {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  )
}
