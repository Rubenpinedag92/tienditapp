import { Flex, Float, Image } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { DarkMode } from "../../../components/ui/color-mode";

export default function Header() {
	return (
		<Flex justifyContent={"space-around"} alignItems={"center"} height={'10vh'} width={'100%'} bgColor={"gray.800"}>
			<DarkMode>
				<Image className="icon" src="icon.png" htmlHeight={"50px"} htmlWidth={"50px"} />
				<nav>
					<ul>
						<Flex justifyContent={"center"} gapX={"4"}>
							<li>Productos</li>
							<li>Conocenos</li>
							<li>Blog</li>
							<li>Contactar</li>
						</Flex>
					</ul>
				</nav>
				<FaUser></FaUser>
			</DarkMode>
		</Flex >
	)
}
