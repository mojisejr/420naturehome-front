import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { address, abi } from "../abis/payway.abi";

function useAddItem(
  name,
  type,
  ERC20Price,
  price,
  star,
  grade,
  description,
  image,
  have
) {
  const { config } = usePrepareContractWrite({
    address,
    abi,
    functionName: "addItem",
    args: [
      name,
      type,
      ERC20Price,
      price,
      star,
      grade,
      description,
      image,
      have,
    ],
  });

  const { write, isLoading, isError, isSuccess } = useContractWrite(config);

  return {
    addItem: write,
    isSuccess,
  };
}

function useRegister(discordId) {
  const { config } = usePrepareContractWrite({
    address,
    abi,
    functionName: "register",
    args: [discordId],
  });
  const { write, isSuccess } = useContractWrite(config);

  return {
    register: write,
    isSuccess,
  };
}

export { useAddItem, useRegister };
