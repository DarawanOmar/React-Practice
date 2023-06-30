import {Link} from 'react-router-dom';
import { useDispatch , useSelector} from "react-redux";



const Home = () => {
    const username = useSelector((state)=> state.users.value.username)


    return ( 
        <div>
            <h1 className="max-w-7xl mx-auto text-4xl font-bold font-serif pt-10 text-center ">This is Home Page {username}</h1>

            <div className='max-w-7xl mx-auto font-serif font-bold text-2xl pt-10 pl-4'>
                <Link to={"User/Darawan/1"}>Darawan</Link>
            </div>
        </div>
     );
}
 
export default Home;