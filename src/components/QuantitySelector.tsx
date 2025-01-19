import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const QuantitySelector: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

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
    <div className="mr-auto flex gap-2">
      <Button className="text-lg" variant="outline" onClick={handleDecrement}>
        -
      </Button>
      <Input
        className="m-none w-[4rem] pr-0 text-center"
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={handleInputChange}
      />
      <Button className="text-lg" variant="outline" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
