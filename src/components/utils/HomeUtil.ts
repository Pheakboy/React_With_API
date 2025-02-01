export const fetchProduct = async (api:string) => {
    const response = await fetch (`${api}`);
    return response.json();
}