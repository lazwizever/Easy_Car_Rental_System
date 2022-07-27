import axios from "../axios";

class SignInService{

    fetchUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('login', data)    // 20s
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
export default new SignInService();