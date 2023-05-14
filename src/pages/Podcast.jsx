import european1 from "../assests/european1.png"
import Aile from "../assests/Aile.png"
import Grup from "../assests/Grup.png";
import Arastirma from "../assests/Arastirma.png";
import Engelli from "../assests/Engelli.png";
import Kurumsal from "../assests/Kurumsal.png";
import Sponsor from "../assests/Sponsor.png";
import ZiyaretOk from "../assests/ZiyaretOk.png"

const Podcast = () => {
  return (
    <div className="h-[2129px] bg-yellow-500 relative ">
      <div className="bg-gradient-to-br from-gray-300 to-gray-200 w-[1860px] h-[1327px] absolute left-[30px] top-[161px] rounded-xl">
        <div>
          <div>
            <div>
              <h3>Podcast</h3>
              <p>
                bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki!
                Bu yüzden en iyi şekilde .
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <p>SPOTİFAY</p>
            </div>
            <div className="flex">
              <div>
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
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative w-[386px] h-[486px] text-white">
              <img className="w-full h-full" src={european1} alt="" />
              <div className="absolute top-2 left-1">
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
          </div>
        </div>
      </div>
      <div className="flex justify-between absolute top-[1578px] right-[168px] left-[140px]">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-[60px] font-extralight font-manrope leading-[82px] w-[511px]">
            Ziyaret Biçimini Seç
          </h2>
          <p className="text-[30px] font-extralight leading-[41px] font-manrope">
            Bu Muhteşem Müzeyi Nasıl Keşfetmek İstersin?
          </p>
        </div>
        <div className="flex flex-wrap  ml-[200px] min-w-[788px] min-h-[379px] gx-[8px] ">
          <div className="flex w-[390px] h-[114px] justify-around items-center">
            <div className="flex items-center">
              <img className="w-[42px] h-[38px] " src={Aile} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Aile ile ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]   " src={ZiyaretOk} alt="" />
          </div>
          <div className="flex w-[390px] h-[114px] justify-around items-center">
            <div className="flex items-center">
              <img className="w-[31px] h-[42px] " src={Engelli} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Engelinize göre ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]  " src={ZiyaretOk} alt="" />
          </div>
          <div className="flex w-[390px] h-[114px] justify-around items-center">
            <div className="flex items-center">
              <img className="w-[39px] h-[45px] " src={Grup} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Grup ile ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]  " src={ZiyaretOk} alt="" />
          </div>
          <div className="flex w-[390px] h-[114px] justify-around items-center">
            <div className="flex items-center">
              <img className="w-[36px] h-[45px] " src={Kurumsal} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Kurumsal eğitim için ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]  " src={ZiyaretOk} alt="" />
          </div>
          <div className="flex w-[390px] h-[114px] justify-around items-center">
            <div className="flex items-center">
              <img className="w-[40px] h-[44px] " src={Arastirma} alt="" />
              <p className="font-roboto text-[16px] font-normal leading-[25px] ml-[23px]">
                Araştırma için ziyaret
              </p>
            </div>
            <img className="w-[9px] h-[15px]  " src={ZiyaretOk} alt="" />
          </div>
          <div className="flex w-[390px] h-[114px] justify-around items-center">
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