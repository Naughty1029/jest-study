export const forEach = (items:number[], callback:(param:number)=>number)=> {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

function callback(param:number) {
  console.log(param);
}