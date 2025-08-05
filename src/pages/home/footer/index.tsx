import { Box, Flex, HStack, Icon, Image, List, Stack, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdHome } from "react-icons/md";

export default function HomeFooter() {
	return <Stack alignItems={"flex-start"} width={"100%"} bgColor={"black"}>

		<Box paddingLeft={"10vw"} display={"flex"} paddingY={"10"} divideX={"1px"} divideColor={"yellow.500"} width={"100%"} height={"30vh"} bgColor={"#25282a"} color={"white"}>
			<Box>
				<Image src="footerlogo.png" width={"30"} paddingRight={"5vw"} />
			</Box>
			<Box>
				<Flex height={"100%"} paddingX={"5vw"} flexDirection={"column"} wrap={"wrap"} gapX={"52"} gapY={"3"}>
					<Text>Home</Text>
					<Text>Preguntas frecuentes</Text>
					<Text>Registro</Text>
					<Text>Productos</Text>
					<Text>Conócenos</Text>
					<Text>Contactar</Text>
					<Text>Condiciones de uso</Text>
					<Text>Política de privacidad</Text>
					<Text>Política de cookies</Text>
					<Text>Pedidos y Pagos</Text>
					<Text>Envíos y entregas</Text>
					<Text>Devoluciones y cambios</Text>
				</Flex>
			</Box>
			<Box>
				<Flex height={"100%"} flexDirection={"column"} paddingX={"2vw"} gapY={"3"} fontSize={"sm"}>
					<Text>Metodos de pago</Text>
					<Image src="paypal-icon.png" width={"25"} />
					<Text>Metodos de envio</Text>
					<Image src="mrw-icon.png" width={"20"} />
				</Flex>
			</Box>
			<Box>
				<Flex height={"100%"} flexDirection={"column"} paddingLeft={"5vw"} gapY={"3"} fontSize={"sm"}>
					<Text>Siguenos en: </Text>
					<Flex gapX={"2"}>
						<FaFacebook size={"24"} />
						<FaInstagram size={"24"} />
						<FaYoutube size={"24"} />
						<FaPinterest size={"24"} />
					</Flex>
					<Text fontSize={"xs"}>info@kionhome.com</Text>
				</Flex>
			</Box>
		</Box >
		<Text paddingLeft={"10vw"} paddingY={"4"} fontSize={"xx-small"} color={"whiteAlpha.900"}>© 2025 Copyright Kion Home</Text>
	</Stack >
}
