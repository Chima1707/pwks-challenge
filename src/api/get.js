import axios from "axios";

const host = "https://api.github.com";

const makeError = response => ({
  status: response && response.status,
  message: "Bad server response"
});

const handleSuccess = response => response.data;

const handleError = err => {
  throw makeError(err.response);
};

export default path =>
  axios.get(`${host}${path}`).then(handleSuccess, handleError);
