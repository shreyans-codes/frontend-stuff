import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CustomCard = ({ propsClassName, title, description, body_text }) => {
  console.log(propsClassName);
  return (
    <Card className={propsClassName}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {body_text ? (
        <CardContent>
          <p className="" dangerouslySetInnerHTML={{ __html: body_text }}></p>
        </CardContent>
      ) : null}
    </Card>
  );
};

export default CustomCard;
