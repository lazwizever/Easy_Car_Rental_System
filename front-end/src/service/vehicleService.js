import axios from "../axios";

class VehicleService{

    postVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('vehicle', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

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


    fetchAvailableVehicle = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle/availableVehicles')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }



    putVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('vehicle', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteVehicle = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('vehicle', {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

   /* postVehicleImage = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('upload', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }*/


    addCarImage = async (data,vehicleId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('vehicle/addCarImage?vehicleId='+vehicleId,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    getCarImage = async (vehicleId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle/getCarImage?vehicleId='+vehicleId+'&view='+view, {
                responseType: 'blob',
            })

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    updateCarImage =async (data,vehicleId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.post('vehicle/updateCarImage?vehicleId='+vehicleId+'&view='+view,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    deleteCarImages =async (vehicleId) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('vehicle/deleteCarImage?vehicleId='+vehicleId)

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
export default new VehicleService();