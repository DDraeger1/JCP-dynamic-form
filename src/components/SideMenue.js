import Arrow from "../mockUI/angle-right-solid.svg";
import "../fontAwesome/analyse-font-icons-1.0.2/css/analyse-font-icons.css";
import "../fontAwesome/font-awesome-4.4.0/css/font-awesome.css";
import "../fontAwesome/font-awesome-4.7.0/css/font-awesome.css";


import MuiDrawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useContext, forwardRef } from "react";
import { Context } from "../context/Context";
import { Close,KeyboardArrowDown } from "@material-ui/icons";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";

import {setName} from "./mapAssets"

import "./css/sideMenue.css";
import "./css/newSideMenue.css";
import { useState } from "react";
const drawerWidth = 240;

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
function SideMenue({ assets, colorProperties, setCard, loaded,card,selectedVertraege, setSelectedVertraege,
  subTabIndex, setSubTabIndex,tabIndex, setTabIndex,uebersichtVisibility,setUebersichtVisibility }) {
  const theme = useTheme();
  const {
    setCardClassName,
    mandantGroup,
    mandantTabIndex,
    setMandantTabIndex,
    setVertragId,
    openDialog, toggleOpenDialog
  } = useContext(Context);
  const [anchorElMandantHinzufuegen, setAnchorElMandantHinzufuegen] = useState(null);
const openMandantHinzufuegen = Boolean(anchorElMandantHinzufuegen);
  const handleClickMandantHinzufuegen = (event) => {
    setAnchorElMandantHinzufuegen(event.currentTarget);
  };
  const handleCloseMandantHinzufuegen = () => {
    setAnchorElMandantHinzufuegen(null);
  };
  function mapZahlweise(zahlweise) {
    let output = "";
    switch (zahlweise) {
      case "MONATLICH":
        output = "Monatlich - ";
        break;
      case "QUARTAL":
        output = "Quartal - ";
        break;
      case "HALBJAEHRLICH":
        output = "Halbjährlich - ";
        break;
      case "JAEHRLICH":
        output = "Jährlich - ";
        break;
      default:
        output = "Zahlweise nicht erkannt";
        break;
    }
    return output;
  }
  const buttonColor = { color: colorProperties.BUTTONCOLOR };
 function pushData(asset){
   let output= {}

   output = {
    icon: asset.tarifTypeId,
    id: asset.id,
    sparte: setName(asset.name, asset.tarifTypeId),
    beginnEnde:
      asset.versicherungsbeginn +
      " - " +
      (typeof asset.versicherungsende === "undefined"
        ? ""
        : asset.versicherungsende),
    vertragsnr: asset.versicherungsnummer,
    beitrag:
      (typeof asset.zahlweise === "undefined"
        ? ""
        : mapZahlweise(asset.zahlweise)) +
      asset.beitrag.toFixed(2) +
      " €",
    VNVP:
      (typeof asset.versichertePerson === "undefined"
        ? ""
        : asset.versichertePerson.vorname +
          " " +
          asset.versichertePerson.nachname) +
      (typeof asset.versicherungsnehmer === "undefined"
        ? ""
        : " / " +
          asset.versicherungsnehmer.vorname +
          " " +
          asset.versicherungsnehmer.nachname),
  }

   return output
 }
  function setRows(assets, tarifTypes) {
    let output = [];
    //
    if(tarifTypes[0] !== "SHOWALL"){
    assets.map((asset) => {
      tarifTypes.map((tarifType) => {
        if (tarifType === asset.tarifTypeId) {
output.push(pushData(asset))
        }
      });
    });
  } else if(tarifTypes[0] === "SHOWALL"){
    assets.map((asset) => {
output.push(pushData(asset))
    });
  }
    return output;
  }
  function setIcon(tarifType) {
    let output;
    switch (tarifType) {
      case "UNFALL":
        output = <i class="icon icon-fa-font-accident fa-2x"></i>;
        break;
      case "BU":
        output = <i class="fa fa-wheelchair fa-2x"></i>;
        break;
      case "DREADDISEASE":
        output = <i class="fa fa-bug fa-2x"></i>;
        break;
      case "RISIKO":
        output = <i class="fa fa-bed fa-2x"></i>;
        break;
      case "RUERUP":
        output = <i class="icon icon-fa-font-oldru fa-2x"></i>;
        break;
      case "RIESTER":
        output = <i class="icon icon-fa-font-oldri fa-2x"></i>;
        break;
      case "DIREKTZUSAGE":
        output = <i class="icon icon-fa-font-factory fa-2x"></i>;
        break;
      case "PENSIONSFONDS_3":
        output = <i class="icon icon-fa-font-factory fa-2x"></i>;
        break;
      case "DIREKT_40":
        output = <i class="icon icon-fa-font-factory fa-2x"></i>;
        break;
      case "PENSIONSKASSE_40":
        output = <i class="icon icon-fa-font-factory fa-2x"></i>;
        break;
      case "UNTERSTUETZUNGSKASSE":
        output = <i class="icon icon-fa-font-factory fa-2x"></i>;
        break;
      case "DIREKT_3":
        output = <i class="icon icon-fa-font-factory fa-2x"></i>;
        break;
      case "GESETZLICHE_AV":
        output = <i class="icon icon-fa-font-paragraph fa-2x"></i>;
        break;
      case "GESETZLICHE_KRANKEN":
        output = <i class="icon icon-fa-font-ambulance fa-2x"></i>;
        break;
      case "PRIVATHAFTPFLICHT":
        output = <i class="icon icon-fa-font-cop fa-2x"></i>;
        break;
      case "HUNDEHALTERHAFTPFLICHT":
        output = <i class="icon icon-fa-font-dog fa-2x"></i>;
        break;
      case "PFERDEHALTERHAFTPFLICHT":
        output = <i class="icon icon-fa-font-horse fa-2x"></i>;
        break;
      case "HAUSRAT":
        output = <i class="icon icon-fa-font-bike fa-2x"></i>;
        break;
      case "RECHTSSCHUTZ":
        output = <i class="icon icon-fa-font-legal fa-2x"></i>;
        break;
      case "WOHNGEBAEUDE":
        output = <i class="icon icon-fa-font-thunder fa-2x"></i>;
        break;
      case "KFZ":
        output = <i class="fa fa-car fa-2x"></i>;
        break;
      case "EINNAHMEN":
        output = <i class="icon icon-fa-font-cash fa-2x"></i>;
        break;
      case "EINKOMMEN_GEHALT":
        output = <i class="icon icon-fa-font-wallet fa-2x"></i>;
        break;
      case "EINKOMMEN_MINIJOB":
        output = <i class="icon icon-fa-font-job fa-2x"></i>;
        break;
      case "EINKOMMEN_SELBSTAENDIGER":
        output = <i class="icon icon-fa-font-work fa-2x"></i>;
        break;
      case "AUSGABEN":
        output = <i class="icon icon-fa-font-cash fa-2x"></i>;
        break;
      case "AUTOMOBILCLUB":
        output = <i class="fa fa-car fa-2x"></i>;
        break;
      case "SONSTIGE_ZAHLUNG":
        output = <i class="icon icon-fa-font-cash fa-2x"></i>;
        break;
      case "KONSUMKREDIT":
        output = <i class="icon icon-fa-font-shop fa-2x"></i>;
        break;
      case "DARLEHEN":
        output = <i class="icon icon-fa-font-safe fa-2x"></i>;
        break;
      case "BANKPRODUKTE":
        output = <i class="icon icon-fa-font-bank fa-2x"></i>;
        break;
      case "VWL_BAUSPAREN":
        output = <i class="icon icon-fa-font-home fa-2x"></i>;
        break;
      case "IMMOBILIENBESTAND":
        output = <i class="icon icon-fa-font-home fa-2x"></i>;
        break;
      case "SACHWERT":
        output = <i class="icon icon-fa-font-building fa-2x"></i>;
        break;
      case "BETEILIGUNGEN":
        output = <i class="icon icon-fa-font-pie fa-2x"></i>;
        break;
      case "PFLEGEKOSTEN":
        output = <i class="icon icon-fa-font-doctor fa-2x"></i>;
        break;
      case "PFLEGERENTEN":
        output = <i class="icon icon-fa-font-doctor fa-2x"></i>;
        break;
      case "PFLEGETAGEGELD":
        output = <i class="icon icon-fa-font-doctor fa-2x"></i>;
        break;
      case "KVV":
        output = <i class="icon icon-fa-font-plaster fa-2x"></i>;
        break;
      case "KVZ":
        output = <i class="icon icon-fa-font-plaster fa-2x"></i>;
        break;
        case "BEAMTENBEIHILFE":
output=<i class="icon icon-fa-font-case fa-2x"></i>
        break
        case "BERUFSSTAENDISCHE_VORSORGE":
output=<i class="fa fa-briefcase fa-2x"></i>
        break
        case "BEAMTENVERSORGUNG":
output=<i class="icon icon-fa-font-tie fa-2x"></i>
        break
        case "BAUHERRENHAFTPFLICHT":
output=<i class="icon icon-fa-font-work fa-2x"></i>
        break
        case "WASSERSPORTHAFTPFLICHT":
output=<i class="icon icon-fa-font-boat fa-2x"></i>
        break
        case "GEWAESSERSCHADENHAFTPFLICHT":
output=<i class="icon icon-fa-font-oil fa-2x"></i>
        break
        case "RENTE":
output=<i class="icon icon-fa-font-electric fa-2x"></i>
        break
      default:
        output = <i class="fa fa-question-circle fa-2x"></i>;
        break;
    }
    return output;
  }

  const arbeitskraftAbsicherungTarifType = [
    "RISIKO",
    "BU",
    "DREADDISEASE",
    "UNFALL",
  ];
  const vermoegenAltersvorsorgeTarifType = [
    "RUERUP",
    "RIESTER",
    "DIREKTZUSAGE",
    "PENSIONSFONDS_3",
    "DIREKT_40",
    "PENSIONSKASSE_40",
    "UNTERSTUETZUNGSKASSE",
    "DIREKT_3",
    "RENTE",
    "GESETZLICHE_AV",
    "BERUFSSTAENDISCHE_VORSORGE",
    "BEAMTENVERSORGUNG",
  ]; //kapitalversicherung, investmentfonds muss weitermachen aber styling zählt mehr
  const vermoegenssicherungTarifType = [
    "PRIVATHAFTPFLICHT",
    "HUNDEHALTERHAFTPFLICHT",
    "PFERDEHALTERHAFTPFLICHT",
    "HAUSRAT",
    "RECHTSSCHUTZ",
    "WOHNGEBAEUDE",
    "KFZ",
  ];
  const einnahmenUndAusgabenTarifType = [
    "EINNAHMEN",
    "EINKOMMEN_GEHALT",
    "EINKOMMEN_MINIJOB",
    "EINKOMMEN_SELBSTAENDIGER",
    "AUSGABEN",
    "AUTOMOBILCLUB",
    "SONSTIGE_ZAHLUNG",
  ]; // Steuer fehlt gehört aber zu personaldaten...
  const vermoegenUndVerbindlichkeitenTarifType = [
    "KONSUMKREDIT",
    "DARLEHEN",
    "BANKPRODUKTE",
    "VWL_BAUSPAREN",
    "IMMOBILIENBESTAND",
    "SACHWERT",
    "BETEILIGUNGEN",
    "BAUHERRENHAFTPFLICHT",
    "WASSERSPORTHAFTPFLICHT",
    "GEWAESSERSCHADENHAFTPFLICHT",
  ]; //INVESTMENT FEHLT
  const einkommenAusgaben =["EINNAHMEN","EINKOMMEN_GEHALT","EINKOMMEN_MINIJOB","EINKOMMEN_SELBSTAENDIGER","AUSGABEN"]
  const pflegeTariftype = ["PFLEGEKOSTEN", "PFLEGERENTEN", "PFLEGETAGEGELD"];
  const gesundheitTarifType = ["GESETZLICHE_KRANKEN", "KVV", "KVZ","BEAMTENBEIHILFE"];
  const allVertraege = [
"SHOWALL"
  ];
  const columns = [
    {
      field: "icon",
      headerName: "",
      width: 70,
      renderCell: (params) => setIcon(params.value),
    },
    {
      field: "sparte",
      headerName: "Sparte",
      width: 200,
      renderCell: (params) => (
        <Typography sx={{ width: "200px" }} variant="subtitle2">
          {params.value}
        </Typography>
      ),
    },
    {
      field: "vertragsnr",
      headerName: "Vertragsnr.",
      width: 100,
      renderCell: (params) => (
        <Typography sx={{ width: "200px" }} variant="subtitle1">
          {params.value}
        </Typography>
      ),
    },
    {
      field: "beginnEnde",
      headerName: "Beginn/Ende",
      width: 130,
      renderCell: (params) => (
        <Typography
          sx={{ width: "130px", height: "60px", whiteSpace: "break-spaces" }}
          variant="subtitle1"
          display="block"
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "beitrag",
      headerName: "Beitrag",
      width: 200,
      renderCell: (params) => (
        <Typography sx={{ width: "200px" }} variant="subtitle1">
          {params.value}
        </Typography>
      ),
    },
    {
      field: "VNVP",
      headerName: "VN/VP",
      width: 400,
      renderCell: (params) => (
        <Typography
          sx={{ width: "400px", height: "60px", whiteSpace: "break-spaces" }}
          variant="subtitle1"
        >
          {params.value}
        </Typography>
      ),
    },
  ];
  //


  const [open, setOpen] = useState(false);
  const [openVertragHinzufuegen, toggleOpenVertragHinzufuegen] =
    useState(false);
  const [tariftypeArray, setTariftypeArray] = useState(allVertraege);
  const [vertragUebersichtHeader, setVertragUebersichtHeader] =
    useState("Alle Verträge");
  const [emptyWindowStyle, setEmptyWindowStyle] = useState("emptyWindow");
  const [descriptionStyle, setDescriptionStyle] = useState(
    "buttonDescriptionOnExit"
  );

  const handleVertragHinzufuegenOpen = () => {
    toggleOpenVertragHinzufuegen(true);
  };
  const handleVertragHinzufuegenClose = () => {
    toggleOpenVertragHinzufuegen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
    setDescriptionStyle("buttonDescription");
    setCardClassName("cardDrawerOpen");
    setEmptyWindowStyle("emptyWindowOpen");
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setDescriptionStyle("buttonDescriptionOnExit");
    setCardClassName("card");
    setEmptyWindowStyle("emptyWindow");
  };

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
    if(newValue === 0){
      setCard("PERSONALDATEN")
      toggleOpenDialog(true)
    } if(newValue === 1){
      toggleOpenDialog(false)

  }

  };
var rememberedSubTabValue = 0
  const handleChangeSubTab = (event, newValue) => {
    setSubTabIndex(newValue);
    rememberedSubTabValue = newValue
    if (newValue !== 1000) {
      if (selectedVertraege.length > newValue) {

        setVertragId(selectedVertraege[newValue].id);
        setCard(selectedVertraege[newValue].tarifType);
        setUebersichtVisibility("hidden");
      }
    } else {
      setUebersichtVisibility("visible");
    }
    if (selectedVertraege.length === 0) {
      setSubTabIndex(1000);
      setTimeout(() => {
        setUebersichtVisibility("visible");
      }, 100);
    }
  };
  const handleChangeSubTabMandant = (event, newValue) => {
    setMandantTabIndex(newValue);
    if(mandantGroup[newValue].art === "KIND"){
      setCard("KIND")
    } else {
      setCard("PERSONALDATEN")
    }
    
  };

  const personenbezogeneDaten = (
    <div
      className="buttonGrid"
      style={{ backgroundColor: colorProperties.COLOR1 }}
    >
      <div className="buttonContainer">
        {!open ? (
          <IconButton className="openDrawer" onClick={() => handleDrawerOpen()}>
            <img className="iconStyleDrawerButton" src={Arrow}></img>
          </IconButton>
        ) : (
          <IconButton
            className="openDrawer"
            onClick={() => handleDrawerClose()}
          >
            <img
              className="iconStyleDrawerButton"
              style={{ transform: "rotate(180deg)" }}
              src={Arrow}
            ></img>
          </IconButton>
        )}
        <div style={{ height: "41px" }} />
        <div className="buttonContainer" onClick={()=>setCard("PERSONALDATEN")}>
          <Typography className={descriptionStyle}>Person</Typography>
          <Button className="iconButtonToolbar" onClick={()=>setCard("PERSONALDATEN")} disableTouchRipple disableRipple disableFocusRipple>
       <i class="fa fa-user fa-2x"  style={{ ...buttonColor }} />
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={()=>setCard("AUSWEIS")}>
          <Typography className={descriptionStyle}>Legitimation</Typography>
          <Button className="iconButtonToolbar" onClick={()=>setCard("AUSWEIS")} disableTouchRipple disableRipple disableFocusRipple>
            <i class="fa fa-id-card fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={()=>setCard("AUSBILDUNGBERUF")}>
          <Typography className={descriptionStyle}>
            Ausbildung / Beruf
          </Typography>
          <Button className="iconButtonToolbar" onClick={()=>setCard("AUSBILDUNGBERUF")} disableTouchRipple disableRipple disableFocusRipple>
            <i class="fa fa-graduation-cap fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={()=>setCard("ERWEITERTEBERUFSFRAGEN")}>
          <Typography className={descriptionStyle}>
            Erweiterte Berufsfragen
          </Typography>
          <Button className="iconButtonToolbar" onClick={()=>setCard("ERWEITERTEBERUFSFRAGEN")} disableTouchRipple disableRipple disableFocusRipple>
            <i class="fa fa-certificate fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={()=>setCard("ARBEITGEBER")}>
          <Typography className={descriptionStyle}>Arbeitgeber</Typography>
          <Button className="iconButtonToolbar" onClick={()=>setCard("ARBEITGEBER")} disableTouchRipple disableRipple disableFocusRipple>
            <i class="fa fa-briefcase fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={()=>setCard("KOMMUNIKATION")}>
          <Typography className={descriptionStyle}>Kommunikation</Typography>
          <Button className="iconButtonToolbar" onClick={()=>setCard("KOMMUNIKATION")} disableTouchRipple disableRipple disableFocusRipple>
            <i class="fa fa-phone fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={()=>setCard("AUSWEIS")}>
          <Typography className={descriptionStyle}>Legitimation</Typography>
          <Button className="iconButtonToolbar" onClick={()=>setCard("AUSWEIS")} disableTouchRipple disableRipple disableFocusRipple>
            <i class="fa fa-book fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={()=>setCard("BANKVERBINDUNG")}>
          <Typography className={descriptionStyle}>Bank</Typography>
          <Button className="iconButtonToolbar" onClick={()=>setCard("BANKVERBINDUNG")} disableTouchRipple disableRipple disableFocusRipple>
            <i class="fa fa-bank fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={()=>setCard("GESUNDHEIT")}>
          <Typography className={descriptionStyle}>Gesundheit</Typography>
          <Button className="iconButtonToolbar" onClick={()=>setCard("GESUNDHEIT")} disableTouchRipple disableRipple disableFocusRipple>
            <i class="fa fa-heartbeat fa-2x" style={buttonColor}></i>
          </Button>
        </div>
      </div>
    </div>
  );
  const vertragGruppen = (
    <div
      className="buttonGrid"
      style={{ backgroundColor: colorProperties.COLOR1 }}
    >
      <div className="buttonContainer">
        {!open ? (
          <IconButton className="openDrawer" onClick={() => handleDrawerOpen()}>
            <img className="iconStyleDrawerButton" src={Arrow}></img>
          </IconButton>
        ) : (
          <IconButton
            className="openDrawer"
            onClick={() => handleDrawerClose()}
          >
            <img
              className="iconStyleDrawerButton"
              style={{ transform: "rotate(180deg)" }}
              src={Arrow}
            ></img>
          </IconButton>
        )}
        <div className="buttonContainer" style={{ marginTop: "50px" }}>
          <Typography className={descriptionStyle}>Alle Verträge</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => {
              setTariftypeArray(allVertraege);
              setVertragUebersichtHeader("Alle Verträge");
            }}
          >
            <i style={buttonColor} class="fa fa-file-text-o fa-2x"></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer">
          <Typography className={descriptionStyle}>Altersvorsorge</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => {
              setTariftypeArray(vermoegenAltersvorsorgeTarifType);
              setVertragUebersichtHeader("Altersvorsorge");
            }}
          >
            <i class="fa icon-fa-font-old fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer">
          <Typography className={descriptionStyle}>
            Arbeitskraftabsicherung
          </Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => {
              setTariftypeArray(arbeitskraftAbsicherungTarifType);
              setVertragUebersichtHeader("Arbeitskraftabsicherung");
            }}
          >
            <i class="fa icon-fa-font-work fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer">
          <Typography className={descriptionStyle}>
            Einnahmen und Ausgaben
          </Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => {
              setTariftypeArray(einnahmenUndAusgabenTarifType);
              setVertragUebersichtHeader("Einnahmen und Ausgaben");
            }}
          >
            <i class="fa fa-money fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer">
          <Typography className={descriptionStyle}>Gesundheit</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => {
              setTariftypeArray(gesundheitTarifType);
              setVertragUebersichtHeader("Gesundheit");
            }}
          >
            <i class="fa fa-heartbeat fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer">
          <Typography className={descriptionStyle}>Pflege</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => {
              setTariftypeArray(pflegeTariftype);
              setVertragUebersichtHeader("Pflege");
            }}
          >
            <i class="icon icon-fa-font-doctor fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer">
          <Typography className={descriptionStyle}>
            Vermögenssicherung
          </Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => {
              setTariftypeArray(vermoegenssicherungTarifType);
              setVertragUebersichtHeader("Vermögenssicherung");
            }}
          >
            <i class="fa fa-shield fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer">
          <Typography className={descriptionStyle}>
            Vermögen und Verbindlichkeiten
          </Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => {
              setTariftypeArray(vermoegenUndVerbindlichkeitenTarifType);
              setVertragUebersichtHeader("Vermögen und Verbindlichkeiten");
            }}
          >
            <i class="icon icon-fa-font-safe fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
  //(tabIndex === 0 ? :"toolBarExit")
