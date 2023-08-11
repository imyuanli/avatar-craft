import Sidebar from "@/components/sidebar";
import {Button} from "antd";

export default function HomePage() {
    return (
        <div className={'flex bg-[#333]'}>
            <div className={'w-full'}>
                <div className={'flex justify-center items-center h-screen'}>
                    <div className={'w-[400px] h-[400px] bg-white rounded-full'}/>
                </div>
            </div>
            <div className={'h-screen fixed right-0 top-0 bg-[#333]'}>
                <Button className={'absolute top-1/2'}>x</Button>
                <Sidebar/>
            </div>
        </div>
    );
}
