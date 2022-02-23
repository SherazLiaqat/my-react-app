

import { Routes, Route } from "react-router-dom";

import AddNewMeetup from "./Meetup/AddNewMeetup";
import Favourite from "./Meetup/Favourite";
import AllMeetup from "./Meetup/AllMeetup";
import Mainnavigation from "./Meetup/Layout/Mainnavigation";

function Project2() {
  return (
    <>
      <h1>Welcome to Meetup</h1>
      <Mainnavigation/>
      <Routes>
        <Route path="/addNewMeetup" element={<AddNewMeetup />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/allMeetup" element={<AllMeetup />} />
      </Routes>
      {/* <MainExpenses/> */}
    </>
  );
}

export default Project2;

// import React from "react";
// import BackDrop from "./BackDrop";
// import Modal from "./Modal";
// import Todo from "./Todo";

// export default function Project2() {
//   return (
//     <>
//       {/* <h1>My Todo</h1>
//       <Todo text="Learn React" />
//       <Todo text="Learn React2" />
//       <Todo text="Learn React4" />
//       <Modal />
//       <BackDrop /> */}
//     </>
//   );
// }