function isPartnerVorhanden(){
  let output = false
  mandantGroup.map((mandant)=>{
    if(mandant.art === "PARTNER"){
      output = true
    }
  })
return output
}
function shouldDrawerRender(){
  let output = true
  if(mandantGroup[mandantTabIndex].art === "KIND"){
    output=false
  }
  if(card === "newKind" || card === "newMandant"){
output = false
  }
  return output
}
  function addVertag(event) {
    if (selectedVertraege.length <= 7) {
      setSelectedVertraege([
        ...selectedVertraege,
        { id: event.id, name: event.row.sparte, tarifType: event.row.icon },
      ]);
      setCard(event.row.icon)
      setVertragId(event.id)
      toggleOpenDialog(true)
    } else {
      alert("Es können nicht mehr als 8 Verträge geöffnet werden");
    }
  }
  function initForm(tarifType){
      setCard(tarifType)
    toggleOpenVertragHinzufuegen(false);
  }
 
  //sx={{backgroundColor:colorProperties.BUTTONCOLOR, color:colorProperties.BUTTONCOLOR+" !important"}}
  function addNewMandant(mandantType){
    if(mandantType === "P"){
       setCard("newMandant")
    setAnchorElMandantHinzufuegen(null);
    } if(mandantType === "K"){
      setCard("newKind")
    setAnchorElMandantHinzufuegen(null);
    }
  }
  return (
    <div>
      <div
        className="menuBarTop"
        style={{
          backgroundColor: colorProperties.MAINCOLOR,
          visibility: loaded ? "visible" : "hidden",
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          className="subTab"
          centered
        >
          <Tab label="Personendaten" className="subTab" />
          <Tab label="Verträge" />
        </Tabs>
      </div>
      <div
        className="menuBarBottom"
        style={{ backgroundColor: colorProperties.COLOR2 }}
      >
        {tabIndex === 0 ? (
          <Tabs
            value={mandantTabIndex}
            sx={{ height: "39px !important" }}
            onChange={handleChangeSubTabMandant}
            variant="scrollable"
            className="subTab"
          >
            {mandantGroup.map((mandant, index) => {
              return (
                <Tab
                  className="vertragTab"
                  value={index}
                  label={
                    <p
                      style={{
                        margin: "10px 0px 0px 0px",
                      }}
                    >
                      {mandant.mandant.vorname + " " + mandant.mandant.nachname}
                    </p>
                  }
                ></Tab>
              );
            })}
          </Tabs>
        ) : (null)}
        {tabIndex === 0 ? (
          <>
          <Button
            className="hinzufuegeButton"
            variant="contained"
            style={{ backgroundColor: buttonColor.color }}
            endIcon={<KeyboardArrowDown style={{marginRight:"10px"}}/>}
            id="new-mandant-button"
            aria-controls={openMandantHinzufuegen ? 'new-mandant-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMandantHinzufuegen ? 'true' : undefined}
            onClick={handleClickMandantHinzufuegen}
          >
            <i style={{ marginRight: "10px", marginLeft:"5px" }} class="fa fa-user-plus fa-lg" />{" "}
            Neuer Mandant
          </Button>
          <Menu       anchorEl={anchorElMandantHinzufuegen}
        open={openMandantHinzufuegen}
        onClose={handleCloseMandantHinzufuegen}
        id="new-mandant-menu"
        aria-labelledby="new-mandant-button"
        sx={{width:"208px"}}
      >
       {!isPartnerVorhanden() ? <MenuItem  
sx={{width:"208px", justifyContent:"left !important"}}
className="newMandantList"
onClick={()=>addNewMandant("P")}
><i class="fa fa-user fa-lg" style={{marginLeft:"5px", marginRight:"10px"}} />Partner Hinzufügen</MenuItem>
:null}
        <MenuItem

className="newMandantList"
sx={{width:"208px", justifyContent:"left !important"}}
onClick={()=>addNewMandant("K")}
><i class="fa fa-child fa-lg" style={{marginLeft:"5px", marginRight:"10px"}} /> Kind Hinzufügen</MenuItem>
          </Menu>
          </>
        ) : (
          <Button
            className="hinzufuegeButton"
            variant="contained"
            onClick={handleVertragHinzufuegenOpen}
            style={{
              backgroundColor: buttonColor.color,
              visibility: loaded ? "visible" : "hidden",
            }}
          >
            <i style={{ marginRight: "10px" }} class="fa fa-plus" />
            Vertrag hinzufügen
          </Button>
        )}
      </div>
      <Dialog
        fullScreen
        open={openVertragHinzufuegen}
        onClose={handleVertragHinzufuegenClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar sx={{ backgroundColor: colorProperties.COLOR1 }}>
            <IconButton
              edge="start"
              sx={{ color: buttonColor.color + " !important" }}
              onClick={handleVertragHinzufuegenClose}
            >
              <Close />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, color: "white" }}
              variant="h6"
              component="div"
            >
              Vertrag Hinzufügen
            </Typography>
          </Toolbar>
        </AppBar>
        <div
          className="balken"
          style={{ backgroundColor: colorProperties.COLOR2 }}
        >
          <Typography
            variant="h6"
            style={{ color: colorProperties.COLOR1 }}
            className="headingVertragHinzufuegen"
          >
            Arbeitskraftabsicherung
          </Typography>
        </div>
        <div>
        <Button
        onClick={()=>initForm("RISIKO")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="fa fa-bed fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Todesfall
        </Button>
        <Button
        onClick={()=>initForm("BU")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="fa fa-wheelchair fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          BU / EU / GF
        </Button>
        <Button
        onClick={()=>initForm("DREADDISEASE")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="fa fa-bug fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          DD / Schwere Krankheiten
        </Button>
        <Button
        onClick={()=>initForm("UNFALL")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-accident fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
          sx={{width:"230px"}}
        >
         Unfallversicherung
        </Button>
        </div>
        <div
          className="balken"
          style={{ backgroundColor: colorProperties.COLOR2 }}
        >
          <Typography
            variant="h6"
            style={{ color: colorProperties.COLOR1 }}
            className="headingVertragHinzufuegen"
          >
            {"Altersvorsorge"}
          </Typography>
        </div>
        <div>
        <Button
        onClick={()=>initForm("RUERUP")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                marginLeft:"2px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-oldru fa-lg"
              ></i>
            </div>
          }
          style={{width:"218px"}}
          className="selectNewVertrag"
        >
         Basisrente/Ruerup
        </Button>
        <Button
        onClick={()=>initForm("RIESTER")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                marginLeft:"2px",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          style={{width:"225px"}}
          className="selectNewVertrag"
        >
         Förderrente/Rieser
        </Button>
        <Button
        onClick={()=>initForm("bAVNEW")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                marginLeft:"2px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-factory fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         bAV
        </Button>
        <Button
        onClick={()=>initForm("GESETZLICHE_AV")} //Richig? TODO
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                marginLeft:"2px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
 
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-old fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Private Altersvorsorge
        </Button>
        <Button
        onClick={()=>initForm("PRIVATRENTE")} 
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                marginLeft:"2px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-paragraph fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         GRV
        </Button>
   
        <Button
        onClick={()=>initForm("")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                marginLeft:"2px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-old fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Rente (To Be Added)
        </Button>
        </div>
        <div
          className="balken"
          style={{ backgroundColor: colorProperties.COLOR2 }}
        >
          <Typography
            variant="h6"
            style={{ color: colorProperties.COLOR1 }}
            className="headingVertragHinzufuegen"
          >
            Einnahmen und Ausgaben
          </Typography>
        </div>
        <div>
        <Button
        onClick={()=>initForm("EINKOMMEN_GEHALT")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Einkommen / Gehalt
        </Button>
        <Button
        onClick={()=>initForm("EINNAHMEN")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Einnahmen
        </Button>
        <Button
        onClick={()=>initForm("EINKOMMEN_MINIJOB")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Einkommen aus geringfügiger Beschäftigung
        </Button>
        <Button
        onClick={()=>initForm("EINKOMMEN_SELBSTAENDIGER")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Einkommen aus selbstständiger Beschäftigung
        </Button>
        <Button
        onClick={()=>initForm("AUSGABEN")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Lebensunterhaltskosten
        </Button>
        <Button
        onClick={()=>initForm("WOHNSITUATION")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Wohnsituation
        </Button>
        <Button
        onClick={()=>initForm("WOHNSITUATION")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Gas
        </Button>
        <Button
        onClick={()=>initForm("WOHNSITUATION")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Strom
        </Button>
        <Button
        onClick={()=>initForm("SONSTIGE_ZAHLUNG")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Sonstige Zahlungsverpflichtigungen
        </Button>
        </div>
        
        <div
          className="balken"
          style={{ backgroundColor: colorProperties.COLOR2 }}
        >
          <Typography
            variant="h6"
            style={{ color: colorProperties.COLOR1 }}
            className="headingVertragHinzufuegen"
          >
            Pflege
          </Typography>
        </div>
        <div>
        <Button
        onClick={()=>initForm("PFLEGEKOSTEN")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-doctor fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Pflege
        </Button>
        </div>
        <div
          className="balken"
          style={{ backgroundColor: colorProperties.COLOR2 }}
        >
          <Typography
            variant="h6"
            style={{ color: colorProperties.COLOR1 }}
            className="headingVertragHinzufuegen"
          >
            Vermögen und Verbindlichkeiten
          </Typography>
        </div>
        <div>
        <Button
        onClick={()=>initForm("KONSUMKREDIT")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="fa fa-credit-card fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Kredit
        </Button>
        <Button
        onClick={()=>initForm("DARLEHEN")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-safe fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Darlehen
        </Button>
        <Button
        onClick={()=>initForm("BANKPRODUKTE")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-bank fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Bankprodukte
        </Button>
        <Button
        onClick={()=>initForm("VWL_BAUSPAREN")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-home fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Vwl und Bausparen
        </Button>
        <Button
        onClick={()=>initForm("IMMOBILIENBESTAND")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-building fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Immobilienbestand
        </Button>
        <Button
        onClick={()=>initForm("SACHWERT")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-building fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Sachwert
        </Button>
        <Button
        onClick={()=>initForm("BETEILIGUNGEN")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-pie fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Beteiligungen / AiF
        </Button>
        <Button
        onClick={()=>initForm("INVESTMENT")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-file fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Investment
        </Button>
        </div>
        <div
          className="balken"
          style={{ backgroundColor: colorProperties.COLOR2 }}
        >
          <Typography
            variant="h6"
            style={{ color: colorProperties.COLOR1 }}
            className="headingVertragHinzufuegen"
          >
            Gesundheit
          </Typography>
        </div>
        <div>
        <Button
        onClick={()=>initForm("KVV")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         PKV
        </Button>
        <Button
        onClick={()=>initForm("KVZ")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         KV Zusatz
        </Button>
        <Button
        onClick={()=>initForm("GESETZLICHE_KRANKEN")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-ambulance fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         GKV
        </Button>
        </div>
        <div
          className="balken"
          style={{ backgroundColor: colorProperties.COLOR2 }}
        >
          <Typography
            variant="h6"
            style={{ color: colorProperties.COLOR1 }}
            className="headingVertragHinzufuegen"
          >
            Vermögenssicherung
          </Typography>
        </div>
        <div>

          
        <Button
        onClick={()=>initForm("PRIVATHAFTPFLICHT")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-cop fa-lg"
              ></i>
            </div>
          }
          style={{width:"222px"}}
          className="selectNewVertrag"
        >
         Privathaftpflicht
        </Button>
        <Button
        onClick={()=>initForm("HAUSRAT")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-bike fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Hausrat
        </Button>
        <Button
        onClick={()=>initForm("WOHNGEBAEUDE")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-thunder fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Wohngebäude
        </Button>
        <Button
        onClick={()=>initForm("RECHTSSCHUTZ")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-legal fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Rechtschutz
        </Button>
        <Button
        onClick={()=>initForm("")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="fa fa-car fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        KFZ-Versicherung
        </Button>
        <Button
        onClick={()=>initForm("AUTOMOBILCLUB")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="fa fa-car fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Automobilclub
        </Button>

        <Button
        onClick={()=>initForm("HUNDEHALTERHAFTPFLICHT")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
                marginLeft:"10px"
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",

                }}
                class="icon icon-fa-font-dog fa-lg"
              ></i>
            </div>
          }
          style={{width:"278px"}}
          className="selectNewVertrag"
        >
         Hundehalterhaftpflicht
        </Button>

        <Button
        onClick={()=>initForm("PFERDEHALTERHAFTPFLICHT")}
        startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-horse fa-lg"
              ></i>
            </div>
          }
          style={{width:"238px"}}
          className="selectNewVertrag"
        >
        Pferdehalterpflicht
        </Button>
        

        </div>
      </Dialog>
      {shouldDrawerRender() ?
      <Drawer
        id="drawer"
        variant="permanent"
        open={open}
        PaperProps={{ className: "toolBar" }}
        sx={{
          backgroundColor: colorProperties.COLOR1,
          visibility: loaded ? "visible" : "hidden",
        }}
      >
        {tabIndex === 0 ? personenbezogeneDaten : vertragGruppen}
      </Drawer>:null}
      {tabIndex === 1 ? (
        <div
          className={emptyWindowStyle}
          style={{ visibility: uebersichtVisibility }}
        >
          <Typography
            sx={{ visibility: uebersichtVisibility }}
            variant="h5"
            style={{
              position: "absolute",
              left: "12vw",
              marginTop: "5vh",
              width: "25vw",
            }}
          >
            {vertragUebersichtHeader}
          </Typography>

          <Box className="rahmen" sx={{ visibility: uebersichtVisibility }}>
            <DataGrid
              sx={{ borderRadius: "20px 20px 0px 0px" }}
              hideFooter
              rows={setRows(assets, tariftypeArray)}
              onRowDoubleClick={(event) => {
                addVertag(event);
              }}
              rowHeight={60}
              columns={columns}
            />
          </Box>
        </div>
      ) : null}
    </div>
  );
}
export default SideMenue;
/*
     <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Beamtenhilfe
        </Button>
        <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Berufständische Versicherung
        </Button>
        <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Beamtenversorgung
        </Button>

        <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Bauherrenhaftpflicht
        </Button>
        <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Wassersporthaftpflicht
        </Button>
        Investmentfonds fehlt jz auch
        <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Gewässerschadenhaftpflicht
        </Button>
        <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Glas
        </Button>
                
        <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
        Hausbesitzerhaftpflicht
        </Button>
                <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Jagdhaftpflicht
        </Button>
                <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Gewerbe
        </Button>
        <Button
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
         Sonstige Sachversicherungen
        </Button>
        INVESTMENDFONDS
*/