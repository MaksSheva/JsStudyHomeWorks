export default class DB {
    constructor(url){
        this.apiUrl = url;
    }
    getStudents() {
        return fetch(`${this.apiUrl}/api/v1/students.json`).then(_ => _.json());
    }
    getStudentById(id){
        return fetch(`${this.apiUrl}/api/v1/students/${id}.json`).then(_ => _.json());
    }
    updateStudent(id, data) {
        return fetch(`${this.apiUrl}/api/v1/students/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify(data)
        }).then(_ => _.json());
    }
    createStudent(data) {
        fetch(`${this.apiUrl}/api/v1/students.json`, {
            method: 'POST'
        }).then(_ => _.json());
    }
    deleteStudent() {
        return fetch(`${this.apiUrl}/api/v1/students/${id}.json`, {
            method: 'DELETE'
        }).then(_ => _.json());
    }
}

