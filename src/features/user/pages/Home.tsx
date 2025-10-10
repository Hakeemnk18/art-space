import ArtHero from "../component/HomeBG";
import Features from "../component/Features";
import FeaturedProducts from "../component/featuredProduct";
import ArtisanStory from "../component/ArtStory";
import Footer from "../../shared/component/Footer";

const Home = () => {
  return (
    <>
      <ArtHero />
      <Features />
      <FeaturedProducts />
      <ArtisanStory />
      <Footer />
    </>
  );
};

export default Home;
