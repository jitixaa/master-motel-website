import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <>
      {/* Ensure HeroSlider is in a relative container */}
      <div className="relative">
        <HeroSlider className="absolute top-0 left-0 w-full z-10" />
      </div>

      {/* Centered BookForm overlapping the slider */}
      <div className="container mx-auto relative">
        <div className="bg-accent/40 pt-4 lg:shadow-xl lg:absolute lg:top-[-40px] lg:left-0 lg:right-0 p-4 rounded-lg">
          <BookForm />
        </div>
      </div>

      {/* Ensure Rooms section is properly spaced */}
      <div className="mt-20">
        <Rooms />
      </div>
    </>
  );
};

export default Home;
