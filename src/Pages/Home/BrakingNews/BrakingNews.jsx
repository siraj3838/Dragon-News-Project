import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BrakingNews = () => {
    return (
        <div className="flex pl-4 pr-24 py-4 bg-[#F3F3F3]">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={130}>
                <Link className="text-xl font-semibold ml-2" to={'/'}>Match Highlights: Germany vs Spain — as it happened   !</Link>
                <Link className="text-xl font-semibold ml-2" to={'/'}>Match Highlights: Germany vs Spain — as it happened   !</Link>
                <Link className="text-xl font-semibold ml-2" to={'/'}>Match Highlights: Germany vs Spain — as it happened   !</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;