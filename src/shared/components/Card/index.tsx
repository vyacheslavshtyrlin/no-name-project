import React, { ReactNode } from "react";

import {
  Card as CardComponent,
  CardHeader,
  CardBody,
  Heading,
  CardFooter,
  CardProps,
  Stack,
} from "@chakra-ui/react";

interface CardInterface extends CardProps {
  children?: ReactNode;
  title?: string;
  action?: ReactNode;
  extraAction?: ReactNode;
}

export const Card = ({
  children,
  title,
  action,
  extraAction,
  ...rest
}: CardInterface) => {
  return (
    <CardComponent {...rest}>
      {title && (
        <CardHeader>
          <Heading size={rest.size}>{title}</Heading>
        </CardHeader>
      )}
        {children ? <CardBody>{children}</CardBody> : <></>}
        {action ? (
          <CardFooter
            alignItems="center"
            justify="space-between"
            flexWrap="wrap"
          >
            {action}
            {extraAction ? extraAction : <></>}
          </CardFooter>
        ) : (
          <></>
        )}
    </CardComponent>
  );
};
