import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoVerified } from "react-icons/go";
import useAuthStore from "../store/authStore";
import { IUser } from "../types";
import NoResult from "./NoResult";

interface IProps {
    isPostingComment: Boolean;
    comment: string;
    setComment: React.Dispatch<React.SetStateAction<string>>;
    addComment: (e: React.FormEvent) => void;
    comments: IComment[];
}

interface IComment {
    comment: string;
    length?: number;
    _key: string;
    postedBy: {
        _ref: string;
        _id: string;
    };
}

const Comments = ({ comments, comment, addComment, setComment, isPostingComment }: IProps) => {
    const { userProfile, allUsers } = useAuthStore();

    return (
        <div className="border-t-2 border-gray-200 pt-4 px-10 bg-[#F8f8f8] border-b-2 lg:pb-0 pb-[100px]">
            <div className="overflow-scroll lg:h-[475px]">
                {comments.length ? (
                    comments.map((el, i) => (
                        <>
                            {allUsers.map(
                                (user: IUser) =>
                                    user._id === (el.postedBy._id || el.postedBy._ref) && (
                                        <div className="p-2 items-center" key={i.toString()}>
                                            <Link href={`/profile/${user._id}`}>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8">
                                                        <Image
                                                            src={user?.image}
                                                            width={34}
                                                            height={34}
                                                            alt={user?.userName}
                                                            className="rounded-full"
                                                            layout="responsive"
                                                        />
                                                    </div>

                                                    <div className="hidden xl:block">
                                                        <p className="flex gap-1 items-center text-md font-bold text-primary lowercase ">
                                                            {/* replacing all space with empty */}
                                                            {user?.userName.replaceAll(" ", "")}

                                                            <GoVerified className="text-blue-400" />
                                                        </p>

                                                        <p className="capitalize text-gray-400 text-xs ">{user.userName}</p>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div className="">
                                                <p className=" text-gray-800 text-md">{el?.comment}</p>
                                            </div>
                                        </div>
                                    )
                            )}
                        </>
                    ))
                ) : (
                    <NoResult text="No comments yet!" />
                )}
            </div>

            {userProfile && (
                <div className="absolute bottom-0 left-0 pb-6 px-2 md:px-10 ">
                    <form onSubmit={addComment} className="flex gap-4 ">
                        <input
                            value={comment}
                            onChange={({ target }) => {
                                setComment(target.value);
                            }}
                            placeholder="Add Comment"
                            className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
                        />
                        <button className="text-md text-gray-400" onClick={() => {}}>
                            {isPostingComment ? "Commenting..." : "Comment"}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Comments;
