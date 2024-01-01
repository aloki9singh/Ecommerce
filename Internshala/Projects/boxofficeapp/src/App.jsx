import { Route, Routes } from "react-router-dom";
import Mainlayout from "./Components/Mainlayout";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Starred from "./Pages/Starred";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalTheme } from "./theme";
import { TextCenter } from "./Components/common/TextCenter";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        
        <GlobalTheme>
          <Routes>
            <Route element={<Mainlayout />}>
              <Route element={<Home />} path={"/"} />
              <Route element={<Starred />} path={"/starred"} />
              <Route element={<Show />} path={"boxofficeapp/show/:id"} />
            </Route>
            <Route element={<TextCenter>Not Found</TextCenter>} path={"*"} />
          </Routes>
        </GlobalTheme>
      </QueryClientProvider>
    </div>
  );
}

export default App;
