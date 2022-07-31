import axios from "../axios";

class CustomerServiceDashboard {

    fetchCustomerDashboard = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('customer')
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

export default new CustomerServiceDashboard();