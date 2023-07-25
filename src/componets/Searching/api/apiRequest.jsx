const apiRequest = async (url = '' , optionObj = null , errMsg = null) =>{

    try {
        const res = await fetch(url , optionObj) 
        if(!res.ok) throw Error (' Please Reload The App ')
    } catch (error) {
        errMsg = error.message;
    } finally {
        return errMsg;
    }

}
export default apiRequest