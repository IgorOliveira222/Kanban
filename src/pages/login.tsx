import { ChangeEvent, FormEvent, useState } from "react"
import { postLogin } from "../services/user-service"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import {A, Card, H1} from "../componets/stylesLogin"
import Input from "../componets/input"
import Button from "../componets/button"

type ValuesProps = {
    email: string
    password: string
}

export default function Login () {
    const navigate = useNavigate()
    const [values, setValues] = useState <ValuesProps> ({
        email:'',
        password:'',
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const{value, name}= event.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const result = await postLogin(values)

            localStorage.setItem('TOKEN', result.token)
            navigate('/', {replace: true})
        } 
        catch (e) {
            if(e instanceof Error)
            toast (e.message)
        }
    }

    return (
    <>
        <Card>
            <H1>Arnia Trello</H1>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="E-mail" onChange={handleChange} />
                <Input type="password" name="Senha" onChange={handleChange}/>
                <Button type="submit" name="ENTRAR"/>
                <A href="">Cadastre-se</A>
            </form>
        </Card>
    </>
    )
}