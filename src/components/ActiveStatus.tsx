type statusType ={
    status:boolean
}
export default function ActiveStatus({status}:statusType){
    if(status){
        return <div className="bg-green-500 p-2 rounded-md text-white w-fit">Active</div>
    }
    return <div className="bg-red-500 p-2 rounded-md text-white w-fit">Inactive</div>
}