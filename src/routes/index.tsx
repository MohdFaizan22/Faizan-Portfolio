import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "motion/react";
import { Preloader } from "@/components/Preloader";
import { ParticleField } from "@/components/ParticleField";
import { Marquee } from "@/components/Marquee";
import { Reveal, ImageReveal, SectionReveal, GlowReveal, StaggerReveal, StaggerItem, sectionChildVariants, ScrollAwayWrapper } from "@/components/Motion";
import { Linkedin, Github, Twitter, Instagram, X, ExternalLink, Cpu, Database, Sliders, LineChart, ShieldCheck, Code, Layers, Maximize2 } from "lucide-react";
import profile from "@/assets/profile.jpeg";
import faizanAbout from "@/assets/faizan-about.jpeg";
import hero from "@/assets/hero.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.png";
import p01 from "@/assets/p01.png";
import p02 from "@/assets/p02.png";
import p03 from "@/assets/p03.png";
import g01 from "@/assets/g01.png";
import g02 from "@/assets/g02.png";
import g03 from "@/assets/g03.png";
import g04 from "@/assets/g04.png";
import g05 from "@/assets/g05.png";
import q01 from "@/assets/q01.png";
import q02 from "@/assets/q02.png";
import q03 from "@/assets/q03.png";
import q04 from "@/assets/q04.png";
import faii from "@/assets/faii.PNG";
import m01 from "@/assets/m01.png";
import m02 from "@/assets/m02.png";
import m03 from "@/assets/m03.png";
import m04 from "@/assets/m04.png";
import m05 from "@/assets/m05.png";
import z1 from "@/assets/z1.png";
import z2 from "@/assets/z2.png";
import z3 from "@/assets/z3.png";
import z4 from "@/assets/z4.png";
import l1 from "@/assets/l1.png";
import l2 from "@/assets/l2.png";
import l3 from "@/assets/l3.png";
import l4 from "@/assets/l4.png";
import l5 from "@/assets/l5.png";
import resumePdf from "@/assets/resume.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohd Faizanullah — Junior Data Scientist & ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mohd Faizanullah — Junior Data Scientist & ML Engineer crafting data-driven experiences, predictive models and NLP systems.",
      },
      { property: "og:title", content: "Mohd Faizanullah — Data Scientist & ML Engineer" },
      { property: "og:description", content: "Crafting data-driven experiences." },
    ],
  }),
  component: Index,
});

