export class User {

  name: string
  mail: string
  birthday: string
  favorite: string
  remarks: string

  constructor(name: string, mail: string, birthday: string, favorite: string, remarks: string) {
    this.name = name
    this.mail = mail
    this.birthday = birthday
    this.favorite = favorite
    this.remarks = remarks
  }

  public static setUsers(firebaseResponse: any): User[] {

    let users: User[] = []

    for (const item of firebaseResponse) {
      const name = item.fields.name.stringValue
      const mail = item.fields.mail.stringValue
      const birthday = item.fields.birthday.stringValue
      const favorite = item.fields.favorite.stringValue
      const remarks = item.fields.remarks.stringValue
      
      users.push(new User(name, mail, birthday, favorite, remarks))
    }

    return users
  }

}


