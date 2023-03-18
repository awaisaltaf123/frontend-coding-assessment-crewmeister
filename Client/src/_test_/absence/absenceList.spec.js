import React from "react";
import { render, screen } from "@testing-library/react";
import Absence from "../../components/absence/Absence";

const mockData = [
  { id: 1, memberName: "John Doe", startDate: "2022-02-14" },
  { id: 2, memberName: "Jane Smith", startDate: "2022-03-01" },
];

describe("Absence component", () => {
  test("should render total absences and table", () => {
    render(<Absence data={mockData} />);

    const totalAbsences = screen.getByText(
      `Total Absences: ${mockData.length}`
    );
    expect(totalAbsences).toBeInTheDocument();
  });
});
