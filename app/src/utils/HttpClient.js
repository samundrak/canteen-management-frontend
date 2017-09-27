import axios from 'npm:axios';

const HOST = 'http://localhost:3000';

const validateStatus = function validateStatus(status) {
  return status >= 200 && status <= 299; // default
};
export default {
  auth: function api() {
    return axios.create({
      baseURL: `${HOST}/api/auth`,
      headers: {
        //Authorization: `JWT ${getToken()}`,
      },
      validateStatus,
    });
  },
  api: function api() {
    return axios.create({
      baseURL: `${HOST}/api/`,
      validateStatus,
    });
  },
};
