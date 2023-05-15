import { Link } from "react-scroll";
import warm from "../assests/Warm.png"
import happyGaleri from "../assests/happyGaleri.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[160px] relative ">
      <div className="flex absolute left-[50px] top-[62px] w-[241px] ">
        <img className="w-[43px] h-[25px] " src={warm} alt="" />
        <img
          src={happyGaleri}
          className="ml-[12px] w-[186px] h-[27px] "
          alt=""
        />
      </div>
      <div className="absolute left-[1168px] top-[63px] min-w-[702px] flex justify-center items-center text-[11px] font-inter font-normal leading-[24px] tracking-[2.2px] text-[#67645E] cursor-pointer">
        <p>
          <Link smooth={true} duration={500} to="home">
            HAKKIMIZDA
          </Link>
        </p>
        <p className="ml-[28px] ">
          <Link smooth={true} duration={500}>
            SIKÇA SORULAN SORULAR
          </Link>
        </p>
        <p className="ml-[28px] ">
          <Link smooth={true} duration={500} to="gallery">
            GALERİ
          </Link>
        </p>
        <p className="ml-[28px] ">
          <Link smooth={true} duration={500} to="footer">
            İLETİŞİM
          </Link>
        </p>
        <p className="ml-[28px] ">
          <Link>GİRİŞ YAP</Link>
        </p>
        <p className="ml-[28px] ">
          <Link>ALIŞVERİŞ (0)</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
