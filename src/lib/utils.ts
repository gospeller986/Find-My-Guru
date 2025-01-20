
export function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: "rgb(176,158,239)",
            width: 35, 
            height: 35,
            fontSize : 14
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}
