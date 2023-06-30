import { Outlet } from "react-router-dom";
import { useParams , Link  } from "react-router-dom";

const User = () => {

    let user = useParams();

    return ( 
        <div className='max-w-7xl mx-auto font-serif font-bold text-2xl pt-10'>
            <h1>Hello {user.username+" "+ user.id}</h1>
            <div className="flex  space-x-10 my-6">
                <Link to="features"> Features</Link>
                <Link to="new"> New</Link>
            </div>
           
            <Outlet />
        </div>
     );
}
 
export default User;