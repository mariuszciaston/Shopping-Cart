import { renderHook, act } from "@testing-library/react";
import useCartContent from "../useCartContent";
import { describe, it, expect } from "vitest";
import { CartItem } from "@/types/types";

describe("useCartContent hook", () => {
  it("should initialize with an empty cart", () => {
    const { result } = renderHook(() => useCartContent());
    expect(result.current.itemsInCart).toEqual([]);
  });

  it("should allow adding items to the cart", () => {
    const { result } = renderHook(() => useCartContent());
    const mockItem: CartItem = { id: 1, quantity: 1 };

    act(() => {
      result.current.setItemsInCart([mockItem]);
    });

    expect(result.current.itemsInCart).toEqual([mockItem]);
  });

  it("should allow removing items from the cart", () => {
    const { result } = renderHook(() => useCartContent());
    const mockItem: CartItem = { id: 1, quantity: 1 };

    act(() => {
      result.current.setItemsInCart([mockItem]);
    });

    act(() => {
      result.current.setItemsInCart([]);
    });

    expect(result.current.itemsInCart).toEqual([]);
  });
});
