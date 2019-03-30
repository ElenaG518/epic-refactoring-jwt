'use strict'
exports.DATABASE_URL = process.env.DATABASE_URL || "mongodb://my-new-user:pass123@ds113825.mlab.com:13825/epic-refactoring-jwt"; 
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || "mongodb://my-new-user:pass123@ds113825.mlab.com:13825/epic-refactoring-jwt";
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || "7d";


'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/jwt-auth-demo';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/jwt-auth-demo';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';