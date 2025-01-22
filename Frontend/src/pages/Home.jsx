import {React,useState} from "react";
import { Navbar, Footer, Welcome, Pricing,Aboutus,Login, Signup, Forgot } from "../Components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
function Home() {
  const [currentView, setCurrentView] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const renderComponent = () => {
    switch (currentView) {
      case "login":
        return (
          <Login
            onSignup={() => setCurrentView("signup")}
            onForgotPassword={() => setCurrentView("forgotPassword")}
          />
        );
      case "signup":
        return <Signup onLogin={() => setCurrentView("login")} />;
      case "forgotPassword":
        return <Forgot onBack={() => setCurrentView("login")} />;
      default:
        return null;
    }
  };

  function Modal({ children, onClose }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 dark:text-gray-200 dark:hover:text-gray-300"
          >
            <CloseOutlinedIcon fontSize="large" />
          </button>
          {children}
        </div>
      </div>
    );
  }

  const handleGetStartedClick = () => {
    if (!isLoggedIn) {
      setCurrentView('login'); // Open login modal if not logged in
    } else {
      // Proceed with the "Get Started" action for logged-in users
      console.log('Proceeding with Get Started');
    }
  };
  return (
 
    <div className="dark:bg-gray-800">
      <Navbar setCurrentView={setCurrentView} />
      <div id="welcome">
        <Welcome handleGetStartedClick={handleGetStartedClick} />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="aboutus">
        <Aboutus />
      </div>
      <Footer handleGetStartedClick={handleGetStartedClick} />
      {currentView && (
        <Modal onClose={() => setCurrentView(null)}>
          {renderComponent()}
        </Modal>
      )}
    </div>
  );
}

export default Home;
