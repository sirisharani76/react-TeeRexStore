import axios from "axios";

export const fetchProductsDataAxios = async () => {
                  try {
                    const { data } = await axios.get(" https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
                    return data;
                  } catch (e) {
                    throw new Error(String(e));
                  }
                };