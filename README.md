# Meals To Go

![alt-text-1](assets/app-mock.png "app-mock")

## 📚 Documentation

<p>Learn about building and deploying universal apps <a aria-label="expo documentation" href="https://docs.expo.dev">in the official docs!</a></p>

- [Getting Started](https://docs.expo.dev/)
- [API Reference](https://docs.expo.dev/versions/latest/)
- [Using Custom Native Modules](https://docs.expo.dev/bare/exploring-bare-workflow/)

## :hammer: Setting up full build

1. Go to `functions` folder
2. Run `yarn`
3. Login to firebase `firebase login`
4. Set the correct project name in `firebase.json`
5. Set your firebase config in `App.js`
6. Run `firebase functions:config:set stripe.key=<your key>`
7. In the firebase folder run `firebase functions:config:get > .runtimeconfig.json`
8. Run `yarn serve` in the firebase folder
9. Run the Expo app :nut_and_bolt:
