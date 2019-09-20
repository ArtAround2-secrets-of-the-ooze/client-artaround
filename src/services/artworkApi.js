const apiUrl = process.env.API_URL;

//fetch call to api to return artists with artworks
export const getArtistsWithArtwork = () => {
  return fetch(`${apiUrl}/api/v1/users/user-with-artwork`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(res => {
      if(!res.ok) throw 'ERROR - unable to GET all ARTISTS with ARTWORK aggregation';
      return res.json();
    });
};
