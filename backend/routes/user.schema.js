export const postUser = {
    type: "object",
    unique: "true",
    additionalProperties: true,
    properties: {
        email: {type: "string", format: "email"},
        password: {type: "string"}
    }
}