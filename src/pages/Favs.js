import React from 'react'

import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout title='tus favoritos' subtitle='aqui encontraras tu favoritos'>
      <FavsWithQuery />
    </Layout>
  )
}
