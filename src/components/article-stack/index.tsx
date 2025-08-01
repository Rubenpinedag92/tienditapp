import { Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";


type ArticleInfo = {
	articleUrl: string,
	text: string,
	imageUrl: string,
	title: string
}

type ArticleStackProps = {
	articles: ArticleInfo[]
}
export default function ArticleStack(props: ArticleStackProps) {
	const { articles } = props;

	return (<>
		{
			articles.map((a: ArticleInfo, i: number) => {
				if (i % 2 == 0) {
					return <HStack>
						<Stack>
							<Text fontSize={'1xl'}>{a.title}</Text>
							<Text>{a.text}</Text>
							<Button>Ver: {a.title}</Button>
						</Stack>
						<Image width={'100%'} height={'auto'} src={a.imageUrl}></Image>
					</HStack>
				} else {
					return <HStack>
						<Image src={a.imageUrl}></Image>
						<Stack>
							<Text fontSize={'1xl'}>{a.title}</Text>
							<Text>{a.text}</Text>
							<Button>Ver: {a.title}</Button>
						</Stack>

					</HStack>

				}
			})
		}
	</>
	);
}
