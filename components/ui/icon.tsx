import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface IconProps {
  sizeClass?: string,
  iconName: string,
  href?: string,
};

const Icon:React.FC<IconProps> = ({ sizeClass, iconName, href }) => {
  const appliedClass = (sizeClass ?? `w-6 transition-all hover:scale-125`);
  return (
    <Link href={href??'#'}>
      <Image width={200} height={200} alt={iconName} src={`/assets/icons/${iconName}.svg`} className={appliedClass}/>
    </Link>
  )
}

export default Icon