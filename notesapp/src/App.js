import "./App.css";
import Notes from "./components/notes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Notes />
      </div>
    </ChakraProvider>
  );
}

export default App;
