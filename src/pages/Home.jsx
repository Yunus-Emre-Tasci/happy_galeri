import React from 'react'

const Home = () => {
  return (
    <div name="home" className="relative h-[1338px]">
      <div className="w-[1640px] h-[820px] mx-auto z-100">
        <img
          className="w-full h-full rounded-b-[20px]"
          src="https://www.artmajeur.com/medias/hero_new/j/e/jean-dubreil/blog/02.jpg"
          alt=""
        />
        <div className="absolute left-[211px] top-[275px] w-[651px] text-white ">
          <h2 className="font-manrope text-[60px] leading-[82px] font-normal capitalize">
            Çocuklar İçin Sanat Eğitimi
          </h2>
          <p className="font-manrope text-[30px] leading-[41px] font-extralight capitalize mt-[24px] ">
            Ücretsiz aile etkinliklerimizde bir sanat dünyası oyunu oynayın,
            çocuklarınızla yaratın ve keşfedin
          </p>
        </div>
      </div>
      <div id='transparent' className="absolute left-[140px] top-0 rounded-b-[20px] w-[1640px] h-[820px] "></div>
      <div className=" absolute left-[400px] top-[940px] text-center w-[1119px] ">
        <h2 className="font-manrope text-[60px] leading-[82px] font-extralight capitalize">
          Happy Galeri’ye Hoşgeldiniz
        </h2>
        <p className="font-manrope text-[30px] leading-[41px] font-extralight capitalize mt-[32px] ">
          bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu
          yüzden en iyi şekilde yararlanmak için ziyaretinizi önceden planlayın.
          Temaya dayalı bir turu takip etmek için neden ziyaretçi
          parkurlarımızdan birini seçmiyorsunuz? Molaya ihtiyacınız olduğunda,
          müzenin dinlendirici bahçelerinden daha iyi neresi var?
        </p>
      </div>
    </div>
  );
}

export default Home