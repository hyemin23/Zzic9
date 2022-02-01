import { JoinPathLabel } from "./../src/constant/enum.constant";

export function getJoinPath() {
  return Object.entries(JoinPathLabel).map((x) => ({
    key: x[0],
    value: x[1],
    disabled: false,
  }));
}

export default {
  getJoinPath,
};
