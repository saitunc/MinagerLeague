"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path = require("path");
var app = (0, express_1["default"])();
var port = process.env.PORT || 3000;
var publicDirectoryPath = path.join(__dirname, '/src/public');
app.use(express_1["default"].static(publicDirectoryPath));
app.listen(port, function () {
    console.log("Server running on http://localhost:".concat(port));
});
app.get('/', function (req, res) {
    var loginPage = path.join(publicDirectoryPath, 'components', 'index.html');
    res.sendFile(loginPage);
});
// app.post('/verify-login', async (req, res) => {
//   const { signature, publicKey, nonce } = req.body;
//   // Interact with the zkApp smart contract
//   const loginContract = new Login();
//   const isValid = await loginContract.verifyLogin(signature, nonce);
//   if (isValid) {
//     // Create a session or token to maintain the user's state
//     const sessionToken = createSession(publicKey);
//     // Respond with success and the session token
//     res.json({ success: true, sessionToken });
//   } else {
//     // Respond with an error if the verification failed
//     res.status(401).json({ success: false, message: 'Invalid signature.' });
//   }
// });
// function createSession(publicKey) {
//   // Implement session creation logic here
//   // This could involve creating a JWT token or similar
// }
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
// // This function would be part of your server logic
// async function verifyLogin(signature, nonce) {
//   // Initialize the contract with the user's public key
//   // This would normally be done once and the public key would be stored
//   loginContract.init(userPublicKey);
//   // Verify the login by checking the signature against the nonce
//   try {
//     await loginContract.login(signature, nonce);
//     return true;
//   } catch (error) {
//     console.error('Login verification failed:', error);
//     return false;
//   }
// }
