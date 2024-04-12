const isPremiumUser = false;

const premiumSubscriptionReducer = (state = isPremiumUser, action) => {
  switch (action.type) {
    case "buy_subscription":
      return true;
    default:
      return state;
  }
};
export default premiumSubscriptionReducer;
