import { Button } from "@/components/ui/Button";
import { ShoppingCart } from "@/types/types";

function CartSummary({ productsData, itemsInCart }: ShoppingCart) {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-lg font-bold">Total &nbsp;</div>
        <div className="text-lg font-bold" data-testid="total-amount">
          $
          {itemsInCart
            .reduce(
              (acc, item) =>
                acc +
                item.quantity *
                  (productsData?.find((product) => product.id === item.id)
                    ?.price ?? 0),
              0,
            )
            .toFixed(2)}
        </div>
      </div>

      <Button
        className="mx-auto bg-blue-500 px-8 py-6 text-lg font-bold hover:bg-blue-500"
        variant="default"
        onClick={() => {
          if (itemsInCart.length > 0) {
            alert(`Congratulations! You successfully bought the products.`);
          } else {
            alert("Cart is empty. Please add items before checking out.");
          }
        }}
      >
        Checkout
      </Button>
    </>
  );
}

export default CartSummary;
