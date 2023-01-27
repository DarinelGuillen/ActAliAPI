import {Link} from "react-router-dom" 
function Home(){
    const listStudent=[{id:1,name:"Darinel",},{id:2,name:"Ovando",},{id:3,name:"Martin",},{id:4,name:"Manuel",},{id:5,name:"Alan",}]
    return(
        <>
            
            <Link to="/Registration">Registrarte</Link>
        </>
    )
}
export default Home;