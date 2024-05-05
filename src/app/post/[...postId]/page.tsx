import { FC } from "react";

interface PageProps {}

const page: FC<PageProps> = ({...props}) => {
    console.log(props);
    return <div>Page</div>;
}

export default page;