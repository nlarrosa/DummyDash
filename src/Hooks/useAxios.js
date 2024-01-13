import { useEffect, useState } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '',
    timeout: 12000,
    headers: {
        "Content-Type": 'application/json',
    }
});
export const useAxios = (url, method, params) => {
    const [dataApi, setDataApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
        getFetch();
    }, [url])
    const getFetch = async () => {
        const { data } = await axiosInstance({
            url: url,
            method: method,
            params: { params }
        });
        setDataApi(data);
        console.log(axiosInstance);
        console.log("1213123123");
        setIsLoading(false);
    }
    return {
        dataApi,
        isLoading
    }
}
//Buena practica aplicar, define por defecto los valores en caso de instanciar y no enviarlos
useAxios.defaultProps = {
    params: null,
    method: 'get'
}