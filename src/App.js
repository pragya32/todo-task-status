import TodoStatus from "./pages/TodoStatus";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <TodoStatus />
    </StyledEngineProvider>
  );
}

export default App;
