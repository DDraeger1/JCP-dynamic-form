import setAssetWithTariftype from "./setAssetWithTariftype";
import emptyCardTemplate from "./emptyCardTemplate";
function isAssetAvailable(
  result,
  setFormData,
  dummyData,
  setLoaded,
  vertragId,
  card,
  setVersicherungsnehmerValue,
  showExternalProductId,
  setAnzahlVp,
  bankverbindungen, setBankverbindungen
  ) {

  let cardValues =setAssetWithTariftype( result.analyseAssets, card, false, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen)
  function booleanFormater(booleanString) {
    let output = false;
    if (booleanString === "true") {
      output = true;
    }
    return output;
  }


  let vertragFound = false;
  //es wird geguckt ob mandantwerte gesucht werden. Wenn ja, braucht man kein asset suchen
  // || conditional funktioniert nicht
        if (vertragId !== "none") {
          result.analyseAssets.map((asset) => {

            if (asset.id === vertragId) {
              if (
                asset.tarifTypeId.includes("DARLEHEN") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("RUERUP") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("SACHWERT") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("RIESTER") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("DIREKT_3") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("DIREKTZUSAGE") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("PENSIONSFONDS_3") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("DIREKT_40") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("UNTERSTUETZUNGSKASSE") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("GESETZLICHE_AV") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("EINNAHMEN") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("EINKOMMEN_GEHALT") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("EINKOMMEN_MINIJOB") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("EINKOMMEN_SELBSTAENDIGER") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("AUSGABEN") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("AUTOMOBILCLUB") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("SONSTIGE_ZAHLUNG") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
              }
              if (
                asset.tarifTypeId.includes("KONSUMKREDIT") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("BANKPRODUKTE") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
              }
              if (
                asset.tarifTypeId.includes("VWL_BAUSPAREN") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("IMMOBILIENBESTAND") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("BETEILIGUNGEN") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (asset.tarifTypeId.includes("BU") && asset.id === vertragId) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("UNFALL") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("RISIKO") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("DREADDISEASE") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("PFLEGEKOSTEN") ||
                asset.tarifTypeId.includes("PFLEGERENTEN") ||
                (asset.tarifTypeId.includes("PFLEGETAGEGELD") &&
                  asset.id === vertragId)
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("GESETZLICHE_KRANKEN") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (asset.tarifTypeId.includes("KVV") && asset.id === vertragId) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (asset.tarifTypeId.includes("KVZ") && asset.id === vertragId) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("PRIVATHAFTPFLICHT") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("HUNDEHALTERHAFTPFLICHT") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("PFERDEHALTERHAFTPFLICHT") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("HAUSRAT") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("RECHTSSCHUTZ") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("WOHNGEBAEUDE") &&
                asset.id === vertragId
              ) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (asset.tarifTypeId.includes("KFZ") && asset.id === vertragId) {
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("WOHNSITUATION") &&
                asset.id === vertragId
              ) {
                
                cardValues = setAssetWithTariftype(asset, card, true, result.mandantGroup, setAnzahlVp, bankverbindungen, setBankverbindungen);
                vertragFound = true;
              }
            }
            if (!vertragFound && vertragId === "newVertrag") {
              cardValues = {initMandantValue:0}
             }
          });
        } else {
          if(card !== "ARBEITGEBER"){
          if(card !== "AUSWEIS"){
          if(card !== "KOMMUNIKATION"){
          if (card !== "GESUNDHEIT") {
            if(card !== "FUEHRERSCHEIN"){
            if (card !== "STEUERN") {
             // cardValues = setAssetWithTariftype(result.analyseAssets, card, true, result.mandantGroup);

              if (card !== "KIND") {
                if (card !== "BANKVERBINDUNG") {
          setVersicherungsnehmerValue({
            index: 0,
            tarifTypeId: card,
          });
        }
      }
    }}}}}}
  }
  console.log(cardValues)
  setFormData({
    showExternalProductId:booleanFormater(showExternalProductId),
    ...cardValues,
    success: result.success,
  });
  setTimeout(() => {
    setLoaded(true);
  }, 500);
}

