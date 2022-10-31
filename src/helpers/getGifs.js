
    const getGfs = async (category) => {
        const apiKey = 'OUPhz3py9LVeq9doBgj3Fr2JdL9ViZE2';
        const resp =  await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`);
  
        const { data } = await resp.json();
  
        const gifs = data.map( ({id, title, images:{downsized_medium: {url}}}) => ({
              id,
              title,
              url
        }) );
  
        console.log(gifs);
        return gifs;
      }


      export {
        getGfs
      }