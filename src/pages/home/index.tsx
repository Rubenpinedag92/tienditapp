import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react"
import Header from "./header"
import "./index.css"
import { ImageCarousel } from "../../components/imageCarousel/index.tsx"
import ArticleStack from "../../components/article-stack/index.tsx"
import type { Article, Product } from "../../models/types.ts"
import ProductCardList from "../../components/product-card-list/index.tsx"

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
		price: 219,
		discountedPrice: 199,
		sale: true
	}]


	return (<Flex width={'100%'} direction={"column"} alignItems="center">
		<Header></Header>
		<ImageCarousel images={["repisa1.jpg", "repisa2.jpg"]}></ImageCarousel>
		<Text paddingTop={'10vh'} fontSize={'5xl'}>Somos expertos en: </Text>
		<Box width={'90vw'} >
			<ArticleStack articles={articles}></ArticleStack>
		</Box>
		<Flex>
			<ProductCardList products={products}></ProductCardList>
		</Flex>
	</Flex>)

}
