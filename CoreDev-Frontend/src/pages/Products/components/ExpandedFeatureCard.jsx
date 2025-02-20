/* eslint-disable react/prop-types */
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


export const ExpandableFeatureCard = ({ secondItem }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        layout: { duration: 0.3 },
        type: "",
        stiffness: 200,
        damping: 10,
        duration: 0.3,
        delay: 1 * 0.2,
      }}
      className="projectDetail"
    >
      <div className="projWrap">
        <div className="IacWrap">
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="iacc"
            src={secondItem.pic.type}
            alt={secondItem.title}
          />
          <div>
            <h4>{secondItem.title}</h4>
            <p>{secondItem.description}</p>
          </div>
          <div>
            <button className="IacWrap-btn" onClick={toggleExpand}>
              {isExpanded ? "Hide details" : "Learn more"}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              layout 
              className="featureWrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {secondItem.icon}
              <h4>General Features</h4>
              <ul>
                {secondItem.feature.map((itemFeature, index) => (
                  <li key={index}>{itemFeature}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ExpandableFeatureCard

