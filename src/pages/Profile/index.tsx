import React from "react";
import { Tabs } from "@/shared";
import { Box, Card } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Card bg='transparent' h="90%" w="95%" p='5'>
      <Tabs
        variant="enclosed"
        items={[
          { children: <div>TEST1</div>, key: "TEST", title: "TEST" },
          { children: <div>TEST2</div>, key: "TEST", title: "TEST" },
        ]}
      />
    </Card>
  );
};

export default Profile;
