import request from '../utils/request'
import Apiurl from "../utils/api"
console.log('request',request,Apiurl);
export function GetProduct() {
    return request({
      url: `${Apiurl.commonUrl}/products`,
      method: 'get'
    })
  }