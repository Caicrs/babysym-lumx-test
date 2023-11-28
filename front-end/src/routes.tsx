import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import React from "react";
import Search from "./pages/Search";
import CollectionById from "./pages/CollectionById";
import CustomizedCollectionById from "./pages/CustomizedCollectionById";
import MyCustomCollection from "./pages/MyCustomCollection";
import MyVotes from "./pages/MyVotes";

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/collection/:id" element={<CollectionById />} />
      <Route
        path="/customized-collection/:id"
        element={<CustomizedCollectionById />}
      />
      <Route
        path="/user/customized-collection"
        element={<MyCustomCollection/>}
      />
      <Route
        path="/user/votes"
        element={<MyVotes/>}
      />
    </Routes>
  );
};

export default DefaultRoutes;
