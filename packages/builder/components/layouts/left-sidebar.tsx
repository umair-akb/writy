import { Flex, IconButton, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { MdSettings } from "react-icons/md";

const LeftSidebar: FC = () => {
  return (
    <Flex
      h="calc(100vh - 80px)"
      w="80px"
      borderRightWidth={1}
      py={4}
      justifyContent="center"
    >
      <VStack spacing={4} align="center">
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
      </VStack>
    </Flex>
  );
};

export default LeftSidebar;