import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", textarea: "", box: true, mode: "", selectBtn: "" })
  // console.log(formData);
  function changeHandler(e) {
    const { name, value, type, checked } = e.target;
    setFormData(preFormData => {
      return {
        ...preFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
   
  }
  function submitHandler(e) {
    e.preventDefault()
    console.log("finaallly");
    console.log(formData)
  }
  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input
            onChange={changeHandler}
            type="text"
            placeholder="enter your first name"
            name="firstName"
            value={formData.firstName}

          />
          <br />
          <br />
          <input
            onChange={changeHandler}
            type="text"
            placeholder="enter your last name"
            name="lastName"
            value={formData.lastName}
          />
          <br />
          <br />
          <input
            onChange={changeHandler}
            type="email"
            placeholder="enter your email"
            name="email"
            value={formData.email}
          />
          <br />
          <br />
          <textarea
            onChange={changeHandler}
            name="textarea"
            placeholder="comment"
            value={formData.textarea}
          />
          <br />
          <br />
          <input type="checkbox"
            onChange={changeHandler}
            name="box"
            id="box"
            checked={formData.box}
          />
          <label htmlFor="box">This is check box</label>
          <fieldset>
            <legend>Mode</legend>
            <input
              onChange={changeHandler}
              type="radio"
              name="mode"
              id="Ofline-Mode"
              value="Ofline-Mode"
              checked={formData.mode === "Ofline-Mode"}
            />
            <label htmlFor="Ofline-mode">Ofline Mode</label>
            <input
              onChange={changeHandler}
              type="radio"
              name="mode"
              value="Online-Mode"
              id="Online-Mode"
              checked={formData.mode === "Online-Mode"}
            />
            <label htmlFor="Online-mode">Online Mode</label>
          </fieldset>
          <br></br>
          <br></br>
          <label htmlFor="selectBtn">Choose Your Favourite car</label>
          <select
            onChange={changeHandler}
            id="selectBtn"
            name="selectBtn"
            value={formData.selectBtn}
          >
            <option value="scarpio">Scarpio</option>
            <option value="fartuner">Fartuner</option>
            <option value="bmw">BMW</option>
            <option value="thar">Thar</option>
          </select>
          <br></br>
          <br></br>
          <button>Submit</button>
        </form>

      </div>
    </>
  );
}

export default App;






