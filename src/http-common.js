import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/',
  headers: {
    'Content-type': 'application/json',
  },
});

export const APP_ID = 'cMEG3GCkn4CHP6Yy2zxn';
