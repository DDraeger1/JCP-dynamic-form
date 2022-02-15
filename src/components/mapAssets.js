import { MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
export function mapAssets(assets) {
  let ids = [];
  let nonVersicherungsnehmerIdIndex = [];
  let nonVersichertePersonIdIndex = [];
  assets.forEach((asset, index) => {
    if (asset.versicherungsnehmerId !== undefined) {
      ids.push({
        id: asset.versicherungsnehmerId,
        tarifTypeId: asset.tarifTypeId,
        vertragId: asset.id,
      });
    } else if (asset.versicherungsnehmerBeide) {
      ids.push({
        id: false,
        tarifTypeId: asset.tarifTypeId,
        vertragId: asset.id,
      });
    }

    /* else{
    ids.push("undefined")
    nonVersicherungsnehmerIdIndex.push(index)
}
})

nonVersicherungsnehmerIdIndex.forEach((index)=>{
if(assets[index].versichertePersonId !== undefined){
    ids.splice(index, 1,{id:assets[index].versichertePersonId,tarifTypeId:assets[index].tarifTypeId})
} else{
    nonVersichertePersonIdIndex.push(index)
}
})
nonVersichertePersonIdIndex.forEach((index)=>{
    if(assets[index].versicherungsnehmerBeide){
        ids.splice(index, 1,{id:"versicherungsnehmerBeide",tarifTypeId:assets[index].tarifTypeId})
    }*/
  });

  //ids.indexOf(asset.analyseId) === -1 ? ids.push(asset.analyseId) : console.log("This item already exists");
  return ids;
}

export function redefineCard(ids, mandantIndex, tarifTypeId, mandantGroup) {
  let entryFound = false;
  let vertragId = "none";
  vertragId = "none";

  if (mandantIndex || mandantIndex === 0) {
    ids.forEach((mandantEntry, index) => {
      if (
        mandantGroup[mandantIndex].mandant.id === mandantEntry.id &&
        tarifTypeId === mandantEntry.tarifTypeId
      ) {
        entryFound = true;
        vertragId = mandantEntry.vertragId;
      }
    });

    if (!entryFound) {
      vertragId = "newVertrag";
    }
  } else {
    ids.forEach((vertrag, index) => {
      if (tarifTypeId === vertrag.tarifTypeId && vertrag.id === false) {
        entryFound = true;
        vertragId = vertrag.vertragId;
      }
      if (!entryFound) {
        vertragId = "newVertrag";
      }
    });
  }

  return vertragId;
}
export function checkForKind(mandantGroup, isKindNeeded) {
  let addMenuItem = false;

  if (mandantGroup.art === "MANDANT") {
    addMenuItem = true;
  }
  if (mandantGroup.art === "PARTNER") {
    addMenuItem = true;
  }

  if (mandantGroup.art === "KIND") {
    if (isKindNeeded === "true") {
      addMenuItem = true;
    } else {
      addMenuItem = false;
    }
  }

  return addMenuItem;
}
export function formatMandantName(mandantGroup, kindAnzahl, setKindAnzahl) {
  let mandantName;

  if (mandantGroup.art === "MANDANT") {
    mandantName =
      "M: " +
      mandantGroup.mandant.vorname +
      " " +
      mandantGroup.mandant.nachname;
  }
  if (mandantGroup.art === "PARTNER") {
    mandantName =
      "P: " +
      mandantGroup.mandant.vorname +
      " " +
      mandantGroup.mandant.nachname;
  }

  if (mandantGroup.art === "KIND") {
    mandantName =
      "K: " +
      mandantGroup.mandant.vorname +
      " " +
      mandantGroup.mandant.nachname;
  }
  return mandantName;
}
/*
export function initEinkommenSums(values, bruttoSum, setBruttoSum) {
  //case bruttobezüge
  let output ={
    bruttoBezug:{
    grundgehalt:{
      betrag:0,
      ST:"",
      SV:"",
      GB:""
    },
    variablerBezug:{
      betrag:0,
     ST:"",
   SV:"",
     GB:"",
    },
    fahrtkosten:{
      betrag:0,
    ST:"",
     SV:"",
     GB:""
    },
    feiertagszuschlag:{
      betrag:0,
    ST:"",
     SV:"",
     GB:""
    },
    nachtzuschlag:{
      betrag:0,
      ST:"",
      SV:"",
      GB:""
    },
    dienstwagen:{
      betrag:0,
    ST:"",
    SV:"",
    GB:""
    },
    kitaGebuehren:{
      betrag:0,
   ST:"",
    SV:"",
    GB:""
    }
    ,
    jobRad:{
      betrag:0,
      ST:"",
      SV:"",
    GB:""
    }
    ,
    vwlAG:{
      betrag:0,
      ST:"",
      SV:"",
      GB:""
    }
    ,
    sachbezug:{
      betrag:0,
      ST:"",
      SV:"",
      GB:""
    }
    ,
    provision:{
      betrag:0,
     ST:"",
     SV:"",
      GB:""
    }
    ,
    sonstiges:{
      betrag:0,
      ST:"",
      SV:"",
      GB:""
    },
    },
    nettobezuege:{
      netto:{
        isAbzug:false,
        betrag:0
      },
      sonstigerSachbezug:{
        isAbzug:false,
        betrag:0
      },
      abzuegeVwL:{
        isAbzug:true,
        betrag:0
      },
      sonstigerAbzug:{
        isAbzug:true,
        betrag:0
      }
    }
  }
  Object.keys(values).map((name) => {

    switch (name) {
      case "betragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            grundgehalt: {
              ...output.bruttoBezug.grundgehalt,
              betrag: values[name],
            },
          },
        };
        break;
      case "steuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            grundgehalt: {
              ...output.bruttoBezug.grundgehalt,
              ST: values[name],
            },
          },
        };
        break;
      case "sozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            grundgehalt: {
              ...output.bruttoBezug.grundgehalt,
              SV: values[name],
            },
          },
        };
        break;
      case "gesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug.bruttoBezug,
            grundgehalt: {
              ...output.bruttoBezug.grundgehalt,
              GB: values[name],
            },
          },
        };
        break;

      case "variablerBezugBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            variablerBezug: {
              ...output.bruttoBezug.variablerBezug,
              betrag: values[name],
            },
          },
        };
        break;
      case "variablerBezugSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            variablerBezug: {
              ...output.bruttoBezug.variablerBezug,
              SV: values[name],
            },
          },
        };
        break;
      case "variablerBezugSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            variablerBezug: {
              ...output.bruttoBezug.variablerBezug,
              ST: values[name],
            },
          },
        };
        break;
      case "variablerBezugGesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            variablerBezug: {
              ...output.bruttoBezug.variablerBezug,
              GB: values[name],
            },
          },
        };
        break;
      case "fahrtkostenBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            fahrtkosten: {
              ...output.bruttoBezug.fahrtkosten,
              betrag: values[name],
            },
          },
        };
        break;
      case "fahrtkostenSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            fahrtkosten: {
              ...output.bruttoBezug.fahrtkosten,
              ST: values[name],
            },
          },
        };
        break;
      case "fahrtkostenSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            fahrtkosten: {
              ...output.bruttoBezug.fahrtkosten,
              SV: values[name],
            },
          },
        };
        break;
      case "fahrtkostenGesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            fahrtkosten: {
              ...output.bruttoBezug.fahrtkosten,
              GB: values[name],
            },
          },
        };
        break;
      case "feiertagszuschlagBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            feiertagszuschlag: {
              ...output.bruttoBezug.feiertagszuschlag,
              betrag: values[name],
            },
          },
        };
        break;
      case "feiertagszuschlagSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            feiertagszuschlag: {
              ...output.bruttoBezug.feiertagszuschlag,
              ST: values[name],
            },
          },
        };
        break;
      case "feiertagszuschlagSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            feiertagszuschlag: {
              ...output.bruttoBezug.feiertagszuschlag,
              SV: values[name],
            },
          },
        };
        break;
      case "feiertagszuschlagGesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            feiertagszuschlag: {
              ...output.bruttoBezug.feiertagszuschlag,
              GB: values[name],
            },
          },
        };
        break;
      case "nachtzuschlagBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            nachtzuschlag: {
              ...output.bruttoBezug.nachtzuschlag,
              betrag: values[name],
            },
          },
        };
        break;
      case "nachtzuschlagSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            nachtzuschlag: {
              ...output.bruttoBezug.nachtzuschlag,
              ST: values[name],
            },
          },
        };
        break;
      case "nachtzuschlagSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            nachtzuschlag: {
              ...output.bruttoBezug.nachtzuschlag,
              SV: values[name],
            },
          },
        };
        break;
      case "nachtzuschlagGesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            nachtzuschlag: {
              ...output.bruttoBezug.nachtzuschlag,
              GB: values[name],
            },
          },
        };
        break;
      case "dienstwagenBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            dienstwagen: {
              ...output.bruttoBezug.dienstwagen,
              betrag: values[name],
            },
          },
        };
        break;
      case "dienstwagenSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            dienstwagen: {
              ...output.bruttoBezug.dienstwagen,
              ST: values[name],
            },
          },
        };
        break;
      case "dienstwagenSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            dienstwagen: {
              ...output.bruttoBezug.dienstwagen,
              SV: values[name],
            },
          },
        };
        break;
      case "dienstwagenGesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            dienstwagen: {
              ...output.bruttoBezug.dienstwagen,
              GB: values[name],
            },
          },
        };
        break;
      case "kitaGebuehrenBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            kitaGebuehren: {
              ...output.bruttoBezug.kitaGebuehren,
              betrag: values[name],
            },
          },
        };
        break;
      case "kitaGebuehrenSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            kitaGebuehren: {
              ...output.bruttoBezug.kitaGebuehren,
              ST: values[name],
            },
          },
        };
        break;
      case "kitaGebuehrenSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            kitaGebuehren: {
              ...output.bruttoBezug.kitaGebuehren,
              SV: values[name],
            },
          },
        };
        break;
      case "kitaGebuehrenGesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            kitaGebuehren: {
              ...output.bruttoBezug.kitaGebuehren,
              GB: values[name],
            },
          },
        };
        break;
      case "jobRadBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            jobRad: {
              ...output.bruttoBezug.jobRad,
              betrag: values[name],
            },
          },
        };
        break;
      case "jobRadSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            jobRad: {
              ...output.bruttoBezug.jobRad,
              ST: values[name],
            },
          },
        };
        break;
      case "jobRadSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            jobRad: {
              ...output.bruttoBezug.jobRad,
              SV: values[name],
            },
          },
        };
        break;
      case "jobRadGesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            jobRad: {
              ...output.bruttoBezug.jobRad,
              GB: values[name],
            },
          },
        };
        break;
      case "vwlAGBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            vwlAG: {
              ...output.bruttoBezug.vwlAG,
              betrag: values[name],
            },
          },
        };
        break;
      case "vwlAGSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            vwlAG: {
              ...output.bruttoBezug.vwlAG,
              ST: values[name],
            },
          },
        };
        break;
      case "vwlAGSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            vwlAG: {
              ...output.bruttoBezug.vwlAG,
              SV: values[name],
            },
          },
        };
        break;
      case "vwlAGGesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            vwlAG: {
              ...output.bruttoBezug.vwlAG,
              GB: values[name],
            },
          },
        };
        break;
      case "sachbezugBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            sachbezug: {
              ...output.bruttoBezug.sachbezug,
              betrag: values[name],
            },
          },
        };
        break;
      case "sachbezugSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            sachbezug: {
              ...output.bruttoBezug.sachbezug,
              ST: values[name],
            },
          },
        };
        break;
      case "sachbezugSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            sachbezug: {
              ...output.bruttoBezug.sachbezug,
              SV: values[name],
            },
          },
        };
        break;
      case "sachbezugGesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            sachbezug: {
              ...output.bruttoBezug.sachbezug,
              GB: values[name],
            },
          },
        };
        break;
      case "provisionBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            provision: {
              ...output.bruttoBezug.provision,
              betrag: values[name],
            },
          },
        };
        break;
      case "provisionSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            provision: {
              ...output.bruttoBezug.provision,
              ST: values[name],
            },
          },
        };
        break;
      case "provisionSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            provision: {
              ...output.bruttoBezug.provision,
              SV: values[name],
            },
          },
        };
        break;
      case "provisionGesamtBruttoSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            provision: {
              ...output.bruttoBezug.provision,
              GB: values[name],
            },
          },
        };
        break;
      case "sonstigesBruttoBetragMtlTextfieldEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            sonstiges: {
              ...output.bruttoBezug.sonstiges,
              betrag: values[name],
            },
          },
        };
        break;
      case "sonstigesBruttoSteuerSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            sonstiges: {
              ...output.bruttoBezug.sonstiges,
              ST: values[name],
            },
          },
        };
        break;
      case "sonstigesBruttoSozialversicherungSelectEinnahmen":
        output = {
          ...output,
          bruttoBezug: {
            ...output.bruttoBezug,
            sonstiges: {
              ...output.bruttoBezug.sonstiges,
              SV: values[name],
            },
          },
        };
        break;
      case "nettobezugBetragMtlEinnahmen":
        output = {
          ...output,
          nettobezuege:{
                ...output.nettobezuege,
                netto:{
              isAbzug:false,
              betrag:0
            }
          }
        };
        break;
        case "abzuegeVwlGesamtNettobezugEinnahmen":
          output = {
            ...output,
            nettobezuege:{
                ...output.nettobezuege,
                abzuegeVwL:{
                isAbzug:true,
                betrag:0
              }
            }
          };
          break;
          case "sonstigerSachbezugNettobezugBetragMtlEinnahmen":
            output = {
              ...output,
              nettobezuege:{
                ...output.nettobezuege,
                sonstigerSachbezug:{
                  isAbzug:false,
                  betrag:0
                }
              }
            };
            break;
            case "sonstigerAbzugNettobezugBetragMtlEinnahmen":
              output = {
                ...output,
                nettobezuege:{
                ...output.nettobezuege,
                sonstigerAbzug:{
                    isAbzug:true,
                    betrag:0
                  }
                }
              };
              break;
      default:
    }
  });

  setBruttoSum(output)
}

export function updateEinkommenSums(value, name, bruttoSum, setBruttoSum) {
  //case bruttobezüge
let output=bruttoSum
  switch (name) {
    case "betragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          grundgehalt: {
            ...bruttoSum.bruttoBezug.grundgehalt,
            betrag: value,
          },
        },
      }
      break;
    case "steuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          grundgehalt: {
            ...bruttoSum.bruttoBezug.grundgehalt,
            ST: value,
          },
        },
      }
      break;
    case "sozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          grundgehalt: {
            ...bruttoSum.bruttoBezug.grundgehalt,
            SV: value,
          },
        },
      }
      break;
    case "gesamtBruttoSelectEinnahmen":
      console.log("bruttoSum")
      console.log(value)
      console.log(bruttoSum)
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          grundgehalt: {
            ...bruttoSum.bruttoBezug.grundgehalt,
            GB: value,
          },
        },
      }
      break;
    case "variablerBezugBetragMtlTextfieldEinnahmen":
      console.log(value)
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          variablerBezug: {
            ...bruttoSum.bruttoBezug.variablerBezug,
            betrag: value,
          },
        },
      }
      break;
    case "variablerBezugSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          variablerBezug: {
            ...bruttoSum.bruttoBezug.variablerBezug,
            SV: value,
          },
        },
      }
      break;
    case "variablerBezugSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          variablerBezug: {
            ...bruttoSum.bruttoBezug.variablerBezug,
            ST: value,
          },
        },
      }
      break;
    case "variablerBezugGesamtBruttoSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          variablerBezug: {
            ...bruttoSum.bruttoBezug.variablerBezug,
            GB: value,
          },
        },
      }
      break;
    case "fahrtkostenBetragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          fahrtkosten: {
            ...bruttoSum.bruttoBezug.fahrtkosten,
            betrag: value,
          },
        },
      }
      break;
    case "fahrtkostenSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          fahrtkosten: {
            ...bruttoSum.bruttoBezug.fahrtkosten,
            ST: value,
          },
        },
      }
      break;
    case "fahrtkostenSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          fahrtkosten: {
            ...bruttoSum.bruttoBezug.fahrtkosten,
            SV: value,
          },
        },
      }
      break;
    case "fahrtkostenGesamtBruttoSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          fahrtkosten: {
            ...bruttoSum.bruttoBezug.fahrtkosten,
            GB: value,
          },
        },
      }
      break;
    case "feiertagszuschlagBetragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          feiertagszuschlag: {
            ...bruttoSum.bruttoBezug.feiertagszuschlag,
            betrag: value,
          },
        },
      }
      break;
    case "feiertagszuschlagSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          feiertagszuschlag: {
            ...bruttoSum.bruttoBezug.feiertagszuschlag,
            ST: value,
          },
        },
      }
      break;
    case "feiertagszuschlagSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          feiertagszuschlag: {
            ...bruttoSum.bruttoBezug.feiertagszuschlag,
            SV: value,
          },
        },
      }
      break;
    case "feiertagszuschlagGesamtBruttoSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          feiertagszuschlag: {
            ...bruttoSum.bruttoBezug.feiertagszuschlag,
            GB: value,
          },
        },
      }
      break;
    case "nachtzuschlagBetragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          nachtzuschlag: {
            ...bruttoSum.bruttoBezug.nachtzuschlag,
            betrag: value,
          },
        },
      }
      break;
    case "nachtzuschlagSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          nachtzuschlag: {
            ...bruttoSum.bruttoBezug.nachtzuschlag,
            ST: value,
          },
        },
      }
      break;
    case "nachtzuschlagSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          nachtzuschlag: {
            ...bruttoSum.bruttoBezug.nachtzuschlag,
            SV: value,
          },
        },
      }
      break;
    case "nachtzuschlagGesamtBruttoSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          nachtzuschlag: {
            ...bruttoSum.bruttoBezug.nachtzuschlag,
            GB: value,
          },
        },
      }
      break;
    case "dienstwagenBetragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          dienstwagen: {
            ...bruttoSum.bruttoBezug.dienstwagen,
            betrag: value,
          },
        },
      }
      break;
    case "dienstwagenSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          dienstwagen: {
            ...bruttoSum.bruttoBezug.dienstwagen,
            ST: value,
          },
        },
      }
      break;
    case "dienstwagenSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          dienstwagen: {
            ...bruttoSum.bruttoBezug.dienstwagen,
            SV: value,
          },
        },
      }
      break;
    case "dienstwagenGesamtBruttoSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug.bruttoBezug,
          dienstwagen: {
            ...bruttoSum.dienstwagen,
            GB: value,
          },
        },
      }
      break;
    case "kitaGebuehrenBetragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          kitaGebuehren: {
            ...bruttoSum.bruttoBezug.kitaGebuehren,
            betrag: value,
          },
        },
      }
      break;
    case "kitaGebuehrenSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          kitaGebuehren: {
            ...bruttoSum.bruttoBezug.kitaGebuehren,
            ST: value,
          },
        },
      }
      break;
    case "kitaGebuehrenSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          kitaGebuehren: {
            ...bruttoSum.bruttoBezug.kitaGebuehren,
            SV: value,
          },
        },
      }
      break;
    case "kitaGebuehrenGesamtBruttoSelectEinnahmen":
      console.log(value)
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          kitaGebuehren: {
            ...bruttoSum.bruttoBezug.kitaGebuehren,
            GB: value,
          },
        },
      }
      break;
    case "jobRadBetragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          jobRad: {
            ...bruttoSum.bruttoBezug.jobRad,
            betrag: value,
          },
        },
      }
      break;
    case "jobRadSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          jobRad: {
            ...bruttoSum.bruttoBezug.jobRad,
            ST: value,
          },
        },
      }
      break;
    case "jobRadSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          jobRad: {
            ...bruttoSum.bruttoBezug.jobRad,
            SV: value,
          },
        },
      }
      break;
    case "jobRadGesamtBruttoSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          jobRad: {
            ...bruttoSum.bruttoBezug.jobRad,
            GB: value,
          },
        },
      }
      break;
    case "vwlAGBetragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          vwlAG: {
            ...bruttoSum.bruttoBezug.vwlAG,
            betrag: value,
          },
        },
      }
      break;
    case "vwlAGSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          vwlAG: {
            ...bruttoSum.bruttoBezug.vwlAG,
            ST: value,
          },
        },
      }
      break;
    case "vwlAGSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          vwlAG: {
            ...bruttoSum.bruttoBezug.vwlAG,
            SV: value,
          },
        },
      }
      break;
    case "vwlAGGesamtBruttoSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          vwlAG: {
            ...bruttoSum.bruttoBezug.vwlAG,
            GB: value,
          },
        },
      }
      break;
    case "sachbezugBetragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          sachbezug: {
            ...bruttoSum.bruttoBezug.sachbezug,
            betrag: value,
          },
        },
      }
      break;
    case "sachbezugSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          sachbezug: {
            ...bruttoSum.bruttoBezug.sachbezug,
            ST: value,
          },
        },
      }
      break;
    case "sachbezugSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          sachbezug: {
            ...bruttoSum.bruttoBezug.sachbezug,
            SV: value,
          },
        },
      }
      break;
    case "sachbezugGesamtBruttoSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          sachbezug: {
            ...bruttoSum.bruttoBezug.sachbezug,
            GB: value,
          },
        },
      }
      break;
    case "provisionBetragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          provision: {
            ...bruttoSum.bruttoBezug.provision,
            betrag: value,
          },
        },
      }
      break;
    case "provisionSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          provision: {
            ...bruttoSum.bruttoBezug.provision,
            ST: value,
          },
        },
      }
      break;
    case "provisionSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          provision: {
            ...bruttoSum.bruttoBezug.provision,
            SV: value,
          },
        },
      }
      break;
    case "provisionGesamtBruttoSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          provision: {
            ...bruttoSum.bruttoBezug.provision,
            GB: value,
          },
        },
      }
      break;
    case "sonstigesBruttoBetragMtlTextfieldEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          sonstiges: {
            ...bruttoSum.bruttoBezug.sonstiges,
            betrag: value,
          },
        },
      }
      break;
    case "sonstigesBruttoSteuerSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          sonstiges: {
            ...bruttoSum.bruttoBezug.sonstiges,
            ST: value,
          },
        },
      }
      break;
    case "sonstigesBruttoSozialversicherungSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          sonstiges: {
            ...bruttoSum.bruttoBezug.sonstiges,
            SV: value,
          },
        },
      }
      break;
    case "sonstigesBruttoGesamtBruttoSelectEinnahmen":
      output= {
        ...bruttoSum,
        bruttoBezug: {
          ...bruttoSum.bruttoBezug,
          sonstiges: {
            ...bruttoSum.bruttoBezug.sonstiges,
            GB: value,
          },
        },
      }
      break;
      case "nettobezugBetragMtlEinnahmen":
        console.log(value)
        output = {
          ...output,
          nettobezuege:{
                ...output.nettobezuege,
                netto:{
              isAbzug:false,
              betrag:value
            }
          }
        };
        break;
        case "abzuegeVwlGesamtNettobezugEinnahmen":
        console.log(value)
          
        output = {
            ...output,
            nettobezuege:{
                ...output.nettobezuege,
                abzuegeVwL:{
                isAbzug:true,
                betrag:value
              }
            }
          };
          break;
          case "sonstigerSachbezugNettobezugBetragMtlEinnahmen":
            output = {
              ...output,
              nettobezuege:{
                ...output.nettobezuege,
                sonstigerSachbezug:{
                  isAbzug:false,
                  betrag:value
                }
              }
            };
            break;
            case "sonstigerAbzugNettobezugBetragMtlEinnahmen":
              output = {
                ...output,
                nettobezuege:{
                ...output.nettobezuege,
                sonstigerAbzug:{
                    isAbzug:true,
                    betrag:value
                  }
                }
              };
              break;
    default:
  }
  console.log(output);
  return output
}

export function updateForm(bruttoSum){
  console.log(bruttoSum.nettobezuege.abzuegeVwL.betrag)
  return({
    betragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.grundgehalt.betrag,
steuerSelectEinnahmen:bruttoSum.bruttoBezug.grundgehalt.ST,
sozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.grundgehalt.ST,
gesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.grundgehalt.GB,


variablerBezugBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.variablerBezug.betrag,
variablerBezugSteuerSelectEinnahmen:bruttoSum.bruttoBezug.variablerBezug.ST,
variablerBezugSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.variablerBezug.ST,
variablerBezugGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.variablerBezug.GB,

fahrtkostenBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.fahrtkosten.betrag,
fahrtkostenSteuerSelectEinnahmen:bruttoSum.bruttoBezug.fahrtkosten.ST,
fahrtkostenSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.fahrtkosten.ST,
fahrtkostenGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.fahrtkosten.GB,

feiertagszuschlagBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.feiertagszuschlag.betrag,
feiertagszuschlagSteuerSelectEinnahmen:bruttoSum.bruttoBezug.feiertagszuschlag.ST,
feiertagszuschlagSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.feiertagszuschlag.ST,
feiertagszuschlagGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.feiertagszuschlag.GB,

nachtzuschlagBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.nachtzuschlag.betrag,
nachtzuschlagSteuerSelectEinnahmen:bruttoSum.bruttoBezug.nachtzuschlag.ST,
nachtzuschlagSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.nachtzuschlag.ST,
nachtzuschlagGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.nachtzuschlag.GB,

dienstwagenBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.dienstwagen.betrag,
dienstwagenSteuerSelectEinnahmen:bruttoSum.bruttoBezug.dienstwagen.ST,
dienstwagenSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.dienstwagen.ST,
dienstwagenGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.dienstwagen.GB,

kitaGebuehrenBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.kitaGebuehren.betrag,
kitaGebuehrenSteuerSelectEinnahmen:bruttoSum.bruttoBezug.kitaGebuehren.ST,
kitaGebuehrenSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.kitaGebuehren.ST,
kitaGebuehrenGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.kitaGebuehren.GB,

jobRadBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.jobRad.betrag,
jobRadSteuerSelectEinnahmen:bruttoSum.bruttoBezug.jobRad.ST,
jobRadSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.jobRad.ST,
jobRadGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.jobRad.GB,

vwlAGBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.vwlAG.betrag,
vwlAGSteuerSelectEinnahmen:bruttoSum.bruttoBezug.vwlAG.ST,
vwlAGSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.vwlAG.ST,
vwlAGGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.vwlAG.GB,

sachbezugBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.sachbezug.betrag,
sachbezugSteuerSelectEinnahmen:bruttoSum.bruttoBezug.sachbezug.ST,
sachbezugSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.sachbezug.ST,
sachbezugGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.sachbezug.GB,

provisionBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.provision.betrag,
provisionSteuerSelectEinnahmen:bruttoSum.bruttoBezug.provision.ST,
provisionSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.provision.ST,
provisionGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.provision.GB,

sonstigesBruttoBetragMtlTextfieldEinnahmen:bruttoSum.bruttoBezug.sonstiges.betrag,
sonstigesBruttoSteuerSelectEinnahmen:bruttoSum.bruttoBezug.sonstiges.ST,
sonstigesBruttoSozialversicherungSelectEinnahmen:bruttoSum.bruttoBezug.sonstiges.ST,
sonstigesBruttoGesamtBruttoSelectEinnahmen:bruttoSum.bruttoBezug.sonstiges.GB,

nettobezugBetragMtlEinnahmen:bruttoSum.nettobezuege.netto.betrag,
sonstigerSachbezugNettobezugBetragMtlEinnahmen:bruttoSum.nettobezuege.sonstigerSachbezug.betrag,
abzuegeVwlGesamtNettobezugBetragMtlEinnahmen:bruttoSum.nettobezuege.abzuegeVwL.betrag,
sonstigerAbzugNettobezugBetragMtlEinnahmen:bruttoSum.nettobezuege.sonstigerAbzug.betrag,
  })
} */