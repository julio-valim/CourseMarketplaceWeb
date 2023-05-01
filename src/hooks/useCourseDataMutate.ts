import axios, { AxiosPromise } from "axios"
import { CourseData } from "../interface/CourseData"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"
const ENDPOINT = "/course"

const postData = async (data: CourseData): AxiosPromise<any> => {
    const response = axios.post(API_URL + ENDPOINT, data);
    return response
}

export function useCourseDataMutate(){
    const queryCliente = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryCliente.invalidateQueries(["course-data"])
        }
    })

    return mutate
}