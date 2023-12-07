import { defineStyleConfig } from "@chakra-ui/react";

export const components = {
  Menu: defineStyleConfig({
    baseStyle: {
      list: {
        bg: "neutral.400",
        border: "none",
      },
      item: {
        _hover: {
          color: "neutral.100",
          bg: "primary.400",
        },
        bg: "netural.300",
      },
    },
  }),
  Heading: defineStyleConfig({
    baseStyle: {
      color: "#fff",
    },
  }),
  Card: defineStyleConfig({
    baseStyle: {
      container: {
        bg: "neutral.200",
      },
      header: {
        paddingBottom: 2,
      },
      body: {
        color: "neutral.600",
      },
    },
  }),
  Button: defineStyleConfig({
    baseStyle: {
      color: '#fff'
    },
    variants: {
      primary: {
        bg: "primary.500",
        _hover: {
          bg: "primary.400",
        },

        color: "neutral.100",
      },
      danger: {
         bg: "danger",
         _hover: {
            bg: 'red.600'
         }
      },
      warning: {
         bg: 'warning'
      },
      accent: {
         bg: 'accent.400',
         _hover: {
            bg: 'accent.300'
         }
      }
    },
  }),
  Tabs:defineStyleConfig({
    baseStyle: {
      root: {
        bg: 'transparent',
        gap: '50',
        borderColor: "neutral.300",
      },
      tab: {
        color: '#ffff',
        _hover: {
          bg: "neutral.300",
        },
        borderBottom: '#575757',

        fontWeight: "400",
        mb: "50",
        padding: '50',
        _selected: {
          color: 'neutral.100',
          bg: "primary.500",
          borderBottom: '#575757',
        },
      },
      tablist: {
        color: '#ffff',
        mb: "50",
        _selected: {
          color: 'neutral.100',  
        },
      },

      tabpanel: {
        mt: '10',
        h: '100%',
        bg: 'neutral.300'
      },
      tabpanels: {
        mt: '10',
      
        h: '100%'
      }
    }
  })
};
