import React from 'react'

import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export function Detail ({ detailId }) {
  return (
    <PhotoCardWithQuery id={detailId} />
  )
}
