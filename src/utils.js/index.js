export const prepareUsersDataForItemRender = (items) => {
    const result = items.map((item) => {
        const { login, avatar_url } = item;
        return {
            title: login,
            imgUrl: avatar_url,
            linkUrl: `user/${login}`
        }
    })

    return result;
}

export const prepareReposDataForItemRender = (items) => {
    const result = items.map((item) => {
        const { name, description, html_url , language} = item;
        const img = language ? `${language.toLowerCase()}.png` : `placheholder.jpeg`;
        const imgUrl = `${process.env.PUBLIC_URL}/images/${img}`;

        return {
            title: name,
            linkUrl: html_url,
            description,
            imgUrl
        }
    })

    return result;
}