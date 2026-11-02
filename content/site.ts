/** Absolute base for metadata and the sitemap. Vercel injects the production host; override with NEXT_PUBLIC_SITE_URL. */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "Diana Mayalo",
  initials: "DM",
  role: "Data Scientist & AI Automation Engineer",
  niche: "Data scientist and AI automation engineer for machine learning systems that run in production",
  tagline:
    "I build machine learning systems, AI applications and automated data pipelines, and I take them all the way from raw data to a deployed product people actually use.",
  /** The "Now:" pill in the hero. */
  now: "Now: open to data science & AI engineering work",
  email: "dianamayalo28@gmail.com",
  location: {
    based: "Nairobi, Kenya",
  },
  github: "https://github.com/dianamayalo",
  linkedin: "https://www.linkedin.com/in/dianamayalo22/" as string | undefined,
  resumeUrl: "/Diana-Mayalo-CV.pdf" as string | undefined,
  availability: "Available for data science, ML and AI automation work",
  timeZone: "Africa/Nairobi",
  url: siteUrl,
};

/** Header links; the mobile menu and ⌘K palette list the same targets. */
export const nav = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#toolkit", label: "Toolkit" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

/** Section 02. Words wrapped in *asterisks* render in the accent colour. */
export const statement =
  "I’m Diana, a data scientist and AI automation engineer in Nairobi. I trained as an actuary, then moved into machine learning, and I like the problems where *messy, real-world data* has to become a model, a pipeline or a product that someone can act on.";

/** Career numbers under the statement; every figure is from the CV. */
export const stats = [
  { value: 4, suffix: "", label: "ML and AI products built and deployed end to end" },
  { value: 22000, suffix: "+", label: "Water points monitored by CleanWater AI" },
  { value: 30, suffix: "%", label: "Less manual reporting time after automating a client’s Excel workflow" },
];

/**
 * What I get hired for: the models and AI products, then the pipelines and
 * dashboards that make them useful.
 */
export const services = [
  {
    title: "Machine learning & predictive models",
    badge: "Core focus",
    body: "Models that classify, predict and rank, built on data that is rarely clean to begin with, validated properly, and shipped where people can use them.",
    builds: [
      "Classification and risk-scoring models (XGBoost, scikit-learn)",
      "Computer vision with CNNs (TensorFlow, Keras)",
      "NLP pipelines for text-heavy data",
    ],
    detail:
      "Feature engineering, evaluation on held-out data, augmentation where the dataset is small. CleanWater AI scores contamination risk across 22,000+ water points with XGBoost; the crop-disease classifier reaches 94% accuracy on 15 leaf classes.",
  },
  {
    title: "AI applications & LLM integration",
    body: "Full-stack AI products: an LLM in the loop, a knowledge base it answers from, and a clear path to a human when it should not answer.",
    builds: [
      "Retrieval-augmented (RAG) chat over your own documents",
      "FastAPI and Django REST backends on PostgreSQL",
      "Escalation flows and conversation persistence",
    ],
    detail:
      "Support-AI is the reference: FastAPI REST APIs, a PostgreSQL schema for conversations and customer data, RAG for routine questions, intelligent escalation for the rest, containerised with Docker. 70+ conversations, 5.0/5 satisfaction, 3.6s responses.",
  },
  {
    title: "Data pipelines & automation",
    body: "The manual, error-prone data work turned into scripts and pipelines that run on their own: cleaning, merging sources, generating reports.",
    builds: [
      "ETL pipelines across APIs, spreadsheets and satellite data",
      "Python automation replacing manual Excel processing",
      "Google Sheets and Apps Script workflows for field data",
    ],
    detail:
      "At Intelinkpro, Python scripts cut manual report generation by 30% and removed structural calculation errors. NED ingests field reports from Google Sheets through Apps Script and Python into a live map. CleanWater AI merges Google Earth Engine, WPDx and GEMS data in one pipeline.",
  },
  {
    title: "Dashboards & business intelligence",
    body: "Operational dashboards that put the right metric in front of the person who has to act on it, in Power BI, Streamlit or Plotly.",
    builds: [
      "Power BI dashboards for corporate reporting",
      "Streamlit apps for models and monitoring",
      "Geospatial views with Plotly and Mapbox",
    ],
    detail:
      "Power BI dashboards for corporate clients at Intelinkpro contributed to a 15% improvement in target outcomes; sports performance dashboards at Future Interns. NED’s Mapbox map shows Nairobi’s emergency teams where help is needed.",
  },
];

