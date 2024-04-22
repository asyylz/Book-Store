import axios from "axios";

const baseURL = "https://65f44b1ff54db27bc0215106.mockapi.io";
export async function postProduct(product) {
  await axios.post(`${baseURL}/products/`, product);
}