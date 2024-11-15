import React from "react";
import { Header } from "../Components/Header";
import { LatestNews } from "../Components/LatestNews";
import { Navbar } from "../Components/Navbar";
import { LeftNavbar } from "../Components/Layout-Component/LeftNavbar";
import { RIghtNavbar } from "../Components/Layout-Component/RIghtNavbar";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <div className="font-poppins w-11/12 mx-auto ">
      <Header></Header>

      <LatestNews></LatestNews>

      <Navbar></Navbar>
      <main className="pt-5 grid grid-cols-12">
        <aside className="col-span-3 ">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6 ">
         
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 ">
          <RIghtNavbar></RIghtNavbar>
        </aside>
      </main>
    </div>
  );
};
