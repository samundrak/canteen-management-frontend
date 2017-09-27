import HttpClient from '../utils/HttpClient';
import * as API from './index';

const httpClient = HttpClient.api();

export function login(credentials) {
  return httpClient.post(API.LOGIN, credentials)
}

export function register(credentials) {
  return httpClient.post(API.REGISTER, credentials);
}
