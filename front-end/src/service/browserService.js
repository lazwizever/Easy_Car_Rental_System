import axios from "../axios";

class BrowserService{


fetchVehicle = async () => {
    const promise = new Promise((resolve, reject) => {
        axios.get('vehicle')
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
    })
    return await promise;
}


fetchAvailableVehicle = async (params) => {
    const promise = new Promise((resolve, reject) => {
        axios.get('browser',{params:params})
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
export default new BrowserService();