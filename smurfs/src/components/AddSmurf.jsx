import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSmurf, updateSmurf } from "../actions";

const AddSmurf = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { smurfToEdit, isEditing } = state;
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });
  useEffect(() => {
    if (isEditing === true) {
      setNewSmurf(smurfToEdit);
    }
  }, [isEditing, smurfToEdit]);

  const handleChanges = (e) => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    isEditing === false
      ? dispatch(addSmurf(newSmurf))
      : dispatch(updateSmurf(newSmurf, smurfToEdit.id));
    setNewSmurf({
      name: "",
      age: "",
      height: "",
    });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="name"
          type="text"
          value={newSmurf.name}
          placeholder="Name"
          onChange={(e) => handleChanges(e)}
          required
        />
        <input
          name="age"
          type="text"
          value={newSmurf.age}
          placeholder="Age"
          onChange={(e) => handleChanges(e)}
          required
        />
        <input
          name="height"
          type="text"
          value={newSmurf.height}
          placeholder="Height"
          onChange={(e) => handleChanges(e)}
          required
        />
        <button type="submit">
          {isEditing === false ? "Add Smurf" : "Finish Edit"}
        </button>
      </form>
    </div>
  );
};

export default AddSmurf;
