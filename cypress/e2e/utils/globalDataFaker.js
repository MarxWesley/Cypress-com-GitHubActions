import { faker } from "@faker-js/faker";

export default class RegisterDataFaker {

    emailFaker(){
        return faker.internet.email();
    }

    nameFaker(){
        return faker.internet.userName();
    }

    passwordFaker(){
        return faker.internet.password();
    }

    descFaker(){
        return faker.lorem.sentence()
    }

    valueFaker() {
        return faker.number.int({min: 1, max: 100})
    }
}