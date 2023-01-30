import React, { useState } from "react";

function Form(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    gender: "",
    checkbox: "",
  });
  const [change, setChange] = useState([]);

  const HandleChange = (event) => {
    return setChange((prevstate) => {
      return { ...prevstate, [event.target.name]: event.target.value };
    });
  };

  const Submit = (event) => {
    event.preventDefault();
    setState(change);
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={HandleChange}
          name="name"
          required
        ></input>
        <br />
        <br />
        <input
          type="email"
          placeholder="enter your email address"
          onChange={HandleChange}
          name="email"
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="enter your address"
          onChange={HandleChange}
          name="address"
          required
        ></input>
        <br />
        <br />
        <input
          type="radio"
          name="gender"
          onChange={HandleChange}
          value="male"
          required
        ></input>
        Male
        <input
          type="radio"
          name="gender"
          onChange={HandleChange}
          value="Female"
          required
        ></input>
        Female
        <br />
        <br />
        <input
          type="checkbox"
          name="checkbox"
          value="1"
          onChange={HandleChange}
        ></input>
        1<br />
        <input
          type="checkbox"
          name="checkbox"
          value="2"
          onChange={HandleChange}
        ></input>
        2<br />
        <input
          type="checkbox"
          name="checkbox"
          value="3"
          onChange={HandleChange}
        ></input>
        3<br />
        <input
          type="checkbox"
          name="checkbox"
          value="4"
          onChange={HandleChange}
        ></input>
        4<br />
        <input type="checkbox" name="checkbox" value="5"></input>5<br />
        <button type="submit">Submit Information</button>
        <br></br>
        <br></br>
        <p> First Name {state.name}</p>
        <p> Email {state.email}</p>
        <p> Address {state.address}</p>
        <p> Gender {state.gender}</p>
        <p> checkbox {state.checkbox}</p>
      </form>
    </div>
  );
}

export default Form;
