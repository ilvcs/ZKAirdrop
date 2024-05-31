import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Heading,
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	useSteps,
	Box,
} from "@chakra-ui/react";
import { useState } from "react";
import GetCredentialComponent from "./GetCredentialComponent";

const steps = [
	{ title: "Step 1", description: "Get Credential" },
	{ title: "Step 2", description: "Submit Proofs" },
	{ title: "Step 3", description: "Claim Airdrop" },
];

export const AirdropClaimStepper = ({ activeIndex }) => {
	const { activeStep } = useSteps({
		index: 1,
		count: steps.length,
	});

	return (
		<>
			<Stepper index={activeIndex} w='82%'>
				{steps.map((step, index) => (
					<Step key={index}>
						<StepIndicator>
							<StepStatus
								complete={<StepIcon />}
								incomplete={<StepNumber />}
								active={<StepNumber />}
							/>
						</StepIndicator>

						<Box flexShrink='0'>
							<StepTitle>{step.title}</StepTitle>
							<StepDescription>{step.description}</StepDescription>
						</Box>

						<StepSeparator />
					</Step>
				))}
			</Stepper>
		</>
	);
};

export default AirdropClaimStepper;

{
	/* <Tabs isFitted variant='enclosed' w='90%'>
<TabList mb='1em'>
	<Tab _selected={{ color: "white", bg: "gray" }}>
		<Heading size='md'>Step 1: Get Credential</Heading>
	</Tab>
	<Tab _selected={{ color: "white", bg: "gray" }}>
		<Heading size='md'>Step 2: Submitt Proofs and get Verified</Heading>
	</Tab>
	<Tab _selected={{ color: "white", bg: "gray" }}>
		<Heading size='md'>Step 3: Claim the Airdrop</Heading>
	</Tab>
</TabList>
<TabPanels>
	<TabPanel>
		<GetCredentialComponent />
	</TabPanel>
	<TabPanel>
		<p>two!</p>
	</TabPanel>
	<TabPanel>
		<p>three!</p>
	</TabPanel>
</TabPanels>
</Tabs> */
}
