import {useFormStatus} from "react-dom"

function Button(){
const {pending}=useFormStatus();
return(
    <>
    <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
    </button>
    </>
)
}

export default Button;