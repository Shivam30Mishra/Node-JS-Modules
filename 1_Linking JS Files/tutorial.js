sum = (nums1,nums2) => {
  return nums1+nums2;
}

class SomeMathObject {
  constructor() {
    console.log("object created");
  }
}

const PI = 3.14;

module.exports = {
  sum: sum,
  SomeMathObject: SomeMathObject,
  PI : PI
};
