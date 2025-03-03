import React from 'react'
import { BiCheckDouble } from "react-icons/bi";
import './Regulation.css';
import { motion, useInView } from 'framer-motion';
function regulation() {

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 3 } },
  };

  return (
    <div className='regucont'>
      <motion.div className='Regwrapper'
       initial='hidden'
       whileInView='visible'
       viewport={{ once: true, amount: 0.5 }}
       variants={fadeInUpVariants}
       whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
       transition={{ duration: 0.4 }}
      >
        <div className='titleName'>
          <nav>
          <h2>Government Regulation</h2>
          </nav>
        </div>
        <div className='contentWrap'>
            <div className='content'>
                <h3><BiCheckDouble /> Our Core Banking/Accounting System is already Compliant with BIR Computerized Accounting System (CAS) Registration.</h3>
            </div>
            <div className='content'>
                <h3><BiCheckDouble /> Point of Sale (POS) BIR Accreditation
                Accreditation Number: <strong>0824391214402015040288</strong></h3>
            </div>
        </div>
        </motion.div>
    </div>
  )
}

export default regulation