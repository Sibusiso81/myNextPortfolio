import type React from "react"

interface SkillProgressProps {
  name: string
  level: number
  icon: React.ReactNode
}

const SkillProgress: React.FC<SkillProgressProps> = ({ name, level, icon }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="mb-2">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-600">{level}% Proficiency</span>
    </div>
  )
}

export default SkillProgress