/** Section "Development philosophy": how I approach data work. */
export const principles = [
  {
    title: "Start from the decision, not the dataset",
    body: "A model is only useful if someone changes what they do because of it. I ask what the person needs to decide, then work back to the data, the features and the metric that matter.",
  },
  {
    title: "A model counts when it is deployed",
    body: "Every project here runs somewhere real: Streamlit, Docker, Cloudflare, Vercel. A notebook with a good score is the halfway point, not the result.",
  },
  {
    title: "Measure honestly",
    body: "Held-out test sets and proper classification metrics, with augmentation when the data is thin. An actuarial degree makes you suspicious of a number you cannot explain.",
  },
  {
    title: "Automate the boring parts",
    body: "If a report is produced by hand every week, it will eventually be produced wrong. Scripts, pipelines and scheduled jobs remove the errors along with the hours.",
  },
];

/** Section "How I build": the path from question to running system, in order. */
export const buildProcess = [
  {
    step: "Understand the question",
    body: "Who needs the answer, what they will do with it, and what data exists. Clear here, and the rest goes faster.",
  },
  {
    step: "Get the data honest",
    body: "Clean, merge and structure the sources: APIs, spreadsheets, satellite imagery. Most of the real work is here, so it is done carefully.",
  },
  {
    step: "Model, measure, iterate",
    body: "Baseline first, then feature engineering and tuning, evaluated on data the model has not seen.",
  },
  {
    step: "Ship it where people are",
    body: "A Streamlit app, a FastAPI service or a Power BI dashboard, containerised and deployed, so the model is used rather than admired.",
  },
  {
    step: "Keep it running",
    body: "Automated ingestion, scheduled processing and monitoring, so the system stays current without someone babysitting it.",
  },
];

/** How a freelance engagement runs; shown compactly under the services. */
export const workflow = [
  {
    step: "Discovery call",
    body: "Thirty minutes on the problem, the data you have, and whether I’m the right fit.",
  },
  {
    step: "Scoped proposal",
    body: "A written scope with milestones, deliverables, and what’s explicitly out of scope.",
  },
  {
    step: "Weekly increments",
    body: "Working results every week, a notebook, a dashboard or a deployed app, so you can steer early.",
  },
  {
    step: "Handover with docs",
    body: "Deployed, documented and reproducible, with a walkthrough so your team can run it without me.",
  },
];

/** Section "Current focus". *Asterisks* mark the accent words. */
export const focus = {
  title: "Right now: taking *ML systems* from notebook to production.",
  body: "I graduated from Moringa School’s data science programme in 2025, on top of a BSc in Actuarial Science, and I have spent the time since building products rather than demos: CleanWater AI scoring contamination risk across 22,000+ Kenyan water points, Support-AI handling customer conversations with retrieval and human escalation, NED mapping emergency reports for Nairobi’s disaster-response teams, and a CNN that identifies crop disease from a leaf photo. The thread through all of them is the same: real data, a model that is measured honestly, and a deployment someone can use today.",
  training: "Data Science, Moringa School · BSc Actuarial Science, JKUAT",
};

/** Section "Why work with me". */
export const reasons = [
  {
    title: "Production, not just notebooks",
    body: "Four projects, four deployments: Docker, Streamlit, FastAPI, Cloudflare. I build the model and the thing around it that makes it usable.",
  },
  {
    title: "Rigour from actuarial science",
    body: "A BSc in Actuarial Science means statistics, risk and model evaluation are second nature, so the numbers I report are ones I can defend.",
  },
  {
    title: "The whole pipeline",
    body: "Data collection, cleaning and feature engineering through modelling, backend integration and automation. One person who can take it end to end.",
  },
  {
    title: "Built in Kenya, for real problems",
    body: "Water quality, crop disease, emergency response, customer support: data problems with people behind them, built from Nairobi with the local context in mind.",
  },
];
