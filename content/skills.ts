export interface SkillGroup {
  title: string;
  /** One line on what the group lets me build. */
  body: string;
  items: string[];
  /** Small qualifier shown beside the title, e.g. how deep the experience goes. */
  badge?: string;
}

/**
 * Modelling first, then the data, engineering and delivery work around it.
 * Every item here appears in a project or a role in `projects.ts` or on the CV.
 */
export const skills: SkillGroup[] = [
  {
    title: "Machine learning",
    body: "Supervised models that classify, predict and rank, evaluated properly.",
    items: ["Supervised learning", "Classification", "Regression", "Predictive modelling", "Gradient boosting (XGBoost)", "Scikit-learn", "Feature engineering", "Model evaluation"],
  },
  {
    title: "Deep learning & computer vision",
    badge: "Core focus",
    body: "Neural networks for images, trained to generalise beyond the training set.",
    items: ["CNNs", "TensorFlow", "Keras", "Image classification", "Data augmentation"],
  },
  {
    title: "NLP & LLMs",
    body: "Text pipelines and language models wired into real products.",
    items: ["NLP pipelines", "LLM integration", "RAG", "AI agents", "Conversation systems"],
  },
  {
    title: "Data engineering",
    body: "The pipeline work that makes the data trustworthy before any model sees it.",
    items: ["ETL pipelines", "Data cleaning & transformation", "SQL", "PostgreSQL", "MySQL", "Pandas", "NumPy", "Spark", "API integration"],
  },
  {
    title: "AI engineering & backend",
    body: "APIs and services that put a model behind a product.",
    items: ["Python", "FastAPI", "Django REST Framework", "REST APIs", "Async Python", "Backend architecture", "React"],
  },
  {
    title: "Automation & MLOps",
    body: "Deploying, scheduling and keeping it running.",
    items: ["Docker", "Git", "GitHub Actions", "CI/CD", "Linux / Bash", "Model deployment", "Google Apps Script", "Google Sheets API", "AWS (EC2, S3, Lambda)"],
  },
  {
    title: "Visualisation & BI",
    body: "Dashboards that put the metric in front of the person who acts on it.",
    items: ["Power BI", "Tableau", "Plotly", "Streamlit", "Advanced Excel", "Interactive dashboards"],
  },
  {
    title: "Geospatial",
    body: "Satellite and map data for problems with a location.",
    items: ["Google Earth Engine", "Plotly Mapbox", "Geospatial analysis", "GIS"],
  },
  {
    title: "Statistics",
    body: "The actuarial foundation under the modelling.",
    items: ["Statistical analysis", "Exploratory data analysis", "SPSS", "Actuarial science"],
  },
];

/** The two big scrolling rows above the toolkit grid. */
export const marquees = [
  ["Python", "XGBoost", "TensorFlow", "Scikit-learn", "Pandas", "SQL", "FastAPI"],
  ["Streamlit", "Docker", "Power BI", "Earth Engine", "Plotly", "PostgreSQL", "AWS"],
];
