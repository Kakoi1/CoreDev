import { useEffect } from 'react';
import { BiLocationPlus } from 'react-icons/bi';
import "./Milestone.css";
import { motion } from 'framer-motion';
import { Badge } from "@components/ui"



function MileStone() {
  const timeline = [
    {
      name: 'iAccs 2013',
      year: 'August 2013',
      right: 'timeline-content',
      description: [
        'Coredev started with 11 employees and 36 clients with only 6 products – iAccs 2013, Priority Queuing System, Members Online Inquiry System, Online Loan Facility, Electronic Filing, and Computerized Election System.',
        'The main product is iAccs 2013.',
      ],
    },
    {
      name: 'COMPUTER HARDWARE & SERVER',
      year: 'January 2014',
      right: 'timeline-content right',
      description: [
        'Start selling computer hardware and servers.',
        'Attending many events such as National Cooperative Summit and RBAP events.',
      ],
    },
    {
      name: 'Launching of the CIC Utility',
      year: '2015',
      right: 'timeline-content',
      description: [
        'From 11 employees to 30 employees since our clients also increased to 90.',
        'We joined the PICPA 69th Annual Convention.',
        'Launching of the CIC Utility since it is a mandatory government requirement.',
      ],
    },
    {
      name: '13th Cooperative Summit Trade Fair',
      year: '2016',
      right: 'timeline-content right',
      description: ['We joined the 13th Cooperative Summit Trade Fair.'],
    },
    {
      name: '100 clients nationwide.',
      year: '2017',
      right: 'timeline-content',
      description: [
        'More than 100 clients nationwide.',
        'First time that we joined the 8th National Tripartite Conference in Iloilo City, where GLEDCO signed the contract.',
        'We also joined the PAKISAMA event in Bohol.',
      ],
    },
    {
      name: 'Manila and Davao City.',
      year: 'March 2018',
      right: 'timeline-content right',
      description: [
        'Opening of the new satellite offices in Manila and Davao City.',
        'Enhancement of the Members Online Inquiry System into iWeb Portal.',
        'Attending so many events and sponsoring seminars such as: FOCONO, FOCCUS, National Cooperative Summit, and CDO – ICT.',
      ],
    },
    {
      name: 'Events and Sponsoring Seminars Nationwide',
      year: 'March 2019',
      right: 'timeline-content',
      description: [
        'Still participating in so many events and sponsoring seminars nationwide such as: Caraga Cooperative Congress, CACODEC, CDA DAGUPAN EVENT, CDA CALAMBA EVENT, Parañaque Federation Event.',
      ],
    },
    {
      name: 'Amidst the COVID-19 Pandemic',
      year: '2020',
      right: 'timeline-content right',
      description: [
        'coreDev Solutions Inc was able to develop new innovations that are essential in the new normal. We were able to launch the E-Services Portal, Online Payment Gateway, Coop Wallet System, Work Flow System, SMS Plus Gateway, Online Helpdesk System, Online Voting System, Online Queuing System, and Online Membership System.',
        'These new innovations were used by Cebu CFI Community Coop; we are really grateful for their continuous trust.',
      ],
    },
    {
      name: 'Establishment of Hardware Sales Department ',
      year: '2024',
      right: 'timeline-content',
      description: [
        'Offering wide variety of hardware technologies including but not limited to servers, computers, POS machines, Network Devices and Solar Pannels etc.',
      
      ],
    },
  ];

  useEffect(() => {
    const timelineBlocks = document.querySelectorAll('.timeline-item');
    const offset = 0.8;

    // Hide timeline blocks initially
    const hideBlocks = () => {
      timelineBlocks.forEach((block) => {
        if (
          block.getBoundingClientRect().top >
          window.innerHeight * offset
        ) {
          block.querySelector('.timeline-icon').classList.add('is-hidden');
          block.querySelector('.timeline-content').classList.add('is-hidden');
        }
      });
    };

    // Show timeline blocks on scroll
    const showBlocks = () => {
      timelineBlocks.forEach((block) => {
        if (
          block.getBoundingClientRect().top <=
          window.innerHeight * offset &&
          block.querySelector('.timeline-icon').classList.contains('is-hidden')
        ) {
          block.querySelector('.timeline-icon').classList.remove('is-hidden');
          block.querySelector('.timeline-content').classList.remove('is-hidden');
          block.querySelector('.timeline-icon').classList.add('animate-it');
          block.querySelector('.timeline-content').classList.add('animate-it');
        }
      });
    };

    // Initial hide
    hideBlocks();

    // Add scroll event listener
    window.addEventListener('scroll', () => {
      if (!window.requestAnimationFrame) {
        setTimeout(showBlocks, 100);
      } else {
        window.requestAnimationFrame(showBlocks);
      }
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', showBlocks);
    };
  }, []);

  return (
    <div className="milestone">
      <div className="timeline-container">
        <h3 className="project-name">Our <span>MileStone</span></h3>
        <div id="timeline">
          {timeline.map((item, index) => (
            <motion.div className="timeline-item"
            whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            key={index}>
              <div className="timeline-icon">
                <BiLocationPlus />
              </div>
              <div className={item.right}>
                <Badge color="default">{item.year}</Badge>
                <h2>{item.name}</h2>
                <ul>
                  {item.description.map((desc, index) => (
                    <li key={index}><p>{desc}</p></li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MileStone;