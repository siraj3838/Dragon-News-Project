import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftBottomCard from "./leftbottomcard/LeftBottomCard";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-5">
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category => <NavLink
                    to={`/category/${category.id}`} 
                    className="block ml-4 text-xl font-semibold" 
                    key={category.id}
                    >{category.name}</NavLink>)
            }
            <LeftBottomCard></LeftBottomCard>
        </div>
    );
};

export default LeftSideNav;