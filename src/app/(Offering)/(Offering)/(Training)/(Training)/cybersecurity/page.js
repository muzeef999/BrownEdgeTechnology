"use client"
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaHome } from "react-icons/fa";

const Page = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
    });
    setLoader(true);
  }, []);

  return (
    <div style={{overflow:"hidden"}}>
      {!loader ? (
        <div className="loaderbox">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="position-relative video-container" data-aos="fade-in">
            <div className="embed-responsive embed-responsive-16by9">
              <video
                className="embed-responsive-item"
                src="/cybersec.mp4"
                muted
                autoPlay 
                loop
              ></video>
            </div>
            <div
              className="position-absolute w-100 h-100"
              style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            ></div>
            <div className="container sec position-absolute top-50 start-50 translate-middle text-center">
              <h1
                style={{ color: "#FFF", fontWeight: "500" }}
                className="about-data"
                data-aos="fade-up"
              >
                Cyber Security
              </h1>
            </div>
          </div>

          <br/>
          <br/>

          <div className="container my-3">
           
            <div className="row">
              <div className="col-md-12" data-aos="fade-right">
                <h2 style={{ color: " #964B00" }}>The Rise of Artificial Intelligence</h2>
                <p className="p">The rise of artificial intelligence is signaling disruption in the technology industry. The likes of Microsoft, Google, and OpenAI are spearheading fierce competition to create the most advanced artificial intelligence aimed at improving the way we interact with technology. While intelligent language models like ChatGPT are already fascinating people with their abilities to deliver answers to given prompts, AI technologies currently available to the public are just the tip of the iceberg. In the automotive industry, artificial intelligence can streamline operations and improve efficiency throughout the supply chain. Utilization of artificial intelligence in the automotive cybersecurity sector can especially benefit threat detection and response.</p>

                <h3 style={{ color: " #964B00" }}>The Need for Strengthened Vehicle Cybersecurity</h3>
                <p className="p">Several decades ago vehicle security would entail door locks, car alarms, and airbags. While the same is still true, cybersecurity is becoming an essential part of automotive security. Ensuring full protection now includes shielding the vehicle from internal system malfunctions as well as external cyber threats. However, as cars turn more software-driven and connected, vehicle security is becoming increasingly complex.</p>
                <p className="p">A modern-day car contains multiple electronic control units (ECUs) responsible for in-vehicle electronic systems that regulate and perform various functions ranging from essential tasks like steering and engine control to more mundane ones like unlocking doors and rolling down windows. The number of ECUs in a given vehicle depends on the quantity and complexity of vehicle features. For instance, a contemporary luxury car can have up to 150 ECUs, and the number may continue growing if new functionalities and sub-systems are added. These ECUs communicate with different parts of the vehicle and other ECUs to keep the vehicle running. Each of these ECUs and their communication nodes must be secured to protect the vehicle from cyber threats.</p>

                <h3 style={{ color: " #964B00" }}>Limitations of Conventional Automotive Cybersecurity</h3>
                <p className="p">Keyless car theft, infotainment system attacks, malware, conventional automotive cybersecurity software is built to protect against these and many other known threats. Cybersecurity companies employ ethical hacking methods to ensure the timely discovery of system loopholes. In ethical hacking, white hat hackers are responsible for hacking vehicle systems to find weaknesses in the software and report it to the cybersecurity software developers, who then implement appropriate security measures.</p>
                <p className="p">The complex system architecture of modern vehicles contains dozens of ECUs and millions of code lines, all of which can be potentially exploited by malicious actors. Manually searching for vulnerabilities in these vehicles is like looking for a needle in a haystack. As vehicle systems get more complex securing them will become even harder. While ethical hacking helps companies develop resilient security measures against cyber attacks, this ad hoc approach to cybersecurity has its limitations.</p>
                <p className="p">The biggest challenge in automotive cybersecurity is protecting the vehicle from unprecedented danger, also known as a zero-day attack. These attacks exploit previously undiscovered vulnerabilities in vehicle systems to install malware or tamper with the vehicle. Protection against zero-day attacks necessitates a more sophisticated approach to automotive cybersecurity, which is where AI comes in.</p>

                <h3 style={{ color: " #964B00" }}>The Potential of AI/ML-powered Cybersecurity</h3>
                <p className="p">AI/ML-based systems analyze, classify, and train on large amounts of data to self-improve and make independent decisions down the road. When applied in automotive cybersecurity, machine learning algorithms can be implemented in the security software to learn common patterns of vehicle operations. A trained model will then be able to distinguish anomalies that fall beyond the scope of ordinary vehicle signals. If malicious behavior is detected the cybersecurity software will send alerts and shield the vehicle from danger. Even if a malicious actor exploits a previously unidentified vulnerability, an AI-powered anomaly detection model will be able to detect intrusions and prevent them.</p>
                <p className="p">A car’s digital communications are simple and more predictable than that of a typical computer network. Since signals exchanged during normal vehicle operations often follow fixed patterns, determining an anomalous signal is not very difficult. Therefore, employing unsupervised machine learning in cybersecurity is feasible. For instance, imagine a car driving on the highway at cruising speed that suddenly receives a breaking signal requesting to stop the car in the middle of the road. An AI-powered security software will be able to differentiate this unusual command from a common driving pattern. The system will then block the anomalous signal and send it over to the security experts for further action.</p>
                <p className="p">While perfecting a fully AI-based cybersecurity software may take years, some companies are already leveraging the power of machine learning in their solutions. One example is AutoCrypt Security Fuzzer, which is an automated testing solution that employs an AI-based algorithm to input semi-random test cases into selected systems to reveal errors in vehicle software. The solution essentially causes intentional crashes in the system to expose software vulnerabilities that need to be addressed. An AI-based security fuzzer greatly reduces testing time, streamlining the ad hoc approach to cybersecurity implementation.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
