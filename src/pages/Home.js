import React, { memo } from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

function HomePage ({ id }) {
  console.log('categoryId =>', id)
  return (
    <Layout title='tu app de fotos de mascotas' subtitle='con petgram puedes encontrar fotos de animales domésticos muy bonitos'>

      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}

export const Home = memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
