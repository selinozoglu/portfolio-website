import React, {useEffect, useState} from 'react';

const AsyncTestComp = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res: any) => {
                res.json()
            }).then((data: any) => {
            setPosts(data);
        });
    }, [])
    return (
        <div>
            <ul>
                {posts ? posts.map((post:any)=>{
                    return(
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )
                }):null}
            </ul>
        </div>
    );
};

export default AsyncTestComp;