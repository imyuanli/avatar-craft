import {Outlet} from 'umi';
import {avatarOptionsAtom} from "@/store";
import {useSetAtom} from "jotai";
import {useEffect} from "react";
import {getRandomAvatar} from "@/utils";

export default function Layout() {
    const setAvatarOptionsAtom = useSetAtom(avatarOptionsAtom)
    //随机初始化一组数据
    useEffect(() => {
        setAvatarOptionsAtom(getRandomAvatar())
    }, [])

    return (
        <Outlet/>
    );
}
