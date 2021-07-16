import { Fragment } from "react";
import MeetUpDetail from "../components/meetups/MeetUpDetail";

function MeetUpDetailsPage() {
  return (
    <MeetUpDetail
      image="https://images.unsplash.com/photo-1621168322085-9318dd9a7517?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      title="A first meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first meetup!"
    />
  );
}

export default MeetUpDetailsPage;
