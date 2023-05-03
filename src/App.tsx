import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserData from "./components/UserData";
import UserDetails from "./components/UserDetails";
import { Toaster } from "react-hot-toast";


function App() {
  const queryclient = new QueryClient();
  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Navbar />
      <QueryClientProvider client={queryclient}>
        <Router>
          <Routes>



            <Route path="/" element={<UserData />} />
            <Route path="/users/:id" element={<UserDetails />} />

          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
