function About() {
    return (
        <div>
            <img className="w-full" src={`${process.env.PUBLIC_URL}/images/StatusBar.png`} alt="status"></img>
            <div className='flex border-b-1 py-4 border-gray-200'>
                <a href="http://localhost:3000/"><img className='ml-2 h-7' src={`${process.env.PUBLIC_URL}/images/arrow-left.svg`} alt='/'></img></a>
                <div className='font-semibold text-xl ml-30 '>About Us</div>
            </div>
            <div className="w-9/10 mx-auto">
                <div className="flex gap-3 mt-5">
                    <img className="w-45 h-auto" src={`${process.env.PUBLIC_URL}/images/bg1.png`} alt='/'></img>
                    <img className="w-45 h-auto" src={`${process.env.PUBLIC_URL}/images/bg2.png`} alt='/'></img>
                </div>
                <div className="mt-4">PawPals was founded by 5 passionate students longing to contribute to the community in 2025. Through the collaboration with local dog shelters and volunteering sites, we provide a mutually beneficial relationship for the public to enjoy genuine companionship, while reinforcing the effects of social good simultaneously. In PawPals, we welcome everyone and anyone to utilize our services, make social impacts, and enhance your personal well-being, because everyone deserves it!</div>
                <button type="button" className=" mt-3 w-full text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 h-[35px] ">More About PawPals</button>
                <img className="my-5" src={`${process.env.PUBLIC_URL}/images/footprints.png`} alt='/'></img>
                
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


        </div>
    );
}

export default About;