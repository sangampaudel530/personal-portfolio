import { Github, Twitter, Linkedin } from 'lucide-react';

import LogoPython from '/public/images/logos/icon-python.svg';
import LogoPandas from '/public/images/logos/icon-pandas.svg';
import LogoNumpy from '/public/images/logos/icon-numpy.svg';
import LogoPytorch from '/public/images/logos/icon-pytorch.svg';
import LogoGitHub from '/public/images/logos/icon-github.svg';
import LogoTensorflow from '/public/images/logos/icon-tensorflow.svg';
import LogoKubernetes from '/public/images/logos/icon-kubernetes.svg';
import LogoJupyter from '/public/images/logos/icon-jupyter.svg';
import LogoKaggle from '/public/images/logos/icon-kaggle.svg';
import LogoStreamlit from '/public/images/logos/icon-streamlit.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoDocker from '/public/images/logos/icon-docker.svg';
import LogoTableau from '/public/images/logos/icon-tableau.svg';
import LogoVscode from '/public/images/logos/icon-vscode.svg';
import LogoApachespark from '/public/images/logos/icon-apache-spark.svg';
import LogoAws from '/public/images/logos/icon-aws.svg';


import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoOmdena from '/public/images/logos/logo-omdena.png';
import LogoKaggle1 from '/public/images/logos/logo-kaggle.png';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectSentiment from '/public/images/project-sentiment.png';
import ProjectAqi from '/public/images/project-aqi.png';
import ProjectCovid from '/public/images/project-covid.png';

import AvatarNitish from '/public/images/avatar-nitish.png';
import AvatarMaria from '/public/images/avatar-maria.png';
import AvatarDhaval from '/public/images/avatar-dhaval.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/sangampaudel530',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://x.com/sangampaudel530 ',
  KAGGLE: 'https://www.kaggle.com/sangampaudel530'
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/sangampaudel530',
  },
  {
    icon: Twitter,
    url: 'https://x.com/sangampaudel530',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/sangampaudel530/',
  },
];

export const TECHNOLOGIES = [
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'Pandas',
    logo: LogoPandas,
    url: 'https://pandas.pydata.org/',
  },
  {
    label: 'NumPy',
    logo: LogoNumpy,
    url: 'https://numpy.org/',
  },
  
  {
    label: 'GitHub',
    logo: LogoGitHub,
    url: 'https://github.com/',
  },
  {
    label: 'TensorFlow',
    logo: LogoTensorflow,
    url: 'https://www.tensorflow.org/',
  },
  {
    label: 'PyTorch',
    logo: LogoPytorch,
    url: 'https://pytorch.org/',
  },
  {
    label: 'Kubernetes',
    logo: LogoKubernetes,
    url: 'https://kubernetes.io/',
  },
  {
    label: 'Jupyter',
    logo: LogoJupyter,
    url: 'https://jupyter.org/',
  },
  {
    label: 'Kaggle',
    logo: LogoKaggle,
    url: 'https://www.kaggle.com/',
  },
  {
    label: 'Streamlit',
    logo: LogoStreamlit,
    url: 'https://streamlit.io/',
  },

  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
  {
    label: 'Tableau',
    logo: LogoTableau,
    url: 'https://www.tableau.com/',
  },
  {
    label: 'VS Code',
    logo: LogoVscode,
    url: 'https://code.visualstudio.com/',
  },
  {
    label: 'Apache Spark',
    logo: LogoApachespark,
    url: 'https://spark.apache.org/',
  },
  {
    label: 'AWS',
    logo: LogoAws,
    url: 'https://aws.amazon.com/',
  },
];


export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Independent Freelancer',
    startDate: new Date(2024, 10),
    currentlyWorkHere: true,
    summary: [
      'Worked as a freelancer on Upwork.',
      'Worked on various projects related to data science, machine learning, and Artificial Intelligence.',
      'Worked with clients from different countries including the USA, Australia, and Poland.', 
    ]
  },
  {
    logo: LogoKaggle1,
    logoAlt: 'Kaggle logo',
    position: 'Kaggle Expert',
    startDate: new Date(2024, 6),
    currentlyWorkHere: true,
    summary: [
    'Achieved Kaggle Expert status by consistently performing well in competitions and contributing to the community.',
    'Participated in various Kaggle competitions, showcasing skills in data analysis, machine learning, and model development.',
    'Contributed to Kaggle forums and discussions, helping other data scientists and machine learning enthusiasts.',
    ],
  },
  {
    logo: LogoOmdena,
    logoAlt: 'Omdena logo',
    position: 'Machine Learning Intern',
    startDate: new Date(2025, 4),
    currentlyWorkHere: true,
    summary: ['Worked as Machine learning intern at Omdena.',
      'Worked on various projects related to data science, machine learning, and Artificial Intelligence.',
      'Worked with collaborators from different countries.'],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Kathmandu Valley Air Quality Forecasting',
    description:
      'A web application that provides real-time air quality data and forecasts for Kathmandu Valley. It uses machine learning models to predict air quality levels based on historical data and weather conditions.',
    url: 'https://github.com/sangampaudel530/Comprehensive-Analysis-and-Forecasting-of-Air-Quality-in-Kathmandu',
    previewImage: ProjectAqi,
    technologies: [
      'Prophet',
      'Random Forest',
      'Streamlit',
      'Python',
      'Pandas',
      'Plotly'
    ],
  },
  {
    name: 'Movie Review Sentiment Analyser',
    description:
      'A web application that allows users to analyze the sentiment of movie reviews using machine learning models. It provides insights into the overall sentiment of the reviews and helps users make informed decisions about movies.',
    url: 'https://github.com/sangampaudel530/movie-review-sentiment-analyzer',
    previewImage: ProjectSentiment,
    technologies: [
      'Python',
      'Natural Language Processing',
      'Machine Learning',
      'Transformers',
      'Streamlit',
      'Hugging Face',
      'BERT',
      'Selenium',
      'Docker',
      'Azure',
      'PyTorch',
      'GitHub Actions',
      'Kaggle Datasets',
    ],
  },
  {
    name: 'COVID-19 Exploratory Data Analysis',
    description:
      'An interactive dashboard that provides insights into the COVID-19 pandemic through data visualization. It includes various charts and graphs to analyze the spread of the virus, vaccination rates, and other related statistics.',
    url: 'https://github.com/sangampaudel530/COVID19_EDA_Project',
    previewImage: ProjectCovid,
    technologies: [
      'Python',
      'Matplotlib',
      'Seaborn',
      'Pandas',
      'Plotly',
      'Dashboard',
      'streamlit'
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Maria Nadeem',
    personAvatar: AvatarMaria,
    title: '3x Grandmaster - Kaggle',
    testimonial:
      'Sangam is a very talented and hardworking individual. He has a deep understanding of data science and machine learning concepts, and he is always eager to learn and improve his skills. I highly recommend him for any data science or machine learning project.',
  },
  {
    personName: 'Dhaval Patel',
    personAvatar: AvatarDhaval,
    title: 'Data Scientist - Bloomberg ',
    testimonial:
      'Great guy, highly recommended for any Data Science and Machine Learning Job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Nitish Singh',
    personAvatar: AvatarNitish,
    title: 'Founder - CampusX',
    testimonial:
      'Sangam is a very pasionate and hardworking individual. His problem-solving skills are top-notch and he is always eager to learn and improve his skills. I highly recommend him for any data science or machine learning project.',
  },
];
