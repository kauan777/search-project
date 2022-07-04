interface UserProps{
    name: string;
    bio: string;
    image: string;
}

export function User({name, bio, image}: UserProps){
    return (
        <div className="flex overflow-hidden px-8 py-4 mx-0 items-center gap-4 hover:bg-gray-200 transition-coloors">
            <img className="inline-block h-12 w-12 rounded-full" src={image} alt={name} />
            <div className="flex flex-col">
                <b className="">{name}</b>
                <span>{bio}</span>
            </div>
        </div>
    );
}

