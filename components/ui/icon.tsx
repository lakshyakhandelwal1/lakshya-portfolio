import Image from 'next/image'
import React from 'react'

interface IconProps {
  sizeClass?: string,
  iconName: string,
};

const Icon:React.FC<IconProps> = ({ sizeClass, iconName }) => {
  const appliedClass = (sizeClass ?? `w-6 transition-all hover:scale-125`);
  return (
    <Image width={200} height={200} alt={iconName} src={`/assets/icons/${iconName}.svg`} className={appliedClass}/>
  )
}

export default Icon