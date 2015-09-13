import config from '../config-local.js';
import $ from 'jquery';

export default class Api {
  get(route, params) {
    return new Promise((resolve, reject) => {
      var resource = config.server + route;

      if(params) {
        resource += '?' + Object.keys(params).map((p) => (p + '=' + params[p])).join('&');
      }

      $.get(resource, function(res) {
        resolve(res);
      });
    });
  }
}
