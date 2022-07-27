import axios from "../axios";

class SignUpService{

    postUserCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('signUp/customer', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }


    postUserDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('signUp/driver', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

}
export default new SignUpService();