// import { RiMessage2Line } from "react-icons/ri";
import  styles from "./Button.module.css";

function Button(props) {
    // let arr=["V/A Support   Chat","Via Call","Submit"]
    return(
        <>
         <button  className={props.isOutline ? styles.btn_2:styles.btn_1}>
         {/* <button  className={props.isOutline ? btn_2:btn_1}> */}
         {/* <button  className={styles.btn_1}> */}
         {props.icon }
         {props.text}
         </button>
        </>
    )
}
export default Button;