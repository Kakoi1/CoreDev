import React from 'react'
import './Careers.css'
import { motion } from "framer-motion";
function Careers() {

    const courseDetails = [
        {name: 'Accountancy', pic: 'src/assets/career/ac.png'},
        {name: 'Accounting Technology', pic: 'src/assets/career/acit.png'},
        {name: 'Management Accounting', pic: 'src/assets/career/man.png'},
        {name: 'Information Technology', pic: 'src/assets/career/it.png'},
        {name: 'Computer Science', pic: 'src/assets/career/cs.png'},
    ]
  return (
    <div className='careerCont'>
        <div className='imageWrap'>
            <div className='textcont'>
                <h2>CAREER OPPORTUNITIES</h2>
                <hr />
                <p>Stable yourself with your abilities. <br />Be a part of our amazing team!</p>
            </div>
        </div>
        <div className='inner'>
            <h2 style={{textAlign: 'center'}}>We are looking for a Graduate of these courses:</h2>
            <div className='courseCont'>
                {courseDetails.map((details, index) =>  
                <motion.div 
                key={index} 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 10, 
                            duration: 0.3, 
                            delay: index * 0.1 // Sequential appearance effect
                        }}
                className='courses'>
                    <img src={details.pic} alt={details.name} />
                    <h4>{details.name}</h4>
                </motion.div>
            )}
            </div>
            <div className='butCont'  >
            <motion.a 
  className="applyBut"
  href="https://coredev.orangepayplus.com/job/hiring/coredev-solutions-inc"
  target="_blank" // Opens in a new tab
  rel="noopener noreferrer" // Security best practice
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.9 }}
  transition={{ duration: 0.3 }}
>
  Apply Now!
</motion.a>

            </div>
        </div>
    </div>
  )
}

export default Careers