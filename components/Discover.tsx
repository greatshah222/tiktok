import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { topics } from "../utils/constants";

const Discover = () => {
    const router = useRouter();

    const { topic } = router.query;
    const activeTopicStyle =
        "xl:border-2 hover:bg-primary xl:border-[#f51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#f51997]";

    const topicStyle =
        "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black";
    return (
        <div className="xl:border-b-2 xl:border-gray-200 pb-6">
            <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">Popular Topics</p>

            <div className="flex gap-3 flex-wrap">
                {topics.map((el) => (
                    <Link href={`/?topic=${el.name}`} key={el.name}>
                        <div className={el.name === topic ? activeTopicStyle : topicStyle}>
                            <span className="font-bold text-2xl xl:text-md">{el.icon}</span>
                            {/*  hidden in small device */}
                            <span className="font-medium text-md hidden xl:block capitalize">{el.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Discover;
