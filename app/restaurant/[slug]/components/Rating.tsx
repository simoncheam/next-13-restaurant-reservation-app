import { Review } from "@prisma/client"
import calculateReviewRatingAverage from "../../../../utilities/calculateReviewRatingAverage"
import Stars from "../../../components/Stars"

const Rating = ({reviews}:{reviews: Review[]}) => {



  return (
    <div className='flex items-end'>
    <div className='ratings mt-2 flex items-center'>
      <Stars reviews={reviews} />
      {/* calculates X / 5 */}
      <p className='text-reg ml-3'>{calculateReviewRatingAverage(reviews).toFixed(1)}</p>
    </div>
    <div>
      {/* <p className='text-reg ml-3'>300 reviews</p> */}
      <p className='text-reg ml-3'>{reviews.length} review{reviews.length===1?'':'s'}</p>
    </div>
  </div>
  )
}
export default Rating