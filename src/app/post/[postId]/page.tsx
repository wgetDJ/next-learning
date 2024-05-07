import { FC } from "react";

interface PageProps {}

export async function generateStaticParams() {
    const post = ['post-one', 'post-two']

    return post.map((postId) => {
        return {
            postId: post,
        }
    })
}

const page: FC<PageProps> = ({...props}) => {
    return <div>Page</div>;
}

export default page;