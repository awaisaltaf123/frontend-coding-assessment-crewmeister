import React from "react";
import { render, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbsences } from "../redux/actions/absences";
import App from "../App";

jest.mock("react-redux");

describe("App component", () => {
  test("should render app component with data", async () => {
    const data = [
      {
        id: 1,
        name: "John",
        startDate: "2022-03-01",
        endDate: "2022-03-05",
        type: "sickness",
        status: "approved",
      },
      {
        id: 2,
        name: "Jane",
        startDate: "2022-03-02",
        endDate: "2022-03-03",
        type: "vacation",
        status: "approved",
      },
    ];
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    useSelector.mockImplementation((selector) =>
      selector({
        absences: { data, isFetching: false, isError: false, error: "" },
      })
    );

    render(<App />);

    expect(
      screen.getByText(/Awais Crewmeister Assessment/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Error/i)).not.toBeInTheDocument();
  });

  test("should render app component with loading state", async () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    useSelector.mockImplementation((selector) =>
      selector({
        absences: { data: [], isFetching: true, isError: false, error: "" },
      })
    );

    render(<App />);

    expect(
      screen.getByText(/Awais Crewmeister Assessment/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/Error/i)).not.toBeInTheDocument();
  });

  test("should render app component with error state", async () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    useSelector.mockImplementation((selector) =>
      selector({
        absences: {
          data: [],
          isFetching: false,
          isError: true,
          error: "Error message",
        },
      })
    );

    render(<App />);

    expect(
      screen.getByText(/Awais Crewmeister Assessment/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Error message/i)).toBeInTheDocument();
  });
});
