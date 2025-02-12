import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";
import HeroSlider from "../components/HeroSlider";
const Home = () => {
  return (
    <>
      <div className="relative top-10">
        {" "}
        {/* Moves the HeroSlider down slightly */}
        <HeroSlider />
      </div>
      <div className="container mx-auto relative">
        <div className="bg-accent/40  pt-4 lg:shadow-xl lg:relative lg:top-0 lg:left-0 lg:right-0 p-4 rounded-lg">
          <BookForm />
        </div>
      </div>
      <Rooms />
    </>
  );
};

export default Home;
