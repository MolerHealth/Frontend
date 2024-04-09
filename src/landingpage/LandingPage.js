import React from 'react';
import './LandingPage.css';
import image_main from './image-main.png';
import prescription from './prescription.png';
import medical_invoice from './medical-invoice.png'
import testimony from './testimony.png'

const LandingPage = () => {
    return (
    <main>
        <div className="content1">
            <p className="first"><span class="moler">Molerhealth</span>  Open Source Partner For Seamless Health 
                Management</p>
            <div className="second">
                <p>Discover a new level of healthcare empowerment with Molar health, a heartfelt and 
                    open-source Electronic Medical Records system crafted to place you firmly in command 
                    of your well-being.</p>
                <div className="login">
                    <p><a href="/login">Login</a></p>
                    <p><a href="/hiw">How it works</a></p>
                </div>
            </div>
        </div>
        
        <img src={image_main} className = "image-main" alt="Leonardo_Diffusion_XL_african_doctors_long_shot_looking_at_emr_1"/>
        
        <div class="content2">
            <p className="header">Unlock the Power of MolerHealth: Cutting-Edge<br/> Features for Comprehensive Health Management</p>
            <div className="grid">
                <div className="grid-item">
                    <p><img src={prescription} alt="" />E prescribing</p>
                    <p>Receive your prescriptions 
                        directly to your device, eliminating the need for paper hassles and saving you time.</p>
                </div>
                <div className="grid-item">
                    <p><img src={medical_invoice} alt="" />CMS Reporting</p>
                    <p>Access comprehensive reports on your medical history, 
                        treatment progress, and wellness trends, empowering you with a 360-degree view of your health.</p>
                </div>
                <div className="grid-item">
                    <p><img src={prescription} alt="" />E prescribing</p>
                    <p>Receive your prescriptions 
                        directly to your device, eliminating the need for paper hassles and saving you time.</p>
                </div>
                <div className="grid-item">
                    <p><img src={prescription} alt="" />E prescribing</p>
                    <p>Receive your prescriptions 
                        directly to your device, eliminating the need for paper hassles and saving you time.</p>
                </div>
                <div className="grid-item">
                    <p><img src={prescription} alt="" />E prescribing</p>
                    <p>Receive your prescriptions 
                        directly to your device, eliminating the need for paper hassles and saving you time.</p>
                </div>
            </div>
        </div>
        <div className="content3">
            <p>We are Open Source</p>
            <p>MolerHealth is an innovative initiative striving to revolutionize healthcare in Nigeria through an open-source Electronic Health Records (EHR) application. Our vision is a future marked by accessible and accurate healthcare, addressing the critical issue of disease misdiagnosis. We empower individuals with a secure platform for comprehensive health record management, ensuring continuity of care. By equipping healthcare providers with accurate patient profiles and fostering collaboration through secure messaging, MolerHealth aims to reduce misdiagnoses, drive innovation, and build a community-centric 
                healthcare ecosystem. Join us in transforming healthcare and creating a healthier future for all.</p>
            <p>Contact us now</p>
        </div>
        <div className="content4">
            <p>Testimonials</p>
            <p>We are Trusted Across Africa</p>
            <div className="testimony">
                <img src={testimony} alt=""/>
                <p>Tyler imeh</p>
                <p>"Discovering Molerhealth has been life-changing. The detailed reports and personalized insights have empowered me to take control of my health like never before. It's not just a record 
                    system; it's my proactive health ally. Highly recommended!"</p>
            </div>
            <div className="testimony">
                <img src={testimony} alt=""/>
                <p>Susan Thompson</p>
                <p>"The secure messaging feature on MolerHealth has transformed how our healthcare team communicates. It's efficient, secure, and has greatly improved the coordination of 
                    patient care. A vital tool for modern healthcare practices."</p>
            </div>
            <div className="testimony">
                <img src={testimony} alt=""/>
                <p>Tyler imeh</p>
                <p>"The secure messaging feature on MolerHealth has transformed how our healthcare team communicates. It's efficient, secure, and has greatly improved the coordination 
                    of patient care. A vital tool for modern healthcare practices."</p>
            </div>
            <p>Get Started</p>
        </div>
    </main>
    );
  };
  
  export default LandingPage;