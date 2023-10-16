import axios from "axios"

export const GetAllProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-all`)
    return res.data;
}