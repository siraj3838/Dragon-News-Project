import { useEffect, useState } from "react";
import BottomCards from "./BottomCards";

const LeftBottomCard = () => {
    const [btnCard, setBtnCard] = useState([])
    useEffect(()=>{
        fetch('leftsidedata.json')
        .then(res => res.json())
        .then(data => setBtnCard(data))
    },[])
    return (
        <div>
            {
                btnCard.map(card => <BottomCards key={card.id} card={card}></BottomCards>)
            }
        </div>
    );
};

export default LeftBottomCard;