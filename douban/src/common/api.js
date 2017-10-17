import Vue from 'vue'
import $http from 'vue-resource'
Vue.use($http)

let vm = new Vue()

const configPath = ''
window.configPath = configPath

export class Api {
  get (url, data = {}) {
    url = configPath + url
    return new Promise((resolve, reject) => {
      vm.$http.get(url, {params: data, credentials: true}).then((response) => {
        resolve(response.body)
      }, function () {
        console.log('接口异常')
      })
    })
  }
}