// Componentes
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import PrivateRoute from "./components/logic/PrivateRoute.jsx";

// Importando o estilo
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Páginas
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Introduction from "./pages/Introduction.jsx";
import Settings from "./pages/Settings.jsx";
import Answers from "./pages/Answers.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import ReportBugs from "./pages/ReportBugs.jsx";
import NotFound from "./pages/NotFound.jsx";
import MakeAQuestion from "./pages/MakeAQuestion.jsx";

function App() {
	return (
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	);
}

function Layout() {
	const location = useLocation();
	const hideLayout =
		location.pathname === "/login" || location.pathname === "/login/sign-up"; // Se a tela for a de cadastro, ele esconderá o Header e o Footer

	return (
		<>
		 
			{!hideLayout && <Header />}

			<Routes>
				<Route path="/" element={<Introduction />} />
				<Route path="/answers/*" element={<Answers />} />
				<Route path="/login/*" element={<Login />} />
				<Route path="/report-bugs" element={<ReportBugs />} />
				<Route path="/home/*" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/introduction" element={<Introduction />} />
				<Route path="/settings" element={<Settings />} />

				{/* ROTAS PROTEGIDAS */}
				<Route path="/profile/*" element={
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				}/>
				<Route path="/make-a-question" element={
					<PrivateRoute>
						<MakeAQuestion />
					</PrivateRoute>
				}/>

				{/* ROTA CORINGA */}
				<Route path="*" element={<NotFound />} />
			</Routes>

			{!hideLayout && <Footer />}
		</>
	);
}

export default App;
