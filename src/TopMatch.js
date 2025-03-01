
function TopMatch() {
  return (
    <div className="match-page w-full">
      <img className="w-full" src={`${process.env.PUBLIC_URL}/images/StatusBar.png`} alt="status"></img>
      <div className='flex border-b-1 py-4 border-gray-200'>
      <a href={`${process.env.PUBLIC_URL}`}><img className='ml-2 h-7' src={`${process.env.PUBLIC_URL}/images/arrow-left.svg`} alt='/'></img></a>
        <div className='font-semibold text-xl ml-18 '>Top Matches For You</div>
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
    </div>
  );
}

export default TopMatch;
