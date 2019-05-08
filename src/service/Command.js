import axios from 'axios';
const Command = {
  execute(option = { api, param, method }) {
    if (option.method == null) option.method = 'POST';
    if (option.param == null) option.param = {};

    return new Promise(async (resolve, reject) => {
      return axios({
        method: option.method,
        headers: {
          'Content-Type': 'application/json',
        },
        url: option.api,
        data: option.param,
        withCredentials: true
      }).then(res => {
        return resolve(res.data);
      }, err => {
        return reject(err.data);
      })
    })
  }
}
export default Command