
import axios from "axios";



const Authentication =  (matricula) => {

    try {
     const data ={
            enrollment:Number(matricula)
        }
        console.log(data.enrollment)
        const response = axios.post(`http://localhost:8081/api/auth`, data)

        return response;
    } catch (error) {

    }
}

export default Authentication
