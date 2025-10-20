import ArtHero from "../component/HomeBG";
import Features from "../component/Features";
import FeaturedProducts from "../component/featuredProduct";
import ArtisanStory from "../component/ArtStory";
import Footer from "../../shared/component/Footer";
import ProductScroller from "../component/ProductScroller/ProductScroller";
import Marquee from "../component/Marquee";
import HeroBanner from "../component/CustomText";
import VideoPlayer from "../component/VideoPlayer";

const Home = () => {
  return (
    <>
      <ArtHero />
      <Features />
      <FeaturedProducts />
      <HeroBanner />
      <Marquee text="Handcrafted with Passion • Art for Your Everyday Life •"/>
      <ArtisanStory />
      <VideoPlayer />
      <ProductScroller />
      <Footer />
    </>
  );
};

export default Home;
