import { useState, useEffect } from "react"
import { useCourseDataMutate } from "../../hooks/useCourseDataMutate"
import { CourseData } from "../../interface/CourseData"

import "./create-modal.css"


interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void 
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) =>{
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({closeModal }: ModalProps){

    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess, isLoading } = useCourseDataMutate();
    
    const submit = () => {
        const courseData: CourseData = {
            title,
            cover,
            price
        }
        mutate(courseData)
    };

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])


    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Adicionar novo item</h2>
                <form className="input-container">
                    <Input label="Title" value={title} updateValue={setTitle}></Input>
                    <Input label="Cover" value={cover} updateValue={setCover}></Input>
                    <Input label="Price" value={price} updateValue={setPrice}></Input>
                </form>
                <button onClick={submit} className="btn-secondary">{isLoading ? 'Adicionando...' : 'Adicionar'}</button>
            </div>
        </div>
    )
}