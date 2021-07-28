/* eslint-disable */
// const createDtoInType = shape({
//   name: string(1, 255).isRequired(),
//   isGood: boolean(),
// });
// const updateDtoInType = shape({
//   name: string(1, 255).isRequired(),
//   isGood: boolean(),
//   model: string(1, 255),
// });
const createCarDtoInType = shape({
  name: string(1, 255).isRequired(),
  isGood: boolean(),
});

const listDtoInType = shape({
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer(),
  }),
});

const updateDtoInType = shape({
  id: id().isRequired(),
  name: string(1, 255),
  model: string(1, 255),
  isGood: boolean(),
});
