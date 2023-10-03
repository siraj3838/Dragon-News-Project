import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Editors from "./Editors/Editors";
import { useEffect, useState } from "react";

const NewsDetails = () => {
    const [perNews, setPerNews] = useState({})
    const { _id } = useParams();
    const newsData = useLoaderData();
    useEffect(() => {
        const isExist = newsData.find(news => news._id == _id)
        setPerNews(isExist)
    }, [_id, newsData])
    const { image_url, title, details } = perNews;
    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-4 gap-3">
                <div className="col-span-3">
                    <h2 className="text-xl font-semibold mb-5">Dragon News</h2>
                    <div>
                        <div className="p-7 border">
                            <img className="w-full" src={image_url} alt="" />
                            <h2 className="text-2xl font-bold my-4">{title}</h2>
                            <p className="text-[#706F6F] mb-8">{details}</p>
                            <Link to={'/'}><button className="px-6 py-3 bg-[#D72050] hover:bg-[#a51c41] text-white flex gap-1"><img src="https://i.ibb.co/3c254g6/Frame-4.png" alt="" /> All news in this category</button></Link>
                        </div>
                    </div>
                    <Editors></Editors>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;