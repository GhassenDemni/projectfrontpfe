import http from "./interceptor/Axiosinterceptor";

export default class Userserivice {
  GetAll() {
    return http.get("/user");
  }

  Create(data) {
    return http.post("/user", data);
  }

  remove(id) {
    return http.delete("/user/" + id);
  }
  FindById(id) {
    return http.get("/user/" + id);
  }

  Update(id, data) {
    console.log("id", id);
    console.log("data", data);
    return http.patch("/user/" + id, data);
  }
}
