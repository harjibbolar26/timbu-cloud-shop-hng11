import axios from "axios";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://api.timbu.cloud";

const organizationId = import.meta.env.VITE_ORGANIZATION_ID;
const appid = import.meta.env.VITE_APPID;
const apikey = import.meta.env.VITE_APIKEY;


export const FetchProduct = async (url, page) => {
  const { data } = await axios.get(
    `/api/${url}?organization_id=${organizationId}&page=${page}&size=10&Appid=${appid}&Apikey=${apikey}`
  );

  return data;
};

export const FetchSingleProduct = async (url) => {
  const { data } = await axios.get(
    `/api/${url}?organization_id=${organizationId}&Appid=${appid}&Apikey=${apikey}`
  );

  return data;
};
