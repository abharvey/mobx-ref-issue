import { toJS } from "mobx";

export const testId = (() => {
  let instance;

  class IdGenerator {
    constructor(initialId = -1, idMap = {}) {
      this.id = initialId;
    }

    getId() {
      this.id += 1;
      return this.id.toString();
    }
  }

  function createInstance() {
    const idGenerator = new IdGenerator();
    return idGenerator;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const isIncludedInOtherProps = (defaultProps, overrides) => prop =>
  Object.keys(overrides).includes(prop) ||
  Object.keys(defaultProps).includes(prop);

const ModelFactory = (model, propsObject, debug) => overrides => {
  const { mandatoryProps, defaultProps } = propsObject;

  if (!mandatoryProps.every(isIncludedInOtherProps(defaultProps, overrides))) {
    console.warn(`
            [MODEL FACTORY]: ${model.name}
            You are missing some mandatory props in your overrides, this may cause model generation errors
            Mandatory Overrides: ${mandatoryProps.toString()}
        `);
  }

  const factoryParts = {
    id: testId.getInstance().getId(),
    ...defaultProps,
    ...overrides
  };

  // if (debug) {
  console.info(model.name, ": ", toJS(factoryParts));
  // }

  return model.create(factoryParts);
};

export default ModelFactory;
