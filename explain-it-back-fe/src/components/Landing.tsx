import ExplainBox from "./ExplainBox";
import { ExplainItBackLanding } from "./ExplainItBackLanding";
import HowItWorksSection from "./HowItWorksSection";
import WhatsNextPage from "./WhatsNextPage";
import WhyThisHelpsStudents from "./WhyThisHelpsStudents";

const Landing = () => {
  return (
    <>
      <ExplainItBackLanding />
      <HowItWorksSection />
      <ExplainBox />
      <WhyThisHelpsStudents />

    </>
  );
};

export default Landing;
