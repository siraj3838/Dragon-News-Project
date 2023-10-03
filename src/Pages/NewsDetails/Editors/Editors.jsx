import { useEffect, useState } from "react";
import EditCard from "./EditCard/EditCard";

const Editors = () => {
    const [editCards, setEditCards] = useState([]);
    useEffect(() => {
        fetch('/public/editors.json')
            .then(res => res.json())
            .then(data => setEditCards(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-semibold mt-8 mb-5">Editors Insight</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    editCards.map(card => <EditCard key={card.id} card={card}></EditCard>)
                }
            </div>
        </div>
    );
};

export default Editors;