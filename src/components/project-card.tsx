import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  title: string;
  description: string;
}

const images = [
  "/image/blog-1.svg",
  "/image/blog2.svg",
  "/image/blog3.svg",
  "/image/blog4.svg"
]

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const randomImageSrc = getRandomImage();


export function ProjectCard({title, description }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={randomImageSrc}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {description}
        </Typography>
        {/* <Button color="gray" size="sm">
          see details
        </Button> */}
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
