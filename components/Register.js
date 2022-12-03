import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRegister } from "../blockchain/contracts/payway.contract";

function RegisterPage() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { discordId } = router.query;
  const { register, isSuccess } = useRegister(discordId);

  useEffect(() => {
    if (isSuccess) {
      setLoading(false);
    }
  }, [isSuccess]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <button
          disabled={!register}
          onClick={() => {
            setLoading(true);
            register();
          }}
        >
          Register
        </button>
      )}
    </div>
  );
}

export default RegisterPage;
