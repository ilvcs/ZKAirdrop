import { VStack, Text, HStack, Button } from "@chakra-ui/react";
import React from "react";
import AirdropClaimStepper from "./AirdropClaimStepper";
import GetCredentialComponent from "./GetCredentialComponent";
import SubmitProofComponent from "./SubmitProofComponent";
import ClaimAirdropComponent from "./ClaimAirdropComponent";

const Home = () => {
	const [step, setStep] = React.useState(0);

	const returnStepCompoenent = () => {
		switch (step) {
			case 0:
				return <GetCredentialComponent />;
			case 1:
				return <SubmitProofComponent />;
			case 2:
				return <ClaimAirdropComponent />;
			default:
				return <></>;
		}
	};

	const returnButtonComponent = () => {
		if (step === 0) {
			return (
				<Button onClick={() => setStep(1)} colorScheme='blue' variant='outline'>
					Next
				</Button>
			);
		}
		if (step === 1) {
			return (
				<HStack>
					<Button
						onClick={() => setStep(0)}
						colorScheme='blue'
						variant='outline'
					>
						Back
					</Button>
					<Button
						onClick={() => setStep(2)}
						colorScheme='blue'
						variant='outline'
					>
						Next
					</Button>
				</HStack>
			);
		}

		if (step === 2) {
			return (
				<Button onClick={() => setStep(1)} colorScheme='blue' variant='outline'>
					Back
				</Button>
			);
		}
	};
	return (
		<VStack w='full' h='full' p={8} spacing={8}>
			<Text fontSize='30px' fontWeight='semibold'>
				Welcome to ZK Airdrop
			</Text>

			<AirdropClaimStepper activeIndex={step} />

			{returnStepCompoenent()}
			{returnButtonComponent()}
		</VStack>
	);
};

export default Home;
