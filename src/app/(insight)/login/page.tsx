import { FC } from "react";
import axios from "axios";
import { AuthRequiredError } from "@/lib/exceptions";

interface DashboardProps {}

const session = null;

const page: FC<DashboardProps> = async({}) => {
    
    if (!session) throw new AuthRequiredError();

    return <div>Page</div>;
}

export default page;