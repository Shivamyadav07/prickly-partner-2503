import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { Flex, Box, Image, Text, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ProductCard = ({
  item,
  setTotal,
  total,
  mrpTotal,
  totalDiscount,
  setMRPTotal,
  setTotalDiscount,
}) => {
  const [count, setCount] = useState(1);
  // console.log(item);
  const handleDecrease = () => {
    setCount(() => count - 1);
    console.log(total);
    console.log(item.price);
    setTotal(() => (total - item.price).toFixed(2));
    setMRPTotal(() => mrpTotal - item.strikedPrice);
    setTotalDiscount(() => totalDiscount - (item.strikedPrice - item.price));
  };

  const handleIncrease = () => {
    setCount(() => count + 1);
    console.log(typeof total);
    console.log(typeof item.price);
    setTotal(() => (Number(total) + Number(item.price)).toFixed(2));
    setMRPTotal(() => mrpTotal + Number(item.strikedPrice));
    setTotalDiscount(
      () => totalDiscount + (Number(item.strikedPrice) - Number(item.price))
    );
  };
  return (
    <Flex my="3" w="100%" h="max-content">
      <Box w="25%" h="12rem">
        <Image w="100%" h="100%" fit="contain" src={item.image} />
      </Box>
      <Box w="75%" px="2" h="max-content">
        <Text align="left" mb="3" fontWeight="semibold" fontSize="md">
          {item.title}
        </Text>
        <Flex my="3" align="center">
          <Text fontWeight="semibold" fontSize="xl">
            {`₹ ${(item.price * count).toFixed(2)}`}
          </Text>
          <Text as="s" mx="2">
            {`₹ ${(item.strikedPrice * count).toFixed(2)}`}
          </Text>
          <Text color="green" fontWeight="semibold">
            {`You Save ₹ ${((item.strikedPrice - item.price) * count).toFixed(
              2
            )}`}
          </Text>
        </Flex>
        {item.size && (
          <Flex>
            <Text align="left">{`Size: ${item.size} / `}</Text>

            <Text>Color: {item.color}</Text>
          </Flex>
        )}
        <Flex my="3" align="center">
          <Text fontSize="sm">Sold By</Text>
          <Text color="green" ml="2" fontWeight="semibold">
            {item.soldBy}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text cursor="pointer">SAVE FOR LATER</Text>
          <Flex align="center">
            <IconButton
              colorScheme="teal"
              aria-label="Call Segun"
              size="md"
              borderRadius="50%"
              icon={<MinusIcon />}
              disabled={count === 1}
              onClick={handleDecrease}
            />
            <Text px="4">{count}</Text>
            <IconButton
              colorScheme="teal"
              aria-label="Call Segun"
              size="md"
              borderRadius="50%"
              icon={<AddIcon />}
              onClick={handleIncrease}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductCard;