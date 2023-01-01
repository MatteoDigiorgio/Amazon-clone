const getServerSideProps = require("../src/pages/index.js");

describe("getServerSideProps", () => {
  it("Should return a defined value when called getServerSideProps()", async () => {
    const data = await getServerSideProps();
    expect(data.props.products).toBeDefined();
  });

  it("Should return an array of objects when called", async () => {
    const data = await getServerSideProps();
    for (let i = 0; i < data.props.products.length; i++) {
      expect(data.props.products[i]).toStrictEqual({
        id: expect.any(Number),
        title: expect.any(String),
        price: expect.any(Number),
        description: expect.any(String),
        category: expect.any(String),
        image: expect.any(String),
        rating: expect(data.props.products[i].rating).toStrictEqual({
          count: expect.any(Number),
          rate: expect.any(Number),
        }),
      });
    }
  });
});
