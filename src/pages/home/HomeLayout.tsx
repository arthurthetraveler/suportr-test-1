import React from "react";
import Header from "../../components/header";
import { Outlet } from "react-router";
import Footer from "../../components/footer";

export default function HomeLayout() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}
