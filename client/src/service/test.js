import axios from "axios";
export {doGet};

const axiosInstanse = axios.create({
    baseURL: process.env.VUE_APP_API_ORIGIN
});

function doGet(){
    return axiosInstanse.get("/api/test");
}