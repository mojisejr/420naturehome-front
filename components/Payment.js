import { useGetAllItems } from "../blockchain/contracts/payway.view.contract";
function PaymentPage() {
  const { data } = useGetAllItems();
  return (
    <div>
      <h1>Payment</h1>
    </div>
  );
}

export default PaymentPage;