export const projects = [
  {
    n: "01",
    title: "House Price Prediction",
    stack: "Python · Scikit-learn · XGBoost",
    img: p1,
    link: "https://huggingface.co/spaces/datawizard116/House-Price-Prediction",
    details: {
      type: "End-to-End Machine Learning + Deployment Project",
      description: "Built a complete machine learning pipeline to predict Bengaluru house prices using advanced preprocessing, feature engineering, outlier handling, model comparison, hyperparameter tuning, Flask API development, and Streamlit frontend.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Flask", "Streamlit", "Matplotlib"],
      features: [
        "Cleaned messy real-estate data",
        "Converted sqft ranges into numeric values",
        "Engineered geospatial locality pricing feature",
        "Removed outliers using IQR method",
        "Applied log transformation to improve model performance",
        "Compared Linear Regression, Ridge Regression, and XGBoost",
        "Achieved R² score of 0.827 using XGBoost",
        "Performed hyperparameter tuning using GridSearchCV",
        "Visualized feature importance",
        "Built Flask prediction API",
        "Developed interactive frontend UI"
      ],
      highlights: [
        "Real-world ML preprocessing pipeline",
        "Feature engineering using groupby locality pricing",
        "Cross-validation based model evaluation",
        "End-to-end deployment-ready ML system",
        "Full-stack ML workflow from training to web app"
      ],
      metrics: [
        { label: "Best Model", value: "XGBoost Regressor" },
        { label: "R² Score", value: "0.827" },
        { label: "Tuning", value: "GridSearchCV" },
        { label: "Evaluation", value: "Cross Validation" }
      ],
      links: {
        demo: "https://huggingface.co/spaces/datawizard116/House-Price-Prediction",
        repo: "https://github.com/MohdFaizan22/House-Price-Prediction"
      },
      photos: [p01, p02, p03]
    }
  },
  {
    n: "02",
    title: "Customer Churn Prediction System",
    stack: "Python · XGBoost · Streamlit",
    img: p2,
    link: "https://huggingface.co/spaces/datawizard116/Customer-Churn_Prediction",
    details: {
      type: "End-to-End Machine Learning Classification + Deployment Project",
      description: "Built a complete machine learning pipeline to predict telecom customer churn using real-world behavioral and subscription data. The system includes data preprocessing, feature engineering, class imbalance handling, model comparison, explainable AI using SHAP, and deployment using Streamlit.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Streamlit", "SHAP", "Matplotlib", "Seaborn"],
      features: [
        "Cleaned and preprocessed telecom customer dataset",
        "Handled missing values and removed data leakage columns",
        "Encoded categorical variables using One-Hot Encoding",
        "Engineered tenure-based customer segments (New, Regular, Loyal, Very Loyal)",
        "Handled class imbalance using class_weight and scale_pos_weight",
        "Trained and compared Logistic Regression, Random Forest, and XGBoost",
        "Built ROC-AUC based model evaluation pipeline",
        "Achieved best ROC-AUC score of ~0.84 using Logistic Regression",
        "Implemented SHAP explainability for feature importance",
        "Built interactive Streamlit web application for real-time prediction"
      ],
      highlights: [
        "End-to-end machine learning classification system",
        "Business-driven churn prediction for telecom industry",
        "Strong focus on recall to reduce customer loss",
        "Explainable AI integration using SHAP values",
        "Production-ready deployment using Streamlit",
        "Real-world imbalanced dataset handling strategy"
      ],
      metrics: [
        { label: "Best Model", value: "Logistic Regression" },
        { label: "ROC-AUC Score", value: "0.843" },
        { label: "Recall Score", value: "~0.77" },
        { label: "Evaluation", value: "Accuracy, Precision, Recall, F1-score, ROC-AUC" }
      ],
      links: {
        demo: "https://huggingface.co/spaces/datawizard116/Customer-Churn_Prediction",
        repo: "https://github.com/MohdFaizan22/Customer-Churn-Prediction"
      },
      photos: [g01, g02, g03, g04, g05]
    }
  },
  {
    n: "03",
    title: "Crop Yield Prediction",
    stack: "Python · XGBoost · Streamlit",
    img: p3,
    link: "https://huggingface.co/spaces/datawizard116/Crop-Yield-Prediction",
    details: {
      type: "End-to-End Machine Learning + Deployment Project",
      description: "Built a complete machine learning system to predict agricultural crop yield based on environmental and farming parameters such as rainfall, temperature variations, fertilizer usage, pesticide usage, crop type, season, and cultivation area. The project includes full ML pipeline development, feature engineering, model optimization, and deployment as an interactive web application using Streamlit and Hugging Face Spaces.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn", "Streamlit", "Hugging Face Spaces"],
      features: [
        "Cleaned and preprocessed agricultural dataset",
        "Handled missing values and outliers in environmental data",
        "Encoded categorical features like crop type and season",
        "Scaled numerical features for better model performance",
        "Performed feature selection and correlation analysis",
        "Compared multiple regression models (Linear Regression, Random Forest, XGBoost)",
        "Achieved strong prediction performance with optimized model tuning",
        "Built interactive Streamlit web interface for real-time prediction",
        "Deployed model on Hugging Face Spaces for public access",
        "Integrated user-friendly input controls for farmers and stakeholders"
      ],
      highlights: [
        "Real-world agricultural machine learning use case",
        "End-to-end ML pipeline from data preprocessing to deployment",
        "Feature engineering based on environmental and soil-related parameters",
        "Model evaluation using MAE, RMSE, and R² metrics",
        "Production-ready deployment on cloud (Hugging Face Spaces)",
        "Lightweight and responsive web UI for instant predictions"
      ],
      metrics: [
        { label: "Best Model", value: "XGBoost Regressor" },
        { label: "R² Score", value: "0.9398" },
        { label: "MAE / RMSE", value: "0.1274 / 0.2118" },
        { label: "Deployment", value: "Hugging Face Spaces (Streamlit App)" }
      ],
      links: {
        demo: "https://huggingface.co/spaces/datawizard116/Crop-Yield-Prediction",
        repo: "https://github.com/MohdFaizan22/Crop-Yield-Prediction"
      },
      photos: [q01, q02, q03, q04]
    }
  },
  {
    n: "04",
    title: "🌿 AGRIVISION AI",
    stack: "EfficientNetB0 · Grad-CAM · OpenCV · Gradio",
    img: p4,
    link: "#",
    details: {
      type: "End-to-End Deep Learning + Computer Vision Project",
      description: "Built a complete AI-powered plant disease detection system using Transfer Learning with EfficientNetB0, Grad-CAM explainability, leaf segmentation, and Gradio deployment to classify 38 plant disease categories with high accuracy.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "EfficientNetB0", "NumPy", "Grad-CAM", "Gradio", "rembg", "Matplotlib"],
      features: [
        "Transfer Learning using EfficientNetB0",
        "Fine-tuned deep learning model for plant disease classification",
        "Supports 38 disease categories",
        "Achieved 96% validation accuracy",
        "Implemented Grad-CAM explainability visualization",
        "Added leaf segmentation for better real-world prediction",
        "Displays Top-3 predictions with confidence scores",
        "Provides disease descriptions, symptoms, prevention, and cure suggestions",
        "Built interactive Gradio deployment UI",
        "Real-time image upload and prediction system"
      ],
      highlights: [
        "Real-world Computer Vision + Agriculture AI project",
        "Explainable AI using Grad-CAM",
        "Transfer Learning and Fine-Tuning workflow",
        "End-to-end deployment-ready deep learning system",
        "Real-time disease prediction web application",
        "Improved real-world prediction using segmentation",
        "Practical AgriTech AI solution"
      ],
      metrics: [
        { label: "Model", value: "EfficientNetB0" },
        { label: "Validation Accuracy", value: "96%" },
        { label: "Classes", value: "38" },
        { label: "Framework", value: "TensorFlow/Keras" },
        { label: "Deployment", value: "Gradio" }
      ],
      links: {
        demo: "https://huggingface.co/spaces/datawizard116/AgriCv",
        repo: "https://github.com/MohdFaizan22/AgriCv"
      },
      photos: [l1, l2, l3, l4, l5]
    }
  },
  {
    n: "05",
    title: "TEXT2SQL",
    stack: "Python · LangChain · Groq API · SQLite · Streamlit",
    img: p5,
    link: "#",
    details: {
      type: "Advanced Generative AI + SQL Analytics Platform",
      description: "Built an advanced AI-powered analytics assistant that converts natural language business questions into executable SQL queries using Large Language Models and LangChain. The system dynamically queries a live relational database, generates business insights, visualizes analytics, and provides downloadable reports through an interactive Streamlit dashboard.",
      techStack: ["Python", "LangChain", "Groq API", "SQLAlchemy", "SQLite", "Pandas", "Streamlit", "Faker"],
      features: [
        "Natural Language to SQL Query Generation",
        "LangChain SQL Agent Integration",
        "Live SQLite Database Query Execution",
        "AI-Powered Business Analytics",
        "SQL Query Transparency",
        "Interactive Analytics Dashboard",
        "Downloadable CSV Reports",
        "Dynamic Data Visualization",
        "Automatic SQL Cleaning & Retry Logic",
        "Multi-table Query Reasoning",
        "Conversational Analytics Experience"
      ],
      highlights: [
        "Built autonomous SQL reasoning workflows using LangChain agents",
        "Implemented schema-aware prompt engineering for accurate SQL generation",
        "Designed a live analytics pipeline with real-time database querying",
        "Developed AI-generated business summaries from query results",
        "Created a full-stack GenAI analytics platform with Streamlit deployment",
        "Implemented enterprise-style SQL validation and error handling",
        "Built interactive visual analytics and reporting workflows"
      ],
      metrics: [
        { label: "LLM Provider", value: "Groq Llama 3.3 70B" },
        { label: "Framework", value: "LangChain SQL Agent" },
        { label: "Database", value: "SQLite" },
        { label: "Frontend", value: "Streamlit Dashboard" }
      ],
      architecture: [
        "User Query",
        "LLM Reasoning",
        "SQL Generation",
        "Database Execution",
        "Analytics Results",
        "AI Business Summary"
      ],
      links: {
        demo: "https://huggingface.co/spaces/datawizard116/GenAI-Text2SQL-Analytics-Assistant",
        repo: "https://github.com/MohdFaizan22/GenAI-Text2SQL-Analytics-Assistant"
      },
      photos: [m01, m02, m03, m04, m05]
    }
  },
  {
    n: "06",
    title: "🛡️ TOXI GUARD AI",
    stack: "Python · PyTorch · BERT · Streamlit",
    img: p6,
    link: "https://huggingface.co/spaces/datawizard116/ToxiGuard-BERT",
    details: {
      type: "Advanced NLP + Transformer Fine-Tuning + Deployment Project",
      description: "Built an advanced multi-label toxic comment detection system using BERT transformers and PyTorch to classify harmful social media comments across 6 toxicity categories. Implemented transformer fine-tuning, threshold optimization, GPU training, and deployed a real-time Streamlit moderation web application.",
      techStack: ["Python", "PyTorch", "HuggingFace Transformers", "BERT", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib"],
      features: [
        "Built a multi-label NLP classification pipeline using BERT transformers",
        "Fine-tuned bert-base-uncased using HuggingFace Transformers and PyTorch",
        "Classified comments into 6 toxicity categories: toxic, severe_toxic, obscene, threat, insult, identity_hate",
        "Applied BCEWithLogitsLoss for multi-label classification",
        "Implemented transformer tokenization and dynamic padding",
        "Performed threshold optimization for each toxicity label",
        "Achieved ROC-AUC score of 0.992 using fine-tuned BERT",
        "Compared traditional TF-IDF baseline vs transformer-based NLP",
        "Built real-time toxicity prediction pipeline",
        "Developed modern Streamlit frontend for AI moderation",
        "Added probability-based toxicity visualization",
        "Enabled GPU-accelerated transformer inference"
      ],
      highlights: [
        "Advanced transformer-based NLP engineering project",
        "Real-world AI content moderation system",
        "Contextual toxicity understanding using BERT embeddings",
        "End-to-end deep learning workflow from training to deployment",
        "Multi-label classification using transformer architectures",
        "Production-style NLP inference pipeline",
        "HuggingFace + PyTorch ecosystem implementation",
        "Real-time moderation web application"
      ],
      metrics: [
        { label: "Model", value: "BERT (bert-base-uncased)" },
        { label: "Macro/Micro F1", value: "0.666 / 0.801" },
        { label: "ROC-AUC Score", value: "0.992" },
        { label: "Task Type", value: "Multi-label NLP Classification" }
      ],
      links: {
        demo: "https://huggingface.co/spaces/datawizard116/ToxiGuard-BERT",
        repo: "https://github.com/MohdFaizan22/ToxiGuard-BERT"
      },
      photos: [z1, z2, z3, z4]
    }
  },
  {
    n: "07",
    title: "♻️ AI-Based Smart Waste Segregation System",
    stack: "Python · TensorFlow · OpenCV · CNN · Transfer Learning · Arduino · Raspberry Pi",
    img: p8,
    link: "#",
    underDevelopment: true
  }
];

