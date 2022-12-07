import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Detail from "./containers/Detail";
import Container from "./layout/Container";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
