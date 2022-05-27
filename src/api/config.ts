import axios from 'axios';

import { PATH } from 'enum/PATH';

export const instance = axios.create({
  baseURL: PATH.REACT_APP_BASE_URL,
});
