import { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import CoursesPage from "./pages/Fundamentals/CoursesPage";
import TopicPage from "./pages/DigitalLogic/TopicPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectDetailPage from "./pages/Projects/ProjectDetailPage";
import AboutPage from "./pages/About/AboutPage";
import CompactNav from "./components/Navigation/CompactNav";
import { initGA, trackPageView } from "./utils/analytics";
import "./App.css";

// Analytics wrapper component
function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics on mount
    initGA();
  }, []);

  useEffect(() => {
    // Track page views on route change
    trackPageView(location.pathname + location.search);
  }, [location]);

  return <>{children}</>;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AnalyticsWrapper>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route
                path="/topic/:topicSlug/:subtopicSlug"
                element={<TopicPage />}
              />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route
                path="/project/:projectSlug"
                element={<ProjectDetailPage />}
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Layout>
          <CompactNav />
        </AnalyticsWrapper>
      </Router>
    </HelmetProvider>
  );
}

export default App;
