import axios from "axios";
import { useLocalStorage } from "../store/useLocalStorage";

// const {getUserData} = useLocalStorage()

const instance = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers:{
        "Content-Type": "aapplication/json",
        "Authorization": `Bearer ${window.localStorage.getItem("access")}`,
    }
})

const getPosts = async () => {
    console.log("Log from getPosts function");
    return await instance.get('posts')
}

export const useFetch = () => {
    return {
        instance,
        getPosts,
    }
}