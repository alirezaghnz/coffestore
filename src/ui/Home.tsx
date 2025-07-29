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
        position="relative"
        justifyItems="center"
        justifyContent="center"
      >
        <Text fontSize="50px" mb="30px">
          منو کافی
        </Text>
        <Menu />
      </Box>
      <Box mt="100px" px="10" py="10" justifyItems="center">
        <Text fontSize="50px" mb="15px">
          Opening Hours
        </Text>
        <Box w="16px" h="1px" bg="gray.200"></Box>
        <Text fontSize="20px">پمو کافی 7 روز هفته در خدمت شماست</Text>
        <Flex
          gap="100px"
          w="50%"
          bg="white"
          direction="column"
          borderRadius="2xl"
          boxShadow="lg"
          px="50px"
          py="50px"
          mt="10px"
          fontSize="30px"
        >
          <Box display="flex" justifyContent="space-between">
            <Text>شنبه</Text>
            <Text bg="gray.200" borderRadius="lg" px="20px" py="20px">
              07:00 - 23:00
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>یکشنبه</Text>
            <Text bg="gray.200" borderRadius="lg" px="20px" py="20px">
              07:00 - 23:00
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>دوشنبه</Text>
            <Text bg="gray.200" borderRadius="lg" px="20px" py="20px">
              07:00 - 23:00
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>سه شنبه</Text>
            <Text bg="gray.200" borderRadius="lg" px="20px" py="20px">
              07:00 - 23:00
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>چهارشنبه</Text>
            <Text bg="gray.200" borderRadius="lg" px="20px" py="20px">
              07:00 - 23:00
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>پنجشنبه</Text>
            <Text bg="gray.200" borderRadius="lg" px="20px" py="20px">
              07:00 - 23:00
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>جمعه</Text>
            <Text bg="gray.200" borderRadius="lg" px="20px" py="0px">
              07:00 - 23:00
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
