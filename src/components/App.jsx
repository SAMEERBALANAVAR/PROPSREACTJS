import react from "react";
import reactdom from "react-dom";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="data:image/jpeg;base64,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" />
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        tel={contacts[2].tel}
        email={contacts[2].email}
      />
      <Card
        name={contacts[3].name}
        img={contacts[3].img}
        tel={contacts[3].tel}
        email={contacts[3].email}
      />
    </div>
  );
}
export default App;
