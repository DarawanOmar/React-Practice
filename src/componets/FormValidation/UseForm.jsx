import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"


const UseForm = () => {

    // 
    const schema = yup.object().shape({
        fullname : yup.string().required("تکایە ناوەکەت بنووسە"),
        email : yup.string().email("شێوەی ئیمەیڵی نییە").required("تکایە ئیمەیڵەکەت بنووسە"),
        age : yup.number().typeError("تکایە تەمەنت داخڵ بکە").positive("نابێت سالب بێت").integer("نابێت پۆینت بێت").min(18,"ئەبێت لە ١٨ گەورەتر بێت").required("dwaw"),
        password : yup.string().required("پاسۆرد داخڵ بکە").min(4,"نابێت لە ٤ پیت کەمتر بێت").max(16,"دەبێت لە ١٦ پیت کەمتر بێت"),
        confirmPassword : yup.string().oneOf([yup.ref("password"),null],"هەمان باسۆردی سەرەوە نییە")
        
    })

    const {register , handleSubmit , formState : {errors}} = useForm({
        resolver : yupResolver(schema)

    })

    const onSubmit = (data) => {
        console.log(data)
    }
    return ( 
        <div>
            <div className=" m-8 font-serif">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-xl mx-auto border-2 border-indigo-500 p-8 rounded-md">
                        <label >FullName </label>
                        <input type="text" className="border-2 border-indigo-500 p-2 rounded-md " {...register("fullname")} />
                        <p className="text-rose-500 text-center font-serif font-bold ">{errors.fullname?.message}</p>
                        <label className="mt-4">Email </label>
                        <input type="text" className="border-2 border-indigo-500 p-2 rounded-md " {...register("email")} />
                        <p className="text-rose-500 text-center font-serif font-bold ">{errors.email?.message}</p>
                        <label className="mt-4">Age </label>
                        <input type="number" className="border-2 border-indigo-500 p-2 rounded-md " {...register("age")} />
                        <p className="text-rose-500 text-center font-serif font-bold ">{errors.age?.message}</p>
                        <label className="mt-4">Password </label>
                        <input type="text" className="border-2 border-indigo-500 p-2 rounded-md " {...register("password")} />
                        <p className="text-rose-500 text-center font-serif font-bold ">{errors.password?.message}</p>
                        <label className="mt-4">Confirm Password </label>
                        <input type="text" className="border-2 border-indigo-500 p-2 rounded-md " {...register("confirmPassword")} />
                        <p className="text-rose-500 text-center font-serif font-bold ">{errors.confirmPassword?.message}</p>
                        <button className="bg-indigo-500 text-white px-4 py-2 max-w-max mx-auto rounded-md mt-6 hover:opacity-75">Confirm </button>
                </form>
            </div>
        </div>
     );
}
 
export default UseForm;