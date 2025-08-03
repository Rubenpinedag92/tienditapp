import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";


export default function HomeFooter() {
	return <Stack alignItems={"flex-start"} width={"100%"} paddingLeft={"10vw"} bgColor={"#25282a"}>
		<Stack>
			<Box paddingTop={"12"} borderRightWidth={"thin"} borderRightColor={"yellow.500"}>
				<Image src="footerlogo.png" width={"30"} paddingRight={"5"} />
			</Box>
		</Stack>
		<Text paddingY={"4"} fontSize={"xx-small"} color={"whiteAlpha.900"}>© 2025 Copyright Kion Home</Text>
	</Stack>
}
