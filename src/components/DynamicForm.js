import { Controller, useForm } from "react-hook-form";
import "../App.css";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@material-ui/core";
import "./css/dynamicForm.css";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useContext,
  useState,
  useRef,
  useReducer,
} from "react";
import { Edit, ExpandMore, DeleteForever } from "@material-ui/icons";
import BezugHinzufuegen from "./BezugHinzufuegen";
import EntferneBezug from "./EntferneBezug";
import { Context } from "../context/Context";
import FunctionMapper from "./FunctionMapper";
import { formatMandantName, checkForKind, mapIncomingData } from "./mapAssets";

function DynamicForm(
  {
    values,
    formDefinition,
    onSubmit,
    style,
    disabled,
    compact = false,
    mandantGroup,
    gesellschaft,
    tarifTypeIdFromCardState,
    productId,
    assets,
    params,
    id,
    setCard
  },
  ref
) {
  console.log(gesellschaft);
  const [isInitialized, toggleInitialized] = useState(false);
let testArray = []
function formatSelectIds(){
  let output =[]
  let name = ""
id.map((id, index)=>{
  mandantGroup.map((mandantGroup)=>{
name =  mandantGroup.mandant.vorname +
" " +
mandantGroup.mandant.nachname
  })
  output.push({index:index,name:name+": "+ id.tarifTypeId, data:{id:id.vertragId, tarifTypeId: id.tarifTypeId}})
})
  return output
}
  let inputIndex = 0;
  const {
    versicherungsnehmerValue,
    setVersicherungsnehmerValue,
    setAnzahlVp,
    setMobileClassname,
    vertragId,
    mobileClassname,
    bruttoSum,
    setBruttoSum,
    gehaltInit,
    setGehaltInit,
    setDeletionIndex,
    setVertragId
  } = useContext(Context);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // Definition rekursiv nach Werten absuchen (für 1-dimensionales defaultValues-Objekt)
  const reduceDefinitionValues = (acc = {}, { items, name }) => {
    if (items) return { ...acc, ...items.reduce(reduceDefinitionValues, {}) };
    if (values && values[name]) return { ...acc, [name]: values[name] };
    return acc;
  };
  const defaultValues = formDefinition.reduce(reduceDefinitionValues, {});

  const { control, handleSubmit, watch, formState, reset, setValue } = useForm({
    defaultValues,
    mode: "onBlur",
  });
  // Definition rekursiv nach conditions absuchen und entsprechende Watchers einrichten
  const reduceDefinitionWatchers = useCallback(
    (acc = {}, { items, condition }) => {
      let returnVal;
      returnVal = items
        ? { ...acc, ...items.reduce(reduceDefinitionWatchers, {}) }
        : { ...acc };

      if (condition) returnVal[condition] = watch(condition);
      return returnVal;
    },
    [watch]
  );

  const fieldsToWatch = formDefinition.reduce(reduceDefinitionWatchers, []);
  let renderIndex = 0;
  const createFormItemFromDefinitionItem = (item, index) => {
    const {
      section,
      card = false,
      accordionText,
      accordionId,
      visibilityDeleteIcon,
      name,
      rows,
      description,
      items = [],
      options = [],
      type,
      label,
      condition,
      unit,
      editWarning,
      infoText,
      tarifType,
      versicherungsnehmerBeide,
      anzahlVp,
      showKind,
      showSonstige,
      menuOptions,
      suiteValue,
      rules: { required = false, pattern = "" } = {},
    } = item;
    const itemDisabled = disabled || item.disabled || !!editWarning;
    const props = compact
      ? { ...item.props, xs: 12, sm: 12, md: 12, xl: 12 }
      : item.props;

    if (!values) return null;

    if (condition) {
      // todo: mehr möglichkeiten mit den conditions (aktuell nur boolean)
      if (!fieldsToWatch[condition]) return null;
    }
  if(suiteValue){
testArray.push({name:name, type:type, label:label, suiteValue:suiteValue})
  }
    if (!name) {
      const cardContent = (
        <>
          {(section || description) && (
            <div className="cardHeader">
              {section && (
                <Typography
                  variant={"h6"}
                  component={"h3"}
                  className="headerTypography"
                >
                  {section}
                </Typography>
              )}
              {description && (
                <Typography color={"textSecondary"}>{description}</Typography>
              )}
            </div>
          )}

          <Grid container spacing={compact ? 1 : 2}>
            {(items || []).map(createFormItemFromDefinitionItem)}
          </Grid>
        </>
      );
      return (
        <Grid item xs={12} {...props} key={"k-" + index}>
          {card ? (
            <Card className="defaultCard" variant={"outlined"}>
              <CardContent className="gridCard">{cardContent}</CardContent>
            </Card>
          ) : (
            <Accordion
              style={{ justifyContent: "space-between" }}
              aria-controls={"panel" + accordionId + "-content"}
              id={"panel" + accordionId + "-header"}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant={"h6"} component={"h3"}>
                  {accordionText}
                </Typography>{" "}
              </AccordionSummary>
              <AccordionDetails>{cardContent}</AccordionDetails>
            </Accordion>
          )}
        </Grid>
      );
    }

    inputIndex++;
    const focussed = inputIndex === 1;
    return (
      <Grid
        item
        xs={12}
        {...props}
        key={"k-" + index}
        style={{ marginBottom: "6px" }}
      >
        <Controller
          name={name}
          control={control}
          defaultValue={values[name]}
          rules={{
            required,
            pattern: pattern ? new RegExp(pattern) : null,
          }}
          render={({
            field: { onChange, value = "", ref },
            fieldState: { error },
          }) => {
            let helperText;
            if (error) {
              if (!error.message) {
                if (error.type === "required")
                  helperText = "Dieses Feld ist ein Pflichtfeld.";
              } else helperText = error.message;
            } else helperText = description || "";

            function getItemInput() {
              switch (type) {
                case "clearVertrag":
                  return(
                    <Button onClick={()=>{setVertragId("newVertrag")}}>
                      Clear Data
                    </Button>
                  )
                case "debugMenue":
                  return(
                    <FormControl fullWidth size={"small"}>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={(e)=>{
                          setVertragId(e.target.value.id)
                           setCard(e.target.value.tarifTypeId)}}
                        disabled={itemDisabled}
                        error={!!helperText}
                      >
                        <MenuItem key="o" value={""}></MenuItem>
                        {formatSelectIds().map((id, index) => (
                          <MenuItem
                            key={"o-" + index}
                            value={id.data}
                          >
                            {id.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )
                case "toggleButtonGroup":
                  return (
                    <>
                      <FormControl fullWidth size={"small"}>
                        <Typography
                          style={{
                            color: itemDisabled ? "#bbb" : "#444",
                            fontSize: "0.9rem",
                          }}
                        >
                          {label}
                        </Typography>
                        <RadioGroup
                          aria-label={label}
                          value={value}
                          onChange={onChange}
                        >
                          {menuOptions.map((option, index) => (
                            <FormControlLabel
                              value={option.name}
                              label={option.label}
                              key={"radioGroup" + index}
                              control={<Radio />}
                            />
                          ))}
                        </RadioGroup>
                        {helperText && <Typography>{helperText}</Typography>}
                      </FormControl>
                    </>
                  );
                /* <Switch
                            color={"primary"}
                            checked={value}
                            name={name}
                            onChange={onChange}
                            inputRef={ref}
                            disabled={itemDisabled}
                            <Button
                          size={"large"}
                          onClick={() => onChange(option.value)}
                          style={{flexGrow: 1}}
                          variant={option.value === value ? "contained" : "outlined"}
                          color={"secondary"}
                          key={"btngrp-" + index}
                          value={option.value}
                          disabled={itemDisabled}
                        >
                          {option.label}
                        </Button>
                          /> */
                case "costumFunction":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <FunctionMapper
                        functionName={name}
                        variableName={label}
                        watch={watch}
                        setValue={setValue}
                      />
                    </FormControl>
                  );

                case "produktid":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <InputLabel>Produkt ID</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        disabled={itemDisabled}
                        value={value}
                        onChange={onChange}
                        error={!!helperText}
                      >
                        <MenuItem key="o" value={""}></MenuItem>
                        {productId.map((productId, index) => (
                          <MenuItem
                            key={"o-" + index}
                            value={productId.productId}
                          >
                            {productId.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>
                      )}
                    </FormControl>
                  );
                case "gesellschaft":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <InputLabel>Gesellschaft</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        disabled={itemDisabled}
                        error={!!helperText}
                      >
                        <MenuItem key="o" value={""}></MenuItem>
                        {gesellschaft.data.map((gesellschaft, index) => (
                          <MenuItem
                            key={"o-" + index}
                            value={gesellschaft.name}
                          >
                            {gesellschaft.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>
                      )}
                    </FormControl>
                  );
                case "select":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <InputLabel>{label}</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={(e) => {
                          onChange(e.target.value);
                        }}
                        label={label}
                        error={!!helperText}
                        disabled={itemDisabled}
                      >
                        <MenuItem key="o" value={""}>
                        <input type="text" >{" "}</input>
                        </MenuItem>
                        {options.map((option, index) =>
                          anzahlVp === "true" ? (
                            <MenuItem
                              onClick={() => setAnzahlVp(option.value)}
                              key={"o-" + index}
                              value={option.value}
                            >
                              <input type="text" >  {option.label}</input>
                            </MenuItem>
                          ) : (
                            <MenuItem key={"o-" + index} value={option.value}>
                              {option.label}
                            </MenuItem>
                          )
                        )}
                      </Select>
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>
                      )}
                    </FormControl>
                  );
                case "selectToBeMapped":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <InputLabel>{label}</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={(e) => {
                          onChange(e.target.value);
                        }}
                        label={label}
                        error={!!helperText}
                        disabled={itemDisabled}
                      >
                        <MenuItem key="o" value={""}>
                          {" "}
                        </MenuItem>
                        {mapIncomingData(name, assets).map((option, index) =>
                          anzahlVp === "true" ? (
                            <MenuItem
                              onClick={() => setAnzahlVp(option.value)}
                              key={"o-" + index}
                              value={option.value}
                            >
                              {option.label}
                            </MenuItem>
                          ) : (
                            <MenuItem key={"o-" + index} value={option.value}>
                              {option.label}
                            </MenuItem>
                          )
                        )}
                      </Select>
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>
                      )}
                    </FormControl>
                  );

                /*
                          { "value": , "label": "" },
                  */
                case "bAVSelect":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <InputLabel>{label}</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        label={label}
                        error={!!helperText}
                        disabled={vertragId === "newVertrag" ? false : true}
                      >
                        <MenuItem key="o" value={""}></MenuItem>
                        <MenuItem key="o" value={"DIREKT_3"}>
                          Direktversicherung (§ 3 Nr. 63 EStG)
                        </MenuItem>
                        <MenuItem key="o" value={"DIREKT_40"}>
                          Direktversicherung (§ 40b EStG)
                        </MenuItem>
                        <MenuItem key="o" value={"DIREKTZUSAGE"}>
                          Direktzusage
                        </MenuItem>
                        <MenuItem key="o" value={"PENSIONSFONDS_3"}>
                          Pensionsfond (§ 3 Nr. 63 EStG)
                        </MenuItem>
                        <MenuItem key="o" value={"PENSIONSKASSE_40"}>
                          Pensionskasse (§ 40b EStG)
                        </MenuItem>
                        <MenuItem key="o" value={"UNTERSTUETZUNGSKASSE"}>
                          Unterstützungskasse
                        </MenuItem>
                      </Select>
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>
                      )}
                    </FormControl>
                  );
                case "personArray":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <InputLabel>{label}</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        label={label}
                        error={!!helperText}
                        disabled={itemDisabled}
                      >
                        <MenuItem key="o" value={""}>
                          {" "}
                        </MenuItem>
                        {options.map((option, index) => (
                          <MenuItem key={"o-" + index} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>
                      )}
                    </FormControl>
                  );
                case "selectMandant":
                  return (
                    <div>
                      <FormControl fullWidth size={"small"}>
                        <InputLabel>{label}</InputLabel>
                        <Select
                          autoFocus={focussed}
                          inputRef={ref}
                          value={versicherungsnehmerValue.index}
                          onChange={onChange}
                          label={label}
                          error={!!helperText}
                          disabled={itemDisabled}
                        >
                          {mandantGroup.map((mandantGroup, index) =>
                            checkForKind(mandantGroup, showKind) ? (
                              <MenuItem
                                onClick={() => {
                                  setVersicherungsnehmerValue({
                                    index: index,
                                    tarifTypeId: tarifType,
                                  });
                                }}
                                key={"o-" + index}
                                value={index}
                              >
                                {formatMandantName(mandantGroup)}
                              </MenuItem>
                            ) : null
                          )}
                          {versicherungsnehmerBeide === "true" ? (
                            <MenuItem
                              onClick={() => {
                                setVersicherungsnehmerValue({
                                  index: false,
                                  tarifTypeId: tarifType,
                                });
                              }}
                              key={"o-versicherungsNehmerBeide"}
                              value={false}
                            >
                              Beide
                            </MenuItem>
                          ) : null}
                        </Select>
                        {helperText && (
                          <Typography color={"error"} variant={"caption"}>
                            {helperText}
                          </Typography>
                        )}
                      </FormControl>
                    </div>
                  );
                case "selectVersichert":
                  return (
                    <div>
                      <FormControl fullWidth size={"small"}>
                        <InputLabel>{label}</InputLabel>
                        <Select
                          autoFocus={focussed}
                          inputRef={ref}
                          value={value}
                          onChange={onChange}
                          label={label}
                          error={!!helperText}
                          disabled={itemDisabled}
                        >
                          {mandantGroup.map((mandantGroup, index) =>
                            checkForKind(mandantGroup, showKind) ? (
                              <MenuItem
                                key={"o-" + index}
                                value={mandantGroup.mandantId}
                              >
                                {formatMandantName(mandantGroup)}
                              </MenuItem>
                            ) : null
                          )}
                          {showSonstige === "true" ? (
                            <MenuItem
                              key={"o-sonstige"}
                              value={"sonstigeSelected"}
                            >
                              Sonstige
                            </MenuItem>
                          ) : null}
                          {versicherungsnehmerBeide === "true" ? (
                            <MenuItem
                              key={"o-versicherungsNehmerBeide"}
                              value={false}
                            >
                              Beide
                            </MenuItem>
                          ) : null}
                        </Select>
                        {helperText && (
                          <Typography color={"error"} variant={"caption"}>
                            {helperText}
                          </Typography>
                        )}
                      </FormControl>
                    </div>
                  );
                case "radioGroup":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <RadioGroup name="radio-buttons-group">
                        {options.map((option, index) => {
                          <FormControlLabel
                            key={"o-" + index}
                            value={option.value}
                            control={<Radio />}
                            label={option.label}
                          />;
                        })}
                      </RadioGroup>
                      {helperText && <Typography>{helperText}</Typography>}
                    </FormControl>
                  );
                case "checkbox":
                  return (
                    <>
                      <FormControlLabel
                        control={
                          <Switch
                            color={"primary"}
                            checked={value}
                            name={name}
                            onChange={onChange}
                            inputRef={ref}
                            disabled={itemDisabled}
                          />
                        }
                        style={{ margin: "-4px -4px 0" }}
                        label={
                          <Typography
                            style={{
                              color: itemDisabled ? "#bbb" : "#444",
                              fontSize: "0.9rem",
                            }}
                          >
                            {label}
                          </Typography>
                        }
                      />
                      {helperText && <Typography>{helperText}</Typography>}
                    </>
                  );
                case "number":
                  return (
                    <TextField
                      autoFocus={focussed}
                      inputRef={ref}
                      label={label}
                      name={name}
                      value={parseFloat(value) || ""}
                      onChange={(e) => {
                        // todo: react-number-format o.ä. einsetzen?
                        let floatValue = parseFloat(e.target.value);
                        if (isNaN(floatValue)) floatValue = 0;
                        onChange(floatValue);
                      }}
                      disabled={itemDisabled}
                      type={"number"}
                      error={!!error}
                      helperText={helperText}
                      fullWidth
                      size={"small"}
                      InputProps={{
                        endAdornment: unit && (
                          <InputAdornment position={"end"}>
                            {unit}
                          </InputAdornment>
                        ),
                      }}
                      {...props}
                    />
                  );
                case "date":
                  return (
                    <KeyboardDatePicker
                      disabled={itemDisabled}
                      autoFocus={focussed}
                      inputRef={ref}
                      disableToolbar
                      format="dd.MM.yyyy"
                      fullWidth
                      size={"small"}
                      label={label}
                      KeyboardButtonProps={{
                        "aria-label": "Datum wählen",
                      }}
                      invalidDateMessage={"Ungültiges Datum invalid"}
                      maxDateMessage={"Ungültiges Datum"}
                      minDateMessage={"Ungültiges Datum mindate"}
                      onChange={onChange}
                      {...props}
                      InputLabelProps={{ shrink: value?true:false }} 
                      value={value}
                    />
                  );
                case "paragraph":
                  return (
                    <p style={{ fontSize: "13px" }} {...props}>
                      {label}
                    </p>
                  );
                case "paragraphValue":
                  return (
                    <p style={{ fontSize: "13px" }} {...props}>
                      {value}
                    </p>
                  );
                case "bruttoButton":
                  return <BezugHinzufuegen {...props} />;
                case "entferneBezug":
                  return <EntferneBezug label={label} />;

                case "":
                case "text":
                case "textarea":
                  return (
                    <TextField
                      autoFocus={focussed}
                      inputRef={ref}
                      label={label}
                      multiline={type === "textarea"}
                      rows={rows}
                      rowsMax={rows}
                      name={name}
                      value={value}
                      onChange={onChange}
                      disabled={itemDisabled}
                      type={"text"}
                      error={!!error}
                      helperText={helperText}
                      fullWidth
                      size={"small"}
                      InputProps={{
                        endAdornment: unit && (
                          <InputAdornment position={"end"}>
                            {unit}
                          </InputAdornment>
                        ),
                      }}
                      {...props}
                    />
                  );
                case "header":
                  return (
                    <>
                      <Typography {...props}>{label}</Typography>
                    </>
                  );
                case "slider":
                  return (
                    <>
                      <Typography>{label}</Typography>
                      <Slider
                        valueLabelDisplay={"auto"}
                        value={value}
                        marks={true}
                        onChange={(event, newValue) => {
                          onChange(newValue);
                        }}
                        disabled={itemDisabled}
                        title={"Bla"}
                        {...props}
                      />
                    </>
                  );

                default:
                  return <b>Unbekannter Feldtyp '{type}'.</b>;
              }
            }

            return (
              <Grid container>
                <Grid item xs={editWarning ? 11 : 12}>
                  {getItemInput()}
                  {infoText && <FormHelperText>{infoText}</FormHelperText>}
                </Grid>
                {editWarning && (
                  <Grid item xs={1} style={{ padding: 4 }}>
                    <IconButton
                      color={"primary"}
                      size={"small"}
                      onClick={() => {
                        const result = window.prompt(
                          editWarning + "\n\nGeben Sie einen neuen Wert an:",
                          value
                        );
                        if (result !== null) onChange(result);
                      }}
                    >
                      <Edit />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            );
          }}
        />
      </Grid>
    );
  };
  function mapSuiteValues() {
    let output = {}
    testArray.forEach((item) => {
        output = { ...output, ...translateToSuiteData(item, item.name, values[item.name]) }
    })
    return output;
  }
  function translateToSuiteData(item, key, value) {
    let output;
    if (item.name === key && typeof item.suiteValue !== "undefined") {
      if (item.type !== "toggleButtonGroup") {
        if (item.type !== "selectMandant") {
          if (item.label !== "Zahlweise") {
            if (item.type !== "date") {
              output = { ...output, [item.suiteValue]: value };
            
          }
        }
        if(item.type === "date"){
          output = {
            ...output,
            [item.suiteValue]: dateFormaterSuite(value),
          };
        }
          if (item.label === "Zahlweise") {
            switch (value) {
              case "MONATLICH":
                output = { ...output, zahlweise: "112" };
                break;
              case "ZWEIMONATLICH":
                output = { ...output, zahlweise: "16" };
                break;
              case "QUARTAL":
                output = { ...output, zahlweise: "14" };
                break;
              case "HALBJAEHRLICH":
                output = { ...output, zahlweise: "12" };
                break;
              case "JAEHRLICH":
                output = { ...output, zahlweise: "11" };
                break;
              default:
                break;
            }
          }
        }
        if (item.type === "selectMandant") {
          if(value !== "Placeholder" && value.length >1){
            if(typeof(value) !== "undefined"){
//TODO: Wenn assetId´s hinzugefügt werden, diese methode löschen!
            switch (mandantGroup[value].art) {
              case "MANDANT":
                output = { ...output, mp: "m" };
                break;
              case "PARTNER":
                output = { ...output, mp: "p" };
                break;
              case "KIND":
                output = { ...output, mp: "k" };
                break;
              default:
                break;
            }
            output = {
              ...output,
              versicherungsnehmerId: mandantGroup[value].mandantId,
            };
          }} else{
          switch (mandantGroup[values.initMandantValue].art) {
            case "MANDANT":
              output = { ...output, mp: "m" };
              break;
            case "PARTNER":
              output = { ...output, mp: "p" };
              break;
            case "KIND":
              output = { ...output, mp: "k" };
              break;
            default:
              break;
          }
          output = {
            ...output,
            versicherungsnehmerId: mandantGroup[values.initMandantValue].mandantId,
          };
        }}
      }
      if (item.type === "toggleButtonGroup") {
        item.menuOptions.map((option) => {
          if (option.name === value) {
            output = { ...output, [option.suiteValue]: true };
            if (tarifTypeIdFromCardState === "EINNAHMEN") {
              output = { ...output, art: option.suiteValue };
            }
          } else {
            output = { ...output, [option.suiteValue]: false };
          }
        });
      }
      // setSubmissionObject({...submissionObject, [item.suiteValue]:it})
    }
    return output;
  }
  function addDirtyEntries(dirtyValues) {
    let output = {};


    testArray.forEach((item) => {
if(typeof(dirtyValues[item.name]) !== "undefined"){
      output = { ...output, ...translateToSuiteData(item, item.name, dirtyValues[item.name]) }
}
  })

    return output;
  }
  function jahresBruttoSumme() {
    let summe = 0;
    function checkForUndefinedSonderzahlung(value) {
      let output = 0;
      if (typeof value !== "undefined") {
        output = value;
      }
      return output;
    }
    function checkForUndefinedNettobezuege(value, isNegative) {
      let output = 0;
      if (typeof value !== "undefined") {
        if (isNegative) {
          output = -value;
        } else {
          output = value;
        }
      }
      return output;
    }
    function checkForUndefinedBrutto(value, GB) {
      let output = 0;
      if (typeof value !== "undefined" && GB === "J") {
        output = value;
      }
      return output;
    }
    summe =
      (checkForUndefinedBrutto(
        watch().betragMtlTextfieldEinnahmen,
        watch().gesamtBruttoSelectEinnahmen
      ) +
        checkForUndefinedBrutto(
          watch().variablerBezugBetragMtlTextfieldEinnahmen,
          watch().variablerBezugGesamtBruttoSelectEinnahmen
        ) +
        checkForUndefinedBrutto(
          watch().fahrtkostenBetragMtlTextfieldEinnahmen,
          watch().fahrtkostenGesamtBruttoSelectEinnahmen
        ) +
        checkForUndefinedBrutto(
          watch().feiertagszuschlagBetragMtlTextfieldEinnahmen,
          watch().feiertagszuschlagGesamtBruttoSelectEinnahmen
        ) +
        checkForUndefinedBrutto(
          watch().nachtzuschlagBetragMtlTextfieldEinnahmen,
          watch().nachtzuschlagGesamtBruttoSelectEinnahmen
        ) +
        checkForUndefinedBrutto(
          watch().dienstwagenBetragMtlTextfieldEinnahmen,
          watch().dienstwagenGesamtBruttoSelectEinnahmen
        ) +
        checkForUndefinedBrutto(
          watch().kitaGebuehrenBetragMtlTextfieldEinnahmen,
          watch().kitaGebuehrenGesamtBruttoSelectEinnahmen
        ) +
        checkForUndefinedBrutto(
          watch().jobRadBetragMtlTextfieldEinnahmen,
          watch().jobRadGesamtBruttoSelectEinnahmen
        ) +
        checkForUndefinedBrutto(
          watch().vwlAGBetragMtlTextfieldEinnahmen,
          watch().vwlAGGesamtBruttoSelectEinnahmen
        ) +
        checkForUndefinedBrutto(
          watch().sachbezugBetragMtlTextfieldEinnahmen,
          watch().sachbezugGesamtBruttoSelectEinnahmen
        ) +
        checkForUndefinedBrutto(
          watch().provisionBetragMtlTextfieldEinnahmen,
          watch().provisionGesamtBruttoSelectEinnahmen
        ) +
        checkForUndefinedBrutto(
          watch().sonstigesBruttoBetragMtlTextfieldEinnahmen,
          watch().sonstigesBruttoGesamtBruttoSelectEinnahmen
        )) *
        watch().anzahlGehaelterEinnahmen +
      checkForUndefinedNettobezuege(
        watch().nettobezugBetragMtlEinnahmen,
        false
      ) +
      checkForUndefinedNettobezuege(
        watch().sonstigerSachbezugNettobezugBetragMtlEinnahmen,
        false
      ) +
      checkForUndefinedNettobezuege(
        watch().abzuegeVwlGesamtNettobezugEinnahmen,
        true
      ) +
      checkForUndefinedNettobezuege(
        watch().sonstigerAbzugNettobezugBetragMtlEinnahmen,
        true
      ) +
      checkForUndefinedSonderzahlung(
        watch().sonderzahlungenAuszahlungsmonatEinnahmen
      ) +
      checkForUndefinedSonderzahlung(
        watch().urlaubsgeldSonderzahlungenAuszahlungsmonatEinnahmen
      ) +
      checkForUndefinedSonderzahlung(
        watch().weihnachtsgeldSonderzahlungenAuszahlungsmonatEinnahmen
      ) +
      checkForUndefinedSonderzahlung(
        watch().gewinnbeteiligungSonderzahlungenAuszahlungsmonatEinnahmen
      );
    return summe;
  }
  function dateFormaterSuite(date) {
    let output = "";
    console.log(typeof(date))
    console.log(date)

    if(typeof(date) !== "undefined"){
    if(typeof(date) === "object"){
      output =date.toLocaleDateString("de-EU")
      console.log(output)

  } else {
    output = date
  }}
  console.log(output)

    return output;
  }
  function formatDataForSubmission(valuesToSubmit, dirtyValues) {
    let vertragIdSuite = vertragId
    if(vertragId ==="newVertrag"){
      vertragIdSuite = "0"
    }
    let output = {
      action: "saveAsset",
      json: {
        ...valuesToSubmit,
        ...dirtyValues,
        id: vertragIdSuite,
        angebotsType: "VERTRAG",
      },
      mobileClassname: formDefinition[0].mobileClassname,
      mandantId: valuesToSubmit.versicherungsnehmerId,
      analyseId: params.analyseId,
    };
    //versicherungsnehmer id wird nicht gebraucht
    delete output.json.versicherungsnehmerId;
    //"kategorie":"thvpferd"

    if (tarifTypeIdFromCardState === "PFERDEHALTERHAFTPFLICHT") {
      output = { ...output, json: { ...output.json, kategorie: "thvpferd" } };
    }
    if (tarifTypeIdFromCardState === "PRIVATHAFTPFLICHT") {
      output = { ...output, json: { ...output.json, kategorie: "phv" } };
    }
    if (tarifTypeIdFromCardState === "HUNDEHALTERHAFTPFLICHT") {
      output = { ...output, json: { ...output.json, kategorie: "thvhund" } };
    }
    /*
if(tarifTypeIdFromCardState === "KVZ"){
  output={...output, json:{...output.json,kategorie:"thvpferd" }}
}
if(tarifTypeIdFromCardState === "KVZ"){
  output={...output, json:{...output.json,kategorie:"thvpferd" }}
}
if(tarifTypeIdFromCardState === "KVZ"){
  output={...output, json:{...output.json,kategorie:"thvpferd" }}
}
if(tarifTypeIdFromCardState === "KVZ"){
  output={...output, json:{...output.json,kategorie:"thvpferd" }}
}*/

    gesellschaft.data.map((gesellschaft) => {
      if (gesellschaft.name === output.gesellschaft) {
        output = { ...output, gesellschaft: gesellschaft.id };
      }
    });
    return output;
  }

  const submitDirtyFields = async (values) => {
    if (Object.keys(formState.dirtyFields).length === 0) return false;

    let valuesToSubmit = mapSuiteValues();

    let dirtyValues = {
      ...addDirtyEntries(
        Object.entries(formState.dirtyFields).reduce((acc, [key, isDirty]) => {
          if (isDirty) return { ...acc, [key]: values[key] };
          return acc;
        }, {})
      ),
    };
    valuesToSubmit = formatDataForSubmission(valuesToSubmit, dirtyValues);
    try {
      if (valuesToSubmit && Object.keys(valuesToSubmit).length > 0) {
        let vals = await onSubmit(valuesToSubmit);
        reset(vals, { keepDirty: false });
      }
      return true;
    } catch (e) {
      console.warn(e);
      return false;
    }
  };
  useImperativeHandle(
    ref,
    () => {
      const queryUnload = () => {
        return new Promise((resolve, reject) => {
          if (formState.isDirty) {
            if (
              window.confirm(
                "Ihre Änderungen wurden nicht gespeichert. Sollen die Änderungen gespeichert werden, bevor Sie zur gewünschten Seite navigieren?"
              )
            ) {
              handleSubmit(async (object) => {
                try {
                  resolve(submitDirtyFields(values));
                } catch (error) {
                  reject(error);
                }
              }, reject /*validation errors?*/)();
            } else {
              resolve(true);
            }
          } else {
            resolve(true);
          }
        });
      };

      return {
        submit: handleSubmit(submitDirtyFields, (validationErrors) => {
          console.log(validationErrors);
          alert(
            "Fehlerhafte Daten. Bitte überprüfen Sie die markierten Eingabefelder."
          );
          throw validationErrors;
        }),
        queryUnload,
        isDirty: formState.isDirty,
      };
    },
    [formState.isDirty]
  );

  return (
    <form onSubmit={handleSubmit(submitDirtyFields)} style={style}>
      <Grid container spacing={compact ? 1 : 2}>
        {formDefinition.map(createFormItemFromDefinitionItem)}
      </Grid>
    </form>
  );
}

export default forwardRef(DynamicForm);
