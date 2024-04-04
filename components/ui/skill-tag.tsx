import React from 'react'

interface SkilltagProps {
  children: React.ReactNode
};

const Skilltag: React.FC<SkilltagProps> = ({ children }) => {
  return (
    <span className='rounded-md px-3 cursor-pointer py-1 bg-green-300 dark:bg-trans-blue backdrop:blur-md bg-opacity-40'>{children}</span>
  )
}

export default Skilltag