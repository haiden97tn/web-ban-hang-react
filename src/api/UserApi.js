import { axiosClient } from './axiosClient';

const UserApi = {
    add(body) {
        const url = `/signup`;
        return axiosClient.post(url, body);
    },
    signin(body) {
        const url = `/signin`;
        return axiosClient.post(url, body);
    },
    signout() {
        const url = `/signout`;
        return axiosClient.get(url);
    },
    getAll() {
        const url = `/user`;
        return axiosClient.get(url);
    },
    remove(id) {
        const url = `/user/${id}`;
        return axiosClient.delete(url);
    },
}
export default UserApi;