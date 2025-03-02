import { Album } from "./models";
export const Albums: Album[] = [];

for(let i:number = 1; i <=10; i++){
    Albums.push(
        {
        id:1,
        title:`Title: ${i}`,
        body: `Body: ${i}`,
    })
}