import { Heading, IconButton, VStack } from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";

function App() {
  return (
    <VStack p={4}>
      <IconButton icon={<FaSun />} alignSelf="flex-end" />
      <Heading>Todo Application</Heading>
    </VStack>
  );
}

export default App;
