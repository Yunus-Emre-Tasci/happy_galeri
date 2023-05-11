import { Link } from "react-scroll";
import warm from "../assests/Warm.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[160px] bg-red-500">
      <div className="flex">
        <img className="w-[43px] h-[25px]" src={warm} alt="" />
        <h1>HAPPY GALERİ</h1>
      </div>
      <ul className="flex text-[12px] cursor-pointer">
        <li>
          <Link smooth={true} duration={500} to="home">
            HAKKIMIZDA
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500}>
            SIKÇA SORULAN SORULAR
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="gallery">
            GALERİ
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="footer">
            İLETİŞİM
          </Link>
        </li>
        <li>
          <Link>
            GİRİŞ YAP
          </Link>
        </li>
        <li>
          <Link>ALIŞVERİŞ (0)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
