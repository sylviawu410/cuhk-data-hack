function About() {
    return (
        <div>
            <div className="sticky top-0 bg-white z-20">
                <div className='flex items-center border-b-1 py-4 border-gray-200 bg-white relative'>
                    <a href={`${process.env.PUBLIC_URL}/#/`} >
                        <img className='h-5 ml-2 absolute top-5' src={`${process.env.PUBLIC_URL}/images/arrow-left.svg`} alt='/'></img>
                    </a>
                    <div className='font-semibold text-lg mx-auto'>About Us</div>
                </div>
            </div>
            <div className="w-9/10 mx-auto">
                <div className=" my-10">
                    <img className=" h-auto size-60 mx-auto" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='/'></img>
                </div>
                <div className="mt-4">Founded by 5 passionate students longing to contribute to the community in 2025, we provide a mutually beneficial relationship for the public to enjoy genuine companionship, while reinforcing the effects of social good simultaneously through the collaboration with local dog shelters and volunteering sites.</div>
                <a href={`${process.env.PUBLIC_URL}/#/`} ><button type="button" className=" mt-5 w-full text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 h-[35px] ">Explore PawPals</button></a>
                <img className="my-10" src={`${process.env.PUBLIC_URL}/images/heatmap.png`} alt='heatmap'></img>

                <div className="font-semibold text-2xl mt-9">Why Us?</div>

                <div className="font-semibold text-lg mt-9">The “Problem”</div>
                <div>
                    In Hong Kong, overcrowded shelters and a high stray dog population hinder effective animal welfare efforts. With only 14% of pet owners adopting from shelters, there is a need for innovative solutions to increase engagement with dogs in need.
                </div>
                <div className="font-semibold text-lg mt-9">Our Vision</div>
                <div>Our app aims to connect users with local shelters, allowing them to book playdates with dogs, promoting socialization, enhancing volunteer opportunities, and ultimately supporting adoption efforts.</div>
            </div>

            <div className="scroll-container  my-5">
                <div className="scroll-text">
                    <div className="scroll-item">
                        <img src={`${process.env.PUBLIC_URL}/images/org1.png`} alt="/"></img>
                    </div>
                    <div className="scroll-item">
                        <img src={`${process.env.PUBLIC_URL}/images/org2.png`} alt="/"></img>
                    </div>
                    <div className="scroll-item">
                        <img src={`${process.env.PUBLIC_URL}/images/org3.png`} alt="/"></img>
                    </div>
                    <div className="scroll-item">
                        <img src={`${process.env.PUBLIC_URL}/images/org4.png`} alt="/"></img>
                    </div>
                    <div className="scroll-item">
                        <img src={`${process.env.PUBLIC_URL}/images/org5.png`} alt="/"></img>
                    </div>
                    <div className="scroll-item">
                        <img src={`${process.env.PUBLIC_URL}/images/org6.png`} alt="/"></img>
                    </div>
                </div>
            </div>
            <div className="w-9/10 mx-auto">
                <div className="font-semibold text-2xl mt-9">What We Provide</div>
                <div className="font-semibold text-xl mt-5">Services</div>
                <div className="font-semibold text-blue-500">For Users...</div>
                <div className="ml-5">
                    <p><strong>Book Playdates: </strong>Schedule fun play sessions with dogs that top matches your profile!</p>
                    <p><strong>Social Good Opportunities: </strong>Contribute by participating in casual activities and show your support</p>
                    <p><strong>Community Engagement: </strong>Join events and activities</p>
                </div>
                <div className="font-semibold text-blue-500 mt-5">For Dog Shelters/ Volunteering Sites...</div>
                <div className="ml-5">
                    <p><strong>Manage Booking: </strong>Organize schedules for dogs</p>
                    <p><strong>External Opportunities: </strong> Join events and activities</p>
                </div>

                <div className="font-semibold text-xl mt-5">Functions</div>
                <div className="ml-5">
                    <p><strong>User-Friendly Interface: </strong> Simple and intuitive design for easy navigation</p>
                    <p><strong>Real-Time Availability:  </strong>Check and reserve time slots for playdates instantly</p>
                    <p><strong>Safety Features: </strong>Share experiences and help improve us with reviews</p>
                </div>



            </div>
            <div className="sticky bottom-0 ">
                <a href={`${process.env.PUBLIC_URL}/#/about`}><img className="w-full h-auto border-t-1 border-gray-200 bg-white" src={`${process.env.PUBLIC_URL}/images/tabs.png`} alt='/'></img></a>
            </div>


        </div>
    );
}

export default About;