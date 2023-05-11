import React from 'react'

const Home = () => {
  return (
    <div name="home" className="relative h-[1338px] bg-green-500">
      <div className="w-[1640px] h-[820px] mx-auto">
        <img
          className="w-full h-full"
          src="https://www.artmajeur.com/medias/hero_new/j/e/jean-dubreil/blog/02.jpg"
          alt=""
        />
        <div className="absolute left-[211px] top-[275px]">
          <h2>Çocuklar İçin Sanat Eğitimi</h2>
          <p>
            Ücretsiz aile etkinliklerimizde bir sanat dünyası oyunu oynayın,
            çocuklarınızla yaratın ve keşfedin
          </p>
        </div>
      </div>
      <div className="text-center">
        <h2>Happy Galeri’ye Hoşgeldiniz</h2>
        <p>
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