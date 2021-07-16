import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from 'react'

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1621168322085-9318dd9a7517?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "A first meetup",
    address: "Some address 5, 12345 Some City",
    description: "This is a fist meetup!",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1625759882848-69a617b92ae1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    title: "A second meetup",
    address: "Some address 7, 12345 Zapatoca Santander",
    description: "This is a second meetup!",
  },
];

function HomePage() {

    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=>{
        // send a http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS);
    }, [])

  return (
      <MeetupList meetups={loadedMeetups} />
  );
}

export default HomePage;
