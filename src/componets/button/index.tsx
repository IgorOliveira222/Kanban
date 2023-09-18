import {Button} from "./styles"

type Props = {
    name:string,
    type: string,
}

export default function button ({name}:Props){
    return(
        <>
            <Button>{name}</Button>
        </>
    )
}