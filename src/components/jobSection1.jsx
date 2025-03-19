'use client';

import Link from 'next/link';
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const AboutSection = () => {
    return (
        <section className="about-area rel z-1">
            <div className="container-fluid">
                <div className="about-four-wrap py-130 rpy-100">
                    <div className="container container-1290">
                        <div className="row gap-70 align-items-center">
                        <div className="col-lg-6">
                                <div className="about-four-content rmb-55 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-35">
                                        <span className="sub-title mb-15">Find your passion, find your purpose.</span>
                                        <h2>Join Our Team of Innovative People...</h2>
                                        <span className="sub-title mb-15">Find Jobs in Your Domain & Elevate your career with us</span>

                                    </div>
                                   
                                   
                                    
                                </div>
                            </div>
                            <div className="col-lg-6">
                                    <DotLottieReact
                                            src="https://lottie.host/98f54652-8fa5-4f2d-b489-99eb82ff18ac/xBUrt7FZxX.lottie"
                                        loop
                                        autoplay
                                    />               
                            </div>
                            {/* <div className="col-lg-6">
                                <div className="about-four-image wow fadeInUp delay-0-4s">
                                    <Image src="/assets/images/about/about-four.jpg" alt="About" width={600} height={400} />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
