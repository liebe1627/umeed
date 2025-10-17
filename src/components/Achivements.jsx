import React from 'react';



export default function Achievements() {
  const achievements = [
    {
      id: 1,
      number: "1",
      title: "FLORAL",
      description: "Living art for homes, businesses, and events.",
      image: "https://images.unsplash.com/photo-1582794802409-8d1e89e85ff8?w=600&h=600&fit=crop"
    },
    {
      id: 2,
      number: "2",
      title: "NATIVE PLANT ARRANGEMENTS",
      description: "Whether it's a private retreat or a public space, we craft floral experiences that bloom beyond expectations.",
      image: "https://images.unsplash.com/photo-1605655014175-c1cbc1d36692?w=600&h=600&fit=crop"
    },
    {
      id: 3,
      number: "3",
      title: "CUSTOM BOUQUETS",
      description: "Beautifully curated flower arrangements for every occasion and celebration.",
      image: "https://images.unsplash.com/photo-1567763568409-e4f83e66a000?w=600&h=600&fit=crop"
    },
    {
      id: 4,
      number: "4",
      title: "EVENT DECORATIONS",
      description: "Transform your special moments with our stunning floral decorative services.",
      image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600&h=600&fit=crop"
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
                    <div className="achievement-number">{achievement.number}</div>
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
                    <div className="achievement-number">{achievement.number}</div>
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