import React, { useState } from "react";
import {
	VStack,
	Text,
	Button,
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
} from "@chakra-ui/react";

const GetCredentialComponent = () => {
	return (
		<VStack w='full' minH='50vh' p={4} spacing={12}>
			<Text fontSize='30px' fontWeight='semibold'>
				Get Credential
			</Text>

			<UnorderedList spacing={8}>
				<ListItem>
					<Text fontSize={18}>
						Download PolyognID App from {""}
						<a
							href='https://apps.apple.com/us/app/polygon-id/id1629870183'
							target='_blank'
							rel='noopener noreferrer'
							style={{ textDecoration: "underline" }}
						>
							IOS
						</a>
						{" or "}
						<a
							href='https://play.google.com/store/apps/details?id=com.polygonid.wallet'
							target='_blank'
							rel='noopener noreferrer'
							style={{ textDecoration: "underline" }}
						>
							Android
						</a>
					</Text>
				</ListItem>
				<ListItem>
					<Text fontSize={18}>
						Get a KYCAgeCredential from {""}
						<a
							href='https://issuer-ui.polygonid.me/credentials/issued?page=1&max_results=10'
							target='_blank'
							rel='noopener noreferrer'
							style={{ textDecoration: "underline" }}
						>
							PolygonID demo issuer
						</a>
					</Text>
				</ListItem>
			</UnorderedList>
		</VStack>
	);
};

export default GetCredentialComponent;
