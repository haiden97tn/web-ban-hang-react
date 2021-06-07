import { axiosClient } from './axiosClient';


const ProductApi = {

    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },
    // remove(id) {
    //     const url = `/product/${id}`;
    //     return axiosClient.delete(url);
    // },
    remove(id, token) {
        var users = sessionStorage.getItem('user');
        var users = JSON.parse(users);
        var idUser = users.user._id;
        var token = users.token;

        const url = `/product/${id}/${idUser}`;
        return axiosClient.delete(url, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    add(body, token) {
        var users = sessionStorage.getItem('user');
        var users = JSON.parse(users);
        var token = users.token;
        var idUser = users.user._id;
        const url = `/product/${idUser}`;
        return axiosClient.post(url, body, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    getWoman() {
        const url = `/products/woman`;
        return axiosClient.get(url);
    },
    getMan() {
        const url = `/products/man`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    update(id, data, token) {
        var users = sessionStorage.getItem('user');
        var users = JSON.parse(users);
        var token = users.token;
        var idUser = users.user._id;

        const url = `/product/${id}/${idUser}`;
        return axiosClient.put(url, data, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
    },
}
export default ProductApi;