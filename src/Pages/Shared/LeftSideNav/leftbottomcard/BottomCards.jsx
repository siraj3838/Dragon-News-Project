import moment from 'moment';
const BottomCards = ({ card }) => {
    const { image, title, sports } = card || {}
    return (
        <div className='mb-4'>
            <div>
                <img className="max-w-[260px] md:max-w-[200px] lg:max-w-[260px] rounded-lg" src={image} alt="" />
            </div>
            <h2 className="my-4 text-xl font-semibold pr-36 md:pr-0 lg:pr-0">{title}</h2>
            <div className='flex md:flex-col lg:flex-row items-center gap-4'>
                <p className='text-lg font-semibold'>{sports}</p>
                <img src="https://i.ibb.co/FbdjSrr/Frame.png" alt="" />
                <p className="text-xl">{moment().format("MMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default BottomCards;