import { Endpoints } from "../constants/DummyJsonConstants";
import {
  FailureResponse,
  Page,
  Products,
  User,
} from "../types/DummyJsonServiceTypes";
import { fetchApi } from "../utils/Fetch";

class DummyJsonService {
  login(data: unknown) {
    return fetchApi<User | FailureResponse>({
      url: Endpoints.LOGIN,
      methodType: "POST",
      data: data,
    });
  }

  getProducts(searchTerm?: string) {
    const isSearchable = searchTerm && searchTerm.length > 0;
    return fetchApi<Products & Page>({
      url: isSearchable
        ? Endpoints.SEARCH + searchTerm
        : Endpoints.GET_PRODUCTS,
    });
  }

  authorize() {
    return fetchApi<User>({
      url: Endpoints.AUTH,
      withAuth: true,
    });
  }
}

export default new DummyJsonService();
