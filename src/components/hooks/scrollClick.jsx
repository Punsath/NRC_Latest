import { useNavigate } from 'react-router-dom';

export const scrollClick = ({sectionRef, handleFadeIn}) => {
  const navigate = useNavigate();
  const handleNavigateToSection = () => {
    console.log(sectionRef);
    if (window.location.href.split("/").pop() !== "/") {
      navigate("/"); // Navigate to the home page if not already there
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleNavigateToSectionMobile = () => {
    if (window.location.href.split("/").pop() !== "/") {
      navigate("/"); // Navigate to the home page if not already there
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      handleFadeIn();
    }
  };
  return { handleNavigateToSection, handleNavigateToSectionMobile };
}
