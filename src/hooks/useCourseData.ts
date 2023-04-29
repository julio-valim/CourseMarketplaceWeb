import axios, { AxiosPromise } from "axios"
import { CourseData } from "../interface/CourseData"
import { useQuery } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"
const ENDPOINT = "/course"

const fetchData = async (): AxiosPromise<CourseData[]>  => {
    const response = axios.get(API_URL + ENDPOINT);
    return response
}

export function useCourseData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["course-data"],
        retry: 2
    })
}