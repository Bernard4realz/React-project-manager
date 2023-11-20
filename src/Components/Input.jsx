export default function({label,textarea, ...props}){
    return <p>
        <label>{label}</label>
        {textarea? <textarea {...props}></textarea> : <input {...props}></input>}
    </p>
}