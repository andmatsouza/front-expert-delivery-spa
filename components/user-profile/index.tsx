import { IconArrowTopDown } from "../icon-family";
import Styles from "./styles.module.css";
import Image from "next/image";

export const UserProfile = () => {
  return(
    <div className={Styles.userProfile}>
      <div>
        <Image src="/user-avatar.png" height={48} width={48} alt="Usuário" />
        </div>
      <div className={Styles.userData}>
        <h3 className={Styles.userData}>Mark Clarke</h3>
        <p className={Styles.userData}>markeclarke@gmail.com</p>
      </div>
      <div className={Styles.button}>
        <IconArrowTopDown color="black" />
      </div>
    </div>
  )
}