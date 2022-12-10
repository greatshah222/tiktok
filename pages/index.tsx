import axios from "axios";
import NoResult from "../components/NoResult";
import VideoCard from "../components/VideoCard";

import { Video } from "../types";

interface IProps {
    videos: Video[];
}
const Home = ({ videos }: IProps) => {
    console.log(videos);
    return (
        <div className="flex flex-col gap-10 videos h-full">
            {videos.length ? (
                videos.map((el: Video) => (
                    <>
                        <VideoCard post={el} key={el?._id} />
                    </>
                ))
            ) : (
                <NoResult text="No Videos" />
            )}
        </div>
    );
};

export default Home;

export const getServerSideProps = async () => {
    const { data } = await axios.get(`http://localhost:3000/api/post`);
    // console.log(res.data);

    return {
        props: {
            videos: data,
        },
    };
};
