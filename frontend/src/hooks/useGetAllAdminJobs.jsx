import { setAllAdminJobs } from "@/redux/jobSlice"
import { JOB_API_END_POINT } from "@/utils/constants"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toast } from "sonner"

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchAllAdminJobs = async() => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/adminJobs`,{withCredentials:true});
                if(res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs))
                }
            } catch (error) {
                toast.error(error.response.data.message)
                console.error(error.message);
            }
        }
        fetchAllAdminJobs()
    },[])
}
export default useGetAllAdminJobs