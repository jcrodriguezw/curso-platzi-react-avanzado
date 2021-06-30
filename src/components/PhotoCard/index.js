import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import {
  ImgWrapper,
  Img,
  Button,
  Article
} from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const key = `like-${id}`
  const [show, element] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
      show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}
