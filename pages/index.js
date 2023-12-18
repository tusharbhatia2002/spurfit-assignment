import Navbar from "./navbar";
import Sidebar from "./sidebar";
import PersonList from "./personList";

const Desktop1 = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[1000px] overflow-hidden text-center text-base text-comm-blue-primary-0078d4 font-dm-sans">
      <Sidebar />
      <Navbar />
      <PersonList />
    </div>
  );
};

export default Desktop1;
