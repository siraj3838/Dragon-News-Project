import moment from 'moment';
const EditCard = ({ card }) => {
    const { title, image } = card || {}
    console.log(card)
    return (
        <div>
            <img className="w-full h-40" src={image} alt="" />
            <h2 className="text-xl font-semibold my-5">{title}</h2>
            <div className='flex gap-3 items-center'>
            <img src="https://i.ibb.co/FbdjSrr/Frame.png" alt="" />
                <p className="text-xl">{moment().format("MMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default EditCard;