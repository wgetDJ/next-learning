import { FC  } from "react";
import axios from "axios";

// export const dynamic = 'force-dynamic';

export const revalidate = 10;

const page: FC = async() => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     next: {
    //         revalidate: 10
    //     }
    // });

   

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1');


    return <div>{JSON.stringify(data)}</div>;
}

export default page;