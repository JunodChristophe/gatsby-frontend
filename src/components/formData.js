import React, { useState } from "react"
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"
import { StepIndicator } from "./formCommon.js"

import Step1 from "./formStep1"
import Step2 from "./formStep2"
import Step3 from "./formStep3"
import Step4 from "./formStep4"

const radioGroupSchema = (mainKey, otherKey, t) => ({
  [mainKey]: Yup.string().required(t("form:validation.required")),
  [otherKey]: Yup.string().when(mainKey, {
    is: "other",
    then: (schema) => schema.required(t("form:validation.required")),
    otherwise: (schema) => schema.notRequired()
  })
})

const LongSejourForm = () => {
  const [step, setStep] = useState(1)
  const { t } = useTranslation(["form"])
  
  const stepFields = {
    1: [
      "lastName",
      "firstName",
      "birthDate",
      "address",
      "postalCode",
      "city",
      "municipality",
      "since",
      "phoneNumber",
      "avsNumber",
      "spouseName",
      "parentsNames",
      "birthPlace",
      "religion",
      "origin",
      "nationality",
      "formerProfession",
      "maritalStatus",
      "room"
    ],
    2: [],
    3: [],
    4: []
  }

  const requiredFields = (fieldsNames, t) =>
  fieldsNames.reduce((acc, field) => {
    acc[field] = Yup.string().required(t("form:validation.required"))
    return acc
  }, {})

  const getSchema = (t) => {
    const step1Rules = requiredFields(stepFields[1], t)
    const step2Rules = requiredFields(stepFields[2], t)
    const step3Rules = requiredFields(stepFields[3], t)
    const step4Rules = requiredFields(stepFields[4], t)

    return Yup.object().shape({
      ...step1Rules,
      ...step2Rules,
      ...step3Rules,
      ...step4Rules,
      ...radioGroupSchema("urgency", "otherUrgency", t),
      ...radioGroupSchema("lifestyle", "otherLivestyle", t),
      ...radioGroupSchema("provenance", "otherProvenance", t)
    })
  }

  const methods = useForm({
    resolver: yupResolver(getSchema(t)),
    mode: "onTouched",
    defaultValues: {
      urgency: "",
      otherUrgency: ""
    },
  })

  const handleNext = async () => {
    let fieldsToValidate = []

    const getFieldsToValidate = (step) => {
      const baseFields = stepFields[step]
      if (step === 1) baseFields.push("urgency")
      return baseFields
    }


    //if (step === 1) fieldsToValidate = ["nom", "email2" ,"code"]
    //if (step === 2) fieldsToValidate = ["adresse", "ville"]
    if (step === 1) fieldsToValidate = getFieldsToValidate(1)
    if (step === 2) fieldsToValidate = []
    if (step === 3) fieldsToValidate = []
    if (step === 4) fieldsToValidate = []

    const isValid = await methods.trigger(fieldsToValidate)
    if (isValid) {
      setStep(step + 1)
    } else {
      console.log("Validation échouée")
    }
  }


  const onSubmit = (data) => {
    console.log("Données soumises :", data)
  }

  return (
    <FormProvider {...methods}>
      <StepIndicator currentStep={step} />

      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}

        <div>
          {step > 1 && <button onClick={() => setStep(step - 1)}>Précédent</button>}
          {step < 4 && <button type="button" onClick={handleNext}>Suivant</button>}
          {step === 4 && <button type="submit">{t("form:other.submit")}</button>}
        </div>
      </form>
    </FormProvider>
  )
}

export default LongSejourForm
