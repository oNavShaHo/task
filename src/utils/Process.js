export function content(grouping,data,ordering)
{
  let ans=[];
  let users= data.users.map(user => ({ id: user.id, name: user.name ,available:user.available}));
  
  let uname={};
  let status=["Backlog","Todo","In progress","Done","Canceled"];
  let priority=[0,4,3,2,1];
  for(let i of users)
  {  
    uname[i.id]=[i.name,i.available];
  }

 // console.log(uname,"seeesh");

  if(grouping==='user')
  {
      //  console.log("useasdr");
        for(let i of users)
        {
          let dummy=[];
          data.tickets.forEach(element => { 
              // console.log(element,"heyo",i.id);
              if(i.id===element.userId)
              {
                let a= [element.userId,uname[element.userId][0],uname[element.userId][1],element.id,element.title,[element.tag],element.status,element.priority];
                // console.log(a);
                dummy.push(a)
              }
          });
          if(dummy.size===undefined)
          dummy.push([]);
          ans.push(dummy);
        }

  }

  else if(grouping==='status')
 {  
 // console.log('statadsdus');
  for(let i of status)
  {
    let dummy=[];
   // console.log(i);
    data.tickets.forEach(element => { 
        // console.log(element,"heyo",i.id);
        if(i===element.status)
        {
          let a= [element.userId,uname[element.userId][0],
          uname[element.userId][1],element.id,element.title,[element.tag],element.status,element.priority];
          dummy.push(a)
         // console.log(a,"asdasd");
        }
    });
    if(dummy.size===undefined)
    dummy.push([]);
    ans.push(dummy);
  }
 }
 else
 {  
 // console.log('priority');
  for(let i of priority)
  {
    let dummy=[];
    console.log(i);
    data.tickets.forEach(element => { 
        // console.log(element,"heyo",i.id);
        if(i===element.priority)
        {
          let a= [element.userId,uname[element.userId][0],
          uname[element.userId][1],element.id,element.title,[element.tag],element.status,element.priority];
          dummy.push(a)
         // console.log(a,"asdasdasdasd");
        }
    });
    if(dummy.size===undefined)
    dummy.push([]);
    ans.push(dummy);
  }
 }
 //console.log(ans[1],"before");

 
  
 // console.log(ans,"after");
   

  return ans;

}