export default function SideBar() {
  return (
    <>
      <aside className="bg-[#776B5D] text-[#EBE3D5] w-1/3 px-8 py-16 md:w-72 rounded-r-xl">
        <h1 className="mb-8 font-bold uppercase text-[#F3EEEA] ">Projects</h1>
        <div>
          <button className="px-4 py-2 text-xs rounded-md md:text-base bg-[#B0A695] text-[#EBE3D5] hover:bg-black ">+ Add Project</button>
        </div>
        <ul></ul>
      </aside>
    </>
  );
}
