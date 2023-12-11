import { useState, useRef } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import SideBar from "./Components/SideBar";
import SelectedProject from "./Components/SelectedProject";
import Ele from "./Components/Ele";

function App() {
  const [activeState, setActiveState] = useState(false);
  const [projectsState, setProjectsState] = useState({
    projectSelectedId: undefined,
    projects: [],
    tasks: [],
  });

  const [userNickName, setUserNickName] = useState('')

  const userName = useRef()

  function handleActive() {
    setActiveState(true);
    const userNameMain = userName.current.value
    setUserNickName(userNameMain)
    console.log(userNameMain);
  }
  

  function handleSelectProject(id) {
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

  function handleCancelAdd() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        projectSelectedId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevProjects) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevProjects,
        projectSelectedId: undefined,
        projects: [...prevProjects.projects, newProject],
      };
    });
  }

  function handleDelete() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        projectSelectedId: undefined,
        projects: [
          prevProjects.projects.filter(
            (project) => project.id !== prevProjects.projectSelectedId
          ),
        ],
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prevProjects) => {
      const taskId = Math.random();
      const newTask = {
        task: text,
        projectId: prevProjects.projectSelectedId,
        id: taskId,
      };
      return {
        ...prevProjects,
        tasks: [newTask, ...prevProjects.tasks],
      };
    });
    console.log(selectedTasks);
  }

  function handleDeleteTask(id) {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        tasks: prevProjects.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => projectsState.projectSelectedId === project.id
  );

  const selectedTasks = projectsState.tasks.filter(
    (task) => projectsState.projectSelectedId === task.projectId
  );

  let content = (
    <SelectedProject
      onDelete={handleDelete}
      project={selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedTasks}
    />
  );

  if (projectsState.projectSelectedId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAdd} />;
  } else if (projectsState.projectSelectedId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAdd} />
    );
  }

  return (
    <>
      {activeState === false && <Ele onActive= {handleActive} ref= {userName} />}
      {activeState === true && (
        <div className="h-screen my-8 flex gap-8">
          <SideBar
            projects={projectsState.projects}
            onStartAddProject={handleStartAdd}
            onSelectProject={handleSelectProject}
            selectedId={projectsState.projectSelectedId}
            userName= {userNickName}
          />
          {content}
        </div>
      )}
    </>
  );
}

export default App;
