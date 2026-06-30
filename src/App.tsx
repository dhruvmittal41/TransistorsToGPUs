import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import CoursesPage from "./pages/Fundamentals/CoursesPage";
import TopicPage from "./pages/DigitalLogic/TopicPage";
import ResearchPage from "./pages/Research/ResearchPage";
import AboutPage from "./pages/About/AboutPage";
import CompactNav from "./components/Navigation/CompactNav";
import { initGA, trackPageView } from "./utils/analytics";
import "./App.css";
import ReactGA from "react-ga4";

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

ReactGA.initialize("G-TLR428LQ68");
function App() {
  useEffect(() => {
    // Send a pageview when the component loads
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
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
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
        <CompactNav />
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
