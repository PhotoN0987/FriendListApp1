import axios from 'axios'
import { User } from "../models/User";

export class ListView {

  //#region Components
  userList: HTMLElement | null;
  //#endregion

  constructor() {
    // HTMLElement取得
    this.userList = document.getElementById('user-list')

  }

  //#region Events

  // ロード時
  public async loadView() {
    // データベース（Firebase）取得処理
    // 結果が取得できるまで待つ
    const users = await this.getFriendList()

    if (users === null) {
      this.userList?.insertAdjacentHTML('afterbegin', '<p style="color: red">おともだちリストが取得できませんでした。</p>')
      return
    }

    // usersの中身の数だけ繰り返す
    for (const user of users) {

      // ユーザーの名前を取得
      const name = user.name

      // ユーザーのメールアドレスを取得
      const mail = user.mail

      // ユーザーの誕生日を取得
      const birthday = user.birthday

      // ユーザーの好きなものを取得
      const favorite = user.favorite

      // ユーザーの備考を取得
      const remarks = user.remarks

      // ユーザーの名前と、好きなものをpタグで出力
      this.userList?.insertAdjacentHTML('afterbegin',
      `<ul class="friend_list">
        <li class="name_space">${name}</li>
        <li class="mail_space">${mail}</li>
        <li class="birthday_space">${birthday}</li>
        <li class="favorite_space">${favorite}</li>
        <li class="remarks_space">${remarks}</li>
      </ul>`)
    }
    
  }

  

  //#endregion

  //#region  Private Methods

  // おともだちリストをFirebaseから非同期で取得
  private async getFriendList() {

    return await axios
      .get('users')
      .then(response => {
        console.log(response.data.documents)

        // レスポンスの内容を代入
        const users = User.setUsers(response.data.documents)

        return users
      })
      .catch(error => {
        console.log(error)
        return null
      })
  }

  //#endregion

}