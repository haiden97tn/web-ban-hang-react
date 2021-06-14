import { axiosClient } from './axiosClient';


const CategoryAPI = {
    getAll() {
        const url = `/categorys`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    remove(id) {
        const url = `/category/${id}`;
        return axiosClient.delete(url);
    },
    add(body, token) {
        var users = sessionStorage.getItem('user');
        var users = JSON.parse(users);
        var idUser = users.user._id;
        var token = users.token;

        const url = `/category/${idUser}`;
        return axiosClient.post(url, body, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    update(id, data) {
        var users = sessionStorage.getItem('user');
        var users = JSON.parse(users);
        var idUser = users.user._id;
        var token = users.token;

        const url = `/category/${id}/${idUser}`;
        return axiosClient.put(url, data, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
    },

}
export default CategoryAPI;