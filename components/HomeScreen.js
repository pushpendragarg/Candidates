import { React, useEffect, useState } from "react";
import Newcandidates from "./NewCandidate";

export default function HomeScreen() {
  const [list, setList] = useState([]);
  const [details, setDetails] = useState([]);
  const [showForm, setShowForm] = useState(false);
  //  const[editUser,set]
  useEffect(() => {
    fetch("https://60d5a2c2943aa60017768b01.mockapi.io/candidate")
      .then((resp) => resp.json())
      .then((data) => setList(data));
  }, []);
  const detailsShow = (id) => {
    setShowForm(false);
    const newList = list.filter((item) => {
      return item.id === id;
    });

    setDetails(newList);
  };
  const newCandidates = () => {
    setShowForm(true);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <div className="leftSection">
          <h1>Candidates List</h1>
          {list.map((items) => {
            return <li onClick={() => detailsShow(items.id)}>{items.name}</li>;
          })}
          <button onClick={newCandidates}>Add</button>
        </div>
        <div className="rightSection">
          <h1>Details of Candidate</h1>
          {details.map((detail) => {
            return (
              <div>
                <p>Name: {detail.name}</p>
                <p>Address:{detail.address}</p>
                <p>Phone:{detail.phone}</p>
                <p>email:{detail.email}</p>
                <p>Gender:{detail.gender}</p>
                <p>Hobbies:{detail.hobbies}</p>
                <p>id:{detail.id}</p>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
        {showForm && <Newcandidates/>}
      </div>
    </>
  );
}
