import { renderHook, waitFor } from "@testing-library/react";
import useProductsData from "../useProductsData";
import { vi, describe, afterEach, it, expect, Mock } from "vitest";

global.fetch = vi.fn(() =>
  Promise.resolve(
    new Response(JSON.stringify([{ id: 1, title: "Product 1" }]), {
      status: 200,
      headers: { "Content-type": "application/json" },
    }),
  ),
);

describe("useProductsData hook", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch and set products data", async () => {
    const { result } = renderHook(() => useProductsData());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.productsData).toEqual([
      { id: 1, title: "Product 1" },
    ]);
    expect(result.current.error).toBeNull();
  });

  it("should set error on fetch failure", async () => {
    (global.fetch as Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("Server error")),
    );

    const { result } = renderHook(() => useProductsData());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.productsData).toBeNull();
    expect(result.current.error).toBe("Server error");
  });
});
