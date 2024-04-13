import axios from "axios";

interface Request<BodyType, ParamsType> {
  endpoint: string;
  body?: BodyType;
  params?: ParamsType;
}

const api = axios.create({
  baseURL: "https://dev.api.syncremote.co/api/",
  timeout: 30000,
});

export const httpGet = async <ResponseType = any, ParamsType = any>({
  endpoint,
  params,
}: Request<any, ParamsType>) => {
  const { data } = await api.get<ResponseType>(endpoint, { params });
  return data;
};
