import { Box, Button, Card, Field, Fieldset, Flex, Image, Input } from "@chakra-ui/react";
import "./index.css"

export default function Login() {
	return <Flex className="backgroundGradient" flexDir={"column"} justifyContent={"center"} alignItems={"center"} height={"100vh"} >
		<Image src="icon.png" width={"3xs"} paddingBottom={"10vh"}></Image>
		<Card.Root width={"25%"} > <Card.Body>

			<Fieldset.Root>
				<Fieldset.Legend>
					<Fieldset.Legend>Inicio de sesion</Fieldset.Legend>
				</Fieldset.Legend>
				<Fieldset.Content>
					<Field.Root>
						<Field.Label>Correo</Field.Label>
						<Input name="email" type="email" ></Input>
					</Field.Root>
				</Fieldset.Content>
				<Fieldset.Content>
					<Field.Root>
						<Field.Label>Contrasena</Field.Label>
						<Input name="password" type="password" ></Input>
					</Field.Root>
				</Fieldset.Content>
			</Fieldset.Root>
		</Card.Body>
			<Card.Footer>
				<Button>Iniciar Sesion</Button>
			</Card.Footer>
		</Card.Root>
	</Flex >
}
