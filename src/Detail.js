
function Detail() {
    return (
        <div className="home-page w-full">

            <div className="sticky top-0 bg-white z-20">
                <div className='flex items-center border-b-1 py-4 border-gray-200 bg-white relative'>
                    <a href={`${process.env.PUBLIC_URL}/#/`} >
                        <img className='h-5 ml-2 absolute top-5' src={`${process.env.PUBLIC_URL}/images/arrow-left.svg`} alt='/'></img>
                    </a>
                    <div className='font-semibold text-lg mx-auto'>Details</div>
                </div>
            </div>
            <img className="w-full" alt="/" src={`${process.env.PUBLIC_URL}/images/detail.png`} ></img>

            <div className="sticky bottom-0 ">
                <a href={`${process.env.PUBLIC_URL}/#/about`}><img className="w-full h-auto border-t-1 border-gray-200 bg-white" src={`${process.env.PUBLIC_URL}/images/tabs.png`} alt='/'></img></a>
            </div>

        </div>
    );
}

export default Detail;
