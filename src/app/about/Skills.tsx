import React from 'react'
import skillIcons from './SkillIcons'
import SkillBadge from './SkillBadge'

export type SkillsProps = {
    list: string[]
}

export default function Skills(props: SkillsProps) {
  return (
    <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {props.list.map((skill) => {
            const Icon = skillIcons[skill];
            return <SkillBadge key={skill} name={skill} Icon={Icon}/>
          })}
        </div>

    </section>
  )
}


