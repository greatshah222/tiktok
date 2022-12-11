import React, { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";
import { BASE_URL } from "../../utils";
import axios from "axios";
import { IUser, Video } from "../../types";
import Image from "next/image";
import VideoCard from "../../components/VideoCard";
import NoResult from "../../components/NoResult";

interface IProps {
    data: {
        user: IUser;
        userVideos: Video[];
        userLikedVideos: Video[];
    };
}

const Profile = ({ data }: IProps) => {
    const [showUserVideos, setShowUserVideos] = useState(true);

    const [videosList, setVideosList] = useState<Video[]>([]);
    const { user, userVideos, userLikedVideos } = data;

    const videos = showUserVideos ? " border-b-2 border-black" : "text-gray-400";
    const liked = !showUserVideos ? " border-b-2 border-black" : "text-gray-400";

    useEffect(() => {
        if (showUserVideos) {
            setVideosList(userLikedVideos);
        } else {
            setVideosList(userVideos);
        }
    }, [showUserVideos, userLikedVideos, userVideos]);

    return (
        <div className="w-full">
            <div className="flex gap-6 md:gap-10 mb-4 bg-white w-full">
                <div className="w-16 h-16 md:w-32 md:h-32">
                    <Image src={user.image} width={120} height={120} alt={user.userName} className="rounded-full" layout="responsive" />
                </div>

                <div className="flex flex-col justify-center">
                    <p className=" md:text-2xl tracking-wider flex gap-1 items-center justify-center text-md font-bold text-primary lowercase ">
                        {/* replacing all space with empty */}
                        {user.userName.replaceAll(" ", "")}

                        <GoVerified className="text-blue-400" />
                    </p>

                    <p className="capitalize md:text-xl text-gray-400 text-xs ">{user.userName}</p>
                </div>
            </div>

            <div>
                <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
                    <p
                        className={`text-xl font-semibold cursor-pointer mt-2 ${videos}`}
                        onClick={() => {
                            setShowUserVideos(true);
                        }}
                    >
                        Videos
                    </p>
                    <p
                        className={`text-xl font-semibold cursor-pointer mt-2 ${liked}`}
                        onClick={() => {
                            setShowUserVideos(false);
                        }}
                    >
                        Likes
                    </p>
                </div>
                <div className="flex gap-6 flex-wrap md:justify-center">
                    {videosList.length > 0 ? (
                        videosList.map((el: Video, i: number) => <VideoCard key={i.toString()} post={el} />)
                    ) : (
                        <NoResult text={`No ${showUserVideos ? "" : "Liked"} videos`} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
// name isside params should be same as name of file
export const getServerSideProps = async ({
    params: { id },
}: {
    params: {
        id: string;
    };
}) => {
    console.log("id", id);
    const res = await axios.get(`${BASE_URL}/api/profile/${id}`);
    // console.log(res);

    return {
        props: {
            data: res.data,
        },
    };
};
