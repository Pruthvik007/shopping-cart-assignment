import { Endpoints } from "../constants/DummyJsonConstants";
import DummyJsonHelper from "../helpers/DummyJsonHelper";
import {
  FailureResponse,
  FilterType,
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

  getProducts(filters: FilterType) {
    return fetchApi<Products & Page>({
      url: DummyJsonHelper.setFiltersToUrl(filters),
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
