import { Controller, useForm, useFieldArray } from "react-hook-form";
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
import { formatMandantName, checkForKind, mapIncomingData,checkConditionString } from "./mapAssets";
import { useEffect } from "react";

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
    setCard,
    colorProperties,
    berater,
    renderAnzahlVp,
    checkIfPersonendaten,
  },
  ref
) {

  let testArray = [];
  function checkForCustomInput(options, value, type) {
    let output = "";
    let foundMatch = false;
    options.map((option) => {
      if (type === "select" || "selectToBeMapped") {
        if (option.label === value || option.value === value) {
          foundMatch = true;
        }
      }
      if (type === "produktid") {
        if (option.name === value || option.productId === value) {
          foundMatch = true;
        }
      }
      if (type === "gesellschaft") {
        if (option.name === value) {
          foundMatch = true;
        }
      }
    });
    if (!foundMatch) {
      output = value;
    }

    return output;
  }
  function formatSelectIds() {
    let output = [];
    let name = "";
    id.map((id, index) => {
      mandantGroup.map((mandantGroup) => {
        name =
          mandantGroup.mandant.vorname + " " + mandantGroup.mandant.nachname;
      });
      output.push({
        index: index,
        name: name + ": " + id.tarifTypeId,
        data: { id: id.vertragId, tarifTypeId: id.tarifTypeId },
      });
    });
    return output;
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
    setVertragId,
    setRequiredFilled,
    forceUpdate,
    ignored,
    forceUseEffect,
    mandantTabIndex,
    productGesellschaftIdLoaded,
    vertragName,
    setVertragName,
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
  function selectedForm(tariftype) {
    let output = "";

    if (output === "ARBEITGEBER") {
      output = "Arbeitgeber";
    }
    return output;
  }

  const { append } = useFieldArray({ control: control, name: "items" });
  // Definition rekursiv nach conditions absuchen und entsprechende Watchers einrichten
  const reduceDefinitionWatchers = useCallback(
    (acc = {}, { items, condition }) => {
      let returnVal;
      returnVal = items
        ? { ...acc, ...items.reduce(reduceDefinitionWatchers, {}) }
        : { ...acc };
if(typeof watch(condition) === "string"){
  returnVal[condition] = checkConditionString(watch(condition), formDefinition[0].section)
} if(typeof watch(condition) === "boolean"){
      if (condition) returnVal[condition] = watch(condition);
}
      return returnVal;
    },
    [watch]
  );
  let requiredFields = [];
  let requiredLabels = [];
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
      ? { required: false, ...item.props, xs: 12, sm: 12, md: 12, xl: 12 }
      : { required: false, ...item.props };

    if (!values) return null;

    if (condition) {
      // todo: mehr möglichkeiten mit den conditions (aktuell nur boolean)
      if (!fieldsToWatch[condition]) return null;
    }
    if (suiteValue) {
      testArray.push({
        name: name,
        type: type,
        label: label,
        suiteValue: suiteValue,
        menuOptions:menuOptions

      });
      if (props.required) {
        requiredFields.push(name);
        requiredLabels.push(label);
      }
    }
    if (!name) {
      const cardContent = (
        <>
          {(section || description) && (
            <div
              className={
                formDefinition[0].section === section ? "" : "cardHeader"
              }
              style={{
                backgroundColor:
                  formDefinition[0].section === section
                    ? null
                    : colorProperties.MAINCOLOR,
              }}
            >
              {section && (
                <Typography
                  variant={"h6"}
                  component={"h3"}
                  className="headerTypography"
                >
                  {formDefinition[0].section === section ? "" : section}
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
            <Card
              className={
                cardContent.section === formDefinition[0].section
                  ? "defaultCard"
                  : ""
              }
              variant={"outlined"}
            >
              <CardContent className="gridCard">{cardContent}</CardContent>
            </Card>
          ) : (
            <Accordion
              style={{ justifyContent: "space-between" }}
              aria-controls={"panel" + accordionId + "-content"}
              id={"panel" + accordionId + "-header"}
            >
              <AccordionSummary
                sx={{ justifyContent: "space-inbetween !important" }}
                expandIcon={<ExpandMore />}
              >
                <Typography
                  className={
                    tarifTypeIdFromCardState === "ARBEITGEBER"
                      ? "arbeitgeberText"
                      : ""
                  }
                  variant={"h6"}
                  component={"h3"}
                >
                  {accordionText}
                </Typography>{" "}
                {tarifTypeIdFromCardState === "ARBEITGEBER" ? (
                  <FunctionMapper
                    functionName={"deleteArbeitgeber"}
                    variableName={accordionId}
                    watch={watch}
                    setValue={setValue}
                    renderAnzahlVp={renderAnzahlVp}
                  />
                ) : null}
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
                case "selectBerater":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <InputLabel>{label}</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        disabled={itemDisabled}
                        error={!!helperText}
                      >
                        <MenuItem key="nothing-Selected" value="" />

                        {berater.map((berater, index) => (
                          <MenuItem key={"o-" + index} value={berater.id}>
                            {berater.firstname + " " + berater.lastname}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  );
                case "clearVertrag":
                  return (
                    <Button
                      onClick={() => {
                        setVertragId("newVertrag");
                      }}
                    >
                      Clear Data
                    </Button>
                  );
                case "debugMenue":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={(e) => {
                          setVertragId(e.target.value.id);
                          setCard(e.target.value.tarifTypeId);
                        }}
                        disabled={itemDisabled}
                        error={!!helperText}
                      >
                        <MenuItem key="o" value={""}></MenuItem>
                        {formatSelectIds().map((id, index) => (
                          <MenuItem key={"o-" + index} value={id.data}>
                            {id.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  );
                case "addForm":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <Button
                        onClick={() =>
                          append({
                            name: "test",
                            label: "testlabel",
                            type: "text",
                          })
                        }
                      >
                        +
                      </Button>
                    </FormControl>
                  );
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
                case "customFunction":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <FunctionMapper
                        functionName={name}
                        variableName={label}
                        watch={watch}
                        setValue={setValue}
                        renderAnzahlVp={renderAnzahlVp}
                        tarifTypeIdFromCardState={tarifTypeIdFromCardState}
                        value={value}
                      />
                    </FormControl>
                  );

                case "produktid":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <InputLabel>Produkt ID</InputLabel>
                      {productGesellschaftIdLoaded ? (
                        <Select
                          autoFocus={focussed}
                          inputRef={ref}
                          disabled={itemDisabled}
                          value={value}
                          onChange={onChange}
                          error={!!helperText}
                        >
                          <MenuItem
                            key="o"
                            value={checkForCustomInput(options, value, type)}
                          >
                            {checkForCustomInput(options, value, type)}
                          </MenuItem>
                          {productId.map((productId, index) => (
                            <MenuItem
                              key={"o-" + index}
                              value={productId.productId}
                            >
                              {productId.name}
                            </MenuItem>
                          ))}
                        </Select>
                      ) : (
                        <p>loading...</p>
                      )}
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
                      {productGesellschaftIdLoaded ? (
                        <Select
                          autoFocus={focussed}
                          inputRef={ref}
                          value={value}
                          onChange={onChange}
                          disabled={itemDisabled}
                          error={!!helperText}
                        >
                          <MenuItem
                            key="o"
                            value={checkForCustomInput(options, value, type)}
                          >
                            {checkForCustomInput(options, value, type)}
                          </MenuItem>
                          {gesellschaft.data.map((gesellschaft, index) => (
                            <MenuItem
                              key={"o-" + index}
                              value={gesellschaft.name}
                            >
                              {gesellschaft.name}
                            </MenuItem>
                          ))}
                          <MenuItem key="o-sonstiges" value={"sonstiges"}>
                            {"sonstiges"}
                          </MenuItem>
                        </Select>
                      ) : (
                        <p>loading...</p>
                      )}
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>
                      )}
                    </FormControl>
                  );
                case "select":
                  return (
                    <FormControl fullWidth size={"small"} {...props}>
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
                        {...props}
                        disabled={itemDisabled}
                      >
                        <MenuItem
                          key="o"
                          value={checkForCustomInput(options, value, type)}
                        >
                          {checkForCustomInput(options, value, type)}
                        </MenuItem>
                        {options.map((option, index) =>
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
                case "selectToBeMapped":
                  return (
                    <FormControl fullWidth size={"small"} {...props}>
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
                        {...props}
                        disabled={itemDisabled}
                      >
                        <MenuItem
                          key="o"
                          value={checkForCustomInput(options, value, type)}
                        >
                          {checkForCustomInput(options, value, type)}
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
                    <FormControl fullWidth size={"small"} {...props}>
                      <InputLabel>{label}</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        label={label}
                        {...props}
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
                        <MenuItem key="o" value={"PENSIONSKASSE_3"}>
                          Pensionskasse (§ 40b EStG)
                        </MenuItem>
                        <MenuItem key="o" value={"PENSIONSKASSE_40"}>
                          Pensionskasse (§ 40b EStG)
                        </MenuItem>
                        <MenuItem key="o" value={"UNTERSTUETZUNGSKASSE"}>
                          Unterstützungskasse
                        </MenuItem>
                        <MenuItem key="o" value={"ZUSATZVERSORGUNGSKASSE"}>
                          Zusatzversorgungskasse
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
                    <FormControl fullWidth size={"small"} {...props}>
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
                case "selectMandantbAV":
                  return (
                    <div>
                      <FormControl fullWidth size={"small"} {...props}>
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
                          <MenuItem
                            onClick={() => {
                              setVersicherungsnehmerValue({
                                index: false,
                                tarifTypeId: tarifType,
                              });
                            }}
                            key={"o-arbeitgeber"}
                            value={"ARBEITGEBER"}
                          >
                            Arbeitgeber
                          </MenuItem>
                        </Select>
                        {helperText && (
                          <Typography color={"error"} variant={"caption"}>
                            {helperText}
                          </Typography>
                        )}
                      </FormControl>
                    </div>
                  );
                case "selectMandant":
                  return (
                    <div>
                      <FormControl fullWidth size={"small"} {...props}>
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
                      <FormControl fullWidth size={"small"} {...props}>
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
                    <FormControl fullWidth size={"small"} {...props}>
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
                      {...props}
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
                      {...props}
                      label={label}
                      KeyboardButtonProps={{
                        "aria-label": "Datum wählen",
                      }}
                      invalidDateMessage={"Ungültiges Datum invalid"}
                      maxDateMessage={"Ungültiges Datum"}
                      minDateMessage={"Ungültiges Datum mindate"}
                      onChange={onChange}
                      InputLabelProps={{ shrink: value ? true : false }}
                      value={formatDate(value)}
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
                      {...props}
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
                      {...props}
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
    let output = {};
    
testArray.forEach((item) => {
      output = {
        ...output,
        ...translateToSuiteData(item, item.name, values[item.name]),
      };
    });
    return output;
  }
  function translateToSuiteData(item, key, value) {
    let output;
    if (item.name === key && typeof item.suiteValue !== "undefined") {
      if (item.type !== "toggleButtonGroup") {
        if (item.type !== "selectMandant") {
          if (item.type !== "selectVersichert") {
            if (item.label !== "Zahlweise") {
              if (item.type !== "date") {
                if (typeof value !== "undefined") {
                  output = { ...output, [item.suiteValue]: value };
                } else {
                  output = { ...output, [item.suiteValue]: "" };
                }
              }
            }
            if (item.type === "date") {
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
        }
        if (item.type === "selectMandant" || item.type === "selectMandantbAV") {

          if (typeof value !== "undefined") {
            if (value !== "Placeholder") {
              //TODO: Wenn assetId´s hinzugefügt werden, diese methode löschen!
              if (value === "ARBEITGEBER") {
                output = { ...output, mp: "sonstige" };
              } else {

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
              }
            }
          } else {
            switch (mandantGroup[0].art) {
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
              versicherungsnehmerId: mandantGroup[0].mandantId,
            };
          }
        }
      }
      if (item.type === "selectVersichert") {
        mandantGroup.map((mandant, index) => {
          if (value === "sonstiges") {
            output = { ...output, [item.suiteValue]: value };
          }
          if (value === mandant.mandantId) {
            switch (mandantGroup[index].art) {
              case "MANDANT":
                output = { ...output, [item.suiteValue]: "m" };
                break;
              case "PARTNER":
                output = { ...output, [item.suiteValue]: "p" };
                break;
              case "KIND":
                output = { ...output, [item.suiteValue]: "k" };
                break;
              default:
                break;
            }
          }
        });
      }
      if (item.type === "vertragsname") {
        output = { ...output, [item.suiteValue]: value };
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
      if (typeof dirtyValues[item.name] !== "undefined") {

        output = {
          ...output,
          ...translateToSuiteData(item, item.name, dirtyValues[item.name]),
        };
      }
    });

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

    if (typeof date !== "undefined") {
      if (Object.prototype.toString.call(date) === "[object Date]") {
        output = date.toLocaleDateString("de-EU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        // it is a date
        if (isNaN(date)) {
          // d.getTime() or d.valueOf() will also work
          // date object is not valid
          output = "";
        }
      } else {
        output = date;
      }
    }

    return output;
  }
  function formatDate(value) {
    let output = value;
    if (typeof value === "String") {
      output = new Date(value);
    }
    return output;
  }

  function formatDataForSubmission(valuesToSubmit, dirtyValues) {
    let vertragIdSuite = vertragId;
    if (vertragId === "newVertrag") {
      vertragIdSuite = "0";
    }

    let mobileClassname = "";
    if (formDefinition[0].section === "Verträge") {
      mobileClassname = formDefinition[1].mobileClassname;
    } else {
      mobileClassname = formDefinition[0].mobileClassname;
    }
    let output;
    if (!checkIfPersonendaten(tarifTypeIdFromCardState)) {
      output = {
        action: "saveAsset",
        json: {
          ...valuesToSubmit,
          ...dirtyValues,
          id: vertragIdSuite,
          angebotsType:"VERTRAG"
        },
        mobileClassname: mobileClassname,
        mandantId: valuesToSubmit.versicherungsnehmerId,
        analyseId: params.analyseId,
      };
      //versicherungsnehmer id wird nicht gebraucht
      delete output.json.versicherungsnehmerId;
    }
    //"kategorie":"thvpferd"
    if (checkIfPersonendaten(tarifTypeIdFromCardState)) {
      if (tarifTypeIdFromCardState === "newMandant") {
        output = {
          action: "savePerson",
          mandantId: mandantGroup[0].mandantId,
          json: {
            ...valuesToSubmit,
            ...dirtyValues,
            mandantId: mandantGroup[0].mandantId,
          },
        };
      } else if (tarifTypeIdFromCardState === "newKind") {
        output = {
          action: "savePerson",
          mandantId: mandantGroup[0].mandantId,
          json: {
            ...valuesToSubmit,
            ...dirtyValues,
            mandantId: mandantGroup[0].mandantId,
            mandantType: "kind",
          },
        };
      } else {
        output = {
          action: "savePerson",
          mandantId: mandantGroup[mandantTabIndex].mandantId,
          json: {
            ...valuesToSubmit,
            ...dirtyValues,
            id: mandantGroup[mandantTabIndex].mandantId,
          },
        };
      }
    }
    if (tarifTypeIdFromCardState === "PFERDEHALTERHAFTPFLICHT") {
      output = { ...output, json: { ...output.json, kategorie: "thvpferd" } };
    }
    if (tarifTypeIdFromCardState === "PRIVATHAFTPFLICHT") {
      output = { ...output, json: { ...output.json, kategorie: "phv" } };
    }
    if (tarifTypeIdFromCardState === "HUNDEHALTERHAFTPFLICHT") {
      output = { ...output, json: { ...output.json, kategorie: "thvhund" } };
    }
    if (vertragName.length !== 0) {
      output = { ...output, json: { ...output.json, name: vertragName } };
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
    if (!checkIfPersonendaten(tarifTypeIdFromCardState)) {
      if (!checkIfEinkommenUndEinahmen(tarifTypeIdFromCardState)) {
        gesellschaft.data.map((gesellschaft) => {
          if (gesellschaft.name === output.gesellschaft) {
            output = { ...output, gesellschaft: gesellschaft.id };
          }
        });
      }
    }
    return output;
  }
  function checkIfEinkommenUndEinahmen(tariftype) {
    let output = false;

    if (tariftype === "EINNAHMEN") {
      output = true;
    }
    if (tariftype === "EINKOMMEN_GEHALT") {
      output = true;
    }
    if (tariftype === "EINKOMMEN_MINIJOB") {
      output = true;
    }
    if (tariftype === "EINKOMMEN_SELBSTAENDIGER") {
      output = true;
    }
    if (tariftype === "AUSGABEN") {
      output = true;
    }
    return output;
  }

  const submitDirtyFields = useCallback(async (values) => {
    let valuesToSubmitUnformated = mapSuiteValues();
    let dirtyValues = {
      ...addDirtyEntries(
        Object.entries(formState.dirtyFields).reduce((acc, [key, isDirty]) => {
          if (isDirty) return { ...acc, [key]: values[key] }
          return acc;
        }, {})
      ),
    };
    let valuesToSubmit = formatDataForSubmission(
      valuesToSubmitUnformated,
      dirtyValues
    );
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
  }, [formState.isDirty, vertragName]);

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
    [formState.isDirty, vertragName]
  );
  useEffect(() => {
    setRequiredFilled(checkRequiredFields(watch(requiredFields)));
  }, [forceUseEffect]);

  function checkRequiredFields(fields) {
    let array = [];
    let isUndefined = false;
    fields.map((field, index) => {
      if (typeof field === "undefined" || field === "") {
        if (typeof requiredLabels[index] !== "undefined") {
          if (
            requiredFields[index].includes("versicherungsnehmer") ||
            requiredFields[index].includes("vertragsnehmer")
          ) {
            if (typeof values.initMandantValue !== "undefined") {
              setValue(requiredFields[index], values.initMandantValue);
            } else {
              array.push(requiredLabels[index]);
              isUndefined = true;
            }
          } else {
            array.push(requiredLabels[index]);
            isUndefined = true;
          }
        } else if (requiredFields[index].includes("gesellschaft")) {
          array.push("Gesellschaft");
          isUndefined = true;
        } else if (requiredFields[index].includes("showExternalProductId")) {
          array.push("Product ID");
          isUndefined = true;
        }
      }
    });
    return { disabled: isUndefined, labelsToBeFilled: array };
  }
  return (
    <form style={style}>
      <Grid container spacing={compact ? 1 : 2}>
        {formDefinition.map(createFormItemFromDefinitionItem)}
      </Grid>
    </form>
  );
}

export default forwardRef(DynamicForm);
