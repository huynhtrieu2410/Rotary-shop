// import { Select } from "@mui/material";
import { Axios } from "./axiosClient";


class ProductApi {
    getAllData = (select: string) => {
        const url = select;
        return Axios.get(url);
    };
}

const ProductApi = new ProductApi();
export default ProductApi;