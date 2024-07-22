

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all products
async function fetchProducts() {
    try {
        //handle case where domain is not available yet
        if (!apiDomain){
            return [];
        }

      const res = await fetch(`${apiDomain}/products`, { cache: 'no-store'});
  
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      return res.json();
    } catch(error) {
      console.log(error);
      return [];
  
    }
  }

  //fetch single product
  async function fetchProduct(id) {
    try {
        //handle case where domain is not available yet
        if (!apiDomain){
            return null;
        }

      const res = await fetch(`${apiDomain}/products/${id}`);
  
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      return res.json();
    } catch(error) {
      console.log(error);
      return null;
  
    }
  }

  export { fetchProducts, fetchProduct };