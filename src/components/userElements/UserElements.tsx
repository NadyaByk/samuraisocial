import avatar from './../../assets/avatars/Image20240527122725.jpg';

export const UserElement = () => {
    return (
        <div>
            <img src={avatar} alt={"User's photo"} />
            <p>
                <span>Анастасия Иванова</span>
                <span>@id234567890</span>
            </p>

        </div>
    )
}