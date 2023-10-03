import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center mt-16 mb-8'>
            <div className="flex justify-center">
            <img src="https://i.ibb.co/V2b2k75/logo.png" alt="" />
            </div>
            <p className="text-lg mt-5 mb-3">Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;