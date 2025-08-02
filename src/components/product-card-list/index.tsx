import { Box, Card, Flex, Image } from "@chakra-ui/react"
import type { Product } from "../../models/types"

type ProductCardListProps = {
	products: Product[]
}

export default function ProductCardList(props: ProductCardListProps) {
	const { products } = props;
	return <Flex wrap={"wrap"} maxW={"50vw"}>
		{
			products.map(p => <Card.Root>
			</Card.Root>)
		}
	</Flex>
}
