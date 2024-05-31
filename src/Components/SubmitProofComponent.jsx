import { Button, Text, VStack, Image } from "@chakra-ui/react";

const SubmitProofComponent = () => {
	return (
		<VStack w='full' minH='50vh' p={4} spacing={4}>
			<Text fontSize='30px' fontWeight='semibold'>
				SubmitProof
			</Text>
			<Text fontSize={18}>
				Scan the QR code with your PolygonID app to submit your proof to the
				verifier.
			</Text>
			<VStack p={4}>
				<Image h='300px' w='300px' src='./proofsQR.png' alt='QR Code' />
			</VStack>
		</VStack>
	);
};

export default SubmitProofComponent;
