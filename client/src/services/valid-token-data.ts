import axios,{AxiosResponse} from 'axios'

const getValidTokenData = async ( token: string) => {

    const response : AxiosResponse = await axios({
        method : 'post',
        url: 'http://localhost:5174/user/verifyToken',
        data: { token },
        timeout:8000
    })

    console.log(response);
}

export default getValidTokenData;

