import axios from "../../axios";


class DashboardService {

fetchAdminDashBoardInfo = async () => {
    const promise = new Promise((resolve, reject) => {
        axios.get('admin/adminDashboard',)
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
export default  new DashboardService();







