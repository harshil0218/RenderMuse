import { React, useState, useEffect } from "react";
import { setRef } from "@mui/material";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import XIcon from "@mui/icons-material/X";
import {
  FaKey,
  FaChartLine,
  FaTrash,
  FaCopy,
  FaEdit,
  FaPlus,
} from "react-icons/fa";
function Setting() {
  const [activeSection, setActiveSection] = useState("main");
  const [usageNotif, setUsageNotif] = useState(false);
  const [offersNotif, setOffersNotif] = useState(false);
  const [updatesNotif, setUpdatesNotif] = useState(false);
  const [theme, setTheme] = useState("light");
  const [appLanguage, setAppLanguage] = useState("English");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [otherText, setOtherText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isReportIssueOpen, setIsReportIssueOpen] = useState(false);
  const [defaultStyle, setDefaultStyle] = useState("realistic");
  const [resolution, setResolution] = useState("medium");
  const [isApiKeyOpen, setIsApiKeyOpen] = useState(false);
  const [isUsageMonitoringOpen, setIsUsageMonitoringOpen] = useState(false);
  const [activeAccountSubsection, setActiveAccountSubsection] = useState(null);
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: "Key 1", key: "12345-abcde", usage: 50 },
    { id: 2, name: "Key 2", key: "67890-fghij", usage: 85 },
  ]);
  const [referencePrompts, setReferencePrompts] = useState(false);
  const [avatar, setAvatar] = useState(
    "https://images.pexels.com/photos/19942412/pexels-photo-19942412/free-photo-of-portrait-of-woman-in-hat-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  );
  const [email, setEmail] = useState("user@example.com");
  const [nickname, setNickname] = useState("User");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [subscriptionPlan, setSubscriptionPlan] = useState({
    type: "Free",
    expiryDate: "2023-12-31",
  });
  const [usageStats, setUsageStats] = useState({
    monthlyUsage: 1200, // Example usage in credits
    remainingCredits: 800, // Example remaining credits
  });
  const [allNotifications, setAllNotifications] = useState(false);

  const handleAllNotificationsChange = (checked) => {
    setAllNotifications(checked);
    setOffersNotif(checked);
    setUsageNotif(checked);
    setUpdatesNotif(checked);
  };
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSaveChanges = () => {
    // Logic to send confirmation email
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000); // Hide confirmation message after 3 seconds
  };
  const handleDeleteKey = (id) => {
    setApiKeys(apiKeys.filter((key) => key.id !== id));
  };

  const handleCopyKey = (key) => {
    navigator.clipboard.writeText(key);
    alert("API Key copied to clipboard!");
  };

  const handleEditKeyName = (id, newName) => {
    setApiKeys(
      apiKeys.map((key) => (key.id === id ? { ...key, name: newName } : key))
    );
  };

  const handleGenerateKey = () => {
    const newKey = {
      id: apiKeys.length + 1,
      name: `Key ${apiKeys.length + 1}`,
      key:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
    };
    setApiKeys([...apiKeys, newKey]);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value !== "Other") {
      setOtherText("");
    }
  };

  const handleIssueSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
    setSelectedOption("");
    setOtherText("");
    setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
  };
  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };
  const toggleReportIssue = () => {
    setIsReportIssueOpen(!isReportIssueOpen);
  };

  const handleAppLanguageChange = (e) => {
    setAppLanguage(e.target.value);
    // Add logic to apply the language change to your application
  };
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    // Add logic to apply the theme change to your application
  };
  // Function to handle navigation
  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleLogout = () => {
    console.log("Logout");

    // Add logic to handle logout
  };

  // Main Menu Options
  const menuOptions = [
    { id: "account", name: "Account Settings" },
    { id: "notifications", name: "Notification Settings" },
    { id: "app", name: "App Settings" },
    { id: "help", name: "Help & Support" },
    { id: "api", name: "API Settings" },
    { id: "preferences", name: "Preferences" },
  ];
  return (
    <div className="  w-screen sm:max-w-sm flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
      <div className="max-w-sm w-full bg-gray-100 dark:bg-gray-800  rounded-lg">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700 ">
          {activeSection !== "main" && (
            <button
              onClick={() => handleNavigation("main")}
              className="mr-4 text-gray-600 dark:text-gray-300 "
            >
              ←
            </button>
          )}
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {activeSection === "main" && "Settings"}
            {activeSection === "account" && "Account Settings"}
            {activeSection === "preferences" && "Preferences"}
            {activeSection === "api" && "API Settings"}

            {activeSection === "notifications" && "Notification Settings"}
            {activeSection === "app" && "App Settings"}
            {activeSection === "help" && "Help & Support"}
          </h2>
        </div>

        {/* Content */}
        <div className="p-4 text-gray-700 dark:text-gray-300 mb-4 ">
          {activeSection === "main" && (
            <ul className="space-y-4">
              {menuOptions.map((option) => (
                <li key={option.id}>
                  <button
                    onClick={() => handleNavigation(option.id)}
                    className="w-full text-left p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    {option.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Logout
                </button>
              </li>
            </ul>
          )}

          {activeSection === "account" && (
            <div>
              {activeAccountSubsection === "usageStats" ? (
                // Usage Stats Section
                <div>
                  <button
                    onClick={() => setActiveAccountSubsection(null)}
                    className="mb-4 text-gray-600 dark:text-gray-300"
                  >
                    ← Back
                  </button>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                        Monthly Usage: {usageStats.monthlyUsage} credits
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Remaining Credits: {usageStats.remainingCredits}
                      </p>
                    </div>
                  </div>
                </div>
              ) : activeAccountSubsection === "subscriptionPlan" ? (
                // Subscription Plan Section
                <div>
                  <button
                    onClick={() => setActiveAccountSubsection(null)}
                    className="mb-4 text-gray-600 dark:text-gray-300"
                  >
                    ← Back
                  </button>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                        Current Plan: {subscriptionPlan.type}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Expires on: {subscriptionPlan.expiryDate}
                      </p>
                    </div>
                  </div>
                </div>
              ) : activeAccountSubsection === "editProfile" ? (
                // Edit Profile Section
                <div>
                  <button
                    onClick={() => setActiveAccountSubsection(null)}
                    className="mb-4 text-gray-600 dark:text-gray-300"
                  >
                    ← Back
                  </button>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <img
                        src={avatar || "default-avatar.png"} // Replace with a default avatar image path
                        alt="Avatar"
                        className="w-24 h-24 rounded-full"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="absolute bottom-0 right-0 w-8 h-8 opacity-0 cursor-pointer"
                      />
                      <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full px-2 cursor-pointer">
                        +
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="block text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-gray-700 dark:text-gray-300">
                        Nickname
                      </label>
                      <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded"
                      />
                    </div>
                    <button
                      onClick={handleSaveChanges}
                      className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                    {showConfirmation && (
                      <div className="mt-4 p-3 bg-green-500 text-white rounded">
                        Confirmation email sent to {email}!
                      </div>
                    )}
                  </div>
                </div>
              ) : activeAccountSubsection === "changePassword" ? (
                // Change Password Section
                <div>
                  <button
                    onClick={() => setActiveAccountSubsection(null)}
                    className="mb-4 text-gray-600 dark:text-gray-300"
                  >
                    ← Back
                  </button>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300">
                        Old Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded"
                      />
                    </div>
                    <button className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Change Password
                    </button>
                  </div>
                </div>
              ) : activeAccountSubsection === "privacySettings" ? (
                // Privacy Settings Section
                <div>
                  <button
                    onClick={() => setActiveAccountSubsection(null)}
                    className="mb-4 text-gray-600 dark:text-gray-300"
                  >
                    ← Back
                  </button>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        Reference User Prompts to Train Model
                      </span>
                      <input
                        type="checkbox"
                        checked={referencePrompts}
                        className="sr-only peer"
                        onChange={(e) => setReferencePrompts(e.target.checked)}
                      />
                      <div className="relative w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>
                    <button
                      onClick={() =>
                        setActiveAccountSubsection("changePassword")
                      }
                      className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      Change Password
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        setActiveAccountSubsection("privacySettings")
                      }
                      className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      Privacy Settings
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveAccountSubsection("editProfile")}
                      className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      Edit Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        setActiveAccountSubsection("subscriptionPlan")
                      }
                      className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      Subscription Plan
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => setActiveAccountSubsection("usageStats")}
                      className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      Usage Stats
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}

          {activeSection === "preferences" && (
            <div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Default Style
                    </span>
                    <select
                      value={defaultStyle}
                      onChange={(e) => setDefaultStyle(e.target.value)}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded p-2"
                    >
                      <option value="realistic">Realistic</option>
                      <option value="artistic">Artistic</option>
                      <option value="cartoon">Cartoon</option>
                    </select>
                  </label>
                </li>
                <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Resolution
                    </span>
                    <select
                      value={resolution}
                      onChange={(e) => setResolution(e.target.value)}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded p-2"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </label>
                </li>
              </ul>
            </div>
          )}

          {activeSection === "notifications" && (
            <div>
              <ul className="w-full space-y-4 text-gray-700 dark:text-gray-300 mb-4">
                <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      All Notifications
                    </span>
                    <input
                      type="checkbox"
                      checked={allNotifications}
                      className="sr-only peer"
                      onChange={(e) =>
                        handleAllNotificationsChange(e.target.checked)
                      }
                    />
                    <div className="relative w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </li>
                <li className="bg-gray-100 dark:bg-gray-800 p-3 ml-2 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Offers and Promotions Notifications
                    </span>
                    <input
                      type="checkbox"
                      checked={offersNotif}
                      className="sr-only peer"
                      onChange={(e) => setOffersNotif(e.target.checked)}
                    />
                    <div className="relative w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </li>
                <li className="bg-gray-100 dark:bg-gray-800 p-3 ml-2 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Usage Notifications
                    </span>
                    <input
                      type="checkbox"
                      checked={usageNotif}
                      className="sr-only peer"
                      onChange={(e) => setUsageNotif(e.target.checked)}
                    />
                    <div className="relative w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </li>
                <li className="bg-gray-100 dark:bg-gray-800 p-3 ml-2 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Updates Notifications
                    </span>
                    <input
                      type="checkbox"
                      checked={updatesNotif}
                      className="sr-only peer"
                      onChange={(e) => setUpdatesNotif(e.target.checked)}
                    />
                    <div className="relative w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </li>
              </ul>
            </div>
          )}

          {activeSection === "api" && (
            <div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  <button
                    className="w-full flex items-center justify-between text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={() => setIsApiKeyOpen(!isApiKeyOpen)}
                  >
                    <div className="flex items-center">
                      <FaKey className="mr-2" />
                      API Key Management
                    </div>
                    <span className="text-lg">{isApiKeyOpen ? "-" : "+"}</span>
                  </button>
                  {isApiKeyOpen && (
                    <div className="pl-4 mt-2">
                      <ul className="space-y-2">
                        {apiKeys.map(({ id, name, key }) => (
                          <li
                            key={id}
                            className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 p-2 rounded"
                          >
                            <div>
                              <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                  handleEditKeyName(id, e.target.value)
                                }
                                className="bg-transparent border-none text-gray-900 dark:text-gray-300"
                              />
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {key}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FaCopy
                                className="cursor-pointer"
                                onClick={() => handleCopyKey(key)}
                              />
                              <FaEdit
                                className="cursor-pointer"
                                onClick={() =>
                                  handleEditKeyName(
                                    id,
                                    prompt("Enter new key name:", name)
                                  )
                                }
                              />
                              <FaTrash
                                className="cursor-pointer"
                                onClick={() => handleDeleteKey(id)}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                      <button
                        className="mt-2 flex items-center text-blue-500 hover:text-blue-700"
                        onClick={handleGenerateKey}
                      >
                        <FaPlus className="mr-1" /> Generate New Key
                      </button>
                    </div>
                  )}
                </li>
                <li>
                  <button
                    className="w-full flex items-center justify-between text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={() =>
                      setIsUsageMonitoringOpen(!isUsageMonitoringOpen)
                    }
                  >
                    <div className="flex items-center">
                      <FaChartLine className="mr-2" />
                      Usage Monitoring
                    </div>
                    <span className="text-lg">
                      {isUsageMonitoringOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isUsageMonitoringOpen && (
                    <div className="pl-4 mt-2">
                      <ul className="space-y-2">
                        {apiKeys.map(({ id, name, usage }) => (
                          <li
                            key={id}
                            className="flex justify-between bg-gray-200 dark:bg-gray-700 p-2 rounded"
                          >
                            <span>{name}</span>
                            <span>{usage} credits used</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}

          {activeSection === "app" && (
            <div>
              <ul className="w-full space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Theme
                    </span>
                    <select
                      value={theme}
                      onChange={handleThemeChange}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded p-2"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </label>
                </li>
                <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Language
                    </span>
                    <select
                      value={appLanguage}
                      onChange={handleAppLanguageChange}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded p-2"
                    >
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="gujarati">Gujarati</option>
                    </select>
                  </label>
                </li>
              </ul>
            </div>
          )}

          {activeSection === "help" && (
            <div>
              <ul className="w-full space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  <button
                    className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={toggleContact}
                  >
                    Contact Support{" "}
                    <span className="text-lg">{isContactOpen ? "-" : "+"}</span>
                  </button>
                  {isContactOpen && (
                    <ul className="pl-4 ">
                      <li className="flex items-center m-2 hover:scale-105 hover:cursor-pointer">
                        <FaEnvelope className="text-gray-800 dark:text-gray-200 mr-2" />
                        <span>Email: support@example.com</span>
                      </li>
                      <li className="flex items-center m-2 hover:scale-105 hover:cursor-pointer">
                        <FaPhone className="text-gray-800 dark:text-gray-200 mr-2 rotate-90" />
                        <span>Phone: +1 (123) 456-7890</span>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={toggleReportIssue}
                  >
                    Report Issue{" "}
                    <span className="text-lg">
                      {isReportIssueOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isReportIssueOpen && (
                    <li>
                      <form onSubmit={handleIssueSubmit} className="space-y-4">
                        <ul className="w-full space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                          <li>
                            <label className="block text-gray-700 dark:text-gray-300 ml-3 my-2">
                              Select an issue:
                            </label>
                            <ul className="pl-4">
                              <li>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="issue"
                                    value="bug"
                                    checked={selectedOption === "bug"}
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                  />
                                  Bug
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="issue"
                                    value="feature request"
                                    checked={
                                      selectedOption === "feature request"
                                    }
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                  />
                                  Feature Request
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="issue"
                                    value="other"
                                    checked={selectedOption === "other"}
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                  />
                                  Other
                                </label>
                                {selectedOption === "other" && (
                                  <input
                                    type="text"
                                    value={otherText}
                                    onChange={(e) =>
                                      setOtherText(e.target.value)
                                    }
                                    placeholder="Please specify"
                                    className="mt-2 p-2 border line-clamp-2 border-gray-300 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                  />
                                )}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <button
                          type="submit"
                          className=" text-left p-3 bg-blue-500  text-white  rounded hover:bg-blue-600 "
                        >
                          Submit
                        </button>
                      </form>
                      {showSuccess && (
                        <div className="mt-4 p-3 bg-green-500 text-white rounded ">
                          Issue reported successfully!
                        </div>
                      )}
                    </li>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Setting;
