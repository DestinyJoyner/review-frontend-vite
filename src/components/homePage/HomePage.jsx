import { RiGameFill } from "react-icons/ri";
import { IoGameControllerSharp } from "react-icons/io5";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homePage gridCenter">
      <section className="homePageHeader flexContainer">
        <IoGameControllerSharp color={"grey"} size={"100px"} />
        <RiGameFill color={"yellow"} size={"100px"} />
        <IoGameControllerSharp color={"grey"} size={"100px"} />
      </section>

      <section className="homePageTitle">
        <h1>Review Videogame App</h1>
        <span>Destiny J.</span>
      </section>
    </div>
  );
}
