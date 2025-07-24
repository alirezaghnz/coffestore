import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  chakra,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box position="relative" px="9" py="10" mt="2" bg="gray.50">
      <Box maxW="lg" zIndex="2" position="relative">
        <Text fontSize="4xl" fontWeight="bold">
          یک قهوه فراموش نشدنی...
        </Text>
        <Text fontSize="lg" mt="4">
          جایی دنج برای عاشقان قهوه؛
          <br />
          کافه ما فضای راحتی برای شما و دوستانتان فراهم کرده ایم.
        </Text>
        <HStack mb="4">
          <IconButton aria-label="Instagram" variant="ghost" />
        </HStack>
      </Box>
      <Box
        mt="10"
        bg="white"
        position="relative"
        top="10"
        borderRadius="3xl"
        zIndex="1"
        w={{ base: "100%", md: "90%", lg: "80%" }}
        mx="auto"
        p="10"
        boxShadow="lg"
      >
        <Flex
          w={{ base: "150px", md: "1050px" }}
          direction="column"
          justify="space-between"
          bg="whiteAlpha.100"
        >
          <Text px="10" py="10" fontWeight="bold">
            موقعیت جغرافیایی ما:
          </Text>

          <Text px="10" py="10">
            ما را در قلب سوس پیدا کنید و از یک تجربه فراموش نشدنی قهوه لذت
            ببرید!
          </Text>

          <Flex direction="flex" justify="space-around">
            <Button w="500px" borderRadius="full">
              کپی لوکیشن
            </Button>
            <Button w="500px" borderRadius="full">
              گوگل مپ
            </Button>
          </Flex>
        </Flex>

        <Image
          alt="coffee"
          position="absolute"
          bottom="-80px"
          right={{ base: "50%", md: "60%" }}
          top={{ base: "-450px" }}
          transform={{ base: "translateX(50%)", md: "none" }}
          w={{ base: "200px", md: "700px" }}
          zIndex="2"
          src="src/assets/pics/headerbg.png"
        />
      </Box>
      <Image
        src="src/assets/pics/aboutbg.svg"
        position="absolute"
        top="40"
        left="0"
        objectFit="cover"
        width="100%"
        alt="background"
      />
    </Box>
  );
}
