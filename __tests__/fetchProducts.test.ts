import { fetchProducts } from "../src/app/(main)/(productsFeed)/ProductFeed";
import { ProductProps } from "../types";
import mockData from "../__tests__/_mocks";

describe("fetchProducts", () => {
  let spy: jest.SpyInstance; // Define a spy variable to be used in the test suite

  // Use the afterEach hook to reset and restore the spy after each test
  afterEach(() => {
    if (spy) {
      spy.mockReset();
      spy.mockRestore();
    }
  });

  // Replace the actual API call with a mock implementation that returns the mock data
  jest.spyOn(global, "fetch").mockImplementation(() => {
    const responseInit = {
      status: 200,
      headers: { "Content-Type": "application/json" },
    };
    const response = new Response(
      JSON.stringify(mockData.ProductsList),
      responseInit
    );
    return Promise.resolve(response);
  });

  // Create a test case that checks if the fetchProducts function returns an array of products
  it("should return an array of products", async () => {
    const products: ProductProps[] = await fetchProducts();
    expect(products.length).toBeGreaterThan(0);
  });
});
