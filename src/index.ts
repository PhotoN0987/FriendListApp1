import axios from 'axios'
import { ListView } from './views/ListView'
import { RegistView } from './views/RegistView'

// axios default values
axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/friend-list-app-7de6d/databases/(default)/documents/'

// Views
new ListView().loadView()
new RegistView()
