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
    }
}
export default UserApi;