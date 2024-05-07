import { FC } from "react";
// import axios from "axios";
import { AuthRequiredError } from "@/lib/exceptions";

interface DashboardProps {}

const session = true;

const page: FC<DashboardProps> = async({}) => {
    
    if (!session) throw new AuthRequiredError();

    return <div>Login</div>;
}

export default page;