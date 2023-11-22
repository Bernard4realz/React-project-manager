export default function({label,textarea, ...props}){
    return <p className="flex flex-col gap-1 my-2">
        <label className="text-[#776B5D] text-sm font-bold uppercase">{label}</label>
        {textarea? <textarea {...props}></textarea> : <input {...props}></input>}
    </p> 
}