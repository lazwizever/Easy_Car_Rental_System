import axios from "../../axios";


class ManageCustomerService {

    acceptCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            console.log(data.id)
            axios.post('admin/acceptCustomer',data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    fetchUserRequest = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('admin/loadUserRequest')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }




    denyCustomer = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('admin',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

}
export default  new ManageCustomerService();







