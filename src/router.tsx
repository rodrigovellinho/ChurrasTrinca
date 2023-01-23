import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/Layout/DefaultLayout";
import Login from "./pages/Login";
import ChurrasAgenda from "./pages/ChurrasAgenda";
import ChurrasList from "./pages/ChurrasList";
import NewChurrasEvent from "./pages/NewChurrasEvent";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="" element={<Login />} />
        <Route path="/agenda" element={<ChurrasAgenda />} />
        <Route path="/lista/:churrasId" element={<ChurrasList />} />
        <Route path="/novochurras" element={<NewChurrasEvent />} />
      </Route>
    </Routes>
  );
}
