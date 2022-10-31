import { useEffect, useState } from "react";
import { getGfs } from "../helpers/getGifs";




const useFetchGifs = ( category ) => {

    const [images , setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

  
    const getImages = async() => {
          const gifs = await getGfs(category);
          setImages(gifs);
          setIsLoading(false);
    } 


    useEffect(() => {
      getImages();
    }, []);  //[ ] se ejecuta solo la primera ves
    

    return [
        images,
        isLoading
    ];


  }

export default useFetchGifs;