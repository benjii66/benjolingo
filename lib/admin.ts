import { auth } from "@clerk/nextjs"


const allowedIds = [

    "user_2eowwavDEuPU35o6AamTxSPkuLH",

];

export const isAdmin = () => {

    const { userId } = auth();

    if (!userId) return false;

    return allowedIds.indexOf(userId) !== -1;

}