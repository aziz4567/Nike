import { reviews } from "../constants"
import ReviewCard from "../Components/ReviewCard"
function CustomerReviews(){
    return(
        <section className="max-container">
            <h3 className="font-sans text-center font-bold text-4xl">
                what our <span className="text-red-500">Customers</span> Say ?
            </h3>
            <p className="max-w-lg text-center text-slate-500 m-auto mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel voluptatibus </p>
            <div className="mt-24 flex  flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review)=>(
                    <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}></ReviewCard>
                ))}
            </div>
        </section>
    )
}
export default CustomerReviews