import http from "./interceptor/Axiosinterceptor";

export default class SallonService {
  GetAll() {
    return http.get("/sallon");
  }
  GetOne() {
    return http.get("/sallon");
  }

  Create(data) {
    return http.post("/sallon", data);
  }

  Remove(id) {
    return http.delete(`/sallon/${id} `);
  }
  FindById(id) {
    return http.get("/sallon/" + id);
  }

  Update(id, data) {
    return http.patch("/sallon/" + id, data);
  }
}
