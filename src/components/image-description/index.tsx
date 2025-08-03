import { Box, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"

type ImageDescriptionProps = {
	imageUrl: string,
	description: string,
	title: string
}

export default function ImageDescription(props: ImageDescriptionProps) {
	return <Stack position={"relative"} width={"sm"} height={"xs"} alignItems={"center"}>

		<Image src={props.imageUrl} width={"3xs"} ></Image>
		<Spacer />
		<Box position={"absolute"} top={"150px"}>
			<Text height={"100px"} maxW={"90%"} color={"yellow.500"} lineHeight={"1"} fontSize={"4xl"} textAlign={"center"}>{props.title}</Text>
			<Text textAlign={"center"} fontWeight={"medium"}>{props.description}</Text>
		</Box>
	</Stack>
}
