import useClickButton from "../Hooks/useClickButton";

const ShowAndHide = () => {

    const [ isVisible , toggle] = useClickButton()

    return ( 
        <div>
            <div className="text-center font-bold mt-10 text-3xl font-serif ">

                <button className="bg-green-500 text-white text-center px-4 py-2 rounded-md my-6 hover:opacity-70" onClick={toggle}>
                {isVisible ? "Hide" : "Show"}
                </button>

                <p className={isVisible ?  "flex  justify-center " : " hidden"}>This A Parahraph</p>

            </div>
        </div>
     );
}
 
export default ShowAndHide;