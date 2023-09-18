import {Card, H1, H3} from "../componets/stylesLogin"
import Input from "../componets/input"
import Button from "../componets/button"



export default function Register() {
    return (
    <>
        <Card>
            <H1>Arnia Trello</H1>
            <H3>Cadastro</H3>
            <form>
                <Input type="text" name="Nome completo" />
                <Input type="email" name="E-mail"/>
                <Input type="password" name="Senha"/>
                <Input type="password" name="Repita sua senha"/>
                <Button type="submit" name="CADASTRAR"/>
            </form>
        </Card>
    </>
    )
}