import "./styles/index.css";

import NavMobile from "./components/common/Nav/Nav";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import FallingLeaves from "./components/common/Background/FallingLeaves";

// Import components from react-router-dom to enable client-side routing
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import NotFound from "./components/page-specific/NotFound/NotFound";
import Contact from "./pages/contact/Contact";

import { motion, AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={location.pathname}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.6 }}
				style={{ minHeight: "82vh", display: "flex", 'flex-direction': "column"}}> 
				{/* Routes component contains all your route definitions */}
				<Routes location={location}>
					{/* Route matches the URL path '/' and renders the Home component */}
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</motion.div>
		</AnimatePresence>
	);
}

function AppContent() {
	return (
		<>
			{/* The Nav component contains navigation links that users click to switch pages */}
			<NavMobile />
			{/* AnimatedRoutes component handles the routing with fade animations */}
			<AnimatedRoutes />
			<Footer />
		</>
	);
}

// Define the main App component that controls your whole application UI
function App() {
	return (
		// Wrap everything inside <Router> so routing works and navigation can happen without full page reload
		<div className="wrapper">
			<FallingLeaves />
			<Router>
				<AppContent />
			</Router>
		</div>
	);
}

export default App;

// const navLinks = [
// 	{name: "Home", path:"/"},
// 	{name: "About", path: "/about"},
// 	{name: "Portfolio", path: "/portfolio"},
// 	{name: "Contact", path: "/contact"}
// ]
