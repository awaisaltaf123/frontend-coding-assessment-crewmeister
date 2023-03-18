import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbsences } from "./redux/actions/absences";
import "./App.css";
import { Heading1, ErrorMsg } from "./components/_styles_";
import Absence from "./components/absence/Absence";
import Loader from "./components/common/Loader/loader";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAbsences());
  }, [dispatch]);

  const { data, isFetching, isError, error } = useSelector(
    (state) => state.absences
  );
  return (
    <>
      {isFetching && <Loader />}
      {isError && <ErrorMsg>{error}</ErrorMsg>}
      <Heading1>Awais Crewmeister Assessment</Heading1>
      <Absence data={data} />
    </>
  );
}

export default App;
