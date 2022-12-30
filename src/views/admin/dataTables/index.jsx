import React from "react";
// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import TotalSpent from "views/admin/dataTables/components/TotalSpent";
import WeeklyRevenue from "views/admin/dataTables/components/WeeklyRevenue";
import General from "views/admin/dataTables/components/General";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <General
        gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
        minH="365px"
        pe="20px"
      />
    </Box>
  );
}
