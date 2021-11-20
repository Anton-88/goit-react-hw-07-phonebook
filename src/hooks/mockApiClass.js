import axios from "axios";

export default class MockApi {
  constructor() {
    this.URL = "https://6194ee5074c1bd00176c6a4b.mockapi.io/";
    this._searchQuery = "";
    this._page = 1;
    this._perPage = 15;
  }

  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value);
  }

  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page = value);
  }

  get perPage() {
    return this._perPage;
  }
  set perPage(value) {
    return (this._perPage = value);
  }

  resetPage() {
    return (this._page = 1);
  }

  incPageNumber() {
    this._page += 1;
  }

  async fetchMockData() {
    const query = `${this.URL}contacts?page=${this._page}&limit=${this._perPage}`;
    try {
      const res = await axios.get(query);
      return res;
      // console.log(`res inside fetch class`, res.data)
    } catch (error) {
      console.log(`error`, error);
    }
  }

  async fetchContactByID(id) {
    const query = `${this.URL}contacts/${id}`;
    try {
      const res = await axios.get(query);
      return res;
      // console.log(`res by ID`, res)
    } catch (error) {
      console.log(`error`, error);
    }
  }
}
