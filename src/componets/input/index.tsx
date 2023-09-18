import {Input, Label} from "./styles"

type Props = {
    name:string,
    type: string,
    onChange?:any,
}

export default function input ({name, type}:Props){
    return(
        <>
            <Label>{name}</Label>
            <Input type={type} />
        </>
    )
}

