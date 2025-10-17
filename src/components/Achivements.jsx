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
      description: "We are proud to announce the official signing of a Memorandum of Understanding (MoU) with the esteemed Karve Institute of Social Service. This partnership marks a significant milestone in our journey, as we join hands to advance the mission of social work and deepen our impact within the community. Together, we aim to foster meaningful change and empower lives through collaborative efforts.",
      image: achievement2
    },
    {
      id: 3,
      number: "3",
      title: "Empowering Education Through Meaningful Partnerships",
      description: "We had the privilege of meeting Mr. Shri Rahul Karad Sir, Executive President of MIT-WPU, whose generous support has been instrumental in our mission. Thanks to this collaboration, we are proud to share that the computer lab at the Zilha Parishad School in Jambhali — a village adopted by our NGO, Umeed – The Hope For Living — is now nearly complete. This initiative marks a significant step toward enhancing digital access and educational opportunities for rural students.",
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