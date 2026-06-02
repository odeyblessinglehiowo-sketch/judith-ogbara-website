export type NewsGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  byline: string;
  intro: string;
  image: string;
  body: string[];
  gallery: NewsGalleryItem[];
  video?: {
    src: string;
    poster?: string;
    caption?: string;
  };
};

export const newsItems: NewsItem[] = [
  {
    slug: "new-month-message-june-2026",
    title: "Judith Ogbara Welcomes June with a Message of Hope, Gratitude, and Renewed Commitment",
    date: "June 1, 2026",
    byline: "By G4EP Tech Department",
    intro:
      "Hon. Dr. Judith Mayen Ogbara welcomed the month of June with a message of gratitude, hope, and encouragement to the people of Eket Federal Constituency and Nigerians across the country.",
    image: "/images/news/new-month-june-2026.jpg",
    body: [
      "As we step into the month of June, I extend my warmest greetings and best wishes to the good people of Eket Federal Constituency and to Nigerians across our great nation. A new month presents a fresh opportunity to reflect on how far we have come, appreciate the blessings we have received, and renew our commitment to building a better future for ourselves, our families, and our communities.",
      "I sincerely thank everyone who continues to believe in the values of service, unity, and responsible leadership. To the people of Eket Federal Constituency, I remain deeply grateful for your support, encouragement, and confidence. Your voices were heard, your participation mattered, and your commitment to the democratic process remains a powerful reminder that the future of our communities is shaped by citizens who care and actively contribute to progress.",
      "While challenges may still exist around us, I remain optimistic about the future of our constituency, our state, and our nation. Across Nigeria, countless individuals wake up each day with the determination to work hard, support their families, contribute to their communities, and create opportunities for others. It is this spirit of resilience, hope, and perseverance that continues to move our nation forward despite every obstacle.",
      "As we begin this new month, let us continue to embrace peace, mutual respect, and unity. Let us support one another, encourage our young people, empower our women, invest in education, strengthen our communities, and remain committed to the ideals of justice, fairness, and development. May this month bring good health, abundant blessings, prosperity, and renewed hope to every home in Nigeria.",
    ],
    gallery: [
      {
        src: "/images/news/new-month-june-2026.jpg",
        alt: "Judith Ogbara’s June 2026 New Month Message",
        caption: "From the G4EP Media Team",
      },
    ],
  },
  {
    slug: "eid-al-adha-2026-message",
    title: "Judith Ogbara Celebrates Eid al-Adha with a Message of Faith, Unity, and Compassion",
    date: "May 28, 2026",
    byline: "By G4EP Tech Department",
    intro:
      "Hon. Dr. Judith Mayen Ogbara extended warm Eid al-Adha greetings to Muslim families and communities, encouraging reflection, compassion, unity, and service to humanity.",
    image: "/images/news/sallah-1.jpg",
    body: [
      "As Muslims across Nigeria and around the world celebrate Eid al-Adha, I join millions of faithful in extending warm greetings and best wishes to all Muslim families, friends, and communities. This sacred season is a time of reflection, gratitude, sacrifice, and renewed devotion to the values that strengthen our faith, families, and society.",
      "Eid al-Adha reminds us of the virtues of obedience, humility, compassion, and selfless service. It teaches us the importance of putting others before ourselves, extending kindness to those in need, and strengthening the bonds that unite our communities. At a time when our nation continues to navigate challenges and opportunities, these values remain more important than ever.",
      "I encourage us all to use this season as an opportunity to promote peace, understanding, and unity among people of different backgrounds and beliefs. Our diversity remains one of Nigeria’s greatest strengths, and by embracing mutual respect and working together in harmony, we can continue building stronger communities and a brighter future for generations to come.",
      "As families gather to celebrate, share meals, and spend time with loved ones, I pray that this season brings peace to every home, renewed hope to every heart, and abundant blessings to our nation. May the spirit of sacrifice inspire us to serve humanity with sincerity, compassion, and generosity.",
    ],
    gallery: [
      {
        src: "/images/news/sallah-1.jpg",
        alt: "Judith Ogbara celebrating Eid al-Adha 2026",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/sallah-2.jpg",
        alt: "Eid al-Adha celebrations and community gathering",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/sallah-3.jpg",
        alt: "Moments from Eid al-Adha celebrations",
        caption: "From the G4EP Media Team",
      },
    ],
  },
  {
    slug: "childrens-day-2026-future-now",
    title: "Judith Ogbara Marks Children’s Day 2026 with a Call for Inclusion and Hope",
    date: "May 27, 2026",
    byline: "By G4EP Tech Department",
    intro:
      "Hon. Dr. Judith Mayen Ogbara marked Children’s Day 2026 with a message celebrating the dreams, dignity, and limitless potential of every child, while calling for greater inclusion, protection, and access to opportunity.",
    image: "/images/news/childrens-day-2026.jpg",
    body: [
      "Hon. Dr. Judith Mayen Ogbara joined Nigerians in celebrating Children’s Day 2026 with a heartfelt message dedicated to the bright minds, beautiful dreams, and limitless potential of every child. The celebration provided another opportunity to reflect on the important role children play in shaping the future of the nation, and the responsibility of society to create an environment where they can grow with confidence, dignity, and hope.",
      "This year’s theme, “Future Now: Promoting Inclusion for Every Nigerian Child,” reinforced the importance of building a society where every child is given love, protection, quality education, and equal opportunity regardless of background or ability. In her message, Dr. Ogbara emphasized that children are not only the leaders of tomorrow, but also the future now, deserving of the support and encouragement that will help them flourish today.",
      "She further encouraged continued efforts to create a world where every child feels seen, heard, valued, and empowered to dream big. Her message reflected a deep commitment to child welfare, inclusion, and the need for policies and actions that protect the hopes of young people while giving them the tools to succeed. The celebration stood as a reminder that investing in children is one of the most meaningful ways to invest in the future of Nigeria.",
    ],
    gallery: [
      {
        src: "/images/news/childrens-day-2026.jpg",
        alt: "Children’s Day 2026 celebration",
        caption: "From the G4EP Media Team",
      },
    ],
  },
  {
    slug: "ekeet-federal-constituency-screening-exercise-abuja",
    title: "Judith Ogbara Joins House of Representatives Screening in Abuja",
    date: "May 9, 2026",
    byline: "By G4EP Tech Department",
    intro:
      "Hon. Dr. Judith Mayen Ogbara joined fellow aspirants from the 360 Federal Constituencies across Nigeria at the Federal House of Representatives screening exercise held at Treasure Suites and Conferences, Abuja, in a moment marked by reflection, responsibility, and renewed commitment to public service.",
    image: "/images/news/screening-1.jpg",
    body: [
      "Hon. Dr. Judith Mayen Ogbara joined fellow aspirants from the 360 Federal Constituencies across Nigeria at the screening exercise for the Federal House of Representatives, held at Treasure Suites and Conferences, Abuja. The exercise brought together aspirants from different parts of the country in an atmosphere defined by focus, reflection, and a shared sense of responsibility to the people they seek to serve. For Dr. Ogbara, it was a moment that reinforced the seriousness of the journey and the need for leadership rooted in service and accountability.",
      "The screening exercise served as an important reminder of the values that must guide democratic participation. It also underscored the need for a free, fair, and credible process founded on justice, equity, and due process. Dr. Ogbara expressed appreciation to all those who continue to support a democratic system that allows every aspirant an equal and orderly opportunity to participate in the political process with dignity and transparency.",
      "She also extended profound gratitude to the Governor of Akwa Ibom State, His Excellency Pastor Umo Eno, PhD, for his commitment to democratic values, peaceful participation, and the preservation of due process within the political space. According to her, leadership at every level must continue to reflect fairness, discipline, and respect for the institutions that sustain democracy.",
      "Dr. Ogbara reflected on the kind of leadership she intends to pursue if entrusted with the mandate to represent the people of Eket Federal Constituency. Her focus, she noted, would remain on practical interventions that directly improve lives, including youth and women empowerment, support for entrepreneurs, stronger education and healthcare systems, oil spill advocacy, fishermen support initiatives, oil and gas technical training, coastal tourism development, clean water projects, infrastructural development, digital economy training, and the attraction of meaningful development across every community in the constituency.",
      "She described leadership as a sacred trust anchored on integrity, accountability, compassion, and selfless service. In her view, public office should never be reduced to personal ambition, but should instead serve as a platform for listening, working, and delivering results that reflect the real needs of the people. That conviction continues to guide her political journey and her commitment to responsible leadership.",
      "The screening was not only a procedural step in the political process, but also a reminder of the larger purpose behind public service. For Dr. Ogbara, the journey remains deeply people-centered and tied to the future of Eket Federal Constituency and Nigeria as a whole. She reaffirmed her belief that meaningful leadership must be transparent, responsive, and committed to building a future that benefits all.",
    ],
    gallery: [
      {
        src: "/images/news/screening-1.jpg",
        alt: "Judith Ogbara at the House of Representatives screening exercise in Abuja",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/screening-2.jpg",
        alt: "Aspirants gathered at the screening venue in Abuja",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/screening-3.jpg",
        alt: "Moment from the screening exercise",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/screening-4.jpg",
        alt: "Another view from the Federal House of Representatives screening exercise",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/screening-5.jpg",
        alt: "Aspirants and attendees at the Abuja screening venue",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/screening-6.jpg",
        alt: "Judith Ogbara with fellow aspirants in Abuja",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/screening-7.jpg",
        alt: "Final moments from the screening exercise",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/screening-8.jpg",
        alt: "Additional photo from the screening exercise in Abuja",
        caption: "From the G4EP Media Team",
      },
    ],
  },
  {
  slug: "judith-ogbara-picks-up-expression-of-interest-and-nomination-form",
  title: "Judith Ogbara Picks Up Expression of Interest and Nomination Form for Eket Federal Constituency",
  date: "April 28, 2026",
  byline: "By G4EP Tech Department",
  intro:
    "Hon. Dr. Judith Mayen Ogbara officially took a major step in her political journey by picking up her Expression of Interest and Nomination Form to represent the people of Eket Federal Constituency, describing the move as a call to service and a commitment to purposeful leadership.",
  image: "/images/news/nomination-form-1.jpg",
  body: [
    "Hon. Dr. Judith Mayen Ogbara stood before the people of Eket Federal Constituency with a deep sense of responsibility, humility, and commitment as she picked up her Expression of Interest and Nomination Form to represent the constituency. The moment marked an important step in her political journey and reflected her readiness to serve with focus, discipline, and a clear sense of duty to the people.",
    "For her, the decision to run is not driven by personal ambition, but by a genuine response to the yearnings of the people. It is a response to the hopes of young people seeking opportunities, women demanding empowerment, elders desiring dignity, and communities calling for sustainable development. The move represents a broader call to leadership that is intentional, people-centered, and accountable.",
    "She noted that for too long, many of the constituency's potentials have remained untapped and too many of the people's hopes have not been fully translated into tangible progress. Her message centered on the need for purposeful leadership that listens, understands, and delivers practical results that can be felt across every part of Eket Federal Constituency.",
    "Dr. Ogbara envisioned a constituency where young people are not only hopeful but empowered, where women are supported as pillars of economic growth, where infrastructure reflects the dignity of the people, and where governance is accessible, transparent, and accountable. She described her candidacy as the beginning of a new chapter built on inclusion, innovation, and integrity.",
    "According to her, the journey ahead is about building bridges across all wards and communities and ensuring that no one is left behind. She reaffirmed her commitment to championing policies that promote education, healthcare, entrepreneurship, and sustainable development, while strengthening the voices of ordinary citizens in the decision-making process.",
    "She further emphasized that this journey belongs not only to her, but to every son and daughter of Eket Federal Constituency who believes in a brighter future. In her words, it is a collective movement to reclaim the constituency's voice, redefine its priorities, and restore confidence in leadership through unity, transparency, and responsible service.",
    "As she took this important step, Dr. Ogbara called on the people to rise above division and work together with common purpose. Her message was one of hope, inclusion, and renewed determination to build a constituency that works for all."
  ],
  gallery: [
    {
      src: "/images/news/nomination-form-1.jpg",
      alt: "Judith Ogbara picking up her nomination form",
      caption: "From the G4EP Media Team"
    },
    {
      src: "/images/news/nomination-form-2.jpg",
      alt: "Judith Ogbara with supporters during the nomination form event",
      caption: "From the G4EP Media Team"
    },
    {
      src: "/images/news/nomination-form-3.jpg",
      alt: "Moment from the nomination form pickup",
      caption: "From the G4EP Media Team"
    },
    {
      src: "/images/news/nomination-form-4.jpg",
      alt: "Supporters at the nomination form event",
      caption: "From the G4EP Media Team"
    },
    {
      src: "/images/news/nomination-form-5.jpg",
      alt: "Judith Ogbara at the event",
      caption: "From the G4EP Media Team"
    },
    {
      src: "/images/news/nomination-form-6.jpg",
      alt: "Another view from the nomination form event",
      caption: "From the G4EP Media Team"
    },
    {
      src: "/images/news/nomination-form-7.jpg",
      alt: "Group photo at the nomination form event",
      caption: "From the G4EP Media Team"
    },
    {
      src: "/images/news/nomination-form-8.jpg",
      alt: "Final photo from the nomination form pickup",
      caption: "From the G4EP Media Team"
    }
  ]
},
  {
    slug: "nans-45th-anniversary-recognition-april-19-2026",
    title: "Judith Ogbara Recognized at NANS 45th Anniversary Celebration of Student Activism",
    date: "April 19, 2026",
    byline: "By G4EP Tech Department",
    intro:
      "Hon. Dr. Judith Mayen Ogbara was recognized alongside 44 exceptional Nigerians by the National Association of Nigerian Students at its 45th Anniversary Celebration of Student Activism, a milestone event that celebrated leadership, advocacy, and national service.",
    image: "/images/news/nans-45-1.jpg",
    body: [
      "Hon. Dr. Judith Mayen Ogbara was deeply honoured to be recognized alongside 44 exceptional Nigerians by the National Association of Nigerian Students (NANS) during its 45th Anniversary Celebration of Student Activism. The recognition brought together a distinguished group of individuals whose work has contributed meaningfully to education, leadership, youth development, and national progress.",
      "For 45 years, NANS has remained a powerful voice for Nigerian students, championing their interests, shaping national conversations, and helping to nurture the next generation of leaders. The anniversary celebration served as a reminder of the association’s resilience, courage, and unity, as well as its long-standing role in defending student welfare and advancing the collective aspirations of young Nigerians across the country.",
      "In receiving the recognition, Dr. Ogbara expressed gratitude for the honour and acknowledged the significance of the moment. She reaffirmed her belief that education remains the foundation of every thriving society, noting that her work with students over the years has only strengthened her conviction that empowering young minds is one of the surest ways to build a stronger and more prosperous nation.",
      "She also commended NANS for its enduring legacy and the important place it continues to hold in the lives of Nigerian students. According to her, the association’s advocacy has helped to raise consciousness, protect student interests, and strengthen the voice of young people in national discourse. She urged the leadership of NANS to remain steadfast in its mission and continue to be a beacon of hope for students across Nigeria.",
      "The celebration highlighted the importance of recognising individuals who continue to invest in students, education, and youth development. It also underscored the connection between activism, leadership, and national progress, as those honoured represented different sectors of service but shared a common commitment to building a better future.",
    ],
    gallery: [
      {
        src: "/images/news/nans-45-1.jpg",
        alt: "Judith Ogbara receiving recognition at the NANS anniversary celebration",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/nans-45-2.jpg",
        alt: "Guests gathered during the NANS 45th anniversary event",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/nans-45-3.jpg",
        alt: "Recognition moment at the NANS anniversary celebration",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/nans-45-4.jpg",
        alt: "Honoured guests at the NANS 45th anniversary",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/nans-45-5.jpg",
        alt: "Group photo from the NANS recognition event",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/nans-45-6.jpg",
        alt: "Additional recognition photos from the celebration",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/nans-45-7.jpg",
        alt: "More moments from the NANS anniversary event",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/nans-45-8.jpg",
        alt: "Final photo from the NANS 45th anniversary celebration",
        caption: "From the G4EP Media Team",
      },
    ],
  },
  {
    slug: "g4ep-explores-partnership-with-gifa-project",
    title: "G4EP Explores Strategic Partnership with GIFA Project to Advance Community Development in Akwa Ibom",
    date: "March 23, 2026",
    byline: "By G4EP Tech Department",
    intro:
      "A courtesy visit between Hon. Dr. Judith Mayen Etuk-Ogbara and Lady Helen Eno Obareki, Coordinator of the Office of the First Lady of Akwa Ibom State, opened discussions on strategic collaboration aimed at driving sustainable development and community empowerment across the state.",
    image: "/images/news/gifa-partnership-1.jpg",
    body: [
      "Hon. Dr. Judith Mayen Etuk-Ogbara recently paid a courtesy visit to Lady Helen Eno Obareki, Coordinator of the Office of the First Lady of Akwa Ibom State, in a meeting focused on strengthening partnerships and exploring opportunities for sustainable development across the state. The engagement provided a valuable platform for dialogue, knowledge sharing, and the exchange of ideas centered on improving the wellbeing of communities through innovative and people-focused initiatives.",
      "During the meeting, Lady Helen Eno Obareki presented the vision and objectives of the Golden Initiative For All (GIFA) Project, a people-centered initiative designed to promote inclusive development, social impact, and sustainable empowerment throughout Akwa Ibom State. The discussion highlighted the project’s commitment to improving lives through targeted interventions that address the needs of women, young people, families, and vulnerable groups while fostering long-term community growth.",
      "The meeting also created an opportunity to explore potential areas of collaboration between the GIFA Project and the Gender Education, Engagement, Empowerment and Entrepreneurship Programme (G4EP). Both parties expressed a shared commitment to developing impactful programmes capable of creating measurable benefits within local communities. Discussions focused on how collaboration could enhance the reach, effectiveness, and sustainability of interventions aimed at empowering individuals and strengthening social and economic development.",
      "Particular attention was given to the critical foundations required for successful programme implementation. These included conducting comprehensive needs assessments to better understand the realities facing different communities, developing clear strategic frameworks to guide interventions, and establishing measurable objectives that would allow progress and impact to be effectively tracked.",
      "The engagement reinforced the importance of strategic partnerships in addressing complex social and developmental challenges. By bringing together institutions and leaders with a shared vision for community advancement, opportunities are created for broader impact and more sustainable solutions.",
    ],
    gallery: [
      {
        src: "/images/news/gifa-partnership-1.jpg",
        alt: "Courtesy visit between Hon. Dr. Judith Mayen Etuk-Ogbara and Lady Helen Eno Obareki",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/gifa-partnership-2.jpg",
        alt: "Strategic discussions on the GIFA Project and community development",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/gifa-partnership-3.jpg",
        alt: "Participants discussing future collaboration opportunities",
        caption: "From the G4EP Media Team",
      },
    ],
  },
  {
    slug: "innovation-tech-exhibition-celebrating-young-female-innovators",
    title: "Innovation Tech Exhibition Celebrates the Creativity and Potential of Young Female Innovators",
    date: "March 13, 2026",
    byline: "By G4EP Tech Department",
    intro:
      "In celebration of International Women’s Day, G4EP hosted the Innovation Tech Exhibition, a transformative platform designed to showcase the ingenuity, creativity, and leadership potential of girls in secondary schools through technology, innovation, and problem-solving.",
    image: "/images/news/innovation-tech-1.jpg",
    body: [
      "As part of activities marking International Women’s Day, G4EP organized the Innovation Tech Exhibition, a landmark event dedicated to empowering and celebrating young female innovators. The exhibition provided a unique platform for secondary school girls to present ideas, inventions, and technology-driven solutions that demonstrate their creativity, intelligence, and capacity to contribute meaningfully to national development.",
      "The exhibition attracted a distinguished gathering of public officials, development partners, education stakeholders, and advocates committed to advancing opportunities for young people. Among the special guests were Mr. Olamide Fagbuji, Senior Special Assistant to the President on Climate Technology Operations; Dr. Adedayo Benjamins-Laniyi, Women Mandate Secretary of the Federal Capital Territory; and delegates from the British Council led by Mr. Etom Ofem, Regional Education Insight Lead for Sub-Saharan Africa.",
      "One of the highlights of the event was the remarkable range of student-led projects on display. Participants showcased innovations spanning robotics, coding solutions, mobile applications, digital learning tools, climate-smart agricultural technologies, renewable energy concepts, and social impact initiatives. Each project reflected not only technical ability but also a deep understanding of real-world challenges facing communities today.",
      "Also in attendance were Hon. Com. Adedayo Sunday Asefon, Senior Special Assistant to the President on Students Engagement, and Hon. Dr. Mrs. Judith Mayen Etuk-Ogbara, Chairman of G4EP, who warmly received guests and encouraged participating students to continue pursuing excellence.",
      "The event reinforced the belief that Nigeria’s future prosperity depends significantly on how effectively it nurtures the talents of its young people today. By strengthening STEM education, encouraging innovation, promoting digital literacy, and creating pathways for collaboration, the nation can unlock an enormous reservoir of talent capable of driving technological advancement and sustainable development.",
    ],
    gallery: [
      {
        src: "/images/news/innovation-tech-1.jpg",
        alt: "Students showcasing innovations at the exhibition",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/innovation-tech-2.jpg",
        alt: "Distinguished guests and participants at the exhibition",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/innovation-tech-3.jpg",
        alt: "Young female innovators presenting their projects",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/innovation-tech-4.jpg",
        alt: "Young female innovators presenting their projects",
        caption: "From the G4EP Media Team",
      },
    ],
    video: {
      src: "/images/news/innovation-tech-exhibition.mp4",
      poster: "/images/news/innovation-tech-1.jpg",
      caption: "From the G4EP Media Team",
    },
  },
  {
    slug: "eket-free-medical-outreach",
    title: "Eket Free Medical Outreach Delivers Healthcare Support to Vulnerable Residents",
    date: "January 2, 2026",
    byline: "By G4EP Tech Department",
    intro:
      "Hundreds of residents benefited from a free medical outreach in Eket Local Government Area, an initiative organized by Paradise Mission for Widows and Teenage Girls in collaboration with Hon. Dr. Judith Mayen Etuk-Ogbara.",
    image: "/images/news/medical-outreach-1.jpg",
    body: [
      "The Eket Free Medical Outreach brought hope, care, and essential healthcare services to widows, teenage girls, and other underserved members of the community. Organized by Paradise Mission for Widows and Teenage Girls in collaboration with Hon. Dr. Judith Mayen Etuk-Ogbara, the initiative was designed to improve access to healthcare and promote healthier living among vulnerable populations within Eket Local Government Area.",
      "Throughout the outreach, qualified healthcare professionals provided a range of free medical services, including general health consultations, medical screenings, basic treatments, and health education. The program created an opportunity for many residents to receive professional medical attention that may otherwise have been difficult to access due to financial and social barriers.",
      "Particular attention was given to widows and teenage girls, groups that often face unique challenges in accessing quality healthcare services. By addressing immediate health concerns while also promoting preventive care, the outreach sought to improve overall wellbeing and encourage healthier lifestyles within the community.",
      "The collaboration and support of Hon. Dr. Judith Mayen Etuk-Ogbara played a significant role in the successful planning and execution of the outreach. Her involvement helped strengthen community mobilization efforts and ensured that the program reached individuals who needed these services the most.",
      "The outreach recorded an encouraging turnout, with beneficiaries expressing appreciation for the timely medical intervention and support received. Beyond treatment and consultations, participants also took part in health awareness sessions focused on disease prevention, personal hygiene, nutrition, and the importance of regular health check-ups.",
    ],
    gallery: [
      {
        src: "/images/news/medical-outreach-1.jpg",
        alt: "Beneficiaries receiving medical attention during the outreach",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/medical-outreach-2.jpg",
        alt: "Healthcare professionals attending to residents",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/medical-outreach-3.jpg",
        alt: "Participants receiving healthcare services",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/medical-outreach-4.jpg",
        alt: "Community members participating in the medical outreach",
        caption: "From the G4EP Media Team",
      },
    ],
  },
  {
    slug: "aae-foundation-urges-support-for-ngos-accelerating-global-agenda-2030",
    title: "AAE Foundation Urges Stronger Support for NGOs Driving Global Agenda 2030",
    date: "December 19, 2025",
    byline: "By G4EP Tech Department",
    intro:
      "At the United Nations in New York, Dr. Judith Mayen Ogbara, Founder of AAE Foundation, called for stronger grant access and broader support for NGOs working to advance the Global Agenda 2030.",
    image: "/images/news/aae-foundation-1.jpg",
    body: [
      "At the NGO Branch under the Global Organization of Sustainable Development Goals office of the United Nations Department of Economic and Social Affairs in New York, Dr. Judith Mayen Ogbara, Founder of AAE Foundation, addressed development champions on the need for increased support for non-governmental organisations driving progress on the Global Agenda 2030.",
      "In her remarks, Dr. Ogbara emphasized that hardworking NGOs and foundations remain central to sustainable development, even though many continue to face serious funding limitations. She noted that these organisations are often the ones closest to the people and the communities they serve, yet they are not always able to access the kind of grant opportunities needed to expand their work effectively.",
      "According to her, improving grant access would help empower NGOs to scale their impact and deliver stronger results in key areas such as poverty eradication, climate action, education, and equality. She also appealed to the UN and international partners to streamline support systems in a way that allows credible organisations to do more of the work they are already doing on the ground.",
      "Dr. Ogbara further highlighted the importance of inclusive governance, especially the need to increase women’s participation in politics and decision-making spaces. She described women’s leadership as essential to sustainable growth and called for greater pathways that would allow more women to contribute meaningfully to public life and policy direction.",
      "AAE Foundation reaffirmed its commitment to partnering with the United Nations and other stakeholders in advancing practical solutions for sustainable development.",
    ],
    gallery: [
      {
        src: "/images/news/aae-foundation-1.jpg",
        alt: "AAE Foundation at the United Nations in New York",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/aae-foundation-2.jpg",
        alt: "Dr. Judith Mayen Ogbara speaking on behalf of AAE Foundation",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/aae-foundation-3.jpg",
        alt: "AAE Foundation engagement at the UN",
        caption: "From the G4EP Media Team",
      },
    ],
  },
  {
    slug: "nans-president-visits-g4ep-chairman",
    title: "NANS President and Executive Council Pay Courtesy Visit to G4EP Chairman",
    date: "December 10, 2025",
    byline: "By G4EP Tech Department",
    intro:
      "The National Association of Nigerian Students (NANS), led by its President, Comrade Olushola Oladoja, paid a courtesy visit to the Chairman of G4EP, Hon. Dr. Mrs. Judith Mayen Etuk-Ogbara, in recognition of the organization’s growing impact on youth development, education, and gender-focused advocacy across Nigeria.",
    image: "/images/news/nans-visit.jpg",
    body: [
      "The Chairman of G4EP, Hon. Dr. Mrs. Judith Mayen Etuk-Ogbara, recently welcomed the President of the National Association of Nigerian Students (NANS), Comrade Olushola Oladoja, alongside members of his executive council, during a courtesy visit to the organization’s office. The engagement provided an opportunity for meaningful conversations around youth development, education, leadership, and the future of Nigeria’s student population.",
      "During the meeting, the NANS President expressed appreciation for the remarkable work G4EP continues to champion across the country. He highlighted the organization’s commitment to empowering young people, advancing gender-focused initiatives, protecting the rights of the girl child, and strengthening institutions through innovation, advocacy, and strategic interventions.",
      "Comrade Oladoja also commended Dr. Etuk-Ogbara’s leadership and dedication to national development. He acknowledged the impact of G4EP’s programmes across education, entrepreneurship, technology, and community empowerment, noting that students across the country have increasingly recognized the organization’s contributions toward creating a safer and more inclusive future.",
      "In her response, Dr. Etuk-Ogbara thanked the NANS leadership for the visit and applauded their commitment to representing the interests and aspirations of Nigerian students. She reaffirmed G4EP’s dedication to building stronger partnerships with student bodies and youth-focused institutions, emphasizing the importance of collaboration in creating sustainable opportunities for future generations.",
      "The visit concluded on a positive note, reinforcing the shared vision of both institutions to advance national development through youth engagement, education, and strategic partnerships.",
    ],
    gallery: [
      {
        src: "/images/news/nans-visit.jpg",
        alt: "NANS President and executive council during their visit to G4EP",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/nans-visit2.jpg",
        alt: "NANS President and executive council during their visit to G4EP",
        caption: "From the G4EP Media Team",
      },
    ],
    video: {
      src: "/images/news/nans-visit.mp4",
      poster: "/images/news/nans-visit.jpg",
      caption: "From the G4EP Media Team",
    },
  },
  {
    slug: "judith-ogbara-hosts-taiwan-chief-of-mission-in-strategic-development-meeting",
    title: "Judith Ogbara Hosts Taiwan Chief of Mission in Strategic Development Meeting",
    date: "December 8, 2025",
    byline: "By G4EP Tech Department",
    intro:
      "A high-level meeting between Hon. Dr. Judith Mayen Ogbara and the Chief of Mission of Taiwan to Nigeria explored transformative opportunities in women empowerment, technology, agriculture, and strategic development partnerships across Nigeria’s six geopolitical zones.",
    image: "/images/news/taiwan-meeting-1.jpg",
    body: [
      "Hon. Dr. Judith Mayen Ogbara hosted the Chief of Mission of Taiwan to Nigeria, His Excellency Andy Yih-Pin Liu, alongside his wife and members of his distinguished delegation, at her Abuja office. The meeting provided a unique platform for meaningful dialogue and strategic engagement focused on advancing sustainable development initiatives that can create lasting impact across Nigeria.",
      "Central to the engagement were discussions around women empowerment, technological advancement, agricultural cooperation, and broader development partnerships. Both parties explored practical approaches for implementing programmes capable of delivering measurable outcomes in communities across the country. Particular attention was given to interventions that would directly benefit six states representing Nigeria’s six geopolitical zones: Akwa Ibom, Ondo, Imo, Kogi, Katsina, and Borno States.",
      "Throughout the meeting, emphasis was placed on solutions that are not only visionary but also practical, scalable, and capable of producing long-term benefits. The exchange highlighted the enormous potential that strategic international cooperation can bring when guided by shared values and a commitment to development.",
      "The engagement represents an important first step toward a broader partnership built on mutual respect, innovation, and sustainable development. As conversations continue and plans move toward implementation, stakeholders remain hopeful about the positive transformation these initiatives could bring to individuals, families, and communities across the country.",
    ],
    gallery: [
      {
        src: "/images/news/taiwan-meeting-1.jpg",
        alt: "Judith Ogbara hosting the Chief of Mission of Taiwan to Nigeria",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/taiwan-meeting-2.jpg",
        alt: "Strategic discussions between Judith Ogbara and the Taiwanese delegation",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/taiwan-meeting-3.jpg",
        alt: "Group photograph after the strategic development meeting",
        caption: "From the G4EP Media Team",
      },
    ],
    video: {
      src: "/images/news/taiwan-meeting.mp4",
      poster: "/images/news/taiwan-meeting-1.jpg",
      caption: "From the G4EP Media Team",
    },
  },
  {
    slug: "eket-culture-heritage-christmas-village",
    title: "Eket Culture Heritage and Christmas Village Celebrates Tradition, Unity, and Identity",
    date: "December 6, 2025",
    byline: "By G4EP Tech Department",
    intro:
      "The Eket Culture Heritage and Christmas Village brought together cultural pride, community spirit, and traditional expression in a colourful celebration of the Ekid people’s identity.",
    image: "/images/news/eket-culture-1.jpg",
    body: [
      "The Eket Culture Heritage and Christmas Village was a colourful celebration of tradition, unity, and identity as Hon. Dr. Judith Mayen Etuk was honoured to attend an event that proudly showcased the rich cultural heritage, customs, and local delicacies of the Ekid people.",
      "The day was dedicated to the display of Eket’s vibrant culture, with captivating performances from cultural troupes, exhibitions of indigenous foods, traditional costumes, and art. The atmosphere reflected a deep pride in heritage and a strong appreciation for customs that have been preserved and passed down through generations.",
      "The event also drew the presence of notable political leaders, community stakeholders, youth groups, and cultural custodians, all gathered in a shared spirit of celebration. It stood as a reminder of the value of preserving cultural identity while also strengthening unity, community connection, and local development.",
      "By honouring both tradition and togetherness, the Eket Culture Heritage and Christmas Village created a memorable atmosphere that celebrated the past while encouraging collective pride in the present.",
    ],
    gallery: [
      {
        src: "/images/news/eket-culture-1.jpg",
        alt: "Eket Culture Heritage and Christmas Village celebration",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/eket-culture-2.jpg",
        alt: "Cultural performances at the Eket Christmas Village",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/eket-culture-3.jpg",
        alt: "Guests and cultural displays at the Eket event",
        caption: "From the G4EP Media Team",
      },
      {
        src: "/images/news/eket-culture-4.jpg",
        alt: "Guests and cultural displays at the Eket event",
        caption: "From the G4EP Media Team",
      },
    ],
    video: {
      src: "/images/news/eket-culture1.mp4",
      poster: "/images/news/eket-culture-1.jpg",
      caption: "From the G4EP Media Team",
    },
  },
];