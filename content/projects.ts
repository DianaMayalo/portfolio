export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  /** CSS object-position for cropped renders (work-row pills, case-study hero). Defaults to center. */
  position?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Short name for the big work rows. */
  name: string;
  /** Mono label above the summary, e.g. "ML & remote sensing". */
  category: string;
  tagline: string;
  summary: string; // 2–3 sentences for the home-page card
  /** One-line result, shown on the card and above the fold on the case study. */
  outcome: string;
  problem: string[];
  role: string[];
  decisions: { heading: string; body: string }[];
  outcomes: string[];
  stack: string[];
  links: { demo?: string; demoNote?: string; github?: string };
  images: ProjectImage[];
  cardImage?: ProjectImage;
}

export const projects: Project[] = [
  {
    slug: "cleanwater-ai",
    title: "CleanWater AI — Water-quality risk across Kenya",
    name: "CleanWater AI",
    category: "ML & remote sensing",
    outcome: "94% accuracy predicting contamination risk across 22,000+ Kenyan water points, live in production",
    tagline: "An end-to-end ML system that monitors water quality across 22,000+ water points in Kenya.",
    summary:
      "Satellite imagery from Google Earth Engine, crowdsourced water-point data from WPDx and GEMS, and an XGBoost model that predicts contamination risk, deployed as a Streamlit app so unsafe sources can be identified before they affect communities.",
    problem: [
      "Kenya has tens of thousands of water points spread across a vast landscape, and no practical way to test each one regularly. By the time contamination is confirmed, a community may already have been drinking from the source for weeks.",
      "The signals exist, just not in one place: satellite imagery of the surrounding land, crowdsourced records of each water point’s condition, and water-quality monitoring data from external APIs. CleanWater AI brings them together and turns them into a risk score per water point.",
    ],
    role: [
      "Solo project as ML engineer and data pipeline architect: the multi-source ETL pipeline, the XGBoost model and its NLP-based processing, the Streamlit application, and the Docker deployment.",
    ],
    decisions: [
      {
        heading: "Multi-source data, one pipeline",
        body: "Google Earth Engine geospatial data is combined with the WPDx and GEMS datasets in a single ETL pipeline, so every water point carries both what the satellite sees around it and what people have reported about it.",
      },
      {
        heading: "XGBoost with NLP-based processing",
        body: "Gradient boosting handles the tabular, mixed-quality features well; NLP-based processing extracts signal from the free-text fields in the crowdsourced records instead of discarding them. The model is evaluated on held-out data and reaches 94% accuracy.",
      },
      {
        heading: "Deployed for monitoring, not a one-off analysis",
        body: "The application is containerised with Docker and served as an interactive Streamlit app for real-time monitoring and risk assessment, so the system supports ongoing public-health decisions rather than a single report.",
      },
      {
        heading: "Designed for proactive intervention",
        body: "The output is a ranked view of potentially unsafe sources, so limited testing and intervention capacity can go where the risk is highest first.",
      },
    ],
    outcomes: [
      "94% accuracy on contamination-risk prediction",
      "22,000+ water points across Kenya in one system",
      "Multi-source pipeline: Google Earth Engine, WPDx and GEMS",
      "Live in production as a Docker-packaged Streamlit app",
    ],
    stack: ["Python", "XGBoost", "NLP", "Pandas", "Google Earth Engine", "WPDx & GEMS APIs", "ETL", "Docker", "Streamlit"],
    links: {
      demo: "https://cleanwatai.streamlit.app/",
      github: "https://github.com/DianaMayalo/CleanWatAI",
    },
    images: [
      {
        src: "/images/cleanwater-ai.png",
        alt: "CleanWater AI: water-quality risk monitoring across Kenyan water points",
        caption: "Risk assessment across 22,000+ water points, from satellite and crowdsourced data.",
      },
    ],
  },
  {
    slug: "support-ai",
    title: "Support-AI — AI customer support with human escalation",
    name: "Support-AI",
    category: "Full-stack AI platform",
    outcome: "5.0/5 satisfaction across 70+ conversations, 3.6s responses and a 24.3% escalation rate",
    tagline: "A full-stack AI customer-support platform with intelligent chat and smart escalation.",
    summary:
      "LLM-powered chat that answers routine support questions from a knowledge base, persists every conversation, and escalates the complex cases to a human. FastAPI and PostgreSQL behind it, React in front, Docker around it.",
    problem: [
      "Routine support questions take up most of a support team’s day, but a bot that answers everything, including the things it does not know, costs more trust than it saves. The useful version answers what it can from the organisation’s own knowledge and hands the rest to a person without losing the thread.",
      "Support-AI is that version, built as a full product: API, database, AI integration and deployment, not a chat demo.",
    ],
    role: [
      "Solo project as AI engineer and full-stack developer: backend API design in FastAPI, the PostgreSQL schema for conversations and customer data, RAG and escalation logic, the React front end, and the Docker deployment.",
    ],
    decisions: [
      {
        heading: "Retrieval before generation",
        body: "Answers are grounded in a knowledge base through retrieval-augmented generation, so the assistant responds from the organisation’s own content rather than from whatever the model happens to believe.",
      },
      {
        heading: "Escalation as a first-class path",
        body: "Complex issues are escalated to a human with the conversation intact. The escalation rate is tracked as a product metric: 24.3% of conversations, which is the share the AI should not be handling alone.",
      },
      {
        heading: "A real backend, not a wrapper",
        body: "FastAPI REST APIs and a PostgreSQL architecture for conversation persistence and customer-data management, designed so the platform scales past a single demo tenant.",
      },
      {
        heading: "Measured in production",
        body: "Conversations, escalation rate, satisfaction and response time are all tracked, so the quality of the assistant is a number rather than an impression.",
      },
    ],
    outcomes: [
      "70+ conversations handled",
      "5.0/5 customer satisfaction",
      "3.6s average response time",
      "24.3% escalation rate, with the conversation handed to a human intact",
      "Containerised with Docker and deployed end to end",
    ],
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "LLM integration", "RAG", "Docker"],
    links: {
      demo: "https://supportai.dianamayalo.workers.dev/",
    },
    images: [
      {
        src: "/images/support-ai.png",
        alt: "Support-AI chat interface answering a customer question",
        caption: "The chat surface: knowledge-base answers, with escalation to a person when needed.",
        position: "top",
      },
    ],
  },
  {
    slug: "nairobi-emergency-dashboard",
    title: "Nairobi Emergency Dashboard — Real-time crisis response for Nairobi County",
    name: "Nairobi Emergency Dashboard",
    category: "Emergency response · geospatial",
    outcome: "Live with real users at NADEMA, turning field reports into a real-time map of where help is needed",
    tagline: "A real-time emergency command centre that automates crisis response for Nairobi County.",
    summary:
      "Built for NADEMA, the Nairobi Disaster & Emergency Management Authority. Field reports arrive through Google Sheets, Python automation processes them, and a Plotly Mapbox map shows responders where help is needed most, in real time.",
    problem: [
      "During a crisis, NADEMA’s field teams send in reports faster than anyone can collate them. The information that decides where to send help first sits in scattered sheets and messages, and the picture is always minutes to hours out of date.",
      "NED is the working product that closes that gap: a single intake for field reports, automated processing, and a live map. It is deployed with real users rather than built as a prototype.",
    ],
    role: [
      "Solo project as AI and backend engineer, built for NADEMA: the Google Sheets intake and Apps Script automation, the Python processing pipeline, the Plotly Mapbox visualisations and the Streamlit dashboard.",
    ],
    decisions: [
      {
        heading: "Google Sheets as the field intake",
        body: "Field teams already know spreadsheets and can fill one from a phone with poor connectivity. Using Google Sheets as the collection layer meant no new app to roll out and no training before the first report came in.",
      },
      {
        heading: "Automation between the sheet and the map",
        body: "Google Apps Script and Python ingest and process each report automatically, so the dashboard reflects the field without anyone copying data by hand.",
      },
      {
        heading: "A map as the home screen",
        body: "Interactive Plotly Mapbox visualisations show incidents across Nairobi County, so the first glance answers where help is needed most and response can be prioritised.",
      },
      {
        heading: "Streamlit for speed of deployment",
        body: "Streamlit got a usable, deployed dashboard into responders’ hands quickly, and keeps the whole system in Python so one person can maintain it.",
      },
    ],
    outcomes: [
      "Deployed and in use for Nairobi disaster-response workflows",
      "Automated field-report ingestion through Google Sheets, Apps Script and Python",
      "Real-time geospatial view of incidents across Nairobi County",
      "Supports live emergency coordination with measurable impact on response",
    ],
    stack: ["Python", "Streamlit", "Google Sheets API", "Google Apps Script", "Plotly", "Mapbox", "Data automation"],
    links: {
      demo: "https://nairobi-dashboard-demo.vercel.app/try",
    },
    images: [
      {
        src: "/images/nairobi-dashboard.png",
        alt: "Nairobi Emergency Dashboard map of incident reports across Nairobi County",
        caption: "Incidents across Nairobi County, updated as field reports arrive.",
      },
    ],
  },
  {
    slug: "crop-disease-classification",
    title: "Crop Disease Classification — A CNN that reads a leaf",
    name: "Crop Disease CNN",
    category: "Deep learning · computer vision",
    outcome: "94% accuracy across 15 healthy and diseased leaf classes, deployed as a Streamlit app farmers can use",
    tagline: "A deep learning model that identifies 15 types of healthy and diseased crop leaves from a photo.",
    summary:
      "A custom convolutional neural network trained on 15,000+ PlantVillage images with data augmentation, reaching 94% accuracy on multi-class classification, and deployed as an interactive Streamlit app where a farmer can upload a leaf photo and get an instant prediction.",
    problem: [
      "Crop disease spreads quietly. By the time it is obvious to the eye, a farmer may have lost a good part of the harvest, and expert diagnosis is rarely available where and when it is needed.",
      "A photo of a leaf contains most of what an agronomist would look at. The project asks whether a model can make that first diagnosis instantly, on a phone, so treatment starts early.",
    ],
    role: [
      "Solo project as machine learning engineer: dataset preparation from PlantVillage, the CNN architecture, augmentation and preprocessing, training and evaluation, and the Streamlit deployment.",
    ],
    decisions: [
      {
        heading: "A custom CNN, trained from the data up",
        body: "A convolutional architecture built for the task, with the number of classes, image size and depth chosen for the dataset rather than a generic backbone.",
      },
      {
        heading: "Augmentation to generalise",
        body: "Data augmentation and preprocessing techniques widen the training distribution, so the model handles leaf photos taken in conditions the dataset does not cover.",
      },
      {
        heading: "Fifteen classes, not healthy versus sick",
        body: "Multi-class classification across 15 healthy and diseased categories, so the output names the disease and points at a treatment, not just a warning.",
      },
      {
        heading: "Deployed where a farmer can reach it",
        body: "The trained model runs inside an interactive Streamlit app: upload a leaf photo, get a prediction. Evaluated with proper classification metrics before it went live.",
      },
    ],
    outcomes: [
      "94% accuracy on multi-class classification",
      "15 healthy and diseased leaf classes",
      "Trained on 15,000+ PlantVillage images with augmentation",
      "Interactive Streamlit deployment for instant predictions",
    ],
    stack: ["Python", "TensorFlow", "Keras", "CNN", "Computer vision", "Scikit-learn", "Streamlit"],
    links: {
      github: "https://github.com/DianaMayalo/Crop-Disease-Detection",
    },
    images: [
      {
        src: "/images/crop-disease.png",
        alt: "Crop disease classifier identifying a diseased leaf",
        caption: "Upload a leaf photo, get a diagnosis across 15 classes.",
      },
    ],
  },
];

export interface Experience {
  company: string;
  companyUrl?: string;
  title: string;
  location?: string;
  period: string;
  /** Marks the role with a "Now" dot. */
  current?: boolean;
  intro: string;
  bullets: string[];
  stack: string[];
}

/** CV order: most recent role first. */
export const experience: Experience[] = [
  {
    company: "Intelinkpro",
    title: "Data Analyst (Freelance)",
    location: "Remote",
    period: "Oct 2023 – Apr 2025",
    intro:
      "Freelance analytics for corporate clients: automating their reporting, building their Power BI dashboards and getting their transactional data into a state that analytics could run on.",
    bullets: [
      "Automated Excel processing: developed Python scripts to process complex client datasets programmatically, reducing manual report generation time by 30% while eliminating structural calculation errors.",
      "Business intelligence: designed and deployed scalable Power BI dashboards for corporate clients, providing real-time operational metrics that improved decision-making and contributed to a 15% improvement in target outcomes.",
      "Data preparation: cleaned and structured messy transactional databases using SQL and Python, preparing high-quality datasets for BI and analytics pipelines.",
      "Client project management: managed end-to-end analytical workflows, ensuring timely delivery and alignment with business requirements across multiple concurrent projects.",
    ],
    stack: ["Python", "SQL", "Power BI", "Advanced Excel"],
  },
  {
    company: "Future Interns",
    title: "Data Analyst Intern",
    location: "Bengaluru, India",
    period: "Sep 2024 – Nov 2024",
    intro:
      "A data analyst internship across predictive modelling, exploratory analysis and dashboarding, delivered in agile sprints with a cross-functional team.",
    bullets: [
      "Predictive modelling: built and validated a loan eligibility classification model in Python, achieving 81.3% test accuracy through systematic feature engineering and model tuning.",
      "Exploratory data analysis: conducted deep statistical analysis on large datasets to identify patterns, distributions and predictive features for model training.",
      "Dashboard development: translated complex sports performance metrics into interactive Power BI dashboards, enabling stakeholders to extract tactical insights.",
      "Agile environment: executed iterative data sprints within agile workflows, collaborating with cross-functional teams to deliver rapid prototypes and insights.",
    ],
    stack: ["Python", "Feature engineering", "Statistical analysis", "Power BI"],
  },
];

export interface EducationItem {
  school: string;
  /** Full name shown after the short one, e.g. the university's long form. */
  place?: string;
  degree: string;
  period: string;
  note: string;
}

/** Shown as the closing block of the Experience section. */
export const education = {
  period: "2019 – 2025",
  title: "Actuarial science, then data science",
  intro:
    "An actuarial degree for the statistics and the discipline, then a data science bootcamp for the modern toolkit. Both finished; both show up in how I work.",
  items: [
    {
      school: "Moringa School",
      degree: "Data Science Bootcamp",
      period: "Feb 2025 – Aug 2025",
      note: "Graduated November 2025",
    },
    {
      school: "JKUAT",
      place: "Jomo Kenyatta University of Agriculture and Technology",
      degree: "BSc Actuarial Science",
      period: "Sep 2019 – Jun 2024",
      note: "Graduated June 2024",
    },
  ] satisfies EducationItem[],
};
