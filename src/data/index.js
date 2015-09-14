import $ from 'jquery';
import config from 'config';

export default class Api {
  get(route) {
    return new Promise((resolve, reject) => {
      let resource = config.server + route;

      $.ajax({
        url: resource,
        method: 'GET',
        success(data) {
          resolve(data);
        },
        error(err) {
          reject(err);
        }
      });

    });
  }
};
