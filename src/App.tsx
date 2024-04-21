import { Routes, Route } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";

import { Home } from "./components/Home/Home.jsx";
import { Catalog } from "./components/Catalog/Catalog.tsx";
import { Basket } from "./components/Basket/Basket.jsx";
import { User } from "./components/User/User.jsx";
import { Product } from "./components/Product/Product.tsx";
import { NotFound } from "#components/NotFound/NotFound.tsx";
import { Auth } from "#components/Auth/Auth.tsx";

import Context, { ProductProvider } from "#components/Context/ProductProvider.tsx";
import { Layout } from "#components/Layout/Layout.tsx";

const App = () => {

  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>} />
          <Route path="/catalog" element={<Catalog></Catalog>} />
          <Route path="/basket" element={<Basket></Basket>} />
          <Route path="/user_account" element={<User></User>} />
          <Route path="/catalog/product/:id" element={<Product></Product>} />
          <Route path="/authorization" element={<Auth></Auth>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Route>
      </Routes>
    </ProductProvider>
  )
}

export default App

// https://whiterabbittab.github.io/fl-store-api/data.json ---> api