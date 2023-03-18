import { FaDownload } from "react-icons/fa";
import { createEvent } from "ics";
/**
 * Create and download iCal file
 * @param {*} memberName
 * @param {*} type
 * @param {*} startDate
 * @param {*} endDate
 * @param {*} memberNote
 * @returns {Download iCal file}
 */

const downloadICal = (record) => {
  const { memberName, type, startDate, endDate, memberNote } = record;

  const [startYear, startMonth, startDay] = startDate.split("-");
  const [endYear, endMonth, endDay] = endDate.split("-");

  createEvent(
    {
      title: `${memberName} - ${type}`,
      description: memberNote,
      busyStatus: "OOF",
      start: [Number(startYear), Number(startMonth), Number(startDay)],
      end: [Number(endYear), Number(endMonth), Number(endDay) + 1],
    },
    (error, value) => {
      if (error) {
        console.log(error);
      }

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = "data:text/calendar;charset=utf8," + encodeURIComponent(value);
      a.download = `${memberName}_${type}_${startDate}_${endDate}.ics`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  );
};

/**
 * Generate table column definition
 */
export const columnDefs = [
  {
    headerName: "Member Name",
    field: "memberName",
  },
  {
    headerName: "Absence Type",
    field: "type",
    filter: "agSetColumnFilter",
    filterParams: {
      buttons: ["Sickness", "Vacation"],
    },
  },
  {
    headerName: "Start Date",
    field: "startDate",
    filter: true,
  },
  {
    headerName: "End Date",
    field: "endDate",
    filter: true,
  },
  {
    headerName: "Member Note",
    field: "memberNote",
  },
  /*   if createdAt then confirmed 
   if rejectedAt then rejected
  else requested
    */
  {
    headerName: "Status",
    cellRenderer: (params) => {
      const { confirmedAt, rejectedAt } = params?.data;
      return confirmedAt ? "Confirmed" : rejectedAt ? "Rejected" : "Requested";
    },
  },
  {
    headerName: "Admitter Note",
    field: "admitterNote",
  },
  {
    headerName: "iCal",
    maxWidth: 100,
    cellRenderer: (params) => (
      <FaDownload onClick={() => downloadICal(params?.data)} />
    ),
  },
];

export const defaultColDef = {
  resizable: true,
  sortable: true,
  filter: true,
  flex: 1,
};
