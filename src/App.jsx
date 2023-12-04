import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import SideBar from "./Components/SideBar";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    projectSelectedId: undefined,
    projects: [],
  });

  function handleSelectProject(id){
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        projectSelectedId: id,
      };
    });
  }

  function handleStartAdd() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        projectSelectedId: null,
      };
    });
  }
  function handleCancelAdd(){
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        projectSelectedId: undefined,
      };
    });
  }

  const selectedProject = projectsState.projects.find((project)=> project.id ===projectsState.projectSelectedId)

  let content= <SelectedProject project= {selectedProject}/>;

  if (projectsState.projectSelectedId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAdd} />;
  } else if (projectsState.projectSelectedId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAdd} />;
  }
  


  function handleAddProject(projectData) {
    setProjectsState((prevProjects) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        Id: projectId,
      };
      return {
        ...prevProjects,
        projectSelectedId: undefined,
        projects: [prevProjects.projects, newProject],
      };
    });
  }
  return (
    <>
      <div className="h-screen my-8 flex gap-8">
        <SideBar
          projects={projectsState.projects}
          onStartAddProject={handleStartAdd}
          onSelectProject ={handleSelectProject}
        />
        {content}
      </div>
    </>
  );
}

export default App;
