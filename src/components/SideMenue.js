import Arrow from "../mockUI/angle-right-solid.svg";
import "../fontAwesome/analyse-font-icons-1.0.2/css/analyse-font-icons.css";
import "../fontAwesome/font-awesome-4.4.0/css/font-awesome.css";
import "../fontAwesome/font-awesome-4.7.0/css/font-awesome.css";

import axios from "axios";
import MuiDrawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import qs from "query-string";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useContext, forwardRef } from "react";
import { Context } from "../context/Context";


import {
  Close,
  KeyboardArrowDown,
  Search
} from "@material-ui/icons";
import { styled, useTheme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Popover from "@mui/material/Popover";

import VertragComponents from "./VertragComponents";
import { setName } from "./mapAssets";

import "./css/sideMenue.css";
import "./css/newSideMenue.css";
import { useState } from "react";
import { TextField } from "@mui/material";
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
function SideMenue({
  assets,
  colorProperties,
  setCard,
  loaded,
  card,
  selectedVertraege,
  setSelectedVertraege,
  subTabIndex,
  setSubTabIndex,
  tabIndex,
  setTabIndex,
  uebersichtVisibility,
  setUebersichtVisibility,
  getDataWithLogin,
  setLoaded
}) {
  const allVertraege = ["SHOWALL"];
  const params = useParams();
  const theme = useTheme();
  const {
    setCardClassName,
    mandantGroup,
    mandantTabIndex,
    setMandantTabIndex,
    setVertragId,
    vertragId,
    openDialog,
    toggleOpenDialog,
    login,
    searchString,
    setSearchString
  } = useContext(Context);
  const [tariftypeArray, setTariftypeArray] = useState(allVertraege);

  const [tableData, setTableData] = useState({})
  const [anchorElMandantHinzufuegen, setAnchorElMandantHinzufuegen] =
    useState(null);
  const [anchorElAktionen, setAnchorElAktionen] = useState(null);
  const openMandantHinzufuegen = Boolean(anchorElMandantHinzufuegen);
  const openAktionen = Boolean(anchorElAktionen);
  const handleClickMandantHinzufuegen = (event) => {
    setAnchorElMandantHinzufuegen(event.currentTarget);
  };
  const handleCloseMandantHinzufuegen = () => {
    setAnchorElMandantHinzufuegen(null);
  };
  const handleClickAktionen = (event, values) => {
    event.stopPropagation();
setTableData({assetId:values.assetId, tarifTypeId:values.tarifTypeId})
    setAnchorElAktionen(event.currentTarget);
    setAssetId(values.assetId);
  };
  const handleCloseAktionen = () => {
    setAnchorElAktionen(null);
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
  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  const buttonColor = { color: colorProperties.BUTTONCOLOR };
  function pushData(asset, index) {
    let output = {};

    output = {
      icon: asset.tarifTypeId,
      id: asset.id,
      sparte: setName(asset.name, asset.tarifTypeId),
      gesellschaft: asset.gesellschaft,
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
      AktionButton: {assetId:asset.id,tarifTypeId:asset.tarifTypeId},
    };

    return output;
  }
  function setRows(assets, tarifTypes) {
    let output = [];
    //
    let indexOrderedTariftypes = 0;
    if (tarifTypes[0] !== "SHOWALL") {
      assets.map((asset) => {
        tarifTypes.map((tarifType) => {
          if (tarifType === asset.tarifTypeId) {
            output.push(pushData(asset, indexOrderedTariftypes));
            indexOrderedTariftypes = indexOrderedTariftypes + 1;
          }
        });
      });
    } else if (tarifTypes[0] === "SHOWALL") {
      assets.map((asset, index) => {
        output.push(pushData(asset, index));
      });
    }
    return output;
  }
  function setIcon(tarifType) {
    let output;
    switch (tarifType) {
      case "STROM":
        output = <i class="icon icon-fa-font-plug fa-2x"></i>;
        break;
      case "GAS":
        output = <i class="fa fa-fire fa-2x"></i>;
        break;
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
        case "FONDSLEBEN":
          case "PRIVATRENTE":
      case "KAPITALLEBEN":
        output = <i class="icon icon-fa-font-old fa-2x"></i>;
        break;
        case "FONDSRENTEN":
          output = <i class="icon icon-fa-font-cash fa-2x"></i>;
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
        break;
      case "ZUSATZVERSORGUNGSKASSE":
        output = <i class="icon icon-fa-font-factory fa-2x"></i>;
        break;
        break;
      case "PENSIONSKASSE_3":
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
        output = <i class="fa fa-shopping-cart fa-2x"></i>;
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
      case "WOHNSITUATION":
        output = <i class="icon icon-fa-font-apartment fa-2x"></i>;
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
        output = <i class="icon icon-fa-font-case fa-2x"></i>;
        break;
      case "BERUFSSTAENDISCHE_VORSORGE":
        output = <i class="fa fa-briefcase fa-2x"></i>;
        break;
      case "BEAMTENVERSORGUNG":
        output = <i class="icon icon-fa-font-tie fa-2x"></i>;
        break;
      case "BAUHERRENHAFTPFLICHT":
        output = <i class="icon icon-fa-font-work fa-2x"></i>;
        break;
      case "WASSERSPORTHAFTPFLICHT":
        output = <i class="icon icon-fa-font-boat fa-2x"></i>;
        break;
      case "GEWAESSERSCHADENHAFTPFLICHT":
        output = <i class="icon icon-fa-font-oil fa-2x"></i>;
        break;
      case "RENTE":
        output = <i class="icon icon-fa-font-electric fa-2x"></i>;
        break;
      case "JAGDHAFTPFLICHT":
        output = <i class="icon icon-fa-font-hunter fa-2x"></i>;
        break;
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
    "RENTE",
    "DIREKTZUSAGE",
    "PENSIONSFONDS_3",
    "ZUSATZVERSORGUNGSKASSE",
    "PENSIONSKASSE_3",
    "KAPITALVERSICHERUNG",
    "DIREKT_40",
    "PENSIONSKASSE_40",
    "UNTERSTUETZUNGSKASSE",
    "DIREKT_3",
    "GESETZLICHE_AV",
    "BERUFSSTAENDISCHE_VORSORGE",
    "BEAMTENVERSORGUNG",
    "FONDSLEBEN",
    "PRIVATRENTE",
    "KAPITALLEBEN",
    "FONDSRENTEN"
  ]; //kapitalversicherung, investmentfonds muss weitermachen aber styling zählt mehr        case "":

  const vermoegenssicherungTarifType = [
    "PRIVATHAFTPFLICHT",
    "HUNDEHALTERHAFTPFLICHT",
    "PFERDEHALTERHAFTPFLICHT",
    "JAGDHAFTPFLICHT",
    "BAUHERRENHAFTPFLICHT",
    "WASSERSPORTHAFTPFLICHT",
    "GEWAESSERSCHADENHAFTPFLICHT",
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
    "STROM",
    "GAS"
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
  const pflegeTariftype = ["PFLEGEKOSTEN", "PFLEGERENTEN", "PFLEGETAGEGELD"];
  const gesundheitTarifType = [
    "GESETZLICHE_KRANKEN",
    "KVV",
    "KVZ",
    "BEAMTENBEIHILFE",
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
      field: "gesellschaft",
      headerName: "Gesellschaft",
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
    {
      field: "AktionButton",
      headerName: "",
      width: 180,
      renderCell: (params) => {
        return (
          <Button
            endIcon={<KeyboardArrowDown />}
            onClick={(e) => handleClickAktionen(e, params.value)}
            id={"new-aktions-menu-" + params.value}
            aria-labelledby={"new-aktions-button-" + params.value}
            style={{
              backgroundColor: buttonColor.color,
              color: "whitesmoke",
              width: "180px",
            }}
          >
            Aktionen
          </Button>
        );
      },
    },
  ];

  const [open, setOpen] = useState(false);
  const [openFileWarning, toggleOpenFileWarning] = useState(false);
  const [assetId, setAssetId] = useState("");
  const [openVertragHinzufuegen, toggleOpenVertragHinzufuegen] =
    useState(false);
  const [vertragUebersichtHeader, setVertragUebersichtHeader] =
    useState("Alle Verträge");
  const [emptyWindowStyle, setEmptyWindowStyle] = useState("emptyWindow");
  const [localSearchString,setLocalSearchString ] = useState("");
  const [descriptionStyle, setDescriptionStyle] = useState(
    "buttonDescriptionOnExit"
  );
  const [openNextQuestion, toggleOpenNextQuestion] = useState(false);

  const handleFileWarningOpen = () => {
    toggleOpenFileWarning(true);
    setCard(tableData.tarifTypeId)
  };
  const handleFileWarningClose = () => {
    toggleOpenFileWarning(false);
    toggleOpenNextQuestion(false);
  };
  const transitionNextQuestion = () => {
    toggleOpenNextQuestion(true);
  };
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
    if (newValue === 0) {
      setCard("PERSONALDATEN");
      toggleOpenDialog(true);
    }
    if (newValue === 1) {
      toggleOpenDialog(false);
    }
  };
  var rememberedSubTabValue = 0;
  const handleChangeSubTab = (event, newValue) => {
    setSubTabIndex(newValue);
    rememberedSubTabValue = newValue;
    console.log("drin");

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
    if (mandantGroup[newValue].art === "KIND") {
      setCard("KIND");
    } else {
      setCard("PERSONALDATEN");
    }
  };
  var addKuendigung = (login) => {
    return {
      method: "post",
      url: "https://jcp-suite.de/suite/insuranceDocument",
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + login,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
    };
  };
  var submitCopyVertrag = (login) => {
    return {
      method: "post",
      url: "https://jcp-suite.de/suite/analyseApp",
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + login,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
    };
  };
  var submitDeleteVertrag = (login) => {
    return {
      method: "post",
      url: "https://jcp-suite.de/suite/analyseApp",
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + login,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
    };
  };
  function deleteAsset(keepFiles) {
    const dataPaket = qs.stringify({
      action: "deleteAsset",
      assetId: assetId,
      deleteAttachedFiles: keepFiles,
    });
    axios
      .post(
        submitDeleteVertrag(login).url,
        dataPaket,
        submitDeleteVertrag(login)
      )
      .then((response) => {
        alert("deleted");
      })
      .catch((err) => alert(err));
      toggleOpenNextQuestion(false)
      toggleOpenFileWarning(false)
      setTimeout(()=>{
      getDataWithLogin(login)

      },200)
      setTimeout(()=>{
        setLoaded(false)
      },400)
      setTimeout(()=>{
      setLoaded(true)
    },600)
  }
  function deletePerson() {
    let deleteParams = {};
    if (card === "KIND" || card === "PERSONALDATEN") {
      setMandantTabIndex(0);
      deleteParams = {
        id: mandantGroup[mandantTabIndex].mandantId,
        mandantId: mandantGroup[0].mandantId,
        action: "deletePerson",
      };
      let dataPaket = qs.stringify(deleteParams);
      axios
        .post(
          submitDeleteVertrag(login).url,
          dataPaket,
          submitDeleteVertrag(login)
        )
        .then((response) => {
          setTimeout(() => {
            //getDataPersonendatenLiveSuite(login, true);
            //setLoaded(false);
            if (card === "KIND") {
              setCard("PERSONALDATEN");
            }
            setTimeout(() => {
              //setLoaded(true);
            }, 300);
          }, 100);
        })
        .catch((err) => alert(err));
    }
  }
  function copyVertrag(event) {
    const dataPaket = qs.stringify({
      action: "copyAsset",
      assetId: assetId,
    });
    axios
      .post(submitCopyVertrag(login).url, dataPaket, submitCopyVertrag(login))
      .then((response) => {
        console.log(response)
        setVertragId(response.data.copyId);
        getDataWithLogin(login)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  function submitKuendigung() {
    const dataPaket = qs.stringify({
      action: "addKuendigung",
      mandantId: params.mandantId,
      assetId: assetId,
    });
    axios
      .post(addKuendigung(login).url, dataPaket, addKuendigung(login))
      .then((response) => {
        alert("Kündigung wurde erfolgreich erstellt");
      })
      .catch((error) => {
        alert("Kündigung wurde nicht erfolgreich erstellt");
      });
  }
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
        <div
          className="buttonContainer"
          onClick={() => setCard("PERSONALDATEN")}
        >
          <Typography className={descriptionStyle}>Person</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => setCard("PERSONALDATEN")}
            disableTouchRipple
            disableRipple
            disableFocusRipple
          >
            <i class="fa fa-user fa-2x" style={{ ...buttonColor }} />
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={() => setCard("AUSWEIS")}>
          <Typography className={descriptionStyle}>Legitimation</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => setCard("AUSWEIS")}
            disableTouchRipple
            disableRipple
            disableFocusRipple
          >
            <i class="fa fa-book fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div
          className="buttonContainer"
          onClick={() => setCard("AUSBILDUNGBERUF")}
        >
          <Typography className={descriptionStyle}>
            Ausbildung / Beruf
          </Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => setCard("AUSBILDUNGBERUF")}
            disableTouchRipple
            disableRipple
            disableFocusRipple
          >
            <i class="fa fa-graduation-cap fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div
          className="buttonContainer"
          onClick={() => setCard("ERWEITERTEBERUFSFRAGEN")}
        >
          <Typography className={descriptionStyle}>
            Erweiterte Berufsfragen
          </Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => setCard("ERWEITERTEBERUFSFRAGEN")}
            disableTouchRipple
            disableRipple
            disableFocusRipple
          >
            <i class="fa fa-certificate fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={() => setCard("ARBEITGEBER")}>
          <Typography className={descriptionStyle}>Arbeitgeber</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => setCard("ARBEITGEBER")}
            disableTouchRipple
            disableRipple
            disableFocusRipple
          >
            <i class="fa fa-briefcase fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div
          className="buttonContainer"
          onClick={() => setCard("KOMMUNIKATION")}
        >
          <Typography className={descriptionStyle}>Kommunikation</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => setCard("KOMMUNIKATION")}
            disableTouchRipple
            disableRipple
            disableFocusRipple
          >
            <i class="fa fa-phone fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={() => setCard("STEUERN")}>
          <Typography className={descriptionStyle}>Steuern</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => setCard("STEUERN")}
            disableTouchRipple
            disableRipple
            disableFocusRipple
          >
            <i class="icon-fa-font-files fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div
          className="buttonContainer"
          onClick={() => setCard("BANKVERBINDUNG")}
        >
          <Typography className={descriptionStyle}>Bank</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => setCard("BANKVERBINDUNG")}
            disableTouchRipple
            disableRipple
            disableFocusRipple
          >
            <i class="fa fa-bank fa-2x" style={buttonColor}></i>
          </Button>
          <Divider sx={{ width: "100%" }} />
        </div>
        <div className="buttonContainer" onClick={() => setCard("GESUNDHEIT")}>
          <Typography className={descriptionStyle}>Gesundheit</Typography>
          <Button
            className="iconButtonToolbar"
            onClick={() => setCard("GESUNDHEIT")}
            disableTouchRipple
            disableRipple
            disableFocusRipple
          >
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
  function isPartnerVorhanden() {
    let output = false;
    mandantGroup.map((mandant) => {
      if (mandant.art === "PARTNER") {
        output = true;
      }
    });
    return output;
  }
  function shouldDrawerRender() {
    let output = true;
    if (mandantGroup[mandantTabIndex].art === "KIND") {
      output = false;
    }
    if (card === "newKind" || card === "newMandant") {
      output = false;
    }
    if (tabIndex === 1) {
      output = true;
    }
    return output;
  }
  function addVertagAktionen(event) {
    setCard(tableData.tarifTypeId);
    setVertragId(tableData.assetId);
    toggleOpenDialog(true);
  }
  function addVertag(event) {
    console.log(event)
      setCard(event.row.icon);
      setVertragId(event.id);
      toggleOpenDialog(true);
  }
  function onChangeSearch(event){
    setLocalSearchString(event.target.value)
  }
  //sx={{backgroundColor:colorProperties.BUTTONCOLOR, color:colorProperties.BUTTONCOLOR+" !important"}}
  function addNewMandant(mandantType) {
    if (mandantType === "P") {
      setCard("newMandant");
      setAnchorElMandantHinzufuegen(null);
    }
    if (mandantType === "K") {
      setCard("newKind");
      setAnchorElMandantHinzufuegen(null);
    }
  }
  function isKidOrPerson(art) {
    let output;
    if (art === "MANDANT" || art === "PARTNER") {
      output = "fa fa-user fa-lg";
    }
    if (art === "KIND") {
      output = "fa fa-child fa-lg";
    }
    return output;
  }
  return (
    <div>
      <div
        className="menuBarTop"
        style={{
          backgroundColor: colorProperties.MAINCOLOR,
          visibility: loaded ? "visible" : "hidden",
    justifyContent: "center !important"
  }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          className="subTab"
          centered
        >
          <Tab label="Personendaten" />
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
                      <i class={isKidOrPerson(mandant.art)}></i>{" "}
                      {" " +
                        mandant.mandant.vorname +
                        " " +
                        mandant.mandant.nachname}
                    </p>
                  }
                ></Tab>
              );
            })}
          </Tabs>
        ) : null}
        {tabIndex === 0 ? (
          <>
            <Button
              className="hinzufuegeButtonMandant"
              variant="contained"
              style={{ backgroundColor: buttonColor.color }}
              endIcon={<KeyboardArrowDown style={{ marginRight: "10px" }} />}
              id="new-mandant-button"
              aria-controls={
                openMandantHinzufuegen ? "new-mandant-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={openMandantHinzufuegen ? "true" : undefined}
              onClick={handleClickMandantHinzufuegen}
            >
              <i
                style={{ marginRight: "10px", marginLeft: "5px" }}
                class="fa fa-user-plus fa-lg"
              />{" "}
              Neuer Mandant
            </Button>
            <Menu
              anchorEl={anchorElMandantHinzufuegen}
              open={openMandantHinzufuegen}
              onClose={handleCloseMandantHinzufuegen}
              id="new-mandant-menu"
              aria-labelledby="new-mandant-button"
              sx={{ width: "208px" }}
            >
              {!isPartnerVorhanden() ? (
                <MenuItem
                  sx={{ width: "208px", justifyContent: "left !important" }}
                  className="newMandantList"
                  onClick={() => addNewMandant("P")}
                >
                  <i
                    class="fa fa-user fa-lg"
                    style={{ marginLeft: "5px", marginRight: "10px" }}
                  />
                  Partner Hinzufügen
                </MenuItem>
              ) : null}
              <MenuItem
                className="newMandantList"
                sx={{ width: "208px", justifyContent: "left !important" }}
                onClick={() => addNewMandant("K")}
              >
                <i
                  class="fa fa-child fa-lg"
                  style={{ marginLeft: "5px", marginRight: "10px" }}
                />{" "}
                Kind Hinzufügen
              </MenuItem>
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
            <Search/>
            <TextField
            value={localSearchString}
            onChange={(e)=>onChangeSearch(e)}
            sx={{
              backgroundColor:"whitesmoke",
              marginRight:"50px",
              borderRadius:"10px",
              height:"45px"
            }}
            InputLabelProps={{
              height:"45px"
            }}
            inputProps={{
              style: {
                height:"12px"
            }}
            }
            >
              

            </TextField>
          </Toolbar>
        </AppBar>
        <VertragComponents
        setCard={setCard}
              toggleOpenVertragHinzufuegen={toggleOpenVertragHinzufuegen}      
              localSearchString={localSearchString}
        />
      </Dialog>
      {shouldDrawerRender() ? (
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
        </Drawer>
      ) : null}
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
      <Dialog
        open={openFileWarning}
        onClose={handleFileWarningClose}
        className="dialogWarning"
        PaperComponent={PaperComponent}
        maxWidth={"lg"}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title" cursor="move">
          Warnung
        </DialogTitle>
        <DialogContent>
          {openNextQuestion ? (
            <div className="gridWarningText">
              <i
                style={{ marginTop: "15px" }}
                class="fa fa-info-circle fa-3x"
              ></i>
              <p>
                Sollen die dem Vertrag zugeordneten Dateien oder Fotos auch
                gelöscht werden?
              </p>
            </div>
          ) : (
            <div className="gridWarningText">
              <i
                style={{ marginTop: "15px" }}
                class="fa fa-question-circle fa-3x"
              ></i>
              <p>Wollen Sie diesen Baustein wirklich löschen?</p>
            </div>
          )}
          {openNextQuestion ? (
            <div>
              <Button className="jaWarning" onClick={() => deleteAsset(true)}>
                Ja
              </Button>
              <Button
                className="neinWarning"
                onClick={() => deleteAsset(false)}
              >
                Nein
              </Button>
            </div>
          ) : (
            <div>
              <Button
                className="jaWarning"
                onClick={() => transitionNextQuestion()}
              >
                Ja
              </Button>
              <Button
                className="neinWarning"
                onClick={() => handleFileWarningClose()}
              >
                Nein
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <Popover
        open={openAktionen}
        onClose={handleCloseAktionen}
        anchorEl={anchorElAktionen}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div style={{ display: "flex", flexFlow: "column wrap" }}>
          <Button
            startIcon={<i class="fa fa-square"></i>}
            sx={{
              color: "black",
              justifyContent: "flex-start",
            }}
            onClick={() => submitKuendigung()}
          >
            Kündigung erstellen
          </Button>
          <Button
            sx={{
              color: "black",
              justifyContent: "flex-start",
            }}
            startIcon={<i class="fa fa-check"></i>}
          >
            Übertragen
          </Button>
          <Button
            startIcon={<i class="fa fa-square"></i>}
            sx={{
              color: "black",
              justifyContent: "flex-start",
            }}
            disabled
          >
            Kündigen
          </Button>
          <Divider></Divider>
          <Button
            startIcon={<i class="fa fa-pencil"></i>}
            sx={{
              color: "black",
              justifyContent: "flex-start",
            }}
            onClick={(event) => addVertagAktionen(event)}
          >
            Baustein editieren
          </Button>
          <Button
            startIcon={<i class="fa fa-gear"></i>}
            sx={{
              color: "black",
              justifyContent: "flex-start",
            }}
          >
            Typenänderung
          </Button>
          <Button
            sx={{
              color: "black",
              justifyContent: "flex-start",
            }}
            startIcon={<i class="icon icon-fa-font-files"></i>}
            onClick={(event) => copyVertrag(event)}
          >
            Baustein kopieren
          </Button>
          <Button 
            startIcon={<i class="fa fa-trash"></i>}
            sx={{
              color: "black",
              justifyContent: "flex-start",
            }}
            onClick={() => handleFileWarningOpen()}
          >
            Baustein löschen
          </Button>
        </div>
      </Popover>
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
