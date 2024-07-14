import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  description: string;
}

export function SkillCard({ title, description }: SkillCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
      
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-500">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
