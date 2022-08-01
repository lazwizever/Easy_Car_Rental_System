import axios from "../axios";


class BookingService{

    fetchBooking = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('booking',)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    /*putCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('customer', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };*/

    /* deleteCustomer = async (params) => {
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
     };*/

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

}
export default new CustomerService();