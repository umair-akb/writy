import {
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import HeroSectionEditorColorsPanel from "components/editor/sections/hero/panels/colors";
import HeroSectionEditorTextPanel from "components/editor/sections/hero/panels/text";
import React, { FC } from "react";
import { MdColorLens, MdDvr, MdTextFields } from "react-icons/md";

interface IProps {
  positionOfSection: number;
}

const HeroSectionEditor: FC<IProps> = ({ positionOfSection }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdTextFields} />
            <Text>Text</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdColorLens} />
            <Text>Colors</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdDvr} />
            <Text>Layouts</Text>
          </HStack>
        </Tab>
      </TabList>
      <TabPanels minH="400px">
        <TabPanel>
          <HeroSectionEditorTextPanel positionOfSection={positionOfSection} />
        </TabPanel>
        <TabPanel>
          <HeroSectionEditorColorsPanel positionOfSection={positionOfSection} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default HeroSectionEditor;