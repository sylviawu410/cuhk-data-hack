
function TopMatch() {
  return (
    <div className="match-page w-full">
      <div className="sticky top-0 bg-white z-20">
        <div className='flex items-center border-b-1 py-4 border-gray-200 bg-white relative'>
          <a href={`${process.env.PUBLIC_URL}/#/`} >
            <img className='h-5 ml-2 absolute top-5' src={`${process.env.PUBLIC_URL}/images/arrow-left.svg`} alt='/'></img>
          </a>
          <div className='font-semibold text-lg mx-auto'>Top Matches</div>
        </div>
      </div>
      <div className="w-9/10 flex my-5 items-center mx-auto justify-between">
        <div className="font-semibold text-[17px] leading-3">Suggested</div>
        <img className="ml-3" src={`${process.env.PUBLIC_URL}/images/right-arrow.svg`} alt='arrow'></img>
      </div>
      <div className='ml-5 max-h-[239px] flex justify-evenly items-start mt-5 overflow-hidden gap-4'>
        <img className="w-40 h-auto" src={`${process.env.PUBLIC_URL}/images/match1.png`} alt='/'></img>
        <img className="w-40 h-auto" src={`${process.env.PUBLIC_URL}/images/match2.png`} alt='/'></img>
        <img className="h-[236px]" src={`${process.env.PUBLIC_URL}/images/match3.png`} alt='/'></img>
      </div>
      <div className="w-9/10 flex mb-5 mt-9 items-center mx-auto justify-between">
        <div className="font-semibold text-[17px] leading-3">Near Me</div>
        <img className="ml-3" src={`${process.env.PUBLIC_URL}/images/right-arrow.svg`} alt='arrow'></img>
      </div>
      <div className='ml-5 max-h-[239px] flex justify-evenly items-start mt-5 overflow-hidden gap-4'>
        <img className="w-40 h-auto" src={`${process.env.PUBLIC_URL}/images/dog1.png`} alt='/'></img>
        <img className="w-40 h-auto" src={`${process.env.PUBLIC_URL}/images/dog2.png`} alt='/'></img>
        <img className="h-[236px]" src={`${process.env.PUBLIC_URL}/images/dog3.png`} alt='/'></img>
      </div>
      <div className="w-9/10 flex mb-5 mt-9 items-center mx-auto justify-between">
        <div className="font-semibold text-[17px] leading-3">New Joiners</div>
        <img className="ml-3" src={`${process.env.PUBLIC_URL}/images/right-arrow.svg`} alt='arrow'></img>
      </div>
      <div className='ml-5 max-h-[115px] flex justify-evenly items-start mt-5 overflow-hidden gap-4'>
        <img className="w-40 h-auto" src={`${process.env.PUBLIC_URL}/images/dog4.png`} alt='/'></img>
        <img className="w-40 h-auto" src={`${process.env.PUBLIC_URL}/images/dog5.png`} alt='/'></img>
        <img className="h-[115px]" src={`${process.env.PUBLIC_URL}/images/dog6.png`} alt='/'></img>
      </div>
      <div className="sticky bottom-0 ">
        <a href={`${process.env.PUBLIC_URL}/#/about`}><img className="w-full h-auto border-t-1 border-gray-200 bg-white" src={`${process.env.PUBLIC_URL}/images/tabs.png`} alt='/'></img></a>
      </div>
    </div>
  );
}

export default TopMatch;
