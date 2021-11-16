import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">         
          <Input
            label="E-mail"
            name="email"
            id="email"
            type="email"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900"
            }}
            size="lg"
            />
        
          <Input
            label="Senha"
            name="password"
            id="password"
            type="password"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900"
            }}
            size="lg"
          />         
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
