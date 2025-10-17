import React from 'react';
import achievement1 from '../static/images/achievement1.png';
import achievement2 from '../static/images/achievement2.png';
import achievement3 from '../static/images/achievement3.png';


export default function Achievements() {
  const achievements = [
    {
      id: 1,
      number: "1",
      title: "Recognition from Distinguished Dignitaries",
      description: "We were deeply honored to receive recognition from distinguished personalities, including Mr. Pruthviraj Baba Chavan, former Chief Minister of Maharashtra, and Satvasheela Chavan Ma’am, whose presence added immense value to the occasion.",
      image: achievement1
    },
    {
      id: 2,
      number: "2",
      title: "Joining Hands for Change: MoU Signed",
      description: "Officially signed a Memorandum of Understanding (MoU) with the esteemed Karve Institute of Social Service. Together, we’re poised to enhance our impact and advance the mission of social work in our community. ",
      image: achievement2
    },
    {
      id: 3,
      number: "3",
      title: "Computer lab in the Zilha Parishad School",
      description: "Privilege of meeting Mr. Shri Rahul Karad Sir, the Executive President of MIT-WPU.  Thanks to their generous support, we are almost done with a successfully set up of computer lab in the Zilha Parishad School of the village Jambhali which is adopted by our NGO, Umeed- The Hope For Living.",
      image: achievement3
    }
  ];

  return (
    <div className="achievements-wrapper">
      <div className="achievements-header">
        <h1 className="achievements-header-title">Achivements</h1>
        <p className="achievements-header-subtitle">We try to bring a change into the world.</p>
      </div>

      <div className="achievements-container">
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className={`achievement-item ${index % 2 !== 0 ? 'image-right' : ''}`}
            >
              {index % 2 === 0 ? (
                <>
                  <div>
                    {/* <div className="achievement-number">{achievement.number}</div> */}
                    <div className="achievement-content">
                      <h2>{achievement.title}</h2>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                  <div className="achievement-image">
                    <img src={achievement.image} alt={achievement.title} />
                  </div>
                </>
              ) : (
                <>
                  <div className="achievement-image">
                    <img src={achievement.image} alt={achievement.title} />
                  </div>
                  <div>
                    {/* <div className="achievement-number">{achievement.number}</div> */}
                    <div className="achievement-content">
                      <h2>{achievement.title}</h2>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}