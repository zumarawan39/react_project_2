import Button from "../Button/Button";
import { RiMessage2Line } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./Hero.css"
import Input from "../Input/Input";
function Hero() {
    return(
        <>
        <div className="contact">
            <div className="upper_contact">
                <h1 className="heading">Contact Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sunt aperiam quibusdam voluptatibus fuga nobis odio molestias nemo qui, error magnam voluptate et dolorum vitae exercitationem ad suscipit nulla aliquam dolores, quas maxime ab impedit? </p>
            </div>
            <div className="lower_contact">
                <div className="right_c_lower">
                        <div className="buttons">
                        <Button   text="V/A Support" icon={<RiMessage2Line fontSize="20px"/>} />
                        <Button   text="V/A Call" icon={<IoCall fontSize="20px" />} />
                        </div>
                        <Button isOutline={true} text="V/A Email from" icon={<MdEmail fontSize="20px"/>} />
                        <Input name="Name"/>
                        <Input name="E-mail"/>
                        <Input name="Text" isBolean={true}/>

                </div>
                <div className="left_c_lower">
                    <img src="/images/contact.svg" alt="" />
                </div>
            </div>
            <Button text="Submit"  />
        </div>
        </>
    )
}
export  default  Hero;