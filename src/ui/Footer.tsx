import { Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <VStack
      w="100%"
      h="600px"
      borderTop="1px solid lightgray"
      backgroundImage="url('src/assets/pics/footerbg.svg')"
      backgroundSize="cover"
    >
      <Text mt="20" fontSize="3xl" fontWeight="semiBold">
        درباره ما
      </Text>
      <Text fontSize="2xl" textAlign="center">
        ما در کافه پمو، تجربه‌ای فراموش‌نشدنی را برای دوست‌داران قهوه فراهم
        می‌کنیم. <br />
        در کافه پمو، اولویت ما ایجاد فضایی دلنشین و آرام برای لذت بردن شماست.
        <br /> طراحی داخلی ما با الهام از آرامش و طبیعت،
        <br />
        شامل مبلمان راحت، نورپردازی ملایم و دکوراسیونی برگرفته از عناصر طبیعی
        است.
      </Text>
    </VStack>
  );
}