const tech = [
  "Python","Machine Learning","Deep Learning","Data Analysis","Computer Vision",
  "NLP","TensorFlow / PyTorch","Pandas & NumPy","Scikit-learn","OpenCV","SQL",
  "Data Visualization","Model Training","Google Colab","API Integration","Git & GitHub",
];
const soft = [
  "Problem Solving","Communication","Client Handling","Project Management","Fast Learning","Team Collaboration",
];

interface ProjectCardProps {
  n: string;
  title: string;
  stack: string;
  img: string;
  link: string;
  details?: any;
  underDevelopment?: boolean;
  i: number;
  progress: MotionValue<number>;
  targetScale: number;
  totalCards: number;
  onViewDetails?: () => void;
}

function ProjectCard({ n, title, stack, img, link, details, underDevelopment, i, progress, targetScale, totalCards, onViewDetails }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  // Each card occupies a segment of the scroll; we extend the range slightly so
  // the scale-down starts a bit earlier for a smoother overlap feel.
  const segLen = 1 / totalCards;
  const start = i * segLen;
  const end = start + segLen;

  // Scale: card shrinks to targetScale as the *next* card scrolls over it
  const scale = useTransform(progress, [start, Math.min(end, 1)], [1, targetScale]);

  // Parallax: card drifts slightly upward as it gets buried
  const cardY = useTransform(progress, [start, Math.min(end, 1)], ["0px", `-${(totalCards - 1 - i) * 8}px`]);

  // Keep content opacity very high (floor at 0.90) so text remains extremely bright and readable
  const contentOpacity = useTransform(progress, [start, Math.min(end, 1)], [1, 0.90]);

  // Top-edge highlight line opacity
  const borderOpacity = useTransform(progress, [start, Math.min(end, 1)], [0.8, 0.3]);

  return (
    <div
      className="h-screen flex items-center justify-center sticky top-0 pointer-events-none"
      style={{ zIndex: 10 + i }}
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          scale,
          y: cardY,
          top: `calc(80px + ${i * 22}px)`,
          backgroundColor: "#242424",
          willChange: "transform, opacity",
          boxShadow: hovered
            ? "0 32px 80px rgba(0,0,0,0.95), 0 0 0 1.5px rgba(255,255,255,0.4)"
            : "0 20px 60px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.22)",
        }}
        className="pointer-events-auto relative w-full max-w-4xl h-[60vh] min-h-[420px] md:h-[60vh] md:min-h-[500px] rounded-3xl overflow-hidden origin-top transition-shadow duration-500"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle top-edge highlight that fades with card */}
        <motion.div
          style={{ opacity: borderOpacity }}
          className="absolute inset-x-0 top-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-white to-transparent"
        />

        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 flex flex-col md:flex-row p-6 md:p-10 gap-6 md:gap-8 font-sans"
        >
          {/* Info Column */}
          <div className="flex-1 flex flex-col justify-between order-2 md:order-1 h-full pt-2 pb-4 md:pb-12 text-white">
            <div>
              {/* Card number badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] md:text-[10px] tracking-widest uppercase mb-2 md:mb-8 border-white/25 bg-white/10 text-white/80">
                <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full inline-block bg-white" />
                {n}
              </div>
              <h3 className="font-sans text-2xl md:text-4xl uppercase leading-[1.1] mb-2 md:mb-4 text-white font-bold">
                {title}
              </h3>
              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 md:mt-3">
                {stack.split(" · ").map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 md:px-3 md:py-1 text-[9px] md:text-[11px] tracking-wider uppercase rounded-full border font-medium border-white/30 bg-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Button Area */}
            <div className="flex-shrink-0 mt-4 md:mt-0">
              {underDevelopment ? (
                <div className="inline-flex items-center gap-3 self-start">
                  <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border overflow-hidden text-[10px] tracking-widest uppercase font-bold transition-colors duration-300 border-yellow-500/40 bg-yellow-500/10 text-yellow-500">
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                      Under Development
                    </span>
                  </span>
                </div>
              ) : (
              <motion.a
                href={details ? "#" : link}
                onClick={(e) => {
                  if (details && onViewDetails) {
                    e.preventDefault();
                    onViewDetails();
                  }
                }}
                target={details ? undefined : "_blank"}
                rel={details ? undefined : "noopener noreferrer"}
                className="view-project-btn group inline-flex items-center gap-3 self-start cursor-pointer"
                whileHover="hovered"
                initial="idle"
              >
                {/* Pill container — visible border + semi-fill at rest */}
                <span className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full border overflow-hidden text-xs tracking-widest uppercase font-semibold transition-colors duration-300 border-white/50 bg-white/8 group-hover:border-white">
                  {/* Fill layer sweeps in on hover */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white"
                    variants={{
                      idle: { scaleX: 0, originX: 0 },
                      hovered: { scaleX: 1, originX: 0 },
                    }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Label */}
                  <motion.span
                    className="relative z-10"
                    variants={{
                      idle: { color: "rgba(255,255,255,1)" },
                      hovered: { color: "#000000" },
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    View Project
                  </motion.span>
                  {/* Arrow icon */}
                  <motion.span
                    className="relative z-10 text-base leading-none"
                    variants={{
                      idle: { x: 0, y: 0, color: "rgba(255,255,255,0.9)" },
                      hovered: { x: 3, y: -3, color: "#000000" },
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    ↗
                  </motion.span>
                </span>
              </motion.a>
              )}
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-1 relative overflow-hidden rounded-2xl aspect-[16/10] md:aspect-auto md:h-full bg-[#0a0a0a] order-1 md:order-2">
            <motion.img
              src={img}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Subtle vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ProjectDetailModal({ project, onClose }: { project: any; onClose: () => void }) {
  const { details } = project;
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!details) return null;

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % details.photos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + details.photos.length) % details.photos.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative w-full max-w-5xl h-[85vh] md:h-[80vh] bg-[#1a1a1a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] w-10 h-10 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Slider */}
        <div className="w-full md:w-[48%] h-[40%] md:h-full relative bg-[#121212] flex flex-col justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          {/* Zoom button on image */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-black/75 border border-white/15 text-[10px] tracking-wider uppercase text-white hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg select-none"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Click to view photo
          </button>

          <AnimatePresence mode="wait">
            <motion.img
              key={activePhotoIdx}
              src={details.photos[activePhotoIdx]}
              alt={`${project.title} screenshot ${activePhotoIdx + 1}`}
              className="w-full h-full object-contain p-4 md:p-8 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer z-10"
          >
            ←
          </button>
          {/* Right Arrow */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer z-10"
          >
            →
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 z-10">
            {details.photos.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setActivePhotoIdx(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === activePhotoIdx ? "bg-white w-4" : "bg-white/30"
                } cursor-pointer`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Project Details (Scrollable) */}
        <div data-lenis-prevent="true" className="flex-1 flex flex-col h-[60%] md:h-full overflow-y-auto p-6 md:p-10 text-white scrollbar-thin select-text">
          {/* Header */}
          <div className="mb-6 pr-10">
            <h3 className="text-2xl md:text-3xl font-sans font-black uppercase leading-tight mb-2 tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs uppercase tracking-wider text-white/50 font-semibold leading-relaxed">
              {details.type}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap gap-3.5 mb-8">
            {details.links.demo && (
              <a
                href={details.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white/80 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
              >
                Live Demo <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {details.links.repo && (
              <a
                href={details.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all"
              >
                GitHub Repository
              </a>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
              {details.description}
            </p>
          </div>

          {/* Architecture Flow */}
          {details.architecture && (
            <div className="mb-8">
              <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3.5 font-semibold">
                Architecture Flow
              </h4>
              <div className="p-4 rounded-2xl bg-white/3 border border-white/5 shadow-inner">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-[11px] font-mono">
                  {details.architecture.map((step: string, idx: number) => (
                    <div key={idx} className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
                      <div className="w-full md:w-auto px-3.5 py-2.5 rounded-xl bg-violet-950/20 border border-violet-500/25 text-violet-200 font-medium text-center shadow-[0_0_10px_rgba(139,92,246,0.1)] hover:border-violet-400/50 hover:bg-violet-950/30 transition-all select-none">
                        {step}
                      </div>
                      {idx < details.architecture.length - 1 && (
                        <div className="text-violet-400/60 font-bold rotate-90 md:rotate-0 my-1 md:my-0 select-none">
                          ➔
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Metrics Grid */}
          <div className="mb-8">
            <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-semibold">
              Project Performance Metrics
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {Array.isArray(details.metrics) ? (
                details.metrics.map((metric: any, idx: number) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/4 border border-white/5 shadow-inner">
                    <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-0.5">{metric.label}</span>
                    <span className="text-xs font-bold text-white uppercase">{metric.value}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="p-3.5 rounded-2xl bg-white/4 border border-white/5 shadow-inner">
                    <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-0.5">Best Model</span>
                    <span className="text-xs font-bold text-white uppercase">{details.metrics?.model}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/4 border border-white/5 shadow-inner">
                    <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-0.5">R² Score</span>
                    <span className="text-xs font-bold text-white">{details.metrics?.r2}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/4 border border-white/5 shadow-inner">
                    <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-0.5">Tuning</span>
                    <span className="text-xs font-bold text-white uppercase">{details.metrics?.tuning}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/4 border border-white/5 shadow-inner">
                    <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-0.5">Evaluation</span>
                    <span className="text-xs font-bold text-white uppercase">{details.metrics?.eval}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3.5 font-semibold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {details.techStack.map((techItem: string) => (
                <span
                  key={techItem}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-white/80 font-medium"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3.5 font-semibold">
              Key Features
            </h4>
            <ul className="space-y-3.5 text-xs text-white/80">
              {details.features.map((feature: string, idx: number) => {
                const featureIcons = [
                  <Database className="w-4 h-4 text-white/60 shrink-0 animate-pulse" />,
                  <Sliders className="w-4 h-4 text-white/60 shrink-0" />,
                  <Layers className="w-4 h-4 text-white/60 shrink-0" />,
                  <ShieldCheck className="w-4 h-4 text-white/60 shrink-0" />,
                  <LineChart className="w-4 h-4 text-white/60 shrink-0" />,
                  <Code className="w-4 h-4 text-white/60 shrink-0" />,
                  <Cpu className="w-4 h-4 text-white/60 shrink-0 animate-pulse" />,
                  <Sliders className="w-4 h-4 text-white/60 shrink-0" />,
                  <LineChart className="w-4 h-4 text-white/60 shrink-0" />,
                  <Code className="w-4 h-4 text-white/60 shrink-0" />,
                  <Layers className="w-4 h-4 text-white/60 shrink-0" />
                ];
                return (
                  <li key={idx} className="flex items-start gap-3.5">
                    {featureIcons[idx % featureIcons.length]}
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Project Highlights */}
          <div className="mb-4">
            <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3.5 font-semibold">
              Project Highlights
            </h4>
            <ul className="space-y-3 text-xs text-white/80">
              {details.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0 animate-ping" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal for Fullscreen Image View */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
              className="absolute top-6 right-6 z-[220] w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all cursor-pointer shadow-2xl"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all cursor-pointer z-[220] shadow-2xl"
            >
              ←
            </button>

            {/* Right Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all cursor-pointer z-[220] shadow-2xl"
            >
              →
            </button>

            {/* Active Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={details.photos[activePhotoIdx]}
                alt={`${project.title} screenshot fullscreen`}
                className="max-w-full max-h-full object-contain rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.9)] bg-black"
              />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 text-[10px] tracking-wider uppercase text-white/80 border border-white/10 backdrop-blur-md">
                Photo {activePhotoIdx + 1} of {details.photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Index() {
  const [loaded, setLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeSection, setActiveSection] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // Hero blur on scroll — cinematic departure
  const heroBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(6px)"]);

  const worksContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: worksScrollProgress } = useScroll({
    target: worksContainerRef,
    offset: ["start start", "end end"],
  });

  // ─── Active section tracking via IntersectionObserver ───
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], footer[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // ─── Re-measure layout bounds when loader finishes ───
  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
        const lenis = (window as any).__lenis;
        if (lenis) {
          lenis.resize();
        }
      }, 150);
    }
  }, [loaded]);

  // ─── Smooth scroll nav handler ───
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { duration: 1.4, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between text-[11px] tracking-widest uppercase nav-glass relative">
        <motion.div
          className="font-semibold z-10"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Mohd Faizanullah
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="hidden lg:block text-white/60 whitespace-nowrap"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Junior Data Scientist &amp; ML Engineer
          </motion.div>
        </div>

        <motion.nav
          className="hidden md:flex gap-7 text-white/70 z-10"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className={`nav-link hover:text-white ${activeSection === "about" ? "active" : ""}`}>About</a>
          <a href="#works" onClick={(e) => handleNavClick(e, "#works")} className={`nav-link hover:text-white ${activeSection === "works" ? "active" : ""}`}>Projects</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className={`nav-link hover:text-white ${activeSection === "contact" ? "active" : ""}`}>Contact</a>
        </motion.nav>
      </header>



      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden flex items-end bg-black">
        {/* SOCIAL ICONS VERTICAL RIGHT */}
        <motion.div
          className="absolute right-4 md:right-8 lg:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-white/70 z-50 hidden md:flex"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a href="https://www.linkedin.com/in/mohd-faizanullah-2367782ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" whileHover={{ x: -2, scale: 1.15 }} whileTap={{ scale: 0.85 }} className="hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a href="https://github.com/MohdFaizan22" target="_blank" rel="noopener noreferrer" whileHover={{ x: -2, scale: 1.15 }} whileTap={{ scale: 0.85 }} className="hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a href="https://x.com/mohd_faizan_098" target="_blank" rel="noopener noreferrer" whileHover={{ x: -2, scale: 1.15 }} whileTap={{ scale: 0.85 }} className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-4 h-4"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>
          </motion.a>
          <motion.a href="https://www.instagram.com/_.faizan.______?igsh=eTJhMnQ2dXM2eW9w&utm_source=qr" target="_blank" rel="noopener noreferrer" whileHover={{ x: -2, scale: 1.15 }} whileTap={{ scale: 0.85 }} className="hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <ParticleField count={70} linkDistance={130} speed={0.8} mouseRadius={120} />
        <motion.div
          style={{ y, opacity, scale, zIndex: 2, filter: heroBlur }}
          className="absolute inset-0 w-full h-full flex items-end"
        >
          <motion.img
            layoutId="profile-image"
            src={profile}
            alt="Data science portrait"
            width={1600}
            height={1200}
            className="absolute inset-0 w-full h-full object-cover md:object-contain object-[60%_center] md:object-right opacity-100"
          />

          {/* Gradients to ensure text readability on mobile and desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 md:via-transparent to-transparent pointer-events-none z-[5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 md:via-transparent to-transparent pointer-events-none z-[5]" />

          <div className="relative z-10 w-full px-6 md:px-10 pb-36 md:pb-48 pt-32">
            <div className="max-w-5xl">
              <p className="text-[10px] md:text-xs tracking-widest text-white/60 uppercase mb-6 animate-hero-badge">AI & DATA SCIENCE</p>
              <h1 className="-ml-1 md:-ml-2 text-white mb-6 md:mb-16 text-[12vw] sm:text-5xl md:text-7xl font-display heading-glow animate-hero-title leading-[0.9]">
                MOHD<br />FAIZANULLAH
              </h1>
              <p className="mt-4 md:mt-8 text-base md:text-2xl text-white/80 max-w-2xl animate-hero-subtitle">
                Engineering The Future With AI.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 mt-10 animate-hero-cta">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="text-sm md:text-lg underline-link pb-1"
                >
                  Lets Connect ↗
                </a>
                <a
                  href={resumePdf}
                  download
                  className="relative group px-6 py-3 rounded-full border border-white/30 text-[10px] md:text-xs tracking-widest uppercase font-bold overflow-hidden transition-all hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                >
                  <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                    Download Resume 
                    <span className="text-base md:text-lg leading-none group-hover:animate-bounce">↓</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ABOUT */}
      <ScrollAwayWrapper id="about" className="px-6 md:px-10 py-32 md:py-48">
        <ParticleField count={45} linkDistance={100} speed={0.5} mouseRadius={90} color="200,200,255" />
        <Reveal>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <motion.img
                src={profile}
                alt="Mohd Faizanullah"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover object-center border border-white/20 shrink-0"
              />
              <motion.div className="text-sm md:text-lg tracking-widest uppercase text-white/60">
                About
              </motion.div>
            </div>
          </div>
        </Reveal>
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.05}>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 leading-[1.4]" style={{ fontFamily: "'Inter', sans-serif" }}>
              I’m Mohd Faizanullah, a <strong className="text-white font-bold">JUNIOR DATA SCIENTIST</strong> and Machine Learning Engineer passionate about building intelligent solutions using data and AI.
              <br /><br />
              I work with Machine Learning, Deep Learning, Generative AI, NLP, and Large Language Models (LLMs) to build data-driven solutions and explore modern AI technologies through continuous learning and innovation.
              <br /><br />
              Focused on growth, innovation, and practical problem-solving, I aim to build technology that creates real impact.
            </p>
          </Reveal>
        </div>
      </ScrollAwayWrapper>

      {/* WORKS */}
      <section id="works" className="relative px-6 md:px-10 py-32 bg-black">
        <ParticleField count={50} linkDistance={110} speed={0.6} mouseRadius={100} color="220,220,255" />
        <SectionReveal>
          <motion.div variants={sectionChildVariants} className="flex items-end justify-between mb-16">
            <div>
              <div className="text-[11px] tracking-widest uppercase text-white/60 mb-4">Selected Works</div>
              <motion.h2 className="font-display text-3xl md:text-5xl heading-glow">Projects</motion.h2>
            </div>
            <div className="text-xs text-white/50 uppercase tracking-widest hidden md:block">2023 — 2026</div>
          </motion.div>
        </SectionReveal>

        <div ref={worksContainerRef} className="relative flex flex-col gap-0">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - 1 - i) * 0.025;
            return (
              <ProjectCard
                key={project.n}
                i={i}
                {...project}
                progress={worksScrollProgress}
                targetScale={targetScale}
                totalCards={projects.length}
                onViewDetails={() => setSelectedProject(project)}
              />
            );
          })}
        </div>

        <div className="h-[20vh] md:h-[35vh] w-full pointer-events-none" />
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* SKILLS */}
      <section className="relative py-32 space-y-10 bg-[#0a0a0a] border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <SectionReveal>
          <motion.div variants={sectionChildVariants} className="px-6 md:px-10">
            <div className="text-[11px] tracking-widest uppercase text-white/60 mb-4">Skills</div>
            <h2 className="font-display text-4xl md:text-6xl heading-glow">Toolkit</h2>
          </motion.div>
        </SectionReveal>
        <Marquee items={tech} />
        <Marquee items={soft} reverse />
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      <div className="h-[15vh] md:h-[25vh] w-full pointer-events-none" />

      <footer
        id="contact"
        className="relative border-t border-[#1A1A1A] pt-24 pb-0 overflow-hidden"
      >
        {/* Background image layer — bright and centered */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${faii})`,
            backgroundPosition: "center 18%",
          }}
        />
        {/* Subtle dark veil — keeps image visible but text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        {/* Footer content — above bg layers */}
        <div className="relative z-10">
          <SectionReveal>
          <motion.div variants={sectionChildVariants} className="px-6 md:px-10 flex flex-col md:flex-row justify-between gap-12 md:gap-4 mb-32">
            <div className="md:w-[40%]">
              <p className="text-xs text-white/60 uppercase tracking-widest mb-8">©2026</p>
              <p className="font-display text-2xl md:text-3xl leading-tight max-w-xs drop-shadow-lg heading-glow">
                Open to AI/ML internships, collaborations, and opportunities.
              </p>
              <a href="#works" onClick={(e) => handleNavClick(e, "#works")} className="inline-block mt-6 underline-link underline underline-offset-4">
                Explore my projects ↗
              </a>
            </div>
            
            <div className="md:w-[60%] flex flex-col md:flex-row md:justify-end gap-12 md:gap-24">
              <div className="md:text-right flex flex-col md:items-end">
                <p className="text-xs text-white/60 uppercase tracking-widest mb-6">Site</p>
                <ul className="space-y-3 text-sm flex flex-col md:items-end text-left md:text-right">
                  <li><a href="#" onClick={(e) => handleNavClick(e, "#")} className="hover:text-white text-white/90 underline-link">Home</a></li>
                  <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-white text-white/90 underline-link">About</a></li>
                  <li><a href="#works" onClick={(e) => handleNavClick(e, "#works")} className="hover:text-white text-white/90 underline-link">Projects</a></li>
                  <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-white text-white/90 underline-link">Contact</a></li>
                </ul>
              </div>

              <div className="md:text-right flex flex-col md:items-end">
                <p className="text-xs text-white/60 uppercase tracking-widest mb-6">Contact</p>
                <ul className="space-y-3 text-sm text-white/90 mb-20 text-left md:text-right">
                  <li>+91 7095636826</li>
                  <li>mdfaizanullah05@gmail.com</li>
                </ul>
                <p className="text-xs text-white/60 uppercase tracking-widest mb-6">Socials</p>
                <ul className="flex flex-wrap gap-4 justify-start md:justify-end">
                  <li>
                    <a href="https://www.instagram.com/_.faizan.______?igsh=eTJhMnQ2dXM2eW9w&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg backdrop-blur-sm">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/mohd_faizan_098" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-4 h-4"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/MohdFaizan22" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg backdrop-blur-sm">
                      <Github className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mohd-faizanullah-2367782ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg backdrop-blur-sm">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          </SectionReveal>

          <GlowReveal>
            <div className="w-full overflow-hidden leading-none">
            <h2 className="font-display text-white uppercase whitespace-nowrap text-center drop-shadow-2xl"
                style={{ fontSize: "clamp(2rem, 9.5vw, 10rem)", letterSpacing: "-0.05em" }}>
              MOHD FAIZANULLAH
            </h2>
          </div>
          </GlowReveal>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

