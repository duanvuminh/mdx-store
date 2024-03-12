import * as admin from "firebase-admin";
import { cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const { FIREBASE_ADMIN_PRIVATE_KEY } = process.env;
var serviceAccount = JSON.parse(FIREBASE_ADMIN_PRIVATE_KEY as string);

if (admin.apps.length == 0)
  admin.initializeApp({
    credential: cert(serviceAccount),
    databaseURL:
      "https://kyomo-1590f-default-rtdb.asia-southeast1.firebasedatabase.app",
  });

export const authAdmin = getAuth();
