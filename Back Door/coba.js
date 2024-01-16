const axios = require('axios');

const options = {
  method: 'GET',
  url: 'http://localhost:3000/api/v1/BVT/32',
}; 
 

// async function tesAsync(){
//   const response = await axios.request(options)
//   console.log(response);
// }

const tesAsync2 = async () => {
  const response = await fetch('http://localhost:3000/api/v1/BVT/', {
    method: "GET",
  })
  const data = await response.json()
  console.log(data)
}

tesAsync2()


// try {
// 	const response = axios.request(options).then(response => {
//     console.log(response.data)
//     const response2 = axios.request(options).then(response => (
//       console.log(response.data)
//     ));
//   });
// 	console.log(response);
// } catch (error) {
// 	console.error(error);
// }