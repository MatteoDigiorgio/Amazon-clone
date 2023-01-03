import mock from "./_mocks";
const getServerSideProps = require("../src/pages/index");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mock.ProductsList),
  })
);

describe("getServerSideProps", () => {
  it("When called should return an array of objects with the correct keys", async () => {
    const data = await getServerSideProps();
    expect(data.props.products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          title: "Title",
          price: 234,
          description: "Description",
          category: "Category",
          image: "https://image.jpeg",
          rating: { count: 567, rate: 8.9 },
        }),
      ])
    );
  });
});
