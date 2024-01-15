// src/libs/Error.js
export class CustomError extends Error {
    constructor(message, statusCode = null) {
      super(message);
      this.name = 'CustomError';
      this.statusCode = statusCode;
    }
  }
  