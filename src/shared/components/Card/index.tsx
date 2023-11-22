import React, { ReactNode } from "react";

import {
  Card as CardComponent,
  CardHeader,
  CardBody,
  Heading,
  CardProps,
} from "@chakra-ui/react";

interface CardInterface extends CardProps {
  children: ReactNode;
  title: string;
}

export const Card = ({ children, title, ...rest }: CardInterface) => {
  return (
    <CardComponent {...rest}>
      <CardHeader>
        <Heading size="lg">{title}</Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </CardComponent>
  );
};
