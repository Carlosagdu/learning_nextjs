import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
    
  function addMeetUpHandler(formData){
    console.log(formData);
  };

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}

export default NewMeetUpPage;
