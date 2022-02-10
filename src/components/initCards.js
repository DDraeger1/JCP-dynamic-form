import tarifType from "./tarifType";
import emptyCardTemplate from "./emptyCardTemplate";
function initCards(
  result,
  setFormData,
  dummyData,
  setLoaded,
  vertragId,
  card,
  setVersicherungsnehmerValue,
  showExternalProductId
) {
  
  let bankDaten = [
    {
      bank: "",
      bankOrt: "",
      bic: "",
      blz: "",
      createdOn: "",
      efpId: "",
      geschaeftlich: "",
      hauptbankverbindung: "",
      iban: "",
      id: "",
      kontoinhaber: "",
      kontonr: "",
      lastModified: "",
      mandantId: "",
      notizen: "",
      sepa: "",
    },
  ];

  let cardValues = tarifType(
    result.analyseAssets,
    card,
    false,
    result.mandantGroup
  );

  function booleanFormater(booleanString) {
    let output = false;
    if (booleanString === "true") {
      output = true;
    }
    return output;
  }

  function dateFormater(date) {
    //from dd/mm/yyyy to mm/dd/yyyy
    let output;
    if (date !== null) {
      if (date !== undefined) {
        if (date.length === 10) {
          output =
            date.substring(3, 6) + date.substring(0, 3) + date.substring(6, 10);
        }
      }
    }
    return output;
  }


  let vertragFound = false;
  //es wird geguckt ob mandantwerte gesucht werden. Wenn ja, braucht man kein asset suchen
  // || conditional funktioniert nicht

        if (vertragId !== "none") {

          console.log(cardValues.initMandantValue)
          result.analyseAssets.map((asset) => {
            
            if (asset.id === vertragId) {
              if (
                asset.tarifTypeId.includes("SACHWERT") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("RIESTER") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("DIREKT_3") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("GESETZLICHE_AV") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("EINNAHMEN") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("EINKOMMEN_GEHALT") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("EINKOMMEN_MINIJOB") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("EINKOMMEN_SELBSTAENDIGER") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("AUSGABEN") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("AUTOMOBILCLUB") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("SONSTIGE_ZAHLUNG") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
              }
              if (
                asset.tarifTypeId.includes("KONSUMKREDIT") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("BANKPRODUKTE") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
              }
              if (
                asset.tarifTypeId.includes("VWL_BAUSPAREN") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
              }
              if (
                asset.tarifTypeId.includes("IMMOBILIENBESTAND") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("BETEILIGUNGEN") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (asset.tarifTypeId.includes("BU") && asset.id === vertragId) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("UNFALL") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);

                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("RISIKO") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("DREADDISEASE") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("PFLEGEKOSTEN") ||
                asset.tarifTypeId.includes("PFLEGERENTEN") ||
                (asset.tarifTypeId.includes("PFLEGETAGEGELD") &&
                  asset.id === vertragId)
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("GESETZLICHE_KRANKEN") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (asset.tarifTypeId.includes("KVV") && asset.id === vertragId) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (asset.tarifTypeId.includes("KVZ") && asset.id === vertragId) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("PRIVATHAFTPFLICHT") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("HUNDEHALTERHAFTPFLICHT") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("PFERDEHALTERHAFTPFLICHT") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("HAUSRAT") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("RECHTSSCHUTZ") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("WOHNGEBAEUDE") &&
                asset.id === vertragId
              ) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (asset.tarifTypeId.includes("KFZ") && asset.id === vertragId) {
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
              if (
                asset.tarifTypeId.includes("WOHNSITUATION") &&
                asset.id === vertragId
              ) {
                
                cardValues = tarifType(asset, card, true, result.mandantGroup);
                vertragFound = true;
              }
            }
            if (!vertragFound && vertragId === "newVertrag") {
              cardValues = emptyCardTemplate(card);
             }
          });
        } else {
          if(card !== "ARBEITGEBER"){
          if(card !== "AUSWEIS"){
          if(card !== "KOMMUNIKATION"){
          if (card !== "GESUNDHEIT") {
            if(card !== "FUEHRERSCHEIN"){
            if (card !== "STEUERN") {
             // cardValues = tarifType(result.analyseAssets, card, true, result.mandantGroup);

              if (card !== "KIND") {
                if (card !== "BANKVERBINDUNG") {
                  console.log("Drinserssdsdsds")
                  console.log(cardValues)
          setVersicherungsnehmerValue({
            index: cardValues.initMandantValue,
            tarifTypeId: card,
          });
        }
      }
    }}}}}}
  }
   result.mandantGroup.map((mandant) => {
    if (mandant.mandant.bankverbindungs.length !== 0) {
      bankDaten = mandant.mandant.bankverbindungs;
    }
  });
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

    bankBankdaten: bankDaten[0].bank,
    kontoInhaberBankdaten: "Placeholder",
    kontonummerBankdaten: bankDaten[0].kontonr,
    ibanBankdaten: bankDaten[0].iban,
    bicBankdaten: bankDaten[0].bic,

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

    produktIDRiesterrente: "Placeholder",
    tarifbezeichnungRiesterrente: "tarifBezeichnung",
    vertragsnummerRiesterrente: "versicherungsnummer",
    versicherungsnehmerRiesterrente: "Placeholder",
    versichertePersonRiesterrente: "Placeholder",
    artVersichertePersonRiesterrente: "art",
    vertragsbeginnVertragslaufzeitRiesterrente:
      "dateFormater(versicherungsbeginn)",
    vertragsendeVertragslaufzeitRiesterrente: "dateFormater(versicherungsende)",
    leistungTodVertragslaufzeitRiesterrente: "leistungTod",
    garantiertMonatlicheRentenleistungRiesterrente: "rentenleistungGarantiert",
    prognostiziertMonatlicheRentenleistungRiesterrente:
      "rentenleistungPrognostiziert",
    beiProzentMonatlicheRentenleistungRiesterrente:
      "rentenleistungPrognostiziertBeiProzent",
    RGZMonatlicheRentenleistungRiesterrente: "rentenleistungRgzJahre",
    dynamikRiesterrente: "dynamik",
    prozentDynamikRiesterrente: "dynamikProzent",
    integrierteBURiesterrente: "",
    rentenleistungBURiesterrente: "",
    dynamikBULeistungBURiesterrente: "",
    beitragsbefreiungBURiesterrente: "",
    beitragsendeBUZRiesterrente: "",
    leistungsendeBUZRiesterrente: "",
    beitragsanteilBUZRiesterrente: "",
    aktuellerRückkaufswertBUZRiesterrente: "",
    datumBUZRiesterrente: "",
    beitragsendeFondsRiesterrente: "",
    VWLRiesterrente: false,
    arbeitgeberanteilVWLRiesterrente: "",
    arbeitnehmeranteilVWLRiesterrente: "",
    summeVWLRiesterrente: "",
    zahlweiseVWLRiesterrente: "",
    beitragVWLRiesterrente: "",
    dauerzulagenantragVWLRiesterrente: "",
    inHoeheVonZahlungLetzteZulageRiesterrenteHeader: "",
    gebuchtAmLetzteZulageRiesterrenteHeader: "",
    garantiezinsZahlungLetzteZulageRiesterrenteHeader: "",
*/

export default initCards;