/*
   ...dummyData,
    geburtsdatumPersonendaten:
      dateFormater(result.mandantData.geburtsdatum) || "",
    vornamePersonendaten: result.mandantData.vorname || "",
    namePersonendaten: result.mandantData.nachname || "",
    anredePersonendaten: result.mandantData.anrede,
    PLZAdressePersonendaten: "",
    familienstandPersonendaten: result.mandantData.familienstand || "",
    fallschirmspringenHobbysPersonendaten:
      result.mandantData.fallschirmspringen,
    motorradHobbysPersonendaten: result.mandantData.motorradfahrer,
    karateHobbysPersonendaten: result.mandantData.karate,
    surfenHobbysPersonendaten: result.mandantData.surfen,
    jagdHobbysPersonendaten: result.mandantData.jagd,
    segelnHobbysPersonendaten: result.mandantData.segeln,
    hobbysMotorbootPersonendaten: result.mandantData.motorboot,
    hobbysTauchenPersonendaten: result.mandantData.tauchen,
    hobbysKletternPersonendaten: result.mandantData.klettern,
    hobbysBergsteigenPersonendaten: result.mandantData.bergsteigen,
    hobbysSonstigesPersonendaten: result.mandantData.sonstiges,
    hausnummerAdressePersonendaten: result.mandantData.hausnummer,
    cityAdressePersonendaten: result.mandantData.ort,
    PLZAdressePersonendaten: result.mandantData.postleitzahl,
    seitWannPersonendaten:
      dateFormater(result.mandantData.familienstandSeit) || "",
    streetAdressePersonendaten: result.mandantData.strasse,
    seitWannAdressePersonendaten:
      dateFormater(result.mandantData.wohnhaftSeit) || "",
    titelPersonendaten: result.mandantData.titel,
   


    beschaeftigungsverhaeltnisAusbildungBeruf:
      result.mandantData.beschaeftigungsverhaeltnis,
    imODAusbildungBeruf: result.mandantData.beschaeftigungOED,
    ausbildungBeruf: result.mandantData.ausbildungFachrichtung,
    erlernterBerufAusbildungBeruf: result.mandantData.erlernterBeruf,
    berufsbrancheAusbildungBeruf: result.mandantData.berufsbranche,
    ausgeuebterBerufAusbildungBeruf: result.mandantData.berufsbezeichnung,
    nebentaetigkeitenAusbildungBeruf: result.mandantData.berufNotizen,
    ueberwiegendTaetigAusbildungBeruf: result.mandantData.leitendTaetig,
    leitendTaetigAusbildungBeruf: result.mandantData.taetigkeit,
    prozentsatzAusbildungBeruf: result.mandantData.taetigkeitAnteil,
    anzahlMitarbeiterAusbildungBeruf: result.mandantData.leitendTaetigMA,
    reisetaetigkeitAusbildungBeruf: result.mandantData.eb_reisetaetigkeit,

    vertragsinhaberSachwert: "Placeholder",
    produktIDSachwert: "Placeholder",
    tarifbezeichnungVertragspartnerSachwert: "Werte localer suite nicht exakt",
    vertragsnummerVertragspartnerSachwert: "",
    artVertragspartnerSachwert: "",
    gewichtVertragspartnerSachwert: "",
    lagerungVertragspartnerSachwert: "",
    anschaffungsjahrVertragspartnerSachwert: "",
    aktuellerWertVertragspartnerSachwert: "",
    vertragssummeVertragspartnerSachwert: "",
    strinzahlweiseVertragspartnerSachwertg: "",
    beitragVertragspartnerSachwert: "",

    produktIDWertpapiere: "Placeholder",
    tarifbezeichnungWertpapiere: "",
    vertragsnummerWertpapiere: "",
    vertragspartnerWertpapiere: "",
    WKNISINVertragspartnerWertpapiere: "",
    anzahlVertragspartnerWertpapiere: "",
    anlageartVertragspartnerWertpapiere: "",
    verwendungszweckVertragspartnerWertpapiere: "",
    anlagebetragVertragspartnerWertpapiere: "",
    wertpapiereNameVertragspartnerWertpapiere: "",
    anteileVertragspartnerWertpapiere: "",
    jahrDerZeichnungVertragspartnerWertpapiere: "",
    aktuellerWertVertragspartnerWertpapiere: "",
    vertragsbeginnVertragslaufzeitWertpapiere: "",
    vertragsendeVertragslaufzeitWertpapiere: "",
    VWLWertpapiere: false,
    arbeitnehmeranteilVWLWertpapiere: "",
    arbeitgeberanteilVWLWertpapiere: "",
    summeVWLWertpapiere: "",
    zahlweiseVWLWertpapiere: "",
    beitragVWLWertpapiereHeader: "",

    artKapitalversicherung: "Nicht existierend in local suite",
    versicherungsnehmerKapitalversicherung: "Nicht existierend in local suite",
    produktIDGesellschaftKapitalversicherung: "",
    tarifbezeichnungGesellschaftKapitalversicherung: "",
    vertragsnummerGesellschaftKapitalversicherung: "",
    verwendungszweckKapitalversicherung: "",
    fallsSonstigesVerwendungszweckKapitalversicherung: "",
    versichertePersonKapitalversicherung: "",
    vertragsbeginnVertragslaufzeitKapitalversicherung: "",
    vertragsendeVertragslaufzeitKapitalversicherung: "",
    versicherungssummeVertragslaufzeitKapitalversicherung: "",
    dynamikKapitalversicherung: "",
    prozentDynamikKapitalversicherung: "",
    fondsDynamikKapitalversicherung: "",
    beitragszahlerDynamikKapitalversicherung: "",
    bezugsrechtTodesfallDynamikKapitalversicherung: "",
    leistungTodDynamikKapitalversicherung: "",
    garantiertMonatlicheRentenleistungKapitalversicherung: "",
    prognostiziertMonatlicheRentenleistungKapitalversicherung: "",
    beiMonatlicheRentenleistungKapitalversicherung: "",
    RGZMonatlicheRentenleistungKapitalversicherung: "",
    garantiertAblaufleistungKapitalversicherung: "",
    prognostiziertAblaufleistungKapitalversicherung: "",
    beiAblaufleistungKapitalversicherung: "",
    inetgrierteBUKapitalversicherung: "",
    rentenleistungBUKapitalversicherung: "",
    beitragsbefreiungBUKapitalversicherung: "",
    beitragsendeBUZKapitalversicherung: "",
    leistungsendeBUZKapitalversicherung: "",
    beitragsanteilBUZKapitalversicherung: "",
    vertagAbgetretenBUZKapitalversicherung: false,
    aktuellerRückkaufswertBUZKapitalversicherung: "",
    datumBUZKapitalversicherung: "",
    garantiezinsBUZKapitalversicherung: "",
    veitragsendeBUZKapitalversicherung: "",
    VWLKapitalversicherung: false,
    arbeitgeberanteilVWLKapitalversicherung: "",
    arbeitnehmeranteilVWLKapitalversicherung: "",
    summeVWLKapitalversicherung: "",
    zahlweiseVWLKapitalversicherung: "",
    einmalbeitragVWLKapitalversicherung: "",
    gesamtzahlbeitragVWLKapitalversicherung: "",
    beitragsanteilVWLKapitalversicherung: "",
*/

export default isAssetAvailable;
