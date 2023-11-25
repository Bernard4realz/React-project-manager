export default function Button({children, ...props}){
    return <div>
    <button className="px-4 py-2 text-xs rounded-md md:text-base bg-[#B0A695] text-[#EBE3D5] hover:bg-black " {...props}>{children}</button>
  </div>
}