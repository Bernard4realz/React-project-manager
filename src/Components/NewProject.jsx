import Input from "./Input";

export default function NewProject() {
  return (
    <>
      <div>
        <Input label={"Title"} />
        <Input label={"Description"} textarea />
        <Input label={"Due Date"} props={"type=date"} />
      </div>
      <div>
        <menu>
          <li>
            <button className="mx-2 my-1 px-2 text-white bg-slate-700">
              Clear
            </button>
          </li>
          <li>
            <button className="mx-2 my-1 px-2 text-white bg-slate-700">
              Create
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}
