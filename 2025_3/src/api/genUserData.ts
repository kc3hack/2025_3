import { UserData } from "./dataType";
function createUserData(
    id: number,
    name: string="noName",
    sand: number = 0,
    elevation: number = 0,
    money: number = 0,
    facility: number[] = [],
    tool_level: number = 1
): UserData {
    return {
        id,
        name,
        sand,
        elevation,
        money,
        facility,
        tool_level
    };
}
export { createUserData };