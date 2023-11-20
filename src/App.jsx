import NewProject from "./Components/NewProject";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <div className="h-screen my-8 flex gap-8">
        <SideBar />
        <NewProject />
      </div>
    </>
  );
}

export default App;
