const calculateAvgRating = reviews =>{
    const totalRating=reviews?.reduce((acc,item)=>{
       return acc+item.rating
    },0)
    //console.log(totalRating);
    //console.log(reviews);
 
    const avgRating=
    totalRating===0
     ? "" 
     : totalRating===1 
     ? totalRating 
     :(totalRating/reviews?.length).toFixed(1)
    // console.log(avgRating);
     return{
        totalRating,
        avgRating
      
    }
     
}

export default calculateAvgRating;