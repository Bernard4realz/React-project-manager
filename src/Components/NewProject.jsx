import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption={"Close"}>
        <h2 className='text-xl font-bold text-stone-600 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>ooops... it's like you forgot to add a value</p>
        <p className='text-stone-600 mb-4'>Please input values for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div>
          <Input type="text" ref={title} label={"Title"} />
          <Input ref={description} label={"Description"} textarea />
          <Input
            type="date"
            ref={dueDate}
            label={"Due Date"}
          />
        </div>
        <div>
          <menu className="flex items-center justify-end my-4">
            <li>
              <button className="mx-2 my-1 px-2 text-white bg-[#776B5D] hover:bg-black rounded-md" onClick={onCancel}>
                Clear
              </button>
            </li>
            <li>
              <button
                className="mx-2 my-1 px-2 text-white bg-[#776B5D] hover:bg-black rounded-md"
                onClick={handleSave}
              >
                Create
              </button>
            </li>
          </menu>
        </div>
      </div>
    </>
  );
}
