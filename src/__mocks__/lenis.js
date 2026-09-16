const LenisMock = function () {
  return {
    raf: jest.fn(),
    destroy: jest.fn(),
  };
};

export default LenisMock;
