

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=JhxJNIQE32sJZZlhOVxr7zA0OoYIn7Cp`
    const resp = await fetch( url )
    const {data} = await resp.json()
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
}