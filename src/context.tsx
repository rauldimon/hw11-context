import React from 'react';
import Avatar from "./photo/avatar.png"

interface IUserContext {
  name: string
  photo: string
  following: number
  followers: number
  setName: React.Dispatch<React.SetStateAction<IUserContext["name"]>> | VoidFunction
  setPhoto: React.Dispatch<React.SetStateAction<IUserContext["photo"]>> | VoidFunction
  setFollowing: React.Dispatch<React.SetStateAction<IUserContext["following"]>> | VoidFunction
  setFollowers: React.Dispatch<React.SetStateAction<IUserContext["followers"]>> | VoidFunction
}

export const initialContext = {
  name: "John Doe",
  photo: Avatar,
  following: 0,
  followers: 0,
  setName: () => {},
  setPhoto: () => {},
  setFollowing: () => {},
  setFollowers: () => {}
}

export const UserContext = React.createContext<IUserContext>(initialContext)
UserContext.displayName = "UserContext"