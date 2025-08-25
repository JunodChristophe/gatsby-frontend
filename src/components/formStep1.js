import React from "react"
import { useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { CountrySelect, RadioGroup, FieldCommon } from "./formCommon"

const Step1 = () => {
  const { t } = useTranslation(["form", "options"])
  const { register, formState: { errors } } = useFormContext()

  return (
    <div>
      <RadioGroup
        name="urgency"
        otherFieldName="otherUrgency"
        optionsKey="urgencyOptions"
        labelKey="urgencyLevel"
      />

      <div style={{ display: "flex", gap: "1rem" }}>
        <FieldCommon labelKey="lastName" />
        <FieldCommon labelKey="firstName"/>
      </div>

      <FieldCommon labelKey="birthDate" elementType="date" />
      <FieldCommon labelKey="address" />

      <div style={{ display: "flex", gap: "1rem" }}>
        <FieldCommon labelKey="postalCode" elementType="number" />
        <FieldCommon labelKey="city" />
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <FieldCommon labelKey="municipality" />
        <FieldCommon labelKey="since" elementType="date" />
      </div>

      <FieldCommon labelKey="phoneNumber" />
      <FieldCommon labelKey="avsNumber" />
      <FieldCommon labelKey="spouseName" />
      <FieldCommon labelKey="parentsNames" />
      
      <div style={{ display: "flex", gap: "1rem" }}>
        <FieldCommon labelKey="birthPlace" />
        <FieldCommon labelKey="religion" />
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <CountrySelect name="origin" />
        <FieldCommon labelKey="nationality" />
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <RadioGroup
          name="maritalStatus"
          optionsKey="maritalStatusOptions"
          labelKey="maritalStatus"
        />

        <RadioGroup
          name="lifestyle"
          otherFieldName="otherLivestyle"
          optionsKey="lifestyleOptions"
          labelKey="lifestyle"
        />
      </div>
      
      <FieldCommon labelKey="formerProfession" />

      <div style={{ display: "flex", gap: "1rem" }}>
        <RadioGroup
          name="provenance"
          otherFieldName="otherProvenance"
          optionsKey="originOptions"
          labelKey="provenance"
        />

        <RadioGroup
          name="room"
          optionsKey="roomOptions"
          labelKey="room"
        />
      </div>
    </div>
  )
}

export default Step1
