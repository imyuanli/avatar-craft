import ColorList from "@/components/color-list";
import ShapeList from "@/components/shape-list";
import {avatarConfig} from "@/constant";

const Sidebar = () => {
    return (
        <div className={'w-full space-y-12 h-full overflow-auto'}>
            {Object.keys(avatarConfig).map(key => {
                const config = avatarConfig[key]
                return (
                    <div className={'p-4'}>
                        <div className={'text-xl font-semibold text-white'}>{config.title}</div>
                        <div className={'my-2'}>
                            {config.colorList && <ColorList type={key} colorList={config.colorList}/>}
                        </div>
                        <ShapeList type={key} shapeList={config.shapeList}/>
                    </div>
                )
            })}
        </div>
    );
}


export default Sidebar