import {avatarSettings} from "@/utils";
import ColorList from "@/components/color-list";
import ShapeList from "@/components/shape-list";

const Sidebar = () => {
    return (
        <div className={'w-full space-y-12 h-full overflow-auto'}>
            {Object.keys(avatarSettings).map(key => {
                const setting = avatarSettings[key]
                return (
                    <div>
                        <div className={'text-xl font-semibold text-white'}>{setting.title}</div>
                        {setting.colorList && <ColorList colorList={setting.colorList}/>}
                        <ShapeList
                            type={key}
                            shapeList={setting.shapeList}
                        />
                    </div>
                )
            })}
        </div>
    );
}


export default Sidebar