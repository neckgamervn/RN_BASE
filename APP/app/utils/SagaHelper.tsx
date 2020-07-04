import { call, put, takeEvery } from "redux-saga/effects";

export function success(type) {
  return `${type}_success`;
}
export function fail(type) {
  return `${type}_fail`;
}

function isGenerator(fn) {
  return fn.constructor.name === "GeneratorFunction";
}

function* APINetwork(
  request,
  beforeCallApi,
  betweenCallApiAndPutSuccess,
  afterPutSuccess,
  action
) {
  const act = action
    ? action
    : afterPutSuccess
    ? afterPutSuccess
    : betweenCallApiAndPutSuccess
    ? betweenCallApiAndPutSuccess
    : beforeCallApi;
  try {
    if (typeof beforeCallApi == "function")
      if (isGenerator(beforeCallApi)) yield beforeCallApi(act);
      else beforeCallApi(act);
    const res = yield call(request, act.payload);
    if (typeof betweenCallApiAndPutSuccess == "function")
      if (isGenerator(betweenCallApiAndPutSuccess))
        yield betweenCallApiAndPutSuccess(act, res);
      else betweenCallApiAndPutSuccess(act, res);
    yield put({
      type: success(act.type),
      payload: res.result,
      params: act.payload
    });
    if (typeof afterPutSuccess == "function")
      if (isGenerator(afterPutSuccess)) yield afterPutSuccess(act, res);
      else afterPutSuccess(act, res);
  } catch (error) {
    console.log("saga", error);
    yield put({ type: fail(act.type), payload: act.payload, error: error });
  }
}

const callBackSaga = {
  beforeCallApi: action => {},
  betweenCallApiAndPutSuccess: (action, res) => {},
  afterPutSuccess: (action, res) => {}
};

export default function SagaHelper(
  action,
  request,
  callBack: typeof callBackSaga
) {
  const {
    afterPutSuccess,
    beforeCallApi,
    betweenCallApiAndPutSuccess
  } = Object.assign({}, callBackSaga, callBack);
  return takeEvery(
    action,
    APINetwork,
    request,
    beforeCallApi,
    betweenCallApiAndPutSuccess,
    afterPutSuccess
  );
}
