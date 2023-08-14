import { useState } from "react"

export const useLike = () => {
    const [likes, setLikes] = useState([])

    const onClickLike = (gifId) => {
        const gifExist = likes.find((item) => item.id == gifId)
        if(!gifExist){
          const newLikeObj= {
            id: gifId,
            point: 1
          }
          setLikes([...likes, newLikeObj])
        } else {
          const upDateLikes = likes.map((item) =>{
            if(item.id == gifId){
              return {
                ... item, 
                point: item.point + 1
              }
            } 
            return item
          })
          setLikes(upDateLikes)
        } 
      }

      const totalLike = (gifId) => {
        const dataLike = likes.find((item) => item.id == gifId)
        return dataLike ? dataLike.point : 0
      }

    return {
        onClickLike: (value) => onClickLike(value),
        likes: likes, 
        totalLike: (value) => totalLike(value)
    }
}