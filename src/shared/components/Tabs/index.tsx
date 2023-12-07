import React from "react";
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabsProps,
  TabProps,
} from "@chakra-ui/react";

interface TabItemInterface extends TabProps {
  children: React.ReactNode;
}

interface TabsInterface extends Omit<TabsProps, "children"> {
  items: TabItemInterface[];
}

export const Tabs = ({ items, ...rest }: TabsInterface) => {
  return (
    <ChakraTabs {...rest}>
      <TabList>
        {items.map((i) => (
          <Tab {...i} key={i.key}>
            {i.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {items.map((i) => (
          <TabPanel>{i.children}</TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
};
