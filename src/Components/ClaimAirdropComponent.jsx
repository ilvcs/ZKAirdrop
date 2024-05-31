import {
	Button,
	Heading,
	Input,
	Spinner,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import ZKAirdropVerifier from "../../abi/ZKAirdropVerifier.json";
const ZKAirdropVerifierAddress = "0x125CD5511cE442832B6DB7Af0Dd43981b819e8cF";

const ClaimAirdropComponent = () => {
	const [userAddress, setUserAddress] = useState("");
	const [tokenBlance, setTokenBlance] = useState(0);
	const [loading, setLoading] = useState(false);
	const [signer, setSigner] = useState(null);
	const [provider, setProvider] = useState(null);
	const [airdropRequestAddress, setAirdropRequestAddress] = useState("");

	useEffect(() => {
		console.log("ClaimAirdropComponent");
		if (window.ethereum) {
			console.log("window.ethereum");
			try {
				const provider = new ethers.BrowserProvider(window.ethereum);
				// console.log("provider", provider);
				setProvider(provider);
			} catch (error) {
				console.log(error, "error");
			}
		}
	}, []);

	useEffect(() => {
		const fetchSigner = async () => {
			if (provider) {
				try {
					const signer = await provider.getSigner();
					setSigner(signer);
					const userAddress = await signer.getAddress();
					console.log(userAddress, "userAddress");
					setUserAddress(signer);
				} catch (error) {
					console.log(error, "error");
				}
			}
		};
		fetchSigner();
	}, [provider]);

	// Fetch user balance from the smart contract
	useEffect(() => {
		fetchAirdropTokenBalance();
	}, [airdropRequestAddress]);

	const fetchAirdropTokenBalance = async () => {
		console.log("fetchAirdropTokenBalance");
		if (
			!!signer &&
			!!airdropRequestAddress &&
			airdropRequestAddress.trim().length === 42
		) {
			console.log("fetchAirdropTokenBalance");
			try {
				setLoading(true);
				const contract = new ethers.Contract(
					ZKAirdropVerifierAddress,
					ZKAirdropVerifier.abi,
					signer,
				);
				const balance = await contract.balanceOf(userAddress);
				console.log(balance, "balance");
				setLoading(false);

				setTokenBlance(balance);
			} catch (error) {
				console.log("Error:fetchAirdropTokenBalance", error);
			}
		}
	};

	const claimAirdrop = async () => {
		if (!!signer && !!airdropRequestAddress) {
			if (airdropRequestAddress.trim().length !== 42) {
				return alert("Invalid Ethereum Address");
			}
			try {
				setLoading(true);
				const contract = new ethers.Contract(
					ZKAirdropVerifierAddress,
					ZKAirdropVerifier.abi,
					signer,
				);
				const tx = await contract.mint(airdropRequestAddress.trim());
				await tx.wait();
				setLoading(false);
				fetchAirdropTokenBalance();
			} catch (error) {
				console.log("Error:claimAirdrop", error);
				return alert("Error claiming airdrop", error);
			}
		}
	};

	return (
		<VStack w='full' h='full' p={8} spacing={4} minH='50vh'>
			<Text fontSize='30px' fontWeight='semibold'>
				Claim your airdrop
				<span role='img' aria-label='party-popper'>
					🎉
				</span>
			</Text>

			<Text fontSize={18}>
				If you have successfully submitted your proof. Now you can claim your
				airdrop.
			</Text>

			<VStack w='full' spacing={12} mt={18}>
				{loading ? (
					<Spinner />
				) : (
					<Heading size='md'>
						Your Balance: {tokenBlance ? ethers.formatEther(tokenBlance) : "0"}{" "}
						ZKERC20
					</Heading>
				)}

				<Input
					placeholder='Enter Etherum Address To Claim Tokens'
					w='40%'
					size='lg'
					onChange={(e) => setAirdropRequestAddress(e.target.value)}
				/>
				<Button colorScheme='blue' onClick={claimAirdrop} isLoading={loading}>
					Claim 5 ZK Tokens
				</Button>
			</VStack>
		</VStack>
	);
};

export default ClaimAirdropComponent;
