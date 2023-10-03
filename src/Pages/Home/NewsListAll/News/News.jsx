import { Link } from "react-router-dom";

const News = ({ oneNews }) => {
    const { _id, author, title, image_url, details, rating, total_view } = oneNews || {}
    return (
        <div className="rounded-lg mb-8 border">
            <div className="bg-[#F3F3F3] flex justify-between items-center p-5">
                <div className="flex gap-4">
                    <div>
                        <img className="w-10 rounded-full" src={author?.img} alt="" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold">{author?.name}</h2>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <img src="https://i.ibb.co/z4N2Qnb/Frame-1.png" alt="" />
                    <img src="https://i.ibb.co/LSyKf13/Frame-2.png" alt="" />
                </div>

            </div>
            <div className="p-5">
                <h2 className="text-xl font-bold text-[#403F3F] my-4">{title}</h2>
                <img className="w-full mb-8" src={image_url} alt="" />
                {
                    details.length > 250 ?
                        <>
                            <p className="text-[#706F6F]">{details.slice(0, 250)}...</p>
                            <Link to={`/newsdetails/${_id}`}><h2 className="text-[#FF8C47] text-base font-semibold mt-2">Read More</h2></Link>
                        </>
                        :
                        <p className="text-[#706F6F]">{details}</p>
                }

                <hr className="my-5" />
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        {rating.number}
                    </div>

                    <div className="flex items-center gap-3">
                        <img className="w-6" src="https://i.ibb.co/wSSGHHT/Frame-3.png" alt="" />
                        <p className="text-base font-medium text-[#706F6F]">{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;