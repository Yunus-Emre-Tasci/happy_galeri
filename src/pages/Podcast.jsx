import european1 from "../assests/european1.png"
import Aile from "../assests/Aile.png"
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
      <div className="relative flex">
        <div>
          <h2>Ziyaret Biçimini Seç</h2>
          <p>Bu Muhteşem Müzeyi Nasıl Keşfetmek İstersin?</p>
        </div>
        <div className="flex flex-wrap left-[90px] right-[168px] w-[788px] h-[379ox] bg-blue-400">
          <div className="flex w-[390px] h-[114px] ">
            <div className="flex">
              <img src={Aile} alt="" />
              <p>Aile ile ziyaret</p>
            </div>
            <img src={ZiyaretOk} alt="" />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Podcast