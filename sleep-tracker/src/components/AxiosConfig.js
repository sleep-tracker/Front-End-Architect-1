const axiosConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

export default axiosConfig