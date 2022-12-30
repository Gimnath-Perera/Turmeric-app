// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Project from "views/admin/quality-analyze/components/Project";

export default function Projects(props) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        Previous Checks
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
        Provident similique accusantium nemo autem. Veritatis obcaecati tenetur
        iure eius earum. Ut molestias architecto voluptate aliquam nihil,
        eveniet
      </Text>
      <Project
        boxShadow={cardShadow}
        mb="20px"
        image={
          "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-66636383/66636383.jpg"
        }
        ranking="1"
        link="#"
        title="Technology behind the Blockchain"
      />
      <Project
        boxShadow={cardShadow}
        mb="20px"
        image="https://homesteadandchill.com/wp-content/uploads/2019/12/how-to-make-turmeric-powder-homegrown-feature.jpeg"
        ranking="2"
        link="#"
        title="Greatest way to a good Economy"
      />
      <Project
        boxShadow={cardShadow}
        image="https://www.caiteyjay.com/wp-content/uploads/2021/12/Turmeric-Substitute-1x1-1-1.jpg"
        ranking="3"
        link="#"
        title="Most essential tips for Burnout"
      />
    </Card>
  );
}
