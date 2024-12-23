import { NavLink } from "react-router";

export default function HomeContent() {
    return (
        <div>
        <div className=" w-full flex flex-col justify-center items-start min-h-[860px] mt-20 px-8 py-10 space-y-6 hero">
            <div className={'w-full flex py-8 px-2 sm:px-8'}>
                <div className={'w-full sm:w-2/3 h-full'}>

                    <h2 className={'w-full md:w-1/2 text-gray-50 text-7xl font-extrabold my-8 sm:my-10'}>Invest with Intelligence</h2>
                    <p className={'w-full md:w-1/2 text-gray-50 text-xl font-light pb-8'}>
                        Investing can be confusing or even scary. With our   
                    </p>

                    <ul className={'w-full text-gray-50 text-base my-2'}>
                        <li className={'py-2'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-8 h-8 mr-2">
                                <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>

                            According to the National Cyber Security Alliance, <span className={'text-yellow-500'}>60% of companies go out of business within six months</span> after falling victim to a data breach.</li>
                        <li className={'py-2'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-8 h-8 mr-2">
                                <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                            Keeper Security’s 2019 SMB Cyberthreat Study found that <span className={'text-yellow-500'}>66% of senior decision-makers at small businesses falsely believed</span> they were unlikely to be targeted by criminals.</li>
                        <li className={'py-2'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-8 h-8 mr-2">
                                <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                            Ransomware attacks happen every 2 seconds.</li>
                        <li className={'py-2'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-8 h-8 mr-2">
                                <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                            Personal health information seems 10 to 40 times more valuable on the black market than financial information.</li>
                    </ul>
                </div>
            </div>
            <div className={'w-full sm:w-2/3 sm:mt-5 flex items-start mb-10 sm:mb-5 px-8'}>
                    <NavLink to={'/register'} className={'rounded-full py-4 px-10 text-gray-50 font-semibold text-xl bg-gradient-to-r from-yellow-700 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 transition'}>
                        Get Started
                    </NavLink>
            </div>
        </div>

        <div className="bg-gray-200 p-4 px-8 text-gray-50 w-full min-h-[500px] flex flex-wrap justify-center sm:justify-evenly items-center">

            <div className={'w-full md:w-1/2 flex flex-col justify-center sm:px-4'}>
            <h2 className="text-2xl font-extrabold sm:text-3xl text-slate-900 w-full mb-6">Best Defence is an expert Offence</h2>
            <p className={'w-full my-4 text-5xl text-yellow-500 font-semibold'}>
                We live and breathe security so you don't have to.
            </p>
            </div>


            <p className="sm:mt-4 text-slate-900 w-full md:w-1/2 leading-relaxed text-lg sm:text-2xl text-left sm:text-center  sm:px-8">
                We empower small businesses by providing exceptional cybersecurity services. We believe that every individual and business, regardless of size, should have access to top-notch cybersecurity solutions to protect their valuable assets. Through offensive security, red teaming, and security auditing, we ensure that businesses are prepared for any potential threats and vulnerabilities. We are dedicated to building a safe and secure digital environment, enabling our clients to focus on their core competencies and achieve their business goals with peace of mind.
            </p>

        </div>
        <section className={'bg-gray-200 py-12 px-8 flex flex-wrap-reverse'}>
            <div className={'w-full md:w-1/2 flex flex-col justify-center px-8'}>
                <p className={'w-full text-slate-900 text-2xl'}>
                    The next evolution in reconnaissance. <span className={'text-yellow-600'}>RavenGraph</span> is an open source intelligence (OSINT) tool that utilizes artificial intelligence (AI) to automate the collection and analysis of data from the web. <span className={'text-yellow-600'}>RavenGraph</span> is a powerful tool that can be used to gather information on individuals, organizations, and more. RavenGraph is a powerful tool that can be used to gather information on individuals, organizations, and more.
                </p>
                <p className={'w-full text-slate-500 text-xl font-light italic py-12'}>
                    coming soon...
                </p>
            </div>
            <div className={'w-full md:w-1/2 flex justify-center items-start h-full'}>

                <img
                    src={'/ravengraph_graphic_1.svg'}
                    alt="RavenGraph"
                    className={'w-full h-[600px]'}
                />
            </div>

        </section>
        <section className="bg-gradient-to-r from-[#131e43] to-[#080c1b] text-gray-50 py-24 w-full min-h-[1200px] flex flex-col justify-center">
            <div className={'w-full flex flex-col justify-center items-center my-4 py-12'}>
                <h2 className={'text-3xl font-light text-yellow-500 px-8 sm:px-20'}>As cybercriminals get smarter and more active, business and consumers must match their evolution or get left in the dust.</h2>
            </div>
            <div className={'w-full flex flex-col justify-center items-center mt-6 mb-2 py-8'}>
                <h2 className={'text-3xl text-gray-200 font-semibold'}>Features</h2>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full justify-items-center ">
                <div
                    className="flex flex-col py-16 px-8 justify-center w-4/5 text-gray-200 bg-gradient-to-br from-slate-950 from-60% via-slate-900 via-10% to-slate-900 rounded-xl shadow-xl hover:shadow-2xl transition my-10"

                >

                <h2 className="mt-4 text-3xl font-semibold mb-6 h-1/5 text-yellow-400/90">Application Security</h2>
                <p className=" text-lg h-3/5">
                    Strengthen your application security with our comprehensive penetration testing services. Identify vulnerabilities in your applications, meet compliance and we will provide recommendations for remediation.
                </p>
                    <NavLink to={'/services/cyber-security'} className={'font-semibold hover:underline hover:underline-offset-8 hover:decoration-yellow-600 transition mt-8'}>
                        Learn More
                    </NavLink>
                </div>
                <div
                    className="flex flex-col py-16 px-8 justify-center w-4/5 text-gray-200 bg-gradient-to-br from-slate-950 from-60% via-slate-900 via-10% to-slate-900 rounded-xl shadow-xl hover:shadow-2xl transition my-10"
                >
                    <h2 className="mt-4 text-3xl font-semibold mb-6 h-1/5 text-yellow-400/90">IoT Security</h2>
                    <p className="text-lg h-3/5">
                        Ensure the security of your IoT devices. Don't let your physical security fail.
                    </p>
                    <NavLink to={'/services/cyber-security'} className={'font-semibold hover:underline hover:underline-offset-8 hover:decoration-yellow-600 transition mt-8'}>
                            Learn More
                        </NavLink>
                </div>
                <div
                    className="flex flex-col py-16 px-8 justify-center w-4/5 text-gray-200 bg-gradient-to-br from-slate-950 from-60% via-slate-900 via-10% to-slate-900 rounded-xl shadow-xl hover:shadow-2xl transition my-10"
                >
                    <h2 className="mt-4 text-3xl font-semibold mb-6 h-1/5 text-yellow-400/90">Network Security</h2>
                    <p className="mt-1 text-lg">
                      Find gaps in your network security before the bad guys do. We can help you identify and remediate vulnerabilities in your network.
                  </p>
                  <NavLink to={'/services/cyber-security'} className={'font-semibold hover:underline hover:underline-offset-8 hover:decoration-yellow-600 transition mt-8'}>
                      Learn More
                  </NavLink>
              </div>
              <div
                  className="flex flex-col py-16 px-8 justify-center w-4/5 text-gray-200 bg-gradient-to-br from-slate-950 from-60% via-slate-900 via-10% to-slate-900 rounded-xl shadow-xl hover:shadow-2xl transition my-10"
              >
                  <h2 className="mt-4 text-3xl font-semibold mb-6 h-1/5 text-yellow-400/90">Individual and Estate Security</h2>
                  <p className="mt-1 text-lg">
                      Keep the personal information of you and your family safe and secure. We can discover threats and vulnerabilities in your digital life and help you remediate them.
                  </p>
                  <NavLink to={'/services/cyber-security'} className={'font-semibold hover:underline hover:underline-offset-8 hover:decoration-yellow-600 transition mt-8'}>
                      Learn More
                  </NavLink>
              </div>
        </div>
      </section>
      <section
          className={'bg-gradient-to-r from-[#131e43] to-[#080c1b] w-full min-h-[400px] flex flex-col items-center py-8 sm:py-28 space-y-3 justify-center items-center'}
      >
        <div className={'w-full sm:w-1/2 py-4 sm:py-8 flex flex-col justify-center items-center text-center'}>
            <h2 className="text-4xl font-bold text-white md:text-5xl w-full">
              Ready to get started?
            </h2>
            <h2 className="text-4xl font-bold text-yellow-400 md:text-5xl w-full">
                We're here to help.
            </h2>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-4">
            <NavLink to={'/contact-us'} className={'rounded-full py-4 px-10 text-gray-50 font-semibold text-xl bg-gradient-to-r from-yellow-700 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 transition'}>
                Get Started
            </NavLink>
        </div>
      </section>
    </div>
)
}