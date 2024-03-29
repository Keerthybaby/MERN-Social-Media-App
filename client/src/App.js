import React from "react";
import { Container} from "@material-ui/core";

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PostDetails from "./components/PostDetails/PostDetails";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {

  // const user=Json.parse(localStore.getitem('profile'));

  return (
  <BrowserRouter>
  <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Navigate to="/posts"/>} />
        <Route path="/posts" exact element={<Home/>}/>
        <Route path="/posts/search" exact element={<Home/>}/>
        <Route path="/posts/:id" exact element={<PostDetails/>}/>
        <Route path="/auth" exact element={<Auth/>} />
         {/* <Route path="/auth" exact element={()=>(!user ? <Auth/> : <Navigate to="/posts/"/>)} />  */}
      </Routes>
    </Container>
  </BrowserRouter>
  );
    
};


export default App;
