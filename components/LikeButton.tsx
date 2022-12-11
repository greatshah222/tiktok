import React, { useState, useEffect } from "react";

import { MdFavorite } from "react-icons/md";
import useAuthStore from "../store/authStore";

interface IProps {
    // saying it is function
    handleLike: () => void;
    handleDislike: () => void;
    likes: any[];
}

const LikeButton = ({ handleDislike, handleLike, likes }: IProps) => {
    const [alreadyLiked, setAlreadyLiked] = useState(false);
    const { userProfile }: any = useAuthStore();

    const filteredLikes = likes?.filter((el) => el._ref === userProfile?._id);

    useEffect(() => {
        if (filteredLikes?.length > 0) {
            setAlreadyLiked(true);
        } else {
            setAlreadyLiked(false);
        }
    }, [likes, filteredLikes]);

    return (
        <div className="gap-6 flex">
            <div className="mt-4 flex flex-col cursor-pointer justify-center items-center">
                {alreadyLiked ? (
                    <div className="bg-primary rounded-full p-2 md:p-4 text-[#f51997]" onClick={handleDislike}>
                        <MdFavorite className="text-lg md:text-2xl" />
                    </div>
                ) : (
                    <div className="bg-primary rounded-full p-2 md:p-4" onClick={handleLike}>
                        <MdFavorite className="text-lg md:text-2xl" />
                    </div>
                )}

                <p className="text-md font-semibold">{likes?.length | 0}</p>
            </div>
        </div>
    );
};

export default LikeButton;
