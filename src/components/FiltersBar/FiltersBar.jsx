import { ErrorMessage, Field, Form, Formik } from "formik";
import icons from "../../images/icons.svg";
import { useEffect, useId, useState } from "react";
import styles from "./FiltersBar.module.css";
import clsx from "clsx";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";
import { changeFilter } from "../../redux/campers/slice.js";
import { useSearchParams } from "react-router-dom";
export default function FiltersBar({ setPage }) {
  const [inputValue, setInputValue] = useState("");
  const locationId = useId();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = async (values) => {
    const params = {};
    values.location && (params["location"] = values.location);
    values.equipment.includes("ac") && (params["AC"] = true);
    values.equipment.includes("kitchen") && (params["kitchen"] = true);
    values.equipment.includes("tv") && (params["TV"] = true);
    values.equipment.includes("bathroom") && (params["bathroom"] = true);
    values.equipment.includes("radio") && (params["radio"] = true);
    values.equipment.includes("microwave") && (params["microwave"] = true);
    values.equipment.includes("gas") && (params["gas"] = true);
    values.equipment.includes("water") && (params["water"] = true);
    values.equipment.includes("refrigerator") &&
      (params["refrigerator"] = true);
    values.equipment.includes("petrol") && (params["engine"] = "petrol");
    values.equipment.includes("automatic") &&
      (params["transmission"] = "automatic");
    values.type && (params["form"] = values.type);
    setSearchParams(params);
    await dispatch(fetchCampers({ page: 1, ...params }));
    dispatch(changeFilter(params));
    setPage(2);
  };

  const handleInputChange = (e, setFieldValue) => {
    setInputValue(e.target.value);
    setFieldValue("location", e.target.value);
  };

  useEffect(() => {
    const initialValues = {
      location: searchParams.get("location") || "",
      equipment: [
        ...(searchParams.get("AC") === "true" ? ["ac"] : []),
        ...(searchParams.get("kitchen") === "true" ? ["kitchen"] : []),
        ...(searchParams.get("TV") === "true" ? ["tv"] : []),
        ...(searchParams.get("bathroom") === "true" ? ["bathroom"] : []),
        ...(searchParams.get("radio") === "true" ? ["radio"] : []),
        ...(searchParams.get("microwave") === "true" ? ["microwave"] : []),
        ...(searchParams.get("gas") === "true" ? ["gas"] : []),
        ...(searchParams.get("water") === "true" ? ["water"] : []),
        ...(searchParams.get("refrigerator") === "true"
          ? ["refrigerator"]
          : []),
        ...(searchParams.get("engine") === "petrol" ? ["petrol"] : []),
        ...(searchParams.get("transmission") === "automatic"
          ? ["automatic"]
          : []),
      ],
      type: searchParams.get("form") || "",
    };
    setInputValue(initialValues.location || "");
  }, [searchParams]);

  const filtersValidationSchema = Yup.object().shape({
    location: Yup.string("String")
      .matches(/^[a-zA-Z\s'-]+$/, "Not valid value")
      .min(2, "Too short")
      .max(50, "Too long"),
  });
  const createInputClass = clsx(
    styles.location_icon,
    inputValue && styles.location_icon_active
  );
  return (
    <aside className={styles.aside}>
      <Formik
        initialValues={{
          location: searchParams.get("location") || "",
          equipment: [
            ...(searchParams.get("AC") === "true" ? ["ac"] : []),
            ...(searchParams.get("kitchen") === "true" ? ["kitchen"] : []),
            ...(searchParams.get("TV") === "true" ? ["tv"] : []),
            ...(searchParams.get("bathroom") === "true" ? ["bathroom"] : []),
            ...(searchParams.get("radio") === "true" ? ["radio"] : []),
            ...(searchParams.get("microwave") === "true" ? ["microwave"] : []),
            ...(searchParams.get("gas") === "true" ? ["gas"] : []),
            ...(searchParams.get("water") === "true" ? ["water"] : []),
            ...(searchParams.get("refrigerator") === "true"
              ? ["refrigerator"]
              : []),
            ...(searchParams.get("engine") === "petrol" ? ["petrol"] : []),
            ...(searchParams.get("transmission") === "automatic"
              ? ["automatic"]
              : []),
          ],
          type: searchParams.get("form") || "",
        }}
        validationSchema={filtersValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          {/* Location */}
          <label className={styles.location_label} htmlFor={locationId}>
            Location
            <Field name="location">
              {({ field, form }) => (
                <input
                  {...field}
                  className={styles.location_field}
                  type="text"
                  id={locationId}
                  placeholder="City"
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange(e, form.setFieldValue);
                  }}
                />
              )}
            </Field>
            <ErrorMessage
              className={styles.location_error}
              name="location"
              component="span"
            />
            <svg className={createInputClass} width={20} height={20}>
              <use href={`${icons}#icon-map`}></use>
            </svg>
          </label>
          {/* Filters */}
          <label className={styles.filters}>Filters</label>
          {/* Vehicle equipment */}
          <h3 className={styles.filters_title}>Vehicle equipment</h3>
          <div
            className={styles.filters_equipment}
            role="group"
            aria-labelledby="checkbox-group"
            name="equipment"
          >
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="ac"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-wind`}></use>
              </svg>
              AC
            </label>
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="automatic"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-automatic`}></use>
              </svg>
              Automatic
            </label>
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="kitchen"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-cup-hot`}></use>
              </svg>
              Kitchen
            </label>
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="tv"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-tv`}></use>
              </svg>
              TV
            </label>
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="bathroom"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-shower`}></use>
              </svg>
              Bathroom
            </label>
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="petrol"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-petrol`}></use>
              </svg>
              Petrol
            </label>
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="radio"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-radio`}></use>
              </svg>
              Radio
            </label>
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="refrigerator"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-frige`}></use>
              </svg>
              Refrigerator
            </label>
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="microwave"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-microwave`}></use>
              </svg>
              Microwave
            </label>
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="gas"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-gas-stove`}></use>
              </svg>
              Gas
            </label>
            <label className={styles.equipment_label}>
              <Field
                className={styles.equipment_field}
                type="checkbox"
                value="water"
                name="equipment"
              />
              <svg className={styles.equipment_icon} width={32} height={32}>
                <use href={`${icons}#icon-water`}></use>
              </svg>
              Water
            </label>
          </div>
          {/* Vehicle type */}
          <h3 className={styles.filters_type_title}>Vehicle type</h3>
          <div
            className={styles.filters_type}
            role="group"
            aria-labelledby="radio-group"
            name="type"
          >
            <label className={styles.type_label}>
              <Field
                className={styles.type_field}
                type="radio"
                value="panelTruck"
                name="type"
              />
              <svg className={styles.type_icon} width={32} height={32}>
                <use href={`${icons}#icon-grid-1x2`}></use>
              </svg>
              Van
            </label>
            <label className={styles.type_label}>
              <Field
                className={styles.type_field}
                type="radio"
                value="fullyIntegrated"
                name="type"
              />
              <svg className={styles.type_icon} width={32} height={32}>
                <use href={`${icons}#icon-grid`}></use>
              </svg>
              Fully <br />
              Integrated
            </label>
            <label className={styles.type_label}>
              <Field
                className={styles.type_field}
                type="radio"
                value="alcove"
                name="type"
              />
              <svg className={styles.type_icon} width={32} height={32}>
                <use href={`${icons}#icon-grid-3x3`}></use>
              </svg>
              Alcove
            </label>
          </div>
          <button className={styles.submit_btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </aside>
  );
}
