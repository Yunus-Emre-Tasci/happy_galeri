import Aile from "../assests/Aile.png"
import Grup from "../assests/Grup.png";
import Arastirma from "../assests/Arastirma.png";
import Engelli from "../assests/Engelli.png";
import Kurumsal from "../assests/Kurumsal.png";
import Sponsor from "../assests/Sponsor.png";
import ZiyaretOk from "../assests/ZiyaretOk.png"
import axios from "axios";
import { useEffect, useState } from "react";

const Podcast = () => {

   const [slides, setSlides] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
       const data = await axios("https://w3yz.com/api/ch");
       const data2 = data.data.products.map((i) => i.imagelist[0].url);
       
       setSlides(data2);
     }
     fetchData();
   }, []);

   console.log(slides);

   const selectedSlides = [slides[2], slides[1], slides[9], slides[0]];

  return (
    <div className="h-[2129px] relative ">
      <div className="bg-gradient-to-br from-gray-300 to-gray-200 w-[1860px] h-[1327px] absolute left-[30px] top-[161px] rounded-[40px]">
        <div className="px-[110px] py-[120px] ">
          <div>
            <div className="mt-[72px]">
              <h3 className="font-extralight font-manrope text-[60px] leading-[82px]">
                Podcast
              </h3>
              <p className="font-extralight font-manrope text-[30px] leading-[41px] capitalize w-[705px] mt-[8px]">
                Bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki!
                Bu yüzden en iyi şekilde .
              </p>
              <p className="font-normal font-nunito w-[568px] text-[16px] text-[#808080] leading-[150%] mt-[31px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <p className="font-normal font-nunito w-[568px] text-[16px] text-[#808080] leading-[150%] mt-[118px]">
                SPOTİFAY
              </p>
            </div>
            <div className="flex">
              <div className="absolute w-[184px] h-[173px] left-[970px] top-[120px] ">
                <img className="w-full h-full" src={slides[6]} alt="" />
              </div>
              <div className="absolute w-[185px] h-[349px] left-[970px] top-[323px] ">
                <img className="w-full h-full" src={slides[3]} alt="" />
              </div>
              <div className="absolute w-[184px] h-[360px] left-[1168px] top-[123px] ">
                <img className="w-full h-full" src={slides[7]} alt="" />
              </div>
              <div className="absolute w-[184px] h-[173px] left-[1179px] top-[499px] ">
                <img className="w-full h-full" src={slides[6]} alt="" />
              </div>
              <div className="absolute w-[383px] h-[173px] left-[1366px] top-[123px] ">
                <img className="w-full h-full" src={slides[9]} alt="" />
              </div>
              <div className="absolute w-[184px] h-[173px] left-[1366px] top-[312px] ">
                <img className="w-full h-full" src={slides[8]} alt="" />
              </div>
              <div className="absolute w-[184px] h-[173px] left-[1564px] top-[309px] ">
                <img className="w-full h-full" src={slides[8]} alt="" />
              </div>
              <div className="absolute w-[383px] h-[173px] left-[1366px] top-[498px] ">
                <img className="w-full h-full" src={slides[4]} alt="" />
              </div>
              {/* <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="absolute left-[110px] top-[721px] flex w-[1640px] h-[486px] gap-x-[33px]">
            {selectedSlides.slice(0, 4).map((slide, i) => (
              <div key={i} className="relative w-[386px] h-[486px] text-white">
                <img className="w-full h-full" src={slide} alt="" />
                <div className="absolute top-2 left-1">
                  <h4 className="ml-[21px] mt-[40px] font-medium font-nunito text-[24px] leading-[33px] tracking-[4%]">
                    EUROPEAN
                  </h4>
                  <p className="w-[340px] ml-[21px] mt-[301px] font-normal font-nunito text-[16px] leading-[150%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>
            ))}
            {/* <div>
              <img src="" alt="" />
              <div>
                <h4>EUROPEAN</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h4>EUROPEAN</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h4>EUROPEAN</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-between absolute top-[1578px]  left-[140px]">
        <div className="flex flex-col justify-center ">
          <h2 className="text-[60px] font-extralight font-manrope leading-[82px] w-[511px]">
            Ziyaret Biçimini Seç
          </h2>
          <p className="text-[30px] w-[705px] font-extralight leading-[41px] font-manrope">
            Bu Muhteşem Müzeyi Nasıl Keşfetmek İstersin?
          </p>
        </div>
        <div className="flex-end flex flex-wrap  ml-[120px] min-w-[788px] min-h-[379px]  ">
          <div className="flex w-[390px] h-[114px] justify-between px-[40px] py-[45px] items-center">
            <div className="flex items-center">
              <img className="w-[42px] h-[38px] " src={Aile} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Aile ile ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]   " src={ZiyaretOk} alt="" />
          </div>
          <div className="flex w-[390px] h-[114px] justify-between px-[40px] py-[45px] items-center">
            <div className="flex items-center">
              <img className="w-[31px] h-[42px] " src={Engelli} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Engelinize göre ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]  " src={ZiyaretOk} alt="" />
          </div>
          <div className="flex w-[390px] h-[114px] justify-between px-[40px] py-[45px] items-center">
            <div className="flex items-center">
              <img className="w-[39px] h-[45px] " src={Grup} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Grup ile ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]  " src={ZiyaretOk} alt="" />
          </div>
          <div className="flex w-[390px] h-[114px] justify-between px-[40px] py-[45px] items-center">
            <div className="flex items-center">
              <img className="w-[36px] h-[45px] " src={Kurumsal} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Kurumsal eğitim için ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]  " src={ZiyaretOk} alt="" />
          </div>
          <div className="flex w-[390px] h-[114px] justify-between px-[40px] py-[45px] items-center">
            <div className="flex items-center">
              <img className="w-[40px] h-[44px] " src={Arastirma} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Araştırma için ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]  " src={ZiyaretOk} alt="" />
          </div>
          <div className="flex w-[390px] h-[114px] justify-between px-[40px] py-[45px] items-center">
            <div className="flex items-center">
              <img className="w-[30px] h-[45px] " src={Sponsor} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Sponsor olmak için ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]  " src={ZiyaretOk} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcast