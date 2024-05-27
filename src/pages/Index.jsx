import React from "react";
import { Container, VStack, HStack, Box, Text, Heading, IconButton, Progress, SimpleGrid, Image } from "@chakra-ui/react";
import { FaChartLine, FaBullseye, FaUsers } from "react-icons/fa";

const KPIBox = ({ title, value, icon }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
    <HStack spacing={4}>
      <Box as={icon} size="24px" />
      <VStack align="start">
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="2xl">{value}</Text>
      </VStack>
    </HStack>
  </Box>
);

const OKRBox = ({ title, progress }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
    <VStack align="start">
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Progress value={progress} size="sm" width="100%" />
      <Text fontSize="sm">{progress}% Complete</Text>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="xl">
          Leadership Dashboard
        </Heading>

        <Heading as="h2" size="lg">
          Key Performance Indicators (KPIs)
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
          <KPIBox title="Revenue" value="$1.2M" icon={FaChartLine} />
          <KPIBox title="Customer Satisfaction" value="89%" icon={FaUsers} />
          <KPIBox title="Market Share" value="15%" icon={FaBullseye} />
        </SimpleGrid>

        <Heading as="h2" size="lg">
          Next Quarter OKRs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%">
          <OKRBox title="Increase Revenue by 20%" progress={50} />
          <OKRBox title="Improve Customer Satisfaction to 95%" progress={30} />
          <OKRBox title="Expand Market Share to 20%" progress={40} />
          <OKRBox title="Launch New Product Line" progress={70} />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
