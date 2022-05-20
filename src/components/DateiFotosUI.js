import "./css/dateiFoto.css";
import { Context } from "../context/Context";
import { Box, Button, Typography } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  useReducer,
} from "react";

function DateiFotoUI() {
  const columns = [
    {
      field: "name",
      headerName: "name",
      width: 100,
      renderCell: (params) => (
        <Typography sx={{ width: "200px" }} variant="subtitle2">
          {params.value}
        </Typography>
      ),
    },
    {
      field: "aktion",
      headerName: "Aktion",
      width: 100,
      renderCell: (params) => (
        <>
          <Button>GET</Button>
          <Button>DELETE</Button>
        </>
      ),
    },
  ];
  const rows=[
     { name:"test",
    aktion:"id"},
    { name:"test",
    aktion:"id"},
     { name:"test",
    aktion:"id"}
  ]
  return (
    <div className="dateiFotoBox">
      <Box className="imgBox"></Box>
      <Box className="imgToolbar"></Box>
      <Button>Dateien / Bilder hochladen</Button>

    </div>
  );
}
//onClick={} <DataGrid hideFooter columns={columns} rows={rows} />
export default DateiFotoUI;
