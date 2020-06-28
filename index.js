import { dddList } from './src/dddList';
import { getDDD } from './src/getDDD';

const validateDDD = (dddOrPhone) => {
  const formattedDDD = getDDD(dddOrPhone);
  const isValidDDD = dddList[formattedDDD];

  return Boolean(isValidDDD);
};

const isFrom = (dddOrPhone) => {
  const isValidDDD = validateDDD(dddOrPhone);

  if (!Boolean(isValidDDD)) {
    throw new Error(`This DDD does not exist in Brazil! - ${dddOrPhone}`);
  }

  const formattedDDD = getDDD(dddOrPhone);
  const dddObject = dddList[formattedDDD];

  return dddObject;
};

export { validateDDD, isFrom };
