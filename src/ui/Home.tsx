import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Menu from "../features/menu/menu";

export default function Home() {
  return (
    <Box position="relative" px="4">
      {/* BOX 1 */}
      <Box maxW="lg" zIndex="2" position="relative" mt="10">
        <Text fontWeight="bold" px="10">
          یک کافی فراموش نشدنی...
        </Text>
        <Text fontSize="lg" mt="4" px="10">
          ما را در قلب سوس پیدا کنید و از یک تجربه فراموش نشدنی قهوه لذت ببرید!
        </Text>
      </Box>

      {/* BOX 2*/}
      <Box
        mt="150px"
        bg="white"
        position="relative"
        borderRadius="3xl"
        zIndex="1"
        w={{ base: "100%", md: "90%", lg: "80%" }}
        mx="auto"
        p="10"
        boxShadow="lg"
      >
        <Flex direction="column" justify="space-between" bg="whiteAlpha.100">
          <Text px="10" py="10" fontWeight="bold">
            موقعیت جغرافیایی ما:
          </Text>

          <Text px="10" py="10">
            ما را در قلب سوس پیدا کنید...
          </Text>

          <Flex gap="4" justify="center">
            <Button w="200px" borderRadius="full">
              کپی لوکیشن
            </Button>
            <Button w="200px" borderRadius="full">
              گوگل مپ
            </Button>
          </Flex>
        </Flex>

        <Image
          alt="coffee"
          position="absolute"
          top="-300px"
          left="50%"
          transform="translateX(-50%)"
          w={{ base: "200px", md: "500px" }}
          zIndex="2"
          src="src/assets/pics/headerbg.png"
        />
      </Box>

      <Image
        src="src/assets/pics/aboutbg.svg"
        position="absolute"
        top="150px"
        left="0"
        objectFit="cover"
        width="100%"
        alt="background"
        zIndex="0"
      />

      <Box
        mt="100px"
        h="1000px"
        px="10"
        py="10"
        border="1px solid"
        position="relative"
        justifyItems="center"
      >
        <Text fontSize="50px" mb="30px">
          منو کافی
        </Text>
        <Menu />
      </Box>
    </Box>
  );
}
