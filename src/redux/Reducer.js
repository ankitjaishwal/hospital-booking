import * as types from "./ActionTypes";

const initState = {
  patientData: [
    {
      email: "patient1@gmail.com",
      password: "patient123",
      type: "patient",
    },
    {
      email: "patient2@gmail.com",
      password: "patient123",
      type: "patient",
    },
  ],
  hospitalData: [
    {
      email: "hospital@gmail.com",
      password: "hospital123",
      type: "hospital",
    },
  ],
  booked: [
    {
      name: "Ankit Jaishwal",
      age: 21,
      mobile: 9097231883,
      address: "Bihar",
      date: "2021-04-06",
      time: "18:30",
    },
    {
      name: "Utkarsh Srivastava",
      age: 21,
      mobile: 9097231883,
      address: "UP",
      date: "2021-04-06",
      time: "19:00",
    },
  ],
};

const Reducer = (state = initState, action) => {
  console.log("Action", action.payload);
  switch (action.type) {
    case types.SET_BOOKED:
      return {
        ...state,
        booked: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
