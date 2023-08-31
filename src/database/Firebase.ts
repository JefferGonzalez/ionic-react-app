import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { config } from '../config'

const firebaseConfig = {
  apiKey: config.firebase.api_key,
  authDomain: config.firebase.auth_domain,
  databaseURL: config.firebase.database_url,
  projectId: config.firebase.project_id,
  storageBucket: config.firebase.storage_bucket,
  messagingSenderId: config.firebase.messaging_sender_id,
  appId: config.firebase.app_id,
  measurementId: config.firebase.measurement_id
}

const app = firebase.initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
