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

export const Postcard = ({ data }) => {
  const { title, content, image } = data;

  return (
    <Box m={"auto"} w={"50%"}>
      <Card maxW="xs">
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Image src={image} borderRadius="lg" maxW={{ base: "50%", sm: "200px" }} w={"50vw"} h={"50vh"} />
          <Stack mt="6" spacing="3">
            <Text>{content}</Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </Box>
  );
};
