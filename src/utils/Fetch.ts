import { BASE_URL } from "../constants/DummyJsonConstants";

export type FetchApiParamsType = {
  url?: string;
  methodType?: METHOD_TYPE;
  data?: unknown;
  withAuth?: boolean;
};

export async function fetchApi<T>({
  url = "",
  methodType = "GET",
  data = undefined,
  withAuth = false,
}: FetchApiParamsType): Promise<T> {
  const completeUrl = new URL(BASE_URL + url);
  const response = await fetch(completeUrl, {
    method: methodType,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...(withAuth
        ? {
            Authorization: "Bearer YOUR_TOKEN_HERE",
          }
        : {}),
    },
  });
  return response.json() as T;
}

type METHOD_TYPE = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
