
export const required=(value)=>{
if(value){return undefined}else{return 'Field is required'}}

export const maxLenghtCreator=(maxLenght)=>(props)=>{
   if (props.length>maxLenght)return `Превышено количество симболов-${maxLenght} шт`;
return undefined;
            
  }