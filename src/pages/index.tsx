import Sidebar from "@/components/sidebar";
import {useAtom} from "jotai";
import {avatarOptionsAtom} from "@/store";
import {useEffect, useRef, useState} from "react";
import {getAvatarSvg, getRandomAvatar} from "@/utils";
import {Button} from "antd";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";

export default function HomePage() {
    const [avatarOptions, setAvatarOptionsAtom] = useAtom(avatarOptionsAtom)
    const {wrapper} = avatarOptions
    const avatarSize = 280
    const [avatar, setAvatar] = useState<string>('')

    useEffect(() => {
        const avatarRes = getAvatarSvg(avatarOptions)
        setAvatar(`
            <svg
              width="${avatarSize}"
              height="${avatarSize}"
              viewBox="0 0 ${avatarSize / 0.7} ${avatarSize / 0.7}"
              preserveAspectRatio="xMidYMax meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(100, 65)">
                ${avatarRes}
              </g>
            </svg>
        `)
    }, [avatarOptions])

    const handleGenerateAvatar = () => {
        setAvatarOptionsAtom(getRandomAvatar())
    }

    const svgRef = useRef(null);
    const handleDownLoadAvatar = () => {
        const svgElement: any = svgRef.current;
        html2canvas(svgElement,{backgroundColor: 'transparent'})
            .then((canvas) => {
                // 将canvas转换为图像URL
                const dataUrl = canvas.toDataURL('image/png');
                // 下载图像
                downloadjs(dataUrl, 'react-svg-avatar.png');
            });
    }

    return (
        <div className={'flex bg-[#333]'}>
            <div className={'w-full flex justify-center items-center flex-col h-screen space-y-12'}>
                <div
                    ref={svgRef}
                    style={{
                        background: wrapper.color,
                        width: avatarSize,
                        height: avatarSize,
                    }}
                    className={`${wrapper.shape} transition duration-300 overflow-hidden`}
                >
                    <div dangerouslySetInnerHTML={{__html: avatar}}/>
                </div>
                <div className={'space-x-4'}>
                    <Button onClick={handleGenerateAvatar}>
                        随机生成
                    </Button>
                    <Button onClick={handleDownLoadAvatar}>
                        下载头像
                    </Button>
                </div>
            </div>
            <div className={'h-screen min-w-[300px] relative right-0 top-0 bg-[#333]'}>
                <Sidebar/>
            </div>
        </div>
    );
}
