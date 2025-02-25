
import { Container } from "@mui/material";
import { TaskManager } from "./components/TaskManager";
import { Nav } from "./components/AppBar";

export const config = {
  // endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
  endpoint: `https://m-task-manager.onrender.com`,
};

const App = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg">
        <TaskManager />
      </Container>
    </>
  );
};

export default App;