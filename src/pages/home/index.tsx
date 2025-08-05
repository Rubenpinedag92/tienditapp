import { Box, Button, Flex, HStack, Image, Input, Stack, Text } from "@chakra-ui/react"
import Header from "./header"
import "./index.css"
import { ImageCarousel } from "../../components/imageCarousel/index.tsx"
import ArticleStack from "../../components/article-stack/index.tsx"
import type { Article, Product } from "../../models/types.ts"
import ProductCardList from "../../components/product-card-list/index.tsx"
import ImageDescription from "../../components/image-description/index.tsx"
import HomeFooter from "./footer/index.tsx"

export default function Home() {
	const articles: Article[] = [{
		title: "Estantes flotantes",
		text: "Estanterías flotantes de pared para libros, cocina, plantas, baño y decoración. Escoge tu favorita de entre nuestra colección de baldas Alysa (100% acero) o nuestra colección Thais (madera y metal). Organiza, almacena y decora.",
		imageUrl: 'articulo1.jpg',
		url: ""
	},
	{
		title: "Mesas",
		text: "Encuentra la mesa que estás buscando: mesas de centro, auxiliares, escritorios, mesas de comedor, mesitas de noche, tableros de madera a medida y patas para mesa.",
		imageUrl: "articulo2.jpg",
		url: ""
	}]

	const products: Product[] = [{
		desc: "Pack de seis estantes flotantes para libros. Diseñados...",
		title: "Juego de 6 - Estante para libros Alysa 60 cm",
		price: '219.00',
		discountedPrice: '199.00',
		sale: true,
		imageUrl: "producto1.jpg"
	},
	{
		desc: "Pack de dos mesitas de noche flotantes Alysa. Diseñadas...",
		title: "Juego de 2 - Mesita de noche Alysa",
		price: "135.00",
		discountedPrice: "110.00",
		sale: true,
		imageUrl: "producto2.jpg"
	},
	{
		desc: "Estantería metálica para libros vertical, elaborada en chapa...",
		title: "Estante para libros Vertical Alysa",
		price: "48.00",
		discountedPrice: "48.00",
		sale: false,
		imageUrl: "producto3.jpg"
	},
	{
		desc: "Juego de cuatro estantes flotantes para cocina de chapa...",
		title: "Juego de 4 - Estante para la cocina Alysa 60cm",
		price: "71.00",
		discountedPrice: "165.00",
		sale: true,
		imageUrl: "producto4.jpg"
	}]


	return (<Flex width={'100%'} direction={"column"} alignItems="center">
		<Header></Header>
		<ImageCarousel images={["repisa1.jpg", "repisa2.jpg"]}></ImageCarousel>
		<Text paddingTop={'10vh'} fontSize={'5xl'}>Somos expertos en: </Text>
		<Box width={'65vw'} justifyContent={"center"}>
			<ArticleStack articles={articles}></ArticleStack>
		</Box>
		<Flex paddingY={"10vh"} paddingTop={"10vh"} width={"80vw"}>
			<Stack>
				<Text fontWeight={"normal"} fontSize={"5xl"}>Nuestros Basicos</Text>
				<ProductCardList products={products}></ProductCardList>
			</Stack>
			<Stack width={"25vw"} padding={"7"} borderTopRightRadius={"130px"} bgImage="linear-gradient(to bottom, #f1be48 60%, white 50%)">
				<Text paddingBottom={"20px"} color={"white"} fontSize={"3xl"} fontWeight={"lighter"} width={"30%"}>BLOG</Text>
				<Text paddingBottom={"20px"} fontWeight={"semibold"} fontSize={"5xl"} maxW={"80%"} lineHeight={"1"}>Cómo Elegir Estantes Flotantes para tu Hogar – Guía de Estilo y Función</Text>
				<Button variant={"solid"} width={"33%"}> Leer articulo blog</Button>
				<Image paddingTop={"50px"} src="blog1.jpg" width={"sm"}></Image>
			</Stack>
		</Flex>
		<Flex padding={"10"} width={"100%"} justifyContent={"space-evenly"}>
			<ImageDescription title="Diseño y fabricación 100% en Barcelona" description="Piensa global, actúa local. Creemos en una economía circular sostenible." imageUrl="ventajas1.jpg" />
			<ImageDescription title="Pago seguro y financiado" description="Podrás elegir entre pagar con el producto en mano o financiar el pago del mismo en 3, 6 o 12 meses." imageUrl="ventajas2.jpg" />
			<ImageDescription title="Envíos gratuitos estés donde estés" description="Hemos añadido el IVA y los gastos de envío a todos nuestros precios para que no tengas que preocuparte por nada." imageUrl="ventajas3.jpg" />
		</Flex>
		<Stack alignItems={"center"} width={"100%"} bgColor={"gray.200"} height={"30vh"} justifyContent={"center"}>
			<Text fontSize={"5xl"} fontWeight={"normal"}>Únete a nuestra newsletter</Text>
			<Text fontSize={"xl"} fontWeight={"normal"} color={"gray.400"}>Recibe descuentos exclusivos y novedades antes que nadie.</Text>
			<HStack gap={"0"} paddingTop={"5"} width={"28vw"}>
				<Input height={"45px"} borderRadius={"none"} bgColor={"white"} placeholder="Escribe aqui tu email" _placeholder={{ color: "yellow.500", fontSize: "xl", fontWeight: "normal" }} borderBottomColor={"yellow.500"} />
				<Button borderRadius={"none"} height={"45px"}>Inscribirse</Button>
			</HStack>
		</Stack>
		<HomeFooter></HomeFooter>
	</Flex >)

}
