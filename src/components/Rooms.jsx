import { useContext } from "react";

// Context
import { RoomContext } from "../context/RoomContext";

// Components
import Room from "../components/Room";

const Rooms = () => {
  const { rooms } = useContext(RoomContext);

  return (
    <section className="py-8">
      <div className="container mx-auto lg:px-0">
        {/* Grid */}
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:max-0">
          {rooms.map((room) => (
            <Room room={room} key={room.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
