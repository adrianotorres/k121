const httpStatus = require('http-status')

/**
 * Classe responsável por tratar melhor os erros.
 * @extends Error
 * @param {string} message - Mensagem de erro.
 * @param {number} status - HTTP status code.
 * @param {boolean} isPublic - Informa se a mensagem deve ser visível para o usuário.
 */
class APIError extends Error {
    constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, errors = []) {
        super(message)
        this.message = message
        this.status = status
        this.errors = errors
        Error.captureStackTrace(this, this.constructor.name)
    }
}

module.exports = APIError
