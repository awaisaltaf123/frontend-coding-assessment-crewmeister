import { createAsyncThunk } from "@reduxjs/toolkit";
import absences from "../../api/absences.json";
import members from "../../api/members.json";

/*  filters data from absences.json and members.json 
    returns an array of objects
  */
const filterData = () => {
  const filterAbsences = absences?.payload?.map((absence) => {
    const member = members?.payload?.find(
      (member) => member?.userId === absence?.userId
    );
    return { ...absence, memberName: member?.name };
  });
  return filterAbsences;
};

export const fetchAbsences = createAsyncThunk("absences/fetchAbsences", () => {
  const response = filterData();
  console.log("response==>", response);
  return response;
});
