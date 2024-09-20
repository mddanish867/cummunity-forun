import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ForumListPage from "./Pages/ForumListPage";
import ForumDetailPage from "./Pages/ForumDetailPage";
import UserProfilePage from "./Pages/UserProfilePage";
import SettingsPage from "./Pages/SettingsPage";
import LoginRegistrationPage from "./Pages/LoginRegister";
import AdminDashboard from "./Pages/AdminDashboard";
import ModerationPanel from "./Pages/ModerationPanel";
import NotificationsPage from "./Pages/NotificationPage";
import SearchResultsPage from "./Pages/SearchResult";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forums" element={<ForumListPage />} />
        <Route path="/forums-details" element={<ForumDetailPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/login-register" element={<LoginRegistrationPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/moderation" element={<ModerationPanel />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
