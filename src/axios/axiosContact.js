import axios from "axios"

const BASE_URL = "https://api-portafolio-facundo-mychaliczka.vercel.app/"


export const sendEmail = async (message, email) => {

    try {
        const response = await axios.post(`${BASE_URL}sendEmail`, {
            message,
            email
        })
        console.log(response.data.msg);
        return response.msg
    } catch (error) {
        return alert(error.response.data.msg)
    }

}