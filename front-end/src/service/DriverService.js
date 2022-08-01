import axios from "../axios";


class DriverService{

putDriver = async (data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put('driver', data)
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
    })
    return await promise;
};

}
export default new DriverService();