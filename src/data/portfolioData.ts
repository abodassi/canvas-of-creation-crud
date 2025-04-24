import {
  Project,
  Experience,
  Testimonial,
  ContactInfo,
  PersonalInfo,
  Vision,
  Skill,
  Company,
} from "../types";

export const personalInfo: PersonalInfo = {
  name: "Abdelrahman Abuassi",
  title: "Data Scientist",
  bio: "AI and Data Science enthusiast with a strong background in data analysis, machine learning, and web development. Experienced in building intelligent systems and interactive dashboards using tools like Python, SQL, React, and Power BI. Passionate about creating impactful tech solutions that solve real-world problems.",
  imageUrl: "/abd.jpg",
};

export const vision: Vision[] = [
  {
    id: "1",
    title: "Exploring Machine Learning Models",
    description: "Build and optimize ML models for real-world applications.",
  },
  {
    id: "2",
    title: "Data Visualization Enthusiast",
    description: "Transform complex data into clear, compelling visual stories.",
  },
  {
    id: "3",
    title: "Client relationship",
    description: "Build strong client relationships through transparent and effective communication.",
  },
];

export const skills: Skill[] = [
  { id: "1", name: "SQL", proficiency: 90, category: "Database" },
  { id: "2", name: "Database", proficiency: 90, category: "Database" },
  { id: "3", name: "Python", proficiency: 95, category: "Programming" },
  { id: "4", name: "Programming", proficiency: 95, category: "General" },
  { id: "5", name: "pandas", proficiency: 85, category: "Data Analysis" },
  { id: "6", name: "Data Analysis", proficiency: 90, category: "General" },
  { id: "7", name: "Power BI", proficiency: 85, category: "Visualization" },
  { id: "8", name: "Visualization", proficiency: 80, category: "General" },
  { id: "9", name: "Tableau", proficiency: 80, category: "Visualization" },
  { id: "10", name: "Django", proficiency: 70, category: "Web Development" },
  { id: "11", name: "Web Development", proficiency: 70, category: "General" },
  { id: "12", name: "NLP", proficiency: 65, category: "Machine Learning" },
  { id: "13", name: "Machine Learning", proficiency: 75, category: "General" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Sales analysis power bi dashboard",
    description: "An interactive Power BI dashboard providing insights into sales performance, trends, and key metrics.",
    imageUrl: "/1.png",
    projectUrl: "https://app.powerbi.com/groups/me/reports/116ddb0a-e54c-4b10-81fa-6ce45f4ab4c0/2087ec5c198cc9da7bed?language=en-US&experience=power-bi",
    technologies: ["power bi", "Excel"],
  },
  {
    id: "2",
    title: "Phones Sales BI Dashboard",
    description: "A comprehensive Power BI report analyzing phone sales data, customer trends, and revenue insights.",
    imageUrl: "/2.png",
    projectUrl: "https://app.powerbi.com/groups/26bfb640-3df5-42a5-8a79-037c52c047f7/reports/9e9bc081-3776-43eb-96ea-73a994512428/9e1bc9acca5cd3c76da2?language=en-US&experience=power-bi",
    technologies: ["power bi", "Excel"],
  },
  {
    id: "3",
    title: "Music Party Sales Tableau Dashboard",
    description: "A Tableau dashboard visualizing sales data for music events, highlighting revenue and attendance trends.",
    imageUrl: "/3.png",
    projectUrl: "https://public.tableau.com/app/profile/abdel.rahman.abu.assi/viz/SimplyMusicdashboard_17343482550740/DetailedView",
    technologies: ["Excel", "tableau"],
  },
  {
    id: "4",
    title: "Real Estate Price Prediction",
    description: "A machine learning project predicting real estate prices using regression models.",
    imageUrl: "/4.png",
    projectUrl: "https://colab.research.google.com/drive/1sD8eXi6o2DV0Dj3cNUCkIS-QBcWF5V9g",
    technologies: ["python", "pandas", "Numpy", "ML"],
  },
  {
    id: "5",
    title: "Student Information Analysis",
    description: "A Tableau project analyzing student data from The Open University, focusing on GPA and performance metrics",
    imageUrl: "/5.png",
    projectUrl: "https://public.tableau.com/app/profile/abdel.rahman.abu.assi/viz/EC2_17339244808910/GPASAVG",
    technologies: ["tableau", "Excel"],
  },
  {
    id: "6",
    title: "SQL Data Analysis Project",
    description: "A project demonstrating SQL queries and data manipulation for business insights.",
    imageUrl: "/6.png",
    projectUrl: "https://colab.research.google.com/drive/1ZUKI-t6kp6Nr0j_C3_x3EMOuPMN2ui1A#scrollTo=JYwsFGIZdTWP",
    technologies: ["python", "pandas", "Excel", "SQL"],
  },
  {
    id: "7",
    title: "Depression Prediction Model",
    description: "A machine learning model predicting depression levels based on survey data.",
    imageUrl: "/7.png",
    projectUrl: "https://colab.research.google.com/drive/10z0l-v_FVQD5gui3fhiQKS5wcs2R0NER",
    technologies: ["python", "pandas", "Numpy", "ML"],
  },
  {
    id: "8",
    title: "Dog vs Cat Image Classification",
    description: "A CNN-based deep learning project classifying images of dogs and cats.",
    imageUrl: "/8.png",
    projectUrl: "https://colab.research.google.com/drive/16FfUXbdmgaKfoslY1rDRRscUeOS7tO8M",
    technologies: ["python", "pandas", "Numpy", "Deep Learning", "Tensorflow"],
  },
  {
    id: "9",
    title: "CAR vs MOTOR Image Classification",
    description: "A CNN-based deep learning project classifying images of Cars and Motors.",
    imageUrl: "/9.png",
    projectUrl: "https://colab.research.google.com/drive/1iVOTuuWwWwhahsjohX235oqwJa-zVr4c",
    technologies: ["python", "pandas", "Numpy", "Deep learning", "Tensorflow"],
  },
  {
    id: "10",
    title: "Sentiment Analysis",
    description: "A Reccurent-based deep learning project classifying Sentiments.",
    imageUrl: "/10.png",
    projectUrl: "https://colab.research.google.com/drive/1ESxyAc46Mw6GKlog-IjzaZL9LmQgfdRX#scrollTo=cbXq3wsNSD9_",
    technologies: ["python", "pandas", "  Numpy", "ML", "NLP"],
  },
  {
    id: "11",
    title: "scraping",
    description: "A scraping methods in python.",
    imageUrl: "/11.png",
    projectUrl: "https://colab.research.google.com/drive/1KW-AzgFb_WpebgqH8lcvxLbgvaUJICDs",
    technologies: ["python", "pandas", "Numpy", "NLP"],
  },
  {
    id: "12",
    title: "home  price prediction",
    description: "a web app that predicte California house price  🏘.",
    imageUrl: "/real-estat.png",
    projectUrl: "https://bmc5qhhnrjbkhdapppuounr.streamlit.app/",
    technologies: ["python", "pandas", "Numpy", "NLP","Streamlit", "web dev","html", "CSS", "js"],
  },
   {
    id: "13",
    title: "California housing price Dashboard",
    description: "tableau dashboard for California houseing price   🏘.",
    imageUrl: "/13.png",
    projectUrl: "https://bmc5qhhnrjbkhdapppuounr.streamlit.app/",
    technologies: ["tablue","Excel","EDA"],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "NatHealth",
    position: "Trainee Business Intelligence analysts",
    duration: "September 2024 – November 2024",
    description: "Gained experience in organizing and visualizing data using tools such as Power BI",
  },
  {
    id: "2",
    company: "correlation-one",
    position: "Trainee as data analysts",
    duration: "August 2024 –May 2025",
    description: "trained for essential tools for data analysis (python, excel, Tableau, SQL, Looker Studio)",
  },
  {
    id: "3",
    company: "Dot Academy",
    position: "Trainee as data analysts",
    duration: "December 2024 – March 2025",
    description: "Gained experience dealing with python web framework like djang and flask.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sana Ali",
    position: "Training Manager",
    company: "Correction-one",
    quote: "Abdel Rahman Abu Assi excelled in the Tech for Jobs Fellowship, demonstrating strong teamwork, communication, and technical skills. He's adaptable, innovative, and effectively communicates complex data insights. Contact me at sana.ali@correlation-one.com.",
    imageUrl: "/c1.jpg",
  },
  {
    id: "2",
    name: "Rasha Mohammed Nairn Saadeh",
    position: "Student activities and programs coordinator",
    company: "Hayat Fund",
    quote: "I recommend Abdalrahman Abuassi, an outstanding Hayat fund student, who demonstrated good qualities, creative ideas, and a strong work ethic. Contact me at Rasha@hayatdund.org",
    imageUrl: "/fund.jpg",
  },
  {
    id: "3",
    name: "Dr. Amneh Alamleh",
    position: "Lecturer at Data Science and Artificial Intelligence Department",
    company: "Zarqa University",
    quote: "I highly recommend Abdalrahman Abuassi. As his professor, I was impressed by his intellect, analytical skills, and passion for AI. He consistently exceeded expectations with his academic achievements, demonstrating diligence, critical thinking, and a commitment to excellence. Abdalrahman excels at creative problem-solving and has strong communication skills.",
    imageUrl: "/zu.jpg",
  },
];

export const contactInfo: ContactInfo = {
  email: "abu2002assi@gmail.com",
  phone: "+962781277516",
  location: "Jordan, Amman",
};

export const companies: Company[] = [
  {
    id: "1",
    name: "TechCorp",
    description: "A leading technology corporation specializing in cloud solutions.",
    logoUrl: "/placeholder.svg",
    website: "https://example.com/techcorp"
  }, 
  {
    id: "2",
    name: "DataInsights",
    description: "Innovative data analytics company focused on business intelligence.",
    logoUrl: "/placeholder.svg",
    website: "https://example.com/datainsights"
  },
  {
    id: "3",
    name: "AI Solutions",
    description: "Pioneering artificial intelligence solutions for enterprise clients.",
    logoUrl: "/placeholder.svg",
    website: "https://example.com/aisolutions"
  }
]
