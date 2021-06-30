import React from 'react'

import { PhotoCard } from '../PhotoCard'

export function ListOfPhotoCards () {
  return (
    <ul>
      {
        [1, 2, 3, 4, 5, 5].map(id => <PhotoCard key={id} />)
      }
    </ul>
  )
}
