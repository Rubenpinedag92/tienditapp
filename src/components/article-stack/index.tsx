import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import type { Article } from "../../models/types";


type ArticleStackProps = {
	articles: Article[]
}
export default function ArticleStack(props: ArticleStackProps) {
	const { articles } = props;

	return (<>
		{
			articles.map((a: Article, i: number) => {
				if (i % 2 == 0) {
					return <HStack paddingTop={"3vh"}>
						<Stack paddingRight={"20"}>
							<Text fontSize={'5xl'}>{a.title}</Text>
							<Text fontSize={"large"}>{a.text}</Text>
							<Button variant={"surface"} colorPalette={"yellow"} rounded={"none"} padding={"7"} width={"fit"} >Ver {a.title}</Button>
						</Stack>
						<Image width={'100%'} height={'auto'} src={a.imageUrl}></Image>
					</HStack>
				} else {
					return <HStack paddingTop={"3vh"}>
						<Image src={a.imageUrl} width={"100%"} height={"auto"}></Image>
						<Stack paddingLeft={"20"}>
							<Text fontSize={'5xl'}>{a.title}</Text>
							<Text fontSize={"large"}>{a.text}</Text>
							<Button variant={"surface"} colorPalette={"yellow"} rounded={"none"} padding={"7"} width={"fit"}>Ver {a.title}</Button>
						</Stack>

					</HStack>

				}
			})
		}
	</>
	);
}
