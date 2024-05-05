import { FC } from "react";
import axios from "axios";

interface DashboardProps {}

const page: FC<DashboardProps> = async({}) => {
    const {data} =  await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    return <div>{JSON.stringify(data)}</div>;
}

export default page;