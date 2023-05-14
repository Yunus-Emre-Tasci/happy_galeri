import facebook from "../assests/facebook.png"
import instagram from "../assests/instagram.png";
import twitter from "../assests/twitter.png";
import youtube from "../assests/youtube.png";
import pinterest from "../assests/pinterest.png";
import linkedin from "../assests/linkedin.png";

const Footer = () => {
  return (
    <div name="footer" className="h-[376px] bg-[#250400] text-white relative">
      <div className="w-[1600px] left-[160px] absolute top-[63px] bottom-[61px] ">
        <div className="flex">
          <div>
            <h5 className="text-base font-normal leading-normal tracking-[1.3px] font-montserrat">
              HAKKIMIZDA
            </h5>
            <p className="mt-[27px] font-roboto font-normal text-base leading-normal">
              Galeri hakkında
            </p>
            <p className="mt-[15px] font-roboto font-normal text-base leading-normal">
              Ziyaret Kuralları
            </p>
            <p className="mt-[15px] font-roboto font-normal text-base leading-normal">
              Bizi desteklemek isteyenler için
            </p>
          </div>
          <div className="absolute left-[394px] ">
            <h5
              className="text-base font-normal leading-normal tracking-[1.3px] font-montserrat"
              KKIMIZDA
            >
              WEBSİTEMİZ
            </h5>
            <p className="mt-[27px] font-roboto font-normal text-base leading-normal">
              Online bilet al
            </p>
            <p className="mt-[15px] font-roboto font-normal text-base leading-normal">
              Mağaza
            </p>
            <p className="mt-[15px] font-roboto font-normal text-base leading-normal">
              Koleksiyonlar
            </p>
          </div>
          <div className="absolute left-[677px] ">
            <h5
              className="text-base font-normal leading-normal tracking-[1.3px] font-montserrat"
              KKIMIZDA
            >
              CONTACT
            </h5>
            <p className="mt-[27px] font-roboto font-normal text-base leading-normal">
              Sıkça sorulan sorular
            </p>
            <p className="mt-[15px] font-roboto font-normal text-base leading-normal">
              iletişime geç
            </p>
            <p className="mt-[15px] font-roboto font-normal text-base leading-normal">
              bize fikir verin
            </p>
            <p className="mt-[15px] font-roboto font-normal text-base leading-normal">
              Kariyer
            </p>
          </div>
          <div className="flex flex-col w-[1px] h-[195px] absolute left-[922px] bg-[#333333] "></div>
          <div className="absolute left-[1083px] ">
            <div className="flex items-center">
              <h5
                className="text-base font-normal leading-normal tracking-[1.3px] font-montserrat"
              >
                BİZİ TAKİP ET
              </h5>
              <div className="ml-[5px] w-[400px] h-[1px] bg-[#333333] "></div>
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
                  className="w-[20px] h-[20px] text-white "
                  src={instagram}
                  alt=""
                />
              </div>
              <div className="flex items-center ml-[24px] justify-center w-[48px] h-[48px] rounded-full border border-1 border-color-[#FFFFFF01] ">
                <img
                  className="w-[20px] h-[16px] text-white "
                  src={twitter}
                  alt=""
                />
              </div>
              <div className="flex items-center ml-[24px] justify-center w-[48px] h-[48px] rounded-full border border-1 border-color-[#FFFFFF01] ">
                <img
                  className="w-[23px] h-[16px] text-white "
                  src={youtube}
                  alt=""
                />
              </div>
              <div className="flex items-center ml-[24px] justify-center w-[48px] h-[48px] rounded-full border border-1 border-color-[#FFFFFF01] ">
                <img
                  className="w-[20px] h-[20px] text-white "
                  src={pinterest}
                  alt=""
                />
              </div>
              <div className="flex items-center ml-[24px] justify-center w-[48px] h-[48px] rounded-full border border-1 border-color-[#FFFFFF01] ">
                <img
                  className="w-[20px] h-[20px] text-white "
                  src={linkedin}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1600px] h-[1px] bg-[#333333] absolute bottom-[33px] "></div>
        <div className="flex absolute left-[583px] bottom-0 top-[250px]">
          <p>Legal Notice</p>
          <p className="ml-[24px]">Privacy policy</p>
          <p className="ml-[24px]">Cookies</p>
        </div>
      </div>
    </div>
  );
}

export default Footer