import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <div className="w-[35rem] mt-16">
        <div>
          <Input type= 'text' ref={title} label={"Title"} />
          <Input ref={description} label={"Description"} textarea />
          <Input type= 'date' ref={dueDate} label={"Due Date"} props={"type=date"} />
        </div>
        <div>
          <menu className="flex items-center justify-end my-4">
            <li>
              <button className="mx-2 my-1 px-2 text-white bg-[#776B5D] hover:bg-black rounded-md">
                Clear
              </button>
            </li>
            <li>
              <button className="mx-2 my-1 px-2 text-white bg-[#776B5D] hover:bg-black rounded-md" onClick={handleSave}>
                Create
              </button>
            </li>
          </menu>
        </div>
      </div>
    </>
  );
}
