import facebook from "../assests/facebook.png"
import instagram from "../assests/instagram.png";
import twitter from "../assests/twitter.png";
import youtube from "../assests/youtube.png";
import pinterest from "../assests/pinterest.png";
import linkedin from "../assests/linkedin.png";

const Footer = () => {
  return (
    <div name="footer" className="h-[376px] bg-[#250400] text-white relative">
      <div className="w-[1600px] left-[160px] absolute top-[63px] bottom-[61px] bg-yellow-300 ">
        <div className="flex">
          <div>
            <h5>HAKKIMIZDA</h5>
            <p>Galeri hakkında</p>
            <p>Ziyaret Kuralları</p>
            <p>Bizi desteklemek isteyenler için</p>
          </div>
          <div className="absolute left-[394px] ">
            <h5>WEBSİTEMİZ</h5>
            <p>Online bilet al</p>
            <p>Mağaza</p>
            <p>Koleksiyonlar</p>
          </div>
          <div className="absolute left-[677px] ">
            <h5>CONTACT</h5>
            <p>Sıkça sorulan sorular</p>
            <p>iletişime geç</p>
            <p>bize fikir verin</p>
            <p>Kariyer</p>
          </div>
          <div className="flex flex-col w-[1px] h-[195px] absolute left-[922px] bg-[#333333] "></div>
          <div className="absolute left-[1083px] ">
            <div className="flex items-center">
              <h5>BİZİ TAKİP ET</h5>
              <div className="ml-[5px] w-[419px] h-[1px] bg-[#333333] "></div>
            </div>
            <div className="flex mt-[20px]">
              <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full border border-1 border-color-[#FFFFFF01] ">
                <img
                  className="w-[13px] h-[20px] text-white "
                  src={facebook}
                  alt=""
                />
              </div>
              <div className="flex items-center ml-[24px] justify-center w-[48px] h-[48px] rounded-full border border-1 border-color-[#FFFFFF01] ">
                <img
                  className="w-[13px] h-[20px] text-white "
                  src={facebook}
                  alt=""
                />
              </div>
              <div className="flex items-center ml-[24px] justify-center w-[48px] h-[48px] rounded-full border border-1 border-color-[#FFFFFF01] ">
                <img
                  className="w-[13px] h-[20px] text-white "
                  src={facebook}
                  alt=""
                />
              </div>
              <div className="flex items-center ml-[24px] justify-center w-[48px] h-[48px] rounded-full border border-1 border-color-[#FFFFFF01] ">
                <img
                  className="w-[13px] h-[20px] text-white "
                  src={facebook}
                  alt=""
                />
              </div>
              <div className="flex items-center ml-[24px] justify-center w-[48px] h-[48px] rounded-full border border-1 border-color-[#FFFFFF01] ">
                <img
                  className="w-[13px] h-[20px] text-white "
                  src={facebook}
                  alt=""
                />
              </div>
              <div className="flex items-center ml-[24px] justify-center w-[48px] h-[48px] rounded-full border border-1 border-color-[#FFFFFF01] ">
                <img
                  className="w-[13px] h-[20px] text-white "
                  src={facebook}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1600px] h-[1px] bg-[#333333] absolute bottom-[33px] "></div>
        <div className="flex absolute left-[583px] bottom-0">
          <p>Legal Notice</p>
          <p className="ml-[24px]">Privacy policy</p>
          <p className="ml-[24px]">Cookies</p>
        </div>
      </div>
    </div>
  );
}

export default Footer