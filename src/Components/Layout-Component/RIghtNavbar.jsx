import { FindUs } from "../FindUs"
import { SocialLogin } from "../SocialLogin"


export const RIghtNavbar = () => {
  return (
    <div className="space-y-4 font-bold m-4">
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
    </div>
  )
}
