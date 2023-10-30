import ContactManager from "./components/ContactManager";
import ContactHeader from "./components/ContactHeader";

function App() {
  return (
    <div className="w-[900px] m-auto p-3 text-center">
      <ContactHeader />
      <ContactManager />
    </div>
  );
}

export default App;
