import Image from "next/image"

const UserCard = ({type}: {type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-adPurple even:bg-adYellow p-4 flex-1 min-w-[130px]">
            <div>
                <span></span>
                <Image src={"/more.png"} alt="" width={20} height={20}></Image>
            </div>
        </div>
    )
}

export default UserCard