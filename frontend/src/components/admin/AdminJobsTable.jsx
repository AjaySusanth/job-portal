import { Eye, MoreHorizontal } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminJobsTable = () => {
    const { allAdminJobs, searchJob } = useSelector(store => store.job)
    const [filterAdminJob, setFilterAdminJob] = useState(allAdminJobs)
    const navigate = useNavigate()
    useEffect(() => {
        const filteredJobs = allAdminJobs.length > 0 ? allAdminJobs.filter((job) => {
            if (!searchJob) return true;
            return job?.company?.name.toLowerCase().includes(searchJob.toLowerCase()) || job?.title.toLowerCase().includes(searchJob.toLowerCase())
        }) : []
        setFilterAdminJob(filteredJobs)
    }, [allAdminJobs, searchJob])
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        filterAdminJob?.length <= 0 ? <p className="text-red-500 mt-5 text-base">No jobs found</p> :
                            <>
                                {
                                    filterAdminJob?.map((job) => (

                                        <TableRow key={job?._id}>
                                            <TableCell>{job?.company?.name}</TableCell>
                                            <TableCell>{job?.title}</TableCell>
                                            <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                                            <TableCell className="text-right cursor-pointer">
                                                <Popover>
                                                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                                    <PopoverContent className="w-32">
                                                        <div onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
                                                            <Eye className='w-4' />
                                                            <span>Applicants</span>
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </>
                    }
                </TableBody>
            </Table>
        </div>
    )
}
export default AdminJobsTable