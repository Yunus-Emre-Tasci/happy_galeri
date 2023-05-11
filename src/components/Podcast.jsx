import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Podcast = () => {

    const [slidess, setSlidess] = useState([]);

    useEffect(() => {
      const fetchData=async()=> {
        const data=await axios("https://w3yz.com/api/ch")
        const data2 = data.data.products.map((i) =>
          i.imagelist[0].url
        );
        // console.log(data2)
    setSlidess(data2)
    };
        // setSlidess(data.data.products.map((i) =>
        //   i.imagelist[0].url))
      
      fetchData();
    }, []);

    console.log(slidess[1]);


  return (
    <div>Podcast</div>
  )
}

export default Podcast