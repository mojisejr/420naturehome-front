import { useContractRead } from "wagmi";
import { address, abi } from "../abis/payway.abi";

function useGetAllItems() {
  let list = [];
  const itemId = useContractRead({
    address,
    abi,
    functionName: "currentItemId",
  });

  const itemCount = parseInt(itemId.data.toString());

  return {
    data,
  };
}

export { useGetAllItems };
