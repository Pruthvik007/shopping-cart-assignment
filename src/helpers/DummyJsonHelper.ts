import { Endpoints, QueryParams } from "../constants/DummyJsonConstants";
import { FilterType } from "../types/DummyJsonServiceTypes";

class DummyJsonHelper {
  setFiltersToUrl(filters: FilterType) {
    const isSearchable = filters.searchTerm && filters.searchTerm.length > 0;
    const endpoint = isSearchable ? Endpoints.SEARCH : Endpoints.GET_PRODUCTS;
    const searchParams = new URLSearchParams();
    if (isSearchable) {
      searchParams.set(QueryParams.SEARCH, filters.searchTerm);
      return `${endpoint}?${searchParams.toString()}`;
    }
    if (filters.limit && filters.limit > 0) {
      searchParams.set(QueryParams.LIMIT, filters.limit.toString());
    }
    searchParams.set(QueryParams.SKIP, filters.skip.toString());
    return `${endpoint}?${searchParams.toString()}`;
  }
}
export default new DummyJsonHelper();
