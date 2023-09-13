import axios from 'axios';
import { Notify } from 'notiflix';
export  class PixabayAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
    async fetchImage() {
      
    const options = {
      method: 'GET',
      url: 'https://pixabay.com/api/',
      params: {
        key: '39403404-88757ce4f28df8e640027308c',
        q: `${this.searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: 40,
      },
        };
    try {
      const response = await axios(options);
      const data = response.data;
      this.page += 1;
      this.totalHits = response.data.totalHits;
      return data;
    } catch (error) {
      console.error(error);
    }
    }
    resetPage() {
        this.page += 1;
    }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}