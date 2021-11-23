import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Paulo Xavier</Text>
          <Text color="gray.300" fontSize="small">
            pxavierf@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Paulo Xavier" src="https://github.com/PauloGrijp"/>
    </Flex>
  );
}