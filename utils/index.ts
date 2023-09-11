const axios =require("axios")

export async function getData() {
  const query = `query{
        countries {
          code
          name
          currency
          emoji
        }
      }`;
  try {
    const response = await axios.post(
      "https://countries.trevorblades.com/graphql",
      { query: query }
    );
    const data=await response.data.data.countries;
    return data
   
  } catch (error) {
    console.log(error)
  }
 
}
