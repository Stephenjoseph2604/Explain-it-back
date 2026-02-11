
import PricingPage from "./components/PricingPage.tsx";
import AboutPage from "./components/AboutPage.tsx";
import WhatsNextPage from "./components/WhatsNextPage.tsx";
import { Route, Routes } from "react-router-dom";

import Common from "./components/Common.tsx";
import Landing from "./components/Landing.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";
import SignInPage from "./components/SignInPage.tsx";
import SignUpPage from "./components/SignUpPage.tsx";
import ProfilePage from "./components/ProfilePage.tsx";
export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="whats-next" element={<WhatsNextPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route  path="signup" element={<SignUpPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
