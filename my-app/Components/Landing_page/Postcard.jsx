import {
  Box,
  Text,
  Img,
  CardHeader,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Button,
  Heading,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";

export  default function Postcard ({ data }) {
  const { title, content, image } = data;

  return (
    <Box w={{ base: "100%", md: "70%", lg: "90%" }} m={"auto"} alignItems={"center"} mx={"20px"} my={"30px"}>
      <Card maxW="xxxl" m={"auto"}>
        <CardBody>
          <Image src={image} alt="Green double couch with wooden legs" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{content}</Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </Box>
  );
};
