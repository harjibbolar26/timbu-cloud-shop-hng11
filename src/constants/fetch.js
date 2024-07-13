import axios from "axios";

const BASE_URL = "https://api.timbu.cloud";

const organizationId = "ceb9ba96e454458aab59f3cd593836f9";
const appid = "T3KYPZSJNWI75I9";
const apikey = "e5a1601bef6449768f13c4f8cb952a1620240712131236309227";

export const FetchProduct = async (url, page) => {
  const { data } = await axios.get(
    `/api/${url}?organization_id=${organizationId}&page=${page}&size=10&Appid=${appid}&Apikey=${apikey}`
    //    " https://api.timbu.cloud/products? organization_id=ceb9ba96e454458aab59f3cd593836f9&page=1&size=10&Appid=T3KYPZSJNWI75I9&Apikey=e5a1601bef6449768f13c4f8cb952a1620240712131236309227"
  );

  return data;
};

export const FetchSingleProduct = async (url) => {
  const { data } = await axios.get(
    `/api/${url}?organization_id=${organizationId}&Appid=${appid}&Apikey=${apikey}`
  );

  return data;
};


// https://api.timbu.cloud/products?organization_id=ceb9ba96e454458aab59f3cd593836f9&page=1&size=10&Appid=T3KYPZSJNWI75I9&Apikey=e5a1601bef6449768f13c4f8cb952a1620240712131236309227

// https://api.timbu.cloud/products/1234?organization_id=123
