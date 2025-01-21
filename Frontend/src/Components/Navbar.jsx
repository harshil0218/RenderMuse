import { React, useState } from "react";
import { Login, Signup, Forgot } from "./";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

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

function Navbar() {
  const [open, setOpen] = useState(false);
  const [currentView, setCurrentView] = useState("");

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
  return (
    <header className="sticky top-0  z-10 flex w-full items-center bg-white dark:bg-dark">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className=" w-full py-5 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<linearGradient id="exY1_T1a7KcK~V9LKSRcfa_lkMSew4dm8vn_gr1" x1="13.92" x2="43.619" y1="3.42" y2="33.119" gradientUnits="userSpaceOnUse"><stop offset=".112" stop-color="#ffc768"></stop><stop offset=".369" stop-color="#ff9c39"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfa_lkMSew4dm8vn_gr1)" points="3,6 24,42 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfb_lkMSew4dm8vn_gr2" x1="22.252" x2="37.102" y1="11.752" y2="26.602" gradientUnits="userSpaceOnUse"><stop offset=".061" stop-color="#ff9936"></stop><stop offset=".711" stop-color="#ff6a2c"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfb_lkMSew4dm8vn_gr2)" points="24,6 24,42 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfc_lkMSew4dm8vn_gr3" x1="18.75" x2="29.25" y1="14.25" y2="24.75" gradientUnits="userSpaceOnUse"><stop offset=".114" stop-color="#ffb14d"></stop><stop offset=".772" stop-color="#ff742f"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfc_lkMSew4dm8vn_gr3)" points="24,9 16,22 32,22"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfd_lkMSew4dm8vn_gr4" x1="16.437" x2="32.143" y1="29.75" y2="32.806" gradientUnits="userSpaceOnUse"><stop offset=".061" stop-color="#ff8931"></stop><stop offset=".947" stop-color="#ff3c15"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfd_lkMSew4dm8vn_gr4)" points="15.999,22 23.999,42 31.999,22"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfe_lkMSew4dm8vn_gr5" x1="33.685" x2="41.567" y1="13.071" y2="19.958" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff5926"></stop><stop offset="1" stop-color="#ff4522"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfe_lkMSew4dm8vn_gr5)" points="37,8 32,22 39.881,14.776 42.467,10.343"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcff_lkMSew4dm8vn_gr6" x1="22.774" x2="42.933" y1="41.179" y2="6.338" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a32a15"></stop><stop offset=".934" stop-color="#a03325"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcff_lkMSew4dm8vn_gr6)" points="31.999,22 23.999,42 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfg_lkMSew4dm8vn_gr7" x1="8.045" x2="15.835" y1="9.948" y2="17.357" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc658"></stop><stop offset=".812" stop-color="#ffa336"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfg_lkMSew4dm8vn_gr7)" points="5.533,10.343 8.119,14.777 16,22 11,8"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfh_lkMSew4dm8vn_gr8" x1="5.581" x2="24.392" y1="7.14" y2="40.07" gradientUnits="userSpaceOnUse"><stop offset=".114" stop-color="#e48c2c"></stop><stop offset=".772" stop-color="#ae431a"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfh_lkMSew4dm8vn_gr8)" points="24,42 16,22 3,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfi_lkMSew4dm8vn_gr9" x1="3" x2="45" y1="7.5" y2="7.5" gradientUnits="userSpaceOnUse"><stop offset=".407" stop-color="#ff903e"></stop><stop offset=".642" stop-color="#e26017"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfi_lkMSew4dm8vn_gr9)" points="3,6 24,9 45,6"></polygon><polygon fill="#d87a26" points="24,6 31.132,7.981 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfj_lkMSew4dm8vn_gr10" x1="24" x2="45.001" y1="6.99" y2="6.99" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bc5a1f"></stop><stop offset=".928" stop-color="#aa3918"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfj_lkMSew4dm8vn_gr10)" points="24,6 31.132,7.981 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfk_lkMSew4dm8vn_gr11" x1="3" x2="24" y1="6.99" y2="6.99" gradientUnits="userSpaceOnUse"><stop offset=".002" stop-color="#efa431"></stop><stop offset="1" stop-color="#d07124"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfk_lkMSew4dm8vn_gr11)" points="3,6 16.868,7.981 24,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfl_lkMSew4dm8vn_gr12" x1="31.132" x2="45" y1="8.379" y2="8.379" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff7545"></stop><stop offset=".812" stop-color="#ff4522"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfl_lkMSew4dm8vn_gr12)" points="31.132,7.981 41.133,10.759 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfm_lkMSew4dm8vn_gr13" x1="3" x2="16.868" y1="8.379" y2="8.379" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc658"></stop><stop offset=".812" stop-color="#ffc04e"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfm_lkMSew4dm8vn_gr13)" points="3,6 6.866,10.759 16.868,7.981"></polygon>
</svg>
<span className="self-center text-xl font-semibold  ml-2 sm:text-2xl whitespace-nowrap dark:text-white">
                    RenderMuse
                  </span>
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={`${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[20px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[20px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[20px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                }`}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">Pricing</ListItem>
                  <ListItem NavLink="/#">About</ListItem>
                </ul>
              </nav>
            </div>

            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <button
                onClick={() => setCurrentView("login")}
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Sign in
              </button>

              <button
                onClick={() => setCurrentView("signup")}
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Sign Up
              </button>
            </div>
            {currentView && (
              <Modal onClose={() => setCurrentView(null)}>
                {renderComponent()}
              </Modal>
            )}
          </div>
        </div>
      </div>
    </header>

  );
}

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
