import Button from "./Button";

export default function SideBar({ onStartAddProject, projects }) {
  return (
    <>
      <aside className="bg-[#776B5D] text-[#EBE3D5] w-1/3 px-8 py-16 md:w-72 rounded-r-xl">
        <h1 className="mb-8 font-bold uppercase text-white ">Projects</h1>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <ul className="mt-8">
          {projects.map((project) => (
            <li key={project.id}>
              <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-300 hover:text-stone-100 hover:bg-stone-800">
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
