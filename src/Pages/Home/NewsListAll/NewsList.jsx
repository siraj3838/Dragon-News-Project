import { useEffect, useState } from "react";
import News from "./News/News";

const NewsList = () => {
    const [newsData, setNewsData] = useState([])
    useEffect(()=>{
        fetch('/public/news.json')
        .then(res => res.json())
        .then(data => setNewsData(data))
    },[])
    return (
        <div>
            {
                newsData.map(oneNews => <News key={oneNews.id} oneNews={oneNews}></News>)
            }
        </div>
    );
};

export default NewsList;