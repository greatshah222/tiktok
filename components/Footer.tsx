import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/constants";

type ListProps = {
    footerList: string[];
    mt?: boolean;
};

const List = ({ footerList, mt }: ListProps) => (
    <div className={`flex flex-wrap gap-2 ${mt && "mt-5"}`}>
        {footerList.map((el) => (
            <p key={el} className="text-gray-400 text-sm hover:underline cursor-pointer">
                {el}
            </p>
        ))}
    </div>
);

const Footer = () => {
    return (
        <div className="mt-6 hidden xl:block">
            <List footerList={footerList1} />
            <List footerList={footerList2} mt={true} />
            <List footerList={footerList3} mt={true} />
            <p className="text-gray-400 text-sm mt-5">2022 BSH TikTik</p>
        </div>
    );
};

export default Footer;
