import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";

function BezugHinzufuegen() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { einkommenGehaltContext, setEinkommenGehaltContext, forceUpdate } =
    useContext(Context);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function addBezug(name) {
    let allreadyAdded = false;
    let label = "";
    for (let i = 0; einkommenGehaltContext.items.length > i; i++) {
      console.log("drin");
      if (einkommenGehaltContext.items[i].name === name) {
        allreadyAdded = true;
      }
    }
    switch (name) {
      case "VariablerBezug":
        label="Variabler Bezug"
        break;
      case "Fahrtkosten":
        label="Fahrtkosten"
      break;
      case "Provision":
        label="Provision"
        break;
      case "Feiertagszuschlag":
        label="Feiertagszuschlag"

        break;
      case "Nachtzuschlag":
        label="Nachtzuschlag"
        
      break;
      case "Dienstwagen":
        label="Dienstwagen"
        
        break;
      case "Gebuehren":
        label="Kita-Gebühren"

        break;
      case "JobRad":
        label="Job Rad"

        break;
      case "VwLAG":
        label="VwL AG"

        break;
      case "Sachbezug":
        label="Sachbezug"

        break;
      case "Sonstiges":
        label="Sonstiges"

      default:
    }

    let newBezug = [
      {
        name: "gehaltNameEinnahmen" + name,
        label: label,
        type: "paragraph",
        props: { sm: 2 },
      },
      {
        name: "steuerSelectEinnahmen" + name,
        label: "",
        type: "select",
        props: { sm: 2 },
        options: [
          { value: 0, label: "L" },
          { value: 1, label: "S" },
          { value: 2, label: "F" },
          { value: 3, label: "E" },
          { value: 4, label: "P" },
          { value: 5, label: "A" },
          { value: 6, label: "M" },
          { value: 7, label: "N" },
          { value: 8, label: "V" },
          { value: 9, label: "W" },
        ],
      },
      {
        name: "sozialversicherunSelectEinnahmen" + name,
        label: "",
        type: "select",
        props: { sm: 2 },
        options: [
          { value: 0, label: "L" },
          { value: 1, label: "S" },
          { value: 2, label: "F" },
          { value: 3, label: "E" },
          { value: 4, label: "P" },
          { value: 5, label: "A" },
          { value: 6, label: "M" },
          { value: 7, label: "N" },
          { value: 8, label: "V" },
          { value: 9, label: "W" },
        ],
      },
      {
        name: "gesamtBruttoSelectEinnahmen" + name,
        label: "",
        type: "select",
        props: { sm: 2 },
        options: [
          { value: 0, label: "L" },
          { value: 1, label: "S" },
          { value: 2, label: "F" },
          { value: 3, label: "E" },
          { value: 4, label: "P" },
          { value: 5, label: "A" },
          { value: 6, label: "M" },
          { value: 7, label: "N" },
          { value: 8, label: "V" },
          { value: 9, label: "W" },
        ],
      },
      {
        name: "betragMtlTextfieldEinnahmen" + name,
        label: " ",
        type: "number",
        id:name,
        props: { sm: 2 },
      },
      {
        name: name,
        label: "entferneBezug"+name,
        type: "entferneBezug",
        props: { sm: 2 },
      },
    ];
    let newEinkommenGehalt = einkommenGehaltContext;
    if (!allreadyAdded) {
      newEinkommenGehalt.items.splice(15, 0, ...newBezug);
      setEinkommenGehaltContext(newEinkommenGehalt);
    }
    setTimeout(() => {
      forceUpdate(1);
    }, 500);
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => handleClick(event)}
      >
        BruttoBezug Hinzufügen
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{top:"48px"}}
      >
        <MenuItem onClick={() => addBezug("VariablerBezug")}>
          Variabler bezug
        </MenuItem>
        <MenuItem onClick={() => addBezug("Fahrtkosten")}>Fahrtkosten</MenuItem>
        <MenuItem onClick={() => addBezug("Feiertagszuschlag")}>
          Feiertagszuschlag
        </MenuItem>
        <MenuItem onClick={() => addBezug("Nachtzuschlag")}>
          Nachtzuschlag
        </MenuItem>
        <MenuItem onClick={() => addBezug("Dienstwagen")}>Dienstwagen</MenuItem>
        <MenuItem onClick={() => addBezug("Gebuehren")}>Kita-Gebühren</MenuItem>
        <MenuItem onClick={() => addBezug("JobRad")}>Job Rad</MenuItem>
        <MenuItem onClick={() => addBezug("VwLAG")}>VwL AG</MenuItem>
        <MenuItem onClick={() => addBezug("Sachbezug")}>
          Sachbezug (44€)
        </MenuItem>
        <MenuItem onClick={() => addBezug("Provision")}>Provision</MenuItem>
        <MenuItem onClick={() => addBezug("Sonstiges")}>Sonstiges</MenuItem>
      </Menu>
    </div>
  );
}
export default BezugHinzufuegen;
