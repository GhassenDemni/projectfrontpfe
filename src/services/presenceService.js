import http from "./interceptor/Axiosinterceptor";
export default class PresenceService {
  GetAll() {
    return http.get("/presence");
  }

  Create(data) {
    return http.post("/presence", data);
  }

  Remove(id) {
    return http.delete(`/presence/${id}`);
  }
  FindById(id) {
    return http.get("/presence/" + id);
  }

  Update(id, data) {
    console.log("id", id);
    console.log("data", data);
    return http.patch("/presence/" + id, data);
  }
}
