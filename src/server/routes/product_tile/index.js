const config = require("../../config");
const axios = require("axios");
const token = require("../../config/auth");
const {
  getReadyProducts,
  getProductListPrice,
  getProductSwatches
} = require("../../helpers/product/productHelper");

module.exports = (fastify, opts, done) => {
  fastify.get("/producttiles/:category", async (request, reply) => {
    let queryString = '';
    if (Object.entries(request.query).length !== 0) {
    for (let [key, value] of Object.entries(request.query)) {
     queryString += key + '=' + value + '&';
    }
    queryString = queryString.slice(0, queryString.length-1);
    }
    console.log('querystring-----------------',(queryString ? '?' + queryString : ""));
    const options = (url, query, method, body) => {
      return {
        method: method,
        url: config.url + url + (query ? "?" + query : ""),
        json: true,
        headers: {
          "Content-Type": "application/json",
          "x-dw-client-id": config.client_id,
          Authorization: "Bearer " + token.get()
        }
      };
    };
    const productSearch_result = await axios(
      options(
        "/product_search",
        "count=24&refine=cgid=" + request.params.category + `&${queryString}`
      )
    );
    const productSearchHits = productSearch_result.data.hits;
    const refinements = productSearch_result.data.refinements;
    const masterProductIds = productSearchHits
      .map(hit => hit.product_id)
      .toString();
        if(!token.get()){
          await axios.post("http://127.0.0.1:8000/customers/auth", { type: "guest" });
        }

    const products_result = await axios(
      options(
        `/products/(${masterProductIds})`,
        "expand=variations,images,prices",
        "GET"
      )
    );
    const products = products_result.data.data;

    const detailedProducts = await getReadyProducts(products);

    const readyProducts = detailedProducts.map(product => {
      let tempProduct = {
        id: product.id,
        imageSrc: product.imageSrc,
        imageAlt: product.imageAlt,
        product_type: product.product_type,
        priceMin: product.priceMin,
        currency: product.currency,
        priceMax: product.priceMax,
        title: product.title
      };
      if (product.product_type === "master") {
        console.log(product.variants);
        tempProduct.listPrice = getProductListPrice(product.variants);
        tempProduct.swatches = getProductSwatches(product.variants);
      }
      return tempProduct;
    });

    reply.code(200).send({ products: readyProducts, refinements });
  });
  done();
};
