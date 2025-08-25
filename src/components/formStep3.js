import React from "react"
import { useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"
import FormCommon from "./formCommon"

const Step3 = () => {
  const { register, formState: { errors } } = useFormContext()
  const { t } = useTranslation()

  return (
    <div>
      
    </div>
  )
}

export default Step3
