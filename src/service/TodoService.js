import axios from "axios";
class TodoService {
    baseUrl = "http://localhost:8080/ToDoList";
    addingData(todoListDto) {
        return axios.post(`${this.baseUrl}/create`, todoListDto);
    }
}
export default new TodoService();