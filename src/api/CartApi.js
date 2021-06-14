import { axiosClient } from './axiosClient';

const CartApi = {
    add(body) {
        const url = `/cart`;
        return axiosClient.post(url, body);
    },
    getAll() {
        const url = `/carts`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/cart/${id}`;
        return axiosClient.get(url);
    },
    remove(id) {
        const url = `/cart/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/cart/${id}`;
        return axiosClient.put(url, data)
    },
}
export default CartApi;