class Wallet {
  #ammount
  #username
  
  constructor() {
    this.#ammount = 100.99 * 100 // 10099
  }

  get ammount() {
    return this.#ammount / 100 // 100.99
  } 

  set username(newUsername) {
    this.#username = newUsername
  }
  
  get username() {
    return this.#username
  }
}

const myWallet = new Wallet()

console.log(myWallet.ammount) // 100.99

myWallet.srname = 'Yure'
console.log(myWallet.username) 
