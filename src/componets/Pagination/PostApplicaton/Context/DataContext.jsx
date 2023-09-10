import { createContext , useState , useEffect} from "react";
import { getPosts } from "../api/axios";


export const DataContext = createContext({})

const DataProvider = ({children}) => {

    const [posts, setPosts] = useState([]);
    const [isLoading , setisLoading] = useState(true)
    const[search,setSearch] = useState('');
    const[searchResults,setSearchResults] = useState([]);
    

      useEffect(()=>{
        getPosts().then(json => setPosts(json))
        setisLoading(false)
      } , [])

      useEffect(()=>{
        const handelSetSearch = ()=>{
          if(!search) return setSearchResults(posts)
      
          const resultArray = posts.filter(post => (post.title).toLowerCase().includes(search.toLowerCase()) || (post.body).toLowerCase().includes(search.toLowerCase()))
          setSearchResults(resultArray)
        }
        handelSetSearch()
      },[posts,search])

    return (
        <DataContext.Provider value={{ posts,
            setPosts,isLoading,setisLoading,
            search,setSearch,searchResults,setSearchResults,
            }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataProvider