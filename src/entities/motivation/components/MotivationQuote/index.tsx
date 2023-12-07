import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";
import { useGetMotivationQuery } from "../../api/motivationApi";
export const MotivationQuote = ({ ...rest }: HeadingProps) => {
  const { data } = useGetMotivationQuery();
  return <Heading {...rest}>{data ? data : "..."}</Heading>;
};
