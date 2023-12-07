import {
  useToast,
  ToastProps,
  Flex,
  Text,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useCallback } from "react";
import { FiPhoneCall } from "react-icons/fi";

interface CallToastInterface {
  title: string;
  body: string;
  tabTitleBlinkInterval?: number;
  tabTitle?: string;
}

export const useCallNotfication = () => {
  const toast = useToast();
  const { startFlashingTab, stopFlashingTab } = useTabFlashing();

  const notify = useCallback((options: CallToastInterface) => {
    const {
      title,
      body,
      tabTitle = "ТЕСТ",
      tabTitleBlinkInterval = 700,
    } = options;
    toast({
      isClosable: false,
      duration: null,
      position: "bottom-left",
      render: () => <CallToast title={title} body={body} />,
    });
    startFlashingTab({
      tabTitle: tabTitle,
      tabTitleBlinkInterval: tabTitleBlinkInterval,
    });
  }, []);

  const closeNotification = useCallback(() => {
    toast.closeAll();
    stopFlashingTab();
  }, []);

  return {
    notify,
    closeNotification,
  };
};

const useTabFlashing = () => {
  const originalTitle = document.title;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const flashTab = useCallback((tabTitle: string) => {
    document.title =
      document.title === originalTitle ? tabTitle : originalTitle;
  }, []);

  const startFlashingTab = useCallback(
    ({ tabTitle = document.title, tabTitleBlinkInterval = 500 }) => {
      intervalRef.current = setInterval(
        () => flashTab(tabTitle),
        tabTitleBlinkInterval
      );
    },
    [flashTab]
  );

  const stopFlashingTab = useCallback(() => {
    clearInterval(intervalRef.current!);
    document.title = originalTitle;
  }, []);

  return {
    flashTab,
    startFlashingTab,
    stopFlashingTab,
  };
};

const CallToast = ({ title, body }: CallToastInterface) => {
  return (
    <Flex p="2" alignItems="center" gap="5" bg="info" direction="row" w="300px">
      <FiPhoneCall></FiPhoneCall>
      <VStack alignItems="flex-start" gap="2">
        <Heading size="sm">{title}</Heading>
        <Text>{body}</Text>
      </VStack>
    </Flex>
  );
};
