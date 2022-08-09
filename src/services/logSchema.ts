import { createServer, Model, Factory } from "miragejs"
import { faker } from '@faker-js/faker';

export default createServer({
    models: {
        log: Model,
    },

    factories: {
        log: Factory.extend({
            uuid() {
                return faker.datatype.uuid();
            },

            id(i) {
                return i + 1;
            },

            host() {
                return `/api/${faker.hacker.verb()}`;
            },

            request() {
                return faker.datatype.json();
            },

            response() {
                return faker.datatype.json();
            },

            permanent(i) {
                let permanents = [true, false]

                return permanents[i % permanents.length];
            },

            type(i) {
                let types = ["success", "error"]

                return types[i % types.length]
            },

            createdAt() {
                return faker.date.past();
            }
        }),
    },

    seeds(server) {
        server.createList('log', 10)
    },

    routes() {

        this.namespace = "/api"

        this.get("/log", (schema) => {
            return schema.all("log")
        })

        this.get("/log/:id", (schema, request) => {
            let id = request.params.id

            return schema.find("log", id)
        })

        this.get("/users", () => [
            { id: "1", name: "Luke" },
            { id: "2", name: "Leia" },
            { id: "3", name: "Anakin" },
        ])

        // this.post("/api/log", (schema, request) => {
        //   let attrs = JSON.parse(request.requestBody)

        //   return schema.log.create(attrs)
        // })
    },

})
