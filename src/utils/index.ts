import {avatarConfig, svgContent} from "@/constant";

//随机获取头像
export const getRandomAvatar = () => {
    return Object.keys(avatarConfig).reduce((pre, cur) => {
        const shapeList = avatarConfig[cur]?.shapeList
        const colorList = avatarConfig[cur]?.colorList
        const randomShape = Math.floor(Math.random() * shapeList.length)
        const randomColor = colorList ? Math.floor(Math.random() * colorList.length) : null
        pre[cur] = {
            shape: shapeList[randomShape],
            color: colorList ? colorList[randomColor] : null
        }
        return pre
    }, {})
}

//获取头像的svg
export const getAvatarSvg = (options: any) => {
    return Object.keys(options).map(key => {
        let {shape, color} = options[key]
        if (key !== 'wrapper' && shape !== 'none') {
            const res = svgContent?.[key]?.[shape]?.replaceAll('$fillColor', key == 'ear' ? options.face.color : color)
            return res ? `<g id="${key}">${res}</g>` : ''
        }
    }).filter(item => item)
}

