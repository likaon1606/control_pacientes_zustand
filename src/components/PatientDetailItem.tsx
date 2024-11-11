type PatientDetailItemProps = {
  label: string
  data: string
}


export default function PatientDetailItem({label, data}: PatientDetailItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}: {''}
      <span className="font-bold capitalize text-green-600">{data}</span>
    </p>
  )
}
