import { React, useState, useEffect } from "react";
import Input from "../Components/Input";
import { MessageField,Setting } from "../Components";
import SidebarChatTitle from "../Components/SidebarChatTitle";
import { FaSun, FaMoon } from "react-icons/fa";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function Chat() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSetting = () => setIsSettingOpen(!isSettingOpen);
  const closeSetting = () => setIsSettingOpen(false);

  const closeDropdown = (event) => {
    if (!event.target.closest('[data-dropdown-toggle="dropdown-user"]')) {
      setDropdownOpen(false);
    }
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="App dark:bg-gray-800 bg-white" onClick={closeDropdown}>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  onClick={toggleSidebar}
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                <a href="https://meta.ai" className="flex ms-2 md:me-24">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<linearGradient id="exY1_T1a7KcK~V9LKSRcfa_lkMSew4dm8vn_gr1" x1="13.92" x2="43.619" y1="3.42" y2="33.119" gradientUnits="userSpaceOnUse"><stop offset=".112" stop-color="#ffc768"></stop><stop offset=".369" stop-color="#ff9c39"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfa_lkMSew4dm8vn_gr1)" points="3,6 24,42 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfb_lkMSew4dm8vn_gr2" x1="22.252" x2="37.102" y1="11.752" y2="26.602" gradientUnits="userSpaceOnUse"><stop offset=".061" stop-color="#ff9936"></stop><stop offset=".711" stop-color="#ff6a2c"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfb_lkMSew4dm8vn_gr2)" points="24,6 24,42 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfc_lkMSew4dm8vn_gr3" x1="18.75" x2="29.25" y1="14.25" y2="24.75" gradientUnits="userSpaceOnUse"><stop offset=".114" stop-color="#ffb14d"></stop><stop offset=".772" stop-color="#ff742f"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfc_lkMSew4dm8vn_gr3)" points="24,9 16,22 32,22"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfd_lkMSew4dm8vn_gr4" x1="16.437" x2="32.143" y1="29.75" y2="32.806" gradientUnits="userSpaceOnUse"><stop offset=".061" stop-color="#ff8931"></stop><stop offset=".947" stop-color="#ff3c15"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfd_lkMSew4dm8vn_gr4)" points="15.999,22 23.999,42 31.999,22"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfe_lkMSew4dm8vn_gr5" x1="33.685" x2="41.567" y1="13.071" y2="19.958" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff5926"></stop><stop offset="1" stop-color="#ff4522"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfe_lkMSew4dm8vn_gr5)" points="37,8 32,22 39.881,14.776 42.467,10.343"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcff_lkMSew4dm8vn_gr6" x1="22.774" x2="42.933" y1="41.179" y2="6.338" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a32a15"></stop><stop offset=".934" stop-color="#a03325"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcff_lkMSew4dm8vn_gr6)" points="31.999,22 23.999,42 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfg_lkMSew4dm8vn_gr7" x1="8.045" x2="15.835" y1="9.948" y2="17.357" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc658"></stop><stop offset=".812" stop-color="#ffa336"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfg_lkMSew4dm8vn_gr7)" points="5.533,10.343 8.119,14.777 16,22 11,8"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfh_lkMSew4dm8vn_gr8" x1="5.581" x2="24.392" y1="7.14" y2="40.07" gradientUnits="userSpaceOnUse"><stop offset=".114" stop-color="#e48c2c"></stop><stop offset=".772" stop-color="#ae431a"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfh_lkMSew4dm8vn_gr8)" points="24,42 16,22 3,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfi_lkMSew4dm8vn_gr9" x1="3" x2="45" y1="7.5" y2="7.5" gradientUnits="userSpaceOnUse"><stop offset=".407" stop-color="#ff903e"></stop><stop offset=".642" stop-color="#e26017"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfi_lkMSew4dm8vn_gr9)" points="3,6 24,9 45,6"></polygon><polygon fill="#d87a26" points="24,6 31.132,7.981 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfj_lkMSew4dm8vn_gr10" x1="24" x2="45.001" y1="6.99" y2="6.99" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bc5a1f"></stop><stop offset=".928" stop-color="#aa3918"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfj_lkMSew4dm8vn_gr10)" points="24,6 31.132,7.981 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfk_lkMSew4dm8vn_gr11" x1="3" x2="24" y1="6.99" y2="6.99" gradientUnits="userSpaceOnUse"><stop offset=".002" stop-color="#efa431"></stop><stop offset="1" stop-color="#d07124"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfk_lkMSew4dm8vn_gr11)" points="3,6 16.868,7.981 24,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfl_lkMSew4dm8vn_gr12" x1="31.132" x2="45" y1="8.379" y2="8.379" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff7545"></stop><stop offset=".812" stop-color="#ff4522"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfl_lkMSew4dm8vn_gr12)" points="31.132,7.981 41.133,10.759 45,6"></polygon><linearGradient id="exY1_T1a7KcK~V9LKSRcfm_lkMSew4dm8vn_gr13" x1="3" x2="16.868" y1="8.379" y2="8.379" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc658"></stop><stop offset=".812" stop-color="#ffc04e"></stop></linearGradient><polygon fill="url(#exY1_T1a7KcK~V9LKSRcfm_lkMSew4dm8vn_gr13)" points="3,6 6.866,10.759 16.868,7.981"></polygon>
</svg>
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                    RenderMuse
                  </span>
                </a>
              </div>
              <div className="flex items-center relative">
                <div className="flex items-center ms-3">
                  <div>
                    <button
                      onClick={toggleDropdown}
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded={isDropdownOpen}
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                      />
                    </button>
                  </div>
                  {isDropdownOpen && (
                    <div
                      className="absolute top-5 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="dropdown-user"
                    >
                      <div className="px-4 py-3" role="none">
                        <p
                          className="text-sm text-gray-900 dark:text-white"
                          role="none"
                        >
                          Neil Sims
                        </p>
                        <p
                          className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                          role="none"
                        >
                          neil.sims@flowbite.com
                        </p>
                      </div>
                      <ul className="py-1" role="none">
                        <li>
                          <button
                            onClick={toggleSetting}
                            className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Settings
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={toggleTheme}
                            className="flex justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Theme {isDarkMode ? "Light" : "Dark"}
                            {isDarkMode ? (
                              <FaSun className="mr-2" />
                            ) : (
                              <FaMoon className="mr-2" />
                            )}
                          </button>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </nav>

        {isSettingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-lg relative">
            <button
              onClick={closeSetting}
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-300"
            >
              <CloseOutlinedIcon fontSize="medium" />
            </button>
            
            {/* Settings content goes here */}
            <Setting/>
          </div>
        </div>
      )}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={closeSidebar}
          ></div>
        )}

        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 lg:w-72 h-screen pt-20 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 bg-white dark:bg-gray-800 ">
            <div className="dark:text-gray-300 text-gray-800 hover:text-gray-900 dark:hover:text-gray-200 px-4 pb-3">
              <button>
                <AddBoxOutlinedIcon fontSize="large" />
              </button>
            </div>
            <ul className="space-y-4 font-medium">
              <li>
                <SidebarChatTitle />
              </li>
              <li>
                <SidebarChatTitle />
              </li>
              <li>
                <SidebarChatTitle />
              </li>
              {/* Add more sidebar items here */}
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64 relative h-screen flex flex-col max-w-full overflow-y-auto">
          <div className="flex-1 overflow-y-auto no-scrollbar rounded-lg dark:border-gray-700 mt-14">
            {/* Main content goes here */}
            <MessageField />
          </div>
          <Input />
        </div>
      </div>
    </>
  );
}

export default Chat;
