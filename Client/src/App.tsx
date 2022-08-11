import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import client from "./common/apollo-client";
import ProtectedRoutes from "./components/common/ProtectedRoutes";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
