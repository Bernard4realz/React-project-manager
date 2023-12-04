import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="an empty task list"
        className="w-14 h-14 object-contain mx-auto "
      />
      <h2 className="text-xl font-bold text-stone-600 my-4">
        Create a project
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create a project</Button>
      </p>
    </div>
  );
}
