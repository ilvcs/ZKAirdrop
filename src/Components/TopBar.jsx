// For Page TopBar Component
// Plain but at the right side of the screen it contains a button to connect wallet
// If connected it will show the wallet address like 0x1234...5678

import { useState, useContext } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { ethers } from "ethers";
//import { Web3Context } from "../Context/Web3Context";

const TopBar = () => {
	//c; //onst { address, connectWallet } = useContext(Web3Context);
	const [address, setAddress] = useState("");
	const [loading, setLoading] = useState(false);

	const connectWallet = async () => {
		try {
			if (window.ethereum) {
				setLoading(true);
				const provider = new ethers.BrowserProvider(window.ethereum);
				// MetaMask requires requesting permission to connect users accounts
				const signer = await provider.getSigner();

				const address = await signer.getAddress();
				setLoading(false);
				setAddress(address);
			}
		} catch (error) {
			console.log(error);
			return alert("Error connecting to wallet", error);
		}
	};
	return (
		<Flex
			justifyContent='space-between'
			alignItems='center'
			p={4}
			px={8}
			bg='gray.800'
			color='white'
		>
			<Text fontSize='24px' fontWeight='semibold'>
				ZK Airdrop
			</Text>
			{address ? (
				<Text fontWeight='semibold'>{`${address.substring(
					0,
					5,
				)}...${address.substring(address.length - 3)}`}</Text>
			) : (
				<Button colorScheme='blue' onClick={connectWallet} isLoading={loading}>
					Connect Wallet
				</Button>
			)}
		</Flex>
	);
};

export default TopBar;
