import React from 'react';
import style from "./style.module.css";
import { UserContext } from '../../context';
import Counter from '../Counter';

const Main = () => {
  const context = React.useContext(UserContext)
    return (
      <div className={style.profile}>
        <div className={style.profileName}>
          {context.name} Profile
        </div>
        <div className={style.avatarBlock}>
          <img src={context.photo} alt="Avatar" />
        </div>
        <div className={style.follBlock}> 
          <Counter nameCounter={"Followers"} counter={context.followers} setCounter={context.setFollowers} />
          <Counter nameCounter={"Following"} counter={context.following} setCounter={context.setFollowing} />
        </div>
	  </div>
    )
}
export default React.memo(Main)