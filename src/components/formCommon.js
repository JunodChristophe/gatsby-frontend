import React, { useState } from "react"
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"

const CountrySelect = ({ name }) => {
  const { register, formState: { errors } } = useFormContext()
  const { t } = useTranslation(["form", "options", "options_countries"])

  const countries = t("options_countries:ISO", { returnObjects: true })
  console.log(countries)
  return (
    <div>
      <label htmlFor={name}>{t("form:labels.origin")}</label><br />
      <select id={name} {...register(name)}>
        <option value="">           </option>
        {Object.entries(countries).map(([code, label]) => (
          <option key={code} value={code}>{label}</option>
        ))}
      </select>
      {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
    </div>
  )
}

const FieldCommon = ({ labelKey, elementType="text", suffix="" }) => {
  const { t } = useTranslation(["form"])
  const { register, formState: { errors } } = useFormContext()

  const name = labelKey + suffix

  return (
    <div>
      <label>{t(`form:labels.${labelKey}`)}</label><br />
      <input type={elementType} {...register(name)} />
      {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
    </div>
  )
}

const RadioGroup = ({
  name,
  otherFieldName="",
  optionsKey,
  labelKey
}) => {
  const { t } = useTranslation(["form", "options"])
  const { register, watch, formState: { errors } } = useFormContext()

  const selected = watch(name)
  const options = t(`options:${optionsKey}`, { returnObjects: true })

  return (
    <div>
      <label>{t(`form:labels.${labelKey}`)}</label>
      {Object.entries(options).map(([value, label]) => (
        <label key={value} style={{ display: "block" }}>
          <input type="radio" value={value} {...register(name)} />
          {label}
        </label>
      ))}

      {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}

      {selected === "other" && otherFieldName && (
        <div>
          <input type="text" placeholder={t(`options:commonOptions.pleaseSpecify`)} {...register(otherFieldName)} />
        </div>
      )}
    </div>
  )
}

const StepIndicator = ({ currentStep }) => {
  const { t } = useTranslation(["form"])

  const steps = [
    { number: 1, label: t("sections.personalData") },
    { number: 2, label: t("sections.representative") },
    { number: 3, label: t("sections.additionalDetails") },
    { number: 4, label: t("sections.documents") },
  ]

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
      {steps.map((step) => {
        const isActive = step.number === currentStep
        const isCompleted = step.number <= currentStep

        return (
          <div
            key={step.number}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.5rem 1rem",
              fontWeight: isActive ? "bold" : "normal",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: isActive ? "#007acc" : isCompleted ? "#4caf50" : "#ccc",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                marginRight: "0.5rem",
                flexShrink: 0,
              }}
            >
              {step.number}
            </span>
            <span style={{ marginTop: "0.5rem", fontWeight: isActive ? "bold" : "normal" }}>
              {step.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export { StepIndicator, RadioGroup, FieldCommon, CountrySelect }