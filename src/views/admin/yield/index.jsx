// Chakra imports
import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Storage from "views/admin/yield/components/Storage";
import Upload from "views/admin/yield/components/Upload";
import PieCard from "views/admin/yield/components/PieCard";

// Assets
import React from "react";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr",
        }}
        templateRows={{
          base: "repeat(2, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Upload
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe="20px"
          pb={{ base: "100px", lg: "20px" }}
        />
        <PieCard
          maxH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe="20px"
          pb={{ base: "100px", lg: "20px" }}
        />
      </Grid>
      <Grid
        mb="20px"
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Storage
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          used={25.6}
          total={50}
        />
      </Grid>
    </Box>
  );
}
