import { Button, Card, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import type { Product } from "../../models/types"

type ProductCardListProps = {
	products: Product[]
}

export default function ProductCardList(props: ProductCardListProps) {
	const { products } = props;
	return <Flex wrap={"wrap"} maxW={"50vw"} gap={"7"}>
		{
			products.map(p => <Card.Root padding={"3"} maxW={"sm"} border={"none"} variant={"elevated"} bgColor={"transparent"} >
				<Image src={p.imageUrl} height={"sm"} />
				<Flex>
					<Text fontWeight={"normal"}>{p.title}</Text>
					<Spacer></Spacer>
					<Stack gap={"0"}>
						<Text>{p.discountedPrice}€</Text>
						{p.sale ? <Text fontWeight={"light"} fontSize={"sm"} textDecoration={"line-through"} color={"gray.500"} textAlign={"right"}>{p.price}€</Text> : ""}
					</Stack>
				</Flex>
				<Spacer />
				<Text paddingTop={"3"} fontWeight={"light"} color={"gray.500"} fontSize={"sm"}>
					{p.desc}
				</Text>
				<Button colorPalette={"yellow"} variant={"solid"}>Ver mas.</Button>

			</Card.Root>)
		}
	</Flex>
}


