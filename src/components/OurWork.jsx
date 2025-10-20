import React from "react";

export default function OurWork() {
  const works = [
    {
      id: 1,
      title: "Community Education Programs",
      description:
        "Empowering underprivileged communities through quality education and skill development initiatives.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Healthcare Outreach",
      description:
        "Providing essential healthcare services and medical camps in remote villages.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Women Empowerment",
      description:
        "Supporting women through vocational training and entrepreneurship programs.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Child Welfare",
      description:
        "Ensuring better futures for children through nutrition, education, and care programs.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Digital Literacy",
      description:
        "Bridging the digital divide by establishing computer labs and training centers.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Environmental Conservation",
      description:
        "Promoting sustainable practices and environmental awareness in local communities.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    },
    {
      id: 7,
      title: "Rural Development",
      description:
        "Infrastructure development and livelihood enhancement in adopted villages.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    },
    {
      id: 8,
      title: "Youth Mentorship",
      description:
        "Guiding and mentoring youth to achieve their full potential and career goals.",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop",
    },
    {
      id: 9,
      title: "Food Security",
      description:
        "Ensuring food security through community kitchens and nutrition programs.",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="ourwork-wrapper">
      <div className="ourwork-header">
        <h1 className="ourwork-header-title">Our Work</h1>
        <p className="ourwork-header-subtitle">
          Making a difference through dedicated initiatives
        </p>
      </div>

      <div className="ourwork-grid-container">
        {works.map((work, index) => (
          <div key={work.id} className={`work-card work-card-${index + 1}`}>
            <div className="work-card-image">
              <img src={work.image} alt={work.title} />
            </div>
            <div className="work-card-content">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
