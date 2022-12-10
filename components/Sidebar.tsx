import Link from "next/link";
import { useState } from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const userProfle = false;

    const normalLink = "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semiblod text-[#F51997] rounded";
    return (
        <div>
            <div className="block xl:hidden m-2 ml-4 mt-3 text-xl" onClick={() => setShowSidebar((el) => !el)}>
                {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
            </div>

            {showSidebar && (
                <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2  border-gray-100 xl:border-0 p-3">
                    <div className="xl:border-b-0 border-gray-200 xl:pb-4">
                        <Link href={"/"}>
                            <div className={normalLink}>
                                <p className="text-2xl">
                                    <AiFillHome />
                                </p>

                                <span className="text-xl hidden xl:block">For You</span>
                            </div>
                        </Link>
                    </div>
                    {/* {!userProfle && (
                        <div className="px-2 py-4 hidden xl:block">
                            <p className="text-gray-400">Log in to like and comment on videos</p>

                            <div className="pr-4">
                                <GoogleLogin
                                    clientId=""
                                    onSuccess={() => {}}
                                    onFailure={() => {}}
                                    cookiePolicy="single_host_origin"
                                    render={(renderProps) => (
                                        <button
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                            className="bg-white
                                        border-[1px]  border-[#f51997]
                                        font-semibold px-6 py-3 outline-none 
                                        rounded–md  w-full mt-3 cursor-pointer
                                        hover:text-white hover:bg-[#f51997]
                                        
                                        text-lg text-[#f51997] "
                                        >
                                            Log in
                                        </button>
                                    )}
                                />
                            </div>
                        </div>
                    )} */}
                    <Discover />
                    <SuggestedAccounts />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Sidebar;
