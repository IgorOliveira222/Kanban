import { BrowserRouter, Routes , Route} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

export default function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<h1>Aqui vai meu base layout</h1>}>
                    <Route index element = {<h1>Kamban</h1>} />
                    <Route path= "/logout" element = {<h1>Sair</h1>} />
                </Route>
                <Route path= "/login" element = {<Login/>} />
                <Route path= "/register" element = {<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}