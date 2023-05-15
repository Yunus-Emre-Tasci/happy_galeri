import leftarrow from "../assests/leftarrow.png"
import rightarrow from "../assests/rightarrow.png";

const Gallery = () => {
  return (
    <div name="gallery" className="h-[633px] bg-[#250400] relative text-white">
      <div className="absolute left-[654px] top-[120px] w-[612px] text-center">
        <h2 className="font-manrope text-[60px] leading-[82px] font-extralight capitalize">
          Yeni gelen sanat eserlerini inceleyin
        </h2>
      </div>
      <div className="absolute left-[682px] top-[125px] w-[172px] h-[116px] bg-[#E36F2D]  blur-[100px]"></div>
      <div className="absolute left-[930px] top-[120px] w-[295px] h-[198px] bg-[#E3A22D]  blur-[200px]"></div>
      <div className="absolute left-[140px] top-[434px] w-[226px] text-center">
        <h4 className="font-manrope text-[36px] leading-[49px] font-extralight">
          Özel Galerimiz
        </h4>
      </div>
      <div className="absolute left-[1564px] top-[434px] flex items-center justify-center">
        <div className="w-[32px] h-[32px] rounded-full items-center flex bg-white justify-center">
          <img className="w-[6px] h-[9px]" src={leftarrow} alt="" />
        </div>
        <div className="w-[8px] h-[8px] bg-white rounded-full ml-[16px]" />
        <div className="w-[6px] h-[6px] bg-white bg-opacity-50 rounded-full ml-[3px] " />
        <div className="w-[6px] h-[6px] bg-white bg-opacity-50 rounded-full ml-[3px] " />
        <div className="w-[6px] h-[6px] bg-white bg-opacity-50 rounded-full ml-[3px] " />
        <div className="w-[6px] h-[6px] bg-white bg-opacity-50 rounded-full ml-[3px] " />
        <div className="w-[6px] h-[6px] bg-white bg-opacity-50 rounded-full ml-[3px] " />
        <div className="w-[6px] h-[6px] bg-white bg-opacity-50 rounded-full ml-[3px] " />
        <div className="w-[32px] h-[32px] rounded-full items-center flex bg-white justify-center ml-[19px]">
          <img className="w-[6px] h-[9px]" src={rightarrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery