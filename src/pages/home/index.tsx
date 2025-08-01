import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react"
import Header from "./header"
import "./index.css"
import { ImageCarousel } from "../../components/imageCarousel/index.tsx"
import ArticleStack from "../../components/article-stack/index.tsx"

export default function Home() {

	return (<Flex width={'100%'} direction={"column"} alignItems="center">
		<Header></Header>
		<ImageCarousel images={["repisa1.jpg", "repisa2.jpg"]}></ImageCarousel>
		<Text paddingTop={'10vh'} fontSize={'3xl'}>Somos expertos en: </Text>
		<Box width={'60vw'} paddingTop={'15'}>
			<ArticleStack articles={[{ title: "Estantes flotantes", text: "Estanterías flotantes de pared para libros, cocina, plantas, baño y decoración. Escoge tu favorita de entre nuestra colección de baldas Alysa (100% acero) o nuestra colección Thais (madera y metal). Organiza, almacena y decora.", imageUrl: 'articulo1.jpg', articleUrl: "" }]}></ArticleStack>
		</Box>

	</Flex>)

}
