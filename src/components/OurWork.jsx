import React from "react";
import owdiffdiwali from "../static/images/owdiffdiwali.png"
import oweducation from "../static/images/oweducation.png"
import owlandmapping from "../static/images/owlandmapping.png"
import owspectacles from "../static/images/owspectacles.png"
import owforestrights from "../static/images/owforestrights.png"
import owcleanlinessdrive from "../static/images/owcleanlinessdrive.png"
import owmedicalcamp from "../static/images/owmedicalcamp.png"
import owcomputerlab from "../static/images/owcomputerlab.png"

export default function OurWork() {
  const works = [
    {
      id: 1,
      title: "A Different Kind of Diwali: One Filled with Giving & Gratitude",
      description: `This Diwali, we chose to celebrate in the most meaningful way — by spreading smiles in a tribal hamlet.
                   Instead of distributing sweets, we shared something more essential: ration kits for 85 tribal families, ensuring they have what they truly need this festive season.
                   This heartfelt initiative was made possible through the collaboration with Umeed Foundation and Gurukul Foundation, along with their dedicated teams whose efforts made this Diwali truly special.
                   Because Diwali is not just about lights and sweets — it’s about sharing happiness, hope, and care with those who need it most.
                   We are grateful to celebrate the festival of lights by lighting up lives.`,
      image: owdiffdiwali,
    },
    {
      id: 2,
      title: "Empowering Dreams Through Education: A Journey of Hope",
      description: `At Umeed – The Hope For Living, we’ve embarked on a heartfelt new journey — one that begins with six children from Adivasi Pada and a dream rooted in education.
We are currently in the process of seeking their admission into an Adivasi Ashram School, a step that brings them closer to a future full of possibilities.
These children, who’ve grown up with limited resources but limitless potential, are finally being given a chance to learn, to grow, and to break the cycle of hardship through the power of education.
This is more than just paperwork.
It’s a promise of hope, a step toward change, and a celebration of dreams taking flight.
Because when one child learns, an entire community begins to rise.`,
      image: oweducation,
    },
    {
      id: 3,
      title: "Mapping Land, Securing Futures!Women Empowerment",
      description: `1st March 2025, Saturday.
Today, we took a significant step toward addressing land challenges faced by the Katkari community in Mulshi Taluka.
The Forest Department’s Range Officers, along with their team, visited our tribal project field to conduct satellite mapping of the land — marking and mapping houses in the tribal hamlet. This is a crucial step in land documentation, advocacy, and securing legal recognition.
As part of our ongoing efforts, we also approached the Tribal Department and successfully submitted land claim forms to the Sub-Divisional Office (Prant Office), Tehsil, and Collector.
This marks a key milestone in ensuring land security and preventing displacement for the community.
For indigenous communities, land is more than just property — it represents identity, security, and a foundation for future generations.
At Umeed Foundation, we remain committed to advocating for land rights and sustainable development for marginalized groups.
Collective action, awareness, and policy interventions will drive lasting change.`,
      image: owlandmapping,
    },
    {
      id: 4,
      title: "Clear Vision, Brighter Lives: Spectacle Distribution Program",
      description:`We are delighted to share the successful completion of today’s spectacle distribution program!
This initiative, conducted in partnership with H.V. Desai Eye Hospital, Janseva Charitable Centre, and Umeed – The Hope for Living Foundation, marks another step toward improving lives through better vision.
During the eye camp held on 8th December, several patients were identified as needing spectacles.
Today, those spectacles were distributed — bringing clarity, comfort, and improvement to their daily lives.
A heartfelt thanks to Jambhli Gram Panchayat and Sarpanch Aparna Tai Tarde for their invaluable support and cooperation in making this event a success.
Together, we continue to create a positive impact — one lens at a time.`,
      image: owspectacles,
    },
    {
      id: 5,
      title: "Milestone Achieved: Forest Rights Committee Established!",
      description:`Today, we proudly participated in a Gramsabha held at Davaje village, where a major step toward empowering the Tribal Community was taken.
In collaboration with Umeed Foundation, Samarpak, and the Integrated Tribal Development Department (Government), we successfully established a Forest Rights Committee (वन हक्क समिती).
This committee was officially approved by the Gram Panchayat through an election process involving 15 members:10 Tribal Members (including 1/3 tribal women)5 Members from the Dhangar and other communities
The journey wasn’t easy — we faced conflicts at the Gram Panchayat level, but through determination and teamwork, we resolved the issues and turned challenges into success.
A strong and impactful presence of 45 tribal members during the Gram Sabha ensured that the voices of the community were heard loud and clear.
This initiative is a crucial step for the development of tribal communities. With the government’s support, we are making meaningful change happen.
It stands as a testament to teamwork, persistence, and community-led development, ensuring sustainable forest management while protecting the rights of local communities.Together, we are paving the way for a greener, empowered future.
Save Tribes`,
      image: owforestrights,
    },
    {
      id: 6,
      title: "Cleanliness Drive During Vitthal Vari: A Community Effort!",
      description:`UMEED Foundation is proud to announce the successful organization of a cleanliness drive on FC Road during the Vitthal Vari celebration.
Thanks to the hard work and enthusiasm of our dedicated volunteers and the local community, we kept the streets clean and welcoming for all devotees.
We are deeply grateful for everyone’s support and participation, which made this initiative a great success.
A heartfelt thank you to everyone who joined hands with us.
Let’s continue to work together for a cleaner and greener future!`,
      image: owcleanlinessdrive,
    },
    {
      id: 7,
      title: "Reaching the Unreached: Medical Camp at Nilkanteshwar",
      description:`We are proud to share the successful organization of a medical camp for the tribal community living in the forests of Nilkanteshwar, Taluka Mulshi.
This camp marks a significant step in our ongoing efforts to support and uplift these communities.
We are honored to serve the real custodians of the forests, and remain committed to improving their health and well-being.
This initiative was made possible through the invaluable support of USDA – Uttam Nagar Shivane Doctors Association.
Thank you for your continued support in making such impactful programs a reality.
Together, we are building healthier communities and brighter futures.`,
      image: owmedicalcamp,
    },
    {
      id: 8,
      title: "Empowering Education: Computer Lab Inauguration at ZP School, Jambhali",
      description:`We are delighted to announce the successful inauguration of a new computer lab at the ZP School in Jambhali, our adopted village.
This transformative initiative has been generously sponsored by MIT WPU, in collaboration with Umeed – The Hope For Living Foundation.
As part of our commitment to enhancing educational opportunities, we have installed Kompkin, a state-of-the-art educational software designed to enrich the learning experience for students and foster digital literacy.
We extend our heartfelt gratitude to Mrs. Satvasheela Prithviraj Chavan for her invaluable assistance and guidance, which played a crucial role in making this event a resounding success.
Thank you to everyone involved for your dedication and hard work in bringing this vision to life.
Together, we are empowering young minds through technology and paving the way for a brighter future.`,
      image: owcomputerlab,
    }
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
