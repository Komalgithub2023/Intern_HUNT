import Navbar from "./Shared/navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./Shared/Footer";
import useGetAllJobs from "../hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  useGetAllJobs();
const {user} = useSelector(store=>store.auth);
const navigate = useNavigate();
useEffect(()=>{
  if(user?.role == 'recruiter'){
    navigate("/admin/companies");
  }
},[]);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
};
export default Home;
