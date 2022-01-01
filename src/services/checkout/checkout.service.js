import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KD9O9JEMeSu8i0heXQSdvIZgnWXQyRjPFOb0iT2vVgDMQlEU1dkPZiPEaRLlsbmXBw5K9t6x9XoCbBNGuNGL9G7001aN45A1E"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`http://localhost:5001/mealstogo-7ba04/us-central1/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
