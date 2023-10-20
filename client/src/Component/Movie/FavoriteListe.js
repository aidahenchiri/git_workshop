import React from 'react'
import { useSelector } from 'react-redux'
import { favorite } from '../../JS/Action/Action'
import FavoriteCard from './FavoriteCard'

const FavoriteListe = () => {
  const user = useSelector((state)=>state.userReducer.user )
  console.log(user.favoris)
  return (
    <div>
                {user.favoris?.map(favorite =><FavoriteCard favorite={favorite} key={favorite._id} />)}

        
    </div>
  )
}

export default FavoriteListe