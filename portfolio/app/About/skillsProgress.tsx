import type React from "react"

interface SkillProgressProps {
  name: string
  description: string
  icon: React.ReactNode
}

const SkillProgress: React.FC<SkillProgressProps> = ({ name, description, icon }) => {
  return (
    <div className="flex flex-row  space-x-4">
      <div className="">
              {icon}
      
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-md font-bold">{name}</p>
        <p className="text-muted-foreground ">{description}</p>
      </div>
    </div>
  )
}

export default SkillProgress

