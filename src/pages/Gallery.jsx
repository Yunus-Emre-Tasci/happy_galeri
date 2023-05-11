import leftarrow from "../assests/leftarrow.png"
import rightarrow from "../assests/rightarrow.png";

const Gallery = () => {
  return (
    <div name="gallery" className="h-[633px] bg-blue-500">
      <div>
        <h2>Yeni gelen sanat eserlerini inceleyin</h2>
      </div>
      <div className="flex items-center justify-between">
        <p>Özel Galerimiz</p>
        <div className="flex items-center">
          <div className="w-32 h-32 rounded-full items-center flex bg-white justify-center">
            <img className="w-6 h-9" src={leftarrow} alt="" />
          </div>
          <div className="w-8 h-8 bg-white rounded-full" />
          <div className="w-6 h-6 bg-white bg-opacity-50 rounded-full" />
          <div className="w-6 h-6 bg-white bg-opacity-50 rounded-full" />
          <div className="w-6 h-6 bg-white bg-opacity-50 rounded-full" />
          <div className="w-6 h-6 bg-white bg-opacity-50 rounded-full" />
          <div className="w-6 h-6 bg-white bg-opacity-50 rounded-full" />
          <div className="w-6 h-6 bg-white bg-opacity-50 rounded-full" />
          <div className="w-32 h-32 rounded-full items-center flex bg-white justify-center">
            <img className="w-6 h-9" src={rightarrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery