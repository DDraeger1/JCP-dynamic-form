import "./css/dateiFoto.css";
import { Context } from "../context/Context";
import { Box, Button, Typography, Drawer, Icon } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import qs from "query-string";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import { FileCopy, Close } from "@material-ui/icons";
import { styled } from "@mui/material/styles";

import InnerImageZoom from "react-inner-image-zoom";
import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  useReducer,
} from "react";
import { useParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import { IconButton } from "@material-ui/core";

import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import axios from "axios";
function DateiFotoUI({ login, card, visibility, checkIfPersonendaten,mandantGroup,colorProperties }) {
  const [displayFile, setDisplayFile] = useState();
  const [zoomScale, setZoomScale] = useState(1);
  const { vertragId, setRowLength,mandantTabIndex } = useContext(Context);
  const [rows, setRows] = useState([]);
  const [imageUpload, setImageUpload] = useState();
  const [purpose, setPurpose] =useState("")

  var getFileByID = (login) => {
    return {
      method: "get",
      url: "https://jcp-suite.de/suite/file.json?action=getFileById&id=37001a2b-a07a-11ec-a423-001c4270ffe9&width=459&height=110&ipad=true",
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + login,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
    };
  };
  const params = useParams();

  const Input = styled("input")({
    display: "none",
  });

  const fetchImage = async (id) => {
    const res = await fetch(
      "https://jcp-suite.de/suite/file.json?action=getFileById&id=" +
        id +
        "&ipad=true&width=100&height=100",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + login,
        },
      }
    );

    const imageBlob = await res.blob();
    console.log(imageBlob);
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setDisplayFile(imageObjectURL);
  };

  console.log(mandantGroup);
  const getAllFiles = {
    method: "get",
    url:
      "https://jcp-suite.de/suite/file.json?action=getFilesByMandant&mandantId=" +
      params.mandantId +
      "&limit=500&start=0",
    withCredentials: true,
    headers: { Authorization: "Bearer " + login },
    redirect: "follow",
  };
  const personenDatenList = [
    { card: "PERSONALDATEN", purpose: "PERSONENDATEN-MANDANT" },
    { card: "AUSBILDUNGBERUF", purpose: "AUSBILDUNG-MANDANT" },
    { card: "ERWEITERTEBERUFSFRAGEN", purpose: "berufsfragen-MANDANT" },
    { card: "ARBEITGEBER", purpose: "ARBEITGEBER-MANDANT" },
    { card: "AUSWEIS", purpose: "LEGITIMATION-MANDANT" },
    { card: "KOMMUNIKATION", purpose: "KOMMUNIKATION-MANDANT" },
    { card: "BANKVERBINDUNG", purpose: "BANKDATEN-MANDANT" },
    { card: "GESUNDHEIT", purpose: "GESUNDHEITSFRAGEN-MANDANT" },
    { card: "STEUERN", purpose: "STEUERN-MANDANT" },
  ];
  const axiosGetAllFiles = () => {
    axios(getAllFiles)
      .then((result) => {
        initRows(result.data.data);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };
  useEffect(() => {
    //fetchImage()
    axiosGetAllFiles();
  }, []);
  function downloadImage(id) {
    window.open(
      "https://jcp-suite.de/suite/file.json?action=getFileById&id=" + id,
      "_blank"
    );
  }
  function deleteImage(id) {
    axios.post(
      "https://jcp-suite.de/suite/file.json",
      qs.stringify({ action: "removeFileById", id: id }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + login,
        },
        redirect: "follow",
      }
    );
    setTimeout(() => {
      axiosGetAllFiles();
      setDisplayFile("");
    }, 200);
  }
  function initRows(assetImages) {
    let output = [];
    assetImages.map((image) => {
      personenDatenList.map((list) => {
        if (list.card === card) {
          if (list.purpose === image.purpose) {
            setPurpose(list.purpose)
            output.push({ name: image.name, aktionen: image.id, id: image.id });
          }
        }
      });
      if (
        typeof image.purpose === "null" ||
        typeof image.purpose === "object"
      ) {
        if (image.assetId === vertragId) {
          output.push({ name: image.name, aktionen: image.id, id: image.id });
        }
      }
    });
    setRowLength(output.length);
    setRows(output);
  }
  function onChangeZoomSlider(event) {
    setZoomScale(event.target.value);
  }
  function fileOnChange(event) {
    console.log(event)
  const imageObject = new FormData()
  imageObject.append("description","test")
  imageObject.append("folder","Fotos")
  imageObject.append("groupId","0")
  imageObject.append("mandant",mandantGroup[0].mandantId)
  imageObject.append("file",event.target.files[0])
  if(checkIfPersonendaten(card)){

  imageObject.append("purpose",purpose)
  imageObject.append("activeMandantId",mandantGroup[mandantTabIndex].mandantId)
} else{
  imageObject.append("analyse",params.analyseId)
  imageObject.append("asset",vertragId)
}

axios.post(
  "https://jcp-suite.de/suite//fileupload.html",
  imageObject,
  {
    headers: {
      Authorization: "Bearer " + login,
    }
  }).then((result)=>{
    console.log("success")
  }).catch((error)=>{
    console.log("error")
    console.log(error)
  })

  setTimeout(() => {
    axiosGetAllFiles();
  }, 200);
}

    //https://github.com/bradstiff/react-responsive-pinch-zoom-pan
  // renderCell: (params) => setIcon(params.value),
  //alternative: suche responsive zoom
  // https://jcp-suite.de/suite/file.json?action=getFilesByMandant&mandantId=e5943e40-9eb4-11ec-a423-001c4270ffe9&limit=500&start=0
  /*
  var getBeraterLiveSuite = (login) => {
    return {
      method: "get",
      url: "https://jcp-suite.de/suite/berater.json?start=0&action=getAllBeratersByVorgesetzter",
      withCredentials: true,
      headers: { Authorization: "Bearer " + login },
      redirect: "follow",
    };
  };
      */
  useEffect(() => {
    setDisplayFile("");
  }, [card]);

  function onCellImageClick(event) {
    console.log(event);
    fetchImage(event.row.id);
    //setDisplayFile()
  }

  const columns = [
    {
      field: "name",
      headerName: "name",
      rezisable:true,
      flex:4,
    },
    {
      field: "aktionen",
      headerName: "Aktionen",
      flex:1,
      renderCell: (params) => {
        return (
          <div>
            <IconButton disableTouchRipple disableFocusRipple disableRipple sx={{width:"30px"}} onClick={() => downloadImage(params.value)}>
              <FileCopy />
            </IconButton>
            <IconButton disableTouchRipple disableFocusRipple disableRipple sx={{width:"30px"}} onClick={() => deleteImage(params.value)}>
              <Close />
            </IconButton>
          </div>
        );
      },
    },
  ];
  console.log(rows);
  return (
    <Box
      className="dateiFotoBox"
      sx={{
        visibility: visibility,
        position: visibility === "hidden" ? "fixed" : "relative",
      }}
    >
      {visibility === "hidden" ? null : (
        <div>
          <InnerImageZoom
            src={displayFile}
            zoomScale={zoomScale}
            moveType="drag"
            zoomSrc={displayFile}
            zoomPreload
            hideHint
            hideCloseButton
          />
        </div>
      )}
      <Box className="imgToolbar">
        <ZoomOutIcon />
        <div style={{ width: "88%", marginLeft: "10px", marginRight: "10px" }}>
          <Slider
            defaultValue={1}
            onMouseUp={(event) => onChangeZoomSlider(event)}
            aria-label="Default"
            min={0}
            max={2}
            step={0.1}
            valueLabelDisplay="auto"
          />
        </div>
        <ZoomInIcon />
      </Box>
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid
          onCellClick={(event) => {
            onCellImageClick(event);
          }}
          sx={{ borderRadius: "20px 20px 0px 0px" }}
          hideFooter
          rows={rows}
          rowHeight={40}
          columns={columns}
        />
      </div>
      <label htmlFor="contained-button-file" className="uploadButton" style={{backgroundColor:colorProperties.BUTTONCOLOR+" !important"}}>
        <Input
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={(event)=>fileOnChange(event)}
          style={{backgroundColor:colorProperties.BUTTONCOLOR+" !important"}}
        />
        <Button className="uploadButtonMUI" variant="contained" component="span"  style={{backgroundColor:colorProperties.BUTTONCOLOR+" !important"}}>
          Dateien / Bilder hochladen
        </Button>
      </label>
    </Box>
  );
}
//onClick={} <DataGrid hideFooter columns={columns} rows={rows} />
export default DateiFotoUI;
/*
      <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
*/
