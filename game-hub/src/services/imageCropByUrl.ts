const cropImageByUrl = (url: string, width: number, height: number) => {
    if(!url) return 'https://placehold.co/600x400?text=No+Image';

    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
}

export default cropImageByUrl;