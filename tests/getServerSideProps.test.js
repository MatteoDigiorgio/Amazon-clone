const getServerSideProps = require("../src/pages/index.js");

test("Get products from Fake Store API", async () => {
  const data = await getServerSideProps();
  expect(data).toBeDefined();
});

// The test above should work but sometimes hits the 5000ms limit time.
