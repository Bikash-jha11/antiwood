import React from 'react'
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

function Alerts({ title, toppos }: any) {
  return (
    <div>
      <Alert variant="destructive" className={'absolute w-3xs text-gray-200  border-[#616161] right-4 alert_box'} style={{ top: toppos }}>
        <AlertCircleIcon />
        <AlertTitle>{title}</AlertTitle>
      </Alert>
    </div>
  )
}

export default Alerts