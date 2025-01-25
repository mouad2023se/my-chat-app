const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { Timestamp } = require("firebase-admin/firestore");
const Permit = require("permitio").Permit;

admin.initializeApp();

const permit = new Permit({
  token: "YOUR_API_KEY"
  pdp: "<http://localhost:7766>",
});