import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "VT075_hWDZhQiXOgOxIv7AToAKe5CqJjbaanzWqoFvM";
const searchParams = {
  client_id: ACCESS_KEY,
  query: "",
  page: 1,
  per_page: 12,
  orientation: "landscape"
};

export interface Photos {
  id: string;
  urls: {regular: string, small: string};
  alt_description: string;
  user: {name: string};
  likes: number;
}
interface Resp {
  results: Photos[];
  total: number;
  total_pages: number;
}
const requestPhotosByQuery = async (query: string, page: number): Promise<Resp> => {
  const { data } = await axios.get("/search/photos", {
    params: {
      ...searchParams,
      page,
      query
    },
  });
  return data;
}

export default requestPhotosByQuery;