import http from "./interceptor/Axiosinterceptor";

export default class SallonService {
  Login(data) {
    console.log("service ayth", data);
    return http.post("/auth/login", data);
  }
}
