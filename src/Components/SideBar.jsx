import Button from "./Button";

export default function SideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedId,
  userName,
}) {
  return (
    <>
      <aside className="bg-[#776B5D] text-[#EBE3D5] w-1/3 px-8 py-16 md:w-72 rounded-r-xl">
        <h1 className="mb-8 font-bold uppercase text-white ">{userName}'s Projects</h1>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <ul className="mt-8">
          {projects.map((project) => {
            let cssClasses =
              "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-100 hover:bg-stone-800";

            if (selectedId === project.id) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
            }

            return (
              <li key={project.id}>
                <button
                  onClick={() => onSelectProject(project.id)}
                  className={cssClasses}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
