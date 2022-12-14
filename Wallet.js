class Wallet {
  #ammount

  constructor() {
    this.#ammount = 100.99 * 100 // 10099
  }

  get ammount() {
    return this.#ammount / 100 // 100.99
  } 


}

const myWallet = new Wallet()

console.log(myWallet.ammount)