import Input from "./Input";

export default function NewProject() {
  return (
    <>
      <div className="w-[35rem] mt-16">
        <div >
          <Input label={"Title"} />
          <Input label={"Description"} textarea />
          <Input label={"Due Date"} props={"type=date"} />
        </div>
        <div>
          <menu className="flex items-center justify-end my-4">
            <li>
              <button className="mx-2 my-1 px-2 text-white bg-[#776B5D] hover:bg-black rounded-md">
                Clear
              </button>
            </li>
            <li>
              <button className="mx-2 my-1 px-2 text-white bg-[#776B5D] hover:bg-black rounded-md">
                Create
              </button>
            </li>
          </menu>
        </div>
      </div>
    </>
  );
}
