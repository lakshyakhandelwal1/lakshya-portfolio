import React from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from 'next/link';

interface CardProps {
  name: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<CardProps> = ({ name, description, link }) => {
  return (
    <Card className='dark:bg-trans-blue dark:border-white dark:text-white border dark:border shadow-xl bg-gray-100'>
      <Link href={link}>
        <CardHeader>
          <CardTitle>{ name }</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mt-auto">{ description }</p>
        </CardContent>
      </Link>
    </Card>
  )
}

export default ProjectCard;