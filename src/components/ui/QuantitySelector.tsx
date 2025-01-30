import { QuantitySelectorProps } from "@/types/types";
import { Button } from "./Button";
import { Input } from "./Input";

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  setQuantity,
}) => {
  const handleIncrement = () => {
    if (quantity < 99) {
      setQuantity(!isNaN(quantity) ? quantity + 1 : 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (value < 1) {
      setQuantity(1);
    } else if (value > 99) {
      setQuantity(99);
    } else {
      setQuantity(!isNaN(value) ? value : 1);
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        data-testid="quantity-lower"
        className="text-lg"
        variant="outline"
        onClick={handleDecrement}
      >
        -
      </Button>
      <Input
        data-testid="quantity-input"
        className="m-none w-[4rem] pr-0 text-center"
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={handleInputChange}
      />
      <Button
        data-testid="quantity-boost"
        className="text-lg"
        variant="outline"
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
