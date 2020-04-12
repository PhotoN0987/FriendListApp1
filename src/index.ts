import axios from 'axios'

var element = document.getElementById('user-list')

axios
.get('https://firestore.googleapis.com/v1/projects/friend-list-app-7de6d/databases/(default)/documents/users')
.then(response =>{
    console.log(response.data.documents)

    //レスポンスの中身を代入
    const users = response.data.documents


    for (const user of users) {
        const name = user.fields.name.stringValue
        const favorite = user.fields.favorite.stringValue
        element?.insertAdjacentHTML('afterbegin', `<p>名前：${name}　　好きなもの${favorite}</p>`)
    }
})
.catch(error => {
    console.log(error)
})
/*import axios from 'axios'

 class HelloWorld
{
    constructor(public displayText : string) {}

    greet()
    {
        return this.displayText;    
    }
}

var helloWorld = new HelloWorld("HelloWorld");
document.body.innerHTML = helloWorld.greet();
 */
//axios.post('https://firestore.googleapis.com/v1/projects/friend-list-app-7de6d/databases/(default)/documents/users',{
//    fields: {
//        name: {
//          stringValue: '小林　雅俊'
//        },
//        favorite: {
//          stringValue: 'マヌルネコ'
//        }
//    }
//} )
//.then(response => {
//    console.log(response)
//})
//.catch(error => {
//    console.log(error)
//})


// friend-list-app-7de6d
// https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/hogehoge
