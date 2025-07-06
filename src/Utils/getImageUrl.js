const getImgByUrl = imageName=>{
  return new URL(`'../assets/serivesPhoto/${imageName}`, import.meta.url).href
}

export { getImgByUrl };