import React from "react";
import { Button } from "@chakra-ui/react";
import { useGetAnswerMutation } from "@/entities";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

export const StartQueueButton = () => {
  const [fetch] = useGetAnswerMutation();
  return (
    <Button
      leftIcon={<RiMoneyDollarBoxLine />}
      onClick={() => fetch({ user_id: 1, user_name: "" })}
      variant="accent"
    >
      Открыть
    </Button>
  );
};
