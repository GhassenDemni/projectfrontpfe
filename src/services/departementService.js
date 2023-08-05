import http from "./interceptor/Axiosinterceptor";

export default class DepartementService {
  GetAll() {
    return http.get("/departement");
  }

  Create(data) {
    console.log(data);
    return http.post("/departement", data);
  }
  FindById(id) {
    console.log("id is,", id);
    return http.get("/departement/" + id);
  }

  Remove(id) {
    return http.delete(`/departement/${id}`);
  }

  Update(id, data) {
    console.log("id", id);
    console.log("data", data);
    return http.patch("/departement/" + id, data);
  }

  reservation(id) {
    return http.get("hr-director/" + id);
  }
}
