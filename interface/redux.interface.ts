export interface InitialState{
  isLoggedIn: boolean,
  userData: UserDataInterface | null
}

export interface UserDataInterface{

    name: string,
    email: string
}