const mongoose = require("mongoose")
const assert = require('assert')
// const chai = import("chai")
// const expect = chai.expect
const configObj = require("../src/config/env.config.js")
const { USER_MONGO, PASSWORD_MONGO, DB_MONGO } = configObj

const CartRepository = require("../src/repository/cartRepository.js")

describe("Testing Cart", () => {
  before(() => {
    mongoose.connect(`mongodb+srv://${USER_MONGO}:${PASSWORD_MONGO}@cluster0.fbnrglq.mongodb.net/${DB_MONGO}`)
    this.cartRepository = new CartRepository()
  })

  it("Create Cart", async () => {
    // this.timeout(5000)
    const result = await this.cartRepository.addCart()
    assert.ok(result._id); 
  })

  it("Get cart by Id", async () => {
    // this.timeout(5000)
    const result = await this.cartRepository.addCart()
    const cartById = await this.cartRepository.getCartById(result._id)
    assert.ok(cartById._id)
  })

  it("Get Products By Cart Id", async () => {
    // this.timeout(5000)
    const result = await this.cartRepository.addCart()
    const products = await this.cartRepository.getProductsByCartId(result._id)
    assert.strictEqual(Array.isArray(products), true)
  })

  after((done) => {
    mongoose.connection.close();
    done();
  })
}
)