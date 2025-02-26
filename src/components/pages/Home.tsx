import '../../App.css'
import webdev from '../../assets/webpic.png';
import netWorking from '../../assets/networking.png';
import techSupport from '../../assets/tec-support.png';
import mobileApp from '../../assets/mobileApp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faGithub, faLinkedin,  } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className='pageSection'>
     <div className='homePage'>

        <div className='section1'>
        <div className='section1Text'>
         <h2 className='section1Title'>Web DEVELOPMENT</h2>
           <p className='section1Paragraph'>Web Developer with 5+ years of experience building and deploying scalable web applications using WordPress, React, Flask, front-end development. I am Passionate about creating user-friendly and performant web experiences. With a Proven track record for delivering high-quality projects on time and within budget. I am seeking opportunities to join a team to develop great UI, UX, and share my skills and learn from others. The button below will take you to my projects in GitHub.</p>
           <button onClick={() => window.open("https://github.com/grant8827?tab=repositories", "_blank")}>Projects</button>
           </div>
          <img src={webdev} className='sectionImage' alt='image1' />
        </div>


        <div className='section2'>
        <img src={netWorking} className='sectionImage' alt='image1' />
        <div className='section2Text'>
         <h2 className='section2Title'>Computer hardware, Networking & Cyber Security</h2>
           <p className='section2Paragraph'>Highly motivated and results-oriented IT professional with a comprehensive understanding of computer hardware, networking, and cybersecurity. I have 15+ years of experience in Computer hardware installation, pc repair, os installation on Windows, Mac, and Linux, I have 5+ years of experience in implementing and maintaining network infrastructure, troubleshooting hardware issues, and implementing security measures to protect against evolving cyber threats. Proven ability to analyze complex technical problems, develop effective solutions, and communicate technical concepts clearly to both technical and non-technical audiences. </p>
           </div>
        </div>


        <div className='section3'>
         <h2 className='section3Title'>Available To Work</h2> 
         <p className='section3Paragraph'>I live in Orlando, Florida. I am available to commute to work in the Orlando area, or work remotely. I am also willing to relocate for the right role. Most of my software development experience is remote work. I develop and design websites, mobile apps, and tech support remotely for more than five years.</p>
         </div>

         <div className='section4'>
        <div className='section4Text'>
         <h2 className='section4Title'>IT Support Specialist</h2>
           <p className='section4Paragraph'>Highly motivated and customer-focused IT Support Specialist with 7+ years of experience providing technical assistance to end-users.  Proven ability to troubleshoot hardware and software issues, resolve network connectivity problems, and provide exceptional customer service.  Proficient in Windows and macOS operating systems, as well as various software applications.  Strong problem-solving skills and a passion for helping others. Seeking a challenging role where I can leverage my technical expertise and customer service skills to contribute to a positive user experience.</p>
           </div>
           <img src={techSupport} className='sectionImage' alt='image1' />

        </div>


        <div className='section2'>
        <img src={mobileApp} className='sectionImage' alt='image1' />
        <div className='section2Text'>
         <h2 className='section2Title'>Mobile App DEVELOPMENT</h2>
           <p className='section2Paragraph'>Mobile App Developer with 4+ years of experience building and deploying high-quality iOS and Android applications.  Proficient in Flutter, SwiftUI.  Passionate about creating intuitive and engaging mobile experiences.  Proven track record of delivering successful apps on time and within budget.  Seeking opportunities to contribute to innovative mobile projects and collaborate with talented teams.</p>
           <div style={{display: 'flex', gap: '30px'}}>
            <button onClick={() => window.open("https://play.google.com/store/apps/developer?id=GG+High-Tech&hl=en_US", "_blank")}>Android</button>
            <button onClick={() => window.open("https://apps.apple.com/us/app/ggfm/id6472855705?see-all=developer-other-apps", "_blank")}>IOS</button>
           </div>
           </div>
           
        </div>

     

     </div>
  
<div className='footer'> 

  <div style={{margin: '20px'}} className='contact'>
  <h3 style={{textAlign: 'center', color: 'var(--primaryColor)', marginBottom: '20px'}}>Contact</h3>
  <p style={{color: 'var(--quaternaryColor)'}}>Email: grant88271@gmail.com</p>
    <p style={{color: 'var(--quaternaryColor)'}}>Phone: 407-720-0202</p>
  </div>

  <div style={{margin: '20px'}} className='socialLink'>  
<h3 style={{textAlign: 'center', color: 'var(--primaryColor)'}}>Social Media Links</h3>

<div className='socialMedia'>
 <FontAwesomeIcon onClick={() => window.open("https://en-gb.facebook.com/greg.grant.5621", "_blank")} style={{margin: '20px 0px 0  0px'}} icon={faFacebook} size='2xl' color='var(--quaternaryColor)' />
<FontAwesomeIcon onClick={() => window.open("http://linkedin.com/in/gregory-grant-92375aa8", "_blank")} style={{margin: '20px 0px 0 30px'}} icon={faLinkedin} size='2xl' color='var(--quaternaryColor)' />
<FontAwesomeIcon onClick={() => window.open("https://github.com/grant8827", "_blank")} style={{margin: '20px 0px 0 30px'}} icon={faGithub} size='2xl' color='var(--quaternaryColor)' />

</div>
</div>
</div>
    </div>
  )
}

export default Home